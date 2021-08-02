let red = () => {
    return Math.floor(Math.random() * 255);
}
let blue = () => {
    return Math.floor(Math.random() * 255);
}
let green = () => {
    return Math.floor(Math.random() * 255);
}

let x = () => { return Math.floor(Math.random() * 5) };
let correct = x();
// console.log(red(), blue(), green());
let setColor = () => {
    for (let i = 1; i <= 6; i++) {
        let _red = red();
        let _green = green();
        let _blue = blue();
        document.getElementById(`rgb${i}`).style.backgroundColor = `rgb(${_red},${_blue},${_green})`;
        saveColor(_red, _blue, _green);
    }
    assign();
}
var colorArray = [];

function saveColor(red, blue, green,) {
    colorArray.push([red, blue, green]);
    // console.log(colorArray);
}
function assign() {
    document.getElementById("guessCode").innerHTML = `RGB(${colorArray[correct][0]},${colorArray[correct][1]},${colorArray[correct][2]})`;
    document.getElementById(`rgb${correct + 1}`).innerHTML = `RGB(${colorArray[correct][0]},${colorArray[correct][1]},${colorArray[correct][2]})`;
}

setColor();

document.getElementById("newColors").addEventListener("click", ()=>{
    x();
    setColor();
});

// document.getElementById(`rgb${correct}`).addEventListener("Click", turnColor)

function turnColor() {
    for (let i = 0; i < colorArray.length; i++) {
        if (i !== correct) {
            document.getElementById(`rgb${1}`).style.backgroundColor = `rgb(${colorArray[correct][0]},${colorArray[correct][1]},${colorArray[correct][2]})`;
        }
    }
}