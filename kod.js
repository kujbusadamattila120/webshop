function nagyitKep(melyikKep) {
    document.getElementById('nagykep').src = melyikKep;
}

function visszaKep() {
    document.getElementById('nagykep').src = "ures.jpg";
}

function nagyitKep(fajlnev) {
    document.getElementById("nagykep").src = fajlnev;
}

function visszaKep() {
    document.getElementById("nagykep").src = "ures.jpg";
}

function szamol() {
    let ár1 = Number(document.getElementById("ar1").innerText);
    let db1 = Number(document.getElementById("mennyiseg1").value);
    let rész1 = ár1 * db1;
    document.getElementById("r1").innerText = rész1;

    let ár2 = Number(document.getElementById("ar2").innerText);
    let db2 = Number(document.getElementById("mennyiseg2").value);
    let rész2 = ár2 * db2;
    document.getElementById("r2").innerText = rész2;

    let ár3 = Number(document.getElementById("ar3").innerText);
    let db3 = Number(document.getElementById("mennyiseg3").value);
    let rész3 = ár3 * db3;
    document.getElementById("r3").innerText = rész3;

    let ár4 = Number(document.getElementById("ar4").innerText);
    let db4 = Number(document.getElementById("mennyiseg4").value);
    let rész4 = ár4 * db4;
    document.getElementById("r4").innerText = rész4;

    document.getElementById("osszesen").innerText = rész1 + rész2 + rész3 + rész4;
}