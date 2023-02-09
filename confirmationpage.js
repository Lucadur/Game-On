// CONFIRMATION PAGE
let newPage = document.createElement("div");
newPage.style.display = "none";
newPage.style.justifyContent = "center";
newPage.style.alignItems = "center";
newPage.style.backgroundColor = "#232323";
newPage.style.width = "100%";
newPage.style.height = "90%";
newPage.style.maxWidth = "500px";
newPage.style.position = "fixed";
newPage.style.zIndex = "3";
newPage.style.borderRadius = "10px";

let newBg = document.createElement("div");
newBg.style.display = "none";
newBg.style.position = "fixed";
newBg.style.justifyContent = "center";
newBg.style.alignItems = "center";
newBg.style.zIndex = "2";
newBg.style.height = "100%";
newBg.style.width = "100%";
newBg.style.backgroundColor = "rgba(26, 39, 156, 0.4)";
newBg.style.top = "0";
newBg.style.left = "0";

let title = document.createElement("h1");
title.innerText = "Merci pour votre inscription";
title.style.color = "white";
title.style.display = "flex";
title.style.textAlign = "center";

let closeBtn = document.createElement("span");
closeBtn.innerText = "x";
closeBtn.style.color = "white";
closeBtn.style.fontSize = "30px";
closeBtn.style.cursor = "pointer";
closeBtn.style.position = "absolute";
closeBtn.style.right = "20px";
closeBtn.style.top = "20px";

let secondCloseBtn = document.createElement("button");
secondCloseBtn.innerText = "Fermer";
secondCloseBtn.style.backgroundColor = "#fe142f";
secondCloseBtn.style.color = "white";
secondCloseBtn.style.width = "33%";
secondCloseBtn.style.height = "6%";
secondCloseBtn.style.position = "absolute";
secondCloseBtn.style.bottom = "15px";
secondCloseBtn.style.borderRadius = "10px";
secondCloseBtn.style.fontSize = "20px";
secondCloseBtn.style.border = "none";
secondCloseBtn.style.cursor = "pointer";

newBg.appendChild(newPage);
newPage.appendChild(title);
newPage.appendChild(closeBtn);
newPage.appendChild(secondCloseBtn);
document.body.appendChild(newBg);
