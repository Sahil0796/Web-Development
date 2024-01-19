use("SB")

// console.log("SB");

db.createCollection("Chapters");

db.Chapters.insertOne({
    Name: "SAHIL",
    Age: 27,
    Role: "Developer",
    Shift: "Morning"
})



db.Chapters.insertMany([
    {
        "Name": "SAHIL",
        "Age": 27,
        "Role": "Developer",
        "Shift": "Morning"
    },
    {
        "Name": "JESSICA",
        "Age": 30,
        "Role": "Designer",
        "Shift": "Afternoon"
    },
    {
        "Name": "MIKE",
        "Age": 25,
        "Role": "Tester",
        "Shift": "Evening"
    },
    {
        "Name": "EMMA",
        "Age": 28,
        "Role": "Analyst",
        "Shift": "Morning"
    },
    {
        "Name": "ALEX",
        "Age": 32,
        "Role": "Manager",
        "Shift": "Day"
    },
    {
        "Name": "LISA",
        "Age": 29,
        "Role": "Developer",
        "Shift": "Morning"
    },
    {
        "Name": "RYAN",
        "Age": 26,
        "Role": "Tester",
        "Shift": "Night"
    },
    {
        "Name": "SOFIA",
        "Age": 31,
        "Role": "Designer",
        "Shift": "Afternoon"
    },
    {
        "Name": "DAVID",
        "Age": 33,
        "Role": "Analyst",
        "Shift": "Evening"
    },
    {
        "Name": "OLIVIA",
        "Age": 28,
        "Role": "Manager",
        "Shift": "Day"
    }
]
)

// let a = db.Chapters.find({Age: 27});
// console.log(a);

// console.log(a.count());

// console.log(a.toArray());

// let b = db.Chapters.findOne({Age: 27});
// console.log(b);







 