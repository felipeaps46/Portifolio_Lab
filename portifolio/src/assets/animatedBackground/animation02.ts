export function startAnimation(canvas: HTMLCanvasElement) {
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const width = canvas.width = window.innerWidth;
  const height = canvas.height = window.innerHeight;

  const starCount = 400;
  const maxTime = 30;

  // Criar estrelas
  const stars = Array.from({ length: starCount }, () => {
    return {
      x: Math.random() * width,
      y: Math.random() * height,
      speed: (Math.random() * maxTime + 1) / 10, // velocidade
      size: Math.random() * 2 + 1
    };
  });

  function animate() {
    if (!ctx) return;
    ctx.clearRect(0, 0, width, height);

    stars.forEach((star) => {
      ctx.fillStyle = "white";
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
      ctx.fill();

      // mover estrela
      star.x -= star.speed;
      if (star.x < 0) {
        star.x = width;
        star.y = Math.random() * height;
      }
    });

    requestAnimationFrame(animate);
  }

  animate();
}

