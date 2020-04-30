<template>
    <div id="app">
        <app-counter/>
        <hr>
        <app-new-counter/>
        <hr>
        <input v-model="value" type="text">
        <div>{{ value }}</div>
    </div>
</template>

<script>
    import Counter from './components/Counter'
    import NewCounter from './components/NewCounter'

    export default {
        components: {
            appCounter: Counter,
            appNewCounter: NewCounter
        },
        computed: {
            value: {
                get () {
                  return this.$store.getters.getValue
                },
                set (value) {
                  this.$store.dispatch('setValue', value)
              }
            }
        }
    }
</script>

<style>

</style>
