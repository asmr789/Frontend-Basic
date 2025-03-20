let character = prompt("Nhập một ký tự:");

if ( character.length === 1) {
    if (character >= 'A' && character <= 'Z' || character >= 'a' && character <= 'z') {
        document.write("Ký tự " + character + " là chữ cái");
    }
}
else {
    document.write("Ký tự " + character + " ko p chữ cái");
}