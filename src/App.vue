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
      @group-selected="handleGroupSelected" :selectedAcademyYear="selectedAcademyYear" 
      :selectedDepartment="selectedDepartment" :selectedDegree="selectedDegree"
      :selectedDepOption="selectedDepOption" :selectedGrade="selectedGrade" :selectedSemester="selectedSemester">
    </FullCalendarMiddle>
    <RightSideBar :selectedAcademyYear="selectedAcademyYear" 
      :selectedDepartment="selectedDepartment" :selectedDegree="selectedDegree"
      :selectedDepOption="selectedDepOption" :selectedGrade="selectedGrade" :selectedSemester="selectedSemester">
    </RightSideBar>
  </div>
</template>
  
<script>

import LeftSideBar from './components/LeftSideBar.vue';
import FullCalendarMiddle from './components/FullCalendarMiddle.vue'
import RightSideBar from './components/RightSideBar.vue';
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
      events:[],
      tmpEvent:{}
    };
  },
  methods: {
    handleAcademicYearSelected(selectedValue) {
      // this.selectedAcademyYear = selectedValue;
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
      // this.selectedSemester = selectedValue;
      console.log('Group selected:', selectedValue);
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

