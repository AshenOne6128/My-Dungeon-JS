class Sprite {
    constructor(pImg, pcurrentFrame = 0, pX = 0, pY=0) {
        //this.img = new Image();
        this.img = pImg;
        this.x = pX;
        this.y = pY;
        this.spd = 0;
        this.angle = 0;
        this.currentFrame = pcurrentFrame;
        this.tileSize = {
            x:0,
            y:0
        }
        this.tileSheet = false;
    }   
    setTileSheet(pSizeX, pSizeY) {
        this.tileSheet = true;
        this.tileSize.x = pSizeX;
        this.tileSize.y = pSizeY;
    }
    update() {

}

    draw(pCtx) {
        if (!this.tileSheet) {
            pCtx.drawImage(this.img, this.x, this.y);
        }
        else {
            let nbCol = this.img.width / this.tileSize.x;
            let c = 0;
            let l = 0;

            l = Math.floor(this.currentFrame / nbCol);
            c = this.currentFrame - (l * nbCol);
            let x = this.tileSize.x * c;
            let y = this.tileSize.y * l;

            pCtx.drawImage(this.img, x, y, this.tileSize.x, this.tileSize.y, this.x, this.y, this.tileSize.x*2, this.tileSize.y*2);
        }
        
    }


}
