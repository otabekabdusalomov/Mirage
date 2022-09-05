<template>
    <div>
       <Hero />
       <GroupChoose />
       <CreativeDesign />
    </div>
</template>

<script>
    import Hero from '../Main/Hero.vue';
    import GroupChoose from './GroupChoose.vue';
    import CreativeDesign from './CreativeDesign.vue';
    export default {
        components: {
            Hero,
            GroupChoose,
            CreativeDesign,
        },
        
    }
</script>

<style>

</style>