document.getElementById('copybutton').addEventListener('click', () => {
    navigator.clipboard.writeText(document.getElementById('output').value);
    alert("Copied to clipboard!");
})
   