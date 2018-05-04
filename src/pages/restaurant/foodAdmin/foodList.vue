<template>
  <div id="tab-green">
    <div class="res-add-btn-box">
      <div class="res-add-btn"></div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        greenClasses: [
          {
            value: 1,
            text: '热菜'
          },
          {
            value: 2,
            text: '凉菜'
          },
          {
            value: 3,
            text: '烟酒'
          }
        ],
        CurrentGreenClasses: []
      }
    },
    created() {

    }

  }
</script>
<style lang="scss"></style>
