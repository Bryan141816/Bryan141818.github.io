const dragEncrypt = document.getElementById("encrypt_top");
const encryptWindow = document.getElementById("encrypt-window");

let isDragging1 = false, offsetX1 = 0, offsetY1 = 0;

function updateTopArrangement(windowId, tabID){
    const current_tabs = document.querySelectorAll(".current_tab")
    if (current_tabs.length !== 0) {
        current_tabs.forEach((tab)=>{
            tab.classList.toggle('current_tab')
        })
    }
    let window_index = window_arrangement.indexOf(windowId);
    if (window_index !== -1) {
        window_arrangement.splice(window_index, 1);
    }
    let tab_index = tab_arrangement.indexOf(tabID);
    if (tab_index !== -1) {
        tab_arrangement.splice(tab_index, 1);
    }
    window_arrangement.push(windowId);
    tab_arrangement.push(tabID)
    document.getElementById(tabID).classList.add('current_tab')
    setTimeout(()=>{
        window_arrangement.forEach((windows, index)=>{
            setTimeout(()=>{

                let windowsElement = document.getElementById(windows);
                windowsElement.style.zIndex = 100 + (index * 30);
            },100)
        })
    },0)
}

dragEncrypt.addEventListener("mousedown", (event) => {
    isDragging1 = true;
    offsetX1 = event.clientX - encryptWindow.offsetLeft;
    offsetY1 = event.clientY - encryptWindow.offsetTop;
    dragEncrypt.style.cursor = "grabbing";
    updateTopArrangement("encrypt-window","encryptDecrypt")

});

dragEncrypt.addEventListener("mousemove", (event) => {
    if (isDragging1) {
        encryptWindow.style.left = event.clientX - offsetX1 + "px";
        encryptWindow.style.top = event.clientY - offsetY1 + "px";
    }
});

dragEncrypt.addEventListener("mouseup", () => {
    isDragging1 = false;
    dragEncrypt.style.cursor = "grab";
});


const dragVideo = document.getElementById("video_top");
const videoWindow = document.getElementById("video-window");

let isDragging2 = false, offsetX2 = 0, offsetY2 = 0;

dragVideo.addEventListener("mousedown", (event) => {
    isDragging2 = true;
    offsetX2 = event.clientX -videoWindow.offsetLeft;
    offsetY2 = event.clientY -videoWindow.offsetTop;
    dragVideo.style.cursor = "grabbing";
    updateTopArrangement("video-window","video_tab")
});

dragVideo.addEventListener("mousemove", (event) => {
    if (isDragging2) {
       videoWindow.style.left = event.clientX - offsetX2 + "px";
       videoWindow.style.top = event.clientY - offsetY2 + "px";
    }
});

dragVideo.addEventListener("mouseup", () => {
    isDragging2 = false;
    dragVideo.style.cursor = "grab";
});



dragEncrypt.addEventListener("mouseup", () => {
    isDragging1 = false;
    dragEncrypt.style.cursor = "grab";
});


const dragDiscuss = document.getElementById("discussion_top");
const discussWindow = document.getElementById("discussion-window");

let isDragging3 = false, offsetX3 = 0, offsetY3 = 0;

dragDiscuss.addEventListener("mousedown", (event) => {
    isDragging3 = true;
    offsetX3 = event.clientX -discussWindow.offsetLeft;
    offsetY3 = event.clientY -discussWindow.offsetTop;
    dragDiscuss.style.cursor = "grabbing";
    updateTopArrangement("discussion-window","discussion_tab")
});

dragDiscuss.addEventListener("mousemove", (event) => {
    if (isDragging3) {
       discussWindow.style.left = event.clientX - offsetX3 + "px";
       discussWindow.style.top = event.clientY - offsetY3 + "px";
    }
});

dragDiscuss.addEventListener("mouseup", () => {
    isDragging3 = false;
    dragDiscuss.style.cursor = "grab";
});

