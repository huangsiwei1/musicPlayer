export default () => {
  var html = document.documentElement,
    // 获取viewport元数据标签
    vp = html.querySelector('meta[name="viewport"]'),
    // 声明d与rem
    d = 1, rem = 100

  // viewport存在则使用普通方案
  if (vp) {
    var scale = vp.getAttribute('content').match(/initial\-scale=([\d\.]+)/)[1]
    d = 1 / scale
  } else {
    // 1 获取dpr
    d = window.devicePixelRatio
    // 2 计算缩放比
    var scale = 1 / d
    // 3 创建并设置viewport
    vp = document.createElement('meta')
    vp.setAttribute('name', 'viewport')
    vp.setAttribute('content', 'width=device-width,initial-scale=' + scale + ',user-scalable=no')
    // 4 把viewport添加到head中
    html.firstElementChild.appendChild(vp)
  }

  var layout = html.clientWidth || document.body.clientWidth

  /*
    目的： 把HTML的字体大小设置为100px
    d 的值进行判断  >1 /7.5   3.75
  */

  html.style.fontSize = layout / (d > 1 ? 7.5 : 3.75) + 'px'
  // 修改body字体大小为12px
  document.addEventListener('DOMContentLoaded', function () {
    document.body.style.fontSize = '12px'
  })
}
