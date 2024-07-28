const Basket_Counter_Click = document.querySelector('.basket-count-counter-wp');
Basket_Counter_Click.addEventListener('click', function(e){
    let counet = 1;
    let numder = document.querySelector('.basket-quantity')
    if (e.target.id === 'BasketSubtract'){
        numder.innerHTML(`0`);
    }else if(e.target.id === BasketAddition){
        numder.innerHTML(`2`);
    }
})