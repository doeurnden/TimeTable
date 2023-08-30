<template>
    <div class="FullCalendar_Middle">
        <div class="fullcalendar">
            <div class="hori">
                <hr>
            </div>
            <!-- @title -->
            <div class="title-content">
                <h1>Schedule Management</h1>
            </div>
            <!-- @button-select-group & week -->
            <div class="select-group-week">
                <!-- @button-group -->
                <div class="select-group">
                    <form action="">
                        <select name="group" id="">
                            <option value="group A">Group A</option>
                            <option value="group B">Group B</option>
                            <option value="group C">Group C</option>
                        </select>
                    </form>
                </div>
                <!-- @button-week -->
                <div class="select-week">
                    <form action="">
                        <select name="week" v-model="selectedWeek">
                            <option class="option" :value="`week${weekNumber}`" v-for="weekNumber in 16" :key="weekNumber">
                                Week {{ weekNumber }}
                            </option>
                        </select> 
                    </form>
                </div>
            </div>
            <FullCalendar :options="calendarOptions"/>
        </div>
    </div>
</template>

<script>
    import FullCalendar from '@fullcalendar/vue3'
    import listPlugin from '@fullcalendar/list'
    import timeGridPlugin from '@fullcalendar/timegrid'
    // import dayGridPlugin from '@fullcalendar/daygrid'
    import interactionPlugin from '@fullcalendar/interaction'

    export default{
        components: {
            FullCalendar,
        },
        mounted() {
            window.addEventListener('resize', this.handleWindowResize);
        },
        
        beforeUnmount() {
            window.removeEventListener('resize', this.handleWindowResize);
        },
        data() {
            return {
                selectedWeek: 'week1', //set week 1 as default
                calendarOptions:{
                    plugins: [
                        // dayGridPlugin,
                        timeGridPlugin,
                        listPlugin, 
                        interactionPlugin,
                    ],
                    initialViews: 'weekGridPlugin, interactionPlugin',
                    views: {
                    timeGridWeek: {
                            windowResizeDelay: 200, // Set your desired windowResizeDelay value
                        },
                    },
                    dateClick: this.handleDateClick,
                    headerToolbar: {
                        start: '',
                        center: '',
                        end: ''
                    },
                    
                    // editable: true,
                    // selectable: true,
                    hiddenDays: [0],
                    slotMinTime: '07:00:00 ',
                    slotMaxTime: '18:00:00 ',
                    slotLabelFormat: {
                        hour: 'numeric',
                        minute: '2-digit',
                        omitZeroMinute: false,
                        meridiem: 'short'
                    },
                    contentHeight: '86vh',
                    views:{
                        timeGridWeek: {
                            dayHeaderContent: this.customDayHeaderContent
                        }, 
                    },
                    allDaySlot: false,
                    businessHours: [
                        {
                            daysOfWeek: [ 1, 2, 3, 4, 5, 6 ],
                            startTime: '7:00', 
                            endTime: '11:00' 
                        },
                        {
                            daysOfWeek: [1, 2, 3, 4, 5, 6 ],
                            startTime: '13:00', 
                            endTime: '18:00'
                        }
                    ],  
                }
            }
        },
        methods: {
            customDayHeaderContent(args) {
                const date = new Date(args.date);
                const day = date.toLocaleDateString('en-US', { weekday: 'long' }); // Change 'long' to 'short' if you prefer abbreviated names
                return day;
            },
            handleWindowResize() {
                this.$refs.fullCalendar.getApi().handleWindowResize();
            },
        }
    }
</script>

<style scoped>

    .FullCalendar_Middle{
        width: 65%;
        height: 100vh;
        /* background-color: blueviolet; */
        font-family: Arial, Helvetica, sans-serif;
        position: relative;
        padding-bottom: 0px;
        margin-bottom: 0px;
    }
    .fullcalendar{
        margin-top: 60px;
        padding-left: 10px;
        padding-right: 10px;
    }
    .title-content{
        position: absolute;
        top: 20px;    
    }
    .title-content h1{
        font-size: 27px;
    }
    .hori{
        position: relative;
        width: 100%;
        height: 5px;
        overflow: hidden;
    }
    .hori hr{
        width: 100%;
        height: 5px;
        color:#3AA6B9;
        background-color:#3AA6B9;
        position: absolute;
        border: none;
        animation: slideFromLeft 7s linear forwards;
    }
    @keyframes slideFromLeft {
        0% {
            left: -100%;
        }
        100% {
            left: 0;
        }
    }
    .select-group-week{
        width: 200px;
        height: 35px;
        /* background-color: green; */
        position: absolute;
        top: 17px;
        right: 8px;
        display: flex;
        justify-content: space-between;
    }
    .select-group-week .select-group{
        width: 96px;
        height: 35px;
        /* background-color: blue; */
    }
    .select-group-week .select-group select{
        width: 100%;
        height: 35px;
        border-radius: 5px;
        background-color: #3AA6B9;
        color: white;
        border: none;
        outline:0px;
        font-size: 15px;
        padding: 3px;
        transition: all 0.5s;
    }
    .select-group-week .select-week{
        width: 96px;
        height: 100%;
        /* background-color: black; */
    }
    .select-group-week .select-week select {
        width: 100%;
        height: 35px;
        border-radius: 5px;
        background-color: #3AA6B9;
        color: white;
        border: none;
        outline:0px;
        font-size: 15px;
        padding: 3px;
        transition: all 0.6s;
    }
    .select-group-week .select-group select:hover, .select-week select:hover{
        cursor: pointer;
        background-color: #0C356A;
        transition: all 0.7s;
    }  
</style>