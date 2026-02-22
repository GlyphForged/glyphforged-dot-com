(() => {
  // Add a class when HTMX swaps in content to trigger subtle terminal blink.
  document.body.addEventListener("htmx:afterSwap", (event) => {
    const target = event.target;
    if (!target || !(target instanceof HTMLElement)) return;
    target.classList.add("updated");
    setTimeout(() => target.classList.remove("updated"), 450);
  });
})();
