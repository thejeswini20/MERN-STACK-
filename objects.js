const obj = {
    name: "Thejeswini",
    age: "19",
    gender: "female",
    city: "coimbatore",
    state: "tamilnadu",
    country: "india"
};

const keys = Object.keys(obj);

for (let i = 0; i < keys.length; i++) {
    console.log(i, "key:", keys[i]);         
    console.log(i, "value:", obj[keys[i]]);  
}
