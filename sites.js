import {client_details} from './index.js'
console.log("Inside Sites.js")
console.log(client_details)

document.addEventListener("DOMContentLoaded",()=>{

    var scroll_top = document.querySelector(".scroll-to-top");
    
    scroll_top.addEventListener("click",(e)=>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    })

    const carouselDiv = document.getElementById("carouselForSites")
    client_details.forEach((site)=>{
        const div = document.createElement("div")
        div.setAttribute("class","row")
        div.innerHTML = 
        `
        <hr/>
        <div class="col-lg-5 col-sm-12">
        <div class="detailsOfSite d-flex flex-column justify-content-center" style="height:100%">
          <h2 class="siteName">${site.project_name}</h2>
          <h5 class="project_type">${site.project_type}</h5>

          <p class="siteDesc" class="text-left">${site.description}</p>
         
        </div>
      </div>
      <div class="col-lg-7 col-sm-12 mb-5">
      <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
            <div class="carousel-item active" data-bs-interval="3000">
              <img src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?w=1380&t=st=1701879334~exp=1701879934~hmac=64fcdbe14df03ffb135dbf2b9faf4fadd73992c4c8c95f8138fe593b74836076" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item" data-bs-interval="3000">
              <img src="https://img.freepik.com/premium-photo/panorama-forest-dusk-stone-road-3d-illustration_710973-5180.jpg" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item" data-bs-interval="3000">
              <img src="https://img.freepik.com/premium-photo/beautiful-view-chongqing-city-skyline_1112-3357.jpg" class="d-block w-100" alt="...">
            </div>
          </div>
        </div>
      </div>

    
        `
        carouselDiv.append(div)

    })

})