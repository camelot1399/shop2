let menu = {
    init() {
        let btnMenu = document.querySelector('#menuBtn');
        let btnCloseMenu = document.querySelector('.menu__button');
        let menu__backGr = document.querySelector('.menu__backGr');
        console.log(btnCloseMenu);
        console.log(btnMenu);
        btnCloseMenu.addEventListener('click', () => {
            btnMenu.click();
        });

        menu__backGr.addEventListener('click', () => {
            btnMenu.click();
        });
    }
}

menu.init();