<template>
  <div id="app">
    <app-counter />
    <hr>
    <app-new-counter />
  </div>
</template>

<script>
  import Counter from './components/Counter'
  import NewCounter from './components/NewCounter'

export default {
  components: {
    appCounter: Counter,
    appNewCounter: NewCounter
  }
}
</script>

<style>

</style>
