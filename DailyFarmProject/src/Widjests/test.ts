fetch('https://daily-farm-latest.onrender.com/your-endpoint', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        // 'X-Latitude': 'XX.XXXXXX',  // Укажите широту
        // 'X-Longitude': 'XX.XXXXXX'  // Укажите долготу
    },
    body: JSON.stringify({
        "firstName": "Bob",
        "lastName": "Bobovsky",
        "phone": "22155665",
        "email": "bob@bobmail.bob",
        "password": "12345678",
        "coordinates": {
            "latitude": 32.800223849999995,  // Укажите широту
            "longitude": 32.800223849999995  // Укажите долготу
        }
    })
})
    .then(response => response.json())
    .then(data => console.log('Success:', data))
    .catch(error => console.error('Error:', error));