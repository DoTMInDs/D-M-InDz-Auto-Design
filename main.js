const list = document.getElementById('list')
// const user = document.getElementById('user')

function openmenu(){
    list.style.right = '0'
    // user.style.display = 'block'
}
function closemenu(){
    list.style.right = '-200px'
    // user.style.display = 'none'
}



function SubmitEvent(){
    var email = document.getElementById('email');
    var password = document.getElementById('password');
    var form = document.getElementById('login-form')

    if(email.value == "" || password.value == ""){
        alert('invalid information');   
    }
    else{
        confirm('Please click ok to confirm...')
        alert('Submitted Succesfully. Thank you!')
        return;
    }
}

function goHome(){
    window.location = 'index.html';
}
function goToLogin(){
    window.location = 'login.html';
}
function goToSignin(){
    window.location = 'register.html';
}
