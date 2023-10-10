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
                            <option v-for="group in fetchedGroups" :key="group.id" :value="group.id">{{ group.code }}
                            </option>
                        </select>
                    </form>
                </div>
                <!-- @button-week -->
                <div class="select-week">
                    <form action="">
                        <select name="group" v-model="selectedWeek" id="weekSelect" @change="updateFullCalendar">
                            <option value="" disabled>Weeks</option>
                            <option v-for="weekNumber in 16" :key="weekNumber" :value="weekNumber">
                                Week {{ weekNumber }}
                            </option>
                        </select>
                    </form>
                </div>
            </div>
            <!-- <FullCalendar :options="calendarOptions"/> -->
            <div v-if="selectedWeek !== null">
                <FullCalendar :options="calendarOptions" ref="calendar"/>
            </div>
            <div id="flash-message-container"></div>
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

export default {
    props: ["selectedAcademyYear", "selectedDepartment", "selectedDegree", "selectedDepOption", "selectedGrade", "selectedSemester","refresh"],
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
            events: [],
            currentWeek: 1, 

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
                editable: true,
                drop: this.drop,
                events: [],
                eventOverlap: false, 
                eventResize: function(info) {
    alert(info.event.title + " end is now " + info.event.end.toISOString());

    if (!confirm("is this okay?")) {
      info.revert();
    }
  },   // Prevent events from overlapping
                eventDrop: (eventDropInfo) =>{
                    // console.log(eventDropInfo.event.title);
                    // Alert message when move slot
                    console.log(this.calendarOptions.events)
                    const flashMessage = document.createElement('div');
                    flashMessage.classList.add('flash-message-move');

                    // Create an SVG element for the custom icon
                    const svgIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
                    svgIcon.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
                    svgIcon.setAttribute('width', '50');
                    svgIcon.setAttribute('height', '50');
                    svgIcon.setAttribute('viewBox', '0 0 24 24');
                    
                    // Create a <path> element for the icon path
                    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                    path.setAttribute('fill', 'currentColor');
                    path.setAttribute('d', 'M3 4v12c0 1.103.897 2 2 2h3.5l3.5 4l3.5-4H19c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2H5c-1.103 0-2 .897-2 2zm8 1h2v6h-2V5zm0 8h2v2h-2v-2z');

                    // Add the <path> element to the SVG
                    svgIcon.appendChild(path);

                    // Create a container for the titles
                    const titlesContainer = document.createElement('div');
                    titlesContainer.classList.add('titles-add-container');

                    const title1 = document.createElement('div');
                    const title2 = document.createElement('div');

                    title1.textContent = 'Move Timetalble Slot'; 
                    title2.textContent = 'Timetalble Slot moved successfully!';

                    // Add titles to titles container
                    titlesContainer.appendChild(title1);
                    titlesContainer.appendChild(title2);

                    // Add icon and titles container to flash message
                    flashMessage.appendChild(svgIcon);
                    flashMessage.appendChild(titlesContainer);

                    // Add flash message to the container
                    const flashMessageContainer = document.getElementById('flash-message-container');
                    flashMessageContainer.appendChild(flashMessage);

                    flashMessage.style.display = 'flex';
                    // svgIcon.style.fontSize = '40px';
                    svgIcon.style.marginTop = '3px';
                    title1.style.fontSize = '17px';
                    title1.style.marginTop = '4px';

                    setTimeout(() => {
                        flashMessage.style.display = 'none';
                        flashMessageContainer.removeChild(flashMessage);
                    }, 2500);
                },

                headerToolbar: {
                    start: '',
                    center: '',
                    end: ''
                    // end: 'prev, next'
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
                defaultTimedEventDuration: '02:00:00',
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
            },
            
            selectedWeek: "1",
            // eventsByWeek: {}, // Store events for each week

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
                    console.log(deleteButton);
                    const eventId = deleteButton.getAttribute('data-event-id');
                    console.log(eventId)
                    self.confirmDelete(eventId); // Call the confirmDelete method with the event ID
                }
            });
           
        });
        this.$nextTick(() => {
            this.handleSlotEventMovement();
        });
        // this.fetchAcademyYears()
        // this.selectedAcademyYear = this.selectedAcademyYear ?? this.fetchedAcademyYears[0]
        // document.addEventListener('DOMContentLoaded', function () {
        //     var containerEl = document.querySelector('.contianer');
        //     new Draggable(containerEl, {
        //         itemSelector: '.item',
        //         eventData: function (eventEl) {
        //             return {
        //                 title: eventEl.innerText
        //             };
        //         }
        //     });
        // })
    },
