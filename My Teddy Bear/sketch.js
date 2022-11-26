/*-------------------------------------bah----------------------------------------*/

var hs
var t
var d
var hsimage
var timage
var dimage
var gs = "sdw"
var sbglr
var bglrs
var hspsr, hspsl, hspsf, hspsb
var hsusr, hsusl, hsusf,hsusb
var ahsuwl, ahsuwr, ahsuwf, ahsuwb
var ahspwl, ahspwr, ahspwf, ahspwb
var bgk, bgmarker = "bglr"
var bgbr




/* gs =  gameState

fd = first day
- primeiro dia. animação. sofrencia do programador.

sd = second day
- segundo dia. animação. mais sofrencia do programador.

sdw = second day walking
- segundo dia caminhando.
jogador consegue finalmente se mover. e dps tem mais animação yayyyyy.



*/

function preload(){

//f
sbglr = loadImage("./fotos/bglr.png");
hspsr = loadImage("./fotos/psr.png");
hspsl = loadImage("./fotos/psl.png");
hspsf = loadImage("./fotos/psf.png");
hspsb = loadImage("./fotos/psb.png");
hsusr = loadImage("./fotos/usr.png");
hsusl = loadImage("./fotos/usl.png");
hsusf = loadImage("./fotos/usf.png");
hsusb = loadImage("./fotos/usb.png");

bgbr = loadImage("./fotos/bgbr.png");
bgk = loadImage("./fotos/bgk.png");

ahsuwl = loadAnimation("./fotos/uwlrf.png", "./fotos/uwlrf.png", "./fotos/uwllf.png", "./fotos/uwllf.png");
ahsuwr = loadAnimation("./fotos/uwrrf.png", "./fotos/uwrrf.png", "./fotos/uwrlf.png", "./fotos/uwrlf.png");
ahsuwf = loadAnimation("./fotos/uwfrf.png", "./fotos/uwfrf.png", "./fotos/uwflf.png", "./fotos/uwflf.png");
ahsuwb = loadAnimation("./fotos/uwbrf.png", "./fotos/uwbrf.png", "./fotos/uwblf.png", "./fotos/uwblf.png");
ahspwl = loadAnimation("./fotos/pwlrf.png", "./fotos/pwlrf.png", "./fotos/pwllf.png", "./fotos/pwllf.png");
ahspwr = loadAnimation("./fotos/pwrrf.png", "./fotos/pwrrf.png", "./fotos/pwrlf.png", "./fotos/pwrlf.png");
ahspwf = loadAnimation("./fotos/pwfrf.png", "./fotos/pwfrf.png", "./fotos/pwflf.png", "./fotos/pwflf.png");
ahspwb = loadAnimation("./fotos/pwbrf.png", "./fotos/pwbrf.png", "./fotos/pwblf.png", "./fotos/pwblf.png");

}

function setup(){

createCanvas(800, 800);

bglrs = createSprite(400, 400, 800, 800);
//bglrs.addAnimation("firstday", );
//bglrs.addAnimation("secondday", );
bglrs.addImage("bglr", sbglr);
bglrs.addImage("bgk", bgk);
bglrs.addImage("bgbr", bgbr);
bglrs.changeImage("bglr", sbglr);

hs = createSprite(350, 40);
hs.addImage("psl", hspsl);
hs.addImage("psr", hspsr);
hs.addImage("psf", hspsf);
hs.addImage("psb", hspsb);
hs.addImage("usl", hsusl);
hs.addImage("usr", hsusr);
hs.addImage("usf", hsusf);
hs.addImage("usb", hsusb);

hs.addAnimation("uwl", ahsuwl);
hs.addAnimation("uwr", ahsuwr);
hs.addAnimation("uwf", ahsuwf);
hs.addAnimation("uwb", ahsuwb);
hs.addAnimation("pwl", ahspwl);
hs.addAnimation("pwr", ahspwr);
hs.addAnimation("pwf", ahspwf);
hs.addAnimation("pwb", ahspwb);
//hs.addAnimation("SUStinho", );
hs.changeImage("usr");
hs.scale = 1

/*t = createSprite();
t.addImage("feio fedido", );
t.addAnimation("procurando dori", );

d = createSprite();
d.addAnimation("conversinha", );
d.addAnimation("tirando o taco de baseball", );*/




}

function draw(){

  if(gs == "fd"){

  bglrs.changeAnimation();


  }else if(gs == "sd"){

  bglrs.changeAnimation();



  }else if(gs === "sdw"){



if (bgmarker === "bglr"){

    bglrs.changeImage("bglr", sbglr);

}

if (bgmarker === "bglr" && hs.x < -27){

    bglrs.changeImage("bgk", bgk);
    bgmarker = "bgk";
    hs.x = 774

}

if (bgmarker === "bgk" && hs.x > 820){

    bglrs.changeImage("bglr", bgk);
    bgmarker = "bglr";
    hs.x = 26

}

//Sayuri's moviment
{
    if(keyDown("W") || keyDown(UP_ARROW)){

        hs.y -= 3
        
        hs.changeAnimation("uwb");

    }
    if(keyDown("S") || keyDown(DOWN_ARROW)){

        hs.y += 3
        hs.changeAnimation("uwf");
        
    }
    if(keyDown("A") || keyDown(LEFT_ARROW)){

     hs.x -= 3
     hs.changeAnimation("uwl");
    
    }
    if(keyDown("D") || keyDown(RIGHT_ARROW)){

        hs.x += 3
        hs.changeAnimation("uwr");
        
    }

    if(keyWentUp("W") || keyWentUp(UP_ARROW)){

        hs.y -= 3
        hs.changeImage("usb");

    }
    if(keyWentUp("S") || keyWentUp(DOWN_ARROW)){

        hs.y += 3
        hs.changeImage("usf");
        
    }
    if(keyWentUp("A") || keyWentUp(LEFT_ARROW)){

     hs.x -= 3
     hs.changeAnimation("usl");
    
    }
    if(keyWentUp("D") || keyWentUp(RIGHT_ARROW)){

        hs.x += 3
        hs.changeImage("usr");
        
    }
    

}
  }

drawSprites();



};







