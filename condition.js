// Assume we have a variable `sitterLocation` representing the location of the sitter

if (sitterLocation === 'Kabalagala') {
    // If the sitter is from Kabalagala, add them to the daycare
    addSitter(sitterName);
} else {
    // If the sitter is not from Kabalagala, do something else (e.g., show an error message)
    alert("Sitters are required to be from around Kabalagala.");
}
// show age
if (age < 18) {
    alert("You are too young to register.");
} else if (age >= 18 && age < 65) {
    alert("You are eligible to register as a sitter.");
} else {
    alert("You are over the age limit for registration.");
}

// explains switch
switch (dayOfWeek) {
    case 1:
        alert("Monday - Sitter's meeting day.");
        break;
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
        alert("Weekday - Normal daycare operations.");
        break;
    case 7:
        alert("Sunday - Daycare closed.");
        break;
    default:
        alert("Invalid day of the week.");
}