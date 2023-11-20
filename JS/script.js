document.addEventListener("DOMContentLoaded", function () {
    const studentInfo = document.createElement("p");
    studentInfo.textContent = "Student ID: 200544014 | Name: Aryan Ukani";
    document.body.appendChild(studentInfo);

    const form = document.querySelector("form");
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevents the default form submission behavior

        // Capture values from each form input
        const firstName = document.querySelector('input[placeholder="First Name"]').value;
        const lastName = document.querySelector('input[placeholder="Last Name"]').value;
        const contact = document.querySelector('input[name="Contact"]').value;
        const email = document.querySelector('input[name="email"]').value;
        const pizzaSize = document.querySelector('#size').value;
        const toppings = Array.from(document.querySelectorAll('input[name="toppings[]"]:checked')).map(checkbox => checkbox.value);
        const sauce = document.querySelector('input[name="Sauce"]:checked').nextSibling.nodeValue.trim();
        const quantity = document.querySelector('input[placeholder="example:1"]').value;
        const instructions = document.querySelector('textarea[name="instructions"]').value;

        // Create a Pizza object
        const pizza = new Pizza(firstName, lastName, contact, email, pizzaSize, toppings, sauce, quantity, instructions);

        // Display the pizza description on the HTML page
        const pizzaDescription = document.createElement("div");
        pizzaDescription.innerHTML = `
            <h2>Your Pizza Order:</h2>
            <p><strong>Name:</strong> ${pizza.getFullName()}</p>
            <p><strong>Contact:</strong> ${pizza.contact}</p>
            <p><strong>Email:</strong> ${pizza.email}</p>
            <p><strong>Pizza Size:</strong> ${pizza.pizzaSize}</p>
            <p><strong>Toppings:</strong> ${pizza.toppings.join(", ")}</p>
            <p><strong>Sauce:</strong> ${pizza.sauce}</p>
            <p><strong>Quantity:</strong> ${pizza.quantity}</p>
            <p><strong>Special Instructions:</strong> ${pizza.instructions}</p>
        `;

        document.body.appendChild(pizzaDescription);
    });

    // Pizza class definition
    class Pizza {
        constructor(firstName, lastName, contact, email, pizzaSize, toppings, sauce, quantity, instructions) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.contact = contact;
            this.email = email;
            this.pizzaSize = pizzaSize;
            this.toppings = toppings;
            this.sauce = sauce;
            this.quantity = quantity;
            this.instructions = instructions;
        }

        getFullName() {
            return `${this.firstName} ${this.lastName}`;
        }
    }
});
