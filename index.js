var notifyme = document.querySelector("#notify-me");
var email = document.querySelector("#email");

function clicked(){
    showMessage();
}

function showMessage(){
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(email.value.match(mailformat))
    {
        document.getElementById("message").innerText = "Valid mail ID";
    }else{
        document.getElementById("message").innerText = "Please provide a valid email address";
        document.getElementById("message").style.fontStyle = "italics";
        document.getElementById("email").style.borderColor ="red";
        }
    }




notifyme.addEventListener("click", clicked);
