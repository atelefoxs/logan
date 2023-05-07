// 获取 body 备用
let body = document.querySelector("body");

// 创建多少个 img 标签
let count = 28;
// 循环生成多个 img 弓箭图片元素，并放进 body 元素里面
for (let i = 0; i < count; i++) {
  let img = document.createElement("img");
  img.className = "archer";
  img.src = "./image/element-1.png";

  // 每个图片都给一个随机的定位和大小
  img.style.left = Math.floor(Math.random() * 99) + "vw";
  img.style.top = Math.floor(Math.random() * 99) + "vh";
  img.style.width = randomSize(5, 20) + "vmin";

  // 把图片放进 body 里面
  body.appendChild(img);
}
// 循环生成多个 img 弓箭图片元素，并放进 body 元素里面
for (let i = 0; i < count; i++) {
  let img = document.createElement("img");
  img.className = "archer";
  img.src = "./image/element-2.png";

  // 每个图片都给一个随机的定位和大小
  img.style.left = Math.floor(Math.random() * 99) + "vw";
  img.style.top = Math.floor(Math.random() * 99) + "vh";
  img.style.width = randomSize(5, 20) + "vmin";

  // 把图片放进 body 里面
  body.appendChild(img);
}
/**
 * 生成随机大小值，在最小，最大中间
 * @param {*} min 最小值
 * @param {*} max 最大值
 * @returns
 */
function randomSize(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// 添加鼠标移动的监听事件，并执行箭头跟随鼠标转动
body.addEventListener("mousemove", rotateArcher);

function rotateArcher() {
  // 获取到所有的弓箭图片元素
  let archer = document.querySelectorAll(".archer");
  // 循环设置每个元素的旋转量
  archer.forEach((item) => {
    /**
     * item.getBoundingClientRect().left 元素盒子距离窗口 左边距离
     * item.getBoundingClientRect().top 元素盒子距离窗口 上边距离
     *
     * item.clientWidth 元素内部的宽度
     * item.clientHeight 元素内部的高度
     *
     * 元素中心 x 坐标 = 元素左边距离窗口左边距离 + 元素宽度的一半
     * 元素中心 y 坐标 = 元素上边距离窗口上边距离 + 元素高度的一半
     */
    let x = item.getBoundingClientRect().left + item.clientWidth / 2;
    let y = item.getBoundingClientRect().top + item.clientHeight / 2;

    // 鼠标事件返回的值，有很多，只要坐标
    const event = window.event;

    /**
     * event.pageX 鼠标 x 坐标
     * event.pageY 鼠标 y 坐标
     *
     * Math.atan2(y,x)
     * 返回从原点(0,0)到(x,y)点的线段与 x 轴正方向之间的平面角度(弧度值)
     */
    let radian = Math.atan2(event.pageY - y, event.pageX - x);
    // 弧度转角度，数学问题不细说
    let rotation = radian * (180 / Math.PI);

    // 最后把算出来的旋转角度赋值给元素的 css 进行旋转
    item.style.transform = `rotate(${rotation}deg)`;
  });
}
