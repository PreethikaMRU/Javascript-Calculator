str = ""
var display = document.getElementById("display");

function handleClick(value){
    str += value;
    display.value=str;
}

display.addEventListener("keydown", (KeyboardEvent) => {
    if(KeyboardEvent.key === "Enter"){
        performAction();
        
    }
    else if(KeyboardEvent.key === "Backspace" ){
        KeyboardEvent.preventDefault();
        removeLast();
    }
    else {
        str += KeyboardEvent.key;
    }
});

function performAction(){
    var r = str.replace(/[^-()\d/*+.%-]/g, '');
    //var operator=[];
    // s=display.value.toString();
    // for(var i=0; i<s.length; i++){
    //     if (s[i].match(`[^0-9]`)){
    //         operator.push(s[i]);
    //     }
    // }
    // text=s.split(/[^0-9]/);
    // var calc=(+text[0]);
    // var j=1;
    // var i =0;
    // while(i<operator.length){
    //     switch(operator[i]){
    //         case "+":
    //             calc+=(+text[0+j]);
    //             j+=1;
    //             i+=1;
    //             break;
    //         case "-":
    //             calc-=(+text[0+j]);
    //             j+=1;
    //             i+=1;
    //             break;
    //         case "*":
    //             calc*=(+text[0+j]);
    //             j+=1;
    //             i+=1;
    //             break;
    //         case "/":
    //             calc/=(+text[0+j]);
    //             j+=1;
    //             i+=1;
    //             break;
    //         case "%":
    //             calc%=(+text[0+j]);
    //             i+=1;
    //             j+=1;
    //             break;
    //     } 
    //     }

    
    display.value=eval(r);
    str=eval(r).toString();
}

function clearScreen(){
    str=""
    display.value="";
}

function removeLast(){
    arr=[...str];
    arr.pop();
    str=arr.join('');
    display.value=str;
}

