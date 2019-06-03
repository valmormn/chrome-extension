// leftClick.js

export function getLeftMouseClick() {
    document.addEventListener("click", function (e) {
        console.log(e);
        // let el = {
        //   info: "Mouse click",
        //   e: e, // evento
        //   el: e.target, // elemento clicado
        //   tagName: e.target.tagName // tagName do elemento clicado
        // };
        
      },
      false
    );
  }
  
export let leftClick = {
    id: "leftClick",
    path: "./src/sys/sensi/pointer/mouse/leftClik/leftClik.js",
    getLeftMouseClick: getLeftMouseClick()
};