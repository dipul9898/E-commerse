const productImage = document.querySelectorAll(".product-image-p img");
const productImageSlide = document.querySelector(".image-slider-p");

let activeImageSlider = 0;

productImage.forEach((item,i)=>{
    item.addEventListener('click',()=>{
        productImage[activeImageSlider].classList.remove('active');
        item.classList.add('active');
        productImageSlide.style.backgroundImage = `url('${item.src}')`;
        activeImageSlider = i;
    })
})

//toggle size button
const sizeBtn = document.querySelectorAll('.size-radio-btn');
let checkedbtn = 0;

sizeBtn.forEach((item,i) =>{
    item.addEventListener('click', () => {
       sizeBtn[checkedbtn].classList.remove('check');
        item.classList.add('check');
        checkedbtn = i;
    })
})
