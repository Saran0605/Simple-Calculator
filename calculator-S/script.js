const display = document.getElementById("display");
function Append(input){
    display.value+=input;
    
}
function calculate(){
    display.value = eval(display.value);
}
function del(){
    display.value  = "";


}