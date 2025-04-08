const content= document.getElementById('content');
const hideBTN = document.getElementById('hideBTN');
const showBTN = document.getElementById('showBTN');

hideBTN.addEventListener('click', function() {
    content.style.display = 'none'; // ẩn
});
showBTN.addEventListener('click',function() {
    content.style.display = 'block'//hiện
})