

let loginForm = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () =>{
  console.log("Botton is clicked")
    loginForm.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    navbar.classList.remove('active');
}

