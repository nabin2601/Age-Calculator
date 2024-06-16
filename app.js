const ageLabel = document.getElementById("age-label");
const ageInput = document.getElementById("age-input");
const btn = document.getElementById("submit-btn");
const result = document.getElementById("result");

ageInput.max = new Date().toISOString().split("T")[0]

btn.addEventListener('click', () => {
    if (!ageInput.value) {
        result.textContent = "Please select your date of birth."
        return;
    };

    const dobDate = new Date(ageInput.value);
    console.log(dobDate)
    const currentDate = new Date();

    let years = currentDate.getFullYear() - dobDate.getFullYear();
    let month = currentDate.getMonth() - dobDate.getMonth();
    let days = currentDate.getDate() - dobDate.getDate();

    if (days<0) {
        month--;
        const prevMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0);
        days += prevMonth.getDate();
    }
    if (month < 0) {
        years--;
        month += 12;
    }
    result.textContent = `Your age is ${years} years, ${month} Months and ${days} days.`;s
})