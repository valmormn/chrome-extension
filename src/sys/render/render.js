// sys

// carrega em componente no alvo especificado
var renderX = (targetID, path2Component) => {
    console.log('rendererer')

    fetch(path2Component)
        .then(function (response) {
            console.log(response);
            return response.text()
        })
        .then(function (html) {
            // Initialize the DOM parser
            var parser = new DOMParser();

            // Parse the text
            var doc = parser.parseFromString(html, "text/html");

            console.log(doc.body);
            var target = document.getElementById(targetID);
            target.innerHTML = doc.body.innerHTML;
            console.log(target);

            // var event = new CustomEvent("pageScan")
            // escaneia a pagina de novo
            var pageScanEvent = new CustomEvent('pageScan', {
                detail: 'page scan',
                bubbles: true,
                cancelable: false
            });

            setTimeout( document.dispatchEvent(pageScanEvent), 10);

        })
        .catch(function (err) {
            console.log('Failed to fetch page: ', err);
        });
};

var renderXHR = (targetID, path2Component) => {
    var a = new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", path2Component);
        xhr.onload = () => resolve(xhr.responseText);
        xhr.onerror = () => reject(xhr.statusText);
        xhr.send();
      });
    console.log(a);

    var target = document.getElementById(targetID);
    target.innerHTML = a.body.innerHTML;

    var pageScanEvent = new CustomEvent('pageScan', {
        detail: 'page scan',
        bubbles: true,
        cancelable: false
    });

    setTimeout( document.dispatchEvent(pageScanEvent), 10);
};

// Object.defineProperty(window, 'render', {
//     value: renderX,
//     writable: false,
//     enumerable: true
// });

// Object.defineProperty(window, 'renderXHR', {
//     value: renderXHR,
//     writable: false,
//     enumerable: true
// });

export let render = {
    id: 'render',
    alias:'',
    path: './src/sys/render/render.js',
    // scanner: scanner,
    // renderer: renderer(),
    // render: renderX,
    afterLoad: afterLoad(),
    // jshotload: jshotload,
    // cssHotLoad: cssHotLoad,
};

console.log('render'); // roda primeiro

function afterLoad() {
    // console.log("hey");

    Object.defineProperty(window, 'render', {
        value: renderX,
        writable: false,
        enumerable: true
    });
    
    Object.defineProperty(window, 'renderXHR', {
        value: renderXHR,
        writable: false,
        enumerable: true
    });

    document.addEventListener('DOMContentLoaded', function () {
        console.log('render'); // roda depois
        setTimeout(
            ()=>{
                console.log('wtf 33')
                return
            }
        , 10);
    });
}
// export let sys = { id: "sys"}
