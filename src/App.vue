<template>
  <div class="container">
    <LeftSideBar 
      @academy-year-selected="handleAcademicYearSelected" 
      @department-selected="handleDepartmentSelected"
      @degree-selected="handleDegreeSelected" 
      @depOption-selected="handleDepOptionSelected"
      @grade-selected="handleGradeSelected" 
      @semester-selected="handleSemesterSelected"
      @group-selected="handleGroupSelected"></LeftSideBar>
    <FullCalendarMiddle 
      @group-selected="handleGroupSelected" 
      :selectedAcademyYear="selectedAcademyYear" 
      :selectedDepartment="selectedDepartment" 
      :selectedDegree="selectedDegree"
      :selectedDepOption="selectedDepOption" 
      :selectedGrade="selectedGrade" 
      :selectedSemester="selectedSemester"
      :selectedGroup="selectedGroup"
      :selectedWeek="selectedWeek"
      @week-selected="handleWeekSelected">
    </FullCalendarMiddle>
    <RightSideBar />
    <!-- <FullCalendar :refresh="refresh" @setRefresh="setRefresh"/> -->
  </div>
</template>
  
<script>

import LeftSideBar from './components/LeftSideBar.vue';
import FullCalendarMiddle from './components/FullCalendarMiddle.vue'
import RightSideBar from './components/RightSideBar.vue';
import axios from 'axios';
// import timeGridPlugin from '@fullcalendar/timegrid'

export default {
  components: {
    LeftSideBar,
    FullCalendarMiddle,
    RightSideBar
  },
  data() {
    return {
      selectedAcademyYear: "",    // Selected academy year
      selectedDepartment: "",     // Selected department
      selectedDegree: "",         // Selected degree
      selectedDepOption: "",      // Selected department option
      selectedGrade: "",          // Selected grade
      selectedSemester: "",       // Selected semester
      //Fullcalendar//
      selectedGroup: "",          // Selected group
      selectedWeek:"",
      events:[],
      tmpEvent:{},
      // refresh: false,
    };
  },
  methods: {
    handleAcademicYearSelected(selectedValue) {
      this.selectedAcademyYear=selectedValue;
      console.log('Academy Year Selected:', selectedValue);
    },
    handleDepartmentSelected(selectedValue) {
      this.selectedDepartment = selectedValue;
      console.log('Department Selected:', selectedValue);
    },
    handleDegreeSelected(selectedValue) {
      this.selectedDegree = selectedValue;
      console.log('Degree Selected::', selectedValue);
    },
    handleDepOptionSelected(selectedValue) {
      this.selectedDepOption = selectedValue;
      console.log('Department Option Selected:', selectedValue);
    },
    handleGradeSelected(selectedValue) {
      this.selectedGrade = selectedValue;
      console.log('Grade Selected:', selectedValue);
    },
    handleSemesterSelected(selectedValue) {
      this.selectedSemester = selectedValue;
      console.log('Semester Selected:', selectedValue);
    },
    handleGroupSelected(selectedValue) {
      this.selectedGroup = selectedValue;
      console.log('Group selected:', selectedValue);
    },
    handleWeekSelected(selectedValue){
      this.selectedWeek = selectedValue;
      console.log('Week selected:', selectedValue);
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

