<script setup>
import { computed, ref } from 'vue'

defineOptions({
  name: 'TodoApp',
})

const inputTodo = ref('')
const dateTodo = ref('')
const todos = ref([])
const Completed = ref([])
const editingTodo = ref(null)
const searchKeyword = ref('')

const getId = () => {
  return Math.random().toString(36).substring(2, 10)
}

const addTodo = () => {
  if (editingTodo.value) {
    const index = todos.value.findIndex((t) => t.id === editingTodo.value.id)
    if (index !== -1) {
      todos.value[index].title = inputTodo.value
      todos.value[index].date = dateTodo.value
    }
    editingTodo.value = null
  } else {
    let newTodo = {
      id: getId(),
      title: inputTodo.value,
      date: dateTodo.value,
      isCompleted: false,
    }
    todos.value.push(newTodo)
  }

  console.log(todos.value)
  inputTodo.value = ''
  dateTodo.value = ''
}

const markAsComplete = (todo) => {
  // Hapus todo dari daftar aktif
  todos.value = todos.value.filter((t) => t.id !== todo.id)

  // Tambahkan todo ke daftar selesai
  Completed.value.push({ ...todo, isCompleted: true })
}

const markAsIncomplete = (todo) => {
  Completed.value = Completed.value.filter((t) => t.id !== todo.id)
  todos.value.push({ ...todo, isCompleted: false })
}

const editTodo = (todo) => {
  inputTodo.value = todo.title
  dateTodo.value = todo.date
  editingTodo.value = todo
}

const deleteTodo = (todo) => {
  Completed.value = Completed.value.filter((t) => t.id !== todo.id)

  Completed.value.slice(0, 1)
}

const filteredTodo = computed(() => {
  return todos.value.filter((todo) =>
    todo.title.toLowerCase().includes(searchKeyword.value.toLowerCase()),
  )
})

const filteredComplete = computed(() => {
  return Completed.value.filter((todo) =>
    todo.title.toLowerCase().includes(searchKeyword.value.toLowerCase()),
  )
})
</script>

<template>
  <header>
    <nav class="flex justify-between px-20 py-5 bg-purple-600 text-white">
      <div>
        <h1 class="text-2xl font-bold">Todo App with Vue 3</h1>
      </div>
      <div>
        <button class="bg-violet-800 w-20 h-10 rounded-md">Change</button>
      </div>
    </nav>
  </header>

  <main>
    <form @submit.prevent="addTodo" class="border-2 border-violet-950 m-10 p-10">
      <div>
        <div>
          <label for="todoInput">Masukkan sesuatu</label><br />
          <input
            v-model="inputTodo"
            class="border-2 border-red-500 w-full"
            type="text"
            placeholder="Masukkan todo"
            id="todoInput"
          />
        </div>

        <div>
          <label for="todoTanggal">Masukkan tanggal</label><br />
          <input
            v-model="dateTodo"
            class="border-2 border-red-500 w-full"
            type="date"
            id="todoDate"
          />
        </div>
      </div>
      <!-- input submit -->
      <input class="bg-green-400 w-full h-10 mt-10 rounded-lg" type="submit" value="Submit" />
    </form>

    <!-- daftar pencarian todo -->
    <div>
      <label for="searchInput">Cari todo</label><br />
      <input
        v-model="searchKeyword"
        class="border-2 border-blue-500"
        type="text"
        placeholder="Cari todo"
        id="searchInput"
      />
    </div>

    <!-- input dari form muncul disini -->
    <div id="todolist" class="my-10 border-2 border-red-600 p-10">
      <h1 class="capitalize font-bold text-2xl">yang sedang kamu lakukan</h1>
      <div
        v-for="todo in filteredTodo"
        :key="todo"
        class="flex gap-10 item-center justify-between p-5 px-16 border-2"
      >
        <div>
          <h1>{{ todo.title }}</h1>
          <p>{{ todo.date }}</p>
        </div>

        <div class="gap-10 flex">
          <button @click="markAsComplete(todo)">sudah dilakukan</button>
          <button @click="editTodo(todo)">edit</button>
        </div>
      </div>
    </div>

    <!-- input dari form muncul disini -->
    <div id="completeTodo" class="border-2 border-green-600 p-10">
      <h1 class="capitalize font-bold text-2xl">selesai dilakukan</h1>
      <div v-for="todo in filteredComplete" :key="todo">
        <div>
          <h1>{{ todo.title }}</h1>
          <p>{{ todo.date }}</p>
        </div>

        <button @click="markAsIncomplete(todo)" class="p-2 bg-indigo-500">belum selesai</button>
        <button @click="deleteTodo(todo)">Delete</button>
      </div>
    </div>
  </main>

  <footer>
    <p>&copy;copyright:Rendra 2024 Todo List</p>
  </footer>
</template>

<style scoped></style>
