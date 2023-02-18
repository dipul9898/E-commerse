const productcontainer = [...document.querySelectorAll('.product-container')];
const nxtBtn =[...document.querySelectorAll('.next-btn')]
const preBtn =[...document.querySelectorAll('.pre-btn')]

productcontainer.forEach((item,i)=>{
    let containerDimention = item.getBoundingClientRect();
    let containerWidth = containerDimention.width;

    nxtBtn[i].addEventListener('click',()=>{
        item.scrollLeft+=containerWidth;
    })

    preBtn[i].addEventListener('click',()=>{
        item.scrollLeft-=containerWidth;
    })
})