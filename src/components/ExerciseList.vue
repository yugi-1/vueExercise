<script>
export default {
  name: 'exercise-list',
  props: {
    exercises: Array,
   
  },
  data() {
    return {
      editing: null,
    }
  },
  methods: {
    editMode(id){
      this.editing = id
    },
    editExercise(exercise) {
      if (exercise.workout === '') return
      this.$emit('edit:exercise', exercise)

      this.editing = null;
    },
  },
}
</script>

<template>

<div id="exercise-list">
    <p class="pb-5" ></p>
   
    <v-list-item v-for="exercise in exercises" :key="exercise.id" >
         <v-card>
            <v-list-item-title class="list-item" v-if="editing === exercise.id">
   
                <v-text-field label="Edit Exercise..." variant="underlined" v-model="exercise.workout" @keyup.enter="editExercise(exercise)"></v-text-field>
                <v-text-field type="date" label="Edit Date..." variant="underlined" v-model="exercise.date" @keyup.enter="editExercise(exercise)"></v-text-field>
                <v-text-field label="Edit Hours.." variant="underlined" v-model="exercise.hours" v-if="exercise.hours" @keyup.enter="editExercise(exercise)"></v-text-field>
                <v-text-field label="Edit Minutes.." variant="underlined" v-model="exercise.minutes" v-if="exercise.minutes" @keyup.enter="editExercise(exercise)"></v-text-field>

                <v-text-field label="Edit Sets.." variant="underlined" v-model="exercise.sets" v-if="exercise.sets" @keyup.enter="editExercise(exercise)"></v-text-field>
                <v-text-field label="Edit Reps.." variant="underlined" v-model="exercise.reps" v-if="exercise.reps" @keyup.enter="editExercise(exercise)"></v-text-field>
       
                <v-text-field label="Edit Weight.." variant="underlined" v-model="exercise.weight" v-if="exercise.weight" @keyup.enter="editExercise(exercise)"></v-text-field>
                <v-select label="Select" variant="underlined" v-model="exercise.metric" v-if="exercise.metric" @keyup.enter="editExercise(exercise)" :items="['lbs.', 'kg']"></v-select>
   
                <v-btn size="x-small" class="p-2" @click="editExercise(exercise)" >Save</v-btn>
            
            </v-list-item-title>
                   <v-list-item-title class="list-item" v-else>
            <div>
                
                <h2>{{ exercise.workout }}</h2>
                <p class="small">{{ exercise.date }}</p>
                 <v-btn size="x-small" class="p-2 deleteBtn" @click="$emit(`delete:exercise`, exercise.id)">Delete</v-btn>
                <v-btn size="x-small" class="p-2 deleteBtn"  @click="editMode(exercise.id)">Edit</v-btn>
                <p v-if="exercise.sets"> Sets: {{ exercise.sets }}</p>
                <p v-else></p>
                <p v-if="exercise.reps"> Reps: {{ exercise.reps }}</p>
                <p v-else></p>
          </div>
            <div class="block">
                 <h2 v-if="exercise.weight !== null && exercise.metric !== null "> {{ exercise.weight }}
                     {{ exercise.metric }}
                 </h2>
                <p v-else></p>

                <h2 v-if="exercise.hours"> Hrs: {{ exercise.hours }}</h2>
                <p v-else></p>
                <h2 v-if="exercise.minutes"> Min: {{ exercise.minutes }}</h2>
                <p v-else></p>
            </div>
        </v-list-item-title>
          </v-card>
    </v-list-item>
</div>
</template>

<style scoped>

.list-item {
  display: flex;
  justify-content: space-between;
  padding: 15px;
      font-size: 20px;
      font-family: "Montserrat", sans-serif;
      font-weight: 400;
  color: white;
    background: rgb(39,151,175);
  background: linear-gradient(141deg, rgba(39,151,175,1) 0%, rgba(90,183,207,1) 49%, rgba(132,215,231,1) 97%);
}
.small {
    font-size: 12px;
}
.deleteBtn {
    background-color: transparent;
    color: white;
    margin-bottom: 5px;
}
</style>