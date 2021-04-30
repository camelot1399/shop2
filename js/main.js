let menu = {
    init() {
        let btnMenu = document.querySelector('#menuBtn');
        
        let btnCloseMenu = document.querySelector('.menu__button');
        let menu__backGr = document.querySelector('.menu__backGr');

        btnMenu.addEventListener('click', () => {
            this._handle();
        });

        btnCloseMenu.addEventListener('click', () => {
            this._handle();
        });

        menu__backGr.addEventListener('click', () => {
            this._handle();
        });
    },
    _handle() {
        let menuBox = document.querySelector('.menuBox');
        let attr = menuBox.getAttribute('view');
        let menu = document.querySelector('.menu');

        if (attr === 'close') {
            menuBox.setAttribute('view', 'show');

            setTimeout(() => {
                menu.style.left = '0px';
            }, 100);
            
        } else {
            
            setTimeout(() => {
                menu.style.left = '300px';
            }, 100);

            setTimeout(() => {
                menuBox.setAttribute('view', 'close');
            }, 400);
 
        }
    }
}

menu.init();