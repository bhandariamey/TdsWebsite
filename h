[1mdiff --git a/contactUsBanner.js b/contactUsBanner.js[m
[1mindex 916ee22..d755315 100644[m
[1m--- a/contactUsBanner.js[m
[1m+++ b/contactUsBanner.js[m
[36m@@ -5,10 +5,22 @@[m [mcontactUSBanner.innerHTML =[m
 <p>Flat no. 104 : Vrundavan Apartments, Near Golden Wheel Hotel , </br>Indian Oil Petrol Pump Lane, Navi Peth, Pune, Maharashtra 411030</p>[m
 <p>sanjana@thedesignspell.com</p>[m
 <p>(+91) 90750-40505</p>[m
[31m-<div class="d-flex flex-row justify-content-center">[m
[31m-  <div class="col4"> <a target='_blank' href="https://www.instagram.com/thedesignspell/"><img src="./photos/instagram.png" alt="Instragram icon" width="30px" height="30px"></a></div>[m
[31m-  <div class="col4"><a target='_blank' href="https://www.linkedin.com/in/sanjana-dugad-5330a2144/"><img src="./photos/linkedin.png"; margin: 0px 30px" alt="LinkedIn icon" width="50px" height="50px"></a></div>[m
[31m-  <div class="col4"><a target='_blank' href="https://wa.me/message/VPMG4ROHK5IMD1"><img src="./photos/whatsapp.png" alt="Instragram icon" width="30px" height="30px"></a></div>[m
[32m+[m[32m<div class="d-flex flex-row justify-content-center text-center mt-4">[m
[32m+[m[32m  <div class="col-1 d-inline-block">[m
[32m+[m[32m    <a target='_blank' href="https://www.instagram.com/thedesignspell/">[m
[32m+[m[32m      <img src="./photos/instagram.png" alt="Instragram icon" width="30px" height="30px">[m
[32m+[m[32m    </a>[m
[32m+[m[32m  </div>[m
[32m+[m[32m  <div class="col-1 d-inline-block">[m
[32m+[m[32m    <a target='_blank' href="https://www.linkedin.com/in/sanjana-dugad-5330a2144/">[m
[32m+[m[32m      <img src="./photos/linkedin.png" alt="LinkedIn icon" width="30px" height="30px">[m
[32m+[m[32m    </a>[m
[32m+[m[32m  </div>[m
[32m+[m[32m  <div class="col-1 d-inline-block">[m
[32m+[m[32m    <a target='_blank' href="https://wa.me/message/VPMG4ROHK5IMD1">[m
[32m+[m[32m      <img src="./photos/whatsapp.png" alt="WhatsApp icon" width="30px" height="30px">[m
[32m+[m[32m    </a>[m
[32m+[m[32m  </div>[m
 </div>[m
[31m-</div>[m
[31m-`[m
[32m+[m
[32m+[m[32m`[m
\ No newline at end of file[m
[1mdiff --git a/service.css b/service.css[m
[1mindex 5e982b1..479d33c 100644[m
[1m--- a/service.css[m
[1m+++ b/service.css[m
[36m@@ -114,6 +114,4 @@[m
         padding: 0px 30px;[m
     }[m
 [m
[31m-[m
[31m-[m
 }[m
[1mdiff --git a/sites.css b/sites.css[m
[1mindex 0a87fee..e1f2727 100644[m
[1m--- a/sites.css[m
[1m+++ b/sites.css[m
[36m@@ -26,6 +26,40 @@[m
     color: #cda274[m
 }[m
 [m
[32m+[m[32m.contact-us p{[m
[32m+[m[32m    color: #4d5053;[m[41m [m
[32m+[m[32m    letter-spacing: .01em;[m[41m [m
[32m+[m[32m    font-size: 22px;[m
[32m+[m[32m    font-family: "jost";[m
[32m+[m[32m    line-height: 1.5;[m
[32m+[m[32m    text-align: center;[m[41m [m
[32m+[m[32m    margin-top: 30px;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m.contact-us{[m
[32m+[m[32m    width: 70%;[m
[32m+[m[32m    background-color: #f4f0ec;[m
[32m+[m[32m    border-radius: 25px;[m
[32m+[m[32m    padding: 30px 0px;[m
[32m+[m[32m    margin-top: 30px;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m.scroll-to-top {[m
[32m+[m[32m    position: fixed;[m
[32m+[m[32m    background-image: url("./photos/upArrow.png");[m
[32m+[m[32m    background-repeat: no-repeat;[m
[32m+[m[32m    bottom: 10px;[m
[32m+[m[32m    right: 10px;[m
[32m+[m[32m    background-position: 50%;[m
[32m+[m[32m    background-color: #f4f0ec;;[m
[32m+[m[32m    padding: 30px;[m
[32m+[m[32m    border-radius: 50% 0 0 0;[m
[32m+[m[32m    background-size: 40%;[m
[32m+[m[32m    box-shadow: 2px 2px 2px 3px #999;[m
[32m+[m[32m    z-index: 1;[m
[32m+[m[32m    border: none;[m
[32m+[m[32m}[m
[32m+[m
 [m
 .siteName{[m
     font-family: "DM serif Display";[m
[36m@@ -61,4 +95,4 @@[m
     border-radius: 37px 37px 0 0;[m
     padding-top: 30px;[m
     padding-bottom: 30px;[m
[31m-}[m
[32m+[m[32m}[m
\ No newline at end of file[m
[1mdiff --git a/sites.html b/sites.html[m
[1mindex f0737ef..de4f36a 100644[m
[1m--- a/sites.html[m
[1m+++ b/sites.html[m
[36m@@ -23,6 +23,9 @@[m
   <div id="carouselForSites" class="m-5" >[m
     </div>[m
       [m
[32m+[m
[32m+[m[32m    <div id="contact-us" class="contact-us container mb-5"></div>[m
[32m+[m
   <div>[m
     <button class="scroll-to-top"></button>[m
   </div>[m
[36m@@ -30,6 +33,7 @@[m
     <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>[m
     <script type="module" src="sites.js"></script>[m
     <script src="navbar.js"></script>[m
[32m+[m[32m    <script src="contactUsBanner.js"></script>[m
 [m
   </body>[m
 </html>[m
\ No newline at end of file[m
