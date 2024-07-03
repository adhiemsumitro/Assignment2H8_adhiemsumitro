function showTheForm() {
    let toggleForm = document.querySelector("#myForm");
    toggleForm.style.display = "block";

    let fieldName = document.querySelector("#tblField1").innerText;
    let fieldRole = document.querySelector("#tblField2").innerText;
    let fieldAvailability = document.querySelector("#tblField3").innerText;
    let fieldUsia = document.querySelector("#tblField4").innerText;
    let fieldLokasi = document.querySelector("#tblField5").innerText;
    let fieldPengalaman = document.querySelector("#tblField6").innerText;
    let fieldEmail = document.querySelector("#tblField7").innerText;

    document.querySelector("#field-1").value = fieldName;
    document.querySelector("#field-2").value = fieldRole;
    document.querySelector("#field-3").value = fieldAvailability;
    document.querySelector("#field-4").value = fieldUsia;
    document.querySelector("#field-5").value = fieldLokasi;
    document.querySelector("#field-6").value = fieldPengalaman;
    document.querySelector("#field-7").value = fieldEmail;
}

function hideTheForm() {
    let toggleForm = document.querySelector("#myForm");
    toggleForm.style.display = "none";
}

function fnFormEdit() {
    // Prevent the form from submitting and reloading
    let form = document.querySelector("#myForm");
    form.onsubmit = function(event) {
        event.preventDefault();
    };

    let fieldName = document.querySelector("#field-1").value;
    let fieldRole = document.querySelector("#field-2").value;
    let fieldAvailability = document.querySelector("#field-3").value;
    let fieldUsia = document.querySelector("#field-4").value;
    let fieldLokasi = document.querySelector("#field-5").value;
    let fieldPengalaman = document.querySelector("#field-6").value;
    let fieldEmail = document.querySelector("#field-7").value;

    document.querySelector("#tblField1").innerText = fieldName;
    document.querySelector("#tblField2").innerText = fieldRole;
    document.querySelector("#tblField3").innerText = fieldAvailability;
    document.querySelector("#tblField4").innerText = fieldUsia;
    document.querySelector("#tblField5").innerText = fieldLokasi;
    document.querySelector("#tblField6").innerText = fieldPengalaman;
    document.querySelector("#tblField7").innerText = fieldEmail;

    hideTheForm(); 
}
