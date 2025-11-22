document.addEventListener('DOMContentLoaded', () => {
    // Standard input component template
    const inputComponent = (id, placeholder) => {
        return `<div class="input-group">
            <label for="${id}" class="input-label">${placeholder}</label>
            <input type="text" id="${id}" class="standard-input" 
                   placeholder="${placeholder}">
        </div>`;
    };

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