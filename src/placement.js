export const PLACEMENT_TYPES = {
  LAND: "land",
  WATER: "water",
  ANY: "any",
  TRACKSIDE: "trackside"
};

export function towerPlacementType(tower) {
  return tower?.placement || PLACEMENT_TYPES.LAND;
}

export function pointInsideZone(x, y, zone, width, height) {
  return (
    x >= zone.x * width &&
    x <= (zone.x + zone.w) * width &&
    y >= zone.y * height &&
    y <= (zone.y + zone.h) * height
  );
}

export function pointInsideAnyZone(x, y, zones, width, height) {
  return zones.some((zone) =>
    pointInsideZone(x, y, zone, width, height)
  );
}

export function isWaterLocation(x, y, map, width, height) {
  if (!map?.water) {
    return false;
  }

  return pointInsideAnyZone(
    x,
    y,
    map.waterZones || [],
    width,
    height
  );
}

export function canPlaceAt({
  x,
  y,
  map,
  width,
  height,
  path,
  towerConfig,
  occupiedUnits,
  minimumGap = 20
}) {
  const type =
    towerPlacementType(towerConfig);

  const water =
    isWaterLocation(
      x,
      y,
      map,
      width,
      height
    );

  if (type === PLACEMENT_TYPES.WATER && !water) {
    return {
      ok: false,
      reason: "requires-water"
    };
  }

  if (
    type !== PLACEMENT_TYPES.WATER &&
    water
  ) {
    return {
      ok: false,
      reason: "water-location"
    };
  }

  if (
    path &&
    path.isPointNearPath(x, y, 8)
  ) {
    return {
      ok: false,
      reason: "track"
    };
  }

  const legalZone =
    type === PLACEMENT_TYPES.WATER
      ? water
      : type === PLACEMENT_TYPES.TRACKSIDE
        ? true
        : pointInsideAnyZone(
            x,
            y,
            map.buildZones || [],
            width,
            height
          );

  if (!legalZone) {
    return {
      ok: false,
      reason: "outside-build-zone"
    };
  }

  const occupied =
    occupiedUnits.some(
      (unit) =>
        Math.hypot(
          x - unit.x,
          y - unit.y
        ) < minimumGap
    );

  if (occupied) {
    return {
      ok: false,
      reason: "occupied"
    };
  }

  return {
    ok: true,
    reason: null
  };
}