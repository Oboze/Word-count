const textArea=document.getElementById('text-area');
const clearTextButton=document.getElementById('btn-clear');
      

function count(){
    const charCount=document.getElementById('count');
    const wordCount=document.getElementById('word-count');
    let textValue=textArea.value;
    textValue=textValue.trim();
    charCount.textContent=textValue.length;
    const words=textValue.split(" ");
    
    if (words[0]===""){
        wordCount.textContent=0;
    }else{
        wordCount.textContent=words.length;
    }
        console.log(words);
 }
  
function clearText(){  
    textArea.value="";
    count();
}
    textArea.addEventListener('keyup',function(){count()});
    clearTextButton.addEventListener('click', function(){clearText()});
      