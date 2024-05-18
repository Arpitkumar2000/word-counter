let textBox = document.getElementById('textField');

textBox.addEventListener('input', (e) => {
    let text = e.target.value
    document.getElementById('char').innerHTML = text.length;

    text = text.trim()
    let newText = text.split(" ");
    let cleanNewText = newText.filter((e) =>{
        return e != "";
    } )
    console.log(newText);
    document.getElementById('word').innerHTML = cleanNewText.length
})