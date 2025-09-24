// switch calendars DATA in Investors Relations Page getting the HTML tables from the /include html files

const load2024 = document.getElementById("2024");
const load2025 = document.getElementById("2025");
const contentDiv = document.getElementById("calendars");
const url2024 = "includes/tables/financial-calendar-2024.html"
const url2025 = "includes/tables/financial-calendar-2025.html"

load2024.onclick = reqData2024;

function output2024(data) {

    contentDiv.innerHTML = this.responseText;
    load2024.setAttribute('aria-current', 'true');
    load2025.setAttribute('aria-current', 'false');
}

function reqData2024() {
    const xhr = new XMLHttpRequest();
    xhr.addEventListener('load', output2024);
    xhr.open('GET', url2024);
    xhr.send();
    console.log(xhr);
}


load2025.onclick = reqData2025;

function output2025(data) {

    contentDiv.innerHTML = this.responseText;
    load2025.setAttribute('aria-current', 'true');
    load2024.setAttribute('aria-current', 'false');
}

function reqData2025() {
    const xhr = new XMLHttpRequest();
    xhr.addEventListener('load', output2025);
    xhr.open('GET', url2025);
    xhr.send();
    console.log(xhr);
}

