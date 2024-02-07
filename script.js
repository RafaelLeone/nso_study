const gamesWithImages = [
    { name: "Super Mario World", image: "img/mario_world.png", minutesPlayed: 120 },
    { name: "The Legend of Zelda: A Link to the Past", image: "img/zelda.png", minutesPlayed: 60 },
    { name: "Donkey Kong Country", image: "img/dkc.png", minutesPlayed: 120 },
    { name: "Star Fox", image: "img/star_fox.png", minutesPlayed: 30 },
    { name: "F-Zero", image: "img/f0.png", minutesPlayed: 40 },
    { name: "Super Metroid", image: "img/metroid.png", minutesPlayed: 45 },
    { name: "Super Mario Kart", image: "img/mario_kart.png", minutesPlayed: 180 },
    { name: "Super Mario World 2: Yoshi's Island", image: "img/yoshi_island.png", minutesPlayed: 20 },
    { name: "Kirby Super Star", image: "img/kirby_super_star.png", minutesPlayed: 5 },
    { name: "Kirby's Dream Course", image: "img/kirby_dream_course.png", minutesPlayed: 90 },
    // Add more games and images as needed
];

let sortedGames = gamesWithImages.slice();  // Default order

const gameGrid = document.getElementById("gameGrid");
const selectedGame = document.getElementById("selectedGame");
const toggleAlphabetical = document.getElementById("toggleAlphabetical");
const toggleDefault = document.getElementById("toggleDefault");
const toggleByMinutes = document.getElementById("toggleByMinutes");

function updateGameGrid() {
    // Clear existing content
    gameGrid.innerHTML = "";

    // Display games based on the current order
    sortedGames.forEach((game) => {
        const gameDiv = document.createElement("div");
        gameDiv.classList.add("gameLabel");

        const image = document.createElement("img");
        image.src = game.image;
        image.alt = game.name;
        image.classList.add("gameImage");

        const minutesPlayedBox = document.createElement("div");
        minutesPlayedBox.classList.add("minutesPlayedBox");
        minutesPlayedBox.textContent = `${game.minutesPlayed} min`;

        gameDiv.appendChild(image);
        gameDiv.appendChild(minutesPlayedBox);
        gameGrid.appendChild(gameDiv);

        // Trigger reflow to apply initial styles before adding the "loaded" class
        gameDiv.offsetHeight;

        // Add the "loaded" class to start the transition
        gameDiv.classList.add("loaded");

        image.addEventListener("click", () => {
            selectedGame.textContent = `${game.name}`;
        });
    });
}

// Toggle alphabetical order
toggleAlphabetical.addEventListener("click", () => {
    sortedGames = sortedGames.sort((a, b) => a.name.localeCompare(b.name));
    updateGameGrid();
});

// Toggle default order
toggleDefault.addEventListener("click", () => {
    // Reset to the original order
    sortedGames = gamesWithImages.slice();
    updateGameGrid();
});

// Toggle by minutes played order (display games played more often first)
toggleByMinutes.addEventListener("click", () => {
    sortedGames = sortedGames.sort((a, b) => b.minutesPlayed - a.minutesPlayed);
    updateGameGrid();
});

// Initial rendering
updateGameGrid();
