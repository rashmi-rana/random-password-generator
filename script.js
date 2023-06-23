const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerSet = "abcdefghijklmnopqrstuvwxyz"
const numberSet = "1234567890"
const symbolSet = "~`!@#$%^&*?/()"

//selectors
const passBox = document.getElementById("pass-box")
const totalChar = document.getElementById("total-char")
const upperInput = document.getElementById("upper-case")
const lowerInput = document.getElementById("lower-case")
const symbolInput = document.getElementById("symbols")
const numberInput = document.getElementById("numbers")

const getRandomData = (dataSet)=>{
    return dataSet[Math.floor(Math.random()* dataSet.length)]
}

const generatePswd = (password = " ") =>{
    if(upperInput.checked){
        password += getRandomData(upperSet)
    }
    if(lowerInput.checked){
        password += getRandomData(lowerSet)
    }
    if(symbolInput.checked){
        password += getRandomData(symbolSet)
    }
    if(numberInput.checked){
        password += getRandomData(numberSet)
    }
    if(password.length < totalChar.value){
        return generatePswd(password)
    }
    passBox.innerText = truncateString(password, totalChar.value);
}

generatePswd();

document.getElementById("btn").addEventListener(
    "click",
    function() {
        generatePswd();
    }
)

function truncateString(str, num){
    if(str.length > num){
        let substr = str.substring(0, num);
        return substr;
    }
    else{
        return str;
    }
}
