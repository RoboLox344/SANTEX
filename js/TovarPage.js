const TabsCategori = document.querySelectorAll('.tabs-pointer');
console.log(TabsCategori);
TabsCategori.forEach(({id}) => {
    let Stroka = document.getElementById(id);
    const ContentList = document.querySelectorAll('.tabs-panel');
    Stroka.addEventListener('click', function(){
            if(id == 'Char'){
                Stroka.classList.add('tabs-acitve');
                TabsCategori.forEach(({id}) => {
                    if (id !== 'Char'){
                        console.log(id)
                        let DeleteStorka = document.getElementById(id);
                        DeleteStorka.classList.remove('tabs-acitve')
                    }
                });
                ContentList.forEach(({id}) => {
                    let pageCont = document.getElementById(id);
                    if( id == 'CharCont'){ 
                        pageCont.classList.add('tabs-panel--active');
                        document.getElementById('OpisContent').classList.remove('tabs-panel--active');
                        document.getElementById('OtziviContent').classList.remove('tabs-panel--active');
                    } 
                });
            }else if (id == 'Opisanie'){
                Stroka.classList.add('tabs-acitve');
                TabsCategori.forEach(({id}) => {
                    if (id !== 'Opisanie'){
                        console.log(id)
                        let DeleteStorka = document.getElementById(id);
                        DeleteStorka.classList.remove('tabs-acitve')
                    }
                });
                ContentList.forEach(({id}) => {
                    let pageCont = document.getElementById(id);
                    if(id == 'OpisContent'){
                        pageCont.classList.add('tabs-panel--active');
                        document.getElementById('CharCont').classList.remove('tabs-panel--active');
                        document.getElementById('OtziviContent').classList.remove('tabs-panel--active');
                    }
                });
            }else if (id == 'Otzivi'){
                Stroka.classList.add('tabs-acitve');
                TabsCategori.forEach(({id}) => {
                    if (id !== 'Otzivi'){
                        console.log(id)
                        let DeleteStorka = document.getElementById(id);
                        DeleteStorka.classList.remove('tabs-acitve')
                    }
                });
                ContentList.forEach(({id}) => {
                    let pageCont = document.getElementById(id);
                    if(id == 'OtziviContent'){
                        pageCont.classList.add('tabs-panel--active');
                        document.getElementById('CharCont').classList.remove('tabs-panel--active');
                        document.getElementById('OpisContent').classList.remove('tabs-panel--active');
                    }
                });
            }

        
    });
    
 });

 