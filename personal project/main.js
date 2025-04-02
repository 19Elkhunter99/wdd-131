// Toggle Tips Section
const toggleTipsButton = document.getElementById('toggleTips');
const tipsDiv = document.getElementById('tips');

toggleTipsButton.addEventListener('click', () => {
  tipsDiv.classList.toggle('hidden');
  toggleTipsButton.textContent = tipsDiv.classList.contains('hidden') ? 'Show Hunting Tips' : 'Hide Hunting Tips';
});
