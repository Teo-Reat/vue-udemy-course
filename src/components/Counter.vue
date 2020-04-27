<template>
    <div>
<!--        <div>{{ oneCounter }}</div>-->
        <div>{{ twiceCounter }}</div>
        <div>{{ $store.state.counter }}</div>
        <button @click="increment">Increment</button>
        <button @click="decrement">Decrement</button>
    </div>
</template>

<script>
    // import { mapState } from 'vuex'
    import { mapGetters } from 'vuex'
    import { mapMutations } from 'vuex'

    export default {
        computed: {
            ...mapGetters([
                'twiceCounter', 'oneCounter'
            ])
        },
        methods: {
            ...mapMutations([
                'increment', 'decrement'
            ])
        }
    }
</script>

<style scoped>

</style>