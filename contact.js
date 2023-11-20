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
   // contact_form.reset();
    })
})
