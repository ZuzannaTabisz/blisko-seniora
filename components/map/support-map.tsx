"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import type { LeafletMouseEvent, Map as LeafletMap } from "leaflet"
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet"
import L from "leaflet"
import { MapPin, Navigation, Phone, Clock, Filter } from "lucide-react"
import { locations, locationTypeLabels, type Location, type LocationType } from "@/data/locations"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const typeColors: Record<LocationType, string> = {
  spolecznosc: "#2a8b74",
  aktywnosc: "#6aa84f",
  psychologia: "#4a7ea8",
  kultura: "#8a5fb3",
  wolontariat: "#d97757",
  opiekun: "#c27a3a",
}

function createIcon(color: string) {
  // A minimal custom pin as a divIcon with SVG
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 42" width="32" height="42">
      <defs>
        <filter id="s" x="-20%" y="-10%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="2" flood-color="rgba(0,0,0,0.25)"/>
        </filter>
      </defs>
      <path filter="url(#s)" d="M16 0c8.8 0 16 7 16 15.7 0 11-16 26.3-16 26.3S0 26.7 0 15.7C0 7 7.2 0 16 0z" fill="${color}"/>
      <circle cx="16" cy="15.5" r="5.5" fill="white"/>
    </svg>`
  return L.divIcon({
    html: svg,
    className: "bs-marker",
    iconSize: [32, 42],
    iconAnchor: [16, 42],
    popupAnchor: [0, -34],
  })
}

function FlyTo({ target }: { target: { lat: number; lng: number; zoom?: number } | null }) {
  const map = useMap()
  useEffect(() => {
    if (target) {
      map.flyTo([target.lat, target.lng], target.zoom ?? 13, { duration: 0.8 })
    }
  }, [target, map])
  return null
}

function haversine(a: { lat: number; lng: number }, b: { lat: number; lng: number }) {
  const R = 6371
  const dLat = ((b.lat - a.lat) * Math.PI) / 180
  const dLng = ((b.lng - a.lng) * Math.PI) / 180
  const la1 = (a.lat * Math.PI) / 180
  const la2 = (b.lat * Math.PI) / 180
  const h = Math.sin(dLat / 2) ** 2 + Math.cos(la1) * Math.cos(la2) * Math.sin(dLng / 2) ** 2
  return 2 * R * Math.asin(Math.sqrt(h))
}

export function SupportMap() {
  const [activeTypes, setActiveTypes] = useState<Set<LocationType>>(new Set(Object.keys(locationTypeLabels) as LocationType[]))
  const [target, setTarget] = useState<{ lat: number; lng: number; zoom?: number } | null>(null)
  const [selected, setSelected] = useState<Location | null>(null)
  const [userPos, setUserPos] = useState<{ lat: number; lng: number } | null>(null)
  const [loadingGeo, setLoadingGeo] = useState(false)
  const mapRef = useRef<LeafletMap | null>(null)

  const filtered = useMemo(
    () => locations.filter((l) => activeTypes.has(l.type)),
    [activeTypes],
  )

  const withDistance = useMemo(() => {
    if (!userPos) return filtered.map((l) => ({ ...l, distance: null as number | null }))
    return filtered
      .map((l) => ({ ...l, distance: haversine(userPos, l) }))
      .sort((a, b) => (a.distance! - b.distance!))
  }, [filtered, userPos])

  const toggleType = (t: LocationType) => {
    setActiveTypes((prev) => {
      const next = new Set(prev)
      if (next.has(t)) next.delete(t)
      else next.add(t)
      if (next.size === 0) return new Set(Object.keys(locationTypeLabels) as LocationType[])
      return next
    })
  }

  const findNearMe = () => {
    if (!navigator.geolocation) return
    setLoadingGeo(true)
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const here = { lat: pos.coords.latitude, lng: pos.coords.longitude }
        setUserPos(here)
        setTarget({ ...here, zoom: 10 })
        setLoadingGeo(false)
      },
      () => {
        // Fallback: center on Poland
        setTarget({ lat: 52.0, lng: 19.4, zoom: 6 })
        setLoadingGeo(false)
      },
      { timeout: 8000 },
    )
  }

  const goToLocation = (l: Location) => {
    setTarget({ lat: l.lat, lng: l.lng, zoom: 14 })
    setSelected(l)
  }

  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
      <div className="grid gap-6 lg:grid-cols-[340px_1fr]">
        <aside className="flex flex-col gap-4">
          <div className="rounded-2xl border border-border bg-card p-5">
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-muted-foreground" />
              <h2 className="font-display text-lg font-semibold">Filtruj miejsca</h2>
            </div>
            <p className="mt-1 text-sm text-muted-foreground">Wybierz rodzaje wsparcia, które Cię interesują.</p>

            <div className="mt-4 flex flex-col gap-2">
              {(Object.keys(locationTypeLabels) as LocationType[]).map((t) => {
                const active = activeTypes.has(t)
                return (
                  <label
                    key={t}
                    className={cn(
                      "flex cursor-pointer items-center justify-between gap-3 rounded-xl border px-3 py-2 text-sm transition-colors",
                      active
                        ? "border-primary/40 bg-primary/5"
                        : "border-border bg-background hover:bg-muted",
                    )}
                  >
                    <span className="inline-flex items-center gap-2.5">
                      <span
                        className="inline-block h-3 w-3 rounded-full"
                        style={{ backgroundColor: typeColors[t] }}
                      />
                      {locationTypeLabels[t]}
                    </span>
                    <input
                      type="checkbox"
                      className="h-4 w-4 accent-primary"
                      checked={active}
                      onChange={() => toggleType(t)}
                    />
                  </label>
                )
              })}
            </div>

            <Button
              onClick={findNearMe}
              disabled={loadingGeo}
              className="mt-5 w-full rounded-full"
            >
              <Navigation className="h-4 w-4" />
              {loadingGeo ? "Szukam lokalizacji…" : "Blisko mnie"}
            </Button>
            <p className="mt-2 text-xs text-muted-foreground">
              Potrzebujemy zgody na lokalizację — nie przechowujemy jej.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-card p-5">
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Miejsca {userPos ? "najbliższe" : "na mapie"}
            </h3>
            <ul className="mt-3 flex max-h-[420px] flex-col gap-1 overflow-y-auto pr-1">
              {withDistance.slice(0, 10).map((l) => (
                <li key={l.id}>
                  <button
                    onClick={() => goToLocation(l)}
                    className="flex w-full items-start gap-3 rounded-xl p-2.5 text-left hover:bg-muted"
                  >
                    <span
                      className="mt-1 inline-block h-2.5 w-2.5 flex-none rounded-full"
                      style={{ backgroundColor: typeColors[l.type] }}
                    />
                    <span className="min-w-0 flex-1">
                      <span className="block truncate text-sm font-semibold">{l.name}</span>
                      <span className="block truncate text-xs text-muted-foreground">
                        {l.city}
                        {l.distance != null && ` · ${l.distance.toFixed(0)} km`}
                      </span>
                    </span>
                  </button>
                </li>
              ))}
              {withDistance.length === 0 && (
                <li className="rounded-lg border border-dashed border-border p-3 text-center text-sm text-muted-foreground">
                  Nic nie pasuje do wybranych filtrów.
                </li>
              )}
            </ul>
          </div>
        </aside>

        <div className="relative overflow-hidden rounded-2xl border border-border bg-muted" style={{ minHeight: 560 }}>
          <MapContainer
            center={[52.0, 19.4]}
            zoom={6}
            scrollWheelZoom={false}
            style={{ height: "100%", width: "100%", minHeight: 560, borderRadius: "1rem" }}
            ref={(m) => {
              if (m) mapRef.current = m
            }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <FlyTo target={target} />
            {filtered.map((loc) => (
              <Marker
                key={loc.id}
                position={[loc.lat, loc.lng]}
                icon={createIcon(typeColors[loc.type])}
                eventHandlers={{
                  click: (_e: LeafletMouseEvent) => setSelected(loc),
                }}
              >
                <Popup>
                  <div className="min-w-[220px]">
                    <p className="text-[11px] font-semibold uppercase tracking-wider" style={{ color: typeColors[loc.type] }}>
                      {locationTypeLabels[loc.type]}
                    </p>
                    <p className="mt-0.5 font-display text-base font-semibold">{loc.name}</p>
                    <p className="mt-1 flex items-start gap-1.5 text-xs text-muted-foreground">
                      <MapPin className="mt-0.5 h-3.5 w-3.5 flex-none" />
                      {loc.address}
                    </p>
                    <p className="mt-2 text-xs leading-relaxed">{loc.description}</p>
                    {loc.phone && (
                      <p className="mt-2 inline-flex items-center gap-1.5 text-xs">
                        <Phone className="h-3.5 w-3.5" />
                        {loc.phone}
                      </p>
                    )}
                    {loc.hours && (
                      <p className="mt-1 inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                        <Clock className="h-3.5 w-3.5" />
                        {loc.hours}
                      </p>
                    )}
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>

      {selected && (
        <div className="mt-6 flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 md:flex-row md:items-center md:justify-between">
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: typeColors[selected.type] }}>
              {locationTypeLabels[selected.type]}
            </p>
            <p className="mt-0.5 font-display text-xl font-semibold">{selected.name}</p>
            <p className="mt-0.5 text-sm text-muted-foreground">{selected.address}</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {selected.phone && (
              <a
                href={`tel:${selected.phone.replace(/\s/g, "")}`}
                className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-4 py-2 text-sm font-medium hover:bg-muted"
              >
                <Phone className="h-3.5 w-3.5" />
                {selected.phone}
              </a>
            )}
            <a
              href={`https://www.openstreetmap.org/?mlat=${selected.lat}&mlon=${selected.lng}#map=17/${selected.lat}/${selected.lng}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
            >
              <Navigation className="h-3.5 w-3.5" />
              Otwórz w mapach
            </a>
          </div>
        </div>
      )}
    </div>
  )
}
