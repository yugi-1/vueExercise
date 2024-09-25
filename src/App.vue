<script>
import Tabs from './components/TabsView.vue';
import ExerciseList from './components/ExerciseList.vue';

export default {
    name: 'app',
   components: {
     Tabs,
     ExerciseList 
    },
     data() {
        return {
            exercises: [
                {
                    id: 1,
                    workout: "Running",
                    date: "2024-02-21",
                    hours: 0,
                    minutes: 45,
                   
                },
                {
                    id: 2,
                    workout: "Bench Press",
                    sets: 3,
                    reps: 5,
                    weight: 25,
                    metric: "lbs",
                    date: "2024-02-21",
                }
                
            ]
        }
    },
     methods: {
       addExercise(exercise) {
            const lastId = 
            this.exercises.length > 0
            ? this.exercises[this.exercises.length - 1].id
            : 0;
            
            const id = lastId + 1;
            const newExercise = {
                id,
                ...exercise
            };

            this.exercises = [...this.exercises, newExercise];
            console.log(this.exercises);
        },
          deleteExercise(id) {
            this.exercises = this.exercises.filter(
                exercise => exercise.id !== id
            )
        },
          editExercise(id, upExercise) {
            this.exercises = this.exercises.map(exercise => {
                return exercise.id === id ? upExercise : exercise
            })
        },
        
     }
}

</script>

<template>
  <div id="app">
    <v-card id="mainLayout">
      <h1 class="title">EXERCISE TRACKER</h1>
      <p class="text">Add by:</p>
      <Tabs @add:exercise="addExercise" />
    </v-card>
     <ExerciseList :exercises="exercises" @edit:exercise="editExercise" @delete:exercise="deleteExercise" />
  </div>
</template>

<style scoped>
#app {
    display: inline-block;
    margin-bottom: 100px;
        margin-top: 100px;
}
.title {
   font-family: "Montserrat", sans-serif;
    font-weight: 300;
  display: flex;
  justify-content: start;
    font-size: 35px;
     padding: 25px;
    color: #ffffff;
}
#mainLayout {
  /* display: flex; */
  width: 1000px;
  height: 407px;
  /* background-color: #00313B; */
  background: rgb(39,151,175);
  background: linear-gradient(141deg, rgba(39,151,175,1) 0%, rgba(90,183,207,1) 49%, rgba(132,215,231,1) 97%);
  border-radius: 20px;
  filter: drop-shadow(0px 0px 4px #0085a0);
}
.text {
      font-size: 20px;
      font-family: "Montserrat", sans-serif;
      font-weight: 400;
      color: #ffffff;
     margin-left: 25px;
     padding-bottom: 5px;
}
</style>  

