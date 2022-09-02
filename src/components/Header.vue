<template>
    
    <header class="header">
        <div class="container header-container">
            <a class="header-logo" href="#">
                <img class="header-logo-img" src="../assets/imgs/Logo.svg" alt="logo" width="106" height="30">
            </a>
            
            <nav class="navbar">
                <ul class="navbar-list">
                    <li class="navbar-item">
                        <a class="navbar-link" href="#">Home</a>
                    </li>
                    
                    <li class="navbar-item">
                        <a class="navbar-link" href="#">About</a>
                    </li>
                    
                    <li class="navbar-item">
                        <a class="navbar-link" href="#">Product</a>
                    </li>
                    
                    <li class="navbar-item">
                        <a class="navbar-link" href="#">Pricing</a>
                    </li>
                    
                </ul>
            </nav>
            
            <button class="header-hamburger">
                <img class="header-hamburger-img" src="../assets/imgs/Menu.svg" alt="hamburger-menu" width="30" height="30">
            </button>
        </div>
    </header>
</template>

<script>
    
    
</script>

<style>
    .header{
        padding-top: 20px 0px;
    }
    .header-container{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .header-logo{
        flex-shrink: 0;
        transition: 0.4s;
    }
    .header-logo:hover{
        opacity: 0.8;
    }
    .header-logo:active{
        opacity: 0.4;
    }
    .navbar-list{
        display: flex;
        align-items: center;
        list-style-type: none;
    }
    .navbar-item + .navbar-item {
        margin-left: 73px;
    }
    .navbar-link{
        margin: 0;
        padding: 0;
        font-weight: 500;
        font-size: 20px;
        line-height: 30px;
        color: #56597A;
        text-decoration: none;
        transition: 0.4s;
    }
    .navbar-link:hover{
        color: orange;
    }
    .navbar-link:active{
        opacity: 0.4;
    }
    .header-hamburger{
        display: none;
        border: none;
        background-color: transparent;
        padding: 0;
        margin: 0;
        flex-shrink: 0; 
    }
    
    /* Responsive-site */
    @media only screen and (max-width: 620px) {
        .header{
            padding: 20px 0px;
            position: relative;
        }
        .navbar{
            display: none;
        }
        .header-hamburger{
            display: inline-block;
        }
        .header--open .navbar {
            display: flex;
            flex-direction: column;
            justify-content: center;
            position: absolute;
            top: 100%;
            width: 100%;
            left: 0;
            padding: 20px;
            background-color: pink;
        }
        .header--open .navbar-list {
            flex-direction: column;
        }
        .header--open .navbar-list .navbar-item {
            margin: 0;
            padding: 0;
            vertical-align: middle;
            margin-top: 10px;
        }
    };
</style>