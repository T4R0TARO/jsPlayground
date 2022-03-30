
// Get DATA
const baseEndPoint = 'https://ghibliapi.herokuapp.com/films/'

async function getData(){
    try{
        const response = await fetch(`${baseEndPoint}`)
        const data = await response.json()
        // console.log(data)

        data.forEach(function(item){
            console.log(item)
        })
    }catch(err){
        console.log(err)
        console.log("Yabai")
    }
}

getData()