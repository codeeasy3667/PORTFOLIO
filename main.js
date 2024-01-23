// Add this JavaScript code at the end of your existing main.js

document.addEventListener('DOMContentLoaded', function () {
    // Toggle the visibility of the menu list for smaller screens
    const menuIcon = document.getElementById('menu-icon');
    const menuList = document.getElementById('menu-list');

    menuIcon.addEventListener('click', function () {
        menuList.classList.toggle('active');
        
    });
});

