//1. 获取url中名为name的参数。在URL输入框输入url，点击同行submit按钮后，其中的参数名为name的参数值需要出现在Argument value输入框内。
//如果没有名为name的参数，那么可以在Argument value输入框出现任何值。
//请仅在showWindowHref函数内写代码。

//提示：url指代 （若干字符串）?（参数名1）=（参数1值）&（参数2）=（参数2值）...  这样的字符串。具体可以上网查找。例如：hjsdghgbj?name=666666&group=876。
//url、url_submit、url_result指代对应id的三个对象，其中url和url_result可以通过url.value或者url_result.value获得值。
//字符数组处理可以使用相关函数
let url = document.getElementById("url");
let url_submit = document.getElementById("url_submit");
let url_result = document.getElementById("url-result");
url_submit.addEventListener('click',showWindowHref);
function showWindowHref(){
    let currUrlValue = url.value;
    //先处理未经输入的情况
    if(currUrlValue === null || currUrlValue.trim() === ''){
        url_result.value = '嘿！为什么不输入？';
        return;
    }
    //如果不存在'？'
    let startIndex = currUrlValue.indexOf('?');
    if(startIndex === -1){
        url_result.value = '嘿！为什么不输入url？';
        return;
    }
    let subString = currUrlValue.substring(startIndex + 1);
    let arr = subString.split('&');
    //'？'后什么都没有
    if(arr.length === 0){
        url_result.value = '嘿！找不到name';
        return;
    } else {
        for(let i = 0; i < arr.length; i++){
            if(arr[i].substring(0,arr[i].indexOf('=')) === 'name'){
                url_result.value = arr[i].substring(arr[i].indexOf('=') + 1);
                return;
            }
        }
    }


}
//2. 每隔五秒运行一次函数直到某一整分钟停止，比如从20:55:45运行到20:56:00停止；或者运行10次，先到的为准。从1开始每过五秒，输入框内数值翻倍。初始值为1。
//注意：你可以在函数 timeTest内部 和 timeTest外部 写代码使得该功能实现。
//与设置时间相关的函数可以上网查找。

//提示：mul为html中id为"mul"的元素对象，可直接通过mul.value获得其内的输入值。
let mul = document.getElementById("mul");
window.onload = function () {
    timeTest();
}
function timeTest(){
    mul.value = 1;
    let count = 0;
    const interval = window.setInterval(function () {
        mul.value *= 2;
        count++;
        if(new Date().getSeconds() === 0 || count === 10){
            window.clearInterval(interval);
        }
    }, 5000);


}



//3. 判断输入框most里出现最多的字符，并统计出来。统计出是信息在most_result输入框内以"The most character is:" + index + " times:" + max的形式显示。
//如果多个出现数量一样则选择一个即可。
//请仅在arrSameStr函数内写代码。

//提示：most、result、most_submit的解释及其.value与上面类似。
let most = document.getElementById("most");
let result = document.getElementById("most-result");
let most_submit = document.getElementById("most_submit");
most_submit.addEventListener('click',arrSameStr);
function arrSameStr(){
    let str = most.value;
    let count = {};//注意一定要这种形式先定义一下对象
    for(let i = 0; i < str.length; i++){
        if(count[str.charAt(i)] === undefined){
            count[str.charAt(i)] = {
                value:1
            };
        }else {
            count[str.charAt(i)].value++;
        }
    }
    let max = 0;
    let maxChar;
    for(let item in count){
        if(count[item].value > max){
            max = count[item].value;
            maxChar = item;
        }
    }

    result.value = "The most character is:" + maxChar + " times:" + max
}

