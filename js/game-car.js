const carPositionX = 550;
const carPositionY = 30;
const coinPositionX = 570;
const coinPositionY = 30;
const boardGameWidth = 1368;
const boardGameHeight = 768;
const speed = 20;
const directionUp = "up";
const directionDown = "down";
const directionLeft = "left";
const directionRight = "right";
const c = document.getElementById("cargame");
const ctx = c.getContext("2d");
let Car = function () {
    this.carPositionX = carPositionX;
    this.carPositionY = carPositionY;
    this.speed = speed;
    this.direction = directionUp;
    this.drawBackGround = function () {
        let img = new Image();
        img.src = "images/background.png";
        ctx.drawImage(img, 0, 0);
    };
    this.drawCoin = function () {
        let img = new Image();
        img.src = "images/Coin.png";
        ctx.drawImage(img, coinPositionX, coinPositionY);
    };
    this.drawCar = function () {
        let img = new Image();
        img.src = 'images/'+this.direction + ".png";
        ctx.drawImage(img, this.carPositionX, this.carPositionY);
    };
    this.clearCar = function () {
        ctx.clearRect(0, 0, boardGameWidth, boardGameHeight);
    };
    this.getCarPositionX = function () {
        return this.positionX;
    }
    this.getCarPositionY = function () {
        return this.positionY;
    }
    this.carGoUp = function () {
        this.direction = directionUp;
        this.carPositionY -= this.speed;
    };
    this.carGoDown = function () {
        this.direction = directionDown;
        this.carPositionY += this.speed;
    };
    this.carGoLeft = function () {
        this.direction = directionLeft;
        this.carPositionX -= this.speed;
    };
    this.carGoRight = function () {
        this.direction = directionRight;
        this.carPositionX += this.speed;
    };
};

function moveCar(event) {
    switch (event.keyCode) {
        case 37: {
            car.carGoLeft();
            break;
        }
        case 38: {
            car.carGoUp();
            break;
        }
        case 39: {
            car.carGoRight();
            break;
        }
        case 40: {
            car.carGoDown();
        }
    }
    car.clearCar();
    car.drawBackGround();
    car.drawCoin();
    car.drawCar();
}

function Run() {
    window.addEventListener('keydown', this.moveCar);
}
let car = new Car();
car.drawCoin();
car.drawCar();