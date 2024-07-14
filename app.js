import { USERS } from "./db.js";

const btnOpen = document.querySelector(".btn__open");
const popap = document.querySelector(".popap");
const btnClose = document.querySelector(".btn__close");
const eyePassword = document.querySelector(".eye__password");
const modelPassword = document.querySelector(".modul__password");
const overlay = document.querySelector(".overlay");
const tableHead = document.querySelector(".table__head");

const model = document.querySelector(".model");
// ======================================
let userData = JSON.parse(localStorage.getItem("users")) || [];
// ======================================
btnOpen.addEventListener("click", () => {
    popap.style.display = "block";
});

btnClose.addEventListener("click", popapCloses);
overlay.addEventListener("click", popapCloses);

function popapCloses() {
    popap.style.display = "none";
}

eyePassword.addEventListener("click", () => {
    if (modelPassword.type === "text") {
        modelPassword.type = "password";
        eyePassword.innerHTML = `<p>🙈</p>`;
    } else {
        modelPassword.type = "text";
        eyePassword.innerHTML = `<p>🙉</p>`;
    }
});

// ========================================

const modelName = document.querySelector(".modul__name");
const modelLname = document.querySelector(".modul__lname");
const modelAge = document.querySelector(".modul__age");
const modelAddress = document.querySelector(".modul__address");
const modelSelect = document.querySelector(".select__box");
// ========================================
const tableBody = document.querySelector(".table__body");

model.addEventListener("submit", (event) => {
    event.preventDefault();
    let username = modelName.value;
    let userlname = modelLname.value;
    let userage = modelAge.value;
    let useraddress = modelAddress.value;
    let userscore = modelSelect.value;
    let userpassword = modelPassword.value;
    let newUser = {
        id: new Date().getTime(),
        name: username,
        lname: userlname,
        age: userage,
        address: useraddress,
        score: userscore,
        password: userpassword,
    };
    userData.push(newUser);
    model.reset();
    popap.style.display = "none";
    createCard(userData);
    localStorage.setItem("users", JSON.stringify(userData));
});

function createCard(data) {
    while (tableBody.firstChild) {
        tableBody.firstChild.remove();
    }
    data.forEach((user) => {
        let card = document.createElement("tr");
        card.classList.add("card");
        card.innerHTML = `
        <th>${user.id}</th>
        <th>${user.name}</th>
        <th>${user.lname}</th>
        <th>${user.age}</th>
        <th>${user.address}</th>
        <th>${user.score}</th>
        <th>${user.password}</th>
        `;
        tableBody.appendChild(card);
    });
}

createCard(userData);

