jQuery(document).ready(function ($) {
  $(".btnFunction").click(function () {
    window.location = $(this).data("href");
  });
});

const excludePages = [
  '/login',
  '/',
  '/about',
  '/contact'
]

if(excludePages.indexOf(window.location.pathname) === -1) {
  const userData = JSON.parse(localStorage.getItem('USER_DATA') || '{}')
  if(userData.loggedIn) {
    document.getElementById('label-username').innerText = userData.user.username;
  } else {
    window.location.href = '/login'
  }
}

function logOut() {
  localStorage.removeItem('USER_DATA');
  window.location.href = '/login';
}

