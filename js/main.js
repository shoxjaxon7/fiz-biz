let elForm = document.getElementById("form");
let elResult = document.getElementById("result")
let elFormInput = document.getElementById("form-input");
elForm.addEventListener('submit', function (evt) {
    evt.preventDefault()
    let InputValue = elFormInput.value;
    console.log(InputValue);
    let number = parseFloat(elFormInput.value.trim(), 10);
    if(number%3 ===0 && number %5===0){
        elResult.textContent= 'FIIZZZZBIIIIZZZ'
    } else if(number %5 === 0){
        elResult.textContent= 'FIZZ'
    }
    else if (number %3 === 0){
        elResult.textContent= 'BIZZ'
    }
    else{
        elResult.textContent = `${number}`;
    }
});