document.addEventListener("DOMContentLoaded", function () {
  const progressBar = document.getElementById("progress-bar");
  const progressText = document.getElementById("progress-text");
  const img = document.getElementById("img1");

  // Задаем значение прогресса руками
  let progressValue = 32; // Установите желаемое значение прогресса здесь

  if (progressValue >= 0 && progressValue <= 100) {
    progressBar.style.width = progressValue + "%";
    progressText.textContent = progressValue + "%";
    if (progressValue < 10) {
      progressText.style.left = "0"; // Прибиваем текст к левому краю, если значение меньше 10%
    }

    // Обновляем позицию картинки
    const containerWidth = progressBar.parentElement.offsetWidth;
    const imgWidth = img.offsetWidth;
    const imgLeft =
      (progressValue / 100) * containerWidth - imgWidth + imgWidth / 2; // Правильный расчет позиции для выравнивания справа
    img.style.left = imgLeft + "px";
  }
});
