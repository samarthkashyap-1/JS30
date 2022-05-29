const inputs = document.querySelectorAll(".controlbtn");

var n = Array.prototype.slice.call(inputs);

function handler() {
  const suffix = this.dataset.sizing || "";
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  );
}

n.forEach((input) => input.addEventListener("mousemove", handler));
n.forEach((input) => input.addEventListener("change", handler));
