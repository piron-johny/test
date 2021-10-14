//finished time
const dateFinishCounter = new Date("October 14, 2021 18:16:00").getTime();

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
  

  if (difference < 0) {
    clearInterval(countDown);
    document.getElementById("countDown").innerHTML = "FINISH!";
  }
}, 1000);

