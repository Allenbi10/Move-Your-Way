const activities = [
  { name: 'Go for a walk', icon: '🚶', color: '#d8ed5b', categories: ['chill', 'outside'], description: 'Take a short walk, explore a familiar route, or walk while you listen to something.' },
  { name: 'Stretch it out', icon: '🧘', color: '#cfc5f8', categories: ['chill'], description: 'Try a few easy stretches between classes, after waking up, or before bed.' },
  { name: 'Dance alone', icon: '🪩', color: '#ff755d', categories: ['groove', 'chill'], description: 'Put on a song you like and move along in whatever way feels natural.' },
  { name: 'Cruise around', icon: '🛹', color: '#bce9df', categories: ['outside'], description: 'Skate, scoot, or roll around the neighborhood at a comfortable pace.' },
  { name: 'Bike adventure', icon: '🚲', color: '#ffce4b', categories: ['outside'], description: 'Ride a familiar route or take a turn down a street you have not tried yet.' },
  { name: 'Room yoga', icon: '🌈', color: '#cfc5f8', categories: ['chill'], description: 'Try a few simple yoga poses in the space you already have.' },
  { name: 'Shoot hoops', icon: '🏀', color: '#ff755d', categories: ['outside'], description: 'Practice a few shots or dribble around without keeping score.' },
  { name: 'Roller skate', icon: '🛼', color: '#bce9df', categories: ['groove', 'outside'], description: 'Find a smooth, safe place to skate and practice moving at your own pace.' },
  { name: 'Jump rope', icon: '〰️', color: '#d8ed5b', categories: ['outside'], description: 'Try a few jumps at a time and take breaks whenever you need them.' },
  { name: 'Make a playlist walk', icon: '🎧', color: '#ffce4b', categories: ['chill', 'outside'], description: 'Choose a few songs and take a walk that lasts about as long as the playlist.' },
  { name: 'Frisbee toss', icon: '🥏', color: '#bce9df', categories: ['outside'], description: 'Toss a frisbee with a friend, sibling, or anyone who wants to join.' },
  { name: 'Thrift-store stroll', icon: '🧢', color: '#cfc5f8', categories: ['chill', 'outside'], description: 'Walk through a thrift store and take your time looking around.' },
  { name: 'Follow-along dance', icon: '💃', color: '#ff755d', categories: ['groove'], description: 'Follow a short dance tutorial and focus on learning the sequence.' },
  { name: 'Water balloon toss', icon: '💧', color: '#d8ed5b', categories: ['outside'], description: 'Toss water balloons back and forth outside on a warm day.' },
  { name: 'Clean to a song', icon: '🧹', color: '#ffce4b', categories: ['groove', 'chill'], description: 'Put on one song and tidy one small area while it plays.' },
  { name: 'Rock hop', icon: '🐸', color: '#bce9df', categories: ['outside'], description: 'Find a safe path of cracks, tiles, or stepping stones.' },
  { name: 'Build a blanket fort', icon: '⛺', color: '#cfc5f8', categories: ['chill'], description: 'Build a small fort, move around the room, then use it as a place to relax.' },
  { name: 'Shadow boxing', icon: '🥊', color: '#ff755d', categories: ['groove'], description: 'Practice a few controlled punches in the air and focus on your footwork.' },
  { name: 'Sunset wander', icon: '🌇', color: '#ffce4b', categories: ['chill', 'outside'], description: 'Take a walk around sunset and notice how the light changes.' },
  { name: 'Play tag', icon: '🏃', color: '#d8ed5b', categories: ['outside'], description: 'Play a short game with friends and make up rules that keep it moving.' },
  { name: 'Hula hoop', icon: '⭕', color: '#bce9df', categories: ['groove', 'outside'], description: 'Practice keeping the hoop moving for as long as feels comfortable.' },
  { name: 'Pillow fight', icon: '🛏️', color: '#cfc5f8', categories: ['chill'], description: 'A short, low-impact way to move around with a friend or sibling.' },
  { name: 'Climb something', icon: '🧗', color: '#ff755d', categories: ['outside'], description: 'A climbing wall, a jungle gym, or a sturdy set of stairs.' },
  { name: 'Water the plants', icon: '🪴', color: '#d8ed5b', categories: ['chill'], description: 'Walk around the room and water your plants.' },
  { name: 'Sidewalk chalk', icon: '🖍️', color: '#ffce4b', categories: ['chill', 'outside'], description: 'Draw a path, a hopscotch grid, or whatever comes to mind.' },
  { name: 'Mini golf', icon: '⛳', color: '#bce9df', categories: ['outside'], description: 'Walk between holes, line up a few shots, and play at your own pace.' },
  { name: 'Play with your pet', icon: '🐕', color: '#cfc5f8', categories: ['chill', 'outside'], description: 'Fetch, chase, or simply follow them around the house.' },
  { name: 'Make a music video', icon: '📹', color: '#ff755d', categories: ['groove'], description: 'Plan a short sequence to a song and record it if you want to.' },
  { name: 'Staircase laps', icon: '🌀', color: '#d8ed5b', categories: ['chill'], description: 'Walk up and down a flight of stairs for a few minutes, taking breaks as needed.' },
  { name: 'Explore a market', icon: '🍓', color: '#ffce4b', categories: ['chill', 'outside'], description: 'Walk through a market, look around, and carry a few things home.' },
  { name: 'Freeze dance', icon: '🕺', color: '#bce9df', categories: ['groove'], description: 'Move while the music plays and pause when it stops.' },
  { name: 'Skip somewhere', icon: '🦘', color: '#cfc5f8', categories: ['outside', 'groove'], description: 'Try skipping for part of a familiar route and switch back to walking when you want.' },
];

const grid = document.querySelector('#card-grid');
const startDoors = document.querySelectorAll('.start-door');

function renderCards(filter = 'all') {
  grid.innerHTML = '';
  activities.forEach((activity, index) => {
    const visible = filter === 'all' || activity.categories.includes(filter);
    if (!visible) return;
    const card = document.createElement('article');
    card.className = 'move-card';
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'button');
    card.setAttribute('aria-label', `${activity.name}. Flip for details.`);
    card.innerHTML = `<div class="card-inner">
      <div class="card-face card-front" style="--card-color: ${activity.color}">
        <span class="card-number">${String(index + 1).padStart(2, '0')}</span>
        <span class="card-icon" aria-hidden="true">${activity.icon}</span>
        <strong class="card-name">${activity.name}</strong>
        <span class="flip-hint">flip me</span>
      </div>
      <div class="card-face card-back">
        <span class="back-label">A little idea</span>
        <p>${activity.description}</p>
        <span class="back-arrow" aria-hidden="true">↗</span>
      </div>
    </div>`;
    card.addEventListener('click', () => card.classList.toggle('flipped'));
    card.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); card.classList.toggle('flipped'); }
    });
    grid.appendChild(card);
  });
}

startDoors.forEach((door) => door.addEventListener('click', () => {
  const filter = door.dataset.filter;
  renderCards(filter);
  document.querySelector('#card-grid').scrollIntoView({ behavior: 'smooth', block: 'start' });
}));

document.querySelector('#shuffle-button').addEventListener('click', () => {
  const cards = [...grid.children];
  cards.forEach((card) => card.classList.remove('flipped'));
  cards.sort(() => Math.random() - 0.5).forEach((card) => grid.appendChild(card));
});

renderCards();
