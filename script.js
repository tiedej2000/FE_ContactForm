document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form');
  
    function validateField(input, errorId) {
      const errorMsg = document.getElementById(errorId);
      if (!input.value.trim()) {
        input.setAttribute('aria-invalid', 'true');
        errorMsg.style.visibility = 'visible';
        input.classList.add('error-active');
      } else {
        input.setAttribute('aria-invalid', 'false');
        errorMsg.style.visibility = 'hidden';
        input.classList.remove('error-active');
      }
    }

    function validateMail(input, errorID) {
        const errorMsg = document.getElementById(errorID);
    
        if (!input.value.trim() || !input.value.includes('@') || !input.value.includes('.')) {
            // If input is empty, missing '@', or missing '.'
            input.setAttribute('aria-invalid', 'true');
            errorMsg.style.visibility = 'visible';
            input.classList.add('error-active');
        } else {
            // All conditions are met
            input.setAttribute('aria-invalid', 'false');
            errorMsg.style.visibility = 'hidden';
            input.classList.remove('error-active');
        }
    }
    
    

    function showSuccess(){
        const modal = document.querySelector('.modal')
        modal.classList.add('active')

        form.reset()

        setTimeout(() => {
            modal.classList.remove('active');
        }, 3000);
    }
  
    form.addEventListener('submit', (event) => {
      event.preventDefault();
  
      // Validate First Name
      const firstName = document.getElementById('first-name');
      validateField(firstName, 'error-name');
  
      // Validate Last Name
      const lastName = document.getElementById('last-name');
      validateField(lastName, 'error-lname'); 
  
      // Validate Email
      const email = document.getElementById('email');
      validateMail(email, 'error-email');
  
      // Validate Query Type
      const queryType = document.querySelector('input[name="query-type"]:checked');
      const queryBox = document.querySelectorAll('.query div')
      const errorQuery = document.getElementById('error-query');
      if (!queryType) {
        errorQuery.style.visibility = 'visible';
        queryBox.forEach((box) => {
          box.classList.add('error-active');
          const radio = box.querySelector('input');
          radio.setAttribute('aria-invalid', 'true');
        });
      } else {
        errorQuery.style.visibility = 'hidden';
        queryBox.forEach((box) => {
          box.classList.remove('error-active');
          const radio = box.querySelector('input');
          radio.setAttribute('aria-invalid', 'false');
        });
      }
  
      // Validate Message
      const message = document.getElementById('message');
      validateField(message, 'error-message');
  
      // Validate Consent checkbox
      const consent = document.getElementById('consent');
      const errorConsent = document.getElementById('error-consent');
      if (!consent.checked) {
        consent.setAttribute('aria-invalid', 'true');
        errorConsent.style.visibility = 'visible';
      } else {
        consent.setAttribute('aria-invalid', 'false');
        errorConsent.style.visibility = 'hidden';
      }

    const invalidFields = form.querySelectorAll('[aria-invalid="true"]');
        if (invalidFields.length === 0) {
            showSuccess();
        }
    });
  });
  