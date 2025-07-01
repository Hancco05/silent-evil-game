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
      <link rel="icon" href="https://www.evilresource.com/images/data/full/re4remake/first-aid-spray.png" type="image/x-icon">
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
          display: flex;
          flex-direction: column;
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
          flex: 1;
          display: flex;
          flex-direction: column;
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
        .download-btn-container {
          margin-top: auto;
          display: flex;
          justify-content: center;
        }
        .download-btn {
          background: #e00;
          color: #fff;
          text-align: center;
          padding: 8px 15px;
          text-decoration: none;
          border-radius: 3px;
          font-weight: bold;
          font-size: 0.9em;
          cursor: pointer;
          transition: all 0.3s ease;
          border: none;
          width: 150px; /* Ancho fijo para todos los botones */
        }
        .download-btn:hover {
          background: #f00;
        }
        .download-btn.selected {
          background: #0a0;
          transform: scale(1.05);
        }
        .download-btn.selected:hover {
          background: #0c0;
        }
        .footer {
          margin-top: 40px;
          padding: 20px;
          text-align: center;
          font-size: 0.9em;
          color: #777;
        }
        .genre-info {
          max-width: 1000px;
          margin: 20px auto;
          padding: 20px;
          background: rgba(30, 0, 0, 0.5);
          border-left: 3px solid #e00;
          display: flex;
          align-items: center;
          gap: 30px;
        }
        .genre-text {
          flex: 2;
        }
        .genre-gif {
          flex: 1.5;
          display: flex;
          align-items: center;
          justify-content: center;
          min-width: 400px;
          max-width: 500px;
        }
        .genre-gif img {
          max-width: 100%;
          max-height: 350px;
          border: 2px solid #500;
          border-radius: 5px;
          box-shadow: 0 0 15px rgba(255, 0, 0, 0.3);
          object-fit: contain;
        }
        .purpose-section {
          max-width: 1000px;
          margin: 40px auto;
          padding: 20px;
          background: rgba(30, 0, 0, 0.5);
          border-right: 3px solid #e00;
          display: flex;
          align-items: center;
          gap: 30px;
        }
        .purpose-text {
          flex: 1;
        }
        .carousel {
          flex: 1;
          position: relative;
          overflow: hidden;
          height: 250px;
        }
        .carousel-inner {
          display: flex;
          transition: transform 0.5s ease;
          height: 100%;
        }
        .carousel-item {
          min-width: 100%;
          height: 100%;
        }
        .carousel-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border: 1px solid #500;
          border-radius: 5px;
        }
        .carousel-control {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(0,0,0,0.5);
          color: white;
          border: none;
          padding: 10px;
          cursor: pointer;
          z-index: 1;
        }
        .carousel-control.prev {
          left: 10px;
        }
        .carousel-control.next {
          right: 10px;
        }
        .confirmation-dialog {
          display: none;
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background: rgba(20, 20, 20, 0.95);
          padding: 20px;
          border: 2px solid #e00;
          border-radius: 5px;
          z-index: 1000;
          max-width: 400px;
          text-align: center;
        }
        .confirmation-dialog p {
          margin-bottom: 20px;
        }
        .confirmation-btn {
          padding: 8px 15px;
          margin: 0 10px;
          border: none;
          border-radius: 3px;
          cursor: pointer;
          font-weight: bold;
        }
        .confirm-btn {
          background: #0a0;
          color: white;
        }
        .cancel-btn {
          background: #333;
          color: white;
        }
        .overlay {
          display: none;
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0,0,0,0.7);
          z-index: 999;
        }
        @media (max-width: 768px) {
          .genre-info, .purpose-section {
            flex-direction: column;
          }
          .game-container {
            grid-template-columns: 1fr;
          }
          .genre-gif img, .carousel {
            width: 100%;
            max-height: 250px;
          }
        }
      </style>
    </head>
    <body>
      <h1>Clásicos del Survival Horror</h1>
      
      <div class="intro">
        <p>Este sitio es un <strong>tributo y respaldo histórico</strong> a los juegos clásicos de survival horror que definieron el género. Aquí encontrarás información sobre las obras maestras de <strong>Silent Hill</strong> y <strong>Resident Evil</strong>, con enlaces a versiones abandonadas disponibles legalmente para preservación cultural.</p>
      </div>

      <div class="genre-info">
        <div class="genre-gif">
          <img src="https://images.squarespace-cdn.com/content/v1/61d0d6b5e7f7444a96edf02f/aa824e24-4449-40ae-964b-2dc5f80979b7/jill-jump+copy.gif" alt="Pyramid Head GIF">
        </div>
        <div class="genre-text">
          <h2>¿Qué es el Survival Horror?</h2>
          <p>El <strong>survival horror</strong> es un subgénero de videojuegos de terror que enfatiza la supervivencia con recursos limitados, atmósferas opresivas y combate no siempre favorable. Estos juegos clásicos de los 90s y principios de los 2000 establecieron las convenciones del género con:</p>
          <ul>
            <li>Cámaras fijas y ángulos cinematográficos</li>
            <li>Gestión estricta de recursos (balas, curaciones)</li>
            <li>Narrativas psicológicas y simbolismo</li>
            <li>Enemigos que representan traumas o miedos</li>
          </ul>
          </div>
      </div>

      <div class="purpose-section">
        <div class="purpose-text">
          <h2>¿Por qué este sitio de respaldo?</h2>
          <p>Este proyecto nace de la necesidad de preservar los clásicos del survival horror que marcaron una generación. Muchos de estos juegos ya no están disponibles comercialmente o son difíciles de encontrar. Nuestro objetivo es:</p>
          <ul>
            <li>Mantener viva la memoria de estos títulos icónicos</li>
            <li>Proporcionar información precisa sobre cada juego</li>
            <li>Ofrecer enlaces a versiones legalmente abandonadas</li>
            <li>Educar a nuevas generaciones sobre los orígenes del género</li>
          </ul>
          <p>Consideramos estos juegos como obras de arte interactivas que merecen ser recordadas y estudiadas.</p>
        </div>
        <div class="carousel">
          <div class="carousel-inner">
            <div class="carousel-item">
              <img src="https://media.tenor.com/xUZy4RUZO6MAAAAM/heather-mason-cheryl-mason.gif" alt="Silent Hill GIF">
            </div>
            <div class="carousel-item">
              <img src="https://lparchive.org/Resident-Evil-2-and-3/Update%2039/smashjill.gif" alt="Resident Evil GIF">
            </div>
          </div>
          <button class="carousel-control prev">❮</button>
          <button class="carousel-control next">❯</button>
        </div>
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
            <div class="download-btn-container">
              <button class="download-btn" data-url="https://www.myabandonware.com/game/silent-hill-1c">Descargar (PS1)</button>
            </div>
          </div>
        </div>

        <!-- Silent Hill 2 -->
        <div class="game-card">
          <img src="https://images.igdb.com/igdb/image/upload/t_cover_big_2x/co2vyg.jpg" alt="Silent Hill 2 PS2">
          <div class="game-info">
            <div class="game-title">Silent Hill 2 (2001, PS2)</div>
            <span class="game-genre">Survival Horror / Drama</span>
            <p>James Sunder recibe una carta de su esposa fallecida Mary, llevándolo a Silent Hill. Obra maestra que explora culpa, duelo y redención, con Pyramid Head como manifestación de su auto-castigo.</p>
            <div class="download-btn-container">
              <button class="download-btn" data-url="https://www.myabandonware.com/game/silent-hill-2">Descargar (PS2)</button>
            </div>
          </div>
        </div>

        <!-- Silent Hill 3 -->
        <div class="game-card">
          <img src="https://m.media-amazon.com/images/M/MV5BYjFmNDkwMTYtZTJhMy00ZjQ1LTg5ODUtNjcwYWY5OTA2ZWEwXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" alt="Silent Hill 3 PS2">
          <div class="game-info">
            <div class="game-title">Silent Hill 3 (2003, PS2)</div>
            <span class="game-genre">Survival Horror / Gore</span>
            <p>Heather Mason descubre su conexión con el culto de Silent Hill. Juego más visceral de la saga, con diseños de monstruos basados en abortos y violencia corporal, y una banda sonora industrial icónica.</p>
            <div class="download-btn-container">
              <button class="download-btn" data-url="https://www.myabandonware.com/game/silent-hill-3">Descargar (PS2)</button>
            </div>
          </div>
        </div>

        <!-- Resident Evil 1 -->
        <div class="game-card">
          <img src="https://pics.filmaffinity.com/Resident_Evil-279276141-large.jpg" alt="Resident Evil 1 PS1">
          <div class="game-info">
            <div class="game-title">Resident Evil (1996, PS1)</div>
            <span class="game-genre">Survival Horror / Zombis</span>
            <p>Los miembros de S.T.A.R.S. investigan una mansión en las afueras de Raccoon City, encontrando zombis y experimentos genéticos. Estableció el "tank controls" y la gestión de inventario que definieron el género.</p>
            <div class="download-btn-container">
              <button class="download-btn" data-url="https://www.myabandonware.com/game/resident-evil-1">Descargar (PS1)</button>
            </div>
          </div>
        </div>

        <!-- Resident Evil 2 -->
        <div class="game-card">
          <img src="https://upload.wikimedia.org/wikipedia/en/4/40/NTSC_Resident_Evil_2_Cover.png" alt="Resident Evil 2 PS1">
          <div class="game-info">
            <div class="game-title">Resident Evil 2 (1998, PS1)</div>
            <span class="game-genre">Survival Horror / Acción</span>
            <p>Leon Kennedy y Claire Redfield escapan de Raccoon City durante un brote zombie. Introdujo a Mr. X, el Tyrant perseguidor, y una narrativa de dos campañas entrelazadas con puzzles memorables.</p>
            <div class="download-btn-container">
              <button class="download-btn" data-url="https://www.myabandonware.com/game/resident-evil-2">Descargar (PS1)</button>
            </div>
          </div>
        </div>

        <!-- Resident Evil 3 -->
        <div class="game-card">
          <img src="https://pics.filmaffinity.com/Resident_Evil_3_Nemesis-373179772-large.jpg" alt="Resident Evil 3 PS1">
          <div class="game-info">
            <div class="game-title">Resident Evil 3 (1999, PS1)</div>
            <span class="game-genre">Survival Horror / Acción</span>
            <p>Jill Valentine intenta escapar de Raccoon City mientras es perseguida por Nemesis, un bio-arma o BOW inteligente. Introdujo el sistema de esquiva y decisiones rápidas que aumentaban la tensión.</p>
            <div class="download-btn-container">
              <button class="download-btn" data-url="https://www.myabandonware.com/game/resident-evil-3">Descargar (PS1)</button>
            </div>
          </div>
        </div>
      </div>

      <!-- Diálogo de confirmación -->
      <div class="overlay" id="overlay"></div>
      <div class="confirmation-dialog" id="confirmationDialog">
        <p>¿Estás seguro que deseas descargar este juego?</p>
        <button class="confirmation-btn confirm-btn" id="confirmDownload">Sí, descargar</button>
        <button class="confirmation-btn cancel-btn" id="cancelDownload">Cancelar</button>
      </div>

      <div class="footer">
        <p><strong>Proyecto de preservación con amor</strong> - Este sitio no aloja juegos completos, solo proporciona enlaces para sus versiones disponibles.</p>
        <p>Creado en 2025 - "Proyecto Silent Evil by hancco05 Team Perú" - Tributo a los clásicos del survival horror</p>
      </div>

      <script>
        // Carrusel simple
        const carousel = document.querySelector('.carousel-inner');
        const items = document.querySelectorAll('.carousel-item');
        const prevBtn = document.querySelector('.carousel-control.prev');
        const nextBtn = document.querySelector('.carousel-control.next');
        let currentIndex = 0;
        const totalItems = items.length;

        function updateCarousel() {
          carousel.style.transform = \`translateX(-\${currentIndex * 100}%)\`;
        }

        nextBtn.addEventListener('click', () => {
          currentIndex = (currentIndex + 1) % totalItems;
          updateCarousel();
        });

        prevBtn.addEventListener('click', () => {
          currentIndex = (currentIndex - 1 + totalItems) % totalItems;
          updateCarousel();
        });

        // Cambio automático cada 5 segundos
        setInterval(() => {
          currentIndex = (currentIndex + 1) % totalItems;
          updateCarousel();
        }, 5000);
        // Nueva funcionalidad para los botones de descarga
        const downloadButtons = document.querySelectorAll('.download-btn');
        const overlay = document.getElementById('overlay');
        const confirmationDialog = document.getElementById('confirmationDialog');
        const confirmDownloadBtn = document.getElementById('confirmDownload');
        const cancelDownloadBtn = document.getElementById('cancelDownload');
        
        let currentDownloadUrl = '';

        downloadButtons.forEach(button => {
          button.addEventListener('click', function() {
            // Cambiar estilo del botón
            downloadButtons.forEach(btn => btn.classList.remove('selected'));
            this.classList.add('selected');
            
            // Mostrar diálogo de confirmación
            currentDownloadUrl = this.getAttribute('data-url');
            overlay.style.display = 'block';
            confirmationDialog.style.display = 'block';
          });
        });

        confirmDownloadBtn.addEventListener('click', function() {
          // Redirigir a la URL de descarga
          window.open(currentDownloadUrl, '_blank');
          
          // Ocultar diálogo
          overlay.style.display = 'none';
          confirmationDialog.style.display = 'none';
          
          // Resetear botones
          downloadButtons.forEach(btn => btn.classList.remove('selected'));
        });

        cancelDownloadBtn.addEventListener('click', function() {
          // Ocultar diálogo
          overlay.style.display = 'none';
          confirmationDialog.style.display = 'none';
          
          // Resetear botones
          downloadButtons.forEach(btn => btn.classList.remove('selected'));
        });

        overlay.addEventListener('click', function() {
          // Ocultar diálogo al hacer clic fuera
          overlay.style.display = 'none';
          confirmationDialog.style.display = 'none';
          
          // Resetear botones
          downloadButtons.forEach(btn => btn.classList.remove('selected'));
        });
      </script>
    </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`Servidor en http://localhost:${PORT}`);
});