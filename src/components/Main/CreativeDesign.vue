<template>
    <section class="design">
        <div class="container design-container">
            <ul class="design-list">
                <li class="design-list-item">
                    <img class="design-item-img" src="../../assets/imgs/design1.png" alt="design1-img" width="500" height="472">
                    <div class="design-list-right">
                        <span class="design-list-right-title">Design Things</span>
                        <h2 class="design-list-right-heading">We Loves To Design Your Creative Ideas</h2>
                        <p class="design-list-right-desc">A creative concept is an overarching “Big Idea” that captures audience interest, influences their emotional response and inspires them to take action.It is a unifying theme that can be used across all campaign messages </p>
                        
                        <button class="site-btn site-btn-design">Learn more
                            <img class="design-button-img" src="../../assets/imgs/design-line.png" alt="design-line-img" width="25" height="25">
                        </button>
                    </div>
                </li>
                
                <li class="design-list-item design-list-item-left">
                    <img class="design-item-img" src="../../assets/imgs/design2.png" alt="design1-img" width="500" height="472">
                    <div class="design-list-left">
                        <span class="design-list-right-title">Our Teamwork</span>
                        <h2 class="design-list-right-heading">We Believe Success Lies On Teamwork</h2> 
                        <p class="design-list-right-desc">Good teamwork means a synergistic way of working with each person committed and working towards a shared goal...It is therefore a necessity that leaders facilitate and build the teamwork skills of their people if they are</p>
                        
                        <button class="site-btn site-btn-design">Learn more
                            <img class="design-button-img" src="../../assets/imgs/design-line.png" alt="design-line-img" width="25" height="25">
                        </button>
                    </div>
                </li>
                
                <li class="design-list-item design-list-item-left">
                    <img class="design-item-img" src="../../assets/imgs/three-img.png" alt="design1-img" width="415" height="418">
                    <div class="design-list-left design-list-left-three">
                        <span class="design-list-right-title">Testimonial</span>
                        <h2 class="design-list-right-heading">Thats What Our Client Says About Us</h2>
                        <p class="design-list-right-desc">“ Heartiest congratulations to the team for Future projects. I extend thankful wishes and wish the team best of luck for the future assignments to come. Your effort is gladly ”</p>
                        
                        <h3 class="design-list-right-suptitle">Jorge Morrison</h3>
                        <span class="design-list-right-country">North California,USA</span>
                    </div>
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
    .design{
        padding-bottom: 194px;
    }
    .design-list-item{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .design-list-right{
        margin-left: 79px;
    }
    .design-list-right-title{
        margin: 0;
        padding: 0;
        font-weight: 500;
        font-size: 28px;
        line-height: 40px;
        color: #F78CB6;
    }
    .design-list-right-heading{
        margin: 0;
        padding: 0;
        font-weight: 700;
        font-size: 50px;
        line-height: 60px;
        color: #56597A;
        margin-bottom: 24px;
        margin-top: 15px;
    }
    .design-list-right-desc {
        margin: 0;
        padding: 0;
        font-weight: 400;
        font-size: 21px;
        line-height: 32px;
        color: #919299;
        margin-bottom: 40px;
    }
    .design-button-img{
        margin-bottom: -4px;
        margin-left: 5px;
    }
    .design-list-item:nth-child(even) {
        flex-direction: row-reverse;
    }
    .design-list-item-left{
        margin-top: 194px;
    }
    .design-list-left{
        margin-right: 79px;
    }
    .design-list-right-suptitle {
        font-weight: 700;
        font-size: 28px;
        line-height: 32px;
        color: #56597A;
    }
    .design-list-right-country{
        font-weight: 400;
        font-size: 16px;
        line-height: 32px;
        color: #ABABAB;
    }
    
    .design-list-left-three {
        margin-left: 50px;
        margin-top: -50px;
    }
    
    @media only screen and (max-width: 1024px) {
        .design {
            padding-bottom: 50px;
        }
        .design-list-item {
            flex-wrap: wrap;
            justify-content: center;
        }
    }
    @media only screen and (max-width: 480px) {
        .design-list-right-heading{
            font-weight: 600;
            font-size: 35px;
            margin-bottom: 24px;
            margin-top: 15px;
        }
        .design-list-right-desc {
            font-size: 18px;
            margin-bottom: 14px;
        }
        .design-item-img{
            margin-top: 20px;
            flex-shrink: 0;
            max-width: 400px;
            margin-bottom: 10px;
        }
        .design-list-left {
            margin-bottom: 25px;
            /* text-align: center; */
            margin: auto;
            padding-top: 38px; 
        }
        .design-list-right {
            margin-bottom: 25px;
            padding-top: 38px;
            margin: auto;
        }
    }
    
    
</style>