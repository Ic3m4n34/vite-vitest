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
        :key="todo"
      >
        {{ todo }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, Ref } from 'vue';
import AddTodo from './components/AddTodo.vue';

export default defineComponent({
  components: {
    AddTodo,
  },
  setup() {
    const todos: Ref<string[]> = ref([]);

    const handleAddTodo = (task: Ref<string>) => {
      todos.value.push(task.value);
    };
    return {
      handleAddTodo,
      todos,
    };
  },
});
</script>

<style scoped>

</style>
