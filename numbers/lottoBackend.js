function listNum(num, where) {
    var para = document.createElement("LI");
    var t = document.createTextNode(num);
    para.appendChild(t);
    document.getElementById(where).appendChild(para);
    var att = document.createAttribute("class");
    att.value = "num";
    para.setAttributeNode(att);
}

function listSpecialNum(num, where) {
    var para = document.createElement("LI");
    var t = document.createTextNode(num);
    para.appendChild(t);
    document.getElementById(where).appendChild(para);
    var att = document.createAttribute("class");
    att.value = "num";
    para.setAttributeNode(att);
    para.style.color = "red";
}


function listWinners(){
    var winners = "winningNumbers";
    for (var i=0;i<5;i++){
        listNum(randomNum(48),winners);
    } 
    listSpecialNum(randomNum(18),winners);
}

function randomNum(n){
    var num = Math.random() * (n-1) + 1;
    num = Math.round(num);
    return num;
}

function getMyNums(){
    var mine = "myNumbers";
    var nums = prompt("Enter 5 numbers separated by a space");
    var myNums = nums.split(" ");
    for (var i=0;i<5;i++){
        listNum(myNums[i],mine);
    } 
    myNums[5] = prompt("Enter the lucky ball number");
    listSpecialNum(myNums[5],mine);
}