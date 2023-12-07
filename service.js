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
            name: "Interior Design",
            desc: "An interior designer transforms spaces by harmonizing aesthetics and functionality, making your domain both beautiful and practical."
        },
        {
            name: "Interior Design",
            desc: "An interior designer transforms spaces by harmonizing aesthetics and functionality, making your domain both beautiful and practical."
        },
        {
            name: "Interior Design",
            desc: "An interior designer transforms spaces by harmonizing aesthetics and functionality, making your domain both beautiful and practical."
        },
        {
            name: "Interior Design",
            desc: "An interior designer transforms spaces by harmonizing aesthetics and functionality, making your domain both beautiful and practical."
        },
        {
            name: "Interior Design",
            desc: "An interior designer transforms spaces by harmonizing aesthetics and functionality, making your domain both beautiful and practical."
        },
        {
            name: "Interior Design",
            desc: "An interior designer transforms spaces by harmonizing aesthetics and functionality, making your domain both beautiful and practical."
        },
    ]

    // services_div > div > inside_div 

    const services_div = document.getElementById("services")

    const div = document.createElement("div")
    div.setAttribute('class',"service-row row d-flex")


    services_we_provide.forEach((item)=>{
        const inside_div = document.createElement("div")
        inside_div.setAttribute("class","service-item col-lg-4 col-md-6 col-sm-12")
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