const word = document.querySelector('.input-text');
const button = document.querySelector('.check');
const result = document.querySelector('.result');

function countVowel() {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let wordVal = word.value.toLowerCase();
    let count = 0;

    for(let i = 0; i < wordVal.length; i ++) {
        let letter = wordVal[i];
        if(vowels.includes(letter)){
            count++;
        }
    }
    result.innerHTML = `${wordVal} has ${count} vowels.`;
}

button.addEventListener("click", countVowel);


