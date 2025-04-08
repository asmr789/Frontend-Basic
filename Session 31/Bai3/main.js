const squares = document.querySelectorAll('.square');

squares.forEach(square => {
    square.addEventListener('click', () => {
        const color = square.getAttribute('data-color');
        document.body.style.backgroundColor = color;
    });
});