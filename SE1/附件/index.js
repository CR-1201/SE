window.onload = function () {
    if (Kernal.isLogin()) {
        initUserInfo();
    }

    // 设置监听器，点击搜索按钮后，执行对应函数
    document.getElementById('search-btn').addEventListener('click', function () {
        search();
    });

    // TODO: 在此为 top-right 元素设置监听器
    // document.getElementById('top-right') ...
    document.getElementById('top-right').addEventListener('click', function () {
        clickLogin();
    })
}

function search() {
    // TODO: 搜索触发后的行为
    let searchValue = document.querySelector('#search-div input').value;
    if (searchValue == "") {
        alert('Sorry, the search is empty!');
    }
    else {
        let href = "http://www.baidu.com/s?ie=UTF-8&wd=" + searchValue;
        window.open(href);
    }
    console.log('CR666');
}

// document.getElementById("top-right").addEventListener("click", clickLogin);
function clickLogin() {
    if (!Kernal.isLogin()) {
        login();
    }
    else {
        logout();
    }
}

function initUserInfo() {
    // TODO: 修改页面显示错误的 bug
    let Name = Kernal.getUserName();
    let trustedContent = `<div id="user">
                                <span id="user-img">
                                    <img src="img/user.jpg" />
                                </span>
                                <span id="name"></span>
                            </div>`;
    let untrustedContent = `${Name}`;
    document.getElementById('top-right').innerHTML = trustedContent;
    document.getElementById('name').textContent = untrustedContent;
}

// ============================================================ 你不需要去关注的代码

function login() {
    Kernal.login();
    location.reload();
}

function logout() {
    Kernal.logout();
    location.reload();
}