import { clamp, distance, lerp } from "./math.js";

export class RoutePath {
  constructor(points, width = 46) {
    this.points = points.map(([x, y]) => ({ x, y }));
    this.width = width;
    this.segments = [];
    this.totalLength = 0;
    this.rebuild();
  }

  rebuild() {
    this.segments.length = 0;
    this.totalLength = 0;

    for (let index = 0; index < this.points.length - 1; index += 1) {
      const a = this.points[index];
      const b = this.points[index + 1];
      const length = distance(a.x, a.y, b.x, b.y);

      this.segments.push({
        a,
        b,
        length,
        start: this.totalLength,
        end: this.totalLength + length
      });

      this.totalLength += length;
    }
  }

  at(progress) {
    const target = clamp(progress, 0, 1) * this.totalLength;
    const segment = this.segments.find((item) => target <= item.end) || this.segments.at(-1);

    if (!segment) {
      return { x: 0, y: 0, progress: 0, heading: 0 };
    }

    const local = segment.length === 0
      ? 0
      : clamp((target - segment.start) / segment.length, 0, 1);

    return {
      x: lerp(segment.a.x, segment.b.x, local),
      y: lerp(segment.a.y, segment.b.y, local),
      progress: clamp(progress, 0, 1),
      heading: Math.atan2(segment.b.y - segment.a.y, segment.b.x - segment.a.x)
    };
  }

  move(progress, units) {
    return clamp(progress + units / Math.max(this.totalLength, 1), 0, 1);
  }

  distanceToPoint(x, y) {
    let best = {
      distance: Infinity,
      progress: 0,
      x: 0,
      y: 0
    };

    for (const segment of this.segments) {
      const vx = segment.b.x - segment.a.x;
      const vy = segment.b.y - segment.a.y;
      const lengthSquared = vx * vx + vy * vy;

      const local = clamp(
        ((x - segment.a.x) * vx + (y - segment.a.y) * vy) /
          Math.max(lengthSquared, 1),
        0,
        1
      );

      const px = segment.a.x + vx * local;
      const py = segment.a.y + vy * local;
      const gap = distance(x, y, px, py);

      if (gap < best.distance) {
        best = {
          distance: gap,
          progress: (segment.start + segment.length * local) / Math.max(this.totalLength, 1),
          x: px,
          y: py
        };
      }
    }

    return best;
  }

  isPointNearPath(x, y, extra = 0) {
    return this.distanceToPoint(x, y).distance <= this.width / 2 + extra;
  }

  draw(ctx) {
    if (this.points.length < 2) {
      return;
    }

    ctx.save();
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.lineWidth = this.width;
    ctx.strokeStyle = "#26333c";
    ctx.beginPath();
    ctx.moveTo(this.points[0].x, this.points[0].y);

    for (let index = 1; index < this.points.length; index += 1) {
      ctx.lineTo(this.points[index].x, this.points[index].y);
    }

    ctx.stroke();

    ctx.lineWidth = this.width * 0.68;
    ctx.strokeStyle = "#435b66";
    ctx.stroke();
    ctx.restore();
  }
}
