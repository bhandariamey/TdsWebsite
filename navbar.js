document.addEventListener("DOMContentLoaded",()=>{
    
console.log("Inside navbar.js file")
const navigation_bar = document.getElementById("navbar");

navigation_bar.innerHTML = 
`
<div class="container">
<div>
 <img width=15% src="https://static.thenounproject.com/png/1919504-200.png" alt="TDS Logo">
 <a class="navbar-brand" href="./index.html">The Design Spell</a>
</div>
<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
 <span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse  justify-content-end" id="navbarSupportedContent">
 <ul class="navbar-nav">

   <li class="nav-item">
     
     <a class="nav-link active" href="./index.html">Home</a>
   </li>

   <li class="nav-item">
     <a class="nav-link" href="./aboutUs.html">About</a>
   </li> 
   
   <li class="nav-item">
     <a class="nav-link" href="./service.html">Services</a>
   </li> 

   <li class="nav-item">
     <a class="nav-link" href="./sites.html">Sites</a>
   </li> 

   <li class="nav-item">
     <a class="nav-link" href="./contact.html">Contact</a>
   </li> 
 </ul>

</div>
</div>
`
})