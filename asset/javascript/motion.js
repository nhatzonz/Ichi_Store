    // motion search header
const searchOff = document.querySelector('.js-search--off');
const searchOn = document.querySelector('.js-search--on');
const searchBtn = document.querySelector('.btn-search--begin');
const closeBtn = document.querySelector('.btn-close');

function showSearch(){
    searchOff.classList.add('close-motion');
    searchOn.classList.add('open-motion');
}

function hiddenSearch(){
    searchOn.classList.remove('open-motion');
    searchOff.classList.remove('close-motion');
}

searchBtn.addEventListener('click', function(){
    showSearch();
});

closeBtn.addEventListener('click', function(){
    hiddenSearch();
});

//     //  motion change slider

// const listImg = document.querySelector('.list-imgs');
// const imgs = document.querySelectorAll('.list-img__item');
// const lenthg = imgs.length;
// let cnt=0;

// setInterval(() => {
//     if(cnt== lenthg - 1){
//         cnt = 0;
//         let width = imgs[0].offsetWidth;
//         listImg.style.transform =`translateX(0px)`;
//         listImg.style.transition = 'none';
//     }
//     else{
//         cnt++;
//         let width = imgs[0].offsetWidth;
//         listImg.style.transform =`translateX(${width * -1 * cnt}px)`;
//         listImg.style.transition = ' 0.5s ease-in-out';
//     }
// },3000)


    // motion register
    const registerBtn = document.querySelector('.js__register-btn');
    const contentMain = document.querySelector('.content__main');
    const contentCpl = document.querySelector('.content__complement');
    const contentRegister = document.querySelector('.content__register');
    const resetBtn = document.querySelector('.js__content-main');
    
    const nextLogin = document.querySelector('.next__login');
    const nextRegister = document.querySelector('.next__register');
    const loginBtn = document.querySelector('.js__login-btn');
    const contentLogin = document.querySelector('.content__login');
    
    function showRegister() {
        contentMain.classList.add('close-motion');
        contentCpl.classList.remove('close-motion');
        contentRegister.classList.remove('close-motion');
        contentLogin.classList.add('close-motion'); 
    }
    
    function hiddenRegister() {
        contentMain.classList.remove('close-motion');
        contentCpl.classList.add('close-motion');
        contentRegister.classList.add('close-motion');
    }
    
    function showLogin() {
        contentMain.classList.add('close-motion');
        contentCpl.classList.remove('close-motion');
        contentLogin.classList.remove('close-motion');
        contentRegister.classList.add('close-motion'); 
    }
    
    function hiddenLogin() {
        contentMain.classList.remove('close-motion');
        contentCpl.classList.add('close-motion');
        contentLogin.classList.add('close-motion');
    }
    
    function nextFormLogin() {
        contentRegister.classList.add('close-motion');
        contentLogin.classList.remove('close-motion');
    }
    
    function nextFormRegister() {
        contentLogin.classList.add('close-motion');
        contentRegister.classList.remove('close-motion');
    }
    
    registerBtn.addEventListener('click', function() {
        showRegister();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    
    loginBtn.addEventListener('click', function() {
        showLogin();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    
    resetBtn.addEventListener('click', function() {
        hiddenRegister();
        hiddenLogin();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    
    nextLogin.addEventListener('click', function() {
        nextFormLogin();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    
    nextRegister.addEventListener('click', function() {
        nextFormRegister();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    //  PRODUCT ADD BUY

const addCart = document.querySelectorAll('.add-cart');
const buyNow = document.querySelectorAll('.buy-now');
const modalProduct = document.querySelector('.modal__product');
const contentAdd = document.querySelector('.content--add');
const contentBuy = document.querySelector('.content--buy');
const closeModal = document.querySelector('.product__close');

function showModal(){
    modalProduct.classList.remove('close-motion');
}

function hiddenModal(){
    modalProduct.classList.add('close-motion');
}

for(let i=0; i<addCart.length; i++){
    
    addCart[i].addEventListener('click', function(){
        showModal();
        contentAdd.classList.remove('close-motion');
    })
}

for(let i=0; i<buyNow.length; i++){
    
    buyNow[i].addEventListener('click', function(){
        showModal();
        contentBuy.classList.remove('close-motion');
    })
}

closeModal.addEventListener('click', function(){
    hiddenModal();
    contentAdd.classList.add('close-motion');
    contentBuy.classList.add('close-motion');
})

    // PRODUCT NEXT PREV

const imgMain = document.querySelector('.main__img');
const listProductImg = document.querySelectorAll('.product__image-item');
const prevBtn = document.querySelector('.control__prev');
const nextBtn = document.querySelector('.control__next');
   let res = 0;
function updateImage(index) {
    listProductImg.forEach(item => {
        item.classList.remove('active');
    });
    res = index;
    imgMain.src = listProductImg[index].getAttribute('src');
    listProductImg[index].classList.add('active');
};

listProductImg.forEach((imgElement,index )=>{
    imgElement.addEventListener('click', function(){
        updateImage(index);
    })
})

prevBtn.addEventListener('click', function(){
    if(res == 0){
        res = listProductImg.length -1 ;
    }
    else {
        res--;
    }
    updateImage(res);
})

nextBtn.addEventListener('click', function(){
    if(res == listProductImg.length -1){
        res = 0 ;
    }
    else {
        res++;
    }
    updateImage(res);
})

//  motion change slider

const listImg = document.querySelector('.list-img__main');
const imgs = document.querySelectorAll('.list-img__item');
const length = imgs.length;
let cnt = 0;

function updateSlider(index) {
    listImg.classList.add('hide');

    setTimeout(() => {
        listImg.src = imgs[index].getAttribute('src');
        listImg.classList.remove('hide');
    }, 800); 
}

setInterval(() => {
    cnt = (cnt + 1) % length;
    updateSlider(cnt);
}, 3000);

updateSlider(cnt);

