function VerifyEnablement() {
    let selected = document.querySelector("select").value
    if(selected == "disabled") {
        document.querySelector("input[name = 'some-txt']").disabled = "true"
        let pElement = document.getElementById("message")
        pElement.innerText = "DISABLED"
        pElement.style.color = "white"
        pElement.backgroundColor = "red"

    }
    else {
        document.querySelector("input[name = 'some-txt']").disabled = "false"
        pElement = document.getElementById("message")
        pElement.innerText = ""
        pElement.style.color = "black"
        pElement.backgroundColor = "transparent"
    }
}