// LEFT SIDEBAR
const leftMenuItems = document.querySelectorAll('.menu-item');

// RIGHT SIDEBAR
const rightMenuItems = document.querySelectorAll('.item');

const securityLogin = document.querySelector('#security-login');
const securityLogins = document.querySelector('.security-login');

const userInfo = document.querySelector('#user-info');
const userInfos = document.querySelector('.user-info');

const profileInfo = document.querySelector('#profile-info');
const profileInfos = document.querySelector('.profile-info');

// EDIT SETTINGS
const editSet1 = document.querySelector('#edit-set-1');
const set1 = document.querySelector('#edit-setting-1');

const editSet2 = document.querySelector('#edit-set-2');
const set2 = document.querySelector('#edit-setting-2');

const editSet3 = document.querySelector('#edit-set-3');
const set3 = document.querySelector('#edit-setting-3');

const editSet4 = document.querySelector('#edit-set-4');
const set4 = document.querySelector('#edit-setting-4');

const editSet5 = document.querySelector('#edit-set-5');
const set5 = document.querySelector('#edit-setting-5');

const editSet6 = document.querySelector('#edit-set-6');
const set6 = document.querySelector('#edit-setting-6');

const editSet7 = document.querySelector('#edit-set-7');
const set7 = document.querySelector('#edit-setting-7');

// CHANGE PHOTO
const CoverPhoto = document.querySelector('#cover-photo');
const changeCoverPhoto = document.querySelector('.create-posts-1');

const ProfilePicture = document.querySelector('#profile-picture');
const changeProfilePicture = document.querySelector('.create-posts-2');

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

// highlight settings card when settings menu item is clicked
securityLogin.addEventListener('click', () => {
    securityLogins.style.boxShadow = '0 0 0.5rem var(--color-primary)';
    setTimeout(() => {
        securityLogins.style.boxShadow = 'none';
    }, 2000);
})

userInfo.addEventListener('click', () => {
    userInfos.style.boxShadow = '0 0 0.5rem var(--color-primary)';
    setTimeout(() => {
        userInfos.style.boxShadow = 'none';
    }, 2000);
})

profileInfo.addEventListener('click', () => {
    profileInfos.style.boxShadow = '0 0 0.5rem var(--color-primary)';
    setTimeout(() => {
        profileInfos.style.boxShadow = 'none';
    }, 2000);
})

// =============== EDIT SETTINGS =================

// open set 1
const openSet1 = () => {
    set1.style.display = 'grid';
}
// closes set 1
const closeSet1 = (e) => {
    if(e.target.classList.contains('edit-settings')){
        set1.style.display = 'none';
    }
}
//  close, open set 1
set1.addEventListener('click', closeSet1);
editSet1.addEventListener('click', openSet1);

// open set 2
const openSet2 = () => {
    set2.style.display = 'grid';
}
// closes set 2
const closeSet2 = (e) => {
    if(e.target.classList.contains('edit-settings')){
        set2.style.display = 'none';
    }
}
//  close, open set 2
set2.addEventListener('click', closeSet2);
editSet2.addEventListener('click', openSet2);

// open set 3
const openSet3 = () => {
    set3.style.display = 'grid';
}
// closes set 3
const closeSet3 = (e) => {
    if(e.target.classList.contains('edit-settings')){
        set3.style.display = 'none';
    }
}
//  close, open set 3
set3.addEventListener('click', closeSet3);
editSet3.addEventListener('click', openSet3);

// open set 4
const openSet4 = () => {
    set4.style.display = 'grid';
}
// closes set 4
const closeSet4 = (e) => {
    if(e.target.classList.contains('edit-settings')){
        set4.style.display = 'none';
    }
}
//  close, open set 4
set4.addEventListener('click', closeSet4);
editSet4.addEventListener('click', openSet4);

// open set 5
const openSet5 = () => {
    set5.style.display = 'grid';
}
// closes set 5
const closeSet5 = (e) => {
    if(e.target.classList.contains('edit-settings')){
        set5.style.display = 'none';
    }
}
//  close, open set 5
set5.addEventListener('click', closeSet5);
editSet5.addEventListener('click', openSet5);

// open set 6
const openSet6 = () => {
    set6.style.display = 'grid';
}
// closes set 6
const closeSet6 = (e) => {
    if(e.target.classList.contains('edit-settings')){
        set6.style.display = 'none';
    }
}
//  close, open set 6
set6.addEventListener('click', closeSet6);
editSet6.addEventListener('click', openSet6);

// open set 7
const openSet7 = () => {
    set7.style.display = 'grid';
}
// closes set 7
const closeSet7 = (e) => {
    if(e.target.classList.contains('edit-settings')){
        set7.style.display = 'none';
    }
}
//  close, open set 7
set7.addEventListener('click', closeSet7);
editSet7.addEventListener('click', openSet7);

// =============== CHANGE PHOTO =================

// open change cover photo
const openCoverPhoto = () => {
    changeCoverPhoto.style.display = 'grid';
}

// closes change cover photo
const closeCoverPhoto = (e) => {
    if(e.target.classList.contains('create-posts-1')){
        changeCoverPhoto.style.display = 'none';
    }
}

//  close, open change cover photo
changeCoverPhoto.addEventListener('click', closeCoverPhoto);

CoverPhoto.addEventListener('click', openCoverPhoto);

// load image
var loadFile = function(event) {
  var output = document.getElementById('output');
  output.src = URL.createObjectURL(event.target.files[0]);
  output.onload = function() {
    URL.revokeObjectURL(output.src)
  }
};

// open change profile picture
const openProfilePicture = () => {
    changeProfilePicture.style.display = 'grid';
}

// closes change profile picture
const closeProfilePicture = (e) => {
    if(e.target.classList.contains('create-posts-2')){
        changeProfilePicture.style.display = 'none';
    }
}

//  close, open change profile picture
changeProfilePicture.addEventListener('click', closeProfilePicture);

ProfilePicture.addEventListener('click', openProfilePicture);

// load image
var loadFile1 = function(event1) {
  var output1 = document.getElementById('output-2');
  output1.src = URL.createObjectURL(event1.target.files[0]);
  output1.onload = function() {
    URL.revokeObjectURL(output1.src) // free memory
  }
};

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