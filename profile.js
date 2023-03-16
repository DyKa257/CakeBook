// LEFT SIDEBAR
const leftMenuItems = document.querySelectorAll('.menu-item');

// MAIN SIDEBAR
const menuItems = document.querySelectorAll('.menu-items');

const postsCard = document.querySelector('#posts-card');
const posts = document.querySelector('.feeds');

const introCard = document.querySelector('#intro-card');
const intro = document.querySelector('.intro');

const photosCard = document.querySelector('#photos-card');
const photos = document.querySelector('.photos');

const friendsCard = document.querySelector('#friends-card');
const friends = document.querySelector('.friends');

// MENU
const menu = document.querySelector('#menu');
const menuModal = document.querySelector('.menu');

// POST BOX
const createPost = document.querySelector('#create-post');
const createPostModal = document.querySelector('.create-posts');

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

// =============== MAIN SIDEBAR =================

// remove active class from all main menu items
const changeActiveItem = () => {
    menuItems.forEach(item => {
        item.classList.remove('active');
    })
}

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        changeActiveItem();
        item.classList.add('active');
    })
})

// highlight posts card when posts menu item is clicked
postsCard.addEventListener('click', () => {
    posts.style.boxShadow = '0 0 1rem var(--color-primary)';
    setTimeout(() => {
        posts.style.boxShadow = 'none';
    }, 2000);
})

// highlight intro card when intro menu item is clicked
introCard.addEventListener('click', () => {
    intro.style.boxShadow = '0 0 1rem var(--color-primary)';
    setTimeout(() => {
        intro.style.boxShadow = 'none';
    }, 1000);
})

// highlight photos card when photos menu item is clicked
photosCard.addEventListener('click', () => {
    photos.style.boxShadow = '0 0 1rem var(--color-primary)';
    setTimeout(() => {
        photos.style.boxShadow = 'none';
    }, 1000);
})

// highlight friends card when friends menu item is clicked
friendsCard.addEventListener('click', () => {
    friends.style.boxShadow = '0 0 1rem var(--color-primary)';
    setTimeout(() => {
        friends.style.boxShadow = 'none';
    }, 2000);
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
function openMenuModal() {
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