<template>
    <div>
        <div>{{ twiceCounter }}</div>
        <div>{{ getCounter }}</div>
        <button @click="increment (100)">Increment</button>
        <button @click="decrement (50)">Decrement</button>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { mapMutations } from 'vuex'
import * as types from '../store/types'

export default {
    computed: {
        ...mapGetters({
            twiceCounter: types.DOUBLE_COUNTER,
            getCounter: types.CLICK_COUNTER
        })
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