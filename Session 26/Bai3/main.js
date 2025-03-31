function checkEmail(emailList) {
    if (!Array.isArray(emailList)) {
        return "Dữ liệu không hợp lệ";
    }
    else if(emailList.length===0){
        return "Mảng rỗng"
    }
    return emailList.filter(email =>typeof email === "string"&& email.includes(`@`)&& !email.includes(" "));
}
let emailList = `"user@ example.com",
    "email@ example.com",
    "no-at-symbol.com",
    "valid.email @domain.com",
    "another_valid@email.com"`
console.log(checkEmail(emailList));