const urlParams = new URLSearchParams(window.location.search);
const voteredit = urlParams.get('id');

fetch(`http://localhost:8080/api/voter/getbyid/${voteredit}`)
.then((data) => {
   
    return data.json();
  })
  .then((voterData) => {
    // Populate the form fields with the candidate data
    document.getElementById('FirstName').value = voterData.firstName;
    document.getElementById('lastName').value = voterData.lastName;
    document.getElementById('email').value = voterData.email;
    document.getElementById('Address').value = voterData.address;
  });




//UPDATE FETCH
  const form = document.querySelector('#edit');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    window.location.href = 'Dashboard.html';
      // Handle success or display a success message
      alert("Save successful");
    let FirstName =document.getElementById('FirstName');
        let  LastName =document.getElementById(' LastName');
        let  Email =document.getElementById(' email');
        let Address =document.getElementById('Address');
  
    const formData = new FormData(form);
    const voter = Object.fromEntries(formData.entries());
  
    fetch(`http://localhost:8080/api/voter/update/${voteredit}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(voter)
    })
    .then(response => response.json())
    .then(data => {
      console.log('User created:', data);
      
    })
    .catch(error => {
      console.error('Error creating user:', error);
      // Handle error or display an error message
    });
  });


  