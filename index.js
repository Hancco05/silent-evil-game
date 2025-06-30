const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Clásicos del Survival Horror</title>
      <style>
        body {
          font-family: 'Courier New', monospace;
          background: #000;
          color: #fff;
          margin: 0;
          padding: 20px;
          line-height: 1.6;
        }
        h1 {
          color: #e00;
          text-shadow: 0 0 5px #f00;
          text-align: center;
          margin-bottom: 30px;
        }
        .game-container {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 30px;
          padding: 20px;
        }
        .game-card {
          background: rgba(20, 20, 20, 0.8);
          border: 1px solid #333;
          border-radius: 5px;
          overflow: hidden;
          transition: transform 0.3s;
        }
        .game-card:hover {
          transform: scale(1.02);
        }
        .game-card img {
          width: 100%;
          height: auto;
          border-bottom: 2px solid #e00;
        }
        .game-info {
          padding: 15px;
        }
        .game-title {
          color: #e00;
          font-size: 1.2em;
          margin: 10px 0;
        }
        .game-genre {
          display: inline-block;
          background: #333;
          color: #fff;
          padding: 3px 8px;
          border-radius: 3px;
          font-size: 0.8em;
          margin-bottom: 10px;
        }
        .download-btn {
          display: block;
          background: #e00;
          color: #fff;
          text-align: center;
          padding: 10px;
          margin-top: 15px;
          text-decoration: none;
          border-radius: 3px;
          font-weight: bold;
        }
        .download-btn:hover {
          background: #f00;
        }
      </style>
    </head>
    <body>
      <h1>Clásicos del Survival Horror</h1>
      
      <div class="game-container">
        <!-- Silent Hill 1 -->
        <div class="game-card">
          <img src="https://cdn.mobygames.com/covers/3552147-silent-hill-playstation-front-cover.jpg" alt="Silent Hill 1">
          <div class="game-info">
            <div class="game-title">Silent Hill (1999, PS1)</div>
            <span class="game-genre">Survival Horror / Psicológico</span>
            <p>Un escritor busca a su hija desaparecida en el pueblo de Silent Hill, donde criaturas grotescas y una niebla espesa esconden horrores indescriptibles. Destaca por su atmósfera opresiva y narrativa simbólica.</p>
            <a href="https://www.myabandonware.com/game/silent-hill-1c" class="download-btn" target="_blank">Descargar (PS1)</a>
          </div>
        </div>

        <!-- Silent Hill 2 -->
        <div class="game-card">
          <img src="https://cdn.mobygames.com/covers/3552150-silent-hill-2-playstation-2-front-cover.jpg" alt="Silent Hill 2">
          <div class="game-info">
            <div class="game-title">Silent Hill 2 (2001, PS2)</div>
            <span class="game-genre">Survival Horror / Drama</span>
            <p>James Sunder recibe una carta de su esposa fallecida, llevándolo a Silent Hill. Una obra maestra del horror psicológico con temas de culpa y redención. Pyramid Head es un ícono del género.</p>
            <a href="https://www.myabandonware.com/game/silent-hill-2-9n" class="download-btn" target="_blank">Descargar (PS2)</a>
          </div>
        </div>

        <!-- Silent Hill 3 -->
        <div class="game-card">
          <img src="https://cdn.mobygames.com/covers/3552153-silent-hill-3-playstation-2-front-cover.jpg" alt="Silent Hill 3">
          <div class="game-info">
            <div class="game-title">Silent Hill 3 (2003, PS2)</div>
            <span class="game-genre">Survival Horror / Terror</span>
            <p>Heather Mason descubre su conexión con el culto de Silent Hill. Juego más orientado al terror puro, con diseños de monstruos perturbadores y una banda sonora legendaria.</p>
            <a href="https://www.myabandonware.com/game/silent-hill-3-9o" class="download-btn" target="_blank">Descargar (PS2)</a>
          </div>
        </div>

        <!-- Resident Evil 1 -->
        <div class="game-card">
          <img src="https://cdn.mobygames.com/covers/3321537-resident-evil-playstation-front-cover.jpg" alt="Resident Evil 1">
          <div class="game-info">
            <div class="game-title">Resident Evil (1996, PS1)</div>
            <span class="game-genre">Survival Horror / Zombis</span>
            <p>El equipo S.T.A.R.S. investiga una mansión infestada de zombis y criaturas mutantes. Inició el género survival horror con mecánicas de gestión de recursos y puzzles.</p>
            <a href="https://www.myabandonware.com/game/resident-evil-1c" class="download-btn" target="_blank">Descargar (PS1)</a>
          </div>
        </div>

        <!-- Resident Evil 2 -->
        <div class="game-card">
          <img src="https://cdn.mobygames.com/covers/3321540-resident-evil-2-playstation-front-cover.jpg" alt="Resident Evil 2">
          <div class="game-info">
            <div class="game-title">Resident Evil 2 (1998, PS1)</div>
            <span class="game-genre">Survival Horror / Acción</span>
            <p>Leon Kennedy y Claire Redfield sobreviven a un Raccoon City infestado. Mr. X y la narrativa de dos campañas lo hicieron un clásico instantáneo.</p>
            <a href="https://www.myabandonware.com/game/resident-evil-2-1d" class="download-btn" target="_blank">Descargar (PS1)</a>
          </div>
        </div>

        <!-- Resident Evil 3 -->
        <div class="game-card">
          <img src="https://cdn.mobygames.com/covers/3321543-resident-evil-3-nemesis-playstation-front-cover.jpg" alt="Resident Evil 3">
          <div class="game-info">
            <div class="game-title">Resident Evil 3: Nemesis (1999, PS1)</div>
            <span class="game-genre">Survival Horror / Acción</span>
            <p>Jill Valentine escapa de Raccoon City mientras es perseguida por Nemesis, un bio-arma implacable. Introdujo el sistema de esquiva y decisiones rápidas.</p>
            <a href="https://www.myabandonware.com/game/resident-evil-3-nemesis-1e" class="download-btn" target="_blank">Descargar (PS1)</a>
          </div>
        </div>
      </div>
    </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`Servidor en http://localhost:${PORT}`);
});