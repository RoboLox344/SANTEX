const Categori = document.querySelectorAll('.categor-text');

/* обработка клика */
Categori.forEach(({id}) => {
    var AccId= id;
    let Clickelemet = document.getElementById(id);
    /* путь до родителя */
    let RoditelCase = Clickelemet.parentElement;
    let GrandPa = RoditelCase.parentElement;
    let MainCont = GrandPa.parentElement.parentElement.parentElement.parentElement;
    var InfoCatefgoty = MainCont.querySelector('.persAcc-data-wp');
/* начальный контент */
    if(AccId == 'Acc'){
        CreateContentAcc();
    }
/* раздел с функциями */
     /* адресс рендер контента  */
     function CreateContentAddress(){
        let ContentAddress = '';
        ContentAddress = `
            <div class="adress-category-wp persAcc-data-active">

                <div class="adress-category-content-wp">
                    <div class="adress-category-item">
                        <h3 class="heading-text-pers-info">Персональная информация</h3>
                        <div class="adress-category-form-wp">
                            <div class="ferst-adress-category-wp">
                                <div class="input-adress-category-wp ">
                                    <p class="inuput-pers-info-name ">Адресс</p>
                                    <input type="text" name="AddressPersInfo"  class="input-entry-pers-info" placeholder="Введите адресс доставки" required  minlength="4">
                                </div>
                                <button class="button button-adress-category">Сохранить</button>
                            </div>
                            <div class="adress-categor-text-wp">
                                Данный адресс будет автоматически указываться при офромлении заказа, при необходимости его можно поменять
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="adress-category-bg">
                <img src="img/adress-category-bg.png" alt="">
            </div>
        `;
        InfoCatefgoty.insertAdjacentHTML("beforeend", ContentAddress);
    };
    /* акк ренедер контент */
    function CreateContentAcc(){
        let ContentAcc = '';
        ContentAcc = `
             <div class="personal-information-category-wp persAcc-data-active">
                            
                            <div class="pers-info-content-wp">
                                <div class="pers-info-item">
                                    <h3 class="heading-text-pers-info">Персональная информация</h3>
                                    <div class="pers-info-form-wp">
                                        <div class="ferst-pers-info-wp">
                                            <div class="input-pers-info-wp">
                                                <p class="inuput-pers-info-name bg-inuput-pers-info-name">Имя</p>
                                                <input type="text" name="Name"  class="input-entry-pers-info" placeholder="Введите ваше имя" required  minlength="4">
                                            </div>
                                            <div class="input-pers-info-wp">
                                                <p class="inuput-pers-info-name bg-inuput-pers-info-name">Почта</p>
                                                <input type="email" name="Post"  class="input-entry-pers-info" placeholder="Введите почту" required  minlength="4">
                                            </div>
                                            <div class="input-pers-info-wp input-pers-info-wp-no-bottom">
                                                <p class="inuput-pers-info-name bg-inuput-pers-info-name">Логин</p>
                                                <input type="text" name="Login"  class="input-entry-pers-info" placeholder="Введите логин" required  minlength="4">
                                            </div>
                                            
                                        </div>

                                        <div class="second-pers-info-wp">
                                            <div class="input-pers-info-wp">
                                                <p class="inuput-pers-info-name bg-inuput-pers-info-name">Фамииля</p>
                                                <input type="text" name="SurName"  class="input-entry-pers-info" placeholder="Введите ваше фамилию" required  minlength="4">
                                            </div>
                                            <div class="input-pers-info-wp ">
                                                <p class="inuput-pers-info-name bg-inuput-pers-info-name">Номер телефона</p>
                                                <input type="tel" name="Post"  class="input-entry-pers-info" placeholder="Введите номер телефона" required  minlength="4">
                                            </div>
                                            <div class="input-pers-info-wp input-pers-info-wp-no-bottom ">
                                                <p class="inuput-pers-info-name inuput-pers-info-name--foto">Фото</p>
                                                <div class="input-pers-info-wp--flex">
                                                    <div class="foto-pers-info-wp">
                                                        <button class="button-pers-info">
                                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" class="button-pers-info-svg" xmlns="http://www.w3.org/2000/svg">
                                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M2.75 12C2.75 18.937 5.063 21.25 12 21.25C18.937 21.25 21.25 18.937 21.25 12C21.25 5.063 18.937 2.75 12 2.75C5.063 2.75 2.75 5.063 2.75 12Z"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M10.6001 8.78444C10.6001 9.75744 9.81213 10.5454 8.83913 10.5454C7.86713 10.5454 7.07812 9.75744 7.07812 8.78444C7.07812 7.81144 7.86713 7.02344 8.83913 7.02344C9.81213 7.02344 10.6001 7.81144 10.6001 8.78444Z"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                                <path d="M21.1188 14.6667C20.2378 13.7607 18.9918 11.9297 16.7028 11.9297C14.4138 11.9297 14.3638 15.9677 12.0278 15.9677C9.69084 15.9677 8.74984 14.5967 7.22684 15.3127C5.70484 16.0277 4.46484 18.8737 4.46484 18.8737"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                            </svg>
                                                        </button>
                                                    </div>
                                                    <button class="button button-pers-info--change">Поменять</button>
                                                    <button class=" button-pers-info--back">вернуть</button>
                                                </div>
                                            </div>
                            
                                        </div>
                                    </div>
                
                                </div>
                                <div class="pers-info-passwor-item">
                                    <h3 class="heading-text-pers-info">Изменение пароля</h3>
                                    <div class="info-passwor-form-wp">
                                        <div class="ferst-pers-info-wp">
                                            <div class="input-pers-info-wp">
                                                <p class="inuput-pers-info-name ">Старый пароль</p>
                                                <input type="text" name="PasswordOld"  class="input-entry-pers-info" placeholder="Введите старый пароль" required  minlength="4">
                                            </div>
                                            <div class="input-pers-info-wp">
                                                <p class="inuput-pers-info-name ">Новый пароль</p>
                                                <input type="text" name="PasswordNew"  class="input-entry-pers-info" placeholder="Введите новый пароль" required  minlength="4">
                                            </div>
                                            <div class="input-pers-info-wp input-pers-info-wp-no-bottom">
                                                <p class="inuput-pers-info-name ">Введите еще раз новый пароль</p>
                                                <input type="text" name="PasswordNewSuc"  class="input-entry-pers-info" placeholder="Введите еще раз новый пароль" required  minlength="4">
                                            </div>
                                        </div>
                                    </div> 
                                </div>
                                <button class="button button-pers-info--save">Сохранить</button>
                            </div>
                        </div>
        `;
        InfoCatefgoty.insertAdjacentHTML("beforeend", ContentAcc);
    };
    /* избранное рендер контент */
    function CreateContentFav (){
        let ContentFav = '';
        ContentFav = `
            <div class="favourites-category-wp persAcc-data-active">
                <h2 class="heading-favourites-text">Избранное</h2>
                <div class="favourites-item-list-wp">
                    <div class="favourites-item-wp">
                        <div class="favourites-img-description-wp">
                            <img src="img/dush.png" alt="" class="favourites-img">
                            <div class="favourites-description-wp">
                            <p class="favourites-description">
                                Насосная группа без смесителя Rommer - Ду25 (без насоса)
                            </p>
                            </div>
                        </div>

                        <div class="favourites-price-button-wp">
                            <div class="favourites-price-wp">
                                <p class="favourites-text">Цена</p>
                                <p class="favourites-price-text">4 545$</p>
                            </div> 
                            <div class="favourites-button-wp">
                                <a class="nav-cart-cont" href="#">
                                    <svg width="21" height="20" viewBox="0 0 21 20" fill="#7880B5" xmlns="http://www.w3.org/2000/svg" class="svg-corzina">
                                        <path d="M14.3682 16.8745L8.31499 16.8745C5.73077 16.8745 3.62834 14.7721 3.62834 12.1879L3.62834 7.38404C3.62834 4.98174 2.43098 2.75812 0.425444 1.43578C0.0652751 1.19832 -0.03416 0.71388 0.203297 0.353711C0.440754 -0.0064969 0.925158 -0.105971 1.28541 0.131564C2.43028 0.886427 3.35909 1.88203 4.02327 3.0283C4.1668 3.1891 5.32416 4.41583 7.22148 4.41583L16.2162 4.41583C18.6702 4.36993 20.591 6.83265 19.9494 9.20136L18.914 13.3283C18.3901 15.4163 16.5208 16.8745 14.3682 16.8745ZM4.99348 5.53675C5.12334 6.13669 5.19056 6.75528 5.19056 7.38404L5.19056 12.1879C5.19056 13.9107 6.59218 15.3123 8.31499 15.3123L14.3682 15.3123C15.8033 15.3123 17.0495 14.3401 17.3987 12.9482L18.4341 8.8212C18.8154 7.41372 17.6739 5.95082 16.2162 5.97804L7.22144 5.97804C6.36335 5.97804 5.61645 5.79304 4.99348 5.53675ZM7.92443 19.0226C7.92443 18.4833 7.48729 18.0462 6.94805 18.0462C5.6525 18.0978 5.65364 19.9479 6.94805 19.9989C7.48729 19.9989 7.92443 19.5618 7.92443 19.0226ZM15.6965 19.0225C15.6965 18.4833 15.2593 18.0462 14.7201 18.0462C13.4245 18.0978 13.4257 19.9479 14.7201 19.9989C15.2593 19.9989 15.6965 19.5618 15.6965 19.0225ZM16.9973 8.32137C16.9973 7.88996 16.6476 7.54026 16.2162 7.54026L7.53388 7.54026C6.49751 7.5815 6.49829 9.06158 7.53388 9.10248L16.2162 9.10248C16.6476 9.10248 16.9973 8.75277 16.9973 8.32137Z" />
                                    </svg>
                                </a>
                                <a class="nav-cart-cont" href="#">
                                    <svg width="20" height="20" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" class="svg-corzina">
                                        <path d="M1 21L11 11L1 21ZM21 1L11 11L21 1ZM11 11L1 1L11 11ZM11 11L21 21L11 11Z" fill="#7880B5"/>
                                        <path d="M1 21L11 11M11 11L21 1M11 11L1 1M11 11L21 21" stroke="#7880B5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </a>                                        

                            </div>
                        </div>
                        
                        
                    </div>
                    <div class="favourites-item-wp">
                        <div class="favourites-img-description-wp">
                            <img src="img/tualet-noFon.png" alt="" class="favourites-img">
                            <div class="favourites-description-wp">
                            <p class="favourites-description">
                                Насосная группа без смесителя Rommer - Ду25 (без насоса)
                            </p>
                            </div>
                        </div>

                        <div class="favourites-price-button-wp">
                            <div class="favourites-price-wp">
                                <p class="favourites-text">Цена</p>
                                <p class="favourites-price-text">4 545$</p>
                            </div> 
                            <div class="favourites-button-wp">
                                <a class="nav-cart-cont" href="#">
                                    <svg width="21" height="20" viewBox="0 0 21 20" fill="#7880B5" xmlns="http://www.w3.org/2000/svg" class="svg-corzina">
                                        <path d="M14.3682 16.8745L8.31499 16.8745C5.73077 16.8745 3.62834 14.7721 3.62834 12.1879L3.62834 7.38404C3.62834 4.98174 2.43098 2.75812 0.425444 1.43578C0.0652751 1.19832 -0.03416 0.71388 0.203297 0.353711C0.440754 -0.0064969 0.925158 -0.105971 1.28541 0.131564C2.43028 0.886427 3.35909 1.88203 4.02327 3.0283C4.1668 3.1891 5.32416 4.41583 7.22148 4.41583L16.2162 4.41583C18.6702 4.36993 20.591 6.83265 19.9494 9.20136L18.914 13.3283C18.3901 15.4163 16.5208 16.8745 14.3682 16.8745ZM4.99348 5.53675C5.12334 6.13669 5.19056 6.75528 5.19056 7.38404L5.19056 12.1879C5.19056 13.9107 6.59218 15.3123 8.31499 15.3123L14.3682 15.3123C15.8033 15.3123 17.0495 14.3401 17.3987 12.9482L18.4341 8.8212C18.8154 7.41372 17.6739 5.95082 16.2162 5.97804L7.22144 5.97804C6.36335 5.97804 5.61645 5.79304 4.99348 5.53675ZM7.92443 19.0226C7.92443 18.4833 7.48729 18.0462 6.94805 18.0462C5.6525 18.0978 5.65364 19.9479 6.94805 19.9989C7.48729 19.9989 7.92443 19.5618 7.92443 19.0226ZM15.6965 19.0225C15.6965 18.4833 15.2593 18.0462 14.7201 18.0462C13.4245 18.0978 13.4257 19.9479 14.7201 19.9989C15.2593 19.9989 15.6965 19.5618 15.6965 19.0225ZM16.9973 8.32137C16.9973 7.88996 16.6476 7.54026 16.2162 7.54026L7.53388 7.54026C6.49751 7.5815 6.49829 9.06158 7.53388 9.10248L16.2162 9.10248C16.6476 9.10248 16.9973 8.75277 16.9973 8.32137Z" />
                                    </svg>
                                </a>
                                <a class="nav-cart-cont" href="#">
                                    <svg width="20" height="20" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" class="svg-corzina">
                                        <path d="M1 21L11 11L1 21ZM21 1L11 11L21 1ZM11 11L1 1L11 11ZM11 11L21 21L11 11Z" fill="#7880B5"/>
                                        <path d="M1 21L11 11M11 11L21 1M11 11L1 1M11 11L21 21" stroke="#7880B5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </a>                                        

                            </div>
                        </div>
                    </div>

                    <div class="favourites-item-wp">
                        <div class="favourites-img-description-wp">
                            <img src="img/gazona-kosilka-NoFon.png" alt="" class="favourites-img">
                            <div class="favourites-description-wp">
                            <p class="favourites-description">
                                Насосная группа без смесителя Rommer - Ду25 (без насоса)
                            </p>
                            </div>
                        </div>

                        <div class="favourites-price-button-wp">
                            <div class="favourites-price-wp">
                                <p class="favourites-text">Цена</p>
                                <p class="favourites-price-text">4 545$</p>
                            </div> 
                            <div class="favourites-button-wp">
                                <a class="nav-cart-cont" href="#">
                                    <svg width="21" height="20" viewBox="0 0 21 20" fill="#7880B5" xmlns="http://www.w3.org/2000/svg" class="svg-corzina">
                                        <path d="M14.3682 16.8745L8.31499 16.8745C5.73077 16.8745 3.62834 14.7721 3.62834 12.1879L3.62834 7.38404C3.62834 4.98174 2.43098 2.75812 0.425444 1.43578C0.0652751 1.19832 -0.03416 0.71388 0.203297 0.353711C0.440754 -0.0064969 0.925158 -0.105971 1.28541 0.131564C2.43028 0.886427 3.35909 1.88203 4.02327 3.0283C4.1668 3.1891 5.32416 4.41583 7.22148 4.41583L16.2162 4.41583C18.6702 4.36993 20.591 6.83265 19.9494 9.20136L18.914 13.3283C18.3901 15.4163 16.5208 16.8745 14.3682 16.8745ZM4.99348 5.53675C5.12334 6.13669 5.19056 6.75528 5.19056 7.38404L5.19056 12.1879C5.19056 13.9107 6.59218 15.3123 8.31499 15.3123L14.3682 15.3123C15.8033 15.3123 17.0495 14.3401 17.3987 12.9482L18.4341 8.8212C18.8154 7.41372 17.6739 5.95082 16.2162 5.97804L7.22144 5.97804C6.36335 5.97804 5.61645 5.79304 4.99348 5.53675ZM7.92443 19.0226C7.92443 18.4833 7.48729 18.0462 6.94805 18.0462C5.6525 18.0978 5.65364 19.9479 6.94805 19.9989C7.48729 19.9989 7.92443 19.5618 7.92443 19.0226ZM15.6965 19.0225C15.6965 18.4833 15.2593 18.0462 14.7201 18.0462C13.4245 18.0978 13.4257 19.9479 14.7201 19.9989C15.2593 19.9989 15.6965 19.5618 15.6965 19.0225ZM16.9973 8.32137C16.9973 7.88996 16.6476 7.54026 16.2162 7.54026L7.53388 7.54026C6.49751 7.5815 6.49829 9.06158 7.53388 9.10248L16.2162 9.10248C16.6476 9.10248 16.9973 8.75277 16.9973 8.32137Z" />
                                    </svg>
                                </a>
                                <a class="nav-cart-cont" href="#">
                                    <svg width="20" height="20" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" class="svg-corzina">
                                        <path d="M1 21L11 11L1 21ZM21 1L11 11L21 1ZM11 11L1 1L11 11ZM11 11L21 21L11 11Z" fill="#7880B5"/>
                                        <path d="M1 21L11 11M11 11L21 1M11 11L1 1M11 11L21 21" stroke="#7880B5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </a>                                        

                            </div>
                        </div>
                    </div>

                    <div class="favourites-item-wp">
                        <div class="favourites-img-description-wp">
                            <img src="img/tovar.png" alt="" class="favourites-img">
                            <div class="favourites-description-wp">
                            <p class="favourites-description">
                                Насосная группа без смесителя Rommer - Ду25 (без насоса)
                            </p>
                            </div>
                        </div>

                        <div class="favourites-price-button-wp">
                            <div class="favourites-price-wp">
                                <p class="favourites-text">Цена</p>
                                <p class="favourites-price-text">4 545$</p>
                            </div> 
                            <div class="favourites-button-wp">
                                <a class="nav-cart-cont" href="#">
                                    <svg width="21" height="20" viewBox="0 0 21 20" fill="#7880B5" xmlns="http://www.w3.org/2000/svg" class="svg-corzina">
                                        <path d="M14.3682 16.8745L8.31499 16.8745C5.73077 16.8745 3.62834 14.7721 3.62834 12.1879L3.62834 7.38404C3.62834 4.98174 2.43098 2.75812 0.425444 1.43578C0.0652751 1.19832 -0.03416 0.71388 0.203297 0.353711C0.440754 -0.0064969 0.925158 -0.105971 1.28541 0.131564C2.43028 0.886427 3.35909 1.88203 4.02327 3.0283C4.1668 3.1891 5.32416 4.41583 7.22148 4.41583L16.2162 4.41583C18.6702 4.36993 20.591 6.83265 19.9494 9.20136L18.914 13.3283C18.3901 15.4163 16.5208 16.8745 14.3682 16.8745ZM4.99348 5.53675C5.12334 6.13669 5.19056 6.75528 5.19056 7.38404L5.19056 12.1879C5.19056 13.9107 6.59218 15.3123 8.31499 15.3123L14.3682 15.3123C15.8033 15.3123 17.0495 14.3401 17.3987 12.9482L18.4341 8.8212C18.8154 7.41372 17.6739 5.95082 16.2162 5.97804L7.22144 5.97804C6.36335 5.97804 5.61645 5.79304 4.99348 5.53675ZM7.92443 19.0226C7.92443 18.4833 7.48729 18.0462 6.94805 18.0462C5.6525 18.0978 5.65364 19.9479 6.94805 19.9989C7.48729 19.9989 7.92443 19.5618 7.92443 19.0226ZM15.6965 19.0225C15.6965 18.4833 15.2593 18.0462 14.7201 18.0462C13.4245 18.0978 13.4257 19.9479 14.7201 19.9989C15.2593 19.9989 15.6965 19.5618 15.6965 19.0225ZM16.9973 8.32137C16.9973 7.88996 16.6476 7.54026 16.2162 7.54026L7.53388 7.54026C6.49751 7.5815 6.49829 9.06158 7.53388 9.10248L16.2162 9.10248C16.6476 9.10248 16.9973 8.75277 16.9973 8.32137Z" />
                                    </svg>
                                </a>
                                <a class="nav-cart-cont" href="#">
                                    <svg width="20" height="20" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" class="svg-corzina">
                                        <path d="M1 21L11 11L1 21ZM21 1L11 11L21 1ZM11 11L1 1L11 11ZM11 11L21 21L11 11Z" fill="#7880B5"/>
                                        <path d="M1 21L11 11M11 11L21 1M11 11L1 1M11 11L21 21" stroke="#7880B5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </a>                                        

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        InfoCatefgoty.insertAdjacentHTML("beforeend", ContentFav);
    };
    /* заказы рендер контент */
    function CreateContentОrders(){
        let ContentОrders = '';
        ContentОrders = `
            <div class="оrders-category-wp persAcc-data-active">
                <h2 class="heading-text-odrers">Ваши заказы</h2>
              
                <div class="order-item-wp">
                    <!-- заказ -->
                    <div class="order-item">
                        <div class="order-way">
                            <p class="order-number">Заказ №3432424</p>
                            <p class="order-date">Ожидаемая дата прибытия 12.02.2024</p>
                            <a href="#" class="order-details-definite">Детали заказа</a>
                        </div>
                        <div class="order-details-wp">
                            <div class="order-details">
                                <div class="order-step-1">
                                    <p class="order-text-status order-text-status-active">собирается</p>
                                    <div class="order-step-img-wp order-step-img-wp-active">
                                        <img src="img/step-1img.png" alt="" class="step-img-size">
                                        <div class="order-step-ready">
                                            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" class="svg-ready-order" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M25 50C38.8072 50 50 38.8072 50 25C50 19.9072 48.4772 15.1701 45.8619 11.2192L25.9861 33.3036C24.0622 35.4414 20.8244 35.7572 18.5234 34.0314L9.44444 27.2222C8.21714 26.3017 7.96842 24.5606 8.88889 23.3333C9.80936 22.1061 11.5505 21.8572 12.7778 22.7778L21.8567 29.5869L42.2611 6.91542C37.7739 2.63103 31.6942 0 25 0C11.1929 0 0 11.1929 0 25C0 38.8072 11.1929 50 25 50Z" fill="#7880B5"/>
                                            </svg>  
                                        </div>
                                    </div>
                                </div>
                                <div class="order-line-wp">
                                    <div class="order-line-way">передается
                                        <svg width="25" height="20" viewBox="0 0 25 20" fill="none" class="order-svg order-svg-active" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M23.2875 8.1875L21.375 5.3125C21.2606 5.13878 21.1047 4.99636 20.9213 4.89814C20.738 4.79991 20.533 4.749 20.325 4.75H16V2.25C16 1.91848 15.8683 1.60054 15.6339 1.36612C15.3995 1.1317 15.0815 1 14.75 1H2.25C1.91848 1 1.60054 1.1317 1.36612 1.36612C1.1317 1.60054 1 1.91848 1 2.25V14.75C1 15.0815 1.1317 15.3995 1.36612 15.6339C1.60054 15.8683 1.91848 16 2.25 16H4.75C4.75 15.337 5.01339 14.7011 5.48223 14.2322C5.95107 13.7634 6.58696 13.5 7.25 13.5C7.91304 13.5 8.54893 13.7634 9.01777 14.2322C9.48661 14.7011 9.75 15.337 9.75 16H17.25C17.25 15.337 17.5134 14.7011 17.9822 14.2322C18.4511 13.7634 19.087 13.5 19.75 13.5C20.413 13.5 21.0489 13.7634 21.5178 14.2322C21.9866 14.7011 22.25 15.337 22.25 16H23.5V8.875C23.4981 8.62996 23.4242 8.39088 23.2875 8.1875Z" fill="#7880B5"/>
                                            <path d="M16 16V2.25C16 1.91848 15.8683 1.60054 15.6339 1.36612C15.3995 1.1317 15.0815 1 14.75 1H2.25C1.91848 1 1.60054 1.1317 1.36612 1.36612C1.1317 1.60054 1 1.91848 1 2.25V14.75C1 15.0815 1.1317 15.3995 1.36612 15.6339C1.60054 15.8683 1.91848 16 2.25 16H4.75C4.75 15.337 5.01339 14.7011 5.48223 14.2322C5.95107 13.7634 6.58696 13.5 7.25 13.5C7.91304 13.5 8.54893 13.7634 9.01777 14.2322C9.48661 14.7011 9.75 15.337 9.75 16H16ZM16 16V4.75H20.325C20.533 4.749 20.738 4.79991 20.9213 4.89814C21.1047 4.99636 21.2606 5.13878 21.375 5.3125L23.2875 8.1875C23.4242 8.39088 23.4981 8.62996 23.5 8.875V16H22.25C22.25 15.337 21.9866 14.7011 21.5178 14.2322C21.0489 13.7634 20.413 13.5 19.75 13.5C19.087 13.5 18.4511 13.7634 17.9822 14.2322C17.5134 14.7011 17.25 15.337 17.25 16H16Z" stroke="#FCF2F2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M9.75 16C9.75 16.4945 9.60338 16.9778 9.32868 17.3889C9.05397 17.8 8.66352 18.1205 8.20671 18.3097C7.74989 18.4989 7.24723 18.5484 6.76228 18.452C6.27732 18.3555 5.83187 18.1174 5.48223 17.7678C5.1326 17.4181 4.8945 16.9727 4.79804 16.4877C4.70157 16.0028 4.75108 15.5001 4.9403 15.0433C5.12952 14.5865 5.44995 14.196 5.86108 13.9213C6.2722 13.6466 6.75555 13.5 7.25 13.5C7.91304 13.5 8.54893 13.7634 9.01777 14.2322C9.48661 14.7011 9.75 15.337 9.75 16ZM19.75 13.5C19.2555 13.5 18.7722 13.6466 18.3611 13.9213C17.95 14.196 17.6295 14.5865 17.4403 15.0433C17.2511 15.5001 17.2016 16.0028 17.298 16.4877C17.3945 16.9727 17.6326 17.4181 17.9822 17.7678C18.3319 18.1174 18.7773 18.3555 19.2623 18.452C19.7472 18.5484 20.2499 18.4989 20.7067 18.3097C21.1635 18.1205 21.554 17.8 21.8287 17.3889C22.1034 16.9778 22.25 16.4945 22.25 16C22.25 15.337 21.9866 14.7011 21.5178 14.2322C21.0489 13.7634 20.413 13.5 19.75 13.5Z" stroke="#FCF2F2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>   
                                    </div>
                                </div>
                                <div class="order-step-2">
                                    <p class="order-text-status">доставляется
                                        <svg width="25" height="20" viewBox="0 0 25 20" fill="none" class="order-svg " xmlns="http://www.w3.org/2000/svg">
                                            <path d="M23.2875 8.1875L21.375 5.3125C21.2606 5.13878 21.1047 4.99636 20.9213 4.89814C20.738 4.79991 20.533 4.749 20.325 4.75H16V2.25C16 1.91848 15.8683 1.60054 15.6339 1.36612C15.3995 1.1317 15.0815 1 14.75 1H2.25C1.91848 1 1.60054 1.1317 1.36612 1.36612C1.1317 1.60054 1 1.91848 1 2.25V14.75C1 15.0815 1.1317 15.3995 1.36612 15.6339C1.60054 15.8683 1.91848 16 2.25 16H4.75C4.75 15.337 5.01339 14.7011 5.48223 14.2322C5.95107 13.7634 6.58696 13.5 7.25 13.5C7.91304 13.5 8.54893 13.7634 9.01777 14.2322C9.48661 14.7011 9.75 15.337 9.75 16H17.25C17.25 15.337 17.5134 14.7011 17.9822 14.2322C18.4511 13.7634 19.087 13.5 19.75 13.5C20.413 13.5 21.0489 13.7634 21.5178 14.2322C21.9866 14.7011 22.25 15.337 22.25 16H23.5V8.875C23.4981 8.62996 23.4242 8.39088 23.2875 8.1875Z" fill="#7880B5"/>
                                            <path d="M16 16V2.25C16 1.91848 15.8683 1.60054 15.6339 1.36612C15.3995 1.1317 15.0815 1 14.75 1H2.25C1.91848 1 1.60054 1.1317 1.36612 1.36612C1.1317 1.60054 1 1.91848 1 2.25V14.75C1 15.0815 1.1317 15.3995 1.36612 15.6339C1.60054 15.8683 1.91848 16 2.25 16H4.75C4.75 15.337 5.01339 14.7011 5.48223 14.2322C5.95107 13.7634 6.58696 13.5 7.25 13.5C7.91304 13.5 8.54893 13.7634 9.01777 14.2322C9.48661 14.7011 9.75 15.337 9.75 16H16ZM16 16V4.75H20.325C20.533 4.749 20.738 4.79991 20.9213 4.89814C21.1047 4.99636 21.2606 5.13878 21.375 5.3125L23.2875 8.1875C23.4242 8.39088 23.4981 8.62996 23.5 8.875V16H22.25C22.25 15.337 21.9866 14.7011 21.5178 14.2322C21.0489 13.7634 20.413 13.5 19.75 13.5C19.087 13.5 18.4511 13.7634 17.9822 14.2322C17.5134 14.7011 17.25 15.337 17.25 16H16Z" stroke="#FCF2F2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M9.75 16C9.75 16.4945 9.60338 16.9778 9.32868 17.3889C9.05397 17.8 8.66352 18.1205 8.20671 18.3097C7.74989 18.4989 7.24723 18.5484 6.76228 18.452C6.27732 18.3555 5.83187 18.1174 5.48223 17.7678C5.1326 17.4181 4.8945 16.9727 4.79804 16.4877C4.70157 16.0028 4.75108 15.5001 4.9403 15.0433C5.12952 14.5865 5.44995 14.196 5.86108 13.9213C6.2722 13.6466 6.75555 13.5 7.25 13.5C7.91304 13.5 8.54893 13.7634 9.01777 14.2322C9.48661 14.7011 9.75 15.337 9.75 16ZM19.75 13.5C19.2555 13.5 18.7722 13.6466 18.3611 13.9213C17.95 14.196 17.6295 14.5865 17.4403 15.0433C17.2511 15.5001 17.2016 16.0028 17.298 16.4877C17.3945 16.9727 17.6326 17.4181 17.9822 17.7678C18.3319 18.1174 18.7773 18.3555 19.2623 18.452C19.7472 18.5484 20.2499 18.4989 20.7067 18.3097C21.1635 18.1205 21.554 17.8 21.8287 17.3889C22.1034 16.9778 22.25 16.4945 22.25 16C22.25 15.337 21.9866 14.7011 21.5178 14.2322C21.0489 13.7634 20.413 13.5 19.75 13.5Z" stroke="#FCF2F2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    </p>
                                    <div class="order-step-img-wp">
                                        <img src="img/ste-2img.png" alt="" class="step-img-size">
                                    </div>
                                </div>
                                <div class="order-line-wp">
                                    <div class="order-line-way">заказ уже едет</div>
                                </div>
                                <div class="order-step-3">
                                    <p class="order-text-status">ждет вас</p>
                                    <div class="order-step-img-wp">
                                        <img src="img/step-3img.png" alt="" class="step-img-size">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="order-line"></div>
                    </div>
                    <!-- заказ -->
                    <div class="order-item">
                        <div class="order-way">
                            <p class="order-number">Заказ №3432424</p>
                            <p class="order-date">Ожидаемая дата прибытия 12.02.2024</p>
                            <a href="#" class="order-details-definite">Детали заказа</a>
                        </div>
                        <div class="order-details-wp">
                            <div class="order-details">
                                <div class="order-step-1">
                                    <p class="order-text-status">собирается
                                        <svg width="25" height="20" viewBox="0 0 25 20" fill="none" class="order-svg " xmlns="http://www.w3.org/2000/svg">
                                            <path d="M23.2875 8.1875L21.375 5.3125C21.2606 5.13878 21.1047 4.99636 20.9213 4.89814C20.738 4.79991 20.533 4.749 20.325 4.75H16V2.25C16 1.91848 15.8683 1.60054 15.6339 1.36612C15.3995 1.1317 15.0815 1 14.75 1H2.25C1.91848 1 1.60054 1.1317 1.36612 1.36612C1.1317 1.60054 1 1.91848 1 2.25V14.75C1 15.0815 1.1317 15.3995 1.36612 15.6339C1.60054 15.8683 1.91848 16 2.25 16H4.75C4.75 15.337 5.01339 14.7011 5.48223 14.2322C5.95107 13.7634 6.58696 13.5 7.25 13.5C7.91304 13.5 8.54893 13.7634 9.01777 14.2322C9.48661 14.7011 9.75 15.337 9.75 16H17.25C17.25 15.337 17.5134 14.7011 17.9822 14.2322C18.4511 13.7634 19.087 13.5 19.75 13.5C20.413 13.5 21.0489 13.7634 21.5178 14.2322C21.9866 14.7011 22.25 15.337 22.25 16H23.5V8.875C23.4981 8.62996 23.4242 8.39088 23.2875 8.1875Z" fill="#7880B5"/>
                                            <path d="M16 16V2.25C16 1.91848 15.8683 1.60054 15.6339 1.36612C15.3995 1.1317 15.0815 1 14.75 1H2.25C1.91848 1 1.60054 1.1317 1.36612 1.36612C1.1317 1.60054 1 1.91848 1 2.25V14.75C1 15.0815 1.1317 15.3995 1.36612 15.6339C1.60054 15.8683 1.91848 16 2.25 16H4.75C4.75 15.337 5.01339 14.7011 5.48223 14.2322C5.95107 13.7634 6.58696 13.5 7.25 13.5C7.91304 13.5 8.54893 13.7634 9.01777 14.2322C9.48661 14.7011 9.75 15.337 9.75 16H16ZM16 16V4.75H20.325C20.533 4.749 20.738 4.79991 20.9213 4.89814C21.1047 4.99636 21.2606 5.13878 21.375 5.3125L23.2875 8.1875C23.4242 8.39088 23.4981 8.62996 23.5 8.875V16H22.25C22.25 15.337 21.9866 14.7011 21.5178 14.2322C21.0489 13.7634 20.413 13.5 19.75 13.5C19.087 13.5 18.4511 13.7634 17.9822 14.2322C17.5134 14.7011 17.25 15.337 17.25 16H16Z" stroke="#FCF2F2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M9.75 16C9.75 16.4945 9.60338 16.9778 9.32868 17.3889C9.05397 17.8 8.66352 18.1205 8.20671 18.3097C7.74989 18.4989 7.24723 18.5484 6.76228 18.452C6.27732 18.3555 5.83187 18.1174 5.48223 17.7678C5.1326 17.4181 4.8945 16.9727 4.79804 16.4877C4.70157 16.0028 4.75108 15.5001 4.9403 15.0433C5.12952 14.5865 5.44995 14.196 5.86108 13.9213C6.2722 13.6466 6.75555 13.5 7.25 13.5C7.91304 13.5 8.54893 13.7634 9.01777 14.2322C9.48661 14.7011 9.75 15.337 9.75 16ZM19.75 13.5C19.2555 13.5 18.7722 13.6466 18.3611 13.9213C17.95 14.196 17.6295 14.5865 17.4403 15.0433C17.2511 15.5001 17.2016 16.0028 17.298 16.4877C17.3945 16.9727 17.6326 17.4181 17.9822 17.7678C18.3319 18.1174 18.7773 18.3555 19.2623 18.452C19.7472 18.5484 20.2499 18.4989 20.7067 18.3097C21.1635 18.1205 21.554 17.8 21.8287 17.3889C22.1034 16.9778 22.25 16.4945 22.25 16C22.25 15.337 21.9866 14.7011 21.5178 14.2322C21.0489 13.7634 20.413 13.5 19.75 13.5Z" stroke="#FCF2F2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    </p>
                                    <div class="order-step-img-wp ">
                                        <img src="img/step-1img.png" alt="" class="step-img-size">
                                    </div>
                                </div>
                                <div class="order-line-wp">
                                    <div class="order-line-way">передается
                                        <svg width="25" height="20" viewBox="0 0 25 20" fill="none" class="order-svg " xmlns="http://www.w3.org/2000/svg">
                                            <path d="M23.2875 8.1875L21.375 5.3125C21.2606 5.13878 21.1047 4.99636 20.9213 4.89814C20.738 4.79991 20.533 4.749 20.325 4.75H16V2.25C16 1.91848 15.8683 1.60054 15.6339 1.36612C15.3995 1.1317 15.0815 1 14.75 1H2.25C1.91848 1 1.60054 1.1317 1.36612 1.36612C1.1317 1.60054 1 1.91848 1 2.25V14.75C1 15.0815 1.1317 15.3995 1.36612 15.6339C1.60054 15.8683 1.91848 16 2.25 16H4.75C4.75 15.337 5.01339 14.7011 5.48223 14.2322C5.95107 13.7634 6.58696 13.5 7.25 13.5C7.91304 13.5 8.54893 13.7634 9.01777 14.2322C9.48661 14.7011 9.75 15.337 9.75 16H17.25C17.25 15.337 17.5134 14.7011 17.9822 14.2322C18.4511 13.7634 19.087 13.5 19.75 13.5C20.413 13.5 21.0489 13.7634 21.5178 14.2322C21.9866 14.7011 22.25 15.337 22.25 16H23.5V8.875C23.4981 8.62996 23.4242 8.39088 23.2875 8.1875Z" fill="#7880B5"/>
                                            <path d="M16 16V2.25C16 1.91848 15.8683 1.60054 15.6339 1.36612C15.3995 1.1317 15.0815 1 14.75 1H2.25C1.91848 1 1.60054 1.1317 1.36612 1.36612C1.1317 1.60054 1 1.91848 1 2.25V14.75C1 15.0815 1.1317 15.3995 1.36612 15.6339C1.60054 15.8683 1.91848 16 2.25 16H4.75C4.75 15.337 5.01339 14.7011 5.48223 14.2322C5.95107 13.7634 6.58696 13.5 7.25 13.5C7.91304 13.5 8.54893 13.7634 9.01777 14.2322C9.48661 14.7011 9.75 15.337 9.75 16H16ZM16 16V4.75H20.325C20.533 4.749 20.738 4.79991 20.9213 4.89814C21.1047 4.99636 21.2606 5.13878 21.375 5.3125L23.2875 8.1875C23.4242 8.39088 23.4981 8.62996 23.5 8.875V16H22.25C22.25 15.337 21.9866 14.7011 21.5178 14.2322C21.0489 13.7634 20.413 13.5 19.75 13.5C19.087 13.5 18.4511 13.7634 17.9822 14.2322C17.5134 14.7011 17.25 15.337 17.25 16H16Z" stroke="#FCF2F2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M9.75 16C9.75 16.4945 9.60338 16.9778 9.32868 17.3889C9.05397 17.8 8.66352 18.1205 8.20671 18.3097C7.74989 18.4989 7.24723 18.5484 6.76228 18.452C6.27732 18.3555 5.83187 18.1174 5.48223 17.7678C5.1326 17.4181 4.8945 16.9727 4.79804 16.4877C4.70157 16.0028 4.75108 15.5001 4.9403 15.0433C5.12952 14.5865 5.44995 14.196 5.86108 13.9213C6.2722 13.6466 6.75555 13.5 7.25 13.5C7.91304 13.5 8.54893 13.7634 9.01777 14.2322C9.48661 14.7011 9.75 15.337 9.75 16ZM19.75 13.5C19.2555 13.5 18.7722 13.6466 18.3611 13.9213C17.95 14.196 17.6295 14.5865 17.4403 15.0433C17.2511 15.5001 17.2016 16.0028 17.298 16.4877C17.3945 16.9727 17.6326 17.4181 17.9822 17.7678C18.3319 18.1174 18.7773 18.3555 19.2623 18.452C19.7472 18.5484 20.2499 18.4989 20.7067 18.3097C21.1635 18.1205 21.554 17.8 21.8287 17.3889C22.1034 16.9778 22.25 16.4945 22.25 16C22.25 15.337 21.9866 14.7011 21.5178 14.2322C21.0489 13.7634 20.413 13.5 19.75 13.5Z" stroke="#FCF2F2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    </div>
                                </div>
                                <div class="order-step-2">
                                    <p class="order-text-status">доставляется</p>
                                    <div class="order-step-img-wp">
                                        <img src="img/ste-2img.png" alt="" class="step-img-size">
                                    </div>
                                </div>
                                <div class="order-line-wp">
                                    <div class="order-line-way">заказ уже едет</div>
                                </div>
                                <div class="order-step-3">
                                    <p class="order-text-status">ждет вас</p>
                                    <div class="order-step-img-wp">
                                        <img src="img/step-3img.png" alt="" class="step-img-size">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="order-line"></div>
                    </div>
                </div>
            </div>
        `;
        InfoCatefgoty.insertAdjacentHTML("beforeend", ContentОrders);
    };
    /* поддержка рендер контент */
    function CreateContentSupport(){
        let ContentSupport = '';
        ContentSupport = `
            <div class="support-category-wp persAcc-data-active">
                    напишите нам, мы вас всегда поддержим
            </div>
        `;
        InfoCatefgoty.insertAdjacentHTML("beforeend", ContentSupport);
    };
     /* корзина рендер контент */
     function CreateContentBasket(){
        let ContentBasket = '';
        ContentBasket = `
            <div class="basket-category-wp persAcc-data-active">
                    возможно тут будет корзина возможно тут будет корзина возможно тут будет корзина
                    возможно тут будет корзина возможно тут будет корзина возможно тут будет корзина
            </div>
        `;
        InfoCatefgoty.insertAdjacentHTML("beforeend", ContentBasket);
    };
/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */

    Clickelemet.addEventListener('click', function(e){
        if (AccId == e.target.id){
            Clickelemet.classList.add('categor-text-active');
            
           
            switch(AccId){
                case'Acc':
                    InfoCatefgoty.innerHTML="";
                    CreateContentAcc();
                break;
                case'Adress':
                    InfoCatefgoty.innerHTML="";
                    CreateContentAddress();
                break;
                case'Favourites':
                    InfoCatefgoty.innerHTML="";
                    CreateContentFav();
                break;
                case'Orders':
                    InfoCatefgoty.innerHTML="";
                    CreateContentОrders();
                break;
                case'Support':
                    InfoCatefgoty.innerHTML="";
                    CreateContentSupport();
                break;
                case'Basket':
                    InfoCatefgoty.innerHTML="";
                    CreateContentBasket();
                break;

                
                
            }
            let Line = GrandPa.querySelector('.line-categori');
            Line.classList.add('line-active');
            let SvgColor = RoditelCase.querySelector('.svg-categori')
            SvgColor.classList.add('svg-categori-active');
            if ( AccId == 'Support' || AccId == 'Orders'){
                console.log('BimBIm');
                SvgColor.classList.remove('svg-categori-active');
                SvgColor.classList.add('svg-categori-stroke-active');
            }
            
            console.log("bomba")
            Categori.forEach(({id}) => {   
                if(id !== AccId){
                    let NoClickelement = document.getElementById(id);
                    let NoTargetRoditelCase = NoClickelement.parentElement;
                    let NoGrandPa = NoTargetRoditelCase.parentElement;
                    let NoSvgColor = NoTargetRoditelCase.querySelector('.svg-categori')
                    NoSvgColor.classList.remove('svg-categori-active');
                    let NoLine = NoGrandPa.querySelector('.line-categori');
                    NoClickelement.classList.remove('categor-text-active');
                    NoLine.classList.remove('line-active');
                    NoSvgColor.classList.remove('svg-categori-active');
                    if ( id == 'Support' || id == 'Orders'){
                        console.log('BimBIm');
                        NoSvgColor .classList.remove('svg-categori-stroke-active');
                        
                    }
                }
            });
        }
    });
});
