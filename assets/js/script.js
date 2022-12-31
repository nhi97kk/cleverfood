const searchBtn = document.querySelector('.js-search')
            const modal = document.querySelector('.js-modal')
            const iconclose = document.querySelector('.js-modal-close')
            const container = document.querySelector('.js-modal-container')

            function showSearch(){
                modal.classList.add('open')
                searchBtn.classList.add('close')
            }
            function closeSearch(){
                modal.classList.remove('open')
                searchBtn.classList.remove('close')
            }
            
            searchBtn.addEventListener('click',showSearch)
            
            iconclose.addEventListener('click',closeSearch)
            modal.addEventListener('click',closeSearch)
            container.addEventListener('click', function(e){
                e.stopPropagation()
            })

// Đăng ký tài khoản
var accoutList = JSON.parse(localStorage.getItem('accoutList'));
if (accoutList == null) {
    accoutList = [];
}

var inforAccount = JSON.parse(localStorage.getItem('inforAccount'));
if (inforAccount == null) {
    var inforAccount = [];
    inforAccount.length = accoutList.length;
}

for (var i = 0; i < inforAccount.length; i++) {
    if (inforAccount[i] == null) {
        inforAccount[i] = [];
    }
}

var accountActives = JSON.parse(localStorage.getItem('accountActives'));
if (accountActives == null) {
    accountActives = [];
}
console.log(accoutList);

function taoId() {
    var id = Math.random().toString().substr(2, 10) + '_' + String(new Date().getTime());
    return id;
}

function accountUser(id, email, password, username) {
    this.email = email;
    this.password = password;
    this.username = username;
    if (id == null) {
        this.id = taoId();
    } else {
        this.id = id;
    }
}

function accoutActive(email, password) {
    this.email = email;
    this.password = password;
}

function createAccount() {
    var email = document.querySelector('#emailReg').value;
    var username = document.querySelector('#usernameReg').value;
    var password = document.querySelector('#passwordReg').value;
    var password_confirm = document.querySelector('#repasswordReg').value;
    var input_register = document.querySelectorAll('.register');

    for (var i = 0; i < input_register.length; i++) {
        input_register[i].classList.remove('input-error')
        input_register[i].parentElement.querySelector('.error-msg').innerHTML = '';
    }

    if (email.trim() == '') {
        document.querySelector('#emailReg').classList.add('input-error');
        document.querySelector('#emailReg').parentElement.querySelector('.error-msg').innerHTML = 'Vui lòng nhập đúng giá trị của trường này';
    }

    if (username.trim() == '') {
        document.querySelector('#usernameReg').classList.add('input-error');
        document.querySelector('#usernameReg').parentElement.querySelector('.error-msg').innerHTML = 'Vui lòng nhập đúng giá trị của trường này';
    }

    var checkEmail;
    var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.match(regex)) {
        checkEmail = true;
    } else {
        checkEmail = false;
    }

    if (email.trim() != '' && checkEmail == false) {
        document.querySelector('#emailReg').classList.add('input-error');
        document.querySelector('#emailReg').parentElement.querySelector('.error-msg').innerHTML = 'Trường này phải là email';
    }

    if (password.trim() == '') {
        document.querySelector('#passwordReg').classList.add('input-error');
        document.querySelector('#passwordReg').parentElement.querySelector('.error-msg').innerHTML = 'Vui lòng nhập đúng giá trị của trường này';
    }

    if (password_confirm.trim() == '') {
        document.querySelector('#repasswordReg').classList.add('input-error');
        document.querySelector('#repasswordReg').parentElement.querySelector('.error-msg').innerHTML = 'Vui lòng nhập đúng giá trị của trường này';
    }

    if (password.trim().length < 8 && password.trim().length > 0) {
        document.querySelector('#passwordReg').classList.add('input-error')
        document.querySelector('#passwordReg').parentElement.querySelector('.error-msg').innerHTML = 'Mật khẩu an toàn phải từ 8 ký tự trở lên';
    }

    if (password.trim().length >= 8) {
        if (password_confirm != '' && password_confirm != password) {
            document.querySelector('#repasswordReg').classList.add('input-error')
            document.querySelector('#repasswordReg').parentElement.querySelector('.error-msg').innerHTML = 'Vui lòng xác thực đúng mật khẩu';
        }
    }

    var check = true;
    for (var i = 0; i < accoutList.length; i++) {
        var currentAccount = accoutList[i];
        if (email == currentAccount.email) {
            check = false;
            document.querySelector('#emailReg').classList.add('input-error');
            document.querySelector('#emailReg').parentElement.querySelector('.error-msg').innerHTML = 'Email đã tồn tại, vui lòng nhập lại email khác';
        }
    }

    var checkUsername = true;
    for (var i = 0; i < accoutList.length; i++) {
        var currentAccount = accoutList[i];
        if (username == currentAccount.username) {
            checkUsername = false;
            document.querySelector('#usernameReg').classList.add('input-error');
            document.querySelector('#usernameReg').parentElement.querySelector('.error-msg').innerHTML = 'username đã tồn tại, vui lòng nhập lại username khác';
        }
    }
    if (checkEmail == true && checkUsername == true && username.trim() != '' && password.trim() != '' && password_confirm.trim().length >= 8 && password_confirm.trim() === password.trim() && check == true) {
        var newAccount = new accountUser(null, email, password, username);
        accoutList.push(newAccount);
        var jsonAccountList = JSON.stringify(accoutList);
        localStorage.setItem('accoutList', jsonAccountList);
        document.querySelector('#emailReg').value = '';
        document.querySelector('#passwordReg').value = '';
        document.querySelector('#repasswordReg').value = '';
        document.querySelector('#usernameReg').value = '';
        Swal.fire("","Bạn đã đăng ký tài khoản thành công !", "success");
    }
}
// Đăng nhập

