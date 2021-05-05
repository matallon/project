
var mainCharX,mainCharY,scrollPosX,gameCharX,gameCharY,scrollPosY,isLeft,isRight,isUp,isDown;
var faceLeft,faceRight,walkVal, isInteracting, campanicounter, stopped, mfcounter, seacounter,seaadd,seaUp,seaDown;
var worldBorderArray, npcCounter, openMap,text1,openingText,textCounter,text2,text3,text4,text5;

function setup()
{
   createCanvas(1370,615);

    colorMode(HSB);

    stroke(100,100,100);

    mainCharX =700;
    mainCharY =200;

    scrollPosX = -1000;
    scrollPosY = -1000;

    //variables for game character animations 
    isLeft = false;
    isRight = false;
    isUp = false;
    isDown = false;
    stopped = true;
    walkVal = 0; 
    faceLeft = true; 

    //where character is in game coords
    gameCharX = 0;
    gameCharY = 0;

    //animation counters
    campanicounter = 0;
    mfcounter = 0; 
    seacounter = 0;
    seaadd = 0;
    seaUp = true;
    seaDown = false;

    //world interaction code 
    stoppedRight = false; 
    stoppedLeft = false;
    stoppedUp = false;
    stoppedDown = false; 
    isInteracting = false; 

    worldBorderArray = []

    npcCounter = 0; 
    text1 = 200;
    openingText = "Press W,A,S,D to move!";
    textCounter = 0;
    openMap = false;

    text2 = 0;
    text3 = 0;
    text4 = 0;
    text5 = 0;
}

