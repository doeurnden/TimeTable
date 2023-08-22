<template>
  <div class="container">
    <LeftSideBar />
    <FullCalendar_Middle/>
    <RightSideBar/>
  </div>
</template>

<script>
import LeftSideBar from './components/LeftSideBar.vue';
import FullCalendar_Middle from './components/FullCalendar_Middle.vue'
import RightSideBar from './components/RightSideBar.vue';

export default {
  components: {
    LeftSideBar,
    FullCalendar_Middle,
    RightSideBar
  }
};
</script>
<<<<<<< HEAD
=======
<style>
    *{
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
    }
    body{
        width: 100%;
        height: 100vh;
        /* background-color: green; */
    }
    .Full-Calendar{
        width: 100%;
        height: 100vh;
        /* background-color: blue; */
        display: flex;
    }
</style>
>>>>>>> 3d5897b99b37c6e3102c1a6eb69d3edb819fba92
