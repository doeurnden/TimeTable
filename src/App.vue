<template>
  <div class="container">
    
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
      :selectedDepOption="selectedDepOption" 
      :selectedGrade="selectedGrade" 
      :selectedSemester="selectedSemester"
      :selectedGroup="selectedGroup"
      :selectedWeek="selectedWeek"
      :first-initialize="firstInitialize"
      @week-selected="handleWeekSelected"
      @refreshCalendar="refreshCalendar"
      :refresh="refresh"
      
      >
    </FullCalendarMiddle>
    <RightSideBar :selectedAcademyYear="selectedAcademyYear" 
      :selectedDepartment="selectedDepartment" 
      :selectedDegree="selectedDegree"
      :selectedDepOption="selectedDepOption" 
      :selectedGrade="selectedGrade"
       :selectedSemester="selectedSemester"
       :first-initialize="firstInitialize"
      @refreshCalendar="refreshCalendar"
    />
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
      selectedDegree: "",         // Selected degree
      selectedDepOption: "",      // Selected department option
      selectedGrade: "",          // Selected grade
      selectedSemester: "",       // Selected semester
     
      //Fullcalendar//
      selectedGroup: "",          // Selected group
      selectedWeek:"",
      timetableId:"",
      events:[],
      refresh:false,
      tmpEvent:{}
    };
  },
  methods: {
    setFirstInitialize(status){
      this.firstInitialize=status;
    },
    setTimetable(id){
      this.timetableId=id;
      console.log("timetable_id",id);
    },
    refreshCalendar(data){
      this.refresh=data;
    },
    handleAcademicYearSelected(selectedValue) {
      this.selectedAcademyYear=selectedValue;
    },
    handleDepartmentSelected(selectedValue) {
      this.selectedDepartment = selectedValue;

    },
    handleDegreeSelected(selectedValue) {
      this.selectedDegree = selectedValue;
    },
    handleDepOptionSelected(selectedValue) {
      this.selectedDepOption = selectedValue;
    },
    handleGradeSelected(selectedValue) {
      this.selectedGrade = selectedValue;
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

    
  },

  },

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

@media screen and (max-width: 1325) {
  .container {
    widows: 99%;
  }
}
</style>

