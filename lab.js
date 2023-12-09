//lab 9
function diagonal() {
    let base = parseFloat(prompt('ป้อนความยาวของฐาน:'));
    let height = parseFloat(prompt('ป้อนความสูง:'));
    let result = Math.sqrt(base ** 2 + height ** 2);
    console.log('ความยาวของเส้นแยงมุมคือ: ' + result.toFixed(2));
    document.getElementById("show1").innerHTML = "ความยาวของเส้นแยงมุมคือ: " + result.toFixed(2);
    alert(result.toFixed(2))
  }
v  

//lab 2 Accumulator 
function Accumulator(){
let accumulator = {
    currentValue: 0,
    read: function() {
        let input = prompt("ป้อนค่าที่ต้องการบวกเข้ากับค่าสะสม:");
        this.currentValue += Number(input);
    },
    show: function() {
        console.log("ค่าสะสมปัจจุบัน: " + this.currentValue);
        document.getElementById("show2").innerHTML = "ค่าสะสมปัจจุบัน: " + this.currentValue;
    }
};

accumulator.read();
accumulator.read();
accumulator.show();
}

//สุ่มตัวเลข 1-6
function randomnumberr(){
document.getElementById("show3").innerHTML = "สุ่มตัวเลข: " + Math.floor(Math.random() * 11);
}
//ตัวอักษรใหญ่ตัวแรก
function bigtextt(){
var str = prompt("Enter name ");
var res = str.slice(0,1).toUpperCase()+str.slice(1);
document.getElementById("show4").innerHTML = "ตัวอักษรตัวแรกใหญ่เสมอ: " + res;
alert(res);
}

    //เช็คอายุ
function names(){
let age = prompt('How old are you');
let message = (age >= 18) ? 'ผ่าน' : 'ไม่ผ่าน';
console.log(message);
document.getElementById("show").innerHTML = "สถานะ: " + message;


}

