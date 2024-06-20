function caesarCipherEncrypt(text, shift) {
    const alphaSize = 32; // В українському алфавіті 32 літери
    let encryptedText = '';

    for (let i = 0; i < text.length; i++) {
        let char = text[i];

        if (/[А-Яа-я]/.test(char)) { // Шифруємо тільки українські букви
            let start = char >= 'А' && char <= 'Я' ? 'А'.charCodeAt(0) : 'а'.charCodeAt(0);
            let charCode = char.charCodeAt(0) - start;
            let newCode = (charCode + shift) % alphaSize;
            if (newCode < 0) newCode += alphaSize; // Для правильного відновлення тексту при дешифруванні
            encryptedText += String.fromCharCode(start + newCode);
        } else {
            encryptedText += char; // Не шифруємо спеціальні символи
        }
    }

    return encryptedText;
}

function caesarCipherDecrypt(text, shift) {
    return caesarCipherEncrypt(text, -shift);
}

// Текст для шифрування
const text = "Саунін Сергій Сергійович, 12-341.";
const key = 3; // Ключ шифрування

// Шифрування тексту
const encryptedText = caesarCipherEncrypt(text, key);
console.log("Зашифрований текст:", encryptedText);

// Дешифрування тексту
const decryptedText = caesarCipherDecrypt(encryptedText, key);
console.log("Розшифрований текст:", decryptedText);