const firstName = prompt("Siapa nama depanmu?");
const lastName = prompt("Siapa nama belakangmu?");
const age = prompt("Berapa Umur Anda Sekarang?");
const language = prompt("Bisa berbahasa apa?");

const user = {
    name: {
        first: firstName,
        last: lastName,
        age: age,
    },
    language: language
};

if (user.language === "English") {
    alert("Nice to meet you " + user.name.first + " " + user.name.last + " " + user.name.age +"!");
} else if (user.language === "French") {
    alert("Ravi de vous rencontrer " + user.name.first + " " + user.name.last + " " + user.name.age + "!");
} else if (user.language === "Japanese") {
    alert("Hajimemashite, " + user.name.first + " " + user.name.last + " " + user.name.age + "!");
} else {
    alert("Senang bertemu dengan Anda " + " " + user.name.first + " " + user.name.last + " " + user.name.age + "!");
}