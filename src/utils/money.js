export default function Money(value, num) {
    num = num > 0 && num <= 20 ? num : 2;
    value = parseFloat((value + "").replace(/[^\d\.-]/g, "")).toFixed(num) + ""; //将金额转成比如 123.45的字符串
    var valueArr = value.split(".")[0].split("").reverse()   //将字符串的数变成数组
    const valueFloat = value.split(".")[1];   // 取到 小数点后的值
    let valueString = "";
    for (let i = 0; i < valueArr.length; i++) {
        valueString += valueArr[i] + ((i + 1) % 3 == 0 && (i + 1) != valueArr.length ? "," : ""); //循环 取数值并在每三位加个','
    }
    
    const money = valueString.split("").reverse().join("") + "." + valueFloat;    //拼接上小数位
    return money
}