function draw()
{
    image(background,scrollPosX,scrollPosY);

    push();
    translate(scrollPosX,scrollPosY);
    campfireAnimation(5495,1760);
    campfireAnimation(5499,5444);
    moisture2Animation(4198,3709);
    moisture1Animation(3533,3694);

    ncpMovement(2127,1051,npc1Left,npc1Right,npc1LeftHi,npc1RightHi,1);
    ncpMovement(5308,1342,npc2Left,npc2Right,npc2LeftHi,npc2RightHi,2);
    ncpMovement(5760,5390,npc3Left,npc3Right,npc3LeftHi,npc3RightHi,3);
    ncpMovement(3989,4112,npc4Left,npc4Right,npc4LeftHi,npc4RightHi,4);

    pop();

    walkAnimation();
    
    if(openMap == true){
        image(minimap,320,20,727,570,0,0,6449,6000)
    }-

    colorMode(RGB);
    fill(0,0,0,text1);
    noStroke();
    textSize(30);
    text(openingText,mainCharX +110, mainCharY+100)
    text1 -=1;
    textStyle(BOLD)
    if(text1 < -10){
        if(textCounter == 0){
            openingText = "Press M to open the minimap"
            text1 = 200;
            textCounter +=1;
        } else if(textCounter == 1){
            openingText = "Press E to interact with people"
            text1 = 200;
            textCounter +=1;
        }
    }

    colorMode(HSB);

    //so some assets go infront of the main character when they are behind them 
    push();
    translate(scrollPosX,scrollPosY);

    //npcs
    if(gameCharY < 1037){
        ncpMovement(2127,1051,npc1Left,npc1Right,npc1LeftHi,npc1RightHi,1);
    }

    if(gameCharY < 1335){
        ncpMovement(5308,1342,npc2Left,npc2Right,npc2LeftHi,npc2RightHi,2);
    }

    if(gameCharY < 5386){
        ncpMovement(5760,5390,npc3Left,npc3Right,npc3LeftHi,npc3RightHi,3);
    }

    if(gameCharY < 4105){
        ncpMovement(3989,4112,npc4Left,npc4Right,npc4LeftHi,npc4RightHi,4);
    }


    //village 
    image(house1roof,4510,1421);

    if(gameCharY < 1704){
        campfireAnimation(5495,1760);
    }

    if(gameCharY <1652){
        image(log2flippedTOP,5729,1743);
    }
    if(gameCharY < 1793){
            image(log1,5286,1768);
    }
     
    if(gameCharY < 1551){
        image(tent2BottomStrings,5818,1385);
        if(gameCharY < 1434){
            image(tent2TopStrings,5818,1385);
        }
        if(gameCharY < 1395){
            image(tent2top,5818,1385);
        }
    }

    if(gameCharY<2528){
        image(house2,5389,2204);
    }

    if(gameCharY<840){
        image(house3,5365,608);
        image(flowerpot,5517,1317)
    }

    if(gameCharY < 2751){
        image(smalltree,5124,2692);
    }
    if(gameCharY < 779){
        image(dttall3,4891,526);
    }
    if(gameCharY < 441){
        image(dttall2,4216,301);
    }
    if(gameCharY < 760){
        image(grave1, 4658,722);
    }

    if(gameCharY < 788){
        image(grave2,4363,834);
    }

    if(gameCharY < 1010){
        image(dttall1,3740,597);
    }

    if(gameCharY < 2035){
        image(pylonwstring,3835,1591);
    }

    if(gameCharY < 2345){
        image(pylon,2724,1850);
    }

    if(gameCharY < 1466){
        image(cacti1,3334,1511); 
    }
    if(gameCharY < 1112){
        image(grave3,4537,1177);
    }

    if(gameCharY < 1221){
        image(flower1,4561,1339);
    }
    if(gameCharY < 2917){
        image(brokenpylon,1922,2452);
    }

    if(gameCharY < 5425){
        campfireAnimation(5499,5444);
    }

    if(gameCharY < 5050){
        image(tent1,5353,5073);
    }

    if(gameCharY < 5160){
        image(tent1BottomStrings,5353,5073);
    }
    if(gameCharY < 5078){
        image(tent1TopStrings,5353,5073);
    }

    if(gameCharY < 5202){
        image(normal1,5897,5339);
    }

    if(gameCharY <3581){
        image(horizontalfencewmf,3457,3665);
    }
    
    if(gameCharY < 3889){
        moisture2Animation(4198,3709);
    }
    
    if(gameCharY < 3899 && gameCharY > 3679){
        moisture1Animation(3533,3694);
    }

    if(gameCharY < 4903){
        image(smalltreeflipped,5146,4860);
    }

    if(gameCharY < 5057){
        image(barrel,5754,5139);
    }

    if(gameCharY <4200){
        image(barrel,3722,4255);
    }

    if(gameCharY < 3827){
        image(tree1,5010,3363);
    }

    if(gameCharY < 4760){
        image(tree2,5894,4324);
    }

    if(gameCharY < 4640){
        image(tree3,4032,4235);
    }

    if(gameCharY < 3272){
        image(tree4,3866,2785)
    }

    if(gameCharY <3570){
        image(tree5,2722,3162);
    }

    if(gameCharY < 4752){
        image(tree2,2875,4322);
    }

    if(gameCharY < 4243){
        image(tree1,1828,3788);
    }

    if(gameCharY < 3864){
        image(tree3,999,3445);
    }

    if(gameCharY < 4594){
        image(tree4,4731,4105);
    }

    if(gameCharY < 3325){
        image(treetrunk,5671,3401);
    }

    if(gameCharY < 2844){
        image(treetrunk,3362,2925);
    }

    if(gameCharY < 4260){
        image(treetrunk,2851,4338);
    }

    if(gameCharY < 3495){
        image(treetrunk,2282,3560);
    }

    if(gameCharY < 4207){
        image(treetrunk,5455,4298);
    }

    if(gameCharY < 2575){
        image(treetrunk,2538,2653);
    }

    if(gameCharY < 4256){
        image(treetrunk, 1148,4338);
    }

    if(gameCharY < 1845){
        image(succulent,1985,1950);
    }
    if(gameCharY <2111){
        image(dtshort2,1346,2097);
    }

    if(gameCharY <434){
        image(dstone1,1158,293);
    }
    
    if(gameCharY < 537){
        image(succulent,1741,641);
    }

    if(gameCharY < 1292){
        image(cacti2,687,1311);
    }
    
    if(gameCharY < 1202){
        image(dtshort4,2997,1142);
    }

    if(gameCharY < 545){
        image(dtshortest,3126,624);
    }

    if(gameCharY < 985){
        image(spawnfence,1821,1045);
    }

    if(gameCharY < 899){
        image(brokenhousefront,2901,765);
    }

    if(gameCharY < 710){
        image(brokenhouseback,2901,765);
    }

    pop();
   
    if(openMap == true){
        image(minimap,320,20,727,570,0,0,6449,6000)
    }-

        
    // ~~~walking navigation and movement~~~
    gameCharX = mainCharX - scrollPosX;
    gameCharY = mainCharY - scrollPosY;

    // ~~~~ village restricted space areas ~~~~  
    restrictedSpace(4472,1477,4996,2055,10); //house1 
    restrictedSpace(5208,1619,5382,1844,10); //log on left
    restrictedSpace(5432,1674,5618,1793,10); //campfire
    restrictedSpace(5802,1374,6099,1574,10); //tent 
    restrictedSpace(5313,774,5873,1231,10); //house 3
    restrictedSpace(5665,1611,5815,1821,10); //log on the right
    restrictedSpace(5404,2271,5971,2572,15); //house2
    
    //plants around the village
    restrictedSpace(3255,1406,3455,1505,10); //cacti 
    restrictedSpace(5121,2721,5281,2782,15); //small tree
    
    //top village graveyard
    restrictedSpace(4469,1059,4665,1146,15); //short grave
    restrictedSpace(4291,732,4461,822,15); //taller grave
    restrictedSpace(4614,710,4754,780,15); //cross grave
    restrictedSpace(4891,766,5061,846,15); //dead trees \/
    restrictedSpace(4180,408,4340,493,15); 
    restrictedSpace(3829,982,4019,1092,15);
   
    //pylons
    restrictedSpace(3850,2017,4351,2177,15); //pylon w string 
    restrictedSpace(2741,2322,3033,2410,15); //normal pylon
    restrictedSpace(1929,2890,2230,3016,15); //smallest pylon 
    
    //tree stumps 
    restrictedSpace(2464,2516,2676,2626,15); 
    restrictedSpace(3292,2793,3497,2903,15);
    restrictedSpace(2777,4211,2987,4318,15); 
    restrictedSpace(2216,3415,2419,3541,15);
    restrictedSpace(5387,4175,5590,4273,20);
    restrictedSpace(1075,4214,1278,4312,20);

    //trees
    restrictedSpace(2959,4716,3129,4810,20);
    restrictedSpace(1911,4204,2111,4330,20);
    restrictedSpace(2803,3543,2979,3653,20);
    restrictedSpace(4148,4605,4281,4689,20);
    restrictedSpace(4806,4521,4995,4626,20);
    restrictedSpace(5975,4721,6150,4805,20); //tree near campsite 
    restrictedSpace(5093,3804,5289,3888,15);
    restrictedSpace(3945,3202,4120,3321,15);
    restrictedSpace(1110,3797,1245,3909,15);

    //moisture farms 
    restrictedSpace(3282,3681,3396,4249,10); //left fence
    restrictedSpace(3363,3546,4675,3616,10); //top fence 
    restrictedSpace(3470,3823,3923,3913,10); //left farm 
    restrictedSpace(4129,3829,4591,3912,10); //right farm 
    restrictedSpace(4646,3682,4744,4231,10) //right fence
    restrictedSpace(3648,4138,3818,4243,20); //barrel 
    
    //bottom right campsite
    restrictedSpace(5667,5029,5856,5134,10); //barrel
    restrictedSpace(5408,5337,5632,5470,20); //campfire
    restrictedSpace(5331,5022,5583,5183,10); //tent 
    restrictedSpace(5114,4861,5268,4945,10); //tree 

    //desert items
    restrictedSpace(1294,2069,1434,2132,20); //dead tree 2
    restrictedSpace(1917,1817,2092,1873,20); 
    restrictedSpace(1084,238,1840,644,20); //big rock
    restrictedSpace(601,1229,818,1341,20);
    restrictedSpace(2946,1139,3100,1244,20);
    restrictedSpace(3044,517,3170,576,20);
    restrictedSpace(1749,929,2085,1013,10);
  
    //broken house
    restrictedSpace(2837,864,2963,969,10); //two front logs 
    restrictedSpace(3215,857,3348,955,10);
    restrictedSpace(2893,668,3313,752,10); //back part

    //npcs
    restrictedSpace(5217,1300,5364,1363,10); //npc2 
    restrictedSpace(2039,983,2193,1081,10);
    restrictedSpace(5690,5344,5830,5408,10);


    if(isLeft == true){
       if(mainCharX > width * 0.1){
           mainCharX -= 7;
       } else {
           scrollPosX +=7;
       } 
    }
    
    if(isRight == true){
       if(mainCharX < width * 0.75){
           mainCharX += 7;
       } else {
           scrollPosX -=7;
       }
    } 
    
    if(isDown == true){
       if(mainCharY < height * 0.6){
           mainCharY += 7;
       } else {
           scrollPosY -=7;
       }
    } 
    
    if(isUp == true){
       if(mainCharY > height * 0.1){
           mainCharY -= 7;
       } else {
           scrollPosY +=7;
       }
    } 
    
    if(stoppedLeft){
        isLeft = false; 
    } else if(stoppedRight){
        isRight = false;
    } else if(stoppedUp){
        isUp = false;
    } else if(stoppedDown){
        isDown = false;
    }


    //sea animation 
    seacounter += seaadd;

    if(seacounter < 10){
        //image(sea1,scrollPosX,scrollPosY);
    } else if (seacounter <20){
        image(sea2, scrollPosX,scrollPosY);
    } 

    if(seacounter == 40){
         seaUp = false;
         seaDown = true;
    } else if(seacounter == 0){
        seaUp = true;
        seaDown = false;
    }

    if(seaUp == true){
        seaadd = 0.5;
    } 
    if(seaDown == true){
        seaadd = -0.5;
    }



    //world borders for the top left corner 
    worldBorderUp(6000,30); //main one for the top 
    worldBorderLeft(802,209);
    worldBorderUp(0,223);
    //sea edge
    worldBorderLeft(242,4000); 
    
    //edges for left
    if(gameCharY > 1890 && gameCharX < 320){
        if(gameCharY > 1901 && gameCharX < 308){
            stoppedDown = true;
        } else {
            stoppedDown = false;
        }
    }

    if(gameCharX < 130){
        scrollPosX -= 10;
    }

    if(gameCharY > 3110 && gameCharX < 410){
        if(gameCharY > 3130 && gameCharX < 400){
            stoppedDown = true;
        } else {
            stoppedDown = false;
        }
    }

    if(gameCharY > 3963 && gameCharX < 520){
        if(gameCharY > 3973 && gameCharX < 532){
            stoppedDown = true;
        } else {
            stoppedDown = false;
        }
    }

    if(gameCharX > 520 && gameCharY > 3900 && gameCharY < 4100 && gameCharX < 1000){
        stoppedDown = false;
    }

    
    if(gameCharX < 338 && gameCharY > 1932){
        if(gameCharY > 1952 && gameCharX < 328){
            stoppedLeft= true; 
        } else { 
            stoppedLeft = false;
        }
    } 

    if(gameCharY < 100){
        scrollPosY -=10;
    }

    
    if(gameCharX < 560 && gameCharY > 3970 && gameCharX < 5200){
        if(gameCharY > 3990 && gameCharX < 550 && gameCharY < 5190){
            stoppedLeft= true; 
        } else { 
            stoppedLeft = false;
        }
    } 
    
   worldBorderDown(1533,4582);

   if(gameCharX < 1543 && gameCharY > 4621){
        if(gameCharY > 4631 && gameCharX < 1533){
            stoppedLeft= true; 
        } else { 
            stoppedLeft = false;
        }
    } 
    
    worldBorderDown(2079,4834);

    worldBorderDown(2443,5037);

    
   if(gameCharX < 2066 && gameCharY > 4842){
        if(gameCharY > 4852 && gameCharX < 2056){
            stoppedLeft= true; 
        } else { 
            stoppedLeft = false;
        }
    } 

    if(gameCharX < 1545 && gameCharY > 4590){
        if(gameCharY > 4600 && gameCharX < 1535){
            stoppedLeft= true; 
        } else { 
            stoppedLeft = false;
        }
    } 
    
    if(gameCharX < 2455 && gameCharY > 5045){
        if(gameCharY > 5055 && gameCharX < 2443){
            stoppedLeft= true; 
        } else { 
            stoppedLeft = false;
        }
    } 

    worldBorderDown(2884,5181);

    if(gameCharX < 2927 && gameCharY > 5206){
        if(gameCharY > 5216 && gameCharX < 2916){
            stoppedLeft= true; 
        } else { 
            stoppedLeft = false;
        }
    } 
    
    worldBorderDown(3458,5440);

    if(gameCharX > 3427 && gameCharY > 5262 && gameCharX < 4182){
        if(gameCharX > 3437 && gameCharY > 5272 && gameCharX < 4172){
            stoppedRight = true; 
        } else { 
            stoppedRight = false;
        }
    } 

    if(gameCharX > 3427 && gameCharY > 5231 && gameCharX < 4665){
        if( gameCharX > 3437 && gameCharY > 5261 && gameCharX < 4654){
            stoppedDown= true; 
        } else { 
            stoppedDown = false;
        }
    }

    if(gameCharX < 4672 && gameCharY > 5276 && gameCharX > 4400 ){
        if( gameCharX < 4662 && gameCharY > 5286 && gameCharX > 4410){
            stoppedLeft= true; 
        } else { 
            stoppedLeft = false;
        }
    } 
    
    if(gameCharX > 4631 && gameCharY > 5388 && gameCharX < 5141){
        if( gameCharX > 4641 && gameCharY > 5398 && gameCharX < 5131){
            stoppedDown= true; 
        } else { 
            stoppedDown = false;
        }
    }
    
    if(gameCharX < 5141 && gameCharY > 5409 && gameCharX > 4647 ){
        if( gameCharX < 5131 && gameCharY > 5419 && gameCharX > 4767){
            stoppedLeft= true; 
        } else { 
            stoppedLeft = false;
        }
    } 

    if(gameCharX > 5100 && gameCharY > 5563 && gameCharX < 6405){
        if( gameCharX > 5110 && gameCharY > 5573 && gameCharX < 6410){
            stoppedDown= true; 
        } else { 
            stoppedDown = false;
        }
    }

    if(gameCharY > 5594){
        scrollPosY += 10;
    }

    if(gameCharX < 500 && gameCharY > 4300){
        scrollPosX -=10;
    }
    
    worldBorderRight(6328,4100);
    worldBorderUp(6204,4186);


    if(gameCharX > 6180 && gameCharY < 4071){
        if(gameCharX > 6200 && gameCharY < 4081){
            stoppedRight = true; 
        } else { 
            stoppedRight = false;
        }
    } 

}
      
