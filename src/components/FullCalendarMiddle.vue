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
                    <select name="week" id="">
                        <option value="week 1">Week 1</option>
                        <option value="week 2">Week 2</option>
                        <option value="week 3">Week 3</option>
                    </select>
                </form>
            </div>
        </div>
            <FullCalendar :options="calendarOptions">
                <template v-slot:eventContent='arg'>
                    <b>{{ arg.event.title }}</b>
                </template>
            </FullCalendar>
        </div>
    </div>
</template>

<script>
    import FullCalendar from '@fullcalendar/vue3'
    import timeGridPlugin from '@fullcalendar/timegrid'
    import dayGridPlugin from '@fullcalendar/daygrid'
    import interactionPlugin from '@fullcalendar/interaction'

    export default{
        components: {
            FullCalendar
        },
        data() {
            return {
                calendarOptions:{
                    plugins: [
                        timeGridPlugin, 
                        interactionPlugin
                    ],
                    initialViews: 'weekGridPlugin, interactionPlugin',
                    dateClick: this.handleDateClick,
                    headerToolbar: {
                    left: '',
                    center: '',
                    right: 'timeGridWeek'
                    },
                    headerToolbar: {
                        start: '', // will normally be on the left. if RTL, will be on the right
                        center: '',
                        end: '' // will normally be on the right. if RTL, will be on the left  (timeGridWeek)
                    },
                    hiddenDays: [0],
                    slotMinTime: '07:00:00 ',
                    slotMaxTime: '18:00:00 ',
                    slotLabelFormat: {
                        hour: 'numeric',
                        minute: '2-digit',
                        omitZeroMinute: false,
                        meridiem: 'short'
                    },
                    contentHeight: 'auto',
                    views:{
                    timeGridWeek: {
                        dayHeaderContent: this.customDayHeaderContent
                        }, 
                    },
                    allDaySlot: false,
                    businessHours: [ // specify an array instead
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
                    ]
                    
                }
            }
        },
        methods: {
            handleDateClick: function(arg) {
                alert('date click! ' + arg.dateStr)
            },
            customDayHeaderContent(args) {
                const date = new Date(args.date);
                const day = date.toLocaleDateString('en-US', { weekday: 'long' }); // Change 'long' to 'short' if you prefer abbreviated names
                return day;
            },
        }
    }
</script>

<style scoped>
    .FullCalendar_Middle{
        width: 65%;
        height: 100%;
        /* background-color: blueviolet; */
        font-family: Arial, Helvetica, sans-serif;
        position: relative;
    }
    .fullcalendar{
        margin-top: 60px;
    }
    .title-content{
        position: absolute;
        top: 20px;    
    }
    .title-content h1{
        font-size: 27px;
    }
    .hori{
        width: 100%;
        border-top: 3px solid #3AA6B9;
        position: absolute;
        top: 60px;
    }
    .select-group-week{
        width: 200px;
        height: 35px;
        /* background-color: green; */
        position: absolute;
        top: 17px;
        right: 5px;
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