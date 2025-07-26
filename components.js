document.addEventListener('DOMContentLoaded', () => {
    const loadComponent = (url, elementId) => {
        fetch(url)
            .then(response => response.text())
            .then(data => {
                document.getElementById(elementId).innerHTML = data;
            });
    };

    loadComponent('nav.html', 'main-nav');
    loadComponent('footer.html', 'main-footer');
});