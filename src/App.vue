<template>
    <div>
      <button @click="toggleElement">Toggle Element</button>
  
      <div>
        <component :is="currentComponent" />
      </div>
    </div>
  </template>
  
  <script>
  import ConflictLecturer from "./components/ConflictLecturer.vue";
  import ConflictRoom from "./components/ConflictRoom.vue";
  import ConflictLecturerRoom from "./components/ConflictLecturerRoom.vue";
  
  export default {
    data() {
      return {
        currentComponentIndex: 0,
        componentsList: [
          ConflictLecturer,
          ConflictRoom,
          ConflictLecturerRoom
        ]
      };
    },
    computed: {
      currentComponent() {
        return this.componentsList[this.currentComponentIndex];
      }
    },
    methods: {
      toggleElement() {
        this.currentComponentIndex = (this.currentComponentIndex + 1) % this.componentsList.length;
      }
    }
  };
  </script>
  