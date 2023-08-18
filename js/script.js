function tringle(){
    const baseInput = inputField("base-input");
    const hightInput = inputField('hight-input');
    const area = 0.5 * baseInput * hightInput ;
    const area1 = area.toFixed(2);
    if(isNaN(baseInput) || isNaN(hightInput)){
        alert('invalid');
        return ;
    }
    display("result", area1)

}


function rectangle(){
    const rectrangleWidth =inputField('rectrangle-width');
    const rectranglLenght =  inputField('rectrangle-lenght');
    const area = rectrangleWidth * rectranglLenght;
    const area1 = area.toFixed(2)
    if(isNaN(rectrangleWidth) || isNaN(rectranglLenght)){
        alert('invalid');
        return;
    }
    display('rectangle-display', area1)
}

function parallelogram(){
    const parallelogramBase = inputField('parallelogram-base');
    const parallelogramHight = inputField('parallelogram-hight');
    const area  = parallelogramBase * parallelogramHight ;
    const area1 = area.toFixed(2)
    if(isNaN(parallelogramBase) || isNaN(parallelogramHight)){
        alert('invalid');
        return;
    }
    display('parallelogram-display', area1)
}



// function utilities
function inputField(input){
    const inputField = document.getElementById(input);
    const inputFieldText = inputField.value ;
    const inputValue = parseFloat(inputFieldText);
    inputField.value = '';
    return inputValue ;
}
function display(whereId, what){
   const displayValue =  document.getElementById(whereId);
   displayValue.innerText = what ;
}