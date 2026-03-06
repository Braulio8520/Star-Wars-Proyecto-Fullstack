<script setup>

import { ref, computed, watch } from "vue"
import axios from "axios"

const id = ref("")
const character = ref(null)
const loading = ref(false)
const error = ref(null)

const isInvalid = computed(() => {
  return id.value === "" || isNaN(id.value)
})

/* limpiar resultado cuando el input quede vacío */
watch(id, (newValue) => {
  if (newValue === "") {
    character.value = null
    error.value = null
  }
})

const searchCharacter = async () => {

  loading.value = true
  error.value = null
  character.value = null

  try {

    const response = await axios.get(`http://localhost:3000/api/person/${id.value}`)

    character.value = response.data

  } catch (err) {

    error.value = "Personaje no encontrado"

  } finally {

    loading.value = false

  }

}

</script>

<template>

<div class="container">

  <img src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Star_Wars_Logo.svg" class="logo" alt="Star Wars">
  <h1>Buscador de Personaje</h1>

  <input 
    v-model="id"
    type="text"
    placeholder="Ingrese ID del personaje"
  />

  <button 
    :disabled="isInvalid"
    @click="searchCharacter"
  >
    Buscar
  </button>

  <p v-if="loading" class="loading">Cargando...</p>

  <p v-if="error" class="error">{{ error }}</p>

  <div class="card" v-if="character">

    <h2>{{ character.name }}</h2>

    <p>📏 Altura: {{ character.height }}</p>
    <p>⚖️ Peso: {{ character.mass }}</p>

    <p>
      {{ character.gender === 'male' ? '♂️' : character.gender === 'female' ? '♀️' : '👤' }}
      Genero: {{ character.gender }}
    </p>

    <p>🎂 Año de nacimiento: {{ character.birth_year }}</p>

  </div>

</div>

</template>

<style>

.container{
  max-width:600px;
  margin:auto;
  text-align:center;
}

button{
  margin-left:10px;
  padding:8px;
}

.loading{
  color:blue;
}

.error{
  color:red;
}

.card{
  border:1px solid #ccc;
  padding:20px;
  margin-top:20px;
  border-radius:10px;
}

</style>