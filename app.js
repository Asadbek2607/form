const submitBtn = document.querySelector('#submitBtn');
const firstName = document.querySelector('#firstName');
const email = document.querySelector('#email');
const username = document.querySelector('#username');
const newPassword = document.querySelector('#newPassword');
const confirmPassword = document.querySelector('#confirmPassword');
const errorMsg = document.querySelector('#errorMsg');
const myForm = document.querySelector('.form');
<<<<<<< HEAD




    submitBtn.addEventListener('click', ($event)=>{
=======





submitBtn.addEventListener('click', ($event)=>{
>>>>>>> bdd9b64d2660777a465dfbbf6403cdec58ac365d
    $event.preventDefault();
    if(firstName.value && email.value && username.value && newPassword.value && confirmPassword.value){
        alert(`Congratulations ${firstName.value}! You have successfully registered`)
    }else{
        alert('Missing information. Please, fill out required fields');
    }
    myForm.reset();
<<<<<<< HEAD
    });

=======
})
>>>>>>> bdd9b64d2660777a465dfbbf6403cdec58ac365d

// Checking if both password field is match

confirmPassword.addEventListener('blur', ()=>{
    validation();
})
newPassword.addEventListener('blur', ()=>{
    validation();
})

let validation=()=>{
    if(newPassword.value === confirmPassword.value){
        newPassword.style.border = 'thin solid green';
        confirmPassword.style.border = 'thin solid green';
    }else{
        newPassword.style.border = 'thin solid red';
        confirmPassword.style.border = 'thin solid red';
        errorMsg.style.display = 'inline';
        errorMsg.style.color = 'red';
    }
}

confirmPassword.addEventListener('focus', ()=>{
    errorMsg.style.display = 'none';
})


