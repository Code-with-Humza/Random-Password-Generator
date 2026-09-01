
# 🔐 Random Password Generator

A simple and responsive Random Password Generator built with HTML, CSS, and Vanilla JavaScript.

The application generates two secure-looking random passwords with a single click, helping users create passwords instead of repeatedly using predictable ones.

## 📸 Screenshot

![Random Password Generator](generate.png)

## 🚀 Features

- Generate two random passwords at the same time
- Generates 15-character passwords
- Includes uppercase letters
- Includes lowercase letters
- Includes numbers
- Includes special characters
- Simple and clean user interface
- Responsive design
- Interactive button effects
- Built with Vanilla JavaScript

## 🛠️ Technologies Used

- HTML5
- CSS3
- JavaScript
- DOM Manipulation
- JavaScript Event Listeners
- `Math.random()`

## 📂 Project Structure

text
Random-Password-Generator/
│
├── index.html
├── style.css
├── script.js
├── generate.png
└── README.md


## ⚙️ How It Works

When the user clicks the **Generate passwords** button, JavaScript randomly selects characters from a predefined character set.

The application generates two separate 15-character passwords.

The password generation logic is handled by a reusable function:

javascript
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


## 🎯 Purpose

This project was created to practice:

* JavaScript functions
* Loops
* Random number generation
* DOM manipulation
* Event listeners
* String manipulation
* Basic responsive web design
* Clean and reusable code

## 🔮 Future Improvements

Planned improvements include:

* Copy password to clipboard
* Custom password length
* Uppercase/lowercase character options
* Numbers and symbols options
* Password strength indicator
* Regenerate individual passwords
* Improved accessibility
* More advanced password generation

## 👨‍💻 Author

**Hamza Saeed**

GitHub: [Code-with-Humza](https://github.com/Code-with-Humza)

## 📄 License

This project is open source and available for learning and personal use.



