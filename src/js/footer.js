import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

document.addEventListener('DOMContentLoaded', () => {
  const footerForm = document.querySelector('.footer__form');

  if (footerForm) {
    footerForm.addEventListener('submit', async function (event) {
      event.preventDefault();

      const emailInput = document.querySelector('.footer__input');
      const email = emailInput.value.trim();

      const emailPattern = /^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
      if (!emailPattern.test(email)) {
        iziToast.error({
          title: 'Помилка',
          message: 'Будь ласка, введіть коректну email адресу.',
          position: 'bottomRight',
        });
        return;
      }

      try {
        const response = await fetch(
          'https://your-energy.b.goit.study/api/subscription',
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email }),
          }
        );

        const result = await response.json();

        if (response.status === 201) {
          iziToast.success({
            title: 'Успіх',
            message: result.message || 'Ви успішно підписались на розсилку!',
            position: 'topRight',
          });
        } else if (response.status === 400) {
          iziToast.warning({
            title: 'Увага',
            message: result.message || 'Некоректні дані. Перевірте ваш email.',
            position: 'topRight',
          });
        } else if (response.status === 409) {
          iziToast.warning({
            title: 'Увага',
            message: result.message || 'Цей email вже підписаний.',
            position: 'topRight',
          });
        } else {
          iziToast.error({
            title: 'Помилка',
            message: result.message || 'Сталася помилка. Спробуйте пізніше.',
            position: 'topRight',
          });
        }
      } catch (error) {
        iziToast.error({
          title: 'Помилка',
          message: 'Не вдалося підключитися до сервера. Спробуйте пізніше.',
          position: 'topRight',
        });
      }

      emailInput.value = '';
    });
  }
});
