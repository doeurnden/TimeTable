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
                        <select name="group" v-model="selectedGroup" @change="emitSelectedGroup">
                            <option value="" disabled>Groups</option>
                            <option v-for="group in fetchedGroups" :key="group.id" :value="group.code">
                                {{ group.code }}
                            </option>
                        </select>
                    </form>
                </div>
                <!-- @button-week -->
                <div class="select-week">
                    <form action="">
                        <select name="group" v-model="selectedWeek" id="weekSelect">
                            <option value="" disabled>Weeks</option>
                            <option v-for="weekNumber in 16" :key="weekNumber" :value="weekNumber">
                                {{ weekNumber }}
                            </option>
                        </select>
                        <!-- <select name="group" v-model="selectedWeek">
                            <option value="" disabled>Weeks</option>
                            <option v-for="week in fetchedWeeks" :key="week.id" :value="week.id">{{ week.name_en }}</option>
                        </select> -->
                    </form>
                </div>
            </div>
            <FullCalendar :options="calendarOptions" />
        </div>
    </div>
</template>

<script>
import Swal from 'sweetalert2';
import FullCalendar from '@fullcalendar/vue3'
import listPlugin from '@fullcalendar/list'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin, { Draggable } from '@fullcalendar/interaction';
import axios from 'axios';
// import { addDurations } from '@fullcalendar/core/internal';
export default {
    props: ["selectedAcademyYear", "selectedDepartment", "selectedDegree", "selectedDepOption", "selectedGrade", "selectedSemester"],
    components: {
        FullCalendar,
    },
    data() {
        return {
            // Do on API
            selectedGroup: '', // To store the selected group
            fetchedGroups: [], // To store the groups fetched from the API
            selectedWeek: '', // To store the selected week
            fetchedWeeks: [],
            // events: [],
            // To store the weeks fetched from the API

            // events: {
            //     // id: 'event1',
            //     titles: [
            //         // course-side
            //         'Internet Programming',
            //         '(Course)',
            //         'CHUN Thavorac',
            //         // room-side
            //         'I-606',
            //         'I4-GIC-A'
            //     ],
            //     // start: '2023-09-19T07:00:00',
            //     // end: '2023-09-19T09:00:00',
            // },
            calendarOptions: {
                plugins: [
                    timeGridPlugin,
                    listPlugin,
                    interactionPlugin,
                ],
                initialViews: 'weekGridPlugin, interactionPlugin',
                defaultTimedEventDuration: '02:00:00',
                eventContent: this.customEventContent,
                eventAllow: this.handleEventAllow,
                editable: true, // Enable dragging and resizing
                drop: this.drop,
                events: [],
                // eventClick: this.handleEventClick,
                // dateClick: this.handleDateClick,

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
                views: {
                    timeGridWeek: {
                        dayHeaderContent: this.customDayHeaderContent,
                    },
                },
                allDaySlot: false,
                businessHours: [
                    {
                        daysOfWeek: [1, 2, 3, 4, 5, 6],
                        startTime: '7:00',
                        endTime: '11:00'
                    },
                    {
                        daysOfWeek: [1, 2, 3, 4, 5, 6],
                        startTime: '13:00',
                        endTime: '18:00'
                    }
                ],
            }

        }
    },
    mounted() {
        const self = this; // Store a reference to the component instance

        // Add a click event listener to the container of the delete buttons
        // Using event delegation to handle clicks on any delete button
        this.$nextTick(() => {
            const container = document.querySelector('.fullcalendar');

            container.addEventListener('click', function (event) {
                const deleteButton = event.target.closest('.delete');
                if (deleteButton) {
                    const eventId = deleteButton.getAttribute('data-event-id');
                    self.confirmDelete(eventId); // Call the confirmDelete method with the event ID
                }
            });
        });
    },
    methods: {
        addHours(e, hour = 1) {
            let date = new Date(e);
            date.setHours(date.getHours() + hour)
        },
        drop(e) {
            let course = JSON.parse(e.draggedEl.children[0].dataset.course)
            let type = e.draggedEl.children[0].dataset.coursetype
            course.type = type;
            // console.log('selectedGroup',this.selectedGroup);
            // console.log(this.fetchedGroups[0].code);
            // console.log(this.selectedGroup);
            course.group = this.selectedGroup

            this.calendarOptions.events = [...this.calendarOptions.events, {
                titles: [course.name_en, course.type, '', `${course.dg_code}${course.g_code}${course.d_code}-${course.group}`],
                start: e.date,
                // end: this.addHours(e.date, 1)
            }]
            // console.log(course);
            // let courseType = JSON.parse(e.draggedEl.children[0].id)
            // this.calendarOptions.events.push;
            // this.calendarOptions.events.push(...this.displayEvent())
            // axios.post(`http://127.0.0.1:8000/api/slots/create`, {
            //         time_tp: course.time_tp,
            //         time_td: course.time_td,
            //         time_course: course.time_course,
            //         academic_year_id: 2022,
            //         course_program_id: 2022,
            //         semester_id: 1,
            //         lecturer_id: null,
            //         group_id: 1,
            //         time_used: null,
            //         time_remaining: null,
            //         created_uid: 1,
            //         write_uid: null,
            // });
        },
        displayEvent() {
            return events
        },
        // async drop() {
        //     alert("added slot")
        //     try {
        //         const response = await axios.post(`http://127.0.0.1:8000/api/slots/create`, {
        //             time_tp: 0,
        //             time_td: 0,
        //             time_course: 32,
        //             academic_year_id: 2022,
        //             course_program_id: 2022,
        //             semester_id: 1,
        //             lecturer_id: null,
        //             group_id: 1,
        //             time_used: null,
        //             time_remaining: null,
        //             created_uid: 1,
        //             write_uid: null,
        //         });
        //         console.log(response.data);
        //     } catch (error) {
        //         console.log(error)
        //     }
        // },
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
                // endTime.getHours() >= 12 &&
                startTime.getHours() <= 12
                // endTime.getHours() >= 12
            ) {
                return false; // Disallow dropping events
            }
            else {
                return true; // Allow dropping events
            }
        },
        customEventContent(eventInfo) {
            const event = eventInfo.event;
            const titles = event.extendedProps.titles || [];
            // Split titles into different sections //5
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
                            <div class="delete"><h1>x</h1></div>
                            <div class="sideCourse">
                                <div class="courseName">
                                    <div class="courseNameText">
                                        ${courseNameHtml}
                                    </div>
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
                            <div class="delete" data-event-id="${event.id}">x</div>
                        </div>
                    `,
            };
        },
        // @sweetalert2
        async confirmDelete(eventId) {
            const result = await Swal.fire({
                title: 'Are you sure to delete?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Yes',
                cancelButtonText: 'No',
            });
            if (result.isConfirmed) {
                this.deleteEvent(eventId);
            }
        },
        deleteEvent(eventId) {
            const index = this.events.findIndex((event) => event.id === eventId);
            if (index !== -1) {
                this.events.splice(index, 1);
            }
        },

        emitSelectedGroup() {
            this.$emit('group-selected', this.selectedGroup);
        },
        fetchGroups() {
            axios.get(import.meta.env.VITE_APP_GROUP + "?" + new URLSearchParams({
                academic_year_id: this.selectedAcademyYear,
                department_id: this.selectedDepartment,
                degree_id: this.selectedDegree,
                department_option_id: this.selectedDepOption,
                grade_id: this.selectedGrade,
                semester_id: this.selectedSemester,
            }))
                .then((response) => {
                    this.fetchedGroups = response.data;
                    this.selectedGroup = this.fetchedGroups[0].code;
                    // console.log(response.data)
                    // this.fetchedGroups = response.data;
                    // this.selectedGroup = this.fetchGroups[0].code;
                })
                .catch((error) => {
                    console.log('Error fetching groups:', error);
                });
        }
    },
    watch: {
        selectedAcademyYear: function () {
            this.fetchGroups()
        },
        selectedDepartment: function () {
            this.fetchGroups();
        },
        selectedDegree: function () {
            this.fetchGroups();
        },
        selectedDepOption: function () {
            this.fetchGroups();
        },
        selectedGrade: function () {
            this.fetchGroups();
        },
        selectedSemester: function () {
            this.fetchGroups();
        }
    },
    // created() {
    //     this.fetchdata();
    // }
}
</script>

<style>
.FullCalendar_Middle {
    width: 65%;
    height: 100vh;
    /* background-color: blueviolet; */
    font-family: Arial, Helvetica, sans-serif;
    position: relative;
    padding-bottom: 0px;
}

.fullcalendar {
    margin-top: 57px;
    padding-left: 10px;
    padding-right: 10px;
}

.title-content {
    position: absolute;
    top: 19px;
}

.title-content h1 {
    font-size: 28px;
}

.hori {
    position: relative;
    width: 100%;
    height: 5px;
    overflow: hidden;
}

.hori hr {
    width: 100%;
    height: 5px;
    color: #3AA6B9;
    background-color: #3AA6B9;
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

.select-group-week {
    width: 200px;
    height: 35px;
    /* background-color: green; */
    position: absolute;
    top: 17px;
    right: 8px;
    display: flex;
    justify-content: space-between;
}

.select-group-week .select-group {
    width: 96px;
    height: 35px;
    /* background-color: blue; */
}

.select-group-week .select-group select {
    width: 100%;
    height: 35px;
    border-radius: 5px;
    background-color: #3AA6B9;
    color: white;
    border: none;
    outline: 0px;
    font-size: 15px;
    padding: 3px;
    transition: all 0.5s;
}

.select-group-week .select-week {
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
    outline: 0px;
    font-size: 15px;
    padding: 3px;
    transition: all 0.6s;
}

.select-group-week .select-group select:hover,
.select-week select:hover {
    cursor: pointer;
    background-color: #0C356A;
    transition: all 0.7s;
}

/* @change-slot-time-height */
td.fc-timegrid-slot {
    height: 37px !important;
}

.fc .fc-toolbar.fc-header-toolbar {
    margin-bottom: 0.54em;
}

/* @turn-off-color-current-day */
.fc .fc-timegrid-col.fc-day-today {
    background-color: white;
}

/* @color-11-12pm */
tbody tr:nth-child(9),
tbody tr:nth-child(10),
tbody tr:nth-child(11),
tbody tr:nth-child(12),
tbody tr:nth-child(21) {
    background-color: #f4f4f4 !important;
}

/* @like-colespan on 11 & 12pm */
.fc .fc-non-business {
    background-color: transparent;
}

a.fc-event,
a.fc-event {
    background-color: #3AA6B9;
    border: 1px solid #3AA6B9;
}

.fc-timegrid-event .fc-event-main {
    padding: 0px;
}

/* @event */
.container-room {
    width: 100%;
    height: 100%;
    position: relative;
    background-color: #3AA6B9;
    position: relative;
}

.container-room:hover .delete {
    width: 13px;
    height: 13px;
    background-color: red;
    border-top-right-radius: 3px;
    color: white;
    font-weight: bold;
    position: absolute;
    text-align: center;
    justify-content: center;
    z-index: 1;
    right: 0;
    top: 0;
    font-size: 10px;
    cursor: pointer;
}

.container-room:hover .sideCourse {
    background-color: #FFF6E0 !important;
}

/* @course-section */
.sideCourse {
    width: 100%;
    height: 63%;
    background-color: white;
    padding: 6px 6px;
    font-size: 13px;
    position: absolute;
    font-weight: 600;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
}

.courseName .courseNameText {
    font-size: 14px;
    color: black;
    /* margin-bottom: 6px;
        line-height: 1.3em;
        max-height: calc(2 * 1.2em);
        overflow: hidden;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;  */
}

.courseType {
    padding-bottom: 6px;
    color: red;
}

.lecturer {
    color: green;
}

/* @room-section */
.sideRoom {
    width: 100%;
    height: 37%;
    background-color: #3AA6B9;
    bottom: 0;
    position: absolute;
    padding: 6px 6px;
    font-weight: 500;
    font-size: 13px;
}

.roomName {
    padding-bottom: 4px;
}

.delete h1 {
    width: 13px;
    height: 13px;
    display: none;
    transition: all 0.5s;
}

.container-room:hover .delete {
    width: 13px;
    height: 13px;
    background-color: red;
    border-top-right-radius: 3px;
    color: white;
    font-weight: bold;
    position: absolute;
    text-align: center;
    justify-content: center;
    z-index: 1;
    right: 0;
    top: 0;
    font-size: 10px;
    cursor: pointer;
    transition: all 0.5s;
}

/* 
.delete {
    width: 13px;
    height: 13px;
    background-color: red;
    border-top-right-radius: 3px;
    color: white;
    font-weight: bold;
    position: absolute;
    text-align: center;
    justify-content: center;
    z-index: 1;
    right: 0;
    top: 0;
    font-size: 10px;
    cursor: pointer;
} */

.swal2-container .swal2-popup {
    width: 25rem;
    height: 270px;
    max-width: 100%;
    border: none;
    border-radius: 5px;
    background: #fff;
    color: #545454;
    display: none;
    padding: 0 0.1em 2.3em;
    position: relative;
    box-sizing: border-box;
    grid-template-columns: minmax(0, 100%);
    font-family: inherit;
    font-size: 1rem;
}

.swal2-icon.swal2-warning {
    border-color: red;
    color: red;
    margin-bottom: -25px;
    /* font-size: 14px; */
}

.swal2-title {
    /* font-size: 25px; */
    color: black;
    font-family: Arial, Helvetica, sans-serif;
}

.swal2-actions .swal2-loader {
    position: relative;
}

.swal2-container .swal2-styled.swal2-confirm {
    border: 0;
    border-radius: 0.25em;
    /* background: initial; */
    background-color: green !important;
    color: #fff;
    font-size: 1em;
    padding: 10px 25px;
    position: absolute;
    right: 100px;
}

.swal2-container .swal2-styled.swal2-cancel {
    border: 0;
    border-radius: 0.25em;
    background: initial;
    background-color: red !important;
    color: #fff;
    font-size: 1em;
    padding: 10px 25px;
    position: absolute;
    left: 100px;
}

@media screen and (min-width: 1369px) {

    /* @event */
    .container-room {
        width: 100%;
        height: 100%;
        position: relative;
        background-color: #3AA6B9;
        display: flex !important;
        justify-content: space-between;
    }

    /* @course-section */
    .sideCourse {
        width: 60%;
        height: 100%;
        background-color: white;
        border-top-right-radius: 0px;
        border-bottom-left-radius: 3px;
        padding: 4px 6px;
        font-size: 12px;
        font-weight: 600;
        position: absolute;
        padding-top: 10px;
    }

    .courseName {
        font-size: 14px;
        color: black;
        padding-bottom: 4px;
    }

    .courseType {
        padding-bottom: 4px;
        color: red;
        padding-top: 3px;
    }

    .lecturer {
        color: green;
        font-size: 14px;
        padding-top: 3px;
    }

    /* @room-section */
    .sideRoom {
        width: 40%;
        height: 100%;
        background-color: #3AA6B9;
        position: absolute;
        padding: 6px 5px;
        font-weight: 500;
        font-size: 13px;
        right: 0;
        padding-top: 10px;
    }

    .roomName {
        padding-bottom: 4px;
    }
}
</style>