function keyPressed(){
    if(keyCode == 68){ 
        if(stoppedRight == false){
            isRight = true; 
            faceLeft = false;
        }                                                                                           
    }
    
    if(keyCode == 65){ 
        if(stoppedLeft == false){
            isLeft = true; 
            faceLeft = true; 
        }                                                                                           
    }  
    
    if(keyCode == 83){  
        if(stoppedDown == false){
            isDown = true; 
        }                                                                                          
    }  
    
    if(keyCode == 87){   
        if(stoppedUp == false){
            isUp = true; 
        }                                                                                      
    }  

    if(keyCode == 69){
        isInteracting = true;
    }

    if(keyCode == 77){
        openMap = true;
    }
}
    
function keyReleased(){
    if(keyCode == 68){   
        isRight = false;   
    }  

    if(keyCode == 65){                                                                                            
        isLeft = false; 
    }  
    
    if(keyCode == 83){                                                                                            
        isDown = false; 
    }  
    
    if(keyCode == 87){                                                                                            
        isUp = false; 
    }  

    if(keyCode == 69){
        isInteracting = false; 
    }

    if(keyCode == 77){
        openMap = false;
    }
}

function walkAnimation(){   
    if(isUp == true || isDown == true || isLeft == true || isRight == true){
        walkVal +=5;
        stopped = false; 
        
        if(walkVal == 60){
           walkVal = 0;
        } 
    } else{
        stopped = true;
    }

    if(faceLeft == true){
        if (isInteracting == true){
            isLeft = false; 
            isUp = false;
            isDown = false; 
            image(mcHiLeft,mainCharX,mainCharY)
        } else if(walkVal <= 15 || stopped == true){
            image(mcStoppedLeft,mainCharX,mainCharY);
        } else if(walkVal <= 30){
            image(mcWalk1Left,mainCharX,mainCharY);
        } else if (walkVal <= 45){
            image(mcWalk2Left,mainCharX,mainCharY);
        } else {
            image(mcWalk3Left,mainCharX,mainCharY);
        } 
    }

    if(faceLeft == false){
        if(isInteracting == true){
            isRight = false;
            isUp = false;
            isDown = false; 
            image(mcHiRight,mainCharX,mainCharY)
        } else if(walkVal <= 15 || stopped == true){
            image(mcStoppedRight,mainCharX,mainCharY);
        } else if(walkVal <= 30){
            image(mcWalk1Right,mainCharX,mainCharY);
        } else if (walkVal <= 45){
            image(mcWalk2Right,mainCharX,mainCharY);
        } else {
            image(mcWalk3Right,mainCharX,mainCharY);
        }
    }
}


