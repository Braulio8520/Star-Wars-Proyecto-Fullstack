⭐ Star Wars Proyecto Fullstack

Aplicación Full Stack que permite buscar personajes del universo de Star Wars utilizando su ID y mostrar información detallada del personaje.

El sistema está dividido en dos partes:

Frontend: Vue 3 + Vite

Backend: Node.js + Express

API externa: SWAPI (Star Wars API)

El backend actúa como intermediario entre el frontend y la API externa.


📸 Vista del proyecto

Interfaz con temática espacial inspirada en Star Wars:

fondo animado de estrellas

tarjeta con efecto glassmorphism

imagen del personaje

iconos de información


🧠 Funcionalidades

Buscar personajes por ID

Mostrar:

Nombre

Altura

Peso

Género

Año de nacimiento

Imagen del personaje

Validación de ID numérico

Manejo de errores si el personaje no existe

Interfaz con animaciones


🛠 Tecnologías utilizadas

Frontend

Vue 3

Vite

Axios

CSS

Backend

Node.js

Express

Axios

CORS

API

https://swapi.py4e.com

📂 Estructura del proyecto
Star-Wars-Proyecto-Fullstack
│
├── frontend
│   ├── src
│   │   └── App.vue
│   └── package.json
├── server.js
│   └── package.json
│
└── README.md

⚙️ Requisitos

Antes de ejecutar el proyecto necesitas instalar:

Node.js

npm

Verifica con:

node -v
npm -v

🚀 Instalación

Clonar el repositorio:

git clone https://github.com/Braulio8520/Star-Wars-Proyecto-Fullstack.git
cd Star-Wars-Proyecto-Fullstack

▶️ Ejecutar el Backend

Entrar a la carpeta backend:

cd backend

Instalar dependencias:

npm install

Ejecutar el servidor:

node server.js

El backend correrá en:

http://localhost:3000

Endpoint disponible:

GET /api/person/:id

Ejemplo:

http://localhost:3000/api/person/1

▶️ Ejecutar el Frontend

Abrir otra terminal y entrar a la carpeta frontend:

cd frontend

Instalar dependencias:

npm install

Iniciar la aplicación:

npm run dev

El frontend se ejecutará en:

http://localhost:5173

🔎 Ejemplo de búsqueda
ID	Personaje
1	Luke Skywalker
2	C-3PO
3	R2-D2
4	Darth Vader
5	Leia Organa

📡 API utilizada

Este proyecto utiliza SWAPI, una API REST pública que proporciona datos del universo Star Wars.

👨‍💻 Autor

Braulio E.C.

Proyecto académico desarrollado para practicar:

consumo de APIs

arquitectura frontend/backend

desarrollo Full Stack con JavaScript
