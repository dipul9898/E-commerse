const createNav=()=>{
    let nav = document.querySelector('.navbar');
    nav.innerHTML = `
    <div class="nav">
    <img src="image/dark-logo.png" alt="" class="brand-logo">
    <div class="nav-items">
        <div class="search">
            <input type="text" class="search-box" placeholder="search anything here">
            <button class="search-btn">Search</button>
        </div>
    </div>
        <a href="login.html"><img src="image/user.png" alt=""></a>
        <a href="#"><img src="image/cart.png" alt=""></a>
    </div>
    <ul class="link-container">
        <li class="link-item"><a href="index.html" class="link">Home</a></li>
        <li class="link-item"><a href="women.html" class="link">Women</a></li>
        <li class="link-item"><a href="product.html" class="link">Men</a></li>
        <li class="link-item"><a href="kids.html" class="link">Kids</a></li>
        <li class="link-item"><a href="404.html" class="link">Accessories</a></li>
    </ul>
    `;
}
createNav();