function checkIndex() {
    var account = JSON.parse(localStorage.getItem('accountActives'));
    if (account == null) {
        account = [];
    }
    if (account.length == 0) {
        return undefined;
    } else if (account.length == 1) {
        for (var i = 0; i < accoutList.length; i++) {
            var currentAccount = accoutList[i];
            if (account[0].email == currentAccount.email) {
                var thisAccount = currentAccount;
            }
        }
    }
    return accoutList.indexOf(thisAccount);
}


function loginAccount() {
    var email = document.getElementById('emailLog').value;
    var password = document.getElementById('passwordLog').value;
    var input_login = document.querySelectorAll('.login');

    for (var i = 0; i < input_login.length; i++) {
        input_login[i].classList.remove('input-error')
        input_login[i].parentElement.querySelector('.error-msg').innerHTML = '';
    }

    if (email.trim() == '') {
        document.getElementById('emailLog').classList.add('input-error');
        document.getElementById('emailLog').parentElement.querySelector('.error-msg').innerHTML = 'Vui lòng nhập đúng giá trị của trường này';
    }

    if (password.trim() == '') {
        document.getElementById('passwordLog').classList.add('input-error');
        document.getElementById('passwordLog').parentElement.querySelector('.error-msg').innerHTML = 'Vui lòng nhập đúng giá trị của trường này';
    }

    var checkEmail = false;
    var checkPassword = false;
    for (var i = 0; i < accoutList.length; i++) {
        var currentAccount = accoutList[i];
        if (email == currentAccount.email) {
            checkEmail = true;
            if (password == currentAccount.password) {
                checkPassword = true;
            }
        }
    }
    if (checkEmail == false && email.trim().length > 0) {
        document.getElementById('emailLog').classList.add('input-error');
        document.getElementById('emailLog').parentElement.querySelector('.error-msg').innerHTML = 'Email không tồn tại, vui lòng nhập lại !';
    }
    if (checkEmail == true) {
        if (checkPassword == false && password.trim().length > 0) {
            document.getElementById('passwordLog').classList.add('input-error');
            document.getElementById('passwordLog').parentElement.querySelector('.error-msg').innerHTML = 'Sai mật khẩu, vui lòng nhập lại !';
        }
    }
    if (checkEmail == true && checkPassword == true) {
        document.getElementById('emailLog').value = '';
        document.getElementById('passwordLog').value = '';
        for (var i = 0; i < accoutList.length; i++) {
            var currentAccount = accoutList[i];
            if (email == currentAccount.email) {
                var thisAccount = currentAccount;
            }
        }
        var accountIn = new accoutActive(email, password);
        accountActives.push(accountIn);
        localStorage.setItem('accountActives', JSON.stringify(accountActives));

        var links = document.querySelectorAll('.no-user')
        for (var i = 0; i < links.length; i++) {
            links[i].classList.add('close')
        }

        document.querySelector('.user').innerHTML = `
        <a class="cart-icon" onclick="renderCart()" ><i class="fa-solid fa-cart-shopping"></i></a>
        <div class="user-main">
            <div class="user-avt"><i class="fa-solid fa-user"></i></div>
            <span class="user-name">${thisAccount.username}</span>
            <ul onclick="renderLoginRegister()">
                <li><a href="">Log out</a></li>
            </ul>
        </div>`

        Swal.fire("Đăng nhập thành công!","Chuyển đến giỏ hàng của bạn!", "success");
        
        var index = checkIndex();
        var cartListItem = getCartListItemAccount(index);
        if (cartListItem == undefined) {
            cartListItem = [];
        }
        saveCartListItemToStorage(cartListItem);
        renderCart();
    }
}
function checkAccountStatus() {
    var account = JSON.parse(localStorage.getItem('accountActives'));
    if (account == null) {
        account = [];
    }
    console.log(account);
    if (account.length == 0) {
        
    }
    if (account.length != 0 ) {
        var links = document.querySelectorAll('.no-user')
        for (var i = 0; i < links.length; i++) {
            links[i].classList.add('close')
        }

        for (var i = 0; i < accoutList.length; i++) {
            var currentAccount = accoutList[i];
            if (account[0].email == currentAccount.email) {
                var thisAccount = currentAccount;
            }
        }
        document.querySelector('.user').innerHTML = `
        <a class="cart-icon" onclick="renderCart()" ><i class="fa-solid fa-cart-shopping"></i></a>
        <div class="user-main">
            <div class="user-avt"><i class="fa-solid fa-user"></i></div>
            <span class="user-name">${thisAccount.username}</span>
            <ul onclick="renderLoginRegister()">
                <li><a href="">Log out</a></li>
            </ul>
        </div>`
    }
}

