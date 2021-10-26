// Get data from a server

// fetch('https://reqres.in/api/users')
//     .then(res => {
//         if (res.ok){
//             console.log('SUCCESS')
//         } else {
//             console.log('Not Successful')
//         }
//         res.json()
//     })
//     .then(data => console.log(data))
//     .catch(error => console.log('ERROR'))



// Use the fetch option method "POST"
// set header
// stringigy JSON body

fetch('https://reqres.in/api/users', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify( {
        name: 'User 1'
    })
})
    .then(res => {

        // if (res.ok){
        //     console.log('SUCCESS')
        // } else {
        //     console.log('Not Successful')
        // }
        
        return res.json()
    })
    .then(data => console.log(data))
    .catch(error => console.log('ERROR'))
