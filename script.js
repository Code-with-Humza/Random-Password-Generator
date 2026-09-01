const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ" +
    "abcdefghijklmnopqrstuvwxyz" +
    "0123456789" +
    "!@#$%^&*()_+=-[]{};:',.<>?/";


const firstPassword = document.getElementById("first-password");
const secondPassword = document.getElementById("second-password");
const targetButton = document.getElementById("target-button");


function generatePassword(length) {

    let password = "";

    for (let i = 0; i < length; i++) {

        const randomIndex = Math.floor(
            Math.random() * characters.length
        );

        password += characters[randomIndex];
    }

    return password;
}


targetButton.addEventListener("click", function () {

    const passwordLength = 15;

    firstPassword.textContent =
        generatePassword(passwordLength);

    secondPassword.textContent =
        generatePassword(passwordLength);
});

