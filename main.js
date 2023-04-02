var menulist = document.getElementById('menulist');

function openmenu(){
    menulist.style.right = '0'
}

function closemenu(){
    menulist.style.right = '-200px'
}

function openlog(){
    window.location = 'login.html';
}
function opensign(){
    window.location = 'Sign-up.html';
}

function goToHome(){
    window.location = 'index.html';
}


// window.location.href = "";

function SubmitEvent(){
    var firstname = document.getElementById('firstname');
    var lastname = document.getElementById('lastname');
    var email = document.getElementById('email');
    var password = document.getElementById('password');
    var confirmpassword = document.getElementById('conf_password');
    // var message = document.getElementById('message').value;
   

    if(firstname.value == "" || lastname.value == "" || email.value == "" || password.value == "" || confirmpassword.value == ""){
        confirm('Please click ok to confirm...')
        alert('invalid information');
        return false;
    }
    else {
        alert('login Successfully');
    }
}

//     Form.addEventListener('submit', function (e) {
//     e.preventDefault();
// })
    // var email = document.getElementById('email');
    // var phone = document.getElementById('phone');
    // var make = document.getElementById('make');
    // var model = document.getElementById('model');
    // var message = document.getElementById('message');

function sendEvent(){

    var email = document.getElementById('email');
    var name = document.getElementById('name');
    var phone = document.getElementById('phone');
    var make = document.getElementById('make');
    var model = document.getElementById('model');
    
    if (name.value == "" || phone.value == "" || email.value == "" || make.value == "" || model.value == ""){
        
        alert('invalid information');

        name.focus();
        email.focus();
        phone.focus();
        make.focus();
        model.focus();

        email.style.border = "solid 3px red";
        name.style.border = "solid 3px red";
        phone.style.border = "solid 3px red";
        make.style.border = "solid 3px red";
        model.style.border = "solid 3px red";
        return false;
    }
    
    else{
        alert('Message Sent. Thank you!')
        return;
    }
    
}

function myFunction(){
    var required = document.getElementById('required');
    

    if (required.value == ""){
        alert('Enter your email');
        return;
    }
    else{
        alert('please check your email to reset password. Thank you!');
        window.location = "index.html";
    }
}

function goToReset(){
    window.location = "forgotpassword.html";
}