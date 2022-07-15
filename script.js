const title = document.createElement('h1');
title.textContent = 'Virtual Keyboard'
title.className = "title";
document.body.append(title);

const keyboard = document.createElement('div');
keyboard.className = "keyboard";
document.body.append(keyboard);

const en = ['`', '1', '2', '3', '4', '5', '6', '7', '8','9','0','-','=','Backspace', 'Tab', 'q','w','e','r','t','y','u','i','o','p','[',']','\\', 'Delete', 'CapsLock', 'a', 's', 'd','f','g','h','j','k','l',';','\'','Enter', 
'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'ArrowUp','Shift', 'Control', 'Win', 'Alt', ' ', 'Alt', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'Control'];

document.onkeydown = function (event) {
  let b = event.key;
  console.log(b)

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
    key.append(en[i]);
    key.dataset.keyName = `${en[i]}`;
    result.push(key);
    
  }
  return result;
}

keyboard.append(...createKeys()); 

document.onkeydown = function(event) {
const b = document.querySelector('.key[data-key-name="'+event.key+'"]')
b.classList.add('pressed')
}
document.onkeyup = function(event) {
  const b = document.querySelector('.key[data-key-name="' +event.key+'"]').classList.remove('pressed')
  
  }

  

  const inputText = document.createElement('textarea');
  inputText.className = "inputText";
  document.body.append(inputText);
  const keys = document.querySelectorAll('key');



  keyboard.addEventListener('click', function(event) {
    if(event.target.classList.contains('key')){  
     if(event.target.dataset.keyName =="Backspace"){
          }
         else if(event.target.dataset.keyName =="Tab"){
            //inputText.value=inputText.value.slice(0, -1);
              }
              else if(event.target.dataset.keyName =="Delete"){
             //   inputText.value=inputText.value.slice(0, -1);
                  }
                  else if(event.target.dataset.keyName =="caps lock"){
                    //   inputText.value=inputText.value.slice(0, -1);
                         }
                         else if(event.target.dataset.keyName =="enter"){
                          //   inputText.value=inputText.value.slice(0, -1);
                               }
                               else if(event.target.dataset.keyName =="shift"){
                                //   inputText.value=inputText.value.slice(0, -1);
                                     }
                                     else if(event.target.dataset.keyName =="alt"){
                                      //   inputText.value=inputText.value.slice(0, -1);
                                           } else if(event.target.dataset.keyName =="ctrl"){
                                            //   inputText.value=inputText.value.slice(0, -1);
                                                 } else if(event.target.dataset.keyName =="win"){
                                                  //   inputText.value=inputText.value.slice(0, -1);
                                                       }
                                                       else if(event.target.dataset.keyName =="space"){
                                                        //   inputText.value=inputText.value.slice(0, -1);
                                                             }else if(event.target.dataset.keyName =="up"){
                                                              //   inputText.value=inputText.value.slice(0, -1);
                                                                   }
                                                                   else if(event.target.dataset.keyName =="left"){
                                                                    //   inputText.value=inputText.value.slice(0, -1);
                                                                         }else if(event.target.dataset.keyName =="right"){
                                                                          //   inputText.value=inputText.value.slice(0, -1);
                                                                               }
                                                                               else if(event.target.dataset.keyName =="down"){
                                                                                //   inputText.value=inputText.value.slice(0, -1);
                                                                                     }
     else 
     { 
        inputText.value += event.target.textContent;
     }   
     
  // event.target.style.animation="swing 0.5s ease";
}
})
