var equalPress = false;


document.querySelector(".equal").addEventListener("click", answer)

len = document.querySelectorAll(".key").length;

for (var i = 0; i<len; i++){
    document.querySelectorAll(".key")[i].addEventListener("click", produceEquation)
}

len2 = document.querySelectorAll(".opKey").length;

for (var i = 0; i<len2; i++){
    document.querySelectorAll(".opKey")[i].addEventListener("click", produceEquation)
}


function produceEquation(){
    console.log(this.innerHTML);
    screenText = document.querySelector(".screen").textContent;
    if (screenText === "NaN" || equalPress === true) {
        screenText = "";
        equalPress = false;
        document.querySelector(".screen").style.color = "white"
    }
    screenText = screenText + this.textContent
    document.querySelector(".screen").textContent = screenText;    
}

document.addEventListener("keydown", function(event){
    screenText = document.querySelector(".screen").textContent;
    console.log(event.key);
    if (screenText === "NaN" || equalPress === true) {
        screenText = "";
        equalPress = false;
        document.querySelector(".screen").style.color = "white"
    }
    if (event.key === '=' && event.key === 'Shift') {
        // Prevent the default action (zooming)
        event.preventDefault();
      }    
    switch (event.key) {
        case "1":
            screenText = screenText + "1";
            document.querySelector(".screen").textContent = screenText;
            break;
        case "2":
            screenText = screenText + "2";
            document.querySelector(".screen").textContent = screenText;
            break;    
        case "3":
            screenText = screenText + "3";
            document.querySelector(".screen").textContent = screenText;
            break;
        case "4":
            screenText = screenText + "4";
            document.querySelector(".screen").textContent = screenText;
            break;
        case "5":
            screenText = screenText + "5";
            document.querySelector(".screen").textContent = screenText;
            break;
        case "6":
            screenText = screenText + "6";
            document.querySelector(".screen").textContent = screenText;
            break;
        case "7":
            screenText = screenText + "7";
            document.querySelector(".screen").textContent = screenText;
            break;            
        case "8":
            screenText = screenText + "8";
            document.querySelector(".screen").textContent = screenText;
            break;
        case "9":
            screenText = screenText + "9";
            document.querySelector(".screen").textContent = screenText;
            break;
        case "0":
            screenText = screenText + "0";
            document.querySelector(".screen").textContent = screenText;
            break;
        case "+":
            screenText = screenText + "+";
            document.querySelector(".screen").textContent = screenText;
            break;
        case "-":
            screenText = screenText + "-";
            document.querySelector(".screen").textContent = screenText;
            break;
        case "/":
            screenText = screenText + "/";
            document.querySelector(".screen").textContent = screenText;
            break;
        case "*":
            screenText = screenText + "*";
            document.querySelector(".screen").textContent = screenText;
            break;
        case "Enter":
            answer();
            break;
        case "=":
            answer();
            break;
        default:
            console.log(event)
            break;
    }
})


function answer(){
    equalPress = true;
    text = document.querySelector(".screen").textContent
    if (text==="NaN"){
        document.querySelector(".screen").textContent = "0"
    }
    text = document.querySelector(".screen").textContent
    document.querySelector(".screen").style.color = "red"
    try{
        var answer = eval(text);
        document.querySelector(".screen").textContent = answer;
    }
    catch (error){
        console.error("Error:", error.message);
        document.querySelector(".screen").textContent = "Invalid Expression"
    }
}

