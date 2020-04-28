<template>
    <div>
        <button @click="asyncIncrement ({ by: 100, duration: 1000 })">Increment</button>
        <button @click="asyncDecrement ({ by: 100, duration: 1000 })">Decrement</button>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    import { mapActions } from 'vuex'

    export default {
        computed: {
            ...mapGetters([
                'twiceCounter'
            ])
        },
        methods: {
            ...mapActions([
                'asyncIncrement', 'asyncDecrement'
            ])
        }
    }
</script>

<style scoped>

</style>