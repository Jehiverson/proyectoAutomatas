
const textin = document.getElementById("textin");
const textout = document.getElementById("textout");
const encodeBtn = document.getElementById("encrypt");
const decodeBtn = document.getElementById("decrypt");
const copyBtn = document.getElementById("copyBtn");
const cleanBtn = document.getElementById("cleanBtn");


encodeBtn.addEventListener('click', function () {
    textout.value = encode(textin.value);
});

decodeBtn.addEventListener('click', function (){
    const txtencriptado = decode(textin.value);
    textout.value = txtencriptado;
});

cleanBtn.addEventListener('click', function (){
    cleanText();
});

copyBtn.addEventListener('click', copy);

function copy() {
    let copyText = textout;
    copyText.select();
    document.execCommand("copy");    
    copyBtn.textContent = "Copiado";
    setTimeout(function(){
        copyBtn.textContent = "Copiar";
    },600);
}

const keys = {
    "e": "enter",
    "i": "imes",
    "a": "ais",
    "o": "ober",
    "u": "ufat",
};

function encode(string) {
    const characters = string.split('');
    return characters.map(function (character) {
        return keys[character] || character;
    }).join('');

  
}

function decode(string) {
    let value = string;
    for (const key of Object.keys(keys)) {
        value = value.replaceAll(keys[key], key);
    }return value;
}

function cleanText()
{
    textin.value = '';
    textout.value = '';
}

document.getElementById("textin").addEventListener("input", function () {
    var contenido = this.value;  
    var patron = /^[a-zA-Z\s]*$/;  
    if (!patron.test(contenido)) {
      this.value = contenido.replace(/[^a-zA-Z\s]/g, "");
    }
  });
