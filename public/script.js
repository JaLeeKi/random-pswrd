const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*_-+=";

const createdPswrd = document.getElementById("password");
const length = document.getElementById("length");
const isNumbers = document.getElementById("numbers");
const isSymbols = document.getElementById("symbols");
const generateBtn = document.getElementById("generate");

generateBtn.addEventListener("click", () => {
    let allowedChars = letters;
    isNumbers.checked ? (allowedChars += numbers):"";
    isSymbols.checked ? (allowedChars += symbols):"";
    createdPswrd.value = generatePassword(length.value, allowedChars);
});

const generatePassword = (length, allowedChars) => {
    let password = "";
    for (let i = 0; i < length; i++) {
        password += allowedChars.charAt(
        Math.floor(Math.random() * allowedChars.length)
      );
    }
    return password;
};

const copyBtn = document.getElementById("copy");
    copyBtn.addEventListener("click", () => {
    createdPswrd.select();
    document.execCommand("copy");
    swal("Nice!", "You copied the password", "success");
});
