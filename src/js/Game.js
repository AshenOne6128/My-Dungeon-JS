console.log("Game !");

let KeyRight = false;
let KeyLeft = false;
let KeyUp = false;
let KeyDown = false;
let gameReady = false;
let lstSprites = []
let lstFloor = [];
let spriteSheet;


let imageLoader = new ImageLoader();

function rnd(pMin, pMax) {
    return Math.floor(Math.random() * (pMax - pMin)) + pMin;
}

let timer;
let fps = 0;
let fps2 = 0;

function keyPressed(t) {
    t.preventDefault();
    if (t.code == "ArrowRight") {
        KeyRight = true;
    }
    if (t.code == "ArrowLeft") {
        KeyLeft = true;
    }
    if (t.code == "ArrowUp") {
        KeyUp = true;
    }
    if (t.code == "ArrowDown") {
        KeyDown = true;
    }
}

function keyReleased(t) {
    t.preventDefault();
    if (t.code == "ArrowRight") {
        KeyRight = false;
    }
    if (t.code == "ArrowLeft") {
        KeyLeft = false;
    }
    if (t.code == "ArrowUp") {
        KeyUp = false;
    }
    if (t.code == "ArrowDown") {
        KeyDown = false;
    }
}

function load() {
    document.addEventListener("keydown", keyPressed, false);
    document.addEventListener("keyup", keyReleased, false);
    timer = 0;

    imageLoader.add("src/img/DungeonStarter.png");
    imageLoader.start(startGame);
}

function startGame() {
    console.log("Start game !");
    //console.log(level[2][3]);

    //lstSprites = [];    
    spriteSheet = imageLoader.getImage("src/img/DungeonStarter.png"); //on demande l objet image de la lstImages
    //lstSprites.push(new Sprite(imageEnnemy)); //On cré un objet sprite en envoyant l objet image récupéré precedament
    let floor = new Sprite(spriteSheet, 7);
    floor.setTileSheet(16, 16);

    let wallLeft = new Sprite(spriteSheet, 0);
    wallLeft.setTileSheet(16, 16);

    lstFloor.push(floor);
    lstFloor.push(wallLeft);
    gameReady = true;
}

function update(dt) {
    if (!gameReady) {
        return;
    }
    timer += dt;
    fps = fps + 1;
    if (timer >= 1) {
        fps2 = fps;
        fps = 0;
        timer = 0;
    }
    /*  
        if (KeyRight == true) {
        }  
        if (KeyLeft == true) {
        }  
        if (KeyUp == true) {
        }  
        if (KeyDown == true) {
        }
     */

}

function draw(pCtx) {
    if (!gameReady) {
        return;
    }
    pCtx.fillText("FPS : " + fps2, 10, 10);

    /*     lstSprites.forEach(currentSprite => {
            currentSprite.draw(pCtx);
        })
     */
    for (let l = 0; l <= 18; l++) {
        for (let c = 0; c <= 24; c++) {
            let fY = l * 32;
            let fX = c * 32;
            let id = level[l][c];
            //pCtx.drawImage(lstSprites[id], fX,fY);
            let structure = lstFloor[id];
            structure.x = fX;
            structure.y = fY;
            structure.draw(pCtx);
        }
    }

}