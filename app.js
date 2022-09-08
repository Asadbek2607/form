const submitBtn = document.querySelector('#submitBtn');
const firstName = document.querySelector('#firstName');
const email = document.querySelector('#email');
const username = document.querySelector('#username');
const newPassword = document.querySelector('#newPassword');
const confirmPassword = document.querySelector('#confirmPassword');






submitBtn.addEventListener('click', ()=>{
    if(firstName.value && email.value && username.value && newPassword.value && confirmPassword.value){
        alert(`Congratulations ${firstName.value}! You have successfully registered`)
    }else{
        alert('Missing information. Please, fill out required fields');
    }

})

