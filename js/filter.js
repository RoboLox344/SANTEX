 //root
 const ROOT_PRODUCER = document.querySelector('.producer-list-item--wp');//производители
 const ROOT_characteristic = document.querySelector('.characteristic-list-item--wp');//список характеристик
 const PRODUCER_BASE = [
    {
        id:'099',
        name:'Valtec',
        sum:'14',  
    },
    {
        id:'02',
        name:'KrunS',
        sum:'444',  
    },
    {
        id:'03',
        name:'BUMS',
        sum:'33',  
    },
    {
        id:'04',
        name:'Trub',
        sum:'44',  
    },
    {
        id:'05',
        name:'Sempo',
        sum:'56',  
    },
 ];

 const characteristic_BASE = [
    {
        id:'01-1',
        name:'Большой',
        sum:'56',  
    },
    {
        id:'02-1',
        name:'Средний',
        sum:'34',  
    },
    {
        id:'03-1',
        name:'Маленький',
        sum:'111',  
    },
    {
        id:'04-1',
        name:'Тонкий',
        sum:'56',  
    },
    {
        id:'05-1',
        name:'Толстый',
        sum:'45',  
    },
 ];

 function ProdList(date){

    
    date.forEach(({id, name, sum}) =>{
        let ListProdHtml= '';
        ListProdHtml += `
            <li class="producer-list-item">
                <div class="producer-name" id='${id}'>${name}</div>
                <div class="producer-count">(${sum})</div>
            </li>
        `;

        ROOT_PRODUCER.insertAdjacentHTML("beforeend", ListProdHtml);
    });
    
 };
  ProdList(PRODUCER_BASE);

  function CharList (date){
    date.forEach(({id,name,sum}) => {
        let ListChar = '';
        ListChar += `
            <li class="characteristic-list-item">
                <div class="characteristic-name" id='${id}'>${name}</div>
                <div class="characteristic-count">(${sum})</div>
            </li>
        `;
        ROOT_characteristic.insertAdjacentHTML("beforeend", ListChar);
    });
    
  };
  CharList(characteristic_BASE);
//клик производтиель
function  FunClick(){
    let ProducerItem = document.querySelectorAll('.producer-name');
    
        ProducerItem.forEach(({id}) =>{
            
            var Producer = id;
            
            let Stroka = document.getElementById(id);
            console.log('пизда' + Producer)
            Stroka.addEventListener('click', function(event){
                if( Producer ==  event.target.id){
                    Stroka.parentElement.classList.toggle('producer-list-item--wp--active');
                    
                }
                
            }) ;
        });
    
    
};
FunClick();

   
//клик характеристики
function CharClick(){

    let CharItem = document.querySelectorAll('.characteristic-name');
    CharItem.forEach(({id}) =>{
        var Char = id;
        let CharList = document.getElementById(id);
        console.log('жопа' + Char);
        CharList.addEventListener('click', function(event){
            if( Char ==  event.target.id){
                CharList.parentElement.classList.toggle('producer-list-item--wp--active');
            }
            
        }) 
    });

};
CharClick();
    



    


