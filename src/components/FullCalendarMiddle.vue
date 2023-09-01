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
    import interactionPlugin from '@fullcalendar/interaction'

    export default{
        components: {
            FullCalendar,
        },
        data() {
            return {
                selectedWeek: 'week1',
                calendarOptions:{
                    plugins: [
                        timeGridPlugin,
                        listPlugin, 
                        interactionPlugin,
                    ],
                    initialViews: 'weekGridPlugin, interactionPlugin',
                    events: [
                        {
                            id: 'event1',
                            titles: [
                                // course-side
                                'Internet Programming', 
                                '(Course)', 
                                'CHUN Thavorac', 
                                // room-side
                                'I-606', 
                                'I4-GIC-A'
                            ],
                            start: '2023-09-01T07:00:00',
                            end: '2023-09-01T09:00:00',
                        },
                        {
                            id: 'event1',
                            titles: [
                                // course-side
                                'Operating System', 
                                '(Course)', 
                                'HENG Rathpisey', 
                                // room-side
                                'F-106', 
                                'I4-GIC-A'
                            ],
                            start: '2023-09-02T09:00:00',
                            end: '2023-09-02T11:00:00',
                        },
                        {
                            id: 'event1',
                            titles: [
                                // course-side
                                'Software Engineering', 
                                '(Course)', 
                                'TAL Tongsreng', 
                                // room-side
                                'F-404', 
                                'I4-GIC-A'
                            ],
                            start: '2023-08-31T13:00:00',
                            end: '2023-08-31T15:00:00',
                        },
                        {
                            id: 'event1',
                            titles: [
                                // course-side
                                'Advance Databse', 
                                '(Course)', 
                                'NOP Phearum', 
                                // room-side
                                'I-604', 
                                'I4-GIC-A'
                            ],
                            start: '2023-08-28T07:00:00',
                            end: '2023-08-28T09:00:00',
                        },
                    ],
                    eventRender: this.customEventRender,
                    eventContent: this.customEventContent,
                    eventAllow: this.handleEventAllow,
                    editable: true, // Enable dragging and resizing
                    eventDrop: this.handleEventDrop,
                    eventClick: this.handleEventClick,
                    dateClick: this.handleDateClick,
                    headerToolbar: {
                        start: '',
                        center: '',
                        end: ''
                    },
                    hiddenDays: [0],
                    slotMinTime: '07:00:00 ',
                    slotMaxTime: '18:00:00 ',
                    slotLabelFormat: {
                        hour: 'numeric',
                        minute: '2-digit',
                        omitZeroMinute: false,
                        meridiem: 'short',
                    },
                    contentHeight: '89.1vh',
                    views:{
                        timeGridWeek: {
                            dayHeaderContent: this.customDayHeaderContent,
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
            handleEventClick(eventClickInfo) {
            // This function will be called when an event is clicked
                const event = eventClickInfo.event;
                console.log('Event clicked:', event.title, event.start);
            },
            handleEventAllow(dropInfo) {
                // Prevent dropping events in the specified time range (11am to 12pm)
                const startTime = dropInfo.start;
                const endTime = dropInfo.end;
                if (
                    startTime.getHours() >= 11 &&
                    startTime.getHours() <= 12 
                ) {
                    return false; // Disallow dropping events
                }
                else{
                    return true; // Allow dropping events
                }
            },
            customEventContent(eventInfo) {
                const event = eventInfo.event;
                const titles = event.extendedProps.titles || [];

                // Split titles into different sections
                const courseName = titles.slice(0, 1);
                const courseType = titles.slice(1, 2);
                const lecturer = titles.slice(2, 3);
                const roomName = titles.slice(3, 4);
                const roomNumber = titles.slice(4, 5);

                const courseNameHtml = courseName.map(title => `<div class="courseName">${title}</div>`).join('');
                const courseTypeHtml = courseType.map(title => `<div class="courseType">${title}</div>`).join('');
                const lecturerHtml = lecturer.map(title => `<p class="lecturer">${title}</p>`).join(''); // Use .join() to join multiple lecturers

                const roomNameHtml = roomName.map(title => `<div class="roomName">${title}</div>`).join('');
                const roomNumberHtml = roomNumber.map(title => `<div class="roomNumber">${title}</div>`).join('');

                return {
                    html: `
                        <div class="container-room">
                            <div class="sideCourse">
                                <div class="courseName">
                                    ${courseNameHtml}    
                                    <span class="courseType">
                                        ${courseTypeHtml}
                                    </span>
                                </div>    
                                <div class="lecturer">
                                    ${lecturerHtml}
                                </div>
                            </div>
                            
                            <div class="sideRoom">
                                <div class="roomName">
                                    ${roomNameHtml}
                                </div>    
                                <p class="roomGroup">
                                    ${roomNumberHtml}
                                </p>
                            </div>
                        </div>
                    `,
                };
            },
        }
    }
</script>

<style>
    .FullCalendar_Middle{
        width: 65%;
        height: 100vh;
        /* background-color: blueviolet; */
        font-family: Arial, Helvetica, sans-serif;
        position: relative;
        padding-bottom: 0px;
        /* margin-top: 4px; */
        /* margin-bottom: 0px; */
    }
    .fullcalendar{
        margin-top: 57px;
        padding-left: 10px;
        padding-right: 10px;
    }
    .title-content{
        position: absolute;
        top: 17px;    
    }
    .title-content h1{
        font-size: 28px;
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
        animation: slideFromLeft 6s linear forwards;
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
        top: 15px;
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
    /* @change-slot-time-height */
    td.fc-timegrid-slot {
        height: 37px!important;
    }
    .fc .fc-toolbar.fc-header-toolbar {
        margin-bottom: 0.54em;
    }
    /* @turn-off-color-current-day */
    .fc .fc-timegrid-col.fc-day-today {
        background-color: white;
    }
    /* @color-11-12pm */
    tbody tr:nth-child(9), tbody tr:nth-child(10), tbody tr:nth-child(11), tbody tr:nth-child(12), tbody tr:nth-child(21){
        background-color: #f4f4f4 !important;
    }
    /* @like-colespan on 11 & 12pm */
    .fc .fc-non-business{
        background-color: transparent;
    }
    a.fc-event, a.fc-event{
        background-color: #3AA6B9;
        border: 1px solid #3AA6B9;
    }
    .fc-timegrid-event .fc-event-main{
        padding: 0px;
    }
    /* @event */
    .container-room{
        width: 100%;
        height: 100%;
        position: relative;
        background-color: #3AA6B9;
    }
    /* @course-section */
    .sideCourse{
        width: 100%;
        height: 60%;
        background-color: white;
        padding: 4px 6px;
        font-size: 13px;
        position: absolute;
        font-weight: 600;
        border-top-left-radius: 3px;
        border-top-right-radius: 3px;
    }
    .courseName{
        font-size: 14px;
        color: black;
        padding-bottom: 4px;
    }
    .courseType{
        padding-bottom: 4px;
        color: red;
    }
    .lecturer{
        color: green;
    }

    /* @room-section */
    .sideRoom{
        width: 100%;
        height: 40%;
        background-color: #3AA6B9;
        bottom: 0;
        position: absolute;
        padding: 6px 6px;
        font-weight: 500;
        font-size: 13;
    } 
    .roomName{
        padding-bottom: 4px;
    }
    @media screen and (min-width: 1369px) {
        /* @event */
        .container-room{
            width: 100%;
            height: 100%;
            position: relative;
            background-color: #3AA6B9;
            display: flex !important;
            justify-content: space-between;
        }
        /* @course-section */
        .sideCourse{
            width: 61%;
            height: 100%;
            background-color: white;
            padding: 4px 6px;
            font-size: 13px;
            position: absolute;
            font-weight: 600;
            border-top-left-radius: 3px;
            border-bottom-left-radius: 3px;
            padding-top: 10px;
        }
        .courseName{
            font-size: 14px;
            color: black;
            padding-bottom: 4px;
        }
        .courseType{
            padding-bottom: 4px;
            color: red;
        }
        .lecturer{
            color: green;
        }

        /* @room-section */
        .sideRoom{
            width: 39%;
            height: 100%;
            background-color: #3AA6B9;
            position: absolute;
            padding: 6px 4px;
            font-weight: 500;
            font-size: 13;
            right: 0;
            padding-top: 10px;
        } 
        .roomName{
            padding-bottom: 4px;
        }
    }
</style>