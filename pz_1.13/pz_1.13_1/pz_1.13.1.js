const modal = document.getElementById("modal");
const btn = document.getElementById("btn-modal-window");
const span = document.getElementsByClassName("close-modal-window")[0];
const btnSubmitLang = document.getElementById("submit-lang")
const labelP = document.getElementById("label-p")
const inputD = document.getElementById("input-d")
const errorP = document.getElementById("error-p")


let flag = false
let isEng = false

btnSubmitLang.onclick = function () {
    if (!flag) {
        if (inputD.value.toLowerCase() === "ua") {
            console.log("Okey")
            errorP.textContent = ""
            labelP.textContent = "Введіть число від 1 до 7"
            inputD.value = ""
            flag = true
        } else if (inputD.value.toLowerCase() === "eng") {
            console.log("Okey")
            errorP.textContent = ""
            labelP.textContent = "Enter numeric from 1 to 7"
            inputD.value = ""
            flag = true
            isEng = true
        } else {
            errorP.textContent = "Неправильні дані"
        }
    } else {
        if (Number(inputD.value) > 0 && Number(inputD.value) < 8) {
            switch (Number(inputD.value)) {
                case 1:
                    isEng ? labelP.textContent = "Monday" : labelP.textContent = "Понеділок"
                    break;
                case 2:
                    isEng ? labelP.textContent = "Tuesday" : labelP.textContent = "Вівторок"
                    break;
                case 3:
                    isEng ? labelP.textContent = "Wednesday" : labelP.textContent = "Середа"
                    break;
                case 4:
                    isEng ? labelP.textContent = "Thursday" : labelP.textContent = "Четверг"
                    break;
                case 5:
                    isEng ? labelP.textContent = "Friday" : labelP.textContent = "Пʼятниця"
                    break;
                case 6:
                    isEng ? labelP.textContent = "Saturday" : labelP.textContent = "Субота"
                    break;
                case 7:
                    isEng ? labelP.textContent = "Sunday" : labelP.textContent = "Неділя"
                    break;

            }
        } else {
            isEng ? errorP.textContent = "Bad day" : errorP.textContent = "Неправильне число"
        }
    }

}

inputD.onchange = function (){
    errorP.textContent = ""
}


span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}



