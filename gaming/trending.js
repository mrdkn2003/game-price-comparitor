// trending.js
import { games } from './data.js';

document.addEventListener('DOMContentLoaded', () => {
  const trendingGames = games.filter(game => game.type === 'trending');
  const container = document.getElementById('game-list');

  trendingGames.forEach(game => {
    const card = document.createElement('div');
    card.className = 'game-card';

    card.innerHTML = `
      <img src="images/${game.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}.webp" alt="${game.title}" class="game-img" />
      <div class="game-info">
        <h3>${game.title}</h3>
        <p><strong>Genre:</strong> ${game.genre}</p>
        <p><strong>Platform:</strong> ${game.platform.join(', ')}</p>
        <p><strong>Views:</strong> ${game.views}</p>
        <p><strong>Likes:</strong> ${game.likes}</p>
        <p><strong>Steam:</strong> <a href="${game.steamLink}" target="_blank" class="price-link">${game.steamPrice}</a></p>
        <p><strong>Epic:</strong> <a href="${game.epicLink}" target="_blank" class="price-link">${game.epicPrice}</a></p>
        <button data-id="${game.id}" class="detail-button">View Details</button>
      </div>
    `;

    container.appendChild(card);
  });

  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('detail-button')) {
      const gameId = e.target.getAttribute('data-id');
      localStorage.setItem('selectedGameId', gameId);
      window.location.href = 'game-detail.html';
    }
  });
});
