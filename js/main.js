const form = document.getElementById("surveyForm");
const popup = document.getElementById("popup");
const popupResults = document.getElementById("popup-results");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    displayPopup();
});

function displayPopup() {
    const firstName = document.getElementById("FirstName").value;
    const lastName = document.getElementById("LastName").value;
    const dob = document.getElementById("DOB").value;
    const country = document.getElementById("Country").value;
    const genderMale = document.getElementById("Male").checked;
    const genderFemale = document.getElementById("Female").checked;
    const profession = document.getElementById("Profession").value;
    const email = document.getElementById("Email").value;
    const mobile = document.getElementById("number").value;

    const gender = genderMale ? "Male" : genderFemale ? "Female" : "Not Specified";
    
    const popupContent = `
        <p><strong>First Name:</strong> ${firstName}</p>
        <p><strong>Last Name:</strong> ${lastName}</p>
        <p><strong>Date of Birth:</strong> ${dob}</p>
        <p><strong>Country:</strong> ${country}</p>
        <p><strong>Gender:</strong> ${gender}</p>
        <p><strong>Profession:</strong> ${profession}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mobile Number:</strong> ${mobile}</p>
    `;

    popupResults.innerHTML = popupContent;
    popup.style.display = "flex";
    form.reset();
}

function closePopup() {
    popup.style.display = "none";
}

function resetForm() {
    form.reset();
}
const countrySelect = document.getElementById("Country");

// Function to fetch the list of countries from the API
async function fetchCountryList() {
try {
const response = await fetch("https://restcountries.com/v3.1/all");
const countriesData = await response.json();

// Check if the response is valid
if (response.ok) {
    // Populate the dropdown with country names
    countriesData.forEach(country => {
        const option = document.createElement("option");
        option.value = country.name.common;
        option.text = country.name.common;
        countrySelect.appendChild(option);
    });
} else {
    console.error("Error fetching country list:", countries);
}
} catch (error) {
console.error("Error fetching country list:", error);
}
}

// Call the function to populate the Country dropdown when the page loads
fetchCountryList();
