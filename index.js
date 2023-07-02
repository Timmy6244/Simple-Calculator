let appendToResult = (value)=> {
    document.querySelector('.result').value += value;
};

let displayResult = ()=> {
    let result =  eval(document.querySelector('.result').value);
    document.querySelector('.result').value = result;
};

let clearResult = ()=> {
    document.querySelector('.result').value = "";
}