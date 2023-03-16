// SIDEBAR
const menuItems = document.querySelectorAll('.menu-item');

// MENU
const menu = document.querySelector('#menu');
const menuModal = document.querySelector('.menu');

// POST BOX
const createPost = document.querySelector('#create-post');
const createPostModal = document.querySelector('.create-posts');

// MESSAGES
const messageButton = document.querySelector('#message-btn');
const messages = document.querySelector('.messages');
const message = messages.querySelectorAll('.message');
const messageSearch = document.querySelector('#message-search');

// THEME
const theme = document.querySelector('#theme');
const themeModal = document.querySelector('.customize-theme');
const fontSizes= document.querySelectorAll('.choose-size span')
var root = document.querySelector(':root');
const colorPalette = document.querySelectorAll('.choose-color span');
const Bg1 = document.querySelector('.bg-1');
const Bg2 = document.querySelector('.bg-2');
const Bg3 = document.querySelector('.bg-3');



// =============== SIDEBAR =================

// remove active class from all menu items
const changeActiveItem = () => {
    menuItems.forEach(item => {
        item.classList.remove('active');
    })
}

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        changeActiveItem();
        item.classList.add('active');
        if(item.id != 'notifications'){
            document.querySelector('.notifications-popup').style.display = 'none';
        } else{
            document.querySelector('.notifications-popup').style.display = 'block';
            document.querySelector('#notifications .notification-count').style.display = 'none';
        }
    })
})

// =============== POST BOX =================

// open post box
const openPostModal = () => {
    createPostModal.style.display = 'grid';
}

// closes post box
const closePostModal = (e) => {
    if(e.target.classList.contains('create-posts')){
        createPostModal.style.display = 'none';
    }
}

//  close, open post box
createPostModal.addEventListener('click', closePostModal);

createPost.addEventListener('click', openPostModal);

// load image
var loadFile = function(event) {
  var output = document.getElementById('output');
  output.src = URL.createObjectURL(event.target.files[0]);
  output.onload = function() {
    URL.revokeObjectURL(output.src) // free memory
  }
};


// =============== ACTION BUTTONS =================
// heart button
const btns = document.querySelectorAll(".heart");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const heart = e.currentTarget;

    heart.classList.toggle("active");
  });
});

// heart button
const btnsBookmark = document.querySelectorAll(".bookmark");

btnsBookmark.forEach(function (btnBookmark) {
  btnBookmark.addEventListener("click", function (e) {
    const bookmark = e.currentTarget;

    bookmark.classList.toggle("active");
  });
});
  

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

// =============== MESSAGES =================
// searches chats
const searchMessage = () => {
    const val = messageSearch.value.toLowerCase();
    message.forEach(user => {
        console.log(val);
        let name = user.querySelector('h5').textContent.toLowerCase();
        if(name.indexOf(val) != -1){
            user.style.display = 'flex';
        } else{
            user.style.display = 'none';
        }
    })
}


//search chat
messageSearch.addEventListener('keyup', searchMessage);

// highlight mesages card when messages menu item is clicked
messageButton.addEventListener('click', () => {
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    setTimeout(() => {
        messages.style.boxShadow = 'none';
    }, 2000);
})



// THEME/DISPLAY CUSTOMIZATION

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