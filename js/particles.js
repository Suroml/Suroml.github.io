(function() {
  var canvas = document.createElement('canvas');
  canvas.id = 'particles-bg';
  canvas.style.cssText = 'position:fixed; top:0; left:0; width:100%; height:100%; pointer-events:none; z-index:1;';
  document.body.prepend(canvas);

  var ctx = canvas.getContext('2d');
  var particles = [];
  var particleCount = 200; // 星星数量
  var w, h;

  function resize() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resize);
  resize();

  // 初始化星星
  for (var i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 2 + 0.5,        // 半径 0.5~2.5 像素，很小
      baseR: Math.random() * 2 + 0.5,    // 记录原始半径，用于闪烁
      vx: (Math.random() - 0.5) * 0.3,   // 缓慢移动
      vy: (Math.random() - 0.5) * 0.3,
      opacity: Math.random() * 0.8 + 0.2, // 透明度
      phase: Math.random() * Math.PI * 2  // 随机相位，闪烁用
    });
  }

  function draw() {
    ctx.clearRect(0, 0, w, h);
    var time = Date.now() * 0.001; // 时间用于周期性闪烁
    for (var i = 0; i < particles.length; i++) {
      var p = particles[i];
      // 半径随相位和时间正弦变化，产生自然闪烁
      var flicker = 0.5 + 0.5 * Math.sin(time * 3 + p.phase); // 0~1之间波动
      var currentR = p.baseR * (0.6 + 0.4 * flicker); // 半径在 60%~100% 原半径间变化

      ctx.beginPath();
      ctx.arc(p.x, p.y, currentR, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(255,255,255,' + (p.opacity * (0.7 + 0.3 * flicker)) + ')';
      ctx.fill();

      // 移动
      p.x += p.vx;
      p.y += p.vy;

      // 边界反弹
      if (p.x < 0 || p.x > w) p.vx *= -1;
      if (p.y < 0 || p.y > h) p.vy *= -1;
    }
    requestAnimationFrame(draw);
  }
  draw();
})();