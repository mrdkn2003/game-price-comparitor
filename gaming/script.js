// script.js
import { games } from './data.js';

document.addEventListener('DOMContentLoaded', () => {
  const grid = document.querySelector('.grid');
  const type = document.body.dataset.type;

  const searchInput = document.createElement('input');
  searchInput.type = 'text';
  searchInput.placeholder = 'Search games...';
  searchInput.style = 'margin: 20px auto; display: block; padding: 10px; width: 80%; max-width: 400px; border-radius: 8px; border: none; outline: none;';

  document.querySelector('main').prepend(searchInput);

  const renderGames = (filter = '') => {
    grid.innerHTML = '';
    const filteredGames = games.filter(game => game.type === type && game.title.toLowerCase().includes(filter.toLowerCase()));

    filteredGames.forEach(game => {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <h3>${game.title}</h3>
        <p><span class="price-label">Steam:</span> ${game.steamPrice}</p>
        <p><span class="price-label">Epic:</span> ${game.epicPrice}</p>
        <p>Views: ${game.views}</p>
        <p>Likes: ${game.likes}</p>
      `;
      card.onclick = () => {
        localStorage.setItem('selectedGameId', game.id);
        window.location.href = 'game-detail.html';
      };
      grid.appendChild(card);
    });
  };

  renderGames();

  searchInput.addEventListener('input', () => {
    renderGames(searchInput.value);
  });
});
