const notesContaier=document.querySelector('.notes-container');
const btn1=document.querySelector('.btn');
let notes=document.querySelectorAll(".input-notes");


function showNotes(){
    notesContaier.innerHTML=localStorage.getItem("notes");
}
showNotes();
function updateStorage(){
    localStorage.setItem("notes",notesContaier.innerHTML);
}

btn1.addEventListener('click',()=>{
    let inputNotes=document.createElement('p');
    //let divelement=document.createElement('div');
    let images=document.createElement('img');
    let images2=document.createElement('img');
    
    inputNotes.className="input-notes";
    inputNotes.setAttribute("contenteditable","true");
    images.src="delete.png";
    images2.src="refresh.png";
    images.className="img1";
    images2.className="img2";

    images.style.position="absolute";
    images2.style.position="absolute";
    
   // divelement.className="image-div";
   // inputNotes.appendChild(divelement);
   
    inputNotes.appendChild(images2);
    inputNotes.appendChild(images);  
    
    notesContaier.appendChild(inputNotes);
 
})

notesContaier.addEventListener('click',function(e){
    if(e.target.tagName==='IMG'){
        if(e.target.classList.contains('img1')){
            e.target.parentElement.remove();
            updateStorage();
        } 
        else if(e.target.classList.contains('img2')){
          const paragraph = e.target.closest('.input-notes');
            if (paragraph) {
                Array.from(paragraph.childNodes).forEach(child => {
                    if (child.tagName !== 'IMG') {
                        paragraph.removeChild(child);
                    }
                });
                updateStorage();
            }
        }
    }
    else if(e.target.tagName==="P"){
        notes=document.querySelectorAll(".input-notes");
        notes.forEach(i=>{
                i.onkeyup=function(){
                    updateStorage();
                }
        })
    }
})

document.addEventListener("keydown",event=>{
    if(event.key==="Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
}) 
