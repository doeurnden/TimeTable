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
