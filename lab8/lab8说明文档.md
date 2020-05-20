# lab8说明文档

#### 全局变量

```javascript
let  leftArrow = document.getElementsByClassName('arrow')[0];
let rightArrow = document.getElementsByClassName('arrow')[1];
let  wrap = document.getElementsByClassName('wrap')[0];
let imgs = document.querySelectorAll('.buttons span');
let carouselContainer = document.getElementsByClassName('container')[0];
let interval = null;
let td = document.querySelectorAll("td");
```

#### 第一题：

```javascript
leftArrow.onclick = function () {

    if(wrap.style.left === '0px'){
        imgs[0].classList.remove('on');
        wrap.style.left = '-2400px';
        imgs[4].classList.add('on');
    }else {
        imgs[Math.abs(Number.parseInt(wrap.style.left))/600].classList.remove('on');
        imgs[Math.abs(Number.parseInt(wrap.style.left) + 600)/600].classList.add('on');
        wrap.style.left = (Number.parseInt(wrap.style.left) + 600) + 'px';
    }
};

rightArrow.onclick = function () {
    if(wrap.style.left === '-2400px'){
        imgs[4].classList.remove('on');
        wrap.style.left = '0px';
        imgs[0].classList.add('on');
    }else {
        imgs[Math.abs(Number.parseInt(wrap.style.left))/600].classList.remove('on');
        imgs[Math.abs(Number.parseInt(wrap.style.left) - 600)/600].classList.add('on');
        wrap.style.left = (Number.parseInt(wrap.style.left) - 600) + 'px';
    }
}
```

主要思路就是在点击后更改left的值

#### 第二题：

```javascript
carouselContainer.onmouseover = function () {
    clearInterval(interval);
};

carouselContainer.onmouseout = function () {
    interval = setInterval(function () {
        rightArrow.click();
    },2000);
};

document.body.onload = function () {
    interval = setInterval(function () {
        rightArrow.click();
    } ,2000);
}
```

主要就是对一个全局的interval变量进行控制。有思考过要不要在onmouseout中clearInterval(interval)，但后来觉得这个事件必然是在onmouseover之后才能发生，所以并没有加这个语句。

#### 第三题

```javascript
function imgsClickHandler(event) {
    for(let item of imgs){
        item.className = '';
    }
    event.target.classList.add('on');
    let index = event.target.innerText - 1;
    wrap.style.left = (-600) * index +'px';
}


for(let item of imgs){
    item.onclick = imgsClickHandler;
}
```

思路：先将有on的都清除，再加上

#### 第四题

```javascript

for(let item of td) {
    item.contentEditable = 'true';
    item.style.fontWeight = 'bold';
    item.onclick = tdClickHandler;
}

function tdClickHandler(event){

    let tempObj = window.getSelection();
    // let range = document.createRange();
    // range.setStart(event.target,0);
    // range.collapse(true);
    // tempObj.removeAllRanges();
    // tempObj.addRange(range);这是第二个方法

    tempObj.collapse(event.target,0);
}
```

