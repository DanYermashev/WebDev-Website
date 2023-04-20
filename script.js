const hiringRadio = document.querySelectorAll('[name="about"]');
const hourlyRateDiv = document.getElementById('hourly-rate');
const hourlyRateInput = document.getElementById('hourly-rate-input');

// add an event listener to detect when the radio button selection change
hiringRadio.forEach((radio) => {
  radio.addEventListener('change', (event) => {
    if (event.target.value === "hiring") {
      hourlyRateDiv.style.display = 'block';
      hourlyRateInput.required = true;
    } else {
      hourlyRateDiv.style.display = 'none';
      hourlyRateInput.required = false;
    }
  });
});
function downloadFile() {
    window.open("https://github.com/DanYermashev/WebDev-Website/blob/main/Resume-Daniel-Yermashev.pdf")
 }

 const form = document.getElementById("contact-form");
 const submitBtn = document.getElementById("submit-btn");

 submitBtn.addEventListener("click", (event) => {
   event.preventDefault();
   if (form.checkValidity()) {
     const formData = new FormData(form);
     fetch(form.action, {
       method: form.method,
       body: formData
     })
     .then(response => response.json())
     .then(data => console.log(data))
     .catch(error => console.error(error));
   } else {
     form.reportValidity();
   }
   
 });
 

 
