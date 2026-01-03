export function updateCircle(percent) {
    const circle = document.querySelector('.percentage__completeness');
    const text = document.querySelector('.percentage__number');

    const radius = 66;
    const circumference = 2 * Math.PI * radius;
    console.log(circumference);

    // Calculate how much of the stroke to hide
    const offset = Math.ceil(circumference - (percent / 100 * circumference));

    circle.style.strokeDashoffset = offset;

    text.textContent = percent + "%";
}

// delay tranistion
setTimeout(() => {
    document.querySelector('.percentage__completeness').classList.add('percentage__completeness--ready');
  }, 50);
