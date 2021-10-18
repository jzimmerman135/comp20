function createWinners(){
    var winningNums = [];
    for (var i=0;i<5;i++){
        var rand = Math.random() * 47 + 1;
        rand = Math.round(rand);
        winningNums[i] = rand;
    }

    return winningNums.sort(function(a, b){return a-b});
}

function createWinningLucky() {
    var lucky = Math.random() * 17 +1;
    return Math.round(lucky);
}

function displayMine(winArr, winLucky) {
    document.getElementById("win1").innerHTML = winArr[0];
    document.getElementById("win2").innerHTML = winArr[1];
    document.getElementById("win3").innerHTML = winArr[2];
    document.getElementById("win4").innerHTML = winArr[3];
    document.getElementById("win5").innerHTML = winArr[4];
    document.getElementById("winLucky").innerHTML = winLucky;
}

function displayWinners(myArr, myLucky){
    document.getElementById("my1").innerHTML = myArr[0];
    document.getElementById("my2").innerHTML = myArr[1];
    document.getElementById("my3").innerHTML = myArr[2];
    document.getElementById("my4").innerHTML = myArr[3];
    document.getElementById("my5").innerHTML = myArr[4];
    document.getElementById("myLucky").innerHTML = myLucky;
}

function getMyNums(){
    var myNums = [];
    var nums = prompt("Enter 5 winning numbers separated by a space");
    if (nums == ""){
        nums = "10 11 17 27 32";
    }
    myNums = nums.split(" ");
    myNums.sort();
    return myNums;
}

function getMyLucky() {
    let x = prompt("Enter your lucky number");
    if (x == ""){
        x = "15";
    }
    return x;
}

function calcMatches(winArr, myArr) {
    let matches = 0;
    for (var i=0;i<5;i++){
        for (var j=0;j<5;j++){
            if (winArr[i] == myArr[j]){
                matches++;
            }
        }
    }
    return matches;
}

function calcWinnings(matches, matchLucky){
    if (matches == 5){
        if (matchLucky){
            return "$7,000 a WEEK for LIFE";
        }
        return "$25,000 a YEAR for LIFE";
    }
    else if (matches == 4){
        if (matchLucky){
            return "$5,000";
        }
        return "$200";
    }
    else if (matches == 3){
        if (matchLucky){
            return "$150";
        }
        return "$20";
    }
    else if (matches == 2){
        if (matchLucky){
            return "$25";
        }
        return "$3";
    }
    else if (matches == 1){
        if (matchLucky){
            return "$6";
        }
    }
    else if (matches == 0){
        if (matchLucky){
            return "$4";
        }
    }
    return "nothing. Try again";
}

function displayCash(cashOut, matchLucky){
    document.getElementById("cash").innerHTML = "You win ";
    document.getElementById("cash").innerHTML += cashOut;
    document.getElementById("lucky").innerHTML = "Lucky ball did ";
    if (!matchLucky){
        document.getElementById("lucky").innerHTML += "not ";
    }
    document.getElementById("lucky").innerHTML += "match";
}