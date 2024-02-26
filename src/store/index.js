import { createStore } from 'vuex';

const store = createStore({
    state: {
        // return {
        //     count : 33
        // }
        todos: [
            {id: 1, text: 'todo1', done: true},
            {id: 2, text: 'todo2', done: false}
        ]
    },

    getters: {
        doneTodos(state) {
            return state.todos.filter(todo => todo.done)
        },
        getTodoById: (state) => (id) => {
            return state.todos.find(todo => todo.id == id)
        }
    }
}); 

export default store; 