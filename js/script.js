 (function(){
      emailjs.init("8hCqL0wCL06LzQnZn"); 
    })();

    const form = document.getElementById('contact-form');
    const statusEl = document.getElementById('status');
    const emailEl=document.querySelector(".email-input");
    const erorEl=document.querySelector(".eror");
    const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const validateEmail = (email) => {
      return email.match(emailRegex);
    };

    // real-time validation
    emailEl.addEventListener('input', () => {
        if (emailRegex.test(emailEl.value.trim()) || emailEl.value==="")  {
                erorEl.innerHTML="";
                statusEl.innerHTML="";
                
        } else {
               erorEl.innerHTML="The email format is not valid.";
               
  }
});



  form.addEventListener('submit', function(e) {
      e.preventDefault();

      if(validateEmail(emailEl.value)){
                emailEl.style.outline="none";
                emailjs.sendForm('service_sseo5pg', 'template_99vw1jl', this)
                .then(() => {
                statusEl.innerHTML = "Your message has been sent successfully ✅ ";
                form.reset();
                }, (err) => {
                statusEl.innerHTML = "Error sending the message. Please try again.❌";
                console.error(err);
    });
                
        }else{
              
               statusEl.innerHTML="Please correct the email and try again.❌";
               
               
              
        }
    });