//animation functions 
function campfireAnimation(x,y){
    
    if(campanicounter<=10){
        image(campani1,x,y);
    } else if (campanicounter<= 20){
        image(campani2,x,y);
    } else{
        image(campani3,x,y);
    }

    campanicounter +=0.3; 

    if(campanicounter>30){
        campanicounter = 0; 
    }
}

function moisture1Animation(x,y){
    
    if(mfcounter<=10){
        image(V1mf1,x,y);
    } else if (mfcounter<= 20){
        image(V1mf2,x,y);
    } else{
        image(V1mf3,x,y);
    }

    mfcounter +=0.3; 

    if(mfcounter>30){
        mfcounter= 0; 
    }
}

function moisture2Animation(x,y){
    
    if(mfcounter<=10){
        image(V2mf1,x,y);
    } else if (mfcounter<= 20){
        image(V2mf2,x,y);
    } else{
        image(V2mf3,x,y);
    }

    mfcounter +=0.3; 

    if(mfcounter>30){
        mfcounter= 0; 
    }
}


function restrictedSpace(x1,y1,x2,y2,takeAddVal){
    if(gameCharX > x1-takeAddVal && gameCharY > y1-takeAddVal && gameCharX < x2+takeAddVal && gameCharY < y2+takeAddVal){
    
        if(gameCharX > x1 && gameCharY > y1 && gameCharX < x2  && gameCharY < y2){
            if(gameCharX > x1 && gameCharX < x1 + 10){
                stoppedRight = true; 
            } else if (gameCharX < x2 && gameCharX > x2 - 10){
                stoppedLeft = true; 
            } else if (gameCharY > y1 && gameCharY < y1 + 10){
                stoppedDown = true;
            } else if(gameCharY < y2 && gameCharY > y2 - 10){
                stoppedUp = true;
            }
        } else {
            stoppedRight = false; 
            stoppedLeft = false;
            stoppedDown = false;
            stoppedUp = false;
        }
    }
}

