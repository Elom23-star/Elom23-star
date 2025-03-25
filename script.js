const heading = document.querySelector('header h1');
heading.addEventListener('click', () => {
    heading.textContent = "Merci de visiter mon Portfolio !";
    heading.style.color = "#ff6600"; // Change la couleur en orange
});
const messageBtn = document.getElementById('message-btn');
messageBtn.addEventListener('click', () => {
    alert("Bonjour ! Merci de visiter mon Portfolio.");
});
const footer = document.querySelector('footer');
const date = new Date();
footer.textContent += ` - Date : ${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
let score = 0;

// Sélectionne le bouton et le conteneur
const button = document.getElementById('catch-me');
const gameContainer = document.getElementById('game-container');

// Ajoute un événement au bouton
button.addEventListener('click', () => {
    // Incrémente le score
    score++;
    document.getElementById('score').textContent = Score : ${score};

    // Change la position du bouton de manière aléatoire
    const containerWidth = gameContainer.offsetWidth;
    const containerHeight = gameContainer.offsetHeight;
    const buttonWidth = button.offsetWidth;
    const buttonHeight = button.offsetHeight;

    const randomX = Math.random() * (containerWidth - buttonWidth);
    const randomY = Math.random() * (containerHeight - buttonHeight);

    button.style.left = ${randomX}px;
    button.style.top = ${randomY}px;
});

// Initialise la position du bouton
button.style.left = '50px';
button.style.top = '50px';
document.getElementById("calculate-btn").addEventListener("click", function () {
    // Récupère les valeurs saisies
    const amount = parseFloat(document.getElementById("amount").value);
    const rate = parseFloat(document.getElementById("rate").value) / 100 / 12; // Convertir en taux mensuel
    const years = parseInt(document.getElementById("years").value);
    const months = years * 12; // Convertir les années en mois

    // Vérifie si les entrées sont valides
    if (isNaN(amount) || isNaN(rate) || isNaN(months) || amount <= 0 || rate <= 0 || years <= 0) {
        document.getElementById("result").textContent = "Veuillez entrer des valeurs valides.";
        return;
    }

    // Calcule le paiement mensuel avec la formule
    const monthlyPayment = (amount * rate) / (1 - Math.pow(1 + rate, -months));

    // Affiche le résultat
    document.getElementById("result").textContent = Votre paiement mensuel est de : ${monthlyPayment.toFixed(2)} €;
});
console.log("Le bouton est cliqué"); // Test lors du clic