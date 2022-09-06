<template>
    <div class="hero">
        <div class="container hero-container">
            <div class="hero-box">
                <span class="hero-box-title">__Creative Agency</span>
                <h1 class="hero-box-heading">We Deliver The Best Product for You</h1>
                <p class="hero-box-desc">Design is the creation of a plan or convention for the construction of an object or a system as in architectural blueprints, engineering drawings, business processes,</p>
                
                <button class="site-btn hero-btn">Get started
                    <img class="design-button-img" src="../../assets/imgs/design-line.png" alt="design-line-img" width="25" height="25">
                </button>
                
            </div>
            <img class="hero-left-img" src="../../assets/imgs/header.png" alt="hero-img" width="532" height="532">
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style>
    .hero{
        padding: 129px;
    }
    .hero-container{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .hero-box{
        max-width: 537px;
    }
    .hero-box-title{
        margin: 0;
        padding: 0;
        font-weight: 500;
        font-size: 28px;
        line-height: 40px;
        color: #F78CB6;   
    }
    .hero-box-heading{
        margin: 0;
        padding: 0;
        font-weight: 700;
        font-size: 55px;
        line-height: 74px;
        color: #56597A;
        padding-top: 29px;
        padding-bottom: 31px;
    }
    .hero-box-desc{
        margin: 0;
        padding: 0;
        font-weight: 400;
        font-size: 20px;
        line-height: 32px;
        letter-spacing: 0.02em;
        color: #919299;
        padding-bottom: 42px;
    }
    .hero-btn{
        font-weight: 500;
        font-size: 20px;
        line-height: 30px;
        letter-spacing: 0.02em;
        color: #FFFFFF;
        background: #F78BB6;
        border-radius: 4px;
        vertical-align: middle;
        align-items: center;
    }
    /* .hero-btn .hero-button-line-img {
        display: inline-block;
        
    } */
    /* Hero-serponsive */
    @media only screen and (max-width: 980px) {
        .hero-container{
            flex-direction: column;
        }
        .hero-box{
            max-width: 100%;
        }
        .hero-left-img{
            margin-top: 20px;
            flex-shrink: 0;
            width: 100%;
        }
    }
    
    @media only screen and (max-width: 480px) {
        .hero {
           padding: 63px 0px;
        }
        .hero-box-heading {
            font-size: 40px;
            margin-bottom: 14px;
        }
        .hero-box-desc {
            font-size: 18px;
            margin-bottom: 14px;
        }
    }
</style>