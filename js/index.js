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

  body.appendChild(img);
}
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
  
    let x = item.getBoundingClientRect().left + item.clientWidth / 2;
    let y = item.getBoundingClientRect().top + item.clientHeight / 2;

    const event = window.event;

    let radian = Math.atan2(event.pageY - y, event.pageX - x);
    // 弧度转角度，数学问题不细说
    let rotation = radian * (180 / Math.PI);

    item.style.transform = `rotate(${rotation}deg)`;
  });
}
