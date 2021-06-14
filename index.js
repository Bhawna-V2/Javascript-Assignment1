// Function to show user data

function showUserData() {
    
    var firstName1 = document.getElementById("firstName").value;
    var lastName1 = document.getElementById("lastName").value;
    var gender1 = document.getElementById("gender").value;

    let data = document.getElementById("result");
    data.innerHTML = 
    ` <p>First Name : ${firstName1}</p>
    <p>Last Name: ${lastName1}</p>
    <p>Gender : ${gender1}</p> `
    
    //document.write ( "First Name : " + document.getElementById("firstName").value + "<br>" + "Last Name : " + document.getElementById("lastName").value + "<br>" + "Gender : " + document.getElementById("gender").value);


    console.log("First Name : " + document.getElementById("firstName").value);
    console.log("Last Name : " +  document.getElementById("lastName").value);
    console.log("Gender : " +  document.getElementById("gender").value);
    // showData(firstName1, lastName1, gender1);
}

// function showData(firstName1, lastName1, gender1) {
//     let data = document.getElementById("result");
//     data.innerHTML = 
//     ` <p>Fist Name : ${firstName1}</p>
//     <p>Last Name: ${lastName1}</p>
//     <p>Gender : ${gender1}</p> `
// }