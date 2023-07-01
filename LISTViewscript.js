// Fetch candidates data
fetch("http://localhost:8080/api/candidate/Candidate")
  .then((response) => response.json())
  .then((candidates) => {
    // Fetch voting data
    fetch("http://localhost:8080/api/voting/candidate-count")
      .then((response) => response.json())
      .then((votingCounts) => {
        let tbData = "";
        candidates.forEach((candidate) => {
          // Find the corresponding voting count for the candidate
          const votingCount = votingCounts.find((item) => item[0] === candidate.candid);
          const totalVote = votingCount ? votingCount[1] : 0;

          tbData += `
            <tr> 
              <td>${candidate.candid}</td>
              <td>${candidate.candFirstName}</td>
              <td>${candidate.candLastName}</td>
              <td>${candidate.candPosition}</td>
              <td>${candidate.candParty}</td>
              <td>${totalVote}</td>
            </tr>`;
        });
        document.getElementById('viewresult').innerHTML = tbData;
      });
  });


  


  const url =new URLSearchParams(window.location.search);
const votervoter =url.get('id')

//FETCH DELETE  IN voter table
fetch(`http://localhost:8080/api/voter/delete/${votervoter}`, {
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