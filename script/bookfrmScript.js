
document.addEventListener("DOMContentLoaded", function () {
    let checkinCheckoutInput = document.getElementById("checkin-checkout");

    // Initialize Flatpickr with "range" mode for check-in & check-out
    checkinCheckoutInput.flatpickr({
        mode: "range", // Allows selecting both Check-in and Check-out
        dateFormat: "Y-m-d",
        onOpen: function (selectedDates, dateStr, instance) {
            setTimeout(() => {
                let calendar = instance.calendarContainer;
                if (!calendar.querySelector(".datepicker-labels")) {
                    let labels = document.createElement("div");
                    labels.className = "datepicker-labels";
                    labels.innerHTML = `
                        <span class="checkin-label">Check-in</span>
                        <span class="checkout-label">Check-out</span>
                    `;
                    calendar.prepend(labels);
                }
            }, 10);
        }
    });

});

function PickNumberofGuest() {
    var modal = document.getElementById('num-guest-modal');
    var modalContent = document.getElementById('modal-content'); // This should be the inner part of your modal

    // Toggle the modal's visibility
    if (modal.style.display === "none" || modal.style.display === "") {
        modal.style.display = "flex";

        // Close modal if clicked outside
        document.addEventListener('click', function(event) {
            if (!modalContent.contains(event.target) && modal.style.display === "block") {
                modal.style.display = "none";
            }
        });
    } else {
        modal.style.display = "none";
    }
}


function updateValue(elementId, operation) {
    var inputElement = document.getElementById(elementId);
    var currentValue = parseInt(inputElement.value);
    var minValue = parseInt(inputElement.getAttribute('min')); 
    if (operation === 'increment') {
        inputElement.value = currentValue + 1;
    } else if (operation === 'decrement' && currentValue > minValue) {
        inputElement.value = currentValue - 1;
    }
}

function updateGuestCount() {
    // Get the values of adults and children
    var adults = document.getElementById('Adults').value;
    var children = document.getElementById('Children').value;

    var guestCountText = `Adults: ${adults}, Children: ${children}`;
    document.getElementById('num-guest-selector').value = guestCountText;
    document.getElementById('num-guest-modal').style.display = 'none';
}

function PickNumberofGuest() {
    document.getElementById('num-guest-modal').style.display = 'flex';
}

function passData() {
    event.preventDefault(); 

    const adults = document.getElementById('Adults').value || 1;
    const children = document.getElementById('Children').value || 0;
    const checkInDate = document.getElementById('checkin-date').value;
    const checkOutDate = document.getElementById('checkout-date').value;

    // Infants will be set directly in the URL as 0
    const infants = 0;  // Set directly since no input field is provided

    const baseURL = "https://book-directonline.com/properties/wynwoodhotelmaniladirect?locale=en";
    const items = `&items[0][adults]=${encodeURIComponent(adults)}&items[0][children]=${encodeURIComponent(children)}&items[0][infants]=${encodeURIComponent(infants)}`;
    const currency = "&currency=PHP";
    const trackPage = "&trackPage=yes";
    const checkInParam = "&checkInDate=" + encodeURIComponent(checkInDate);
    const checkOutParam = "&checkOutDate=" + encodeURIComponent(checkOutDate);

    const finalURL = baseURL + items + currency + trackPage + checkInParam + checkOutParam;

    window.location.href = finalURL;
}
