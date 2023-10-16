import { defineStore } from "pinia";

export const useField =defineStore("field",{
    state:()=>{
        return {
            selectedAcademyYear: "",    // Selected academy year
            selectedDepartment: "",     // Selected department
            selectedDegree: "",         // Selected degree
            selectedDepOption: "",      // Selected department option
            selectedGrade: "",          // Selected grade
            selectedSemester: "",       
        }
    },
    actions:{
        setDepartment(dept){
            this.selectedDepartment=dept;
        },
        setDegree(degre){
            this.selectedDegree=degre;
        }
    },
    getters:{
        jsonField:(state)=>{
            return {
                academic_year_id: state.selectedAcademyYear,
                department_id: state.selectedDepartment,
                degree_id: state.selectedDegree,
                department_option_id: state.selectedDepOption,
                grade_id: state.selectedGrade,
                semester_id: state.selectedSemester,
            };
        },
    }
}) 