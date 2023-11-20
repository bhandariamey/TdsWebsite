document.addEventListener("DOMContentLoaded",()=>{

    var scroll_top = document.querySelector(".scroll-to-top");
    scroll_top.addEventListener("click",(e)=>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    })
})