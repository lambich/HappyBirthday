document.addEventListener('DOMContentLoaded', function () {
    var card = document.querySelector('.card');
    var cardInner = card.querySelector('.card-inner');
    var flipped = false;  // State to track whether the card is flipped
    var canFlip = false;  // Control flag to enable flipping

    function addFlipEvents() {
        card.addEventListener('mouseenter', function() {
            if (!flipped && canFlip) {  // Check if flipping is enabled
                cardInner.style.transform = 'rotateY(180deg)';
                flipped = true;
            }
        });

        card.addEventListener('mouseleave', function() {
            if (flipped && canFlip) {
                cardInner.style.transform = 'rotateY(0deg)';
                flipped = false;
            }
        });

        card.addEventListener('touchstart', function() {
            if (!flipped && canFlip) {  // For touch devices
                cardInner.style.transform = 'rotateY(180deg)';
                flipped = true;
            }
        });

        card.addEventListener('touchend', function() {
            if (flipped && canFlip) {
                cardInner.style.transform = 'rotateY(0deg)';
                flipped = false;
            }
        });
    }

    function enableFlip() {
        canFlip = true;
    }

    window.onload = function() {
        function showCard() {
            var name = document.getElementById("nameInput").value;
            if (name.trim() !== "") {
                document.getElementById("dynamicName").textContent = name;
                document.querySelector(".card-inner").style.display = "block";
                document.querySelector(".card-input").style.display = "none";

                if (document.activeElement) {
                    document.activeElement.blur();
                }

                setTimeout(enableFlip, 1000); // Delay flip enabling for 1 second
            } else {
                alert("Please enter a name.");
            }
        }

        document.getElementById("enterButton").onclick = showCard;

        addFlipEvents(); // Add events initially but flipping is controlled by `canFlip`
    }
});
