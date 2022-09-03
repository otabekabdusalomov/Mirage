<template>
    <section class="group">
        <div class="container group-container">
            <div class="group-box">
                <p class="group-box-desc">Our Services</p>
                <h2 class="group-box-heading">Why People Choose Us</h2>   
            </div>
            <ul class="group-list">
                <li class="group-list-item">
                    <a class="group-list-link" href="#">
                        <img class="group-list-item-img" src="../../assets/imgs/choose-img1.png" alt="img" width="50" height="50">
                        <h3 class="group-list-heading">Design</h3>
                        <p class="group-list-desc">a plan or drawing produced to show the look and function</p>
                    </a>
                </li>
                
                <li class="group-list-item">
                    <a class="group-list-link" href="#">
                        <img class="group-list-item-img" src="../../assets/imgs/choose-img2.png" alt="img" width="50" height="50">
                        <h3 class="group-list-heading">Development</h3>
                        <p class="group-list-desc">Development is defined as the process of growth or new </p>
                    </a>
                </li>
                
                <li class="group-list-item">
                    <a class="group-list-link group-list-link-three" href="#">
                        <img class="group-list-item-img" src="../../assets/imgs/choose-img3.png" alt="img" width="50" height="50">
                        <h3 class="group-list-heading">Branding</h3>
                        <p class="group-list-desc">The marketing practice of creating a name, symbol or</p>
                        <span class="group-list-span">Learn more</span>
                    </a>
                </li>
                
                <li class="group-list-item">
                    <a class="group-list-link" href="#">
                        <img class="group-list-item-img" src="../../assets/imgs/choose-img4.png" alt="img" width="50" height="50">
                        <h3 class="group-list-heading">Illustration</h3>
                        <p class="group-list-desc">An illustration is a decoration, interpretation or visual</p>
                    </a>
                </li>
            </ul>
        </div>
    </section>
</template>

<script>
    export default {
        
    }
</script>



<style>
    .group {
        margin-bottom: 194px;
    }
    .group-box{
        max-width: 558px;
        margin: auto;
        margin-bottom: 58px;
    }
    .group-box-desc{
        margin: 0;
        font-weight: 500;
        font-size: 28px;
        line-height: 40px;
        color: #F78CB6;
        text-align: center;
    }
    .group-box-heading{
        margin: 0;
        text-align: center;
        font-weight: 700;
        font-size: 52px;
        line-height: 72px;
        color: #56597A;
    }
    .group-list {
        display: flex;
        margin: 0;
        padding: 0;
        list-style: none;
    }
    .group-list-item + .group-list-item {
        margin-left: 30px;
    }
    .group-list-link {
        text-decoration: none;
        display: inline-block;
        padding: 24px 24px;
        background: #FFF1F9;
        border-radius: 8px;
        box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.1);
    }
    .group-list-link-three {
        background: #F78CB6;
    }
    .group-list-desc {
        margin: 0;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        text-align: center;
        color: #919299;
        max-width: 224px;
        
    }
    .group-list-item-img{
        margin-bottom: 38px;
        margin-left: 70px;
    }
    .group-list-heading {
        text-align: center;
        margin: 0;
        font-weight: 500;
        font-size: 34px;
        line-height: 72px;
        color: #56597A;
        margin-bottom: 16px;
    }
    .group-list-span {
        margin: 0;
        font-weight: 500;
        font-size: 20px;
        line-height: 30px;
        text-align: center;
        color: #FFFFFF;
        margin-left: 45px;
        padding-top: 10px;
    }
    
    
</style>