const load_audit = document.getElementById("load-audit");
const load_invest = document.getElementById("load-invest");
const contentDiv = document.getElementById("committee-content");
const url_audit = "includes/committees/audit.html"
const url_invest = "includes/committees/invest.html"


load_invest.onclick = reqDataInvest;

function outputInvest(data) {
    contentDiv.innerHTML = this.responseText;
    load_invest.setAttribute('aria-current', 'true');
    load_audit.setAttribute('aria-current', 'false');
}

function reqDataInvest() {
    const xhr = new XMLHttpRequest();
    xhr.addEventListener('load', outputInvest);
    xhr.open('GET', url_invest);
    xhr.send();
    console.log(xhr);
}


load_audit.onclick = reqDataAudit;

function outputAudit(data) {
    contentDiv.innerHTML = this.responseText;
    load_audit.setAttribute('aria-current', 'true');
    load_invest.setAttribute('aria-current', 'false');
}

function reqDataAudit() {
    const xhr = new XMLHttpRequest();
    xhr.addEventListener('load', outputAudit);
    xhr.open('GET', url_audit);
    xhr.send();
    console.log(xhr);
}