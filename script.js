document.addEventListener('DOMContentLoaded', function () {
    // Selectors
    const searchInput = document.querySelector('.search-input');
    const searchButton = document.querySelector('.search-icon');
    const addressElement = document.querySelector('.add-2');
    const signInElement = document.querySelector('.nav-signin');
    const cartElement = document.querySelector('.nav-cart');
    const panelAll = document.querySelector('.panel-all');
    const panelDropdown = document.createElement('div');
    
    // Create elements
    const cartCount = document.createElement('span');
    cartCount.classList.add('cart-count');
    cartCount.textContent = 0;
    cartElement.appendChild(cartCount);

    // Handle search
    function handleSearch() {
        const query = searchInput.value.trim();
        if (query) {
            alert(`Searching for: ${query}`);
            
        } else {
            alert('Please enter a search term.');
        }
    }

    // Handle address change
    function handleChangeAddress() {
        const newAddress = prompt('Enter your delivery address:');
        if (newAddress) {
            addressElement.textContent = newAddress;
        }
    }

    // Handle sign-in click
    function handleSignIn() {
        alert('Redirecting to the sign-in page...');
       
    }

    // Create account dropdown
    function createAccountDropdown() {
        const dropdownMenu = document.createElement('div');
        dropdownMenu.classList.add('dropdown-menu');
        dropdownMenu.innerHTML = `
            <ul>
                <li><a href="#">Your Account</a></li>
                <li><a href="#">Your Orders</a></li>
                <li><a href="#">Your Wishlist</a></li>
                <li><a href="#">Sign Out</a></li>
            </ul>
        `;
        return dropdownMenu;
    }

    // Toggle account dropdown
    function toggleAccountDropdown(show) {
        let dropdownMenu = signInElement.querySelector('.dropdown-menu');
        if (show && !dropdownMenu) {
            dropdownMenu = createAccountDropdown();
            signInElement.appendChild(dropdownMenu);
        } else if (!show && dropdownMenu) {
            dropdownMenu.remove();
        }
    }

    // Create and toggle panel dropdown
    function togglePanelDropdown() {
        if (panelDropdown.classList.contains('active')) {
            panelDropdown.classList.remove('active');
            panelDropdown.innerHTML = '';
        } else {
            panelDropdown.classList.add('active');
            panelDropdown.innerHTML = `
                <ul>
                    <li><a href="#">All Categories</a></li>
                    <li><a href="#">Electronics</a></li>
                    <li><a href="#">Books</a></li>
                    <li><a href="#">Fashion</a></li>
                    <li><a href="#">Home & Kitchen</a></li>
                    <li><a href="#">Beauty & Health</a></li>
                </ul>
            `;
            panelAll.appendChild(panelDropdown);
        }
    }

    // Hide panel dropdown when clicking outside
    function handleClickOutside(event) {
        if (!panelAll.contains(event.target) && panelDropdown.classList.contains('active')) {
            panelDropdown.classList.remove('active');
            panelDropdown.innerHTML = '';
        }
    }

    // Back to Top button
    function initializeBackToTopButton() {
        const backToTopButton = document.createElement('button');
        backToTopButton.textContent = 'Back to Top';
        backToTopButton.classList.add('back-to-top');
        document.body.appendChild(backToTopButton);

        backToTopButton.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });

        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTopButton.classList.add('visible');
            } else {
                backToTopButton.classList.remove('visible');
            }
        });
    }

    // Event Listeners
    searchButton.addEventListener('click', handleSearch);
    addressElement.addEventListener('click', handleChangeAddress);
    signInElement.addEventListener('click', handleSignIn);
    signInElement.addEventListener('mouseenter', () => toggleAccountDropdown(true));
    signInElement.addEventListener('mouseleave', () => toggleAccountDropdown(false));
    panelAll.addEventListener('click', togglePanelDropdown);
    document.addEventListener('click', handleClickOutside);

    // Initialize cart count and Back to Top button
    initializeBackToTopButton();
});
