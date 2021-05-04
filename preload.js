function preload(){
    background = loadImage('assets/map/filledoutmap.png');
    seaoverlay = loadImage('assets/map/sea.png');

    sea1 = loadImage('assets/map/seaanimation/layer1.png')
    sea2 = loadImage('assets/map/seaanimation/layer2.png')

    //main character walking animations 
    mcStoppedLeft = loadImage('assets2/people/mcStoppedLeft.PNG');
    mcWalk1Left = loadImage('assets2/people/mcWalk1Left.PNG');
    mcWalk2Left = loadImage('assets2/people/mcWalk2Left.PNG');
    mcWalk3Left = loadImage('assets2/people/mcWalk3Left.PNG');

    mcStoppedRight = loadImage('assets2/people/mcStoppedRight.PNG');
    mcWalk1Right = loadImage('assets2/people/mcWalk1Right.PNG');
    mcWalk2Right = loadImage('assets2/people/mcWalk2Right.PNG');
    mcWalk3Right = loadImage('assets2/people/mcWalk3Right.PNG');

    npc1Left = loadImage('assets2/people/npc1Left.PNG');
    npc1LeftHi = loadImage('assets2/people/npc1LeftHi.PNG');
    npc1Right = loadImage('assets2/people/npc1Right.PNG');
    npc1RightHi = loadImage('assets2/people/npc1RightHi.PNG');

    //main character hi
    mcHiLeft = loadImage("assets2/people/mcHiLeft.PNG");
    mcHiRight = loadImage("assets2/people/mcHiRight.PNG");

    npc2Left = loadImage('assets2/people/npc2Left.PNG');
    npc2LeftHi = loadImage('assets2/people/npc2LeftHi.PNG');
    npc2Right = loadImage('assets2/people/npc2Right.PNG');
    npc2RightHi = loadImage('assets2/people/npc2RightHi.PNG');

    npc3Left = loadImage('assets2/people/npc3Left.png');
    npc3Right = loadImage('assets2/people/npc3Right.png');
    npc3LeftHi = loadImage('assets2/people/npc3LeftHi.png');
    npc3RightHi = loadImage('assets2/people/npc3RightHi.png');

    npc4Left = loadImage('assets2/people/npc4Left.png');
    npc4Right = loadImage('assets2/people/npc4Right.png');
    npc4LeftHi = loadImage('assets2/people/npc4LeftHi.png');
    npc4RightHi = loadImage('assets2/people/npc4RightHi.png');

    leftbubble = loadImage('assets/speechbubbles/left.png');
    rightbubble = loadImage('assets/speechbubbles/right.png');

    //houses 
    house2 = loadImage('assets/houses/house2simple.png');
    house3 = loadImage('assets/houses/house3simple.png');
    house1roof = loadImage('assets/houses/house1simpleroof.png')
    brokenhouseback = loadImage('assets/houses/brokenhouseback.png')
    brokenhousefront = loadImage('assets/houses/brokenhousefront.png')
    
    //tents
    tent1 = loadImage('assets2/tents/tent1.PNG');
    tent1TopStrings = loadImage('assets2/tents/tent1BottomStrings.png');
    tent1BottomStrings = loadImage('assets2/tents/tent1TopStrings.png');
    tent2BottomStrings = loadImage('assets2/tents/tent2BottomStrings.png');
    tent2TopStrings = loadImage('assets2/tents/tent2TopStrings.png');
    tent2top = loadImage('assets2/tents/tent2Top.png');
    
    //dead trees
    dtshortest = loadImage('assets/deadtrees/short.PNG');
    dtshort2 = loadImage('assets/deadtrees/shorter2.PNG');
    dtshort4 = loadImage('assets/deadtrees/shorter4.PNG');
    dttall1 = loadImage('assets/deadtrees/taller1.PNG');
    dttall2 = loadImage('assets/deadtrees/taller2.PNG');
    dttall3 = loadImage('assets/deadtrees/taller3.PNG');
    
    //cacti 
    cacti1 = loadImage('assets/cacti/circlecacti1.PNG');
    cacti2 = loadImage('assets/cacti/circlecacti2.PNG');
    succulent = loadImage('assets/cacti/succulent.PNG');
    
    //desert stones
    dstone1 = loadImage('assets/desertstones/big.PNG');

    //campfires
    campani1 = loadImage('assets/fires/campanimation/camp1.PNG');
    campani2 = loadImage('assets/fires/campanimation/camp2.PNG');
    campani3 = loadImage('assets/fires/campanimation/camp3.PNG');

    //torch 
    torchani1 = loadImage('assets/fires/torchani/1.png');
    torchani2 = loadImage('assets/fires/torchani/2.png');
    torchani3 = loadImage('assets/fires/torchani/3.png');

    //moisture farms
    V1mf1 = loadImage('assets/moisturefarms/version1/m1.PNG')
    V1mf2 = loadImage('assets/moisturefarms/version1/m2.PNG')
    V1mf3 = loadImage('assets/moisturefarms/version1/m3.PNG')

    V2mf1 = loadImage('assets/moisturefarms/version2/m1.PNG');
    V2mf2 = loadImage('assets/moisturefarms/version2/m2.PNG');
    V2mf3 = loadImage('assets/moisturefarms/version2/m3.PNG');

    //miscellaneous
    barrel = loadImage('assets2/outsideobject/barrel.PNG');
    horizontalfence = loadImage('assets2/outsideobject/horizontalfence.PNG');
    horizontalfencewmf = loadImage('assets2/outsideobject/horizontalfencewtoplayer.png');
    verticalfence = loadImage('assets2/outsideobject/verticalfence.png');
    verticalfenceflipped = loadImage('assets2/outsideobject/verticalfenceflipped.PNG');
    spawnfence = loadImage('assets2/outsideobject/spawnfence.png');
    pier = loadImage('assets2/outsideobject/pier.png');

    //fur trees
    tree1 = loadImage('assets/furtrees/1.PNG');
    tree2 = loadImage('assets/furtrees/2.PNG');
    tree3 = loadImage('assets/furtrees/3.PNG');
    tree4 = loadImage('assets/furtrees/4.PNG');
    tree5 = loadImage('assets/furtrees/5.PNG');

    //small plants 
    flower1 = loadImage('assets2/smallplants/flower1.PNG');
    flowerpot = loadImage('assets2/smallplants/flowerpot.PNG');
    log1 = loadImage('assets2/smallplants/log.PNG');
    log2flipped = loadImage('assets2/smallplants/log2flipped.png');
    log2flippedTOP = loadImage('assets2/smallplants/log2flippedTOP.png');
    smalltree = loadImage('assets2/smallplants/smalltree.PNG');
    deadStick = loadImage('assets2/smallplants/stick.PNG');
    treetrunk = loadImage('assets2/smallplants/treetrunk.PNG');
    smalltreeflipped = loadImage('assets2/smallplants/smalltreeflipped.png');

    //stones
    grave1 =  loadImage('assets2/stones/grave1.PNG');
    grave2 =  loadImage('assets2/stones/grave2.PNG');
    grave3 = loadImage('assets2/stones/tinygrave.PNG')
    normal1 = loadImage('assets2/stones/stone1.PNG');
    stonecircle = loadImage('assets2/stones/stonecircle.PNG');

    //old tech
    pylonwstring = loadImage('assets2/oldtech/pylonwstring.PNG')
    pylonjuststring = loadImage('assets2/oldtech/pylonjuststring.png')
    pylon = loadImage('assets2/oldtech/pylon.PNG');
    brokenpylon = loadImage('assets2/oldtech/brokenpylon.PNG');
}
