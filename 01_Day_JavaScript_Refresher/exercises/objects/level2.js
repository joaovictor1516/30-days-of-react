const users = require("./users").users;
let maxSkills = 0;
let userWithMaxSkills = "";
let manyUsersWithFiftyOrMorePoints = 0
const mernDevs = [];

for(let user in users){
    const manySkills = users[user].skills.length
    const points = users[user].points;
    const stacks = users[user].skills;
    if(manySkills > maxSkills){
        maxSkills = manySkills;
        userWithMaxSkills = user;
    }

    if(points >= 50){
        manyUsersWithFiftyOrMorePoints += 1;
    }

    if(stacks.filter((stack) => stack === "MongoDB" || stack === "Express" || stack === "React" || stack === "Node").length === 4){
        mernDevs.push(user);
    }

    console.log(user, users[user]);
}

console.log(userWithMaxSkills, manyUsersWithFiftyOrMorePoints, mernDevs);

users.Joao = {
    email: 'joao@joao.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Node'],
    age: 29,
    isLoggedIn: false,
    points: 40
}