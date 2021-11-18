//finished time
const dateFinishCounter = new Date("Jan 01, 2022 00:00:01").getTime();
const alert = document.querySelector('.alert');
const title = document.querySelector('h3');

//function, 1000 ms
const countDown = setInterval(() => {

  // Сегодняшние дата и время
  const now = new Date().getTime();

  // Разница между сегодняшней датой и датой обратного отсчета
  const difference = dateFinishCounter - now;

  // Рассчет количества милисекунд
  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  // Выводим результат в элемент id='countDown'

  document.getElementById(
    "countDown"
  ).innerHTML = `${days} : ${hours} : ${minutes} : ${seconds}`;

  // Вообщение при окончании времени
  const finishData = "Happy NEW 2022 YEAR!";

  if (difference < 0) {
    clearInterval(countDown);
    const box = document.getElementById("countDown");
    box.innerHTML = finishData;
    box.classList.add('action');
    title.remove();

    alert.insertAdjacentHTML('beforeend', `
      <div class="alert__img">
        <img src="https://acegif.com/wp-content/uploads/fireworks-7.gif" class="img">
      </div>
      <div class="alert__img">
        <img src="https://acegif.com/wp-content/uploads/fireworks-7.gif" class="img">
      </div>
      <div class="alert__img">
        <img src="https://acegif.com/wp-content/uploads/fireworks-7.gif" class="img">
      </div>
    `)
  }
}, 1000);

