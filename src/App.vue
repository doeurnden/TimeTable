<template>
    <div class="container">
      <LeftSideBar />
      <FullCalendar_Middle/>
      <RightSideBar/>
    </div>
  </template>
  
  <script>
  import LeftSideBar from './components/LeftSideBar.vue'
  import FullCalendar_Middle from './components/FullCalendarMiddle.vue'
  import RightSideBar from './components/RightSideBar.vue';
  
  export default {
    components: {
      LeftSideBar,
      FullCalendar_Middle,
      RightSideBar
    }
  };
  </script>
  <style scoped>
    *{
      margin: 0px;
      padding: 0px;
      box-sizing: border-box;
    }
    body{
      width: 100%;
      height: 100vh;
    }
    .container{
      width: 100%;
      height: 100vh;
      display: flex;
    }
  </style><style scoped>
  *{
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }
  body{
    width: 100%;
    height: 100vh;
  }
  .container{
    width: 100%;
    height: 100vh;
    display: flex;
  }
</style>