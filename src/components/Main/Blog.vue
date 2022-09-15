<template>
    <section class="blog">
        <div class="container blog-container">
            <img class="blog-left-img" src="../../assets/imgs/blog-img.png" alt="img" width="250" height="250">
            <div class="blog-box-right">
                <h2 class="blog-box-right-heading">Subscribe To Our Blog</h2>
                <p class="blog-box-right-desc">A newsletter is a tool used to communicate regularly with
                    your subscribers, delivering the information</p>
                    
               <div class="blog-box-three">
                  <img class="blog-box-three-img" src="../../assets/imgs/Mail.svg" alt="img" width="19" height="19">
                  <input class="blog-box-three-input" type="text" placeholder="Type Your Email Address">
                  
                  <button class="site-btn hero-btn">Get started
                    <img class="design-button-img" src="../../assets/imgs/design-line.png" alt="design-line-img" width="25" height="25">
                </button>
               </div>     
            </div>
            </div>
            
        </section>
    </template>
    
    <script>
        export default {
            
        }
    </script>
    
    
    
    <style>
        .blog {
            padding-bottom: 161px;
        }
        .blog-container {
            display: flex;
            align-items: center;
        }
        .blog-box-right-heading {
            margin: 0;
            font-weight: 700;
            font-size: 52px;
            line-height: 72px;
            color: #56597A;
        }
        .blog-box-right-desc {
            margin: 0;
            font-weight: 400;
            font-size: 20px;
            line-height: 32px;
            color: #919299;
            padding: 0;
        }
    </style>