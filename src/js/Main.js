let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let lastUpdate = 0;

console.log("Main !");

function run(time) {
    requestAnimationFrame(run);
    let dt = (time - lastUpdate) / 1000;
     // permet de regler le FPS :
    if (dt < (1 / 75) - 0.001) {
        return;
    }
    lastUpdate = time;
    
    update(dt); 
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    draw(ctx);

}

function init() {
    console.log("Main Init Start");
    requestAnimationFrame(run);
    load();
}

init();