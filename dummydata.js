const dummySitters = [
    {
        name: "Alice",
        location: "Kabalagala",
        dateOfBirth: "1990-05-15",
        gender: "Female",
        nextOfKin: "Bob",
        nin: "123456789",
        recommenderName: "Carol",
        religion: "Christianity",
        educationLevel: "High School",
        sitterNumber: "S001",
        contacts: "alice@example.com"
    },
    {
        name: "Bob",
        location: "Kabalagala",
        dateOfBirth: "1992-08-20",
        gender: "Male",
        nextOfKin: "Alice",
        nin: "987654321",
        recommenderName: "Carol",
        religion: "Christianity",
        educationLevel: "College",
        sitterNumber: "S002",
        contacts: "bob@example.com"
    },
    // Add more dummy sitters as needed
];
// Initialize sitters array from dummy data
let sitters = JSON.parse(localStorage.getItem('sitters')) || dummySitters;
localStorage.setItem('sitters', JSON.stringify(sitters));