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
        div.setAttribute("class","row px-5")
        div.setAttribute("style", "background-color: #f4f0ec; border-radius: 30px; margin-bottom: 10px");


        div.innerHTML = 
        `
        <div class="col-lg-5 col-sm-12">
        <div class="detailsOfSite d-flex flex-column justify-content-center" style="height:100%">
          <h2 class="siteName">${site.project_name}</h2>
          <h5 class="project_type">${site.project_type}</h5>

          <p class="siteDesc" class="text-left">${site.description}</p>
         
        </div>
      </div>
      <div class="col-lg-7 col-sm-12 my-5">
      <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
              ${site.carousel_images.map((carouselImage, index) => `
                <div key=${index} class="carousel-item ${index === 0 ? 'active' : ''}" data-bs-interval="3000">
                  <img src=${carouselImage} class="d-block w-100" alt="...">
                </div>
              `).join('')}
            </div>
        </div>
      </div>
        `
        carouselDiv.append(div)

    })

})