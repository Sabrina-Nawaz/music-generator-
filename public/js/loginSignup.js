//Sign up & login animation 2-30line
let login = document.getElementById("login");
let loginButton = document.querySelector("#LoginBtn");
let singUpButton = document.querySelector("#SingUpBtn");
let register = document.getElementById("register");
let mobileLogin = document.getElementById("mLogin");
let mobileRegister = document.getElementById("mReg");
let form_box = document.getElementsByClassName("form-box")[0];
let register_box = document.getElementsByClassName("register-box")[0];
let login_box = document.getElementsByClassName("login-box")[0];

register.addEventListener("click", () => {
  form_box.style.transform = "translateX(80%)";
  login_box.classList.add("hidden");
  register_box.classList.remove("hidden");
});

login.addEventListener("click", () => {
  form_box.style.transform = "translateX(0%)";
  register_box.classList.add("hidden");
  login_box.classList.remove("hidden");
});

mobileRegister.addEventListener("click", () => {
  login_box.classList.add("hidden");
  register_box.classList.remove("hidden");
});

mobileLogin.addEventListener("click", () => {
  register_box.classList.add("hidden");
  login_box.classList.remove("hidden");
});

loginButton.addEventListener('click',()=>{

  const username = document.getElementById('login_username').value;
  const password = document.getElementById('login_password').value;

  if(username === '') {
    alert('The username is required.');
    return;
  }

  if(password === '') {
    alert('The password is required.');
    return;
  }

  const data = {username, password}

  fetch('/api/users/login', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(data)
  })
  .then((response) => response.json())
  .then((data) =>  {
    if(data.loggedIn) {
      localStorage.setItem('USER_DATA', JSON.stringify(data));
      window.location.href = '/homepage'
    } else {
      alert('Username or password is incorect.')
    }
  });
})


singUpButton.addEventListener('click',()=>{

  
  const username = document.getElementById('singup_username').value;
  const email = document.getElementById('singup_email').value;
  const password = document.getElementById('singup_password').value;
  const repassword = document.getElementById('singup_repassword').value;

  if(username === '') {
    alert('The username is required.');
    return;
  }

  if(email === '') {
    alert('The email is required.');
    return;
  }

  if(password === '') {
    alert('The password is required.');
    return;
  }

  if(password != repassword) {
    alert('The password is not the same');
    return;
  }

  const data = {username, email, password }

  fetch('/api/users/', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(data)
  })
  .then((response) => response.json())
  .then((data) =>  {
    if(data.loggedIn) {
      localStorage.setItem('USER_DATA', JSON.stringify(data));
      window.location.href = '/homepage'
    } else {
      alert(data.errors[0].message)
    }
  });
})