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
        h1, h2 {
          color: #e00;
          text-shadow: 0 0 5px #f00;
          text-align: center;
        }
        h1 {
          margin-bottom: 10px;
        }
        h2 {
          margin: 30px 0 15px;
          font-size: 1.3em;
        }
        .intro {
          max-width: 800px;
          margin: 0 auto 30px;
          padding: 20px;
          background: rgba(20, 20, 20, 0.8);
          border: 1px solid #333;
          border-radius: 5px;
        }
        .game-container {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          padding: 20px;
          max-width: 1200px;
          margin: 0 auto;
        }
        .game-card {
          background: rgba(20, 20, 20, 0.8);
          border: 1px solid #333;
          border-radius: 5px;
          overflow: hidden;
          transition: transform 0.3s;
        }
        .game-card:hover {
          transform: scale(1.03);
        }
        .game-card img {
          width: 100%;
          height: 250px;
          object-fit: cover;
          border-bottom: 2px solid #e00;
        }
        .game-info {
          padding: 15px;
        }
        .game-title {
          color: #e00;
          font-size: 1.1em;
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
          padding: 8px;
          margin-top: 15px;
          text-decoration: none;
          border-radius: 3px;
          font-weight: bold;
          font-size: 0.9em;
        }
        .download-btn:hover {
          background: #f00;
        }
        .footer {
          margin-top: 40px;
          padding: 20px;
          text-align: center;
          font-size: 0.9em;
          color: #777;
        }
        .genre-info {
          max-width: 800px;
          margin: 20px auto;
          padding: 15px;
          background: rgba(30, 0, 0, 0.5);
          border-left: 3px solid #e00;
        }
      </style>
    </head>
    <body>
      <h1>Clásicos del Survival Horror</h1>
      
      <div class="intro">
        <p>Este sitio es un <strong>tributo y respaldo histórico</strong> a los juegos clásicos de survival horror que definieron el género. Aquí encontrarás información sobre las obras maestras de <strong>Silent Hill</strong> y <strong>Resident Evil</strong>, con enlaces a versiones abandonadas disponibles legalmente para preservación cultural.</p>
      </div>

      <div class="genre-info">
        <h2>¿Qué es el Survival Horror?</h2>
        <p>El <strong>survival horror</strong> es un subgénero de videojuegos de terror que enfatiza la supervivencia con recursos limitados, atmósferas opresivas y combate no siempre favorable. Estos juegos clásicos de los 90s y principios de los 2000 establecieron las convenciones del género con:</p>
        <ul>
          <li>Cámaras fijas y ángulos cinematográficos</li>
          <li>Gestción estricta de recursos (balas, curaciones)</li>
          <li>Narrativas psicológicas y simbolismo</li>
          <li>Enemigos que representan traumas o miedos</li>
        </ul>
      </div>
      
      <h2>Las Joyas del Horror Clásico</h2>
      <div class="game-container">
        <!-- Silent Hill 1 -->
        <div class="game-card">
          <img src="https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2020/02/silent-hill-portada-ficha-1999-1879155.jpg" alt="Silent Hill 1 PS1">
          <div class="game-info">
            <div class="game-title">Silent Hill (1999, PS1)</div>
            <span class="game-genre">Survival Horror / Psicológico</span>
            <p>Harry Mason busca a su hija adoptiva Cheryl en el pueblo de Silent Hill, donde la niebla oculta horrores personificados. Revolucionó el terror psicológico con su narrativa simbólica y monstruos que representan traumas.</p>
            <a href="https://www.myabandonware.com/game/silent-hill-1c" class="download-btn" target="_blank">Descargar (PS1)</a>
          </div>
        </div>

        <!-- Silent Hill 2 -->
        <div class="game-card">
          <img src="https://images.igdb.com/igdb/image/upload/t_cover_big_2x/co2vyg.jpg" alt="Silent Hill 2 PS2">
          <div class="game-info">
            <div class="game-title">Silent Hill 2 (2001, PS2)</div>
            <span class="game-genre">Survival Horror / Drama</span>
            <p>James Sunder recibe una carta de su esposa fallecida Mary, llevándolo a Silent Hill. Obra maestra que explora culpa, duelo y redención, con Pyramid Head como manifestación de su auto-castigo.</p>
            <a href="https://www.myabandonware.com/game/silent-hill-2-9n" class="download-btn" target="_blank">Descargar (PS2)</a>
          </div>
        </div>

        <!-- Silent Hill 3 -->
        <div class="game-card">
          <img src="https://m.media-amazon.com/images/M/MV5BYjFmNDkwMTYtZTJhMy00ZjQ1LTg5ODUtNjcwYWY5OTA2ZWEwXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" alt="Silent Hill 3 PS2">
          <div class="game-info">
            <div class="game-title">Silent Hill 3 (2003, PS2)</div>
            <span class="game-genre">Survival Horror / Gore</span>
            <p>Heather Mason descubre su conexión con el culto de Silent Hill. Juego más visceral de la saga, con diseños de monstruos basados en abortos y violencia corporal, y una banda sonora industrial icónica.</p>
            <a href="https://www.myabandonware.com/game/silent-hill-3-9o" class="download-btn" target="_blank">Descargar (PS2)</a>
          </div>
        </div>

        <!-- Resident Evil 1 -->
        <div class="game-card">
          <img src="https://pics.filmaffinity.com/Resident_Evil-279276141-large.jpg" alt="Resident Evil 1 PS1">
          <div class="game-info">
            <div class="game-title">Resident Evil (1996, PS1)</div>
            <span class="game-genre">Survival Horror / Zombis</span>
            <p>Los miembros de S.T.A.R.S. investigan una mansión en las afueras de Raccoon City, encontrando zombis y experimentos genéticos. Estableció el "tank controls" y la gestión de inventario que definieron el género.</p>
            <a href="https://www.myabandonware.com/game/resident-evil-1c" class="download-btn" target="_blank">Descargar (PS1)</a>
          </div>
        </div>

        <!-- Resident Evil 2 -->
        <div class="game-card">
          <img src="https://pics.filmaffinity.com/biohazard_2-253197213-large.jpg" alt="Resident Evil 2 PS1">
          <div class="game-info">
            <div class="game-title">Resident Evil 2 (1998, PS1)</div>
            <span class="game-genre">Survival Horror / Acción</span>
            <p>Leon Kennedy y Claire Redfield escapan de Raccoon City durante un brote zombie. Introdujo a Mr. X, el Tyrant perseguidor, y una narrativa de dos campañas entrelazadas con puzzles memorables.</p>
            <a href="https://www.myabandonware.com/game/resident-evil-2-1d" class="download-btn" target="_blank">Descargar (PS1)</a>
          </div>
        </div>

        <!-- Resident Evil 3 -->
        <div class="game-card">
          <img src="https://pics.filmaffinity.com/Resident_Evil_3_Nemesis-373179772-large.jpg" alt="Resident Evil 3 PS1">
          <div class="game-info">
            <div class="game-title">Resident Evil 3 (1999, PS1)</div>
            <span class="game-genre">Survival Horror / Acción</span>
            <p>Jill Valentine intenta escapar de Raccoon City mientras es perseguida por Nemesis, un bio-arma inteligente. Introdujo el sistema de esquiva y decisiones rápidas que aumentaban la tensión.</p>
            <a href="https://www.myabandonware.com/game/resident-evil-3-nemesis-1e" class="download-btn" target="_blank">Descargar (PS1)</a>
          </div>
        </div>
      </div>

      <div class="footer">
        <p><strong>Proyecto de preservación histórica</strong> - Este sitio no aloja juegos completos, solo proporciona enlaces a versiones abandonadas disponibles legalmente.</p>
        <p>Creado en 2025 - "Proyecto Silent Evil by hancco05 Team Perú" - Tributo a los clásicos del survival horror</p>
      </div>
    </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`Servidor en http://localhost:${PORT}`);
});