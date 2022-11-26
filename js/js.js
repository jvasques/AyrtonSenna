function hideLoader() {
    $('#loader').hide();
}
setTimeout(hideLoader, 2 * 1000);

function homeBtn() {
    document.getElementById("homeContent").style.display = "block";
    document.getElementById("curiosityContent").style.display = "none";
    document.getElementById("galeryContent").style.display = "none";
    document.getElementById("quizContent").style.display = "none";
    document.getElementById("awardsContent").style.display = "none";
}

function curiosityBtn() {
    document.getElementById("curiosityContent").style.display = "block";
    document.getElementById("homeContent").style.display = "none";
    document.getElementById("galeryContent").style.display = "none";
    document.getElementById("quizContent").style.display = "none";
    document.getElementById("awardsContent").style.display = "none";
}

function galeryBtn() {
    document.getElementById("galeryContent").style.display = "block";
    document.getElementById("curiosityContent").style.display = "none";
    document.getElementById("homeContent").style.display = "none";
    document.getElementById("quizContent").style.display = "none";
    document.getElementById("awardsContent").style.display = "none";
}

function quizBtn() {
    document.getElementById("quizContent").style.display = "block";
    document.getElementById("curiosityContent").style.display = "none";
    document.getElementById("homeContent").style.display = "none";
    document.getElementById("galeryContent").style.display = "none";
    document.getElementById("awardsContent").style.display = "none";
}

function awardsBtn() {
    document.getElementById("awardsContent").style.display = "block";
    document.getElementById("curiosityContent").style.display = "none";
    document.getElementById("homeContent").style.display = "none";
    document.getElementById("galeryContent").style.display = "none";
    document.getElementById("quizContent").style.display = "none";
}