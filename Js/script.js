document.addEventListener('DOMContentLoaded', function () {
    var card = document.querySelector('.card');
    var cardInner = card.querySelector('.card-inner');
    var flipped = false;  // State to track whether the card is flipped

    card.addEventListener('mouseenter', function() {
        // Flip to the opposite side
        cardInner.style.transform = flipped ? 'rotateY(0deg)' : 'rotateY(180deg)';
        flipped = !flipped; // Toggle the flipped state
    });

    card.addEventListener('mouseleave', function() {
        // Flip to the opposite side
        cardInner.style.transform = flipped ? 'rotateY(0deg)' : 'rotateY(180deg)';
        flipped = !flipped; // Toggle the flipped state
    });
});
