let generateBtn = document.getElementById("generate-btn");
let copyBtn = document.getElementById("copy-btn");
let paraDisplay = document.getElementById("para");
let options = {
    method: "GET",
    headers: {
        "X-Api-Key": apiKey,
    }
}

let url = "https://api.api-ninjas.com/v1/loremipsum?paragraphs="

let generateParas = () => {
    let noOfPara = document.getElementById("no-of-para").value;
    let finalUrl = url + noOfPara;
    fetch(finalUrl, options)
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            paraDisplay.innerText = data.text;
        })

}

generateBtn.addEventListener('click', generateParas);
window.addEventListener('load', generateParas);