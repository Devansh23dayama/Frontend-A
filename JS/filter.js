
// const inventory = [
//   { id: 1, name: "Tablet", inStock: true },
//   { id: 2, name: "Laptop", inStock: false },
//   { id: 3, name: "Headphones", inStock: false },
//   { id: 4, name: "Charger", inStock: true }
// ];

// let inven =inventory.filter((i)=> i.inStock === false);
// console.log(inven);


// const courses = [
//   { id: 1, name: "Full Stack Dev", duration: 12 },
//   { id: 2, name: "Data Entry", duration: 3 },
//   { id: 3, name: "AI & ML", duration: 8 },
//   { id: 4, name: "Tally", duration: 4 }
// ];

// const course = courses.filter((c) => c.duration > 5);
// console.log(course);


// const items = [
//   { id: 1, name: "Books", freeShipping: true },
//   { id: 2, name: "Stationery", freeShipping: false },
//   { id: 3, name: "Smartphone", freeShipping: true },
//   { id: 4, name: "Speaker", freeShipping: false }
// ];
// const freeShipping = items.filter((i) => i.freeShipping === true);
// console.log(freeShipping);

// const sessions = [
//   { id: 1, topic: "React Basics", completed: true },
//   { id: 2, topic: "Redux", completed: false },
//   { id: 3, topic: "Node.js", completed: true },
//   { id: 4, topic: "MongoDB", completed: false }
// ];
// const completed = sessions.filter((s) => s.completed === true);
// console.log(completed);

// const employees = [
//   { id: 1, name: "Isha", joinedOn: "2025-12-31" },
//   { id: 2, name: "Arjun", joinedOn: "2025-01-10" },
//   { id: 3, name: "Sneha", joinedOn: "2024-11-15" },
//   { id: 4, name: "Dev", joinedOn: "2025-02-01" }
// ];
// const joinedAfter2025 = employees.filter((e) => e.joinedOn >= "2025-07-01")
// console.log(joinedAfter2025);


// const events = [
//   { id: 1, name: "Workshop", date: "2025-04-26" }, // Saturday
//   { id: 2, name: "Hackathon", date: "2025-04-27" }, // Sunday
//   { id: 3, name: "Seminar", date: "2025-04-25" }, // Friday
//   { id: 4, name: "Webinar", date: "2025-04-28" }  // Monday
// ];
// let weeekendevents=events.map((e)=>{
//     let day = new Date(e.date).getDay();
//     return day===0 || day===6
// });

// console.log(weeekendevents);

// const subscriptions = [
//   { id: 1, user: "Kiran", expiresOn: "2025-04-24" },
//   { id: 2, user: "Rajat", expiresOn: "2025-04-30" },
//   { id: 3, user: "Simran", expiresOn: "2025-05-02" },
//   { id: 4, user: "Ajay", expiresOn: "2025-04-23" }
// ];


// for subscription type questions 

// let currentdate = new Date("2025-04-23");
// let next7date = new Date(currentdate);
// next7date.setDate(currentdate.getDate()+7);
// console.log(next7date);




// const employees = [
//   { name: "Ravi", joinedOn: "2024-06-15" },
//   { name: "Sneha", joinedOn: "2023-07-09" },
//   { name: "Ayan", joinedOn: "2025-01-01" }
// ];
// const twoyear =employees.filter((emp)=>{
// const today =new Date().getFullYear();
// let yearofjoining = new Date(emp.joinedOn).getFullYear();
// return today - yearofjoining >=2;

// })
// console.log(twoyear)



const users = ["Devraj", "Ravi", "kdev007", "Deval", "Amit"];








