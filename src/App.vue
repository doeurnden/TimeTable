
<template>
    <div class="Full-Calendar">
        <LeftSideBar></LeftSideBar>
        <FullCalendar_Middle></FullCalendar_Middle>
        <RightSideBar></RightSideBar>
    </div>
</template>


<script>
import LeftSideBar from './components/LeftSideBar.vue';
import FullCalendar_Middle from './components/FullCalendarMiddle.vue'
import RightSideBar from './components/RightSideBar.vue';

export default{
    components: {
        LeftSideBar,
        FullCalendar_Middle,
        RightSideBar
    },
};
</script>
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
