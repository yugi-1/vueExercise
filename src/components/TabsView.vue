<script>
  export default {
    
       name: "exercise-input",
          data: () => ({
              tab: null,
               exercise: {
              workout: '',
          },
      
          }),
      // data() {    
      //   return {
      //     tab: null,
      //     exercise: {
      //         workout: '',
      //     },
          
      //   }
      // },
   methods: {
      handleSubmit() {
         this.$emit('add:exercise', this.exercise);
         this.$refs.form.reset();
      }
   }
   }

  //   data: () => ({
  //    
      
  //   }),
  // }
</script>

<template>
  <v-card class="tabCard">
    <v-tabs v-model="tab" class="mainTab">
      <v-tab value="time" class="text">Time</v-tab>
      <v-tab value="sets" class="text">Sets and Weights</v-tab>
    </v-tabs>

    <v-card-text>
      <v-window v-model="tab">
            <v-window-item value="time">
          <v-form @submit.prevent="handleSubmit" ref="form">
         <v-text-field label="Add Workout" v-model="exercise.workout" variant="underlined" class="text"></v-text-field>
         <div class="block">
                    <v-text-field v-model="exercise.hours" label="Hours" variant="underlined" class="text"></v-text-field>
                    <v-text-field v-model="exercise.minutes" label="Minutes" variant="underlined" class="text"></v-text-field>
                    <input type="date" v-model="exercise.date" id="datePicker" name="datepicker" value="2024-01-01" min="2023-01-01" />
         </div>
            <v-btn block rounded="lg" size="x-large" type="submit" class="button" >Add Workout</v-btn>
          </v-form>
        </v-window-item>
     

        <v-form @submit.prevent="handleSubmit" ref="form">
        <v-window-item value="sets">
                <v-text-field label="Add Workout" v-model="exercise.workout" variant="underlined" class="text"></v-text-field>
                   <div class="block">
                    <v-text-field v-model="exercise.sets" label="Sets" variant="underlined" class="text"></v-text-field>
                    <v-text-field v-model="exercise.reps" label="Reps" variant="underlined" class="text"></v-text-field>
                    <v-text-field v-model="exercise.weight" label="Weight" variant="underlined" class="text"></v-text-field>
                    <v-select v-model="exercise.metric" variant="underlined" label="Select" :items="['lbs.', 'kg']" class="text"></v-select>
                    <input v-model="exercise.date" type="date" id="datePicker" name="datepicker" value="2024-01-01" min="2023-01-01" />
         </div>
         
             <v-btn block rounded="lg" size="x-large" class="button" type="submit">Add Workout</v-btn>
        </v-window-item>
        </v-form>


      </v-window>
    </v-card-text>
  </v-card>
</template>



<style scoped>
.mainTab {
background: rgb(48,176,203);
background: linear-gradient(126deg, rgb(38, 115, 134) 49%, rgba(48,176,203,1) 0%, rgba(133,214,230,1) 97%);
}
.text {
      font-size: 16px;
      font-family: "Montserrat", sans-serif;
      color: #ffffff;
      padding: 3px;
     /* margin-left: 25px;
     padding-bottom: 5px; */
}
.tabCard {
    background: transparent;
}

.block {
    display: flex;
    width: 500px;
}
#datePicker {
    color: white;
}

</style>