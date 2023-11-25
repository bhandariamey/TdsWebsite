const reachUs = document.getElementById("form-block")
reachUs.innerHTML = 
`
<form id="user-details" action="https://formspree.io/f/xdorvbgq" method="POST">
<div class="row">
    <div class="col-lg-6 input-block">  
        <input class="form-input-field" type="text" maxlength="200" name="Name" placeholder="Name" id="userName" required>
       </div>
       <div class="col-lg-6 input-block">
        <input class="form-input-field" type="email" maxlength="200" name="Email" placeholder="Email" id="userEmail" required>
       </div>
       <div class="col-lg-6 input-block">
        <input class="form-input-field" type="number" name="Contact" placeholder="Phone" id="userPhone" required>
       </div>
       <div class="col-lg-6 input-block">
        <input class="form-input-field" type="number" name="Project_Area" placeholder="Project area (sqft)" id="userSubject" required>
       </div>
       <div class="form-text-area">
        <textarea class="col-lg-6" name="Interested_In" id="userfield" maxlength="5000" placeholder="Hello, I am Interested in..."></textarea>
       </div>
       <div class="contact-form-button">
       <button class="submit-button" type="submit">Submit</button>
       </div>

   </div>
</form>
`