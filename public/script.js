let username = '';

document.getElementById('join-btn').addEventListener('click',(event)=>{
    event.preventDefault();
    username = document.getElementById('username-input').value;
    console.log(username);
    if(username.trim() !== ''){
        console.log("I am here");
        document.querySelector('.form-username').style.display = 'none';
        document.querySelector('.chatroom-container').style.display = 'block';
    }
})



//fetch API
// let url = "https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json";
// async function getData(){
//     let response = await fetch(url);
//     let data = await response.json();
//     console.log(data);
// }
// getData();

//fetch using promise chaining
// let dArr = [];
// fetch(url)
//     .then(response => response.json())
//     .then(data => {
//         dArr = data;
//         console.log(dArr);
//     })
//     .catch(err => console.log(err));

// console.log(dArr);

