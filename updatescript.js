const urlParams = new URLSearchParams(window.location.search);
const candidateId = urlParams.get('id');

//FETCH GET BYID FROM CANDIDATE TABLE
fetch(`http://localhost:8080/api/candidate/getbyid/${candidateId}`)
  .then((data) => {
   
    return data.json();
  })
  .then((candidateData) => {
    // Populate the form fields with the candidate data
    document.getElementById('candFirstName').value = candidateData.candFirstName;
    document.getElementById('candLastName').value = candidateData.candLastName;
    document.getElementById('candPosition').value = candidateData.candPosition;
    document.getElementById('candParty').value = candidateData.candParty;
  });



//FETCH UPDATE BYID CANDIDATE TABLE
  const form = document.querySelector('#myformedit');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    alert("Edited successful");
    window.location.href = 'Add_Candidate.html';
    let CandFirstName =document.getElementById('candFirstName');
        let CandLastName =document.getElementById(' candLastName');
        let  CandPosition =document.getElementById(' candPosition');
        let CandParty =document.getElementById('candParty');
  
    const formData = new FormData(form);
    const candidate = Object.fromEntries(formData.entries());
  
    fetch(`http://localhost:8080/api/candidate/update/${candidateId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(candidate)
    })
    .then(response => response.json())
    .then(data => {
        console.log('User created:', data);  

        
     
      // Handle success or display a success message
       
    })
    .catch(error => {
      console.error('Error creating user:', error);
      // Handle error or display an error message
    });
  });
  

  

// const form = document.getElementById('myformedit');
// form.addEventListener('submit', (e) => {
//   e.preventDefault();
//   const updatedCandidate = {
//     candFirstName: document.getElementById('candFirstName').value,
//     candLastName: document.getElementById('candLastName').value,
//     candPosition: document.getElementById('candPosition').value,
//     candParty: document.getElementById('candParty').value,
//   };

//   fetch(`http://localhost:8080/api/candidate/update/${candidateId}`, {
//     method: 'PUT',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(updatedCandidate),
//   })
//     .then((response) => {
//       return response.json();
//     })
//     .then((updatedData) => {
//       // Handle the updated candidate data
//       console.log(updatedData);
//     })
//     .catch((error) => {
//       console.error('Error:', error);
//     });
    
// });


//   const form = document.getElementById('myformedit');
//   form.addEventListener('submit', (event) => {
//     event.preventDefault();
//     const updatedCandidate = {
//       candFirstName: document.getElementById('candFirstName').value,
//       candLastName: document.getElementById('candLastName').value,
//       candPosition: document.getElementById('candPosition').value,
//       candParty: document.getElementById('candParty').value,
//     };
  
//     fetch(`http://localhost:8080/api/candidate/update/${candidateId}`, {
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(updatedCandidate),
//     })
//       .then((response) => {
//         return response.json();
//       })
//       .then((updatedData) => {
//         // Handle the updated candidate data
//         console.log(updatedData);
//       })
//       .catch((error) => {
//         console.error('Error:', error);
//       });
//   });
  



  

// const form = document.querySelector('#myform');
// form.addEventListener('submit', (event) => {
// event.preventDefault();

// const CandFirstName = document.getElementById('candFirstName').value;
// const CandLastName = document.getElementById('candLastName').value;
// const CandPosition = document.getElementById('candPosition').value;
// const CandParty = document.getElementById('candParty').value;

// const candidate = {
// candFirstName: CandFirstName,
// candLastName: CandLastName,
// candPosition: CandPosition,
// candParty: CandParty
// };

// fetch(`http://localhost:8080/api/candidate/update/${candidateId}`, {
// method: 'PUT',
// headers: {
//   'Content-Type': 'application/json'
// },
// body: JSON.stringify(candidate)
// })
// .then((response) => response.json())
// .then((data) => {
//   console.log('Candidate updated:', data);
//   // Handle success or display a success message
// })
// .catch((error) => {
//   console.error('Error updating candidate:', error);
//   // Handle error or display an error message
// });
// });




// form.addEventListener('submit', (event) => {
//   event.preventDefault();
//   let CandFirstName =document.getElementById('candFirstName').value;
//       let CandLastName =document.getElementById(' candLastName').value;
//       let  CandPosition =document.getElementById(' candPosition').value;
//       let CandParty =document.getElementById('candParty').value;

//   const formData = new FormData(form);
//   const candidate = Object.fromEntries(formData.entries());


//   fetch(`http://localhost:8080/api/candidate/update/${candidateId}`, {
//     method: 'PUT',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(candidate)
//   })
//   .then(response => response.json())
//   .then(data => {
//     console.log('User created:', data);
//     // Handle success or display a success message
//   })
//   .catch(error => {
//     console.error('Error creating user:', error);
//     // Handle error or display an error message
//   });
// });


