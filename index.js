var btn = document.querySelector("#btn");
var txtarea = document.querySelector("#txtarea");
var outputArea = document.querySelector("#output");

var url = "https://api.funtranslations.com/translate/minion.json";
// var url = "https://api.funtranslations.com/translate/dothraki.json";

function getServerUrl(text){
    return `${url}?text=${text}`;
}

function showError(err){
    console.log(err);
    alert("Something went wrong with the server... Try it again after some time")
}

function showOutput(){
    var serverUrl = getServerUrl(txtarea.value);
    fetch(serverUrl)
    .then(response => response.json())
    .then(res => {
        var translatedText = res.contents.translated;
        outputArea.innerText = translatedText;
    })
    .catch(showError);
}

btn.addEventListener("click", showOutput);
