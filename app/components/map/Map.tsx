import React, { useEffect, useRef, useState } from 'react'

// Dynamic import to avoid SSR issues
let L: any = null
let leafletLoaded = false

const loadLeaflet = async () => {
  if (typeof window === 'undefined' || leafletLoaded) return L
  
  const leaflet = await import('leaflet')
  L = leaflet.default
  await import('leaflet/dist/leaflet.css')
  
  // Fix for default markers in Leaflet with Vite
  delete (L.Icon.Default.prototype as any)._getIconUrl
  L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
  })
  
  leafletLoaded = true
  return L
}

interface MapProps {
  center?: [number, number]
  zoom?: number
  height?: string
  className?: string
  markers?: Array<{
    position: [number, number]
    popup?: string
    title?: string
  }>
}

export default function Map({ 
  center = [14.6760, 121.0437],
  zoom = 13,
  className = '',
  markers = []
}: MapProps) {
  const mapRef = useRef<HTMLDivElement>(null)
  const mapInstanceRef = useRef<any>(null)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    // Set client-side flag
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (!isClient || !mapRef.current || mapInstanceRef.current) return

    const initializeMap = async () => {
      const Leaflet = await loadLeaflet()
      if (!Leaflet || !mapRef.current) return

      // Initialize the map
      const map = Leaflet.map(mapRef.current).setView(center, zoom)
      mapInstanceRef.current = map

      // Add simple CartoDB tiles for a cleaner look
      Leaflet.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
        attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors © <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: 'abcd',
        maxZoom: 19,
      }).addTo(map)

      // Add markers if provided
      markers.forEach(({ position, popup, title }) => {
        const marker = Leaflet.marker(position).addTo(map)
        
        if (popup) {
          marker.bindPopup(popup)
        }
        
        if (title) {
          marker.bindTooltip(title)
        }
      })
    }

    initializeMap()

    // Cleanup function
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove()
        mapInstanceRef.current = null
      }
    }
  }, [isClient, center, zoom, markers])

  // Show loading state during SSR or while Leaflet loads
  if (!isClient) {
    return (
      <div 
        className={`w-full flex items-center justify-center bg-gray-50 ${className}`}
        style={{ height: '100%' }}
      >
        <div className="text-gray-400 text-sm">Loading...</div>
      </div>
    )
  }

  return (
    <div 
      ref={mapRef} 
      className={`w-full rounded-lg overflow-hidden border border-gray-200 ${className}`}
      style={{ height: '100%' }}
    />
  )
}
