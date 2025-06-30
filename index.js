const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Servir archivos estáticos (como imágenes)
app.use(express.static('public'));

// Ruta principal que devuelve el HTML con CSS y JS integrado
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Silent Evil - Survival Horror Clásico</title>
      <style>
        /* CSS inspirado en Resident Evil/Silent Hill */
        body {
          font-family: 'Courier New', monospace;
          background: #000 url('https://i.imgur.com/6QjTQYZ.jpg') no-repeat center center fixed;
          background-size: cover;
          color: #c00;
          margin: 0;
          padding: 0;
          height: 100vh;
          overflow: hidden;
        }
        .container {
          background: rgba(0, 0, 0, 0.7);
          border: 1px solid #300;
          width: 80%;
          margin: 50px auto;
          padding: 20px;
          text-align: center;
        }
        h1 {
          color: #e00;
          text-shadow: 0 0 5px #f00;
        }
        button {
          background: #300;
          color: #c00;
          border: 1px solid #500;
          padding: 10px 20px;
          cursor: pointer;
          font-family: 'Courier New', monospace;
          margin: 10px;
        }
        button:hover {
          background: #500;
        }
        #message {
          font-size: 18px;
          margin-top: 20px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>¡Bienvenido a Silent Evil!</h1>
        <p>Un tributo a los juegos de survival horror clásicos.</p>
        <button id="surviveBtn">Intentar Sobrevivir</button>
        <div id="message"></div>
      </div>

      <script>
        // JS para interactividad
        document.getElementById('surviveBtn').addEventListener('click', () => {
          const messages = [
            "¡Un zombi aparece detrás de ti!",
            "Escuchas un radio estático... '¡Están vivos!'",
            "La puerta cruje... ¿Es Pyramid Head?",
            "Encuentras un herb verde. Salud +5",
            "¡Corre! Las lámparas parpadean..."
          ];
          const randomMsg = messages[Math.floor(Math.random() * messages.length)];
          document.getElementById('message').textContent = randomMsg;
        });
      </script>
    </body>
    </html>
  `);
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});