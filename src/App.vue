
<template>
    <div class="Full-Calendar">
        <LeftSideBar></LeftSideBar>
        <FullCalendar_Middle></FullCalendar_Middle>
        <RightSideBar></RightSideBar>
    </div>
</template>


<script>
import LeftSideBar from './components/LeftSideBar.vue';
import FullCalendar_Middle from './components/FullCalendar_Middle.vue'
import RightSideBar from './components/RightSideBar.vue';

export default{
    components: {
        LeftSideBar,
        FullCalendar_Middle,
        RightSideBar
    },
};
</script>
<style scoped>
    .Full-Calendar{
        width: 100%;
        height: 100vh;
        display: flex;
    }
</style>