function worldBorderUp(x,y){
    if(gameCharX > x-10 && gameCharY < y+10){
        if(gameCharY < y && gameCharX > x){
            stoppedUp = true; 
        } else { 
            stoppedUp = false;
        }
    }
}

function worldBorderLeft(x,y){
        if(gameCharX < x+10 && gameCharY < y+10){
            if(gameCharY < y && gameCharX < x){
                stoppedLeft= true; 
            } else { 
                stoppedLeft = false;
            }
        }   
} 



function worldBorderRight(x,y){
    if(gameCharX > x-10 && gameCharY > y-10){
        if(gameCharX > x && gameCharY > y){
            stoppedRight = true; 
        } else { 
            stoppedRight = false;
        }
    } 
    
}

function worldBorderDown(x,y,x2,y2){
    if(gameCharX < x+10 && gameCharY > y-10){
        if(gameCharY > y && gameCharX < x){
            
            stoppedDown = true; 
        } else { 
            stoppedDown = false;
        }
    }
}

function ncpMovement(x,y,image1,image2,imagehi1,imagehi2,npcnumber){
    let randomLower = -0.125;
    if(npcCounter <= 102){
        randomLower = 0;
    } else if(npcCounter < 100 || npcCounter > 110){
        randomLower = -0.125;
    }
    npcCounter += random(randomLower,0.25);

    if(npcCounter > 200 || npcCounter < 0){
        npcCounter = 0;
    }

    if(isInteracting && gameCharX > x -200 && gameCharX < x+200 && gameCharY > y-200 && gameCharY < y+200){
        if(gameCharX < x){
            image(imagehi1,x,y);
            image(leftbubble,x-130,y-40);
            textSize(10.5);
            textStyle(BOLD);
            fill(0,0,0);
    
            if(npcnumber == 1){
                if(text2 < 100){
                    text("Welcome to what remains", x-120,y-8);
                    text("of our society...",x-88,y+8);
                } else if(text2 < 200){
                    text("This what climate change", x-120,y-8);
                    text("has done to us",x-88,y+8);
                }
                text2 +=1;
                if(text2 == 200){
                    text2 = 0;
                }
            }
            if(npcnumber == 2){
                if(text3 < 100){
                    text("This is where most of",x-115,y-8);
                    text("us left reside now.", x-100,y+8);
                } else if(text3 < 200){
                    text("its not much, but its",x-115,y-8);
                    text("enough....",x-88,y+8);
                }
                text3 +=1;
                if(text3 == 200){
                    text3 = 0;
                }
            }
            if(npcnumber == 3){
                if(text4 < 100){
                    text("hello! this is our little",x-115,y-8);
                    text("fishing campsite", x-100,y+8);
                } else if(text3 < 200){
                    text("I try my best with what",x-115,y-8);
                    text("little is left in the sea",x-98,y+8);
                }
                text4 +=1;
                if(text4 == 200){
                    text4 = 0;
                }
            }

            if(npcnumber == 4){
                if(text5 < 100){
                    text("Hello! You've found our",x-115,y-8);
                    text("moisture farms!", x-100,y+8);
                } else if(text5 < 200){
                    text("They pump water up from",x-115,y-8);
                    text("the ground for us",x-98,y+8);
                } else if(text5 < 300){
                    text("The sea is too polluted",x-115,y-8);
                    text("so we drink from these",x-107,y+8);
                }

                text5 +=1;
                if(text5 == 300){
                    text5 = 0;
                }
            }



        } else {
            image(imagehi2,x,y);
            image(rightbubble,x+90,y-40);

            textSize(10.5);
            textStyle(BOLD);
            fill(0,0,0);
    
            if(npcnumber == 1){

                if(text2 < 100){
                    text("Welcome to what remains", x+100,y-8);
                    text("of our society...",x+130,y+8);
                } else if(text2 < 200){
                    text("This what climate change", x+100,y-8);
                    text("has done to us",x+130,y+8);
                }
                text2 +=1;
                if(text2 == 200){
                    text2 = 0;
                }
                
            }

            if(npcnumber == 2){
                if(text3 < 100){
                    text("This is where most of",x+100,y-8);
                    text("us left reside now.", x+120,y+8);
                } else if(text3 < 200){
                    text("its not much, but its",x+110,y-8);
                    text("enough....",x+130,y+8);
                }
                text3 +=1;
                if(text3 == 200){
                    text3 = 0;
                }
            }

            if(npcnumber == 3){
                if(text4 < 100){
                    text("hello! this is our little",x+105,y-8);
                    text("fishing campsite", x+120,y+8);
                } else if(text3 < 200){
                    text("I try my best with what",x+105,y-8);
                    text("little is left in the sea",x+110,y+8);
                }
                text4 +=1;
                if(text4 == 200){
                    text4 = 0;
                }
            }


        }
    } else if(npcCounter < 100){
        image(image1,x +13,y);
    } else if(npcCounter > 100){
        image(image2,x -13,y);
    }

}


