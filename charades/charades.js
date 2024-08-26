import { moviesData } from './data/moviesData.js';
import { animalsData } from './data/animals.js';
import { professionsData } from './data/professions.js';
import { sportsData } from './data/sports.js';
import { objectsData } from './data/objects.js';
import { superherosData } from './data/superheros.js';

// Importa los datos de otras categorías aquí

const categories = {
    'movies-btn': moviesData,
    'animals-btn': animalsData,
    'professions-btn': professionsData,
		'sports-btn': sportsData,
		'objects-btn': objectsData,
		'superheros-btn': superherosData,
};

const buttons = document.querySelectorAll('.grid-item button');
const categoriesDiv = document.querySelector('.categories');
const screenDiv = document.querySelector('.screen');
const screenTitle = document.getElementById('screen-title');
const screenImage = document.getElementById('screen-image');
const categoryTitle = document.getElementById('category-title');
const backButton = document.getElementById('back');
const nextButton = document.getElementById('next');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const categoryData = categories[button.classList[0]];
        if (categoryData) {
            // Oculta las categorías y muestra el contenido en la pantalla
            categoriesDiv.style.display = 'none';
            screenDiv.style.display = 'flex';
						backButton.style.display = 'block';
						nextButton.style.display = 'block';
						
            screenImage.style.display = 'block';
						if ( button.classList[0] === 'movies-btn' ) {
							categoryTitle.textContent = 'MOVIES';
						}else if ( button.classList[0] === 'animals-btn' ) {
							categoryTitle.textContent = 'ANIMALS';
						}else if ( button.classList[0] === 'professions-btn' ) {
							categoryTitle.textContent = 'PROFESSIONS';
						}else if ( button.classList[0] === 'objects-btn' ) {
							categoryTitle.textContent = 'OBJECTS';
						}else if ( button.classList[0] === 'sports-btn' ) {
							categoryTitle.textContent = 'SPORTS';
						}else if ( button.classList[0] === 'superheros-btn' ) {
							categoryTitle.textContent = 'SUPERHEROS';
						}

						play();
        }
    });
});

backButton.addEventListener('click', () => {
    screenDiv.style.display = 'none';
    categoriesDiv.style.display = 'flex';

});

nextButton.addEventListener('click', () => {
	play();
});

const getRandomIndex = (max) => {
		return Math.floor(Math.random() * max);
};

const getRandomData = (categoryData) => {
		const randomIndex = getRandomIndex(categoryData.length);
		return categoryData[randomIndex];
};

const updateScreen = (categoryData) => {
		screenTitle.textContent = categoryData.title;
		screenImage.src = categoryData.image;
};

const play = () =>{
		const categoryData = getRandomData(categories[categoryTitle.textContent.toLowerCase() + '-btn']);
		updateScreen(categoryData);
}