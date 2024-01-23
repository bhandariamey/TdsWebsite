document.addEventListener("DOMContentLoaded",()=>{
    var scroll_top = document.querySelector(".scroll-to-top");
    scroll_top.addEventListener("click",(e)=>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    })

    const services_we_provide = [
        {
            name: "Turnkey",
            desc: "Complete solutions from concept to execution, ensuring a seamless, hassle-free experience for a beautifully curated environment."
        },
        {
            name: "Consultancy",
            desc: "Expert advice, tailored resolutions, and creative insights to achieve a cohesive and personalized environment that exceeds your design aspirations."
        },
       
        {
            name: "Renovation",
            desc: "Meticulous upgrades, modernization, and personalized touches for a refreshed and harmonious ambiance, crafted to your unique style and preferences."
        },
  
        {
            name: "Lighting",
            desc: "From ambient to accent, our expert interior designers strategically illuminate your environment, ensuring a perfect balance of form and function."
        },
        {
            name: "Space planning",
            desc: "Optimizing functionality and flow, we meticulously arrange layouts, ensuring efficient and concordant use of space to meet your stylistic desires and essential necessities."
        },
      

        {
            name: "Furnishing",
            desc: "Thoughtfully curated pieces that blend practicality, flair, and comfort, enhancing the overall design aesthetics of your interior."
        },
    ]

    const services_div = document.getElementById("services")

    const div = document.createElement("div")
    div.setAttribute('class',"service-row row d-flex")


    services_we_provide.forEach((item)=>{
        const inside_div = document.createElement("div")
        inside_div.setAttribute("class","service-item col-lg-4 col-md-6 col-sm-12 px-2")
        const inside_h2 = document.createElement("h2")
        inside_h2.setAttribute("class","service-title")
        inside_h2.innerHTML = 
        `
         ${item.name}
        `

        const inside_p = document.createElement("p")
        inside_p.setAttribute("class","service-content")
        inside_p.innerHTML =  
        `
            ${item.desc}
        `

        inside_div.append(inside_h2)
        inside_div.append(inside_p)
        
        div.append(inside_div)

    })

    services_div.append(div)

})