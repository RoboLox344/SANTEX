document.body.classList.add('dark-theme');

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
    ModalLogin.classList.add('modal-login-active');
    ModalWinowEntry.classList.add('login-activ');
    document.body.classList.add('no-scroll-body')

    BtnLoginEx.addEventListener('click', function CloseModalLogin(){
      ModalLogin.classList.remove('modal-login-active');
      ModalWinowLogin.classList.remove('login-activ');
      document.body.classList.remove('no-scroll-body')
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
      ModalLogin.classList.remove('modal-login-active');
      ModalWinowLogin.classList.remove('login-activ');
      document.body.classList.remove('no-scroll-body')
    });

    
  };

window.onclick = function (event) {
    if (event.target == ModalLogin) {
      ModalLogin.classList.remove('modal-login-active');
      ModalWinowLogin.classList.remove('login-activ');
      document.body.classList.remove('no-scroll-body')
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

const ROOT_BASKET = document.body;
console.log(ROOT_BASKET)
const Button_basket_open = document.querySelector('.button-cart');
console.log(Button_basket_open)
/* redner basket */
function BasketRender (){
  let HtmlModalBasket = '';
  HtmlModalBasket += `
    <!-- модалльная корзина-->
    <div class="kozina-modal-container-wp">
        <div class="kozina-modal-wp">
            <!--  -->
            <div class="kozina-cart-wp">
                <div class="kozina-cart-item">Насосная группа без смесителя Rommer - Ду25 (без насоса)</div>
                <div class="kozina-button-wp">
                    <button class="">
                        <a class="nav-cart-cont" href="#">
                            <svg width="20" height="20" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" class="svg-corzina">
                                <path d="M1 21L11 11L1 21ZM21 1L11 11L21 1ZM11 11L1 1L11 11ZM11 11L21 21L11 11Z" fill="#7880B5"/>
                                <path d="M1 21L11 11M11 11L21 1M11 11L1 1M11 11L21 21" stroke="#7880B5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </a>  
                    </button>
                </div>
            </div>
            <!-- карт -->
            <div class="kozina-cart-wp">
                <div class="kozina-cart-item">Насосная группа без смесителя Rommer - Ду25 (без насоса)</div>
                <div class="kozina-button-wp">
                    <button class="">
                        <a class="nav-cart-cont" href="#">
                            <svg width="20" height="20" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" class="svg-corzina">
                                <path d="M1 21L11 11L1 21ZM21 1L11 11L21 1ZM11 11L1 1L11 11ZM11 11L21 21L11 11Z" fill="#7880B5"/>
                                <path d="M1 21L11 11M11 11L21 1M11 11L1 1M11 11L21 21" stroke="#7880B5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </a>  
                    </button>
                </div>
            </div>
            <!-- карт -->
            <div class="kozina-cart-wp">
                <div class="kozina-cart-item">Насосная группа без смесителя Rommer - Ду25 (без насоса)</div>
                <div class="kozina-button-wp">
                    <button class="">
                        <a class="nav-cart-cont" href="#">
                            <svg width="20" height="20" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" class="svg-corzina">
                                <path d="M1 21L11 11L1 21ZM21 1L11 11L21 1ZM11 11L1 1L11 11ZM11 11L21 21L11 11Z" fill="#7880B5"/>
                                <path d="M1 21L11 11M11 11L21 1M11 11L1 1M11 11L21 21" stroke="#7880B5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </a>  
                    </button>
                </div>
            </div>
            <!-- карт -->
            <div class="kozina-cart-wp">
                <div class="kozina-cart-item">Насосная группа без смесителя Rommer - Ду25 (без насоса)</div>
                <div class="kozina-button-wp">
                    <button class="">
                        <a class="nav-cart-cont" href="#">
                            <svg width="20" height="20" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" class="svg-corzina">
                                <path d="M1 21L11 11L1 21ZM21 1L11 11L21 1ZM11 11L1 1L11 11ZM11 11L21 21L11 11Z" fill="#7880B5"/>
                                <path d="M1 21L11 11M11 11L21 1M11 11L1 1M11 11L21 21" stroke="#7880B5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </a>  
                    </button>
                </div>
            </div>
            <!-- карт -->
            <div class="kozina-cart-wp">
                <div class="kozina-cart-item">Насосная группа без смесителя Rommer - Ду25 (без насоса)</div>
                <div class="kozina-button-wp">
                    <button class="">
                        <a class="nav-cart-cont" href="#">
                            <svg width="20" height="20" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" class="svg-corzina">
                                <path d="M1 21L11 11L1 21ZM21 1L11 11L21 1ZM11 11L1 1L11 11ZM11 11L21 21L11 11Z" fill="#7880B5"/>
                                <path d="M1 21L11 11M11 11L21 1M11 11L1 1M11 11L21 21" stroke="#7880B5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </a>  
                    </button>
                </div>
            </div>
        </div>
        <div class="buttons-korzina-wp">
            <a class="button button-korzina" href="korzina.html" id="">Оформить</a>
            <button class="button button-korzina" id="BasketClose">Закрыть</button>
        </div>
    </div>
    <!-- ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// -->
  `;
  ROOT_BASKET.insertAdjacentHTML("beforeend", HtmlModalBasket);
};
BasketRender();
/* ......................................................................... */
const active = document.querySelector('.kozina-modal-container-wp');
Button_basket_open.addEventListener('click', function(){
  active.classList.toggle('kozina-modal-container-wp-active');
});
/* ........................................................................ */
const Button_Basket_Close = document.getElementById('BasketClose');
Button_Basket_Close.addEventListener('click', function(){
  active.classList.remove('kozina-modal-container-wp-active');
});