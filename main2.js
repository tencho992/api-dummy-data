const submit = document.querySelector('button')

function getDummyData(){
    const userInput = document.querySelector('input[type=radio]:checked')
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(data => {
        console.log(data)
        for(let i= 0; i <= data.length; i++){
            if(data[i].completed.value == userInput){
                console.log(userInput)
                document.querySelector('#placeToSee').innerText = data[0].id
            }
        }
        
    })
}

submit.addEventListener('click', getDummyData)