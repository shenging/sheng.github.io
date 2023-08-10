// 選取所有圖片
let myImage=document.querySelector("img");
// 點擊時切換圖片
myImage.onclick = function () {
    // 取得圖片 src 的數值
    let mySrc = myImage.getAttribute('src');
    // 如果是原來那張圖片
    if (mySrc === "images/firefox-icon.png") {
        // 更改圖片的 src 數值
        myImage.setAttribute('src', "images/girl.jpg");
    } else {
        myImage.setAttribute('src', "images/firefox-icon.png");
    }
};

// 取得標題
let myHeading = document.querySelector('h1');
// 取得按鈕
let myButton = document.querySelector('button');

// 客製化歡迎訊息
function setUserName () {
    // 取得使用者名子
    let myName = prompt("Please enter your name.");
    if (!myName || myName === null) { // 如果是空的或者是 null
        setUserName();
    } else {
            // 將資料儲存到瀏覽器中的變數 name
            localStorage.setItem("name", myName);
            // 顯示資料
            myHeading.innerHTML = "Mozilla is cool, " + myName ;
    };

}

if (!localStorage.getItem('name')) { // 還沒有名子
    // 設定名子
    setUserName();
} else {
    // 取得儲存的名子
    let storageName = localStorage.getItem("name");
    myHeading.innerHTML = "Mozilla is cool, " + storageName;
}

// 點擊按鈕更改名子
myButton.onclick = function () {
    setUserName();
}