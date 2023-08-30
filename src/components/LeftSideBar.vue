<template>
  <div class="sidebar">
    <div class="sidebar-title">
      <h1><center>Content</center></h1>
    </div>
    <div class="horizon">
      <hr>
    </div>
    <!-- Academy Years -->
    <select v-model="selectedAcademyYear" class="form-select">
      <option v-for="year in academyYears" :key="year">{{ year }}</option>
    </select>

    <!-- Departments -->
    <select v-model="selectedDepartment" class="form-select">
      <option v-for="dept in departments" :key="dept">{{ dept }}</option>
    </select>

    <!-- Degrees -->
    <select v-model="selectedDegree" class="form-select">
      <option v-for="degree in degrees" :key="degree">{{ degree }}</option>
    </select>

    <!-- Options -->
    <select v-model="selectedOption" class="form-select">
      <option v-for="option in options" :key="option">{{ option }}</option>
    </select>

    <!-- Years -->
    <select v-model="selectedYear" class="form-select">
      <option v-for="year in years" :key="year">{{ year }}</option>
    </select>

    <!-- Semesters -->
    <select v-model="selectedSemester" class="form-select">
      <option v-for="semester in semesters" :key="semester">{{ semester }}</option>
    </select>

    <!-- Groups -->
    <!-- <select v-model="selectedGroup" class="form-select">
      <option v-for="group in groups" :key="group">{{ group }}</option>
    </select> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      academyYears: ['Academy Years','2023-2024', '2022-2023', '2021-2022'],
      departments: ['Departments','GIC', 'GCA', 'OAC'],
      degrees: ['Engineer', 'Master', 'PhD'],
      options: ['Options','Full Time', 'Part Time'],
      years: ['First Year', 'Second Year', 'Third Year', 'Fourth Year', 'Fifth Year'],
      semesters: ['Semesters','Semester 1', 'Semester 2'],
      groups: ['Groups','A', 'B', 'C'],
      selectedAcademyYear: "2023-2024", // Set default value here
      selectedDepartment: "GIC",         // Set default value here
      selectedDegree: "Master",          // Set default value here
      selectedOption: "Full Time",       // Set default value here
      selectedYear: "First Year",        // Set default value here
      selectedSemester: "Semester 1",    // Set default value here
      selectedGroup: "A",                // Set default value here
      isActive: true, // Whether the "active" class should be added
      isError: false, // Whether the "text-red" class should be added
    };
  },
  created() {
    // Set default values based on some logic
    this.selectedAcademyYear = this.academyYears[0];
    this.selectedDepartment = this.departments[0];
    this.selectedDegree = this.degrees[0];
    this.selectedOption = this.options[0];
    this.selectedYear = this.years[0];
    this.selectedSemester = this.semesters[0];
    this.selectedGroup = this.groups[0];
  },
  
};
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body{
  width: 100%;
  height: 100vh;
}
.sidebar {
  background-color: #3AA6B9;
  border-right: 1px solid black;
  width: 15%;
  height: 100vh;
}
.sidebar h1{
  margin-top: 22px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 27px;
}
.horizon{
  position: relative;
  width: 95%;
  height: 5px;
  /* overflow: hidden; */
  margin-bottom: 10px;
}
.horizon hr{
  width: 100%;
  height: 5px;
  background-color: white;
  margin: 7px auto;
  border: none;
  position: absolute;
  /* left: 30px; */
  animation: slideFromLeft 7s linear forwards;
  
}
@keyframes slideFromLeft {
    0% {
        left: -100%;
    }
    100% {
        left: 0;
    }
}
.sidebar select {
  width: 90%;
  height: 60px;
  margin: 0px 10px;
  margin-top: 10px;
  padding-left: 15px;
  border-radius: 8px;
  border: #3AA6B9 solid #3AA6B9;
  /* border: solid #3AA6B9; */
  /* background-color:#3AA6B9; */
  background-color:#3AA6B9;
  cursor: pointer;
  appearance: none;
  color: white;
  border:0px;
  outline:0px;
  transition: all 0.7s;
  font-size: 17px;
  font-family: Arial, Helvetica, sans-serif;
}
select:hover{
  background-color: #d3e2e8;
  color: black;
  transition: all 0.8s;
}
.form-select option{
  color: white;
  background-color: #3AA6B9;
  font-size: 15px;
}
</style>
