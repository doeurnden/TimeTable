<template>
    <div class="sidebar">
      <h2><center>CONTENT</center></h2>
      <hr><br>
  
      <!-- Academy Years -->
      <select v-model="selectedAcademyYear">
        <option v-for="year in academyYears" :key="year">{{ year }}</option>
      </select>

      <select v-model="selectedOption">
        <option value="option1">2023 - 2024</option>
        <option value="option2">2022 - 2023</option>
        <option value="option3">2021 - 2022</option>
      </select>
      
      <!-- Departments -->
      <select v-model="selectedDepartment">
        <option v-for="dept in departments" :key="dept">{{ dept }}</option>
      </select>
  
      <!-- Degrees -->
      <select v-model="selectedDegree">
        <option v-for="degree in degrees" :key="degree">{{ degree }}</option>
      </select>
  
      <!-- Options -->
      <select v-model="selectedOption">
        <option v-for="option in options" :key="option">{{ option }}</option>
      </select>
  
      <!-- Years -->
      <select v-model="selectedYear">
        <option v-for="year in years" :key="year">{{ year }}</option>
      </select>
  
      <!-- Semesters -->
      <select v-model="selectedSemester">
        <option v-for="semester in semesters" :key="semester">{{ semester }}</option>
      </select>
  
      <!-- Groups -->
      <select v-model="selectedGroup">
        <option v-for="group in groups" :key="group">{{ group }}</option>
      </select>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        selectedOption: 'Academy Years',
        academyYears: ['2023-2024', '2022-2023', '2021-2022'],
        newDefault:['Department'],
        departments: ['GIC', 'GCA', 'OAC'],
        degrees: ['Master', 'Engineer', 'PhD'],
        options: ['Full Time', 'Part Time'],
        years: ['First Year', 'Second Year', 'Third Year', 'Fourth Year', 'Fifth Year'],
        semesters: ['Semester 1', 'Semester 2'],
        groups: ['A', 'B', 'C'],
        selectedAcademyYear: "2023-2024", // Set default value here
        selectedDepartment: "GIC",         // Set default value here
        selectedDegree: "Master",          // Set default value here
        selectedOption: "Full Time",       // Set default value here
        selectedYear: "First Year",        // Set default value here
        selectedSemester: "Semester 1",    // Set default value here
        selectedGroup: "A",                // Set default value here
        new:"Department"
      };
    },
    created() {
      // Set default values based on some logic
      this.new = this.newDefault[0];
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
  .sidebar {
    background-color: #3AA6B9;
    padding: 20px;
    border-right: 1px solid #ccc;
    width: 20%;
    height: 100%;
  }
  select {
    width: 100%;
    height: 60px;
    margin: 0px 0;
    padding: 5px;
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
  }
  select:hover{
    background-color: #d3e2e8;
  }
  option{
    color: white;
    background-color: black;
    width: 80%;
    height: 50px;
    margin-left: 30px;
    font-size: 15px;
  }
  /* select:hover{
    color: white;
  } */
  </style>
  