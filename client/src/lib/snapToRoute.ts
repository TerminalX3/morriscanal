/**
 * Snap landmark coordinates to the nearest point on the canal route centerline.
 * This ensures all markers align with the actual drawn route.
 */

import { CANAL_ROUTE_COORDS } from "./canalRouteCoords";

interface Point {
  lat: number;
  lng: number;
}

/**
 * Calculate the distance between two points using the Haversine formula.
 * Returns distance in kilometers.
 */
function haversineDistance(p1: Point, p2: Point): number {
  const R = 6371; // Earth's radius in km
  const dLat = toRadians(p2.lat - p1.lat);
  const dLng = toRadians(p2.lng - p1.lng);
  
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRadians(p1.lat)) *
      Math.cos(toRadians(p2.lat)) *
      Math.sin(dLng / 2) *
      Math.sin(dLng / 2);
  
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

function toRadians(degrees: number): number {
  return degrees * (Math.PI / 180);
}

/**
 * Find the closest point on a line segment to a given point.
 */
function closestPointOnSegment(
  point: Point,
  segmentStart: Point,
  segmentEnd: Point
): Point {
  const A = point.lng - segmentStart.lng;
  const B = point.lat - segmentStart.lat;
  const C = segmentEnd.lng - segmentStart.lng;
  const D = segmentEnd.lat - segmentStart.lat;

  const dot = A * C + B * D;
  const lenSq = C * C + D * D;
  
  let param = -1;
  if (lenSq !== 0) {
    param = dot / lenSq;
  }

  let closestLng: number;
  let closestLat: number;

  if (param < 0) {
    closestLng = segmentStart.lng;
    closestLat = segmentStart.lat;
  } else if (param > 1) {
    closestLng = segmentEnd.lng;
    closestLat = segmentEnd.lat;
  } else {
    closestLng = segmentStart.lng + param * C;
    closestLat = segmentStart.lat + param * D;
  }

  return { lat: closestLat, lng: closestLng };
}

/**
 * Snap a landmark's coordinates to the nearest point on the canal route.
 */
export function snapToRoute(landmark: Point): Point {
  let minDistance = Infinity;
  let closestPoint: Point = landmark;

  // Check each segment of the route
  for (let i = 0; i < CANAL_ROUTE_COORDS.length - 1; i++) {
    const segmentStart = {
      lat: CANAL_ROUTE_COORDS[i][0],
      lng: CANAL_ROUTE_COORDS[i][1],
    };
    const segmentEnd = {
      lat: CANAL_ROUTE_COORDS[i + 1][0],
      lng: CANAL_ROUTE_COORDS[i + 1][1],
    };

    const pointOnSegment = closestPointOnSegment(
      landmark,
      segmentStart,
      segmentEnd
    );

    const distance = haversineDistance(landmark, pointOnSegment);

    if (distance < minDistance) {
      minDistance = distance;
      closestPoint = pointOnSegment;
    }
  }

  return closestPoint;
}
