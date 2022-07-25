<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tiff's Projects</title>
    <link rel="stylesheet" href="style.css">
    <script src="https://kit.fontawesome.com/949df75f70.js" crossorigin="anonymous"></script>
</head>
<body>
    <header>
        <button class="navButton">
            <svg viewBox="0 0 50 50" class="hamburger">
                <rect x="5" y="10" width="41" height="5.5" rx="3"></rect>
                <rect x="10" y="22" width="31" height="5.5" rx="3" transform="translate(25.310345, 24.735294) rotate(0) translate(-25.310345, -24.735294)"></rect>
                <rect x="10" y="22" width="31" height="5.5" rx="3" transform="translate(25.310345, 24.735294) rotate(0) translate(-25.310345, -24.735294)"></rect>
                <rect x="5" y="35" width="41" height="5.5" rx="3"></rect>
            </svg>
        </button>
    </header>
    <div id="navMenu" class="closeMenu">
        <nav>
            <ul>
                <li><a href="index.html">home</a></li>
                <li><a href="" id="aboutMe">about me</a></li>
                <li><a href="">resume</a></li>
                <li><a href="projects.html">projects</a></li>
                <li><a href="" id="contact">contact</a></li>
            </ul>
        </nav>
        <div>
            <p>follow me</p>
            <a href="https://www.youtube.com/pngtiff"><i class="fa-brands fa-youtube"></i></a> | 
            <a href="https://github.com/pngtiff"><i class="fa-brands fa-github"></i></a> | 
            <a href="https://www.instagram.com/png.tiff/"><i class="fa-brands fa-instagram"></i></a>
        </div>
    </div>
    <main>
        <div class="tempLinks">
            <p>Projects</p>
            <a href="/Tesla/tesla.html">Tesla Homepage</a> |
            <a href="/Nespresso/nespresso.html">Nespresso Form</a> |
            <a href="/PLP/PLP.html">Product Landing Page</a> |
            <a href="/WeatherApp/weather.html">Weather Forecast API</a>
        </div>
    </main>
    
    <?php 
        require('aboutMe.php'); 
        require('contact.php');
    ?>
    <script src="script.js"></script>
</body>
</html>