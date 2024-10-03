const services = {
    bigcash: [
        { name: 'BigCash Daily', price: '100 Naira/day' },
        { name: 'BigCash Weekly', price: '200 Naira/week' },
        { name: 'BigCash Monthly', price: '500 Naira/month' }
    ],
    // ydotgames: [
    //     { name: 'YDotGames Daily', price: '150 Naira/day' },
    //     { name: 'YDotGames Weekly', price: '300 Naira/week' },
    //     { name: 'YDotGames Monthly', price: '700 Naira/month' }
    // ],
    // onlinetrivia: [
    //     { name: 'Online Trivia Daily', price: '120 Naira/day' },
    //     { name: 'Online Trivia Weekly', price: '250 Naira/week' },
    //     { name: 'Online Trivia Monthly', price: '600 Naira/month' }
    // ],
    // fantasyfootball: [
    //     { name: 'Fantasy Football Daily', price: '130 Naira/day' },
    //     { name: 'Fantasy Football Weekly', price: '270 Naira/week' },
    //     { name: 'Fantasy Football Monthly', price: '650 Naira/month' }
    // ]
};

function selectService(service) {
    const serviceTitle = document.getElementById('serviceTitle');
    const packageList = document.getElementById('package-list');
    const packagesPage = document.getElementById('packagesPage');
    const errorMessage = document.getElementById('errorMessage');

    serviceTitle.textContent = `Choose a Package for ${service.charAt(0).toUpperCase() + service.slice(1)}`;
    packageList.innerHTML = '';
    errorMessage.classList.add('hidden');

    services[service].forEach(pkg => {
        const li = document.createElement('li');
        li.innerHTML = `<label><input type="radio" name="package" value="${pkg.name}"> ${pkg.name} - ${pkg.price}</label>`;
        packageList.appendChild(li);
    });

    document.querySelector('.container').classList.add('hidden');
    packagesPage.classList.remove('hidden');
}

document.getElementById('package-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const selectedPackage = document.querySelector('input[name="package"]:checked');
    const errorMessage = document.getElementById('errorMessage');

    if (selectedPackage) {
        errorMessage.classList.add('hidden'); // Hide error if a package is selected
        const success = Math.random() > 0.5; // Simulating success/failure with 50% chance
        if (success) {
            showModal('successModal');
        } else {
            showModal('failureModal');
        }
    } else {
        errorMessage.classList.remove('hidden'); // Show error if no package is selected
    }
});

function showModal(modalId) {
    document.getElementById(modalId).classList.remove('hidden');
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.add('hidden');
    goBack();
}

function goBack() {
    document.getElementById('packagesPage').classList.add('hidden');
    document.querySelector('.container').classList.remove('hidden');
}
