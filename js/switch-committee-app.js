const load_audit = document.getElementById("load-audit");
const load_invest = document.getElementById("load-invest");
const contentDiv = document.getElementById("committee-content");
const url_audit = "includes/committees/audit.html"
const url_invest = "includes/committees/invest.html"


load_invest.onclick = reqDataInvest;

function outputInvest(data) {
    contentDiv.innerHTML = this.responseText;

    var list, index;
    list = document.getElementsByClassName("cmtee-switch");
    for (index = 0; index < list.length; ++index) {
        list[index].setAttribute('aria-current', 'false');
    }

    load_invest.setAttribute('aria-current', 'true');
}

function reqDataInvest() {
    const xhr = new XMLHttpRequest();
    xhr.addEventListener('load', outputInvest);
    xhr.open('GET', url_invest);
    xhr.send();

}


load_audit.onclick = reqDataAudit;

function outputAudit(data) {
    contentDiv.innerHTML = this.responseText;

    var list, index;
    list = document.getElementsByClassName("cmtee-switch");
    for (index = 0; index < list.length; ++index) {
        list[index].setAttribute('aria-current', 'false');
    }

    load_audit.setAttribute('aria-current', 'true');
}

function reqDataAudit() {
    const xhr = new XMLHttpRequest();
    xhr.addEventListener('load', outputAudit);
    xhr.open('GET', url_audit);
    xhr.send();

}