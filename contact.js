console.log("Inside contacts js")
document.addEventListener("DOMContentLoaded",()=>{
    var contact_form = document.getElementById("user-details");
   // console.log("working till here")

    contact_form.addEventListener("submit",(e)=>{
        e.preventDefault();
        var form_elements = e.target.elements
        var user={}
        for(let i=0;i<form_elements.length;i++){
            console.log(form_elements[i].name, form_elements[i].value)
        }
    })
})

