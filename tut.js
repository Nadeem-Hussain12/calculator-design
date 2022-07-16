let screen=document.getElementById('screen');
buttons=document.querySelectorAll('button');
for(item of buttons){
    item.addEventListener('click' , (e)=>{
        buttonText=e.target.innerText;
        console.log('Button text is ' , buttonText)
        if(buttonText=='X'){
            buttonText='*';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if(buttonText=='C'){ 
            screenValue ="";
            screen.value = screenValue;

        }
        else if(buttonText=='='){ 
            screen.value =eval(screenValue);
        }
        else if(buttonText=="D"){ 
            screenValue ="";
            screen.value = screenValue;
        }
        else{
            screenValue += buttonText;
            screen.value = screenValue;
        }
    })    
}