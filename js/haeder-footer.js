document.body.style.background = '#0D1115';

const LoginButton = document.querySelector('.button-login');//кнопка логина 
const ModalLogin = document.querySelector('.modal-login');//серый экран заднего фона входа
const BtnLoginEx = document.querySelector('.button-modal--exit'),//кнопка выхода на форме входа
BtnLoginExx = document.getElementById('Button-ex-login');//кнопка выхода на форме 
const ModalWinowEntry = document.querySelector('.wraper-modal-entry');// окна входа
const ModalWinowLogin = document.querySelector('.wraper-modal-login');// окна регситрации 
const TransitionToRegistration = document.querySelector('.modal-text-regist'),//кнопка перехода к регистрации
TransitionToLogin = document.querySelector('.modal-text-entry');//кнопка перехода к входа
const ButtonCatalog = document.querySelector('.drop-button');//кнопка для выпад списка каталог
const ModalCatalogList = document.querySelector('.modal-catalog');
//онка регистрации
LoginButton.onclick = function aaa(){
    ModalLogin.style.display = 'block';
    ModalWinowEntry.classList.add('login-activ');

    BtnLoginEx.addEventListener('click', function CloseModalLogin(){
      ModalLogin.style.display = 'none';
      ModalWinowLogin.classList.remove('login-activ');
    });

    TransitionToLogin.addEventListener('click', function OpenLogin(){
      ModalWinowLogin.classList.remove('login-activ');
      ModalWinowEntry.classList.add('login-activ');
      
    });
  
    TransitionToRegistration.addEventListener('click', function OpenRegister(){
      ModalWinowEntry.classList.remove('login-activ');
      ModalWinowLogin.classList.add('login-activ');
    });

    BtnLoginExx.addEventListener('click', function CloseModalRegister(){
      ModalLogin.style.display = 'none';
      ModalWinowLogin.classList.remove('login-activ');
    });

    
  };

window.onclick = function (event) {
    if (event.target == ModalLogin) {
      ModalLogin.style.display = 'none';
      ModalWinowLogin.classList.remove('login-activ');
    } 
    
  }; 
//воход в сущ аккаунт
document.getElementById('ButtonEntrance').addEventListener("click", function(){
    var UserLogin = document.getElementById('Login').value;
    var UserPassword = document.getElementById('Password').value;
    if (UserLogin == 'ilya12345' && UserPassword == 'ilya12345'){
        document.getElementById('ButtonEntrance').setAttribute('href', 'acc.html');
        
    }else if (UserLogin == 'ilya12345' && UserPassword !== 'ilya12345'){
        alert('Неверный  пароль')
    }else if (UserLogin !== 'ilya12345' && UserPassword == 'ilya12345'){
        alert('Неверный логин ')
    }else if (UserLogin !== 'ilya12345' && UserPassword !== 'ilya12345'){
        alert('Неверный логи или пароль')
    }
        
});
//выпад меню каталог
document.addEventListener("DOMContentLoaded", function() { 
ButtonCatalog.addEventListener('click', function CatalogList(){
  ModalCatalogList.classList.add('md-cat-acitv');
});
window.addEventListener("click", function (event) {
  if (!event.target.matches(".drop-button")) {
    ModalCatalogList.classList.remove('md-cat-acitv');
  }
});
});
//появление контента
document.addEventListener('DOMContentLoaded', function() {

  let blocks = document.querySelectorAll('.container');



  function checkBlocksVisibility() {

    let windowHeight = window.innerHeight;



    blocks.forEach(block => {

      let blockPosition = block.getBoundingClientRect().top;



      if (blockPosition < windowHeight - 100) {

        block.style.opacity = "1";

        block.style.transform = "translateY(0)";

      } else {

        block.style.opacity = "0";

        block.style.transform = "translateY(50px)";

      }

    });

  }



  checkBlocksVisibility();



  window.addEventListener('scroll', checkBlocksVisibility);

});