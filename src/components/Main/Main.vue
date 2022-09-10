<template>
    <div>
        <Hero />
        <GroupChoose />
        <CreativeDesign />
        <Title />
        <Blog />
    </div>
</template>

<script>
    import Hero from '../Main/Hero.vue';
    import GroupChoose from './GroupChoose.vue';
    import CreativeDesign from './CreativeDesign.vue';
    import Title from './Title.vue';
    import Blog from './Blog.vue';
    export default {
        components: {
            Hero,
            GroupChoose,
            CreativeDesign,
            Title,
            Blog,
        },
        
    }
</script>

<style>
    
</style>