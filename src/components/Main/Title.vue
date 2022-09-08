<template>
  <section class="title">
    <div class="container title-container">
      <ul class="title-list">
        
        <li class="title-item title-item-respon">
          <a class="title-link" href="#">
            <img class="title-link-img" src="../../assets/imgs/component1.png" alt="logo-img" width="157" height="42">
          </a>
        </li>
        
        <li class="title-item">
          <a class="title-link" href="#">
            <img class="title-link-img" src="../../assets/imgs/component2.png" alt="logo-img" width="195" height="56">
          </a>
        </li>
        
        <li class="title-item">
          <a class="title-link" href="#">
            <img class="title-link-img" src="../../assets/imgs/component3.png" alt="logo-img" width="143" height="43">
          </a>
        </li>
        
        <li class="title-item">
          <a class="title-link" href="#">
            <img class="title-link-img" src="../../assets/imgs/component4.png" alt="logo-img" width="178" height="51">
          </a>
        </li>
        
        <li class="title-item">
          <a class="title-link" href="#">
            <img class="title-link-img" src="../../assets/imgs/component5.png" alt="logo-img" width="139" height="46">
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
  .title {
    padding-bottom: 133px;
  }
  .title-list{
    display: flex;
    align-items: center;
    list-style-type: none;
  }
  .title-item + .title-item {
    margin-left: 89px;
  }
  .title-item {
    flex-shrink: 0;
  }
  .title-link {
    transition: 0.4s;
  }
  .title-link-img {
    flex-shrink: 0;
  }
  @media only screen and (max-width: 1024px) {
    .title-container .title-list{
      flex-wrap: wrap;
    }
    .title-item-respon{
      margin-left: 85px;
    }
    .title-link-img {
      padding-bottom: 50px;
    }
  }
  
  
</style>