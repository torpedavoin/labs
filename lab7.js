function gronsfeldEncrypt(text, key) {
    const keyDigits = key.split('').map(Number);
    const keyLength = keyDigits.length;
    let encryptedText = '';
    const alphabetUpper = 'АБВГҐДЕЄЖЗИІЇЙКЛМНОПРСТУФХЦЧШЩЬЮЯ';
    const alphabetLower = 'абвгґдеєжзиіїйклмнопрстуфхцчшщьюя';

    for (let i = 0; i < text.length; i++) {
        const char = text[i];
        const keyDigit = keyDigits[i % keyLength];

        if (alphabetUpper.includes(char)) {
            const newIndex = (alphabetUpper.indexOf(char) + keyDigit) % alphabetUpper.length;
            encryptedText += alphabetUpper[newIndex];
        } else if (alphabetLower.includes(char)) {
            const newIndex = (alphabetLower.indexOf(char) + keyDigit) % alphabetLower.length;
            encryptedText += alphabetLower[newIndex];
        } else {
            encryptedText += char;
        }
    }

    return encryptedText;
}

function gronsfeldDecrypt(text, key) {
    const keyDigits = key.split('').map(Number);
    const keyLength = keyDigits.length;
    let decryptedText = '';
    const alphabetUpper = 'АБВГҐДЕЄЖЗИІЇЙКЛМНОПРСТУФХЦЧШЩЬЮЯ';
    const alphabetLower = 'абвгґдеєжзиіїйклмнопрстуфхцчшщьюя';

    for (let i = 0; i < text.length; i++) {
        const char = text[i];
        const keyDigit = keyDigits[i % keyLength];

        if (alphabetUpper.includes(char)) {
            const newIndex = (alphabetUpper.indexOf(char) - keyDigit + alphabetUpper.length) % alphabetUpper.length;
            decryptedText += alphabetUpper[newIndex];
        } else if (alphabetLower.includes(char)) {
            const newIndex = (alphabetLower.indexOf(char) - keyDigit + alphabetLower.length) % alphabetLower.length;
            decryptedText += alphabetLower[newIndex];
        } else {
            decryptedText += char;
        }
    }

    return decryptedText;
}

const text = "Саунін Сергій Сергійович, 341.";
const key = "543322"; // Пример ключа

const encryptedText = gronsfeldEncrypt(text, key);
console.log("Зашифрований текст: " + encryptedText);

const decryptedText = gronsfeldDecrypt(encryptedText, key);
console.log("Розшифрований текст: " + decryptedText);
