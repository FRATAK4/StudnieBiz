import { useEffect, useRef } from "react";
import L from "leaflet";

// Poland center and zoom for fitting all markers
const POLAND_CENTER = [51.9, 19.4];
const DEFAULT_ZOOM = 6;

// Custom circle marker factory
function createMarker(map, loc) {
    const isHQ = loc.isHQ;
    const marker = L.circleMarker([loc.lat, loc.lng], {
        radius: isHQ ? 9 : 6,
        fillColor: isHQ ? "#00b4d8" : "#1a6fb5",
        color: "#fff",
        weight: isHQ ? 2.5 : 1.5,
        fillOpacity: isHQ ? 1 : 0.85,
    });

    const label = isHQ ? `<strong>${loc.name}</strong> (siedziba)` : loc.name;
    marker.bindTooltip(label, {
        direction: "top",
        offset: [0, isHQ ? -10 : -7],
        className: "map-tooltip",
    });

    // Pulsing ring for HQ
    if (isHQ) {
        const pulse = L.circleMarker([loc.lat, loc.lng], {
            radius: 16,
            fillColor: "#00b4d8",
            color: "#00b4d8",
            weight: 1.5,
            fillOpacity: 0.15,
            opacity: 0.4,
            interactive: false,
        });
        pulse.addTo(map);
    }

    return marker;
}

export function PolandMap({ locations }) {
    const containerRef = useRef(null);
    const mapRef = useRef(null);

    useEffect(() => {
        if (mapRef.current) return; // already initialized

        const map = L.map(containerRef.current, {
            center: POLAND_CENTER,
            zoom: DEFAULT_ZOOM,
            zoomControl: true,
            scrollWheelZoom: false,
            attributionControl: true,
        });

        // Tile layer — CARTO Voyager (Polish labels for Poland)
        L.tileLayer("https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png", {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> &copy; <a href="https://carto.com/">CARTO</a>',
            subdomains: "abcd",
            maxZoom: 12,
            minZoom: 5,
        }).addTo(map);

        // Add markers
        const markers = locations.map((loc) => createMarker(map, loc));
        const group = L.featureGroup(markers).addTo(map);

        // Fit bounds with padding
        map.fitBounds(group.getBounds().pad(0.08));

        mapRef.current = map;

        return () => {
            map.remove();
            mapRef.current = null;
        };
    }, [locations]);

    return (
        <div
            ref={containerRef}
            className="w-full rounded-xl overflow-hidden border border-light-gray"
            style={{ height: "min(520px, 65vw)", minHeight: "320px" }}
        />
    );
}
