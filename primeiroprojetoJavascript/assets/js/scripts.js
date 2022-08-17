var current_number_w = document.getElementById('currentNumber');
var current_number = 0;

function increment(){
    if ((0 <= current_number) && (current_number< 10)){
        current_number = current_number + 1;
        current_number_w.innerHTML = current_number;
    }
}

function decrement(){
    if ((0 < current_number) && (current_number<= 10)){
        current_number = current_number - 1;
        current_number_w.innerHTML = current_number;
    }
}