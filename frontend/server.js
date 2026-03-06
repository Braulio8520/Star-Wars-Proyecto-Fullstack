const express = require("express")
const cors = require("cors")
const axios = require("axios")

const app = express()

app.use(cors())

const PORT = 3000

app.get("/api/person/:id", async (req, res) => {

    const searchCharacter = async () => {

        if(!id.value) return
      
        loading.value = true
        error.value = null
        character.value = null
      
        try {
      
          const response = await axios.get(
            `https://akabab.github.io/starwars-api/api/id/${Number(id.value)}.json`
          )
      
          character.value = response.data
      
        } catch (err) {
      
          error.value = "Ese personaje no existe en la API"
      
        } finally {
      
          loading.value = false
      
        }
      
      }

})

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`)
})