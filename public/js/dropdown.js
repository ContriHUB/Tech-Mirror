// This is for making sure that techstach and purpose both are filled

document.getElementById("techPurposeForm").addEventListener("submit", function(event) {
    const techStack = document.getElementById("techStack").value;
    const purpose = document.getElementById("purpose").value;

    if (!techStack || !purpose) {
        alert("Please select both a tech stack and a purpose.");
        event.preventDefault(); // Prevent form submission if fields are not filled.
    }
});