document.addEventListener("DOMContentLoaded", function() {
    var menuItems = document.querySelectorAll(".menu-item");
    
    menuItems.forEach(function(item) {
      item.addEventListener("click", function() {
        // Remove active class from all menu items
        menuItems.forEach(function(menuItem) {
          menuItem.classList.remove("active");
        });
        
        // Add active class to the clicked menu item
        item.classList.add("active");
      });
    });
  });
  

  
// FETCH OF GET LIST IN THE TABLE IN VOTER TABLES TABLE
  fetch("http://localhost:8080/api/voter/Voter").then((data) => {
    //console.log(data);
    return data.json();

  }).then((Data)=>{

    let tData="";
    Data.forEach(store =>{
      tData+=`
      <tr> 
      <td>${store.voterId}</td>
      <td>${store.firstName}</td>
      <td>${store.lastName}</td>
      <td>${store.email}</td>
      <td>${store.address}</td>
      <td>
         <a href="EditVoter.html?id=${store.voterId}" class="btn btn-success">Edit</a>
         <a href="Dashboard.html?id=${store.voterId}" class="btn btn-danger">Delete</a>
       </td>
      
    </tr>`;
    });
    document.getElementById('tbody').innerHTML=tData;

  });



  // fetch('http://localhost:8080/api/voter/Voter')
  //     .then(response => response.json())
  //     .then(data => {


  //       // Handle the response data
  //       console.log(data);
  //     })
  //     .catch(error => {
  //       // Handle any errors
  //       console.error(error);
  //     });
  //onClick={()=>{LoadEdit(item.candid)}} href="EditCandidate.html+candid"
 // onClick={()=>{Remove(item.candid)}}



// FETCH OF GET LIST IN THE TABLE IN CANDIDATE TABLE
 fetch("http://localhost:8080/api/candidate/Candidate")
 .then((data) => {
   return data.json();
 })
 .then((Data) => {
   let tData = "";
   Data.forEach((item) => {
     tData += `
     <tr> 
       <td>${item.candid}</td>
       <td>${item.candFirstName}</td>
       <td>${item.candLastName}</td>
       <td>${item.candPosition}</td>
       <td>${item.candParty}</td>
       <td>
         <a href="EditCandidate.html?id=${item.candid}" class="btn btn-success">Edit</a>
         <a href="Add_Candidate.html?id=${item.candid}" class="btn btn-danger">Delete</a>
       </td>
     </tr>`;
   });
   document.getElementById('candbody').innerHTML = tData;
 });



 //FECTCH OF DELETE BY ID IN CANDIDATE TABLE
const urlParams = new URLSearchParams(window.location.search);
const candidateId = urlParams.get('id');
 fetch(`http://localhost:8080/api/candidate/delete/${candidateId}`, {
  method: 'DELETE',
  headers: {
    'Content-Type': 'application/json'
  },
 
}).then(res =>{
  if (res.ok) {console.log("ID HAVE BEEN DELETED") 
   window.location.reload();

}
  else{console.log("delete unsuccessful")}
  return res
})
.then (res=>console.log(res))






//FETCH GET BY ID FROM VOTER TABLE TO DASHBOARD

 // Retrieve the voterId from the URL query parameter
 const urlParam = new URLSearchParams(window.location.search);
 const voterId = urlParam.get('voterId');

 //Make an API call to your Spring Boot backend to retrieve the voter data
// Replace the <YOUR_BACKEND_ENDPOINT> with the actual endpoint URL
 fetch(`http://localhost:8080/api/voter/getbyid/${voterId}`)
   .then(response => response.json())
   .then(data => {
     // Populate the form fields with the retrieved data
     document.getElementById('firstName').value = data.firstName;
     document.getElementById('lastName').value = data.lastName;
     document.getElementById('email').value = data.email;
     document.getElementById('address').value = data.address;
   })
   .catch(error => console.log(error));







   // FETCH LIST DATA FROM VOTING TABLE
//    fetch("http://localhost:8080/api/voting/list")
//    .then((data) => {
//      return data.json();
//    })
//    .then((Data) => {
//      let tData = "";
//      Data.forEach((voting) => {
//        tData += `
//          <tr> 
//            <td>${voting.id}</td>
//            <td>${voting.voter.firstName}</td>
//            <td>${voting.voter.lastName}</td>
//            <td>${voting.candidate.candFirstName}</td>
//            <td>${voting.candidate.candLastName}</td>
//            <td>${voting.candidate.candPosition}</td>
//            <td>${voting.candidate.candParty}</td>
//            <td>
//              <a href="#" class="btn btn-primary"><i class="bi bi-pencil-square"></i></a>
//              <a href="#" class="btn btn-danger" onclick="deleteVoting(${voting.id})"><i class="bi bi-trash"></i></a>
//            </td>
//          </tr>`;
//      });
//      document.getElementById('tdata').innerHTML = tData;
//    });
 
