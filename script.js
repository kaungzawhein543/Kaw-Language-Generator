const myanmarAlphabets = [
    "က", "ခ", "ဂ", "ဃ", "င", "စ", "ဆ", "ဇ", "ဈ", "ည",
    "ဋ", "ဌ", "ဍ", "ဎ", "ဏ", "တ", "ထ", "ဒ", "ဓ", "န",
    "ပ", "ဖ", "ဗ", "ဘ", "မ", "ယ", "ရ", "လ", "ဝ", "သ",
    "ဟ", "ဠ", "အ"
  ];
    
const myanmarMap = {
    "က": "ကော်",
    "ခ": "ခေါ်",
    "ဂ": "ဂေါ်",
    "ဃ": "ဃေါ်",
    "င": "ငေါ်",
    "စ": "စော်",
    "ဆ": "​ဆော်",
    "ဇ": "ဇော်",
    "တ": "တော်",
    "ထ": "ထေါ်",
    "ဒ": "ဒေါ်",
    "ဓ": "ဓေါ်",
    "န": "နော်",
    "ပ": "ပေါ်",
    "ဖ": "ဖော်",
    "ဗ": "ဗော်",
    "ဘ": "ဘော်",
    "မ": "မျှော်",
    "ယ": "ယော်",
    "ရ": "ရော်",
    "လ": "လော်",
    "ဝ": "ဝေါ်",
    "သ": "သော်",
    "ဟ": "ဟော်",
    "အ": "အော်",
  };
  const myanmarUnicodeTitles = [
    { title: "Consonants", range: "U+1000 to U+1021" },
    { title: "Vowel Signs", range: "U+1021 to U+1029" },
    { title: "Diacritical Marks", range: "U+1030 to U+103F" },
    { title: "Punctuation and Signs", range: "U+1040 to U+1049" },
    { title: "Other Characters", range: "U+104A to U+104F" },
    { title: "Myanmar Extended-A", range: "U+AA60 to U+AA7F" },
    { title: "Myanmar Extended-B", range: "U+A9E0 to U+A9FF" },
  ];
  
  console.log(myanmarUnicodeTitles);
  


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


function replaceMyanmarCharacters(input) {
    let result = input;
  
    Object.keys(myanmarMap).forEach(char => {
      if (result.includes(char)) {
        console.log("hello");
        result = result.split(char).join(myanmarMap[char]);
      }
    });
  
    return result;
  }
  