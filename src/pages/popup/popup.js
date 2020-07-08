// popup.js

let changeColor = document.getElementById('changeColor');

chrome.storage.sync.get('color', function (data) {
    changeColor.style.backgroundColor = data.color;
    changeColor.setAttribute('value', data.color);
});

changeColor.onclick = function (element) {
    let color = element.target.value;
    chrome.tabs.query({
        active: true,
        currentWindow: true
    }, function (tabs) {
        chrome.tabs.executeScript(
            tabs[0].id, {
                // code: 'document.body.style.backgroundColor = "' + color + '";',
                code: 'document.body.style.backgroundColor = "#1b1b1b";',
                // code: 'window.alert("' + color + '");',
                // code: 'ff()'
            });
    });
};

let ff = () => {
    document.body.style.backgroundColor = "#1b1b1b";

    return
}

chrome.browserAction.onClicked.addListener(function(tab) {
    alert('HELLOOOOO WORLD!!');
  });

// document.getElementById("fav").addEventListener("click", ()=>{
//     alert('ta maneiro');
// })