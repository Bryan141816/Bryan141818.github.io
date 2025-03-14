const output = document.getElementById("output");

function encrypt(text, shift) {
    let result = "";
    for (let i = 0; i < text.length; i++) {
        let char = text[i];
        if (char.match(/[a-z]/i)) { // Check if it's a letter
            let code = text.charCodeAt(i);
            let shiftAmount = shift % 26; // Keep shifts within alphabet range
            if (code >= 65 && code <= 90) { // Uppercase letters
                char = String.fromCharCode(((code - 65 + shiftAmount) % 26) + 65);
            } else if (code >= 97 && code <= 122) { // Lowercase letters
                char = String.fromCharCode(((code - 97 + shiftAmount) % 26) + 97);
            }
        }
        result += char;
    }
    return result;
}
function decrypt(text, shift) {
    let result = "";

    for (let i = 0; i < text.length; i++) {
        let char = text[i];

        if (char.match(/[a-zA-Z]/)) { // Check if it's a letter
            let code = text.charCodeAt(i);
            let shiftAmount = shift % 26; // Keep shifts within alphabet range

            if (code >= 65 && code <= 90) { // Uppercase letters
                char = String.fromCharCode(((code - 65 - shiftAmount + 26) % 26) + 65);
            } else if (code >= 97 && code <= 122) { // Lowercase letters
                char = String.fromCharCode(((code - 97 - shiftAmount + 26) % 26) + 97);
            }
        }

        result += char;
    }

    return result;
}



document.getElementById("encrypt").addEventListener("click", function(e) {
    e.preventDefault()
    const input1 = document.getElementById("textval").value.trim();
    const input2 = document.getElementById("shift").value.trim();
    if(input1 === ""){
        output.value = "Enter a text";
        return
    }
    if(input2 === ""){
        output.value = "Enter a shift amount";
        return
    }
    output.value = encrypt(input1, parseInt(input2))
    
    
});
document.getElementById("decrypt").addEventListener("click", function(e) {
    e.preventDefault()
    e.preventDefault()
    const input1 = document.getElementById("textval").value.trim();
    const input2 = document.getElementById("shift").value.trim();
    if(input1 === ""){
        output.value = "Enter a text";
        return
    }
    if(input2 === ""){
        output.value = "Enter a shift amount";
        return
    }
    output.value = decrypt(input1, parseInt(input2))
});

let window_arrangement = ['encrypt-window']
let tab_arrangement = ['encryptDecrypt']

function hideWindow(windowID, tabID){
    const window = document.getElementById(windowID);
    let window_index = window_arrangement.indexOf(windowID);
    if (window_index !== -1) {
        window_arrangement.splice(window_index, 1);
    }
    let tab_index = tab_arrangement.indexOf(tabID);
    if (tab_index !== -1) {
        tab_arrangement.splice(tab_index, 1);
    }
    window.classList.toggle("view_window");
    const tab = document.getElementById(tabID);
    tab.classList.remove('current_tab')
    if(tab_arrangement.length > 0){
        document.getElementById(tab_arrangement[tab_arrangement.length -1]).classList.toggle('current_tab')
    }
}
function viewWindow(windowID, tabID){
    const window = document.getElementById(windowID);
    const current_tabs = document.querySelectorAll(".current_tab")
    if (current_tabs.length !== 0) {
        current_tabs.forEach((tab)=>{
            tab.classList.toggle('current_tab')
        })
    }
    
    if(!window.classList.contains("view_window")){
        window_arrangement.push(windowID)
        tab_arrangement.push(tabID)
        window.classList.toggle("view_window");
        const tab = document.getElementById(tabID);
        tab.classList.toggle('current_tab')
    }
    else{
        let window_index = window_arrangement.indexOf(windowID);
        if (window_index !== -1) {
            window_arrangement.splice(window_index, 1);
        }
        let tab_index = tab_arrangement.indexOf(tabID);
        if (tab_index !== -1) {
            tab_arrangement.splice(tab_index, 1);
        }
        window_arrangement.push(windowID);
        tab_arrangement.push(tabID)
        setTimeout(()=>{
            window_arrangement.forEach((windows, index)=>{
                setTimeout(()=>{

                    let windowsElement = document.getElementById(windows);
                    windowsElement.style.zIndex = 100 + (index * 30);
                },100)
            })
        },0)
        const tab = document.getElementById(tabID);
        tab.classList.toggle('current_tab')
    }

}