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
  // import timeGridPlugin from '@fullcalendar/timegrid'
  
  export default {
    components: {
      LeftSideBar,
      FullCalendar_Middle,
      RightSideBar
    }
  };
</script>
