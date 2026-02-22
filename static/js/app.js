(() => {
  const speedSlider = document.querySelector("[data-ambient-speed-slider]");
  if (speedSlider instanceof HTMLInputElement) {
    const speedOutput = document.querySelector("#ambient-speed-output");

    const applyAmbientSpeed = () => {
      const sliderValue = Number.parseFloat(speedSlider.value);
      const ambientSpeed = Number.isFinite(sliderValue) && sliderValue > 0 ? sliderValue : 1;
      document.documentElement.style.setProperty("--ambient-speed-multiplier", ambientSpeed.toString());
      if (speedOutput instanceof HTMLOutputElement) {
        speedOutput.value = `${ambientSpeed.toFixed(1)}x`;
        speedOutput.textContent = speedOutput.value;
      }
    };

    speedSlider.addEventListener("input", applyAmbientSpeed);
    applyAmbientSpeed();
  }

  // Add a class when HTMX swaps in content to trigger subtle terminal blink.
  document.body.addEventListener("htmx:afterSwap", (event) => {
    const target = event.target;
    if (!target || !(target instanceof HTMLElement)) return;
    target.classList.add("updated");
    setTimeout(() => target.classList.remove("updated"), 450);
  });

  const dots = document.querySelector(".musings-status-dots");
  if (!dots) return;

  const maxDots = Number.parseInt(dots.dataset.maxDots || "3", 10);
  let current = 0;

  const renderDots = () => {
    dots.textContent = ".".repeat(current);
  };

  renderDots();
  setInterval(() => {
    current = (current + 1) % (maxDots + 1);
    renderDots();
  }, 500);
})();
