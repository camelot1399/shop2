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
        let bodyWidth = document.querySelector('body').offsetWidth;
        
        if (attr === 'close') {

            menuBox.setAttribute('view', 'show');

            setTimeout( function() {
                menu.style.left = 0 + 'px';
            }, 100);
            
        } else {
            
            setTimeout( function() {
                menu.style.left = 230 + 'px';
            }, 100);

            setTimeout(() => {
                menuBox.setAttribute('view', 'close');
            }, 600);
 
        }
    }
}

menu.init();