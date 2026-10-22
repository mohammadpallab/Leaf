document.addEventListener('DOMContentLoaded', () => {
    // Hire button click interaction
    const hireBtn = document.getElementById('hireBtn');
    if (hireBtn) {
        hireBtn.addEventListener('click', () => {
            alert('Welcome to Hyre! We will help you find the best candidates.');
        });
    }

    // Pill cards interactive alert on click
    const pillCards = document.querySelectorAll('.pill-card');
    pillCards.forEach(card => {
        card.addEventListener('click', () => {
            const name = card.querySelector('h4').innerText;
            const role = card.querySelector('p').innerText;
            alert(`You selected candidate: ${name} (${role})`);
        });
    });
});
