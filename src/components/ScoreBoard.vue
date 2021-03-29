<template>
  <div class="container d-flex justify-content-around w-50 flex-wrap">
    <div class="user">
      Usuario: {{ user }}
    </div>
    <div class="board">
      Board: {{ board }}
    </div>
    <div class="record">
      Record: {{ record }}
    </div>
    <div class="timer">
      Timer: 10:30
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        user: 'pepito',
        board: '10x10',
        record: 3056
      }
    },
    
  }
</script>

<style lang="scss" scoped>

body{
  padding: 2rem;
}
.flex-wrap{  
  padding: 2rem;
  font-size: 1.5rem;
  div{
    display: inline-block;
  }
}


</style>