<template>
  <div class="container max-w-full font-sans text-slate-700  subpixel-antialiased">
    
    <LeftSideBar 
      @set-initialize="setFirstInitialize"
      @academy-year-selected="handleAcademicYearSelected" 
      @department-selected="handleDepartmentSelected"
      @degree-selected="handleDegreeSelected" 
      @depOption-selected="handleDepOptionSelected"
      @grade-selected="handleGradeSelected" 
      @semester-selected="handleSemesterSelected"
      @group-selected="handleGroupSelected"
      @refreshCalendar="refreshCalendar"
      ></LeftSideBar>
    <FullCalendarMiddle
      @set-timetable-id="setTimetable"
      :timetable-id="timetableId"
      @group-selected="handleGroupSelected" 
      :selectedAcademyYear="selectedAcademyYear" 
      :selectedDepartment="selectedDepartment" 
      :selectedDegree="selectedDegree"
      :selectedDegreeText="selectedDegreeText"
      :selectedDepOption="selectedDepOption" 
      :selectedDepartmentText="selectedDepartmentText" 
      :selectedGrade="selectedGrade" 
      :selectedSemester="selectedSemester"
      :selectedGroup="selectedGroup"
      :selectedWeek="selectedWeek"
      :first-initialize="firstInitialize"
      :Room="Room"
      :Lecturer="Lecturer"
      @week-selected="handleWeekSelected"
      @refreshCalendar="refreshCalendar"
      :refresh="refresh"
      
      >
    </FullCalendarMiddle>
    <RightSideBar
      :selectedAcademyYear="selectedAcademyYear" 
      :selectedDepartment="selectedDepartment" 
      :selectedDegree="selectedDegree"
      :selectedDepOption="selectedDepOption" 
      :selectedGrade="selectedGrade" 
      :selectedSemester="selectedSemester"
      :first-initialize="firstInitialize"
      @roomChoosed="roomChoosed"
      @lecturerChoosed="lecturerChoosed"
     />
    <!-- <FullCalendar :refresh="refresh" @setRefresh="setRefresh"/> -->
  </div>
</template>
  
<script>
import LeftSideBar from './components/LeftSideBar.vue';
import FullCalendarMiddle from './components/FullCalendarMiddle.vue'
import RightSideBar from './components/RightSideBar.vue';
import axios from 'axios';
// import timeGridPlugin from '@fullcalendar/timegrid'
// TODO: get the id of the timetable -> option( has->option/not->no_option)
export default {
  components: {
    LeftSideBar,
    FullCalendarMiddle,
    RightSideBar
  },
  data() {
    return {
      /**@type {boolean} */
      firstInitialize:true,
      selectedAcademyYear: "",    // Selected academy year
      selectedDepartment: "",     // Selected department
      selectedDepartmentText: "",     // Selected department
      selectedDegree: "",         // Selected degree
      selectedDegreeText: "",         // Selected degree
      selectedDepOption: "",      // Selected department option
      selectedGrade: "",          // Selected grade
      selectedSemester: "",       // Selected semester
     
      //Fullcalendar//
      selectedGroup: "",          // Selected group
      selectedWeek:"",
      timetableId:"",
      events:[],
      tmpEvent:{},
      Lecturer:null, //Selected
      Room:null // Selected
      // refresh: false,
    };
  },
  methods: {
    setFirstInitialize(status){
      this.firstInitialize=status;
    },
    roomChoosed(data){
      this.Room=data
    },
    lecturerChoosed(data){
      this.Lecturer=data
    },
    setTimetable(id){
      this.timetableId=id;
    },
    refreshCalendar(data){
      this.refresh=data;
    },
    handleAcademicYearSelected(selectedValue) {
      this.selectedAcademyYear=selectedValue;
    },
    handleDepartmentSelected(selectedValue,textSelectedValue) {
      this.selectedDepartment = selectedValue;
      this.selectedDepartmentText=textSelectedValue

    },
    handleDegreeSelected(selectedValue,TextselectedValue) {
      this.selectedDegree = selectedValue;
      this.selectedDegreeText=TextselectedValue;
    },
    handleDepOptionSelected(selectedValue) {
      this.selectedDepOption = selectedValue;
    },
    handleGradeSelected(selectedValue) {
      this.selectedGrade = selectedValue;
      console.log(selectedValue);
    },
    handleSemesterSelected(selectedValue) {
      this.selectedSemester = selectedValue;
    },
    handleGroupSelected(selectedValue) {
      this.selectedGroup = selectedValue;
    },
    handleWeekSelected(selectedValue){
      this.selectedWeek = selectedValue;
    },
    sendDataToAPI() {
    // Check if any required fields are null before making the API request
      if (
          this.selectedAcademyYear === null ||
          this.selectedDepartment === null ||
          this.selectedDegree === null ||
          this.selectedDepOption === null ||
          this.selectedGrade === null ||
          this.selectedSemester === null ||
          this.selectedGroup === null || 
          this.selectedWeek === null
        ) {
          console.error('One or more required fields are null. API request not sent.');
          return; // Don't send the API request if required fields are null
        }
        // Create a data object with the selected values
        // const dataToSend = {
        //   academyYear: this.selectedAcademyYear,
        //   department: this.selectedDepartment,
        //   degree: this.selectedDegree,
        //   depOption: this.selectedDepOption,
        //   grade: this.selectedGrade,
        //   semester: this.selectedSemester,
        //   group: this.selectedGroup,
        //   week: this.selectedWeek,
        //   created_uid: 250,
        //   updated_uid: 250,
        //   // Add any other data you want to send to the API here
        // };

        // Make the API POST request
        // axios
        //   .post('http://127.0.0.1:8000/api/create_timetable', dataToSend)
        //   .then(response => {
        //     // Handle the API response here if needed
        //     console.log('API Response:', response.data);
        //   })
        //   .catch(error => {
        //     // Handle API request error here
        //     console.error('API Request Error:', error);
        //   });
    },
    // setRefresh() {
    //   // Toggle the refresh state when needed
    //   this.refresh = !this.refresh;
    // },

  },
  // computed: {
  //   shouldRefresh() {
  //     // Use a computed property to determine whether to refresh
  //     return this.refresh === true;
  //   },
  // },
  // watch: {
  //   // Watch for changes in the selected data properties
  //   selectedAcademyYear: 'sendDataToAPI',
  //   selectedDepartment: 'sendDataToAPI',
  //   selectedDegree: 'sendDataToAPI',
  //   selectedDepOption: 'sendDataToAPI',
  //   selectedGrade: 'sendDataToAPI',
  //   selectedSemester: 'sendDataToAPI',
  //   selectedGroup: 'sendDataToAPI',
  //   selectedWeek: 'sendDataToAPI',
  // },
};
</script>


<style>
* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box !important;
}

body {
  width: 100%;
  height: 100vh;
  /* background-color: green; */
}

.container {
  width: 100%;
  height: 100%;
  display: flex;
}

/* @media screen and (max-width: 1325) {
  .container {
    width: 99%;
  }
} */
</style>

