const form = document.getElementById('form');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission

  // Perform form submission logic here (e.g., using fetch or AJAX)

  // Redirect to a new page after successful submission
  window.location.href = 'index.html'; // Using window.location.href
  // Or
  // window.location.replace('new_page.html'); // Using window.location.replace()
});