//  function deleteVoting(id) {
//    fetch(`http://localhost:8080/api/voting/delete/${id}`, {
//      method: 'DELETE',
//    })
//      .then((response) => response.json())
//      .then((data) => {
//        // Handle the response or update the UI accordingly
//        console.log(data);
//        window.location.reload();
//      })
//      .catch((error) => {
//        console.error('Error:', error);
//      });
//  }

 





  //DROP DOWN list IN VOTER TABLE
  fetch('http://localhost:8080/api/voter/Voter')
  .then(function(response) {
      if (response.ok) {
          return response.json();
      }
      throw new Error('Network response was not ok.');
  })
  .then(function(voters) {
      // Get the select element
      var select = document.getElementById('voter');

      // Iterate over the voters and create an option for each
      voters.forEach(function(Voter) {
          var option = document.createElement('option');
          option.value = Voter.voterId;
          option.text = Voter.firstName + ' ' + Voter.lastName;
          select.appendChild(option);
      });
  })
  .catch(function(error) {
      console.error('Error:', error);
  });





  //DROP DOWN list IN CANDIDATE TABLE
  fetch('http://localhost:8080/api/candidate/Candidate')
  .then(function(response) {
      if (response.ok) {
          return response.json();
      }
      throw new Error('Network response was not ok.');
  })
  .then(function(candidate) {
      // Get the select element
      var select = document.getElementById('Candidate');
      // Iterate over the voters and create an option for each
      candidate.forEach(function(Candidate) {
          var option = document.createElement('option');
          option.value = Candidate.candid;
          option.text = Candidate.candFirstName + ' ' + Candidate.candLastName  + ' ' + Candidate.candPosition + ' ' +Candidate.candParty;
          select.appendChild(option);
      
      });
  })
  .catch(function(error) {
      console.error('Error:', error);
  });



//FETCH  DROP DOWN LIST OF VOTING TABLE GET DATA
  //document.addEventListener('DOMContentLoaded', function() {
//     fetch('http://localhost:8080/api/voting/list') // Replace with the endpoint to fetch all voting records
//         .then(response => response.json())
//         .then(data => {
//             var dropdown = document.getElementById('votingDropdown');
//             data.forEach(voting => {
//                 var optionText = 'Voting ID: ' + Voting.id + ', Voter: ' + Voting.voter.firstName + ' ' + Voting.voter.lastName + ', Candidate: ' + Voting.candidate.candFirstName + ' ' + Voting.candidate.candLastName;
//                 var option = document.createElement('option');
//                 option.value = Voting.id;
//                 option.textContent = optionText;
//                 dropdown.appendChild(option);
//             });
//         });
// // });





///drop down list from voting table


// fetch('http://localhost:8080/api/voting/list')
//   .then(function(response) {
//       if (response.ok) {
//           return response.json();
//       }
//       throw new Error('Network response was not ok.');
//   })
//   .then(function(Voting) {
//       // Get the select element
//       var dropdown = document.getElementById('votingDropdown');
//       // Iterate over the voters and create an option for each
//       Voting.forEach(function(Voting) {
//           var option = document.createElement('option');
//           option.value =Voting.id;
//           option.text = 'Voting ID: ' + Voting.id  + ', Candidate: ' + Voting.candidate.candFirstName + ' ' + Voting.candidate.candLastName + ' ' + Voting.candidate.candPosition;
//           dropdown.appendChild(option);


//       });
//   })
//   .catch(function(error) {
//       console.error('Error:', error);
//   });




  





// Fetch candidates and populate the dropdown
fetch('http://localhost:8080/api/candidate/Candidate')
  .then(function(response) {
    if (response.ok) {
      return response.json();
    }
    throw new Error('Network response was not ok.');
  })
  .then(function(candidates) {
    var select = document.getElementById('candidate');
    candidates.forEach(function(candidate) {
      var option = document.createElement('option');
      option.value = candidate.candid;
      option.text = candidate.candFirstName + ' ' + candidate.candLastName + ' ' + candidate.candPosition + ' ' + candidate.candParty;
      select.appendChild(option);
    });
  })
  .catch(function(error) {
    console.error('Error:', error);
  });

  //FETCH DROP DOWN-LIST WHICH SAVED IN THE VOTING TABLE
// Handle form submission
document.getElementById('votingForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission

  var voterId = document.getElementById('voter').value;
  var candidateId = document.getElementById('Candidate').value;

  // Create the voting object
  var votingData = {
    voter: { voterId: voterId },
    candidate: { candid: candidateId }
  };

  // Send the voting data to the backend API
  fetch('http://localhost:8080/api/voting/save', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(votingData)
  })
    .then(function(response) {
      if (response.ok) {
        // Handle the successful submission
        console.log('Voting submitted successfully!');
        alert('voting successfully');
      } else {
        throw new Error('Error: ' + response.status);
      }
    })
    .catch(function(error) {
      console.error('Error:', error);
    });
});






















$(document).ready(function() {
  $('.navbar-toggler').click(function() {
    $('#navbarNav').toggleClass('show');
  });
});




