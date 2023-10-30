
console.log("code in js")
const client_details = [
    {
        project_name : "Thunderstorm",
        project_style: "Modern",
        main_image : "./photos/sites/thunderstorm.jpg",
        client_name : "Mr. Jain",
        date : 2020,
        description: "The Dry Creek Building brings together key business partners in a common location and is designed to help drive collaboration and innovation, ultimately helping to move Gallo’s business forward. The new office building complements existing structures and is a central location between the campus’s multiple buildings, making is a vital hub for employees to gather, socialize, and collaborate.",
        carousel_images:{

        }


    },
    {
        project_name : "Aapla ghar",
        project_style: "Warm",
        main_image : "./photos/sites/aapli.jpg",
        client_name : "Mr. Sheth",
        date : "Sept. 2023",
        description: "The Dry Creek Building brings together key business partners in a common location and is designed to help drive collaboration and innovation, ultimately helping to move Gallo’s business forward. The new office building complements existing structures and is a central location between the campus’s multiple buildings, making is a vital hub for employees to gather, socialize, and collaborate.",
        carousel_images:{
            
        }
    },

    {
        project_name : "Light House",
        project_style: "Breezy, elegant",
        main_image : "./photos/sites/BlueBird.jpeg",
        client_name : "Mr. Desarda",
        date : "Sept. 2023",
        description: "The Dry Creek Building brings together key business partners in a common location and is designed to help drive collaboration and innovation, ultimately helping to move Gallo’s business forward. The new office building complements existing structures and is a central location between the campus’s multiple buildings, making is a vital hub for employees to gather, socialize, and collaborate.",
        carousel_images:{
            
        }
    },

    {
        project_name : "Dream Room",
        project_style: "Quaint",
        main_image : "./photos/sites/MantraMonarch.jpg",
        client_name : "Mr. Ghotkar",
        date : "Nov. 2023",
        description: "The Dry Creek Building brings together key business partners in a common location and is designed to help drive collaboration and innovation, ultimately helping to move Gallo’s business forward. The new office building complements existing structures and is a central location between the campus’s multiple buildings, making is a vital hub for employees to gather, socialize, and collaborate.",
        carousel_images:{
            
        }
    }


]


document.addEventListener('DOMContentLoaded', function() {
    var sites_div = document.querySelector(".sites"); 
    client_details.forEach((site) => {
        var div = document.createElement("div");
        div.setAttribute("class", "col-md-6 col-sm-12");
        div.innerHTML =
         `
            <a href="#"><img src="${site.main_image}" width="100%" alt="${site.project_name}"></a>
            <div class="row" style="margin-top: 20px;">
                <div class="col">
                    <a href="#"><h2 class="site-desc">${site.project_name}</h2></a>
                    <a href="#"><p class="site-style">${site.project_style}</p></a>
                </div>
                <div class="col-md-6 col-sm-12 arrow-right-div">
                    <a href="#"><button class="arrow-right"></button></a>
                </div>
            </div>
        `
        sites_div.appendChild(div);
    });

    

});


