// 鼠标跟踪圆圈（白色，无延迟）
(function() {
  var cursor = document.createElement('div');
  cursor.id = 'custom-cursor';
  cursor.style.cssText = `
    position: fixed;
    width: 24px;
    height: 24px;
    border: 2px solid rgba(255,255,255,0.8);
    border-radius: 50%;
    pointer-events: none;
    z-index: 9999;
    transform: translate(-50%, -50%);
    box-shadow: 0 0 6px rgba(255,255,255,0.3);
    transition: none;
  `;
  document.body.appendChild(cursor);

  let mouseX = 0, mouseY = 0;
  document.addEventListener('mousemove', function(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursor.style.left = mouseX + 'px';
    cursor.style.top = mouseY + 'px';
  });
})();