function toggleText() {
    const fullText = document.getElementById('fullText');
    const toggleBtn = document.getElementById('toggleBtn');

    if (fullText.classList.contains('active')) {
        fullText.classList.remove('active');
        toggleBtn.textContent = 'Voir plus';
    } else {
        fullText.classList.add('active');
        toggleBtn.textContent = 'Voir moins';
    }
}