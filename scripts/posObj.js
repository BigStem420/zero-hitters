function posObj(sheet, id, row, col, x, y) {
  var rtl = false;
  var sheetElement = document.getElementById(sheet);
  if (!sheetElement) {
    sheetElement = document.getElementById(sheet + '-grid-container');
  }
  if (sheetElement) {
    rtl = sheetElement.getAttribute('dir') == 'rtl';
  }
  var r = document.getElementById(sheet + 'R' + row);
  var c = document.getElementById(sheet + 'C' + col);
  if (r && c) {
    var objElement = document.getElementById(id);
    var s = objElement.style;
    var t = y;
    while (r && r != sheetElement) {
      t += r.offsetTop;
      r = r.offsetParent;
    }
    var offsetX = x;
    while (c && c != sheetElement) {
      offsetX += c.offsetLeft;
      c = c.offsetParent;
    }
    if (rtl) {
      offsetX -= objElement.offsetWidth;
    }
    s.left = offsetX + 'px';
    s.top = t + 'px';
    s.display = 'block';
    s.border = '1px solid #000000';
  }
};
function posObjs() {};
posObjs();
