const counters = document.querySelectorAll(".counter");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      let count = 0;
      const target = +el.dataset.target;
      const step = target / 100;

      const update = () => {
        if (count < target) {
          count += step;
          el.innerText = Math.ceil(count) + "+";
          requestAnimationFrame(update);
        }
      };
      update();
      observer.unobserve(el);
    }
  });
});

counters.forEach(c => observer.observe(c));
