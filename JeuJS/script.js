function init(){
    var stage = new createjs.Stage("demoCanvas");

    var circle = new createjs.Shape();
    circle.graphics.beginFill("DeepSkyBlue").drawCircle(0,0,50);
    circle.x = 100;
    circle.y = 200;
    stage.addChild(circle);


    document.addEventListener("keypress", function (e) {
        var touche = String.fromCharCode(e.charCode);
        switch (touche){
            case "q":
                circle.x -= 5;
                if (circle.x <= 0){
                    circle.x = 100;
                }
                break;
            case "d":
                circle.x += 5;
                if (circle.x >= 1000){
                    circle.x = 900;
                }
                break;
        }
    });

    var ennemie = new createjs.Shape();
    ennemie.graphics.beginFill("red").drawCircle(0,0,10);
    for (var i = 1; i < 10; i++) {
        ennemie.x = i * 10  ;
    }
    ennemie.y = 50;
    stage.addChild(ennemie);



    createjs.Ticker.setFPS(1000);
    createjs.Ticker.addEventListener("tick", stage);
}