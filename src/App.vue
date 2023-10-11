<template>
  <div class="container">
    <LeftSideBar 
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
      @group-selected="handleGroupSelected" 
      :selectedAcademyYear="selectedAcademyYear" 
      :selectedDepartment="selectedDepartment" 
      :selectedDegree="selectedDegree"
      :selectedDepOption="selectedDepOption" 
      :selectedGrade="selectedGrade" 
      :selectedSemester="selectedSemester"
      :selectedGroup="selectedGroup"
      :selectedWeek="selectedWeek"
      @week-selected="handleWeekSelected"
      @refreshCalendar="refreshCalendar"
      :refresh="refresh"
      >
    </FullCalendarMiddle>
    <RightSideBar :selectedAcademyYear="selectedAcademyYear" 
      :selectedDepartment="selectedDepartment" :selectedDegree="selectedDegree"
      :selectedDepOption="selectedDepOption" 
      :selectedGrade="selectedGrade"
       :selectedSemester="selectedSemester"
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
    setTimetable(id){
      this.timetableId=id;
      console.log("timetable_id",id);
    },
    refreshCalendar(data){
<<<<<<< HEAD
      console.log(data,"Hello");
=======
>>>>>>> 2f70afac8866932e6d9cccd4c7a9688d41dd6c31
      this.refresh=data;
    },
    handleAcademicYearSelected(selectedValue) {
      this.selectedAcademyYear=selectedValue;
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

