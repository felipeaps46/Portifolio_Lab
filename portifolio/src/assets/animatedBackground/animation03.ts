import { Noise } from "noisejs";

let ctx: CanvasRenderingContext2D;
let field: number[][];
let w: number;
let h: number;
let size: number;
let columns: number;
let rows: number;
let zoom: number;
let noise: Noise;

export function startAnimation(canvas: HTMLCanvasElement) {
  size = 20;
  ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
  noise = new Noise(Math.random());

  function initField() {
    field = new Array(columns);
    for (let x = 0; x < columns; x++) {
      field[x] = new Array(rows);
      for (let y = 0; y < rows; y++) {
        field[x][y] = 0;
      }
    }
  }

  function calculateField(now: number) {
    for (let x = 0; x < columns; x++) {
      for (let y = 0; y < rows; y++) {
        const angle =
          noise.simplex3(x / zoom, y / zoom, now / 10000) * Math.PI * 2;
        field[x][y] = angle;
      }
    }
  }

  function reset() {
    zoom = Math.random() * 90 + 20;
    w = (canvas.width = window.innerWidth);
    h = (canvas.height = window.innerHeight);
    ctx.strokeStyle = "white";
    columns = Math.floor(w / size) + 2;
    rows = Math.floor(h / size) + 2;
    initField();
  }

  function clear() {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, w, h);
  }

  function drawField() {
    for (let x = 0; x < columns; x++) {
      for (let y = 0; y < rows; y++) {
        const angle = field[x][y];
        ctx.beginPath();
        const x1 = x * size;
        const y1 = y * size;
        ctx.moveTo(x1, y1);
        ctx.lineTo(
          x1 + Math.cos(angle) * size * 1.5,
          y1 + Math.sin(angle) * size * 1.5
        );
        ctx.stroke();
      }
    }
  }

  function draw(now: number) {
    requestAnimationFrame(draw);
    calculateField(now);
    clear();
    drawField();
  }

  reset();
  window.addEventListener("resize", reset);
  draw(1);
}
