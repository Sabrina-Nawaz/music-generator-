//Sign up & login animation 2-30line
let login=document.getElementById('login');
let loginButton=document.querySelector("#loginBtn")
let register=document.getElementById('register');
let mobileLogin=document.getElementById('mLogin');
let mobileRegister=document.getElementById('mReg');
let form_box=document.getElementsByClassName('form-box')[0];
let register_box=document.getElementsByClassName('register-box')[0];
let login_box=document.getElementsByClassName('login-box')[0];

register.addEventListener('click',()=>{
    form_box.style.transform='translateX(80%)';
    login_box.classList.add('hidden');
    register_box.classList.remove('hidden');
})

login.addEventListener('click',()=>{
    form_box.style.transform='translateX(0%)';
    register_box.classList.add('hidden');
    login_box.classList.remove('hidden');
  
})

mobileRegister.addEventListener('click',()=>{
    login_box.classList.add('hidden');
    register_box.classList.remove('hidden');
})

mobileLogin.addEventListener('click',()=>{
    register_box.classList.add('hidden');
    login_box.classList.remove('hidden');
})

loginButton.addEventListener('click',()=>{

    fetch('http://localhost:3001/api/users/login')
  .then((response) => response.json())
  .then((data) => console.log(data));
    //get the inputs
    //you re going to call the api and send the inputs
    // you will receive the user data and the logged in value if everyrthing is succesful
    //save that into the local storage
    //make all your pages that need to show or hide values after the auth look for the values in local storage

})
