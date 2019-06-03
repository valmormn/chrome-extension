// sys

// 
import { sensi } from "./sensi/sensi.js";
// import { render } from "./render/render.js";

console.log('sys.js'); // roda primeiro

function afterLoad() {
    // console.log("hey");

    Object.defineProperty(window, 'sys', {
        value: 'sysd',
        writable: false,
        enumerable: true
    });

    document.addEventListener('DOMContentLoaded', function () {
        console.log('render'); // roda depois
        
        function wtf(){
            console.log('porra');
            return
        };

        setTimeout(()=>{
                console.log('wtf');
                return 1;
            }, 10);
    });
}

export let sys = { 
    id: "syss",
    afterLoad: afterLoad(),
    sensi: sensi,
    // Object.defineProperty(window, 'sys', {
    //     value: this,
    //     writable: false,
    //     enumerable: true
    // }),


}
