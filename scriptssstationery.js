document.addEventListener('DOMContentLoaded', (event) => {
    const form = document.getElementById('stationeryForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        // Form validation
        const category = document.querySelectorAll('input[name="category[]"]:checked');
        const stationeryName = document.getElementById('stationeryName').value.trim();
        const stationeryDescription = document.getElementById('stationeryDescription').value.trim();
        const pickupDate = document.getElementById('pickupDate').value;
        const stationeryImage = document.getElementById('stationeryImage').files[0];

        if (category.length === 0) {
            alert('Please select at least one category.');
            return;
        }

        if (stationeryName === '') {
            alert('Please enter the stationery name.');
            return;
        }

        if (stationeryDescription === '') {
            alert('Please enter the stationery description.');
            return;
        }

        if (pickupDate === '') {
            alert('Please select a pickup date.');
            return;
        }

        if (!stationeryImage) {
            alert('Please upload a stationery image.');
            return;
        }

        // Display confirmation message
        alert('Form submitted successfully!');

        // You can add additional code here to handle the form data, such as sending it to a server

        // Reset the form after successful submission
        form.reset();
    });
});
