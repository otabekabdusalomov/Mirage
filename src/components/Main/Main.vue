<template>
    <div>
       <Hero />
       <GroupChoose />
    </div>
</template>

<script>
    import Hero from '../Main/Hero.vue';
    import GroupChoose from './GroupChoose.vue';
    export default {
        components: {
            Hero,
            GroupChoose,
        },
        
    }
</script>

<style>

</style>