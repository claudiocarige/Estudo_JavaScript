var current_number_w = document.getElementById('currentNumber');
var current_number = 0;

function increment(){
    if (current_number< 11){
        current_number = current_number + 1;
        current_number_w.innerHTML = current_number;
    }
    if (current_number === 11){
        alert("Só pode incrementa até o número 11.")
    }
}

function decrement(){
    if (0 < current_number){
        current_number = current_number - 1;
        current_number_w.innerHTML = current_number;
    }
    if (current_number <= 0){
        alert("Não decrementa para número negativo.")
    }
}