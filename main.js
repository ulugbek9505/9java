const a = prompt("Ismingizni kiriting");
const b = prompt("Familiyangizni kiriting");
const c = +prompt("Yoshingizni kiriting");
const items = +prompt("1) kotta \n 2) kichkina");

if (!a || !b || isNaN(c) || isNaN(items)) {
  alert("Iltimos, to'g'ri qiymatlarni kiriting.");
} else {
  const userAge = document.createElement("h1");
  const surname = document.createElement("h1");

  surname.textContent = `2) Surname: ${b}`;
  userAge.textContent = `3) Age: ${c}`;

  document.body.appendChild(userAge);
  document.body.appendChild(surname);

  if (items === 1) {
    const newTag = document.createElement("h1");
    newTag.textContent = `1) Name: ${a.toUpperCase()}`;
    document.body.appendChild(newTag);
  } else if (items === 2) {
    const userName = document.createElement("div");
    userName.textContent = `1) Name: ${a.toLowerCase()}`;
    document.body.appendChild(userName);
  } else {
    alert("Qiymat noto'g'ri, iltimos, 1 yoki 2 ni tanlang.");
  }
}
