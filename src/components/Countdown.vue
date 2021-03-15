<template>
  <div>
    <vac
      ref="vac"
      :auto-start="false"
      :end-time="new Date().getTime() + 180000"
    >      
      <template
        #process="{ timeObj }"
      >
        <span><strong>{{ `Tiempo restante: ${timeObj.m}:${timeObj.s}` }}</strong></span>
      </template>
      <template
        #finish
      >
        <span v-bind="elFinal()">Done!</span>
      </template>
    </vac>    
  </div>
</template>

<script>
  export default {     
    methods: {
        countdownF: function(){
          console.log("iniciar")
          this.$refs.vac.startCountdown();
        },
        elFinal: function(){
          this.$emit('elFinal')
        }
    }
  }
</script>

<style lang="scss" scoped>

</style>