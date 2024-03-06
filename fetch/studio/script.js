//TODO: Add Your Code Below
window.onload = function() {
    fetch('https://handlers.education.launchcode.org/static/astronauts.json')
    .then(response => response.json())
    .then(data => {
        // Code to handle the data
        console.log(data);
    })
    .catch(error => {
        // Handle any errors
        console.error('Error fetching astronauts:', error);
    });
};
