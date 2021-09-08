class ImageLoader {
    constructor() {
        this.lstPaths = [];
        this.lstImages = [];
        this.callBack = null;
        this.loadedImageCount = 0;
    }
    add(pPathImage) {
        this.lstPaths.push(pPathImage);
    }
    getTotalImage() {
        return this.lstPaths.length;
    }
    getTotalImageLoaded() {
        return this.loadedImageCount;
    }
    getListImages() {
        return this.lstImages;
    }
    start(pCallBack) {
        this.callBack = pCallBack;
        this.lstPaths.forEach(path => {
            let img = new Image();
            img.src = path;
            this.lstImages[path] = img;
            img.onload = this.imageLoaded.bind(this);
        })

    }
    imageLoaded(e) {
        this.loadedImageCount++;
        console.log("Image chargée : ", e.target.currentSrc);
        if (this.loadedImageCount == this.lstPaths.length) {
            console.log("Tout est chargé !");
            this.callBack();
        }
    }

    getImage(pPath) {
        return this.lstImages[pPath];
    }
}