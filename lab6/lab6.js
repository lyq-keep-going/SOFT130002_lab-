
//测试函数
function test() {
    console.log('第二题测试');
    testMail('432413','fewgr');
    testMail('18939762689','fewgr');
    testMail('432413','1258648285@qq.com');
    testMail('18939762689','1258648285@qq.com');
    console.log('第三题测试');
    testRedundancy("b b abb abb c c d d e e f f g g h h i i j j k k l l m m n n");
    console.log('第四题测试');
    testKeyBoard('7_This_is_a_test','_hs_s_a_es');
    console.log('第五题测试');
    testSpecialReverse('  hello  world!  ');
    console.log('第六题测试');
    twoSum([1,2,3,4],5);
    console.log('第七题测试');
    lengthOfLongestSubstring('pwwkew');
    console.log('第八题测试');
    callSubCountries();
    console.log('第一题测试');
    let test1 = testTime();
    test1();

}
/*
1.
背景：
    每隔五秒运行一次函数直到某一整分钟停止，比如从20:55:45运行到20:56:00停止；
    或者运行10次，先到的为准。从1开始每过五秒，输入框内数值翻倍。初始值为1。
注意：
    你可以在函数 timeTest内部 和 timeTest外部 写代码使得该功能实现。
要求：
    ①要求使用JS闭包的方式使得计数实现局部私有，不可以在全局区域声明计数变量。
    ②使用console.log打印计数即可，到达一分钟提前停止也需要console.log相应的提示语句。
*/

function testTime(){
    let count = 0;
    let value = 1;
    return function () {
        let interval = setInterval(function () {
            console.log(value);
            if(new Date().getSeconds() >= 56){
                console.log('要到整分了，我要停止了');
                clearInterval(interval);
            }else if(count === 10){
                clearInterval(interval);
            }else {
                value *= 2;
                count++;
            }

        },5000)
    }

}

/*
2.
要求：
    ①能够对传入的、移动手机电话（11位）、邮箱字符串（上网查找其要求）进行正则判定。
    ②使用console.log打印即可，例如，电话不符合要求但是邮箱符合要求，则console.log("The telephone is right and the mail is wrong!")。
    ③邮箱字符串的正则匹配的理解需写入lab文档。
    ④telephone与mail均是字符串。
    邮箱的第一位是数字字母，接下来是数字字母下划线小数点横杠，然后是@，接下来就是字母加小数点穿插，最后一个小数点后面的字母是2-4位
*/
function testMail(telephone,mail) {
    let telephoneReg = /^\d{11}$/;
    let mailReg = /^\w[\w_\.-]*@[a-zA-Z\.]+\.[a-zA-Z]{2,4}$/;
    if(telephoneReg.test(telephone) && mailReg.test(mail)){
        console.log('Both are right');
    }else if(telephoneReg.test(telephone)){
        console.log('The telephone is right and the mail is wrong!');
    }else if(mailReg.test(mail)){
        console.log('The mail is right and the telephone is wrong!');
    }else {
        console.log('Both are wrong');
    }


}

/*
3.
要求：
    ①输入一段全英文语句，要求使用正则表达式找到相邻的重复单词放入一个Set，如果集合中元素超过10个，则按照首字母顺序取前10个于集合。
    ②使用console.log打印即可，将该集合打印出来。
    ③例如：输入"Is is the iS is cost of of gasoline going up up"，输出：Set { 'Is is', 'iS is', 'of of', 'up up' }。
    ④对该函数中用的正则匹配的理解需写入lab文档。
    ⑤str为字符串。
*/
function testRedundancy(str) {
    let wordsSet = new Set(str.split(' '));
    let regExpStr = '';
    for(let value of wordsSet){
        let newSubStr = '(' + value + ' ' + value + ')';
        regExpStr += newSubStr + '|';
    }

    regExpStr = regExpStr.substring(0,regExpStr.length - 1);
    let re = new RegExp('^' + regExpStr + '$','ig');
    let result = str.match(re);
    result.sort();
    let setResult = new Set();
    for(let value of result){
        if(setResult.size === 10){
            break;
        }
        setResult.add(value);
    }
    console.log(setResult);
}


/*
4.
背景：
    旧键盘上坏了几个键，于是在敲一段文字的时候，对应的字符就不会出现。
    现在给出应该输入的一段文字、以及实际被输入的文字，请你使用Set列出肯定坏掉的那些键。
    例如：输入7_This_is_a_test和_hs_s_a_es    输出：Set { '7', 'T', 'I' }
要求：
    ①需要使用Set。
    ②只能使用一次循环。
    ③使用console.log打印即可，将该集合打印出来。
    ④wantInput和actualInput为字符串。
注意：
    ①注意联系生活，并注意观察我给的上述例子。
*/
function testKeyBoard(wantInput, actualInput) {
    let wantSet = new Set(wantInput.toUpperCase().split(''));
    let actualSet = new Set(actualInput.toUpperCase().split(''));
    for(let value of actualSet){
        wantSet.delete(value);
    }
    console.log(wantSet);

}

/*
5.
背景：
    给定一个输入英文语句字符串，反转该语句。例如the sky is blue变成blue is sky the。
要求：
    ①如果输入的字符串前后有空格，输出中应该去除前后空格。如果输入字符串中间出现连续的两个空格，输出应该变为一个。
    比如输入是“  hello  world!  ”，输出应该是“world! hello”。
    ②请使用Array。
    ③使用console.log打印即可，将该数组打印出来。
    ④只能显式使用一次循环。
    ⑤str为字符串。
*/
function testSpecialReverse(str) {
    let afterSplit = str.trim().split(' ');
    let resultArray = [];
    for(let i = afterSplit.length - 1; i >= 0; i--){
        if(afterSplit[i].trim() !== ''){
            resultArray.push(afterSplit[i]);
            resultArray.push(' ');
        }
    }
    resultArray.pop();
    console.log(resultArray.join().replace(/,/g,''));
}

/*
6.
背景：
    给定一个整数数组和一个值，找出相加为该值的两个元素下标并保存在一个数组中。
    例如给定 [2, 7, 11, 15]和9,
    打印结果为[0,1]
要求：
    ①使用Map。
    ②只能显式使用一次循环。
    ③使用console.log打印即可，将满足条件的数组打印出来。
    ④nums为数字数组，如[1,2,3,4],target为数字,如5，那么输出为
    [ 0, 3 ]
    [ 1, 2 ]
*/

function twoSum(nums, target) {
    let map = new Map();
    let result = [];
    for(let i = 0; i < nums.length; i++){
        if(map.has(nums[i])){
            result.push([i,map.get(nums[i])]);
        }else {
            map.set(target - nums[i] , i);
        }
    }
    console.log(result);
}


/*
7.
背景：
    打印最长的包含不同字符串的子字符串长度(无重复子串）。
要求：
    ①使用Map。
    ②例如：输入"abbbbb",输出2，输入"bbbbb",输出1；
    ③只能显式使用一次循环。
    ④使用console.log打印即可。
    ⑤str为字符串。
*/
function lengthOfLongestSubstring(str) {
    let map = new Map();
    let maxCount = 0;
    let count = 0;
    for(let i = 0; i < str.length; i++){
        if(map.has(str.charAt(i))){
            if(count > maxCount){
                maxCount = count;
            }
            i = map.get(str.charAt(i));//将i设为与现在考察字符重复的字符重新考虑
            map.clear();
            count = 0;
        }else {
            map.set(str.charAt(i),i);
            count++;
        }
    }
    console.log(maxCount);
}

/*
8.
背景：
    该部分只是为了让你们自己动动手更好地感受不同继承方式。
要求：
    ①借助构造函数、原型链、和Object.create分别编写DevelopingCountry、PoorCountry、DevelopedCountry以实现对Country的继承，
    并在三者分别添加sayHi、saySad、sayHappy函数分别打印"Hi,i am a developing country."、"I am a sad poor country."、"I am a Happy developed country."
    ②请调用他们并打印相关语句即可。
*/
function Country() {
    this.name = "国家";
}
Country.prototype.say = function () {
    console.log('country');
}
function callSubCountries(){
    let developing = new DevelopingCountry();
    developing.sayHi();
    let poor = new PoorCountry();
    poor.saySad();
    let developed = new DevelopedCountry();
    developed.sayHappy();
}
//DevelopedCountry用Object.create()原型式继承
function DevelopedCountry(){
    Country.call(this);//这个语句是为了调用父类的构造方法，这样子类才有name这个值
}

DevelopedCountry.prototype = Object.create(Country.prototype);//原型对象的复制
DevelopedCountry.prototype.constructor = DevelopedCountry;
DevelopedCountry.prototype.sayHappy = function () {
    console.log('I am a Happy developed country.');
}

//DevelopingCountry借用构造函数继承
function DevelopingCountry() {
    Country.call(this);
    this.sayHi = function () {
        console.log('Hi,i am a developing country.');
    }
}
//PoorCountry利用原型链继承
function PoorCountry() {}//构造函数
PoorCountry.prototype = new Country();
PoorCountry.prototype.saySad = function () {
    console.log('I am a sad poor country');
}

test();
