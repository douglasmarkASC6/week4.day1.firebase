const database = firebase.database().ref();
const titleElement = document.getElementById("title");
const messageElement = document.getElementById("message");
const button = document.getElementById("submitButton");
button.addEventListener("click",updateDB);



function updateDB(event){
    event.preventDefault();
    const title  = titleElement.value;
    const message  = messageElement.value;
    console.log(title + " : " + message);

    titleElement.value = "";
    messageElement.value  = "";

    const value = {
        TITLE: title,
        MESSAGE: message
    }

    database.push(value);
    location.href  = "/index.html";

}

database.on('child_added', addMessage);
let msgContainer = document.querySelector(".allMessages")

function addMessage(data) {
    const row = (data.val());
    const title = row.TITLE;
    const message = row.MESSAGE;

    const p = document.createElement('p');
    p.innerText = `${title}: ${message}`;
    msgContainer.appendChild(p);
}
