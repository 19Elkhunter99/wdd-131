// Spotlight Data
const huntingSpots = [
    { name: 'Salmon River', game: 'Elk, Deer', bestSeason: 'Fall' },
    { name: 'Sawtooth Wilderness', game: 'Mountain Lion', bestSeason: 'Winter' },
    { name: 'Boise National Forest', game: 'Turkey, Bear', bestSeason: 'Spring' }
  ];
  
  const spotlightDiv = document.getElementById('spotlight');
  
  // Dynamic Content
  huntingSpots.forEach(spot => {
    const spotElement = document.createElement('div');
    spotElement.className = 'spotlight-item';
    spotElement.innerHTML = `
      <h3>${spot.name}</h3>
      <p><strong>Game:</strong> ${spot.game}</p>
      <p><strong>Best Season:</strong> ${spot.bestSeason}</p>
    `;
    spotlightDiv.appendChild(spotElement);
  });
  