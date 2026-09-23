const passInput = document.querySelector("#password");
const passInputConf = document.querySelector("#password_confirm");
const passSpan = document.querySelector("#pass");
const passSpanConf = document.querySelector("#pass-confirm");

function passLengthCheck() {
    const passValue = passInput.value;

    if (passValue.length < 8) {
        passSpan.textContent = "Min. 8 characters";
    } else {
        passSpan.textContent = "";
    }
}

function passConfCheck() {
    const passValue = passInput.value;
    const passConfValue = passInputConf.value;

    if (passValue != passConfValue) {
        passSpanConf.textContent = "Password did not match";
    } else if (passValue === passConfValue) {
        passSpanConf.textContent = "";
    }
}

function passCheckHandle() {
    passLengthCheck();
    passConfCheck();
}

passInput.addEventListener("input", passCheckHandle);
passInputConf.addEventListener("input", passConfCheck);