//     computed: {
//     getCurrentCalendarOptions() {
//       if (this.selectedWeek !== null) {
//         return {
//           ...this.calendarOptions,
//           events: this.eventsByWeek[this.selectedWeek] || [], // Use events for the selected week
//         };
//       }
//       return null;
//     },
//   },
    methods: {
        handleSlotEventMovement(e){

        },
        addHours(e, hour = 1) {
            let date = new Date(e);
            date.setHours(date.getHours() + hour)
        },
        handleEventDrop(info) {
            console.log(info);
           // Handle event drop and emit an event if refresh is needed
         
        },

        // showSelectedWeek() {
        //     const selectedWeek = this.selectedWeek;

        //     if (selectedWeek !== null) {
        //         alert(`Selected Week: ${selectedWeek}`);
        //     }
        // },
        drop(e) {
            console.log(e);
            // alert("Dropped an element")
            //             {
            //     id: 'event1',
            //     titles: [
            //         // course-side
            //         'Internet Programming',
            //         '(Course)',
            //         'CHUN Thavorac',
            //         // room-side
            //         'I-606',
            //         'I4-GIC-A'
            //     ],
            //     start: '2023-09-20T09:00:00',
            //     end: '2023-09-20T11:00:00',
            // }
            // Date.prototype.addHours= function(h){
            //     this.setHours(this.getHours()+h);
            //     return this;
            // }

            let course = JSON.parse(e.draggedEl.children[0].dataset.course)
            let type=e.draggedEl.children[0].dataset.coursetype
            console.log(this.refresh);
            course.type=type;
                if(this.refresh){
                    this.calendarOptions.events=[]
                    this.$emit("refreshCalendar",false);
                    //TODO: fetch
                }else{
                    this.calendarOptions.events = [...this.calendarOptions.events, {
                    titles: [course.name_en,course.type],
                    start: e.date,
                    // end: this.addHours(e.date, 1)
                    }]; 
                }
            // console.log(this.calendarOptions.events)
            // alert(123);
            // Alert message when slot moved 
            const flashMessage = document.createElement('div');
            flashMessage.classList.add('flash-message-add');

            // Create an SVG element for the custom icon
            const svgIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            svgIcon.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
            svgIcon.setAttribute('width', '50');
            svgIcon.setAttribute('height', '50');
            svgIcon.setAttribute('viewBox', '0 0 24 24');
            
            // Create a <path> element for the icon path
            const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            path.setAttribute('fill', 'currentColor');
            path.setAttribute('d', 'M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4l8-8l-1.41-1.42Z');

            // Add the <path> element to the SVG
            svgIcon.appendChild(path);

            // Create a container for the titles
            const titlesContainer = document.createElement('div');
            titlesContainer.classList.add('titles-add-container');

            const title1 = document.createElement('div');
            const title2 = document.createElement('div');

            title1.textContent = 'Add Timetalble Slot'; 
            title2.textContent = 'Timetalble Slot added successfully!';

            // Add titles to titles container
            titlesContainer.appendChild(title1);
            titlesContainer.appendChild(title2);

            // Add icon and titles container to flash message
            flashMessage.appendChild(svgIcon);
            flashMessage.appendChild(titlesContainer);

            // Add flash message to the container
            const flashMessageContainer = document.getElementById('flash-message-container');
            flashMessageContainer.appendChild(flashMessage);

            flashMessage.style.display = 'flex';
            // svgIcon.style.fontSize = '40px';
            svgIcon.style.marginTop = '3px';
            title1.style.fontSize = '17px';
            title1.style.marginTop = '4px';

            setTimeout(() => {
                flashMessage.style.display = 'none';
                flashMessageContainer.removeChild(flashMessage);
            }, 2500);
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
            const day = date.toLocaleDateString('en-US', { weekday: 'long' });
            return day;
        },
        // handleEventClick(eventClickInfo) {
        //     // This function will be called when an event is clicked
        //     const event = eventClickInfo.event;
        //     console.log('Event clicked:', event.title, event.start);
        // },
        // @prevent-slot-from-time-11&12
        handleEventAllow(dropInfo) {
            const startTime = dropInfo.start;
            const endTime = dropInfo.end;

            // Define the allowed time slots
            const allowedStartTime = new Date(startTime);
            allowedStartTime.setHours(11, 0, 0, 0); // 12:00:00 PM
            const allowedEndTime = new Date(startTime);
            allowedEndTime.setHours(13, 0, 0, 0); // 1:00:00 PM

            // Check if the event falls entirely within the allowed time slots
            if (
                endTime <= allowedStartTime || // Event ends before 12pm
                startTime >= allowedEndTime     // Event starts after 1pm
            ) {
                return true; // Allow dropping events
            } else {
                return false; // Disallow dropping events
            }
        },
        customEventContent(eventInfo) {
            const events = eventInfo.event;
            // console.log(events.extendedProps.titles);
            const titles = events.extendedProps.titles || [];
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
                    <div class="container-room" >
                        <div class="delete" data-event-id="${events.id}"><h1>x</h1></div>
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
                        <div class="delete"  data-event-id="${events.id}">x</div>
                    </div>
                `,
            };
        },
        
        // @sweetalert2
        async confirmDelete(eventId) {
            console.log('confirmDelete function called with eventId:', eventId);

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
            console.log('deleteEvent function called with eventId:', eventId);
            const index = this.events.findIndex((events) => events.id === eventId);
            if (index !== 0) {
                this.events.splice(index, 1);
            }
            // Notify after deletion slot
            const flashMessage = document.createElement('div');
            flashMessage.classList.add('flash-message-remove');

            // Create an SVG element for the custom icon
            const svgIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            svgIcon.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
            svgIcon.setAttribute('width', '47');
            svgIcon.setAttribute('height', '47');
            svgIcon.setAttribute('viewBox', '0 0 24 24');
            
            // Create a <path> element for the icon path
            const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            path.setAttribute('fill', 'currentColor');
            path.setAttribute('d', 'M7 21q-.825 0-1.413-.588T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.588 1.413T17 21H7Zm2-4h2V8H9v9Zm4 0h2V8h-2v9Z');

            // Add the <path> element to the SVG
            svgIcon.appendChild(path);

            // Create a container for the titles
            const titlesContainer = document.createElement('div');
            titlesContainer.classList.add('titles-container-remove');

            const title1 = document.createElement('div');
            const title2 = document.createElement('div');

            title1.textContent = 'Delete Timetalble Slot'; 
            title2.textContent = 'Timetalble Slot deleted successfully!';

            titlesContainer.appendChild(title1);
            titlesContainer.appendChild(title2);

            flashMessage.appendChild(svgIcon);
            flashMessage.appendChild(titlesContainer);

            // Add the flash message to the container
            const flashMessageContainer = document.getElementById('flash-message-container');
            flashMessageContainer.appendChild(flashMessage);

            flashMessage.style.display = 'flex';
            // svgIcon.style.fontSize = '40px';
            svgIcon.style.marginTop = '3px';
            title1.style.fontSize = '17px';
            title1.style.marginTop = '4px';

            setTimeout(() => {
                flashMessage.style.display = 'none';
                flashMessageContainer.removeChild(flashMessage);
            }, 2500);
        },
   
        // fetchWeeks() {
        //     const apiUrl = 'http://127.0.0.1:8000/api/get_all_weeks';
        //     axios.get(apiUrl)
        //         .then((response) => {
        //             this.fetchedWeeks = response.data;
        //             this.selectedWeek = this.fetchedWeeks[0].name_en;
        //         })
        //         .catch((error) => {
        //             console.error('Error fetching weeks:', error);
        //         });
        // },
        fetchdata() {
            this.fetchGroups();
            // this.fetchWeeks();
        },
        emitSelectedGroup() {
            this.$emit('group-selected', this.selectedGroup);
            this.$emit("refreshCalendar",true)
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
                    this.selectedGroup = this.fetchedGroups[0].id;
                })
                .catch((error) => {
                    console.error('Error fetching groups:', error);
                });
        },
        fetchTimeTable() {
            const requestData = {
                academic_year_id: this.selectedAcademyYear,
                department_id: this.selectedDepartment,
                degree_id: this.selectedDegree,
                department_option_id: this.selectedDepOption,
                grade_id: this.selectedGrade,
                semester_id: this.selectedSemester,
                group_id: this.selectedGroup,
                week_id: this.selectedWeek,
                created_uid: 250,
                updated_uid: 250,
                
            };

            axios.post(import.meta.env.VITE_APP_TIMETABLE, requestData)
                .then((response) => {
                this.fetchedTimeTable = response.data;
                console.log('TimeTable:', response.data);
                })
                .catch((error) => {
                console.error('Error fetching Timetable:', error);
            });
        },
        updateFullCalendar() {
            this.$emit('week-selected',this.selectedWeek);
            this.$emit("refreshCalendar",true)
            // When the selected week changes, you can change the FullCalendar view
            // and also update the events to show those for the selected week.
            const selectedWeek = this.selectedWeek;
            if (selectedWeek !== null) {
                const calendarInstance = this.$refs.calendar;
                if (calendarInstance) {
                    const calendarApi = calendarInstance.getApi();
                    // Change the FullCalendar view to week view
                    calendarApi.changeView('timeGridWeek');
                    // Set the events for the selected week (replace this with your logic)
                    const eventsForWeek = this.getEventsForWeek(selectedWeek);
                    calendarApi.removeAllEvents();
                    calendarApi.addEventSource(eventsForWeek);
                    // alert(`FullCalendar changed to Week ${selectedWeek}`);
                    // console.log('FullCalendar View:', calendarApi.view.type);
                }
            }
            this.selectedWeek = selectedWeek;
        },

        getEventsForWeek(weekNumber) {
            const eventsForSelectedWeek = this.events.filter(event => event.week === weekNumber);
            return eventsForSelectedWeek;
        },
        handlePrevWeek() {
            if (this.currentWeek > 1) {
                this.currentWeek -= 1;
                this.$refs.calendar.getApi().updateSize(); // Force calendar update
            }
        },
        handleNextWeek() {
            if (this.currentWeek < 16) {
                this.currentWeek += 1;
                this.$refs.calendar.getApi().updateSize(); // Force calendar update
            }
        },
    },
    
    // computed: {
    //     filteredEvents() {
    //     // Filter events based on the selected week and refresh flag
    //         return this.calendarOptions.events.filter((event) => {
    //             const eventWeek = event.extendedProps.week;
    //             return eventWeek === this.selectedWeek || this.refresh;
    //         });
    //     },
    // },
    watch: {
        selectedAcademyYear: function () {
            this.fetchGroups();
            this.fetchTimeTable();
        },
        selectedDepartment: function () {
            this.fetchGroups();
            this.fetchTimeTable();
        },
        selectedDegree: function () {
            this.fetchGroups();
            this.fetchTimeTable();
        },
        selectedDepOption: function () {
            this.fetchGroups();
            this.fetchTimeTable();
        },
        selectedGrade: function () {
            this.fetchGroups();
            this.fetchTimeTable();
        },
        selectedSemester: function () {
            this.fetchGroups();
            this.fetchTimeTable();
        }, 
        selectedGroup: function (){
            this.fetchTimeTable();
        },
        selectedWeek: function(){
            this.fetchTimeTable();
        },
        refresh:function(value){
            if(value==true){
                this.calendarOptions.events = [];
                //TODO: fetch timetable
            }
        }
        
        // refresh(newRefresh) {
        //     if (newRefresh === true) {
        //         // Perform the refresh logic here
        //         this.calendarOptions.events = []; // Clear the events
        //         // Add or fetch new events as needed
        //     }
        // },
        // filteredEvents() {
        //     // Update the FullCalendar events when filteredEvents change
        //     this.calendarOptions.events = this.filteredEvents;
        // },
    },
    created() {
        this.fetchdata();
         // Set up the eventDrop handler
        // this.calendarOptions.eventDrop = this.handleEventDrop;
    }
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
    .container-room:hover .delete{
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
    .container-room:hover .sideCourse{
        background-color: #FFF6E0;
    }
    .sideCourse.acitve{
        background-color: blue;
        color: white;
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
    .container-room:hover .delete{
        width: 13px;
        height: 14px;
        background-color: red;
        border-top-right-radius: 3px;
        color: white;
        font-weight: bold;
        position: absolute;
        z-index: 1;
        right: 0;
        top: 0;
        font-size: 12px;
        cursor: pointer;
        transition: all 0.3s;
    }
    .delete h1{
        width: 13px;
        height: 14px;
        background-color: red;
        display: none;
        transition: all 0.5s;
        font-size: 12px;
        border-top-right-radius: 3px;
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
    /* Alert message after drop */
    .flash-message-add {
        width: 295px;
        height: 90px;
        background-color:green;
        border-radius: 5px;
        box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
        color: #fff;
        display: none;
        font-size: 14px;
        position: fixed;
        padding: 10px;
        padding-top: 20px;
        top: 10px;
        right: 10px;
        z-index: 9999;
        line-height: 25px;
    }
    .flash-message-add div {
        display: flex;
        flex-direction: row; 
        align-items: center;
    }
    .flash-message-add .titles-add-container {
        display: block;
    }

    /* Alert message after remove */
    .flash-message-remove {
        width: 295px;
        height: 90px;
        background-color:red;
        border-radius: 5px;
        box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
        color: #fff;
        display: none;
        font-size: 14px;
        position: fixed;
        padding: 10px;
        padding-top: 20px;
        top: 10px;
        right: 10px;
        z-index: 9999;
        line-height: 25px;
    }
    .flash-message-remove div {
        align-items: center;
    }
    .flash-message-remove .titles-remove-container {
        display: block; 
    }

    /* Alert message after move */
    .flash-message-move {
        width: 295px;
        height: 90px;
        background-color: #00C4FF;
        border-radius: 5px;
        box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
        color: #fff;
        display: none;
        font-size: 14px;
        position: fixed;
        padding: 10px;
        padding-top: 20px;
        top: 10px;
        right: 10px;
        z-index: 999;
        line-height: 25px;
    }
    .flash-message-remove div {
        align-items: center;
    }
    .flash-message-remove .titles-remove-container {
        display: block; 
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