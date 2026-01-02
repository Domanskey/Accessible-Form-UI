function updateCircle(percent) {
    const circle = document.querySelector('.percentage__completeness');
    const text = document.querySelector('.percentage__number');

    const radius = 65;
    const circumference = 2 * Math.PI * radius;

    // Calculate how much of the stroke to hide
    const offset = circumference - (percent / 100 * circumference);

    circle.style.strokeDashoffset = offset;
    // console.log(text.innerHTML);
    text.textContent = percent + "%";
}

// delay tranistion
setTimeout(() => {
    document.querySelector('.percentage__completeness').classList.add('percentage__completeness--ready');
  }, 50);

setTimeout(() => updateCircle(85), 500);