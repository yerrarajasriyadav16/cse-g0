document.getElementById('userForm').addEventListener('submit', function(event) {
event.preventDefault();
const formData = new FormData(event.target);
const data = Object.fromEntries(formData.entries());
data.interests = formData.getAll('interests');
console.log(data);
alert('Form submitted! Check the console for the data.');
});