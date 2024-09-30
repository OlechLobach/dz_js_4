// Task 1

function f1() {
    const checkbox = document.getElementById("i-1");  // Отримуємо чекбокс
    const output = document.getElementById("out-1");  // Отримуємо елемент для виведення результату
  
    if (checkbox.checked) {
      output.textContent = "true";  // Виводимо 'true', якщо чекбокс позначений
    } else {
      output.textContent = "false";  // Виводимо 'false', якщо чекбокс не позначений
    }
  }
  
  // Додаємо обробник події на кнопку
  document.getElementById("b-1").addEventListener("click", f1);

  function f2() {
    const checkbox = document.getElementById("i-2");  // Отримуємо чекбокс
    const output = document.getElementById("out-2");  // Отримуємо елемент для виведення результату
  
    if (checkbox.checked) {
      output.textContent = checkbox.value;  // Виводимо значення value, якщо чекбокс вибраний
    } else {
      output.textContent = "false";  // Виводимо 'false', якщо чекбокс не вибраний
    }
  }
  
  // Додаємо обробник події на кнопку
  document.getElementById("b-2").addEventListener("click", f2);

  function f3() {
    const inputPassword = document.getElementById("i-3");  // Отримуємо input для пароля
    const out31 = document.getElementById("out-31");  // Елемент для виведення value пароля
    const out32 = document.getElementById("out-32");  // Елемент для виведення результату перевірки довжини
  
    // Виводимо значення введеного пароля в out-31
    out31.textContent = inputPassword.value;
  
    // Перевіряємо довжину пароля і виводимо 1 або 0 в out-32
    if (inputPassword.value.length >= 6) {
      out32.textContent = 1;
    } else {
      out32.textContent = 0;
    }
  }
  
  // Додаємо обробник події на кнопку
  document.getElementById("b-3").addEventListener("click", f3);

  function f4() {
    const selectedRadio = document.querySelector('input[name="stack"]:checked');  // Отримуємо вибраний радіо елемент
    const output = document.getElementById("out-4");  // Елемент для виведення результату
  
    if (selectedRadio) {
      output.textContent = selectedRadio.value;  // Виводимо значення вибраної радіо кнопки
    }
  }
  
  // Додаємо обробник події на кнопку
  document.getElementById("b-4").addEventListener("click", f4);

  function f5() {
    const colorOne = document.getElementById("i-51");  // Отримуємо перший color input
    const colorTwo = document.getElementById("i-52");  // Отримуємо другий color input
  
    colorTwo.value = colorOne.value;  // Присвоюємо значення першого color input другому
  }
  
  // Додаємо обробник події на кнопку
  document.getElementById("b-5").addEventListener("click", f5);

  function f6() {
    const dateInput = document.getElementById("i-6");  // Отримуємо input для дати
    const output = document.getElementById("out-6");   // Отримуємо елемент для виведення результату
  
    output.textContent = dateInput.value;  // Виводимо вибрану дату
  }
  
  // Додаємо обробник події на кнопку
  document.getElementById("b-6").addEventListener("click", f6);

  function updateSliderValue() {
    const slider = document.getElementById("i-7");  // Отримуємо повзунок
    const output = document.getElementById("out-7"); // Отримуємо елемент для виведення значення
  
    output.textContent = slider.value;  // Виводимо значення повзунка
  }
  
  // Додаємо обробник події на зміну положення повзунка
  document.getElementById("i-7").addEventListener("input", updateSliderValue);

  function f8() {
    const textInput = document.getElementById("i-8");  // Отримуємо текстовий input
    const output = document.getElementById("out-8");   // Отримуємо елемент для виведення результату
    const textArea = document.getElementById("t-8");    // Отримуємо textarea
  
    // Виводимо текст у out-8 та textarea
    output.textContent = textInput.value;
    textArea.value = textInput.value;
  }
  
  // Додаємо обробник події на кнопку
  document.getElementById("b-8").addEventListener("click", f8);

  function f9() {
    const selectElement = document.getElementById("s-9");  // Отримуємо select
    const output = document.getElementById("out-9");       // Отримуємо елемент для виведення результату
  
    output.textContent = selectElement.value;  // Виводимо значення вибраного option
  }
  
  // Додаємо обробник події на зміну вибраного значення
  document.getElementById("s-9").addEventListener("change", f9);

  function f10(event) {
    event.preventDefault();  // Запобігаємо перезавантаженню сторінки при відправці форми
  
    const firstName = document.getElementById("inputFirstName").value;  // Отримуємо ім'я
    const lastName = document.getElementById("inputLastName").value;    // Отримуємо прізвище
    const email = document.getElementById("inputEmail").value;          // Отримуємо email
    const password = document.getElementById("inputPassword").value;    // Отримуємо пароль
    const address = document.getElementById("inputAddress").value;      // Отримуємо адресу
    const city = document.getElementById("inputCity").value;            // Отримуємо місто
    const region = document.getElementById("inputRegion").value;        // Отримуємо регіон
    const zip = document.getElementById("inputZip").value;              // Отримуємо поштовий індекс
  
    const output = document.getElementById("out-10");                   // Отримуємо елемент для виведення результату
  
    // Формуємо текст для виведення
    output.textContent = `
      <strong>First Name:</strong> ${firstName}<br>
      <strong>Last Name:</strong> ${lastName}<br>
      <strong>Email:</strong> ${email}<br>
      <strong>Password:</strong> ${password}<br>
      <strong>Address:</strong> ${address}<br>
      <strong>City:</strong> ${city}<br>
      <strong>Region:</strong> ${region}<br>
      <strong>Zip:</strong> ${zip}<br>
    `;
  }
  
  // Додаємо обробник події на форму
  document.getElementById("task-10").addEventListener("submit", f10);
