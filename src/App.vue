<template>
  <div class="container mx-auto py-8 px-4">
    <AddTodo
      class="mb-8"
      @task-added="handleAddTodo"
    />

    <h2 class="text-xl font-bold">
      Todos
    </h2>

    <ul class="flex flex-col space-y-2">
      <li
        v-for="todo in todos"
        :key="todo.id"
        class="bg-gray-300 text-gray-800 py-2 px-4 rounded-md max-w-sm flex flex-row justify-between items-center"
      >
        <div class="flex flex-row space-x-2 items-center">
          <div v-if="todo.done">
            <svg
              class="w-6 h-6 text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            ><path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            /></svg>
          </div>
          <div>{{ todo.todo }}</div>
        </div>
        <div>
          <button
            class="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg mr-2"
            @click="handleTodoDone(todo.id)"
          >
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            ><path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 13l4 4L19 7"
            /></svg>
          </button>
          <button
            class="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg"
            @click="handleRemoveTodo(todo.id)"
          >
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            ><path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            /></svg>
          </button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, Ref } from 'vue';
import AddTodo from './components/AddTodo.vue';

interface Todo {
  todo: string;
  id: string;
  done: boolean;
}

export default defineComponent({
  components: {
    AddTodo,
  },
  setup() {
    const todos: Ref<Todo[]> = ref([]);

    const handleAddTodo = (task: Todo): void => {
      todos.value.push(task);
    };

    const handleRemoveTodo = (id: string): void => {
      todos.value = todos.value.filter((todo) => todo.id !== id);
    };

    const handleTodoDone = (id: string): void => {
      const doneTodo = todos.value.find((todo) => todo.id === id);
      if (doneTodo) {
        doneTodo.done = true;
      }
    };

    return {
      handleAddTodo,
      handleRemoveTodo,
      handleTodoDone,
      todos,
    };
  },
});
</script>

<style scoped>

</style>
