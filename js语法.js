// js中的逗号表达式 只返回最后一个 其他都是赋值
function js() {
    return 1, 2, 3, 4, 5, 6
}
console.log(js());


// js中的字符串拼接
var str = 'a'.concat('*******')
console.log(str);

// js中的三目运算 条件 ? true : false
var a = 5 > 6 ? 1 : 2



// 在js中python中的字典和列表都是Object对象 
// js中的对象：字典 数组 函数
// js中对象转json
dic = {
    name: '小明',
    age: 18
}

json_str = JSON.stringify(dic)
console.log(json_str);


// json转对象（python中的字典）
dic = JSON.parse(json_str)
console.log(dic);