checkAccountStatus();

function renderLoginRegister() {
    var cartListItem = getCartListItem();
    var cartListItem2 = cartListItem;
    var index = checkIndex();
    inforAccount[index] = cartListItem2;
    localStorage.setItem('inforAccount', JSON.stringify(inforAccount));

    var links = document.querySelectorAll('.no-user')
        for (var i = 0; i < links.length; i++) {
            links[i].classList.remove('close')
        }
    document.querySelector('.user').innerHTML =``;
    
    var arrayAccount = [];
    localStorage.setItem('accountActives', JSON.stringify(arrayAccount));
}

function product(id, img, name, price,about) {
    this.id = id;
    this.img = img;
    this.name = name;
    this.price = price;
    this.about = about;
}
//
function cartItem(id, number) {
    this.id = id;
    this.number = number;
}

var keyLocalStorage = 'cartListItem';

function getCartListItemAccount(index) {
    var cartListItems = JSON.parse(localStorage.getItem('inforAccount'));
    var cartListItem;
    if (index == undefined) {
        cartListItem = [];
    } else if (index != undefined) {
        cartListItem = cartListItems[index];
    }
    return cartListItem;
}

function getCartListItem() {
    var cartListItem = new Array();
    var jsonCartListItem = localStorage.getItem(keyLocalStorage);
    if (jsonCartListItem == null) {
        cartListItem = new Array();
    } else {
        cartListItem = JSON.parse(jsonCartListItem);
    }
    return cartListItem;
}

function saveCartListItemToStorage(cartListItem) {
    var jsonCartListItem = JSON.stringify(cartListItem);
    localStorage.setItem(keyLocalStorage, jsonCartListItem);
}

function addCart(id) {
    var account = JSON.parse(localStorage.getItem('accountActives'));
    if (account == null) {
        account = [];
    }
    if (account.length == 0) {
        Swal.fire("Xin lỗi !", "Vui lòng đăng nhập để mua hàng !", "warning");
    }
    if (account.length == 1) {
        Swal.fire("","Thêm thành công sản phẩm này !", "success");
        var cartListItem = getCartListItem();
        var checkCart = false;
        for (var i = 0; i < cartListItem.length; i++) {
            var currentItem = cartListItem[i];
            if (currentItem.id == id) {
                cartListItem[i].number++;
                checkCart = true;
            }
        }
        if (checkCart == false) {
            var itemCart = new cartItem(id, 1);
            cartListItem.push(itemCart);
        }
        saveCartListItemToStorage(cartListItem);
    }
}

function addCartNumber(id) {
    var cartListItem = getCartListItem();
    for (var i = 0; i < cartListItem.length; i++) {
        var currentItem = cartListItem[i];
        if (currentItem.id == id) {
            cartListItem[i].number++;
        }
    }
    saveCartListItemToStorage(cartListItem);
    renderCart()
}

function renderCart() {
    var cartListItem = getCartListItem();
    if (cartListItem.length == 0) {
        document.querySelector('main').innerHTML = `
    <div class="cart-empty">
        <div class="cart-empty-img">
            <img src="./assets/img/no_cart.png" alt="">
        </div>
        <div class="cart-empty-text">Giỏ hàng của bạn còn trống</div>
    </div>`
    } else if (cartListItem.length > 0) {
        var product_list = JSON.parse(localStorage.getItem('productList'));
        if (product_list == null) {
            product_list = [];
        }

        var listProduct = [];
        for (var i = 0; i < product_list.length; i++) {
            var product_item = new product(product_list[i].id, product_list[i].img, product_list[i].name, product_list[i].price);
            listProduct.push(product_item);
        }

        var thisProducts = [];
        var thisCartItems = [];

        for (var i = 0; i < cartListItem.length; i++) {
            for (var j = 0; j < listProduct.length; j++) {
                if (cartListItem[i].id == listProduct[j].id) {
                    var thisProduct = listProduct[j];
                    thisProducts.push(thisProduct);
                    var thisCartItem = cartListItem[i];
                    thisCartItems.push(thisCartItem);
                }
            }
        }

        var htmlCart = `<div class="cart">`
        var sum=0;
        for (var i = 0; i < thisProducts.length; i++) {

            htmlCart += `
            <div class="cart-item">
                <img class="cart-item-img" src="${thisProducts[i].img}" alt="">
                <p class="cart-item-name">${thisProducts[i].name}</p>
                <div class="cart-item-price">
                    <p class="cart-item-price-old">${parseInt(thisProducts[i].price).toLocaleString()} ₫</p>
                    <button onclick="removeCart('${thisProducts[i].id}')" class="cart-item-number-btn"> - </button>
                    <p class="cart-item-number-text">
                        ${thisCartItems[i].number}
                    </p>
                    <button style="padding-right: 9px;" onclick="addCartNumber('${thisProducts[i].id}')" class="cart-item-number-btn"> + </button>
                    <p class="cart-item-sum-money">${parseInt(thisProducts[i].price*thisCartItems[i].number).toLocaleString()} ₫</p>
                </div>    
                <div class="cart-item-delete">
                    <i onclick="removeCartItem('${thisProducts[i].id}')" class="fas fa-trash cart-item-delete-icon"></i>
                </div>
            </div>`
            sum+= thisProducts[i].price*thisCartItems[i].number
        }

        htmlCart += `
            <div class="cart-item sum">
            Tổng thanh toán:${parseInt(sum).toLocaleString()} ₫</div>`
        htmlCart += `<button onclick="removeAllCart()" class="delete-all">Xóa toàn bộ sản phẩm</button>`
        document.querySelector('main').innerHTML = htmlCart;
    }

}

function removeCart(id) {
    var cartListItem = getCartListItem();
    for (var i = 0; i < cartListItem.length; i++) {
        var currentItem = cartListItem[i];
        if (currentItem.id == id) {
            cartListItem[i].number--;
            saveCartListItemToStorage(cartListItem);
            renderCart()
        }
        if (cartListItem[i].number == 0) {
            cartListItem.splice(i, 1);
            saveCartListItemToStorage(cartListItem);
            renderCart()
        }
    }
}

function removeCartItem(id) {
    var cartListItem = getCartListItem();
    for (var i = 0; i < cartListItem.length; i++) {
        var currentItem = cartListItem[i];
        if (currentItem.id == id) {
            cartListItem.splice(i, 1);
            saveCartListItemToStorage(cartListItem);
            renderCart()
        }
    }
}

function removeAllCart() {
    var cartListItem = getCartListItem();
    cartListItem.splice(0, cartListItem.length);
    saveCartListItemToStorage(cartListItem);
    document.querySelector('main').innerHTML = `
    <div class="cart-empty">
        <div class="cart-empty-img">
            <img src="./assets/img/no_cart.png" alt="">
        </div>
        <div class="cart-empty-text">Giỏ hàng của bạn còn trống</div>
    </div>`
}

//cac inner
// .user oce 
// main cart-emty oce
// main cart oce
// .search_result oce
// 

const header = document.querySelector('header')
        const mobilebtn = document.querySelector('.menu-mobile-btn')
        const nav = document.querySelector('#nav')
        const lo = document.querySelector('.logo')
        mobilebtn.onclick = function(){
            var isClosed = header.clientHeight === 100;
            if(isClosed){
                header.style.height = 'auto';
                nav.style.display = 'block'
                lo.style.display = 'none'
            } else {
                header.style.height = '100px';
                nav.style.display = 'none'
                lo.style.display = 'block'
            }
        }
        // var menuItems = document.querySelectorAll('#nav li a')
        // for(var i =0; i < menuItems.length; i++ ){
        //     var menuItem = menuItems[i];
        //     menuItem.onclick = function(e) {
        //         var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav');
        //         console.log(isParentMenu);
        //         if (isParentMenu){
        //             e.preventDefault();
        //         } else header.style.height = null;
        //     }
        // }

// lienhe 
function frmValidate() {
    var frm = document.forms['lienhe'];
    var hoten = frm.hoten;
    var sdt = frm.sdt;
    var nd = frm.noidung;

    //ho ten
    if (hoten.value.length == 0) {
        alert("Hãy điền họ tên!");
        hoten.focus();
        return false;
    }
   
    //SDT
    if (sdt.value.length != 10 || sdt.value.length == 0) {
        alert("Hãy điền số điện thoại đủ 10 số!");
        sdt.focus();
        return false;
    }
    // nd 
    if (nd.value.length == 0) {
        alert("Hãy điền nội dung!");
        nd.focus();
        return false;
    }

    alert("Gửi thông tin thành công!");
    return true;



}
