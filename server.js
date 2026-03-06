const express = require("express")
const cors = require("cors")
const axios = require("axios")

const app = express()

app.use(cors())

const PORT = 3000

app.get("/api/person/:id", async (req, res) => {

    const { id } = req.params

    if (isNaN(id)) {
        return res.status(400).json({
            error: "El ID debe ser numérico"
        })
    }

    try {

        const response = await axios.get(`https://swapi.py4e.com/api/people/${id}/`)

        res.json(response.data)

    } catch (error) {

        res.status(404).json({
            error: "Personaje no encontrado"
        })

    }

})

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`)
})