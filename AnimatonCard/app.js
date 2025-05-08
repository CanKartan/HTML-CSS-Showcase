const panels = document.querySelectorAll(".panel");


// active panel when clicked on the button
panels.forEach( panel => {
    panel.addEventListener("click",()=>{
        removeactive();
        panel.classList.toggle("active")
    })
})


//  close other panels when one is open 

function removeactive ( ){
    panels.forEach( panel => {
        panel.classList.remove("active");
    })
}

