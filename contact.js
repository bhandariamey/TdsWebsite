console.log("Inside contacts js");

document.addEventListener("DOMContentLoaded", () => {

    var scroll_top = document.querySelector(".scroll-to-top");
    scroll_top.addEventListener("click", (e) => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // var contact_form = document.getElementById("user-details");

    // contact_form.addEventListener("submit", async (e) => {
    //     e.preventDefault(); 
    //     const result = await getAPIResponse();
    //     console.log("Printing response", result);
    // });
});

// async function getAPIResponse() {
//     console.log("getAPIResponse function called");
//     const response = await axios.get("https://formspree.io/f/xdorvbgq");
//     return response;
// }
