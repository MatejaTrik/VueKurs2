// eslint-disable-file no-use-before-define 


<template>
  <div>
    <comp-header></comp-header>
    <div>
      content
    </div>
    <comp-footer></comp-footer>
  </div>
</template>

<script>
  import compHeader from './components/Header-Footer/Header'
  import compFooter from './components/Header-Footer/Footer'

export default {
  components:{
    compHeader,
    compFooter,
  }
}
</script>

<style>

  @import './assets/style.css';

</style>
