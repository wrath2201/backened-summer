const fullText = document.getElementById("paragraph").textContent.trim();

function showLess() {
    const shortText = fullText.slice(0, 120);
    document.getElementById("output").textContent = shortText + "...";
}

function showMore(){
    document.getElementById("output").textContent=fullText;
}

function replaceWord(){
    const oldWord=document.getElementById("replaceWord").value.toLowerCase();
    const newWord=document.getElementById("newWord").value.toLowerCase();

    if(oldWord===""){
        alert("please enter the word to replace");
        return;
    }
    const word=fullText.toLowerCase();
    const replacedText=word.replaceAll(oldWord,newWord);
    document.getElementById("output").textContent=replacedText;
}   


function countWord() {
    const wordToCount = document.getElementById("countWord").value.toLowerCase();

    if (wordToCount === "") {
        alert("Please enter the word to count.");
        return;
    }

    // Split the full text into words
    const words = fullText.toLowerCase().split(/\s+/); // Split by any whitespace

    // Count occurrences of the word
    let count = 0;
    for (let word of words) {
        // Remove punctuation from word
        word = word.replace(/[.,!?;"()]/g, "");
        if (word === wordToCount) {
            count++;
        }
    }

    // Show result
    document.getElementById("output").textContent = `"${wordToCount}" appears ${count} times.`;
}