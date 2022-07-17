
const title = document.createElement('h1');
title.textContent = 'Virtual Keyboard'
title.className = "title";
document.body.append(title);

const keyboard = document.createElement('div');
keyboard.className = "keyboard";
document.body.append(keyboard);

const en = ['`', '1', '2', '3', '4', '5', '6', '7', '8','9','0','-','=','Backspace', 'Tab', 'q','w','e','r','t','y','u','i','o','p','[',']','\\', 'Delete', 'CapsLock', 'a', 's', 'd','f','g','h','j','k','l',';','\'','Enter', 
'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'ArrowUp','Shift', 'Control', 'Meta', 'Alt', ' ', 'Alt', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'Control'];

document.onkeydown = function (event) {
  let b = event.key;
  console.log(b)
  console.log(event.code)


}

function createKeys() {
  let result = [];
  for(let i=0; i < en.length; i++) {
   if(i==14 || i == 29 || i== 42 || i ==55) {
      let clearfix = document.createElement('div');
      clearfix.className = "clearfix";
      keyboard.append(clearfix);
      result.push(clearfix);

    }
    let key = document.createElement('div');
    key.className = "key";
    if(en[i].length <=1 ){
     key.className = "key ordinary";

    }
    key.append(en[i]);
    key.dataset.keyName = `${en[i]}`;
    result.push(key);
    
  }
  return result;
}

keyboard.append(...createKeys()); 

document.onkeydown = function(event) {

if (event.code == "ShiftRight" || event.code == "AltRight" || event.code == "ControlRight" ) {

     const b = document.querySelectorAll('.key[data-key-name="'+event.key+'"]')
     b[1].classList.add('pressed')

}
if(event.key == "CapsLock") {
     ordinaryKeys.forEach(el => el.classList.toggle('uppercase'))
}
 if (event.key.length>1 && (event.code != "ShiftRight" && event.code != "AltRight" &&  event.code != "ControlRight")) {
     const b = document.querySelector('.key[data-key-name="'+event.key+'"]')
     b.classList.add('pressed')

}
else {
     const b = document.querySelector('.key[data-key-name="'+event.key.toLowerCase()+'"]')
     b.classList.add('pressed')
}
}
document.onkeyup = function(event) {
       
if (event.code == "ShiftRight" || event.code == "AltRight" || event.code == "ControlRight" ) {
     const b = document.querySelectorAll('.key[data-key-name="'+event.key+'"]')
     b[1].classList.remove('pressed')
}
else if (event.key.length>1) {
     const b = document.querySelector('.key[data-key-name="'+event.key+'"]')
     b.classList.remove('pressed')
}
else {
     const b = document.querySelector('.key[data-key-name="'+event.key.toLowerCase()+'"]')
     b.classList.remove('pressed')
}

  }
  const inputText = document.createElement('textarea');
  inputText.className = "inputText";
  document.body.append(inputText);



  keyboard.addEventListener('click', function(event) {
    if(event.target.classList.contains('key')){  

     if(event.target.dataset.keyName =="Backspace"){
          inputText.value=inputText.value.slice(0, -1);

          }
         else if(event.target.dataset.keyName =="Tab"){
              }
              else if(event.target.dataset.keyName =="Delete"){
             //   inputText.value=inputText.value.slice(0, -1);
                  }
                  else if(event.target.dataset.keyName =="CapsLock"){
                    //   inputText.value=inputText.value.slice(0, -1);
                         }
                         else if(event.target.dataset.keyName =="Enter"){
                          //   inputText.value=inputText.value.slice(0, -1);
                               }
                               else if(event.target.dataset.keyName =="Shift"){
                                //   inputText.value=inputText.value.slice(0, -1);
                                     }
                                     else if(event.target.dataset.keyName =="Alt"){
                                      //   inputText.value=inputText.value.slice(0, -1);
                                           } else if(event.target.dataset.keyName =="Control"){
                                            //   inputText.value=inputText.value.slice(0, -1);
                                                 } else if(event.target.dataset.keyName =="Meta"){
                                                  //   inputText.value=inputText.value.slice(0, -1);
                                                       }
                                                       else if(event.target.dataset.keyName ==" "){
                                                        //   inputText.value=inputText.value.slice(0, -1);
                                                             }else if(event.target.dataset.keyName =="ArrowUp"){
                                                              //   inputText.value=inputText.value.slice(0, -1);
                                                                   }
                                                                   else if(event.target.dataset.keyName =="ArrowLeft"){
                                                                    //   inputText.value=inputText.value.slice(0, -1);
                                                                         }else if(event.target.dataset.keyName =="ArrowRight"){
                                                                          //   inputText.value=inputText.value.slice(0, -1);
                                                                               }
                                                                               else if(event.target.dataset.keyName =="ArrowDown"){
                                                                                //   inputText.value=inputText.value.slice(0, -1);
                                                                                     }
     else 
     { 
        inputText.value += event.target.textContent;
     }   
     
}
})


const Caps = document.querySelector('.key[data-key-name="CapsLock"]');

const ordinaryKeys = document.querySelectorAll('.ordinary');

Caps.addEventListener('click', () => {
     ordinaryKeys.forEach(el => el.classList.toggle('uppercase'));
     

})

