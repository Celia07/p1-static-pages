//login page 


// const url= 'http://localhost:7000';

// function login() {
//     var form = document.getElementById("LoginForm");
//     var un = form.username.value;
//     var pw = form.password.value;
//     var xmlhttp = new XMLHttpRequest();
//     xmlhttp.open("post", "Login", true);
//     xmlhttp.onreadystatechange = function () {
//         if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
//             console.log("login ok");

//         }else {
//             console.log("login error");
//         }
//         }
//     }

//     widows.addEventListener("click", function() {
//         var loginForm = document.getElementById("LoginForm"); //giving me an object to the variable loginform
//         // console.log(loginForm);
//         loginForm.addEventListener("submit", function() { //add eventlistiner to the loginform
//             console.log("logging sumbitted");
           
             
//          });
//      });
 


// var headers = {
//     "Content-Type": "application/json",                                                                                                
//     "Access-Control-Origin": "*"
//  }

 var data = {
    "username": "nbelin5",
    "password": "password"
}

fetch("http://localhost:7000/login",{
    method: "POST",
    // headers: headers,
    body:  JSON.stringify(data)
})
.then(function(response){ 
    return response.json(); 
})
.then(function(data){ 
    console.log(data)
});


     
      



// //populate pending request for manager page


// let pendingReimbContainer= document.getElementById('pendingReimbcontainer');
// console.log(pendingReimbContainer);


// function populatependingReimbpage(pendingReimnb){
//     for(pendingReimb of pendingReimb)

//          let cDiv = document.createElement('div');
//         console.log(cDiv);

//         //set the innerHTML of the new div
//         cDiv.innerHTML = `
//         <h3>${reimbursement.reimbId}</h3>
//         <h3>${reimbursement.amount}</h3>
//         <h3>${reimbursement.reimbSubmitted}</h3>
//         <h3>${reimbursement.reimbResolved}</h3>
//         <h3>${reimbursement.reimbDescription}</h3>
//         <h3>${reimbursement.reimbReciept}</h3>
//         <h3>${reimbursement.reimbAuthor}</h3>
//         <h3>${reimbursement.reimbResolver}</h3>
//         <h3>${reimbursement.reimbType}</h3>
//         `;

//         console.log(cDiv);


//         //Finally we can append the courses to the container
//         pendingReimbContainer.append(cDiv);
//     }
// }
  


// function fetchPokemon(name){
//     let apiUrl = `
            // ${reimbursement.reimbId}
//          ${reimbursement.amount}
//         ${reimbursement.reimbSubmitted}
//         ${reimbursement.reimbResolved}
//         ${reimbursement.reimbDescription}
//         ${reimbursement.reimbReciept}
//         ${reimbursement.reimbAuthor}
//         ${reimbursement.reimbResolver}
//         ${reimbursement.reimbType}
// `;
//     fetch(apiUrl)
//         .then((res) => res.json())
//         .then((data) => populatePokemon(data));
// };

