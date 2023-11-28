function ageChecker() {
    const ageInput = document.getElementById("ageInput");
    const age = parseInt(ageInput.value);

    if (!isNaN(age)) {
        if (age >= 0 && age <= 2) {
            alert("You are now a baby 👶");
        } else if (age >= 3 && age <= 12) {
            alert("You are still child 🧑");
        } else if (age >= 13 && age <= 19) {
            alert("You are now teen 👦");
        } else if (age >= 20 && age<=100) {
            alert("You are a Grown adult👨");
        } else {
            alert("Invalid age input.");
        }
    } else {
        alert("Please enter a valid age.");
    }
}
document.getElementById("ageForm").addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        ageChecker();
    }
});
