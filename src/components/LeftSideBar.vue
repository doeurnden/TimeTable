  <template>
    <div class="sidebar">
      <h1>Content</h1>
      <div class="horizon">
        <hr>
      </div>
      <div class="select-option-class">
        <!-- Academy Years -->
        <div class="icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><g fill="currentColor"><path d="M7.75 2.5a.75.75 0 0 0-1.5 0v1.58c-1.44.115-2.384.397-3.078 1.092c-.695.694-.977 1.639-1.093 3.078h19.842c-.116-1.44-.398-2.384-1.093-3.078c-.694-.695-1.639-.977-3.078-1.093V2.5a.75.75 0 0 0-1.5 0v1.513C15.585 4 14.839 4 14 4h-4c-.839 0-1.585 0-2.25.013V2.5Z"/><path fill-rule="evenodd" d="M2 12c0-.839 0-1.585.013-2.25h19.974C22 10.415 22 11.161 22 12v2c0 3.771 0 5.657-1.172 6.828C19.657 22 17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172C2 19.657 2 17.771 2 14v-2Zm15 2a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm0 4a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm-4-5a1 1 0 1 1-2 0a1 1 0 0 1 2 0Zm0 4a1 1 0 1 1-2 0a1 1 0 0 1 2 0Zm-6-3a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm0 4a1 1 0 1 0 0-2a1 1 0 0 0 0 2Z" clip-rule="evenodd"/></g></svg>
        </div>
        <select v-model="selectedAcademyYear" class="form-select" @change="emitAcademyYearSelected">
          <option v-for="year in fetchedAcademyYears" :key="year.id" :value="year.id">{{ year.name_latin }}</option>
        </select>

        <!-- Departments -->
        <div class="icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32"><g fill="currentColor"><path d="M28.99 30V16.98c0-.54-.44-.99-.99-.99h-8V12h2v1.19c0 .45.36.81.8.81h3.39c.45 0 .81-.36.81-.8V4.81c0-.45-.36-.81-.8-.81h-3.39c-.45 0-.81.36-.81.81V6h-2V2.92c0-.51-.41-.92-.92-.92H3.92c-.51 0-.92.41-.92.92v27.06h1.98v-4.95c0-.57.46-1.03 1.03-1.03h10.96c.57 0 1.03.46 1.03 1.03V30h-.99v-4.65c0-.19-.15-.35-.35-.35h-2.28c-.19 0-.35.15-.35.35V30H11h17.99ZM20 27.01V24h1.5c.28 0 .5.23.5.5v2c0 .28-.22.5-.5.51H20Zm0-5V19h1.5c.28 0 .5.23.5.5v2c0 .28-.22.5-.5.51H20ZM22 11h-2V7h2v4Zm5 8.5v2c0 .28-.22.5-.5.51h-2.02c-.28 0-.5-.23-.5-.5V19.5c0-.28.23-.5.5-.5h2.02c.28 0 .5.23.5.5Zm0 5v2c0 .28-.22.5-.5.51h-2.02c-.28 0-.5-.23-.5-.5V24.5c0-.28.23-.5.5-.5h2.02c.28 0 .5.23.5.5Zm-13.99-20v2c0 .28-.22.5-.5.5h-2.02c-.28 0-.5-.23-.5-.5v-2c0-.28.23-.5.5-.5h2.02c.28 0 .5.23.5.5Zm0 7c0 .28-.22.5-.5.5h-2.02c-.28 0-.5-.23-.5-.5v-2c0-.28.23-.5.5-.5h2.02c.28 0 .5.23.5.5v2Zm0 3v2c0 .28-.22.5-.5.51h-2.02c-.28 0-.5-.23-.5-.5V14.5c0-.28.23-.5.5-.5h2.02c.28 0 .5.23.5.5Zm0 5v2c0 .28-.22.5-.5.51h-2.02c-.28 0-.5-.23-.5-.5V19.5c0-.28.23-.5.5-.5h2.02c.28 0 .5.23.5.5Zm5.01 2c0 .28-.23.5-.5.51H15.5c-.28 0-.5-.23-.5-.5V19.5c0-.28.23-.5.5-.5h2.02c.28 0 .5.23.5.5v2Zm0-7v2c0 .28-.23.5-.5.51H15.5c-.28 0-.5-.23-.5-.5V14.5c0-.28.23-.5.5-.5h2.02c.28 0 .5.23.5.5Zm0-3c0 .28-.23.5-.5.5H15.5c-.28 0-.5-.23-.5-.5v-2c0-.28.22-.5.5-.5h2.02c.28 0 .5.23.5.5v2Zm0-7v2c0 .28-.23.5-.5.5H15.5c-.28 0-.5-.22-.5-.5v-2c0-.28.22-.5.5-.5h2.02c.28 0 .5.23.5.5Zm-10.01 17c0 .28-.22.5-.5.51H5.49c-.28 0-.5-.23-.5-.5V19.5c0-.28.23-.5.5-.5h2.02c.28 0 .5.23.5.5v2Zm0-7v2c0 .28-.22.5-.5.51H5.49c-.28 0-.5-.23-.5-.5V14.5c0-.28.23-.5.5-.5h2.02c.28 0 .5.23.5.5Zm0-3c0 .28-.22.5-.5.5H5.49c-.28 0-.5-.23-.5-.5v-2c0-.28.23-.5.5-.5h2.02c.28 0 .5.23.5.5v2Zm0-7v2c0 .28-.22.5-.5.5H5.49c-.28 0-.5-.23-.5-.5v-2c0-.28.23-.5.5-.5h2.02c.28 0 .5.23.5.5Z"/><path d="M13 30h-2.98v-4.65c0-.2.16-.35.35-.35h2.28c.19 0 .35.15.35.35V30Zm-4.02-4.65V30H6v-4.65c0-.2.15-.35.35-.35h2.28c.2 0 .35.16.35.35Z"/></g></svg>
        </div>
        <select v-model="selectedDepartment" class="form-select" @change="emitDepartmentSelected">
          <option v-for="dept in fetchedDepartments" :key="dept.id" :value="dept.id">{{ dept.code }}</option>
        </select>

        <!-- Degrees -->
        <div class="icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 48 48"><mask id="ipSDegreeHat0"><g fill="none" stroke="#fff" stroke-linejoin="round" stroke-width="4"><path fill="#fff" d="M2 17.4L23.022 9l21.022 8.4l-21.022 8.4L2 17.4Z"/><path stroke-linecap="round" d="M44.044 17.51v9.223m-32.488-4.908v12.442S16.366 39 23.022 39c6.657 0 11.467-4.733 11.467-4.733V21.825"/></g></mask><path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSDegreeHat0)"/></svg>
        </div>
        <select v-model="selectedDegree" class="form-select" @change="emitDegreeSelected">
          <option v-for="degree in fetchedDegrees" :key="degree.id" :value="degree.id">{{ degree.name_en }}</option>
        </select>

        <!-- Department Options -->
        <div class="icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4 8h9m4 0h3m-9 8h9M4 16h3"/><circle cx="9" cy="16" r="2"/><circle cx="15" cy="8" r="2"/></g></svg>
        </div>
        <select v-model="selectedDepOption" class="form-select" @change="emitDepOptionSelected">
          <option value="" >Options</option>
          <option v-for="option in filteredDepartmentOptions" :key="option.id" :value="option.id">{{ option.code }}</option>
        </select>

        <!-- Grades -->
        <div class="icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32"><path fill="currentColor" d="M30 30h-8V4h8zm-6-2h4V6h-4zm-4 2h-8V12h8zm-6-2h4V14h-4zm-4 2H2V18h8zm-6-2h4v-8H4z"/></svg>
        </div>
        <select v-model="selectedGrade" class="form-select" @change="emitGradeSelected">
          <option v-for="grade in fetchedGrades" :key="grade.id" :value="grade.id">{{ grade.name_en }}</option>
        </select>

        <!-- Semesters -->
        <div class="icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M5 22h14c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2h-2V2h-2v2H9V2H7v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2zm4.799-2.013H8v-1.799l4.977-4.97l1.799 1.799l-4.977 4.97zm5.824-5.817l-1.799-1.799L15.196 11l1.799 1.799l-1.372 1.371zM5 7h14v2H5V7z"/></svg>
        </div>
        <select v-model="selectedSemester" class="form-select" @change="emitSemesterSelected">
          <option v-for="semester in fetchedSemesters" :key="semester.id" :value="semester.id">{{ semester.name_en }}</option>
        </select>
      </div>

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
   
    computed: {
      filteredDepartmentOptions() {
        if (!this.selectedDepartment||this.selectedDepartment=="") {
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
        if(this.selectedSemester){
          filteredYears = filteredYears.filter(year => year.semester_id === this.selectedSemester);
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
        const apiUrl = 'http://127.0.0.1:8000/api/get_all_academicYears';
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
        const apiUrl = 'http://127.0.0.1:8000/api/get_all_departments';

        axios.get(apiUrl)
          .then(response => {
            this.fetchedDepartments = response.data;
            this.selectedDepartment = this.fetchedDepartments[0].id; // Set default selected value
          })
          .catch(error => {
            console.error('Error fetching departments:', error);
          });
      },
      fetchDegrees() {
        const apiUrl = 'http://127.0.0.1:8000/api/get_all_degrees';

        axios.get(apiUrl)
          .then(response => {
            this.fetchedDegrees = response.data;
            this.selectedDegree = this.fetchedDegrees[0].id; // Set default selected value
          })
          .catch(error => {
            console.error('Error fetching degrees:', error);
          });
      },
      fetchDepOptions() {
        const apiUrl = 'http://127.0.0.1:8000/api/get_all_depOptions';

        axios.get(apiUrl)
          .then(response => {
            this.fetchedDepOptions = response.data;
            console.log(this.fetchedDepOptions)
            // this.tmpDeptOption=response.data;
            // this.selectedDepOption = this.fetchedDepOptions[0].id; // Set default selected value
          })
          .catch(error => {
            console.error('Error fetching department options:', error);
          });
      },
      fetchGrades() {
        const apiUrl = 'http://127.0.0.1:8000/api/get_all_grades';

        axios.get(apiUrl)
          .then(response => {
            this.fetchedGrades = response.data;
            this.selectedGrade = this.fetchedGrades[0].id; // Set default selected value
          })
          .catch(error => {
            console.error('Error fetching grades:', error);
          });
      },
      fetchSemesters() {
        const apiUrl = 'http://127.0.0.1:8000/api/get_all_semesters';

        axios.get(apiUrl)
          .then(response => {
            this.fetchedSemesters = response.data;
            this.selectedSemester = this.fetchedSemesters[0].id; // Set default selected value
          })
          .catch(error => {
            console.error('Error fetching semesters:', error);
          });
      },

      // Other fetch methods...
      async fetchData() {
        // await Promise.allSettled([
        //   this.fetchAcademyYears,
        // this.fetchDepartments,
        // this.fetchDegrees,
        // this.fetchDepOptions,
        // this.fetchGrades,
        // fetchSemesters])
        this.fetchAcademyYears();
        this.fetchDepartments();
        this.fetchDegrees();
        this.fetchDepOptions();
        this.fetchGrades();
        this.fetchSemesters();
        // Call other fetch methods here...
      },

      //Function send signal from child to parent
      emitAcademyYearSelected() {
        this.$emit("refreshCalendar",true)
        this.$emit('academy-year-selected', this.selectedAcademyYear);
      },
      emitDepartmentSelected() {
        this.$emit("refreshCalendar",true)
        this.$emit('department-selected', this.selectedDepartment);
      },
      emitDegreeSelected() {
        this.$emit("refreshCalendar",true)
        this.$emit('degree-selected', this.selectedDegree);
      },
      emitDepOptionSelected() {
        this.$emit("refreshCalendar",true)
        this.$emit('depOption-selected', this.selectedDepOption);
      },
      emitGradeSelected() {
        this.$emit("refreshCalendar",true)
        this.$emit('grade-selected', this.selectedGrade);
      },
      emitSemesterSelected() {
        this.$emit("refreshCalendar",true)
        this.$emit('semester-selected', this.selectedSemester);
      },
    },
    watch: {
      selectedDepartment:()=>{
      }
     
    },

    async created() {
      await this.fetchData();
    },
  };
  </script>

  <style scoped>

  body{
    width: 100%;
    height: 100vh;
  }
  .sidebar {
    background-color: #3AA6B9;
    border-right: 1px solid black;
    width: 15%;
    height: 100vh;
    padding-left: 10px;
    position: relative;
  }
  .sidebar h1{
    color: white;
    margin-top: 20px;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 27px;
    text-align: center;
  }
  .sidebar .horizon{
    width: 95%;
    height: 5px;
    background-color: white;
    margin: 7px auto;
    position: absolute;
    animation: slideFromLeft 7s linear forwards;
    top: 50px;
    box-sizing: border-box;
  }
  .horizon hr{
    border: none;
  }
  .sidebar select {
    width: 87.5%;
    height: 60px;
    margin: 0px 24.5px;
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
  .select-option-class{
    margin-top: 10px;
  }
  .icon{
    position: relative;
    margin-right: 4px;
  }
  svg{
    position: absolute;
    top: 29px;
    left: 5px;
    /* font-size: 11px; */
    color: white;
  }
  </style>
