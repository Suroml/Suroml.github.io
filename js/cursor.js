// 鼠标跟踪圆圈
document.addEventListener('DOMContentLoaded', function() {
  var cursor = document.createElement('div');
  cursor.style.cssText = 'width:20px;height:20px;border:2px solid #000;border-radius:50%;position:fixed;pointer-events:none;z-index:9999;transition:transform 0.1s ease;';
  document.body.appendChild(cursor);
  document.addEventListener('mousemove', function(e) {
    cursor.style.transform = 'translate(' + (e.clientX - 10) + 'px,' + (e.clientY - 10) + 'px)';
  });
});