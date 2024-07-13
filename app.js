let user = {
    username: "laylo",
    age: 19,
};

console.log(user);

// stringify = object -> json
let jsonFormat = JSON.stringify(user);

console.log(jsonFormat);

// parce = json -> object
let objectFormat = JSON.parse(jsonFormat);
console.log(objectFormat);
