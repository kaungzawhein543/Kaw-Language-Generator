
document.getElementById('copybutton').addEventListener('click', () => {
    navigator.clipboard.writeText(document.getElementById('output').value);
    alert("Copied to clipboard!");
})
document.getElementById("arrowBtn").addEventListener("click", () => {
  const inputString = document.getElementById("original").value;
  const conditionValue = "င့်";

  const nomalizedInput = inputString.normalize("NFC");
  const nomalizedCheck = conditionValue.normalize("NFC");

  if(nomalizedInput.includes(nomalizedCheck)){
    let indexOfvalue = inputString.indexOf(nomalizedCheck);
    let previousIndexOfvalue = Number(indexOfvalue) - 1;
    
    document.getElementById("output").value = "အမျှော်ကင့်ကြီးပဲနော်";
  }
})
