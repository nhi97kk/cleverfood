var product_list = [
    {
        id:1,
        name: "Cam",
        type: "traicay",
        price: 15000,
        img: "./assets/img/sanpham/cam.jpg",
        about:"Cam – một loại cây ăn quả truyền thống của người Việt Nam. Đây là một loại trái cây chứa nhiều tinh dầu mang mùi thơm đặc trưng, có khả năng giải khát, cung cấp cho cơ thể hàm lượng viatmin C lớn."
    },
    {
        id:2,
        name: "Chanh dây",
        type: "traicay",
        price: 20000,
        img: "./assets/img/sanpham/chanh dây.jpg",
        about:"Chanh dây là một nguồn cung cấp dinh dưỡng và khoáng chất dồi dào, đặc biệt là chất xơ, vitamin C và vitamin A."
    },
    {
        id:3,
        name: "Chanh",
        type: "traicay",
        price: 10000,
        img: "./assets/img/sanpham/chanh.jpg",
        about:"Chanh là nguồn vitamin vô cùng mạnh mẽ, đặc biệt chứa hàm lượng lớn vitamin C, chất chống oxy hóa và các chất dinh dưỡng khác."

    },
    {
        id:4,
        name: "Chuối",
        type: "traicay",
        price: 40000,
        img: "./assets/img/sanpham/chuối.jpg",
        about:"Chuối là thực phẩm rất tốt cho sức khỏe và rất ngon. Chuối chứa một số chất dinh dưỡng cần thiết, có lợi cho hệ tiêu hóa, sức khỏe tim mạch và giảm cân."
    },
    {
        id:5,
        name: "Cà chua",
        type: "rau",
        price: 16000,
        img: "./assets/img/sanpham/cà chua.jpg",
        about:"Cà chua là loại quả có giá trị dinh dưỡng cao, đặc biệt là vitamin A, C và K, cùng hàm lượng khoáng chất khác phốt pho, mangan, magiê, kali, đồng,…."
    }, 
    {
        
        id:6,
        name: "Dưa leo",
        type: "rau",
        price: 17000,
        img: "./assets/img/sanpham/dưa leo.jpg",
        about:"Không chỉ nhiều nước, dưa leo còn là một loại quả giàu vitamin, đặc biệt là vitamin B với vitamin B1, vitamin B5 và vitamin B7.Giúp giảm cân và tốt cho sức khỏe."
    },
    {
        
        id:7,
        name: "Dừa sáp",
        type: "traicay",
        price: 150000,
        img: "./assets/img/sanpham/dừa sáp.jpg",
        about:"Dừa sáp là đặc sản suy nhất ở Trà Vinh.Loại dừa này giúp cung cấp một hàm lượng chất dinh dưỡng cao cho cơ thể. Ngoài ra nó còn có một số công dụng đặc biệt như tăng cường sức khỏe cho tim, tốt cho hệ tiêu hóa và giúp trị một số bệnh như mẩn ngứa, đau khớp."
    },
    {
        id:8,
        name: "Lựu",
        type: "traicay",
        price: 170000,
        img: "./assets/img/sanpham/lựu.jpg",
        about:"Với hàm lượng polyphenol dồi dào, lựu mang lại nhiều lợi ích tiềm năng vì đặc tính chống oxy hóa và chống viêm của các vi chất dinh dưỡng này."
    },
    {
        id:9,
        name: "Nho xanh",
        type: "traicay",
        price: 90000,
        img: "./assets/img/sanpham/nho.jpg",
        about:"Nho xanh là loại trái cây tươi nhập khẩu cao cấp từ Nam Phi. Đạt tiêu chuẩn xuất khẩu toàn cầu. Nho ngọt khi trái xanh đậm, sáng, quả chắc, to. Quả nho xanh, dáng tròn, trái vừa ăn. Vỏ mỏng, không hạt, vị ngọt đậm, thịt chắc, giòn, tươi mát."

    },
    {
        id:10,
        name: "Súp lơ",
        type: "rau",
        price: 60000,
        img: "./assets/img/sanpham/súp lơ.jpg",
        about:"không chỉ thơm ngon, dễ ăn mà còn mang lại rất nhiều lợi ích cho sức khoẻ. Bông cải xanh có thề chế biến thành bông cải xanh hấp, bông cải xanh xào hải sải, súp bông cải xanh,..."
    },
    {
        id:11,
        name: "Thơm (dứa)",
        type: "rau",
        price: 30000,
        img: "./assets/img/sanpham/thơm.jpg",
        about:"Thơm là một loại trái cây vừa ngon, chua chua ngọt ngọt lại vừa cung cấp rất nhiều chất dinh dưỡng cho cơ thể. Thơm có thể chế biến thành nhiều món ăn khác nhau như: làm nước ép, kho, xào,... mỗi một món sẽ mang lại một hương vị khác nhau."
    },
    {
        id:12,
        name: "Táo xanh",
        type: "traicay",
        price: 120000,
        img: "./assets/img/sanpham/táo xanh.jpg",
        about:"Giá trị dinh dưỡng táo xanh mang lại rất cao.Có khả năng giảm cholesterol trong máu, giảm nguy cơ mắc bệnh tim mạch, giữ gìn vóc dáng, làn da và mái tóc hiệu quả."
    },
    {
        id:13,
        name: "Óc chó",
        type: "kho",
        price: 170000,
        img: "./assets/img/sanpham/óc chó.jpg",
        about:"Quả óc chó là một loại hạt đặc biệt bổ dưỡng. Chúng có hoạt tính chống oxy hóa cao hơn và chất béo omega-3 lành mạnh. "
    },
    {
        id:14,
        name: "Ớt",
        type: "rau",
        price: 12000,
        img: "./assets/img/sanpham/ớt.jpg",
        about:"Ớt chứa nhiều vitamin tốt cho sức khỏe. Ớt là một loại rau gia vị giúp tăng mùi vị món ăn hoặc đơn giản là do sở thích cá nhân."
    },
    {
        id:15,
        name: "Đào",
        type: "traicay",
        price: 80000,
        img: "./assets/img/sanpham/đào.jpg",
        about:"Quả đào có hương vị thơm ngon, được nhiều người yêu thích với giá trị dinh dưỡng phong phú. Ngoài nhiều vitamin và khoáng chất, hàm lượng calo thấp ra, đào cũng chứa nhiều chất chống oxy hóa, bao gồm tất cả 5 phân loại của carotenoid; là một nguồn cung cấp vitamin A và vitamin C tuyệt vời."
        
    },
    {
        id:16,
        name: "Măng Cục sấy khô",
        type: "kho",
        price: 230000,
        img: "./assets/img/sanpham/măng cục.jpg",
        about:"Măng Cục Sấy Khô có hương vị thơm ngon, giòn xốp, chua chua ngọt ngọt, với qui trình công nghệ sấy thăng hoa (sấy đông khô), nhà sản xuất lựa chọn loại măng cục tươi ngon, tách bỏ vỏ hạt và đông khô 100% thịt, đảm bảo giữ nguyên được hình dáng, màu sắc, hàm lượng dinh dưỡng và đặc biệt là hương vị thơm ngon tự nhiên không thay đổi. "
        
    },
    {
        id:17,
        name: "Nấm hương sấy khô DJ&A",
        type: "kho",
        price: 245000,
        img: "./assets/img/sanpham/nấm hương.jpg",
        about:"Nấm hương sấy khô DJ&A giòn tan tẩm vị hoàn toàn tự nhiên và thân thiện với người ăn chay cung cấp các chất dinh dưỡng cần thiết cho cơ thể, nấm ăn còn có nhiều tác dụng dược lý khá phong phú."
    },
    {
        id:18,
        name: "Kiwi sấy khô Ấn Độ",
        type: "kho",
        price: 195000,
        img: "./assets/img/sanpham/kiwi sấy.jpg",
        about:"Kiwi dẻo sấy khô Ấn Đội sở hữu vị chua thanh nhẹ, chua dòn ngọt hài hòa hấp dẫn ngọt ngào giữ nguyên được hương vị đặc trưng và tự nhiên ban đầu làm bạn nhớ mãi."

    },
    {
        id:19,
        name: "Mơ Sấy Khô Mourads",
        type: "kho",
        price: 240000,
        img: "./assets/img/sanpham/mơ sấy.jpg",
        about:"Mơ Sấy Khô Mourads của Úc được sản xuất trên công nghệ sấy khô hiện đại lưu giữ giữ hương vị thơm, ngon ngọt nước ở bên trong, màu sắc hấp dẫn, độ ngon, dẻo tự nhiên là món ăn vặt, tráng miệng rất tốt cho cả gia đình."
    },
    {
        id:20,
        name: "Sầu Riêng Sấy Khô Thái Lan",
        type: "kho",
        price: 270000,
        img: "./assets/img/sanpham/sầu riêng sấy.jpg",
        about:"Sầu Riêng Sấy Khô Thái Lan TidJai Crispy Durian Monthong hương vị thơm ngon, bổ dưỡng, nguyên chất có vị ngọt nhẹ rất đặc trưng, béo vừa chứ không ngậy pha lẫn vào nhau tuyệt vời. "
    },
    {
        id:21,
        name: "Me khô không hạt Thái Lan",
        type: "kho",
        price: 290000,
        img: "./assets/img/sanpham/me khô.jpg",
        about:"Me khô nhập khẩu từ Thái Lan, trái to, vị rất ngọt xen lẫn vị chua và mát đặc trưng của trái Me. Me thái được sấy khô, đóng vào từng hộp 0,5kg. "
    },
    {
        id:22,
        name: "Dâu tây sấy giòn DI&A",
        type: "kho",
        price: 330000,
        img: "./assets/img/sanpham/dâu sấy.jpg",
        about:"Dâu tây sấy giòn DI&A được làm từ quả dâu tây thuần chủng trồng theo mô hình sạch organic tại Australia. Độ giòn của quả dâu sấy lạnh DJ&A giúp bạn cảm nhận món ăn tuyệt vời này tương tự như Snack vẫn giữ được nguyên hình dạng hương vị và độ chua ngọt."
    },
    {
        id:23,
        name: "Bông Cải Xanh Sấy Giòn DJ&A",
        type: "kho",
        price: 225000,
        img: "./assets/img/sanpham/bông cải sấy.jpg",
        about:"Bông Cải Xanh Sấy Giòn DJ&A hay còn gọi là súp lơ. Loại cây này có thể mọc quanh năm, gieo giống bằng hạt. Súp lơ có hai loại màu xanh và trắng, loại xanh được sử dụng phổ biến hơn bởi độ giòn, thươm ngon được sản xuất theo mô hình sạch organic tại Australia, hương vị và độ ngọt của quả bông cải giúp món ăn ngon miệng."
    },
    {
        id:24,
        name: "Hạt Dẻ Nhật",
        type: "kho",
        price: 285000,
        img: "./assets/img/sanpham/hạt dẻ.jpg",
        about:"Hạt Dẻ Nhật là loại thực phẩm cung cấp dinh dưỡng hoàn hảo có chứa thành phần dinh dưỡng cao rất tốt cho sức khỏe. Một món ăn vặt khá thú vị và ít gây ngán không thể bỏ qua, hạt dẻ với vị bùi, ngọt nhẹ được hấp theo công nghệ Nhật Bản."
    },
    {
        id:25,
        name: "Cherry sấy khô Kirkland ",
        type: "kho",
        price: 267000,
        img: "./assets/img/sanpham/cherry sấy.jpg",
        about:"Quả Cherry hay còn gọi là quả anh đào. Quả cherry không những rất ngon miệng mà quan trọng hơn, nó còn mang lại cho bạn rất nhiều lợi ích về sức khỏe mà bạn không ngờ tới. Giúp tăng cường thể lực, giúp ngủ ngon, giảm cholesterol, chống lão hóa, giảm rủi ro về bệnh tim mạch."
    },
    {
        id:26,
        name: "Chà Là Sấy Khô",
        type: "kho",
        price: 400000,
        img: "./assets/img/sanpham/chà là.jpg",
        about:"Chà Là Sấy Khô Tự Nhiên 100% Nhập Khẩu Malaysia - Chứa Nhiều Vitamin, Khoáng Chất – Bổ Sung Năng Lượng, Bồi Bổ Sức Khỏe là nguồn cung cấp vitamin và khoáng chất, đường và chất xơ. "
    },
    {
        id:27,
        name: "Nước Ép trái cây Langers (946ml)",
        type: "uong",
        price: 500000,
        img: "./assets/img/sanpham/nước ép mỹ.jpg",
        about:"Nước Ép trái cây Langers (946ml) NK Mỹ là sản phẩm hoàn toàn tốt cho sức khỏe, 100% nguyên chất, không pha thêm đường, không có chất bảo quản và không có phẩm màu nhân tạo, hoàn toàn từ nước ép quả tươi."
    },

   {
        id:28,
        name: "Sữa DAIONI",
        type: "uong",
        price: 89000,
        img: "./assets/img/sanpham/sữa daioni.jpg",
        about:"Daioni là nhãn hiệu sữa tươi hữu cơ đạt chứng nhận tiêu chuẩn Organic của Liên minh châu Âu, là thương hiệu nổi tiếng của Anh quốc với chất lượng an toàn cho sức khỏe."
   },
   {
        id:29,
        name: "Nước ép Cherry nguyên chất hữu cơ",
        type: "uong",
        price: 139000,
        img: "./assets/img/sanpham/cherry ép.jpg",
        about:"Sản phẩm của hãng Georgia's Natural, đạt chứng nhận hữu cơ châu Âu (EU), Mỹ (USDA), Nhật Bản (JAS) nguyên chất 100% từ hoa quả hữu cơ, không thêm nước, đường, hương liệu, phẩm màu, sử dụng công nghệ ép lạnh, không làm biến đổi dinh dưỡng, sử dụng trong 4 ngày kể từ khi mở nắp và bảo quản trong tủ lạnh"
   },
   {
        id:30,
        name: "Nước ép rau củ quả đóng hộp",
        type: "uong",
        price: 60000,
        img: "./assets/img/sanpham/nước rau.jpg",
        about:"Vị chua, ngọt của táo và kiwi giúp cân bằng vị “hăng” từ cần tây, cải bó xôi; tạo nên hương vị hoàn hảo, đầy đủ dưỡng chất. Đặc biệt, nếu bạn không quá thích ăn rau và trái cây, thưởng thức nước ép sẽ giúp bạn bổ sung vitamin, chất xơ và dưỡng chất cho cơ thể khỏe mạnh."
   },
   {
        id:31,
        name: "Nước dừa tươi Bến Tre có cơm dừa Vinut",
        type: "uong",
        price: 20000,
        img: "./assets/img/sanpham/nước dừa.jpg",
        about:"Nước dừa Vinut là thức uống giải nhiệt, thanh mát cho cơ thể chứa rất nhiều chất dinh dưỡng tốt cho sức khỏe"
   },
   {
        id:32,
        name: "Nha đam yến xào",
        type: "uong",
        price: 24000,
        img: "./assets/img/sanpham/nha đam.jpg",
        about:"Nha đam yến sào dưỡng nhan, chống lão hóa, thanh lọc cơ thể, bổ sung chất xơ, Collagen, hỗ trợ giảm cân, giúp ngủ sâu,tăng cường trí nhớ"
   },
   {
        id:33,
        name: "Sữa gạo lứt",
        type: "uong",
        price: 26000,
        img: "./assets/img/sanpham/sữa gạo.jpg",
        about:"Gạo lứt là loại gạo chỉ xay bỏ vỏ trấu, giữ lại phần cám và hạt gạo. Nhờ cách xay xát này nên gạo lứt giàu dinh dưỡng, vitamin, khoáng chất và chất chống oxy hóa rất tốt cho cơ thể bạn."
   },
   {
        id:34,
        name: "Sữa chua yến xào",
        type: "uong",
        price: 28000,
        img: "./assets/img/sanpham/sữa chua.jpg",
        about:"Sữa Chua Yến Sào Rita kết hợp hoàn hảo sữa chua thơm ngon và yến sào giàu dinh dưỡng. Quy trình sản xuất hiện đại giữ lại tối đa nguồn dinh dưỡng trong từng sợi yến, bổ sung protein và các dưỡng chất cần thiết hỗ trợ tiêu hóa, cơ thể dẻo dai, da sáng dáng xinh. "
   },
   {
        id:35,
        name: "NƯỚC ÉP ỔI LE FRUIT NECTAR",
        type: "uong",
        price: 69000,
        img: "./assets/img/sanpham/nước ổi.jpg",
        about:"Nước ổi Le Fruit có thành phần tự nhiên từ ổi tươi, chanh, sơ ri, đường mía. Không chỉ có công dụng giải khát sản phẩm rất giàu vitamin, nhất là vitamin C rất tốt cho sức khỏe. Sản phẩm của Công ty CP Vườn trái Cửu Long với quy trình sản xuất tiên tiến, không chứa chất bảo quản và màu thực phẩm. Đây là loại thức uống có hương vị thơm ngon, được ưa chuộng trên thị trường."
   },
   {
        id:36,
        name: "TRÀ KOMBUCHA NGUYÊN BẢN SIMPLE ",
        type: "uong",
        price: 72000,
        img: "./assets/img/sanpham/trà.jpg",
        about:"Không pha trộn thêm hương vị nào khác, Kombucha Original có hương vị nguyên chất đến từ trà đen hữu cơ, lên men theo quy cách chuyên biệt từ Lady Kombucha."
   },
   {
    id:37,
    name: "Cải bó xôi Organic 300gr",
    type: "rau",
    price: 32000,
    img: "./assets/img/sanpham/cải bó xôi.jpg",
    about:"Cải bó xôi có tác dụng bổ huyết, do đó có lợi với người bị thiếu máu. Ăn cải bó xôi có tác dụng tống đẩy chất thải qua đường tiêu hóa (thông tiện), giúp tiêu hóa nhanh hơn..."
},
{
    id:38,
    name: "Củ cải trắng Organic 300gr",
    type: "rau",
    price: 39000,
    img: "./assets/img/sanpham/củ cải.jpg",
    about:"Củ cải trắng không chỉ là một món ăn phổ biến, mà còn được biết tới như loại thần dược có công năng không thua kém gì nhân sâm, củ cải trắng giúp trị đờm, thanh nhiệt, dưỡng da,..."

},
{
    id:39,
    name: "Bắp cải tim Organic 500g",
    type: "rau",
    price: 30000,
    img: "./assets/img/sanpham/bắp cải.jpg",
    about:"Công dụng Kháng viêm, hỗ trợ tiêu hóa. Điều trị loét dạ dày Duy trì sức khỏe xương khớp. Giảm nguy cơ mắc bệnh tim mạch. Hỗ trợ giảm cân...."
}
]
localStorage.setItem('productList',JSON.stringify(product_list) );

function product(id, img, name, price,about) {
    this.id = id;
    this.img = img;
    this.name = name;
    this.price = price;
    this.about = about;
}

function addproducts(){
    var shop = ``
    product_list.forEach(shopitem => {
        shop += `
        <a onclick="renderProductDetail(${shopitem.id})" class="item">
            <img src="${shopitem.img}" alt="" class="item-img">
            <span class="item-name" >${shopitem.name}</span>
            <span class="item-price" >${parseInt(shopitem.price).toLocaleString()} ₫</span>
        </a>
        `
    })
    var add = document.querySelector('.product')
    if(add == null) return;
    else add.innerHTML = shop
}
addproducts();

function showtraicay(){
    document.querySelectorAll('.kc').forEach(hongchon => {
        hongchon.style.backgroundColor = '#fff'
    })
    document.querySelector('.list-traicay').style.backgroundColor = '#bced7b'
    var shop = ``
    product_list.forEach(shopitem => {
        if(shopitem.type == 'traicay')
        shop += `
        <a onclick="renderProductDetail(${shopitem.id})" class="item">
            <img src="${shopitem.img}" alt="" class="item-img">
            <span class="item-name" >${shopitem.name}</span>
            <span class="item-price" >${parseInt(shopitem.price).toLocaleString()} ₫</span>
        </a>
        `
    })
    var add = document.querySelector('.product')
    if(add == null) return;
    else add.innerHTML = shop
}
function showrau(){
    document.querySelectorAll('.kc').forEach(hongchon => {
        hongchon.style.backgroundColor = '#fff'
    })
    document.querySelector('.list-rau').style.backgroundColor = '#bced7b'
    var shop = ``
    product_list.forEach(shopitem => {
        if(shopitem.type == 'rau')
        shop += `
        <a onclick="renderProductDetail(${shopitem.id})" class="item">
            <img src="${shopitem.img}" alt="" class="item-img">
            <span class="item-name" >${shopitem.name}</span>
            <span class="item-price" >${parseInt(shopitem.price).toLocaleString()} ₫</span>
        </a>
        `
    })
    var add = document.querySelector('.product')
    if(add == null) return;
    else add.innerHTML = shop
}
function showdouong(){
    document.querySelectorAll('.kc').forEach(hongchon => {
        hongchon.style.backgroundColor = '#fff'
    })
    document.querySelector('.list-uong').style.backgroundColor = '#bced7b'
    var shop = ``
    product_list.forEach(shopitem => {
        if(shopitem.type == 'uong')
        shop += `
        <a onclick="renderProductDetail(${shopitem.id})" class="item">
            <img src="${shopitem.img}" alt="" class="item-img">
            <span class="item-name" >${shopitem.name}</span>
            <span class="item-price" >${parseInt(shopitem.price).toLocaleString()} ₫</span>
        </a>
        `
    })
    var add = document.querySelector('.product')
    if(add == null) return;
    else add.innerHTML = shop
}
function showkho(){
    document.querySelectorAll('.kc').forEach(hongchon => {
        hongchon.style.backgroundColor = '#fff'
    })
    document.querySelector('.list-kho').style.backgroundColor = '#bced7b'
    var shop = ``
    product_list.forEach(shopitem => {
        if(shopitem.type == 'kho')
        shop += `
        <a onclick="renderProductDetail(${shopitem.id})" class="item">
            <img src="${shopitem.img}" alt="" class="item-img">
            <span class="item-name" >${shopitem.name}</span>
            <span class="item-price" >${parseInt(shopitem.price).toLocaleString()} ₫</span>
        </a>
        `
    })
    var add = document.querySelector('.product')
    if(add == null) return;
    else add.innerHTML = shop
}

function renderProductDetail(id) {

    var product_list = JSON.parse(localStorage.getItem('productList'));
    if (product_list == null) {
        product_list = [];
    }

    var listProduct = [];
    for (var i = 0; i < product_list.length; i++) {
        var product_item = new product(product_list[i].id, product_list[i].img, product_list[i].name, product_list[i].price, product_list[i].about);
        listProduct.push(product_item);
    }

    for (var i = 0; i < listProduct.length; i++) {
        var currentProduct = listProduct[i];
        if (currentProduct.id == id) {
            var thisProduct = currentProduct;
        }
    }
    document.querySelector('main').innerHTML = `<div id="main"></div>`
    document.querySelector('#main').innerHTML = `
                            <div class="product-img">
                            <img src="${thisProduct.img}" alt="">
                        </div>
                        <div class="product-info">
                            <h1 class="product-name" >${thisProduct.name}</h1>
                            <span class="product-price" >${parseInt(thisProduct.price).toLocaleString()} ₫</span>
                            <p class="product-about" >${thisProduct.about}</p>
                            <div class="product-buy">
                                
                                <button onclick="addCart('${thisProduct.id}')">THÊM VÀO GIỎ</button>
                            </div>
                        </div>
     `

}

// tim kiem
const search = document.querySelector('.search_wrapper');
const searchInput = document.querySelector('.search-input');
const searchButton = document.querySelector('.search_button');
const searchResult = document.querySelector('.search_result');

const onSearch = (keyword) => {
    outsearch();
    var keywordsearch = keyword.trim();
    console.log(keywordsearch);
    product_list.forEach(productn => {
        if(keywordsearch != null){
            if (productn.name.toLowerCase().indexOf(keywordsearch.toLowerCase()) !== -1)
            searchResult.innerHTML += `
            <div onclick="renderProductDetail(${productn.id})" class="search_product">
                <img src="${productn.img}"/>
                <div class="namenprice">
                <div class="search_product_name">
                    ${productn.name}
                </div>
                <div class="search_product_price">
                    ${parseInt(productn.price).toLocaleString()} ₫
                </div>
                </div>    
            </div>
            `
        }
        
    });

}
searchInput.addEventListener('keypress', event => {
    if (searchInput.value.length === 0)
        return;
    if (event.code === 'Enter')
        onSearch(searchInput.value);
})

searchButton.addEventListener('click', event => {
    if (searchInput.value.length === 0)
        return;
    onSearch(searchInput.value);
});

var outsearch = function(){
    searchResult.innerHTML=``;
}

