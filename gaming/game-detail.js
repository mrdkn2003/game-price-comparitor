// game-detail.js
import { games } from './data.js';

document.addEventListener('DOMContentLoaded', () => {
  const gameId = localStorage.getItem('selectedGameId');
  const game = games.find(g => g.id == gameId);

  if (!game) return;

  const container = document.getElementById('game-detail');

  const reviewsHtml = game.reviews.map(r => `<li>${r}</li>`).join('');

  container.innerHTML = `
    <div class="detail-card">
      <img src="images/${game.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}.webp" alt="${game.title}" class="detail-img" />
      <div class="detail-info">
        <h2>${game.title}</h2>
        <p><strong>Genre:</strong> ${game.genre}</p>
        <p><strong>Platform:</strong> ${game.platform.join(', ')}</p>
        <p><strong>Views:</strong> ${game.views}</p>
        <p><strong>Likes:</strong> ${game.likes}</p>
        <h3>User Reviews:</h3>
        <ul class="review-list">${reviewsHtml}</ul>
        <div class="buy-buttons">
          <a href="${game.steamLink}" target="_blank" class="buy-btn">Steam - ${game.steamPrice}</a>
          <a href="${game.epicLink}" target="_blank" class="buy-btn">Epic - ${game.epicPrice}</a>
        </div>
      </div>
    </div>
  `;
});
