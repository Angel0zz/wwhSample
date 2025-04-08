document.addEventListener("DOMContentLoaded", function () {
    let checkinCheckoutInput = document.getElementById("checkin-checkout");
    let checkInDateInput = document.getElementById("checkInDate");
    let checkOutDateInput = document.getElementById("checkOutDate");

   
    checkinCheckoutInput.flatpickr({
        mode: "range", // Allows selecting both Check-in and Check-out
        dateFormat: "Y-m-d",
        onChange: function (selectedDates, dateStr, instance) {
            // Update the values of check-in and check-out date inputs
            if (selectedDates.length === 2) {
                // Manually adjust the date to local timezone to prevent offset issues
                let checkInDate = new Date(selectedDates[0]);
                let checkOutDate = new Date(selectedDates[1]);

                // Format the dates to YYYY-MM-DD
                checkInDateInput.value = formatDate(checkInDate);
                checkOutDateInput.value = formatDate(checkOutDate);
            }
        },
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

    // Function to format the date to YYYY-MM-DD
    function formatDate(date) {
        let day = ("0" + date.getDate()).slice(-2);  // Ensure two digits for day
        let month = ("0" + (date.getMonth() + 1)).slice(-2);  // Ensure two digits for month
        let year = date.getFullYear();

        return `${year}-${month}-${day}`;
    }
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


