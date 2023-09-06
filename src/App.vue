<template>
  <div class="container">
    <LeftSideBar @academic-year-selected="handleAcademicYearSelected" @department-selected="handleDepartmentSelected">
    </LeftSideBar>
    <FullCalendarMiddle />
    <RightSideBar />
  </div>
</template>
  
<script>
import LeftSideBar from './components/LeftSideBar.vue'
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
    };
  },
  methods: {
    handleAcademicYearSelected(selectedValue) {
      // this.selectedAcademyYear = selectedValue;
      console.log('Selected option:', selectedValue);
    },
    handleDepartmentSelected(selectedValue) {
      // this.selectedDepartment = selectedValue;
      console.log('Selected option:', selectedValue);
    },
    handleDegreeSelected(selectedValue) {
      // this.selectedDegree = selectedValue;
      console.log('Selected option:', selectedValue);
    },
    handleDepartmentSelected(selectedValue) {
      // this.selectedDepOption = selectedValue;
    },
    handleGradeSelected(selectedValue) {
      // this.selectedGrade = selectedValue;
    },
    handleSemesterSelected(selectedValue) {
      // this.selectedSemester = selectedValue;
    }
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

