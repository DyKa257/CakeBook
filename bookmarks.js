// LEFT SIDEBAR
const leftMenuItems = document.querySelectorAll('.menu-item');

// RIGHT SIDEBAR
const rightMenuItems = document.querySelectorAll('.item');

// MENU
const menu = document.querySelector('#menu');
const menuModal = document.querySelector('.menu');

// THEME
const theme = document.querySelector('#theme');
const themeModal = document.querySelector('.customize-theme');
var root = document.querySelector(':root');
const colorPalette = document.querySelectorAll('.choose-color span');
const Bg1 = document.querySelector('.bg-1');
const Bg2 = document.querySelector('.bg-2');
const Bg3 = document.querySelector('.bg-3');


// =============== LEFT SIDEBAR =================

// remove active class from all left menu items
const changeLeftActiveItem = () => {
    leftMenuItems.forEach(leftItem => {
        leftItem.classList.remove('active');
    })
}

leftMenuItems.forEach(leftItem => {
    leftItem.addEventListener('click', () => {
        changeLeftActiveItem();
        leftItem.classList.add('active');
    })
})

// =============== RIGHT SIDEBAR =================

// remove active class from all left menu items
const changeRightActiveItem = () => {
    rightMenuItems.forEach(rightItem => {
        rightItem.classList.remove('active');
    })
}

rightMenuItems.forEach(rightItem => {
    rightItem.addEventListener('click', () => {
        changeRightActiveItem();
        rightItem.classList.add('active');
    })
})


// =============== MENU =================

// open menu
const openMenuModal = () => {
    menuModal.style.display = 'grid';
}

// closes menu
const closeMenuModal = (e) => {
    if(e.target.classList.contains('menu')){
        menuModal.style.display = 'none';
    }
}

//  close, open menu
menuModal.addEventListener('click', closeMenuModal);

menu.addEventListener('click', openMenuModal);


// ======================== THEME/DISPLAY CUSTOMIZATION ==========================

// open modal
const openThemeModal = () => {
    themeModal.style.display = 'grid';
}

// closes modal
const closeThemeModal = (e) => {
    if(e.target.classList.contains('customize-theme')){
        themeModal.style.display = 'none';
    }
}

//  close modal
themeModal.addEventListener('click', closeThemeModal);

theme.addEventListener('click', openThemeModal);




// remove active class from colors
const changeActiveColorClass = () => {
    colorPalette.forEach(colorPicker => {
        colorPicker.classList.remove('active');
    })
}

// change primary colors
colorPalette.forEach(color => {
    color.addEventListener('click', () => {
        let primary;
        // remove active class from colors
        changeActiveColorClass();
        
        if(color.classList.contains('color-1')){
            primaryHue = 205;
        } else if(color.classList.contains('color-2')){
            primaryHue = 52;
        } else if(color.classList.contains('color-3')){
            primaryHue = 352;
        } else if(color.classList.contains('color-4')){
            primaryHue = 152;
        } else if(color.classList.contains('color-5')){
            primaryHue = 252;
        }
        color.classList.add('active');

        root.style.setProperty('--primary-color-hue', primaryHue);
    })
})






// theme BACKGROUND values
let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;
let dark;

// changes background color
const changeBG = () => {
    root.style.setProperty('--light-color-lightness', lightColorLightness);
    root.style.setProperty('--white-color-lightness', whiteColorLightness);
    root.style.setProperty('--dark-color-lightness', darkColorLightness);
    root.style.setProperty('--dark', dark);
}


// change background colors
/*Bg1.addEventListener('click', () => {
    // add active class
    Bg1.classList.add('active');
    // remove active class from the others
    Bg2.classList.remove('active');
    Bg3.classList.remove('active');
    // remove customized changes from local storage
    window.location.reload();
})*/
Bg1.addEventListener('click', () => {
    darkColorLightness = '17%';
    whiteColorLightness = '100%';
    lightColorLightness = '96%';
    dark = '0';
    
    // add active class
    Bg1.classList.add('active');
    // remove active class from the others
    Bg2.classList.remove('active');
    Bg3.classList.remove('active');
    changeBG();
})

Bg2.addEventListener('click', () => {
    darkColorLightness = '95%';
    whiteColorLightness = '20%';
    lightColorLightness = '15%';
    dark = '205';
    
    // add active class
    Bg2.classList.add('active');
    // remove active class from the others
    Bg1.classList.remove('active');
    Bg3.classList.remove('active');
    changeBG();
})

Bg3.addEventListener('click', () => {
    darkColorLightness = '95%';
    whiteColorLightness = '10%';
    lightColorLightness = '0%';
    dark = '255';
    
    // add active class
    Bg3.classList.add('active');
    // remove active class from the others
    Bg1.classList.remove('active');
    Bg2.classList.remove('active');
    changeBG();
})


// END