'use strict'

//create

//read

//update

//delete

const input = document.getElementById(`input`);
const button = document.getElementById(`button`);
const createBtn = document.getElementById(`create`);
const output = document.getElementById(`output`);

button.onclick = () => read(input.value);
createBtn.onclick = () => create(input.value);


// let read = INTERFACE => {

//     fetch(INTERFACE)
//         .then((response) => {
//             if (response.status !== 200) {
//                 console.error(`status ${response.status}`);
//                 return
//             } else {
//                 response.json()
//                     .then(data => {
//                         output.innerHTML = JSOM.stringify(data);
//                     })
//             }

//         }).catch(err => {
//             console.error(err);
//         });

// }

let read = INTERFACE => {

    axios
        .get(INTERFACE)
        .then(response => {
            output.innerHTML = JSON.stringify(response.data);
        }).catch(err => {
            console.error(err);
        });

}

// let create = URL => {

//     axios
//         .post(URL, {
//             first_name: "Mohamed",
//             email: "MJ@qa.com"
//         })
//         .then(response => {
//             output.innerHTML = JSON.stringify(response);
//         }).catch(err => {
//             console.error(err);
//         });
// }

// read('https://reqres.in/api/users?page=2');

// read('https://reqres.in/api/users/2');

// fetch('https://reqres.in/api/users?page=2')
//     .then((response) => {
//         if (response.status !== 200) {
//             console.log(`Looks like there was a problem.Status Code: ${response.status}`);
//             return;
//         }
//         response.json()
//             .then(data => output.innerHTML = JSON.stringify(data)); //console.log(data));
//     })
//     .catch(err => console.error(`Fetch Error :-S ${err}`));

// https://reqres.in/

// let create = URL => {

//     axios
//         .post(URL, {
//             name: "Morpheus",
//             job: "Leader"
//         })
//         .then(response => {
//             output.innerHTML = JSON.stringify(response);
//         }).catch(err => {
//             console.error(err);
//         });
// }

let create = URL => {

    axios
        .post(URL, {
            email: "eve.holt@reqres.in",
            password: "pistol"
        })
        .then(response => {
            output.innerHTML = JSON.stringify(response);
        }).catch(err => {
            console.error(err);
        });
}

// create("https://reqres.in/api/users");

