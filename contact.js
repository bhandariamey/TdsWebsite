console.log("Inside contacts js")
document.addEventListener("DOMContentLoaded",()=>{

    var scroll_top = document.querySelector(".scroll-to-top");
    scroll_top.addEventListener("click",(e)=>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    })

    var contact_form = document.getElementById("user-details");
   // console.log("working till here")

    contact_form.addEventListener("submit",(e)=>{
        e.preventDefault();
        var form_elements = e.target.elements

        for(let i=0;i<form_elements.length;i++){
            console.log(form_elements[i].name, form_elements[i].value)
        }
    })
})
