const submit = document.querySelector('button')

async function practiceFetch(){
    const id = document.querySelector('input').value 
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(res => res.json())
    .then(data => {
        console.log(data)

        document.querySelector('#placeToSee').innerText = data.title
    })
}

submit.addEventListener('click', practiceFetch)
