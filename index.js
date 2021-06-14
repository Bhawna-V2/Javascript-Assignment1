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


// Array Practice

function showUsersData() {
    var names = [
        {
            name: "Bhawna Gupta",
            id: 101,
            position: "Front End Developer",
            salary: 35000,
        },
        {
            name: "Praveen Kumar",
            id: 102,
            position: "Messaging Administartor",
            salary: 55000,
        },
        {
            name: "Mahi Garg",
            id: 103,
            position: "Sr. Software Engineer",
            salary: 85000,
        },
        {
            name: "Mahir Garg",
            id: 104,
            position: "Jr. Software Engineer",
            salary: 15000,},
        {
            name: "Ansh Gupta",
            id: 105,
            position: "Jr. Front End Developer",
            salary: 25000,
        },
    ]
    // BASIC FOR

    // for(var i=0; i < names.length; i++) {

    //     if (names[i].salary > 30000) {
    //         console.log(names[i].salary);

    //         //document.write (names[i].salary + " , ")
            
    //         let stat = document.getElementById("userStat");
    //         stat.innerHTML += 
    //         `<p> ${names[i].salary} </p>`;
    //     } else {
    //         //document.write (names[i].salary + " , ")
    //     }
        
    //     //console.log(names[i]);
    // }

    // FOR IN

    // for (obj in names) {
    //     //console.log(names[obj]);

    //     if(names[obj].salary > 30000) {
    //         console.log(names[obj]);
    //         console.log(names[obj].salary);
    //     }
    // }

    // FOR OF

    for (var i in names) {
        //console.log(names[i]);

        if (names[i].salary > 30000) {
            //console.log(names[i]);
            console.log(names[i].salary);

            let stat = document.getElementById("userStat");
            stat.innerHTML += 
            ` <p>${names[i].salary} <br> </p>`;            
        }
    }

   
}

