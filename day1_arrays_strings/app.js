let text=document.getElementById("paragraph").innerText
const cleaned=text.replace(/,+/g,",").replace(/^,|,$/g,"").trim();
let wordsArray=cleaned.split(" ");

function convertToArray(){
    const finalArray=wordsArray.filter(word=>word.trim().length>0);
    document.getElementById("output").textContent=JSON.stringify(finalArray,null,2);
}

function removeAtIndex(){
    const index=parseInt(document.getElementById("indexInput").value);

    if(!isNaN(index) && index>=0 && index<wordsArray.length){
        wordsArray.splice(index,1);
        document.getElementById("output").textContent=JSON.stringify(wordsArray,null,2);
    }
    else{
        document.getElementById("output").textContent="invalid index";
    }
}

function insertWords() {
  const index = parseInt(document.getElementById("insertIndex").value);
  const newWordsRaw = document.getElementById("wordsToInsert").value;

  const newWords = newWordsRaw
    .split(",")
    .map(word => word.trim())
    .filter(word => word.length > 0);

  if (!isNaN(index) && index >= 0 && index <= wordsArray.length) {
    wordsArray.splice(index, 0, ...newWords);
    document.getElementById("output").textContent = JSON.stringify(wordsArray, null, 2);
  } else {
    document.getElementById("output").textContent = "Invalid index!";
  }
}
