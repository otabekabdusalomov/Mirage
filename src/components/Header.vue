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
        </div>
    </header>
</template>

<script>
    export default {
        
    }
</script>

<style>
    .header{
        padding-top: 30px;
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
</style>