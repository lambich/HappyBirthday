document.addEventListener('DOMContentLoaded', function() {
    var card = document.querySelector('.card');
    var cardInner = card.querySelector('.card-inner');
    var flipped = false;  // State to track whether the card is flipped

    function toggleFlip() {
        if (!flipped) {
            cardInner.style.transform = 'rotateY(180deg)';
            flipped = true;
        } else {
            cardInner.style.transform = 'rotateY(0deg)';
            flipped = false;
        }
    }

    // Event listener for tapping on the card
    card.addEventListener('click', function(event) {
        toggleFlip();
        event.stopPropagation(); // Stop the event from bubbling up
    });

    // Event listener for tapping outside the card to unflip it
    document.addEventListener('click', function() {
        if (flipped) {
            cardInner.style.transform = 'rotateY(0deg)';
            flipped = false;
        }
    });

    window.onload = function() {
        function showCard() {
            var name = document.getElementById("nameInput").value;
            if (name.trim() !== "") {
                document.getElementById("dynamicName").textContent = name;
                document.getElementById("dynamicName").style.color = "Red";
                document.querySelector(".card-inner").style.display = "block";
                document.querySelector(".card-input").style.display = "none";

                if (document.activeElement) {
                    document.activeElement.blur();
                }
            } else {
                alert("Please enter a name.");
            }
        }

        document.getElementById("enterButton").onclick = showCard;
    }
});
