document.getElementById('search-input').addEventListener('input', function() {
    const query = this.value.toLowerCase().trim();
    let results = [];

    if (query === 'beach') {
        results = ['Beautiful Beach 1', 'Amazing Beach 2'];
    } else if (query === 'temple') {
        results = ['Ancient Temple 1', 'Majestic Temple 2'];
    } else if (query === 'country') {
        results = ['Beautiful Country 1', 'Amazing Country 2'];
    } else {
        results = [];
    }

    displayDropdownResults(results);
});

document.getElementById('search-button').addEventListener('click', function() {
    const query = document.getElementById('search-input').value.toLowerCase().trim();

    if (query === 'beach') {
        showBeachRecommendations();
    } else if (query === 'temple') {
        showTempleRecommendations();
    } else if (query === 'country') {
        showCountryRecommendations();
    } else {
        alert('No recommendations found for this search term.');
    }
});

function showBeachRecommendations() {
    const beachRecommendations = [
        {
            name: 'Beautiful Beach 1',
            image: 'image/Beach1.jpg',
            description: 'Description of Beautiful Beach 1'
        },
        {
            name: 'Amazing Beach 2',
            image: 'image/beach2.jpg',
            description: 'Description of Amazing Beach 2'
        }
    ];

    displayRecommendations(beachRecommendations);
}

function showTempleRecommendations() {
    const templeRecommendations = [
        {
            name: 'Ancient Temple 1',
            image: 'path_to_image3.jpg',
            description: 'Description of Ancient Temple 1'
        },
        {
            name: 'Majestic Temple 2',
            image: 'path_to_image4.jpg',
            description: 'Description of Majestic Temple 2'
        }
    ];

    displayRecommendations(templeRecommendations);
}

function showCountryRecommendations() {
    const countryRecommendations = [
        {
            name: 'Beautiful Country 1',
            image: 'path_to_image5.jpg',
            description: 'Description of Beautiful Country 1'
        },
        {
            name: 'Amazing Country 2',
            image: 'path_to_image6.jpg',
            description: 'Description of Amazing Country 2'
        }
    ];

    displayRecommendations(countryRecommendations);
}

function displayRecommendations(recommendations) {
    const searchResults = document.getElementById('search-results');
    searchResults.innerHTML = '';

    recommendations.forEach(item => {
        const recommendationDiv = document.createElement('div');
        recommendationDiv.classList.add('recommendation');

        const heading = document.createElement('h2');
        heading.textContent = item.name;

        const image = document.createElement('img');
        image.src = item.image;
        image.alt = item.name;

        const paragraph = document.createElement('p');
        paragraph.textContent = item.description;

        recommendationDiv.appendChild(heading);
        recommendationDiv.appendChild(image);
        recommendationDiv.appendChild(paragraph);

        searchResults.appendChild(recommendationDiv);
    });
}

function displayDropdownResults(results) {
    const searchResultsContainer = document.getElementById('search-results');
    if (results.length > 0) {
        searchResultsContainer.style.display = 'block';
        searchResultsContainer.innerHTML = '<ul>' + results.map(item => `<li>${item}</li>`).join('') + '</ul>';
    } else {
        searchResultsContainer.style.display = 'none';
        searchResultsContainer.innerHTML = '';
    }
}

document.getElementById('clear-button').addEventListener('click', function() {
    document.getElementById('search-input').value = '';
    displayDropdownResults([]);
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    alert(`Thank you, ${name}. We have received your message.`);
});

// Optional: Close the dropdown if clicking outside of it
document.addEventListener('click', function(event) {
    if (!document.querySelector('.search-container').contains(event.target)) {
        document.getElementById('search-results').style.display = 'none';
    }
});
