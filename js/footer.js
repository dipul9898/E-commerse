const createFooter=()=>{
    let footer = document.querySelector('footer');

    footer.innerHTML=`
    
    <div class="footer-content">
    <img src="image/light-logo.png" alt="" class="logo">
    <div class="footer-ul-contaiber">
        <ul class="category">
            <li class="category-title">men</li>
            <li><a href="#" class="footer-link">t-shirt</a></li>
            <li><a href="#" class="footer-link">sweat</a></li>
            <li><a href="#" class="footer-link">shirts</a></li>
            <li><a href="#" class="footer-link">jeans</a></li>
            <li><a href="#" class="footer-link">trouser</a></li>
            <li><a href="#" class="footer-link">shoes</a></li>
            <li><a href="#" class="footer-link">casuals</a></li>
            <li><a href="#" class="footer-link">formals</a></li>
            <li><a href="#" class="footer-link">watches</a></li>
        </ul>
        <ul class="category">
            <li class="category-title">women</li>
            <li><a href="#" class="footer-link">t-shirt</a></li>
            <li><a href="#" class="footer-link">sweatshirts</a></li>
            <li><a href="#" class="footer-link">shirts</a></li>
            <li><a href="#" class="footer-link">jeans</a></li>
            <li><a href="#" class="footer-link">trouser</a></li>
            <li><a href="#" class="footer-link">shoes</a></li>
            <li><a href="#" class="footer-link">casuals</a></li>
            <li><a href="#" class="footer-link">formals</a></li>
            <li><a href="#" class="footer-link">watches</a></li>

        </ul>
    </div>
</div>
<p class="footer-title">about company</p>
<p class="info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa molestiae voluptate rerum, dignissimos delectus quaerat repellat vitae dolore fugiat exercitationem eveniet, in deleniti voluptatibus repellendus!</p>
<p class="info">support emails - help@clothing.com,customersuport@clothing.com</p>
<p class="info">telephone - 1800 00 00 001</p>

<div class="social-container">
    <div>
        <a href="#" class="social-link">terms & services</a>
        <a href="#" class="social-link">privacy page</a>
    </div>
    <div>
        <a href="#" class="social-link">instagram</a>
        <a href="#" class="social-link">facebook</a>
        <a href="#" class="social-link">twitter</a>

    </div>
</div>
<p class="footer-credit">clothing, best apparels online store</p>
    `;
}
createFooter();