<template>
    <div>
        <Hero />
        <GroupChoose />
        <CreativeDesign />
        <Title />
    </div>
</template>

<script>
    import Hero from '../Main/Hero.vue';
    import GroupChoose from './GroupChoose.vue';
    import CreativeDesign from './CreativeDesign.vue';
    import Title from './Title.vue';
    export default {
        components: {
            Hero,
            GroupChoose,
            CreativeDesign,
            Title,
        },
        
    }
</script>

<style>
    
</style>