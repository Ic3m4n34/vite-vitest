<template>
  <div
    class="flex flex-row space-x-2"
  >
    <input
      v-model="todoInput"
      type="text"
      placeholder="Add a todo"
      class="border border-gray-300 rounded-lg py-2 px-4 text-gray-800"
      @keyup.enter="addTodo"
    >
    <button
      class="bg-purple-700 text-white py-2 px-4 rounded-lg"
      @click="addTodo"
    >
      Add Todo
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { nanoid } from 'nanoid';

export default defineComponent({
  name: 'AddTodo',
  emits: ['task-added'],
  setup(props, { emit }) {
    const todoInput = ref('');

    const addTodo = () => {
      emit('task-added', { todo: todoInput.value, id: nanoid(), done: false });
      todoInput.value = '';
    };

    return {
      todoInput,
      addTodo,
    };
  },
});
</script>

<style scoped>

</style>
