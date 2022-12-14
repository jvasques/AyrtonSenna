const checkboxes = document.querySelectorAll('input[type=checkbox]');

function hideLoader() {
    $('#loader').hide();
}
setTimeout(hideLoader, 2 * 1000);

function homeBtn() {
    document.getElementById("homeContent").style.display = "block";
    document.getElementById("curiosityContent").style.display = "none";
    document.getElementById("galleryContent").style.display = "none";
    document.getElementById("quizContent").style.display = "none";
    document.getElementById("awardsContent").style.display = "none";

    for (const i = 0; i < checkboxes.length; i++) {
        checkboxes[i].checked = !checkboxes[i].checked;
    }
}

function curiosityBtn() {
    document.getElementById("curiosityContent").style.display = "block";
    document.getElementById("homeContent").style.display = "none";
    document.getElementById("galleryContent").style.display = "none";
    document.getElementById("quizContent").style.display = "none";
    document.getElementById("awardsContent").style.display = "none";

    for (const i = 0; i < checkboxes.length; i++) {
        checkboxes[i].checked = !checkboxes[i].checked;
    }
}

function galleryBtn() {
    document.getElementById("galleryContent").style.display = "block";
    document.getElementById("curiosityContent").style.display = "none";
    document.getElementById("homeContent").style.display = "none";
    document.getElementById("quizContent").style.display = "none";
    document.getElementById("awardsContent").style.display = "none";

    for (const i = 0; i < checkboxes.length; i++) {
        checkboxes[i].checked = !checkboxes[i].checked;
    }
}

function quizBtn() {
    document.getElementById("quizContent").style.display = "block";
    document.getElementById("curiosityContent").style.display = "none";
    document.getElementById("homeContent").style.display = "none";
    document.getElementById("galleryContent").style.display = "none";
    document.getElementById("awardsContent").style.display = "none";

    for (const i = 0; i < checkboxes.length; i++) {
        checkboxes[i].checked = !checkboxes[i].checked;
    }
}

function awardsBtn() {
    document.getElementById("awardsContent").style.display = "block";
    document.getElementById("curiosityContent").style.display = "none";
    document.getElementById("homeContent").style.display = "none";
    document.getElementById("galleryContent").style.display = "none";
    document.getElementById("quizContent").style.display = "none";

    for (const i = 0; i < checkboxes.length; i++) {
        checkboxes[i].checked = !checkboxes[i].checked;
    }
}

function closeMenu() {
    for (const i = 0; i < checkboxes.length; i++) {
        checkboxes[i].checked = !checkboxes[i].checked;
    }
}

const controls = document.querySelectorAll('.control');
let currentItem = 0;
const items = document.querySelectorAll('.item');
const maxItems = items.length;

controls.forEach(control => {
    control.addEventListener('click', () => {
        const isLeft = control.classList.contains("arrowLeft");

        if (isLeft) {
            currentItem -= 1;
        } else {
            currentItem += 1;
        }

        if (currentItem >= maxItems) {
            currentItem =0;
        }

        if (currentItem <0) {
            currentItem = maxItems -1;
        }

        items.forEach (item => item.classList.remove('currentItem'));

        items[currentItem].scrollIntoView({
            inline: "center",
            behavior: "smooth"
        });

        items[currentItem].classList.add("currentItem");
    });
});