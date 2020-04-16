$(document).ready ( function(){
  var listCart = [];
  listCart = JSON.parse(localStorage.getItem('arr'));
  console.log(listCart);
  listCart.forEach(pro =>{
        $(".tr-cart").append(
          '<td>'+
            '<div class="td-img"><img src="'+ pro.image +'"/></div>'+
          '</td>'+
          '<td>'+
            '<div class="td-name2">'+ pro.name +'</div>'+
          '</td>'+
          '<td>'+
            '<div class="td-price2">'+ pro.price +'</div>'+
          '</td>'+
          '<td>'+
            '<div class="td-amount2">'+ pro.amount +'</div>'+
          '</td>'+
          '<td>'+
            '<div class="td-total2">'+ pro.price * pro.amount +'</div>'+
          '</td>'+
          '<td><i class="far fa-trash-alt td-delete2"></i></td>'
        );
      });
})
function showPayment(){
  alert("Đã thanh toán");
  localStorage.clear();
}
function continueBuy(){
  location.href='index.html';
}
