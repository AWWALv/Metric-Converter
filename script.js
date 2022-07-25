const inputEl = document.getElementById("input-el");
const convertBtn = document.getElementById("convert-el");
const LengthEl = document.getElementById("length-el");
const volumeEl = document.getElementById("volume-el");
const massEl = document.getElementById("mass-el");
const clearBtn = document.getElementById("clear-el");

let meter = 3.281            //one meter to foot
let liter = 0.264           //one liter to gallon
let kilogram = 2.204       //one kg to pounds
let foot = 0.305          //one foot to meter
let gallon= 3.785        // onegallon to liter
let pound = 0.452       // one pound to kg

convertBtn.addEventListener('click', function(){
    length()
    mass()
    volume()
    inputEl.value = "";

});

clearBtn.addEventListener('click',function(){
    inputEl.value = "";
    LengthEl.textContent = " ";
    volumeEl.textContent =" ";
    massEl.textContent =" ";
})

function length(){
    let values = inputEl.value;
    LengthEl.textContent = `${values} meters = ${meter.toFixed(2) * values} feet | ${values} feets = ${foot.toFixed(2) * values} meters `
};

function volume(){
    let values = inputEl.value;
    volumeEl.textContent= `${values} liters =  ${liter.toFixed(2) * values} gallons |  ${values} gallons =  ${gallon.toFixed(2) * values} liters `
};
    
function mass(){
    let values = inputEl.value;
    massEl.textContent= `${values} kilos =  ${kilogram.toFixed(2) * values} pounds | ${values} pounds =  ${pound.toFixed(2) * values} pounds`
};
    

    
