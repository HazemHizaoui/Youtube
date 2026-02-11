
        document.getElementById('contactForm').addEventListener('submit', function(event) {
            event.preventDefault();
            
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            const newsletter = document.getElementById('newsletter').checked;
            
           
            if (!name || !email || !message) {
                alert('Please fill in all required fields.');
                return;
            }
            
            alert(`Thank you ${name}! Your message has been submitted.\n\nWe will respond to ${email} soon.`);
            
            // Reset the form
            this.reset();
        });
  