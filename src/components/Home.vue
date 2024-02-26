<template>
  <h4>Home</h4>
  <!-- <h5>{{ count }}</h5> -->
  <!-- <h5 v-for="todo in todos" :key="todo.id">
    {{ todo.text }}
  </h5> -->
  Done Todo:
  <h5 v-for="todo in doneTodos" :key="todo.id">
    {{ todo.text }}
  </h5>
  {{ getTodoById.text }}
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
    // computed: {
    //     count() {
    //         return this.$store.state.count
    //     }
    // }

    // computed: {
    //     todos() {
    //         return this.$store.state.todos
    //     },

    //     // doneTodos() {
    //     //     return this.$store.state.todos.filter(todo => {
    //     //         if(todo.done == true) {
    //     //             return todo
    //     //         }
    //     //     })
    //     // }

    //     doneTodos() {
    //         return this.$store.getters.doneTodos
    //     }
    // }

    setup() {
        const store = useStore();
        const doneTodos = computed(() => {
            return store.getters.doneTodos; 
        });
        const getTodoById = computed(() => {
            return store.getters.getTodoById(2); 
        })

        return {
            doneTodos,
            getTodoById
        }
    }
}
</script>

<style scoped>

</style>
 