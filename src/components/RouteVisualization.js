// RouteVisualization.js
import React from 'react';
import { useSelector } from 'react-redux';
import { MapContainer, TileLayer, Polyline } from 'react-leaflet';

function RouteVisualization() {
  const routePolyline = useSelector((state) => state.route.polyline);

  return (
    <div
      style={{
        marginBottom: '20px',
        height: '400px',
        position: 'relative',
        borderRadius: '5px',
        overflow: 'hidden',
      }}
    >
      <MapContainer
        center={[51.505, -0.09]}
        zoom={13}
        style={{ height: '100%', width: '100%', position: 'absolute', top: 0, left: 0 }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {routePolyline && <Polyline pathOptions={{ color: 'blue' }} positions={routePolyline} />}
      </MapContainer>
    </div>
  );
}

export default RouteVisualization;
