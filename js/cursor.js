// 鼠标跟随实心圆 + 灵动缓动（基于 left/top，稳定）
(function() {
    var cursor = document.createElement('div');
    cursor.id = 'custom-cursor';
    cursor.style.cssText = `
        position: fixed;
        width: 20px;
        height: 20px;
        background: rgba(255, 255, 255, 0.4);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        box-shadow: 0 0 8px rgba(255,255,255,0.6);
        will-change: left, top;
    `;
    document.body.appendChild(cursor);

    var mouseX = 0, mouseY = 0;   // 鼠标实际坐标（中心点）
    var curX = 0, curY = 0;       // 圆圈当前坐标

    document.addEventListener('mousemove', function(e) {
        // 圆圈中心对准鼠标箭头，所以不需要偏移
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function animate() {
        var easing = 0.25;
        curX += (mouseX - curX) * easing;
        curY += (mouseY - curY) * easing;
        
        // 使用 left/top 并偏移自身一半宽高，使中心对准鼠标
        cursor.style.left = (curX - 10) + 'px';
        cursor.style.top  = (curY - 10) + 'px';
        
        requestAnimationFrame(animate);
    }
    animate();
})();