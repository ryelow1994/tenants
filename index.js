const form = document.getElementById('form');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission

  // Perform form submission logic here (e.g., using fetch or AJAX)

  // Redirect to a new page after successful submission
  setTimeout(() => {
   window.location.href = 'index.html'; 
}, "5000"); // Redirect after 1 second
  // Or
  // window.location.replace('new_page.html'); // Using window.location.replace()
});
