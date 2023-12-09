// PolylineDecoderService.js
import polylineCodec from '@googlemaps/polyline-codec';

function decodePolyline(encodedPolyline) {
  return polylineCodec.decode(encodedPolyline, 6); // Specify precision
}

export default decodePolyline;
