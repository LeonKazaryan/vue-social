<template>
  <div class="home">
    Hello, {{userName}}
  </div>
</template>

<script>


export default {
  name: 'Home',
  computed: {
    userName() {
      const user = this.$store.state.user
      if (user){
        return `${user.first_name} ${user.last_name}`
      }
      return 'anonymus user'
    }
  },
  components: {
   
  },
}
</script>

