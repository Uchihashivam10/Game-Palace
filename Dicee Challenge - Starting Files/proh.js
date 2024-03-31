


    var team1 = Math.floor(Math.random()*6)+1;
    var team2 = Math.floor(Math.random()*6)+1;
    
    if(team1 == 1){
    document.querySelector(".img1").setAttribute("src","./images/dice1.png")
    }
    else if(team1 == 2){
        document.querySelector(".img1").setAttribute("src","./images/dice2.png")
    }
    else if(team1 == 3){
        document.querySelector(".img1").setAttribute("src","./images/dice3.png")
    }
    else if(team1 == 4){
        document.querySelector(".img1").setAttribute("src","./images/dice4.png")
    }
    else if(team1 == 5){
        document.querySelector(".img1").setAttribute("src","./images/dice5.png")
    }
    else if(team1 == 6){
        document.querySelector(".img1").setAttribute("src","./images/dice6.png")
    }
    
    //team 2
    
    if(team2 == 1){
        document.querySelector(".img2").setAttribute("src","./images/dice1.png")
        }
        else if(team2 == 2){
            document.querySelector(".img2").setAttribute("src","./images/dice2.png")
        }
        else if(team2 == 3){
            document.querySelector(".img2").setAttribute("src","./images/dice3.png")
        }
        else if(team2 == 4){
            document.querySelector(".img2").setAttribute("src","./images/dice4.png")
        }
        else if(team2 == 5){
            document.querySelector(".img2").setAttribute("src","./images/dice5.png")
        }
        else if(team2 == 6){
            document.querySelector(".img2").setAttribute("src","./images/dice6.png")
        }
    // random(team1,team2);
    // function random(t1, t2){
    if(team1>team2){
        document.querySelector("h1").innerHTML="Player 1 wins";
        // $("h1").text("Player 1 Won");
        // setTimeout(function () {
        //     $("h1").text("Refresh Me");
        // }, 2000);
    }
    else if(team1<team2){
        document.querySelector("h1").innerHTML="Player 2 wins";
        // setTimeout(function () {
        //     $("h1").text("Refresh Me");
        // }, 2000);
    }
    else{
        document.querySelector("h1").innerHTML="DRAW";
        // setTimeout(function () {
        //     $("h1").text("Refresh Me");
        // }, 2000);
    }
        // }

    


