function check(dateArray) {
    if (!Array.isArray(dateArray)) {
        return "Dữ liệu không hợp lệ";
    }
    if (dateArray.length === 0) {
        return [];
    }
    return dateArray.map(date => {
        const [year, month, day] = date.split("-");
        return `${day}/${month}/${year}`;
    });
}
console.log(check(["2025-03-10", "2024-12-25", "2023-07-01"]));
console.log(check([]));
console.log(check("abc"));
