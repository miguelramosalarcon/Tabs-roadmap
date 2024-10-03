const tabs = document.querySelectorAll('.tab__button');
const contents = document.querySelectorAll('.content');

// Función para manejar el cambio de tabs
tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        // Remover la clase 'active' de todos los tabs y contenidos
        tabs.forEach(t => t.classList.remove('active'));
        contents.forEach(c => c.classList.remove('active'));

        // Añadir la clase 'active' al tab y contenido correspondiente
        tab.classList.add('active');
        contents[index].classList.add('active');
    });
});

// Marcar el primer tab y contenido como activos al cargar la página
tabs[0].classList.add('active');
contents[0].classList.add('active');
