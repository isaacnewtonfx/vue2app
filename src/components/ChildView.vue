<template>
<div>
<p>Hello from child component</p>
<p>{{ someData }}</p>
</div>
</template>

<script>
export default {
  name: 'Sample',
  data () {
    return {
        
    }
  },
  props: ['someData']
}
</script>

<style>

</style>
