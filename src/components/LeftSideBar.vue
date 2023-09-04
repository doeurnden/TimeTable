<template>
  <div class="sidebar">
    <h1><center>Content</center></h1>
    <hr>
    <!-- Academy Years -->
    <select v-model="selectedAcademyYear" class="form-select">
      <option v-for="year in fetchedAcademyYears" :key="year.id">{{ year.name_latin }}</option>
    </select>

    <!-- Departments -->
    <select v-model="selectedDepartment" class="form-select">
      <option v-for="dept in fetchedDepartments" :key="dept.id" :value="dept.id">{{ dept.code }}</option>
    </select>

    <!-- Degrees -->
    <select v-model="selectedDegree" class="form-select">
      <option v-for="degree in fetchedDegrees" :key="degree.id" :value="degree.id">{{ degree.name_en }}</option>
    </select>

    <!-- Department Options -->
    <select v-model="selectedDepOption" class="form-select">
      <option value="" disabled>Options</option>
      <option v-for="option in filteredDepartmentOptions" :key="option.id">{{ option.code }}</option>
    </select>

    <!-- Grades -->
    <select v-model="selectedGrade" class="form-select">
      <option v-for="grade in fetchedGrades" :key="grade.id">{{ grade.name_en }}</option>
    </select>

    <!-- Semesters -->
    <select v-model="selectedSemester" class="form-select">
      <option v-for="semester in fetchedSemesters" :key="semester.id">{{ semester.name_en }}</option>
    </select>

    <!-- Groups -->
    <!-- <select v-model="selectedGroup" class="form-select">
      <option v-for="group in fetchedGroups" :key="group.id">{{ group.code }}</option>
    </select> -->


    <!-- Other select options... -->

  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      fetchedAcademyYears: [],    // Array to hold fetched academy years
      fetchedDepartments: [],     // Array to hold fetched departments
      fetchedDegrees: [],         // Array to hold fetched degrees
      fetchedDepOptions: [],      // Array to hold fetched department options
      fetchedGrades: [],          // Array to hold fetched grades
      fetchedSemesters: [],       // Array to hold fetched semesters
      // fetchedGroups: [],          // Array to hold fetched groups
      selectedAcademyYear: "",    // Selected academy year
      selectedDepartment: "",     // Selected department
      selectedDegree: "",         // Selected degree
      selectedDepOption: "",      // Selected department option
      selectedGrade: "",          // Selected grade
      selectedSemester: "",       // Selected semester
      // selectedGroup: "",          // Selected group
    };
  },
  mounted:()=>{
    this.fetchAcademyYears()
    this.selectedAcademyYear = this.selectedAcademyYear ?? this.fetchedAcademyYears[0]
  },
  computed: {
    filteredDepartmentOptions() {
      if (!this.selectedDepartment) {
        return this.fetchedDepOptions;
      }
      return this.fetchedDepOptions.filter(option => option.department_id === this.selectedDepartment);
    },
    
    filteredAcademyYears() {
      let filteredYears = this.fetchedAcademyYears;

      if (this.selectedDepartment) {
        filteredYears = filteredYears.filter(year => year.department_id === this.selectedDepartment);
      }

      if (this.selectedDegree) {
        filteredYears = filteredYears.filter(year => year.degree_id === this.selectedDegree);
      }
      if(this.selectedDepOption){
        filteredYears = filteredYears.filter(year => year.option.id === this.selectedDepOption);
      }
      if (this.selectedGrade) {
        filteredYears = filteredYears.filter(year => year.grade_id === this.selectedGrade);
      }

      // if (this.selectedGroup) {
      //   filteredYears = filteredYears.filter(year => year.group_id === this.selectedGroup);
      // }

      // You can continue filtering based on other selections

      return filteredYears;
    },
  },

  methods: {
    fetchAcademyYears() {
      const apiUrl = 'http://127.0.0.1:8000/api/get-all-AcademicYears';

      axios.get(apiUrl)
        .then(response => {
          this.fetchedAcademyYears = response.data;
          this.selectedAcademyYear = this.fetchedAcademyYears[0].id; // Set default selected value
        })
        .catch(error => {
          console.error('Error fetching academy years:', error);
        });
    },
    fetchDepartments() {
      const apiUrl = 'http://127.0.0.1:8000/api/get-all-Departments';

      axios.get(apiUrl)
        .then(response => {
          this.fetchedDepartments = response.data;
          this.selectedDepartment = this.fetchedDepartments[0]; // Set default selected value
        })
        .catch(error => {
          console.error('Error fetching departments:', error);
        });
    },
    fetchDegrees() {
      const apiUrl = 'http://127.0.0.1:8000/api/get-all-Degrees';

      axios.get(apiUrl)
        .then(response => {
          this.fetchedDegrees = response.data;
          this.selectedDegree = this.fetchedDegrees[0]; // Set default selected value
        })
        .catch(error => {
          console.error('Error fetching degrees:', error);
        });
    },
 
    fetchDepOptions() {
      const apiUrl = 'http://127.0.0.1:8000/api/get-all-DepOptions';

      axios.get(apiUrl)
        .then(response => {
          this.fetchedDepOptions = response.data;
          // this.tmpDeptOption=response.data;
          this.selectedDepOption = this.fetchedDepOptions[0]; // Set default selected value
        })
        .catch(error => {
          console.error('Error fetching department options:', error);
        });
    },
    fetchGrades() {
      const apiUrl = 'http://127.0.0.1:8000/api/get-all-Grades';

      axios.get(apiUrl)
        .then(response => {
          this.fetchedGrades = response.data;
          this.selectedGrade = this.fetchedGrades[0]; // Set default selected value
        })
        .catch(error => {
          console.error('Error fetching grades:', error);
        });
    },
    fetchSemesters() {
      const apiUrl = 'http://127.0.0.1:8000/api/get-all-Semesters';

      axios.get(apiUrl)
        .then(response => {
          this.fetchedSemesters = response.data;
          this.selectedSemester = this.fetchedSemesters[0]; // Set default selected value
        })
        .catch(error => {
          console.error('Error fetching semesters:', error);
        });
    },
    // fetchGroups() {
    //   const apiUrl = 'http://127.0.0.1:8000/api/get-all-Groups';

    //   axios.get(apiUrl)
    //     .then(response => {
    //       this.fetchedGroups = response.data;
    //       this.selectedGroup = this.fetchedGroups[0]; // Set default selected value
    //     })
    //     .catch(error => {
    //       console.error('Error fetching groups:', error);
    //     });
    // },

    // Other fetch methods...
    fetchData() {
      this.fetchAcademyYears();
      this.fetchDepartments();
      this.fetchDegrees();
      this.fetchDepOptions();
      this.fetchGrades();
      this.fetchSemesters();
      // this.fetchGroups();
      // Call other fetch methods here...
    },
  },
  watch: {
    selectedDepartment() {
      this.selectedAcademyYear = "";
      this.selectedDegree = "";
      this.selectedDepOption = "";
      this.selectedGrade = "";
      this.selectedSemester = "";
      // this.selectedGroup = "";
    },
    selectedDegree() {
      this.selectedAcademyYear = "";
      this.selectedDepOption = "";
      this.selectedGrade = "";
      this.selectedSemester = "";
      // this.selectedGroup = "";
    },
    selectedDepOption() {
      this.selectedGrade = "";
      this.selectedSemester = "";
      // this.selectedGroup = "";
    },
    selectedGrade() {
      this.selectedSemester = "";
      // this.selectedGroup = "";
    },
    selectedSemester() {
      this.selectedGroup = "";
    },
    selectedGroup() {
      // Any logic needed when selectedGroup changes...
    },
    // Add watch handlers for other selections...
  },
  created() {
    this.fetchData();
  },
};
</script>

<style scoped>
.sidebar {
  background-color: #3AA6B9;
  border-right: 1px solid black;
  width: 15%;
  height: 100vh;
}
.sidebar h1{
  margin-top: 20px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 27px;
}
.sidebar hr{
  width: 95%;
  height: 5px;
  background-color: white;
  margin: 7px auto;
  border: none;
  position: absolute;
  /* left: 30px; */
  animation: slideFromLeft 7s linear forwards;
  
}
body{
  width: 100%;
  height: 100vh;
}
.sidebar select {
  width: 90%;
  height: 60px;
  margin: 0px 16px;
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
