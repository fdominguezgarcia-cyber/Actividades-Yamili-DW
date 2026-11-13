document.addEventListener("DOMContentLoaded", () => {
  if (typeof lucide !== "undefined") {
    lucide.createIcons();
  }

  const paginas = ["page-0", "pagina1", "pagina2", "pagina3", "pagina4"];
  let indiceActual = 0;

  const dotsEl = document.getElementById("dots");
  const dots = [];

  if (dotsEl) {
    paginas.forEach((_, i) => {
      const dot = document.createElement("div");
      dot.className = "dot";
      if (i === 0) dot.classList.add("active");
      dotsEl.appendChild(dot);
      dots.push(dot);
    });
  }

  function actualizarDots() {
    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === indiceActual);
    });
  }

  function detenerAudio() {
    const audio = document.getElementById("navidad-audio");
    const btnText = document.getElementById("ebc-audio-btn-text");
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }
    if (btnText) btnText.textContent = "💗";
  }

  function irAPagina(nuevoIndice) {
    if (nuevoIndice < 0 || nuevoIndice >= paginas.length) return;

    const paginaActual = document.getElementById(paginas[indiceActual]);
    if (paginaActual) {
      paginaActual.classList.remove("active");
    }

    indiceActual = nuevoIndice;

    const nuevaPagina = document.getElementById(paginas[indiceActual]);
    if (nuevaPagina) {
      nuevaPagina.classList.add("active");
    }

    actualizarDots();

    if (indiceActual === 4) {
      lanzarConfeti();
    } else {
      detenerAudio();
    }
  }

  const btnEnter = document.getElementById("btn-enter");
  if (btnEnter) {
    btnEnter.addEventListener("click", () => irAPagina(1));
  }

  const btnNext1 = document.getElementById("btn-next-1");
  if (btnNext1) {
    btnNext1.addEventListener("click", () => irAPagina(2));
  }

  const btnReveal = document.getElementById("btn-reveal");
  if (btnReveal) {
    btnReveal.addEventListener("click", () => irAPagina(4));
  }

  const btnPrev = document.getElementById("btn-prev");
  if (btnPrev) {
    btnPrev.addEventListener("click", () => irAPagina(indiceActual - 1));
  }

  const btnNext = document.getElementById("btn-next");
  if (btnNext) {
    btnNext.addEventListener("click", () => irAPagina(indiceActual + 1));
  }

  const btnAudioEbc = document.getElementById("btn-audio-ebc");
  if (btnAudioEbc) {
    btnAudioEbc.addEventListener("click", () => {
      const audio = document.getElementById("navidad-audio");
      const btnText = document.getElementById("ebc-audio-btn-text");

      if (!audio) return;

      if (audio.paused) {
        audio.play();
        if (btnText) btnText.textContent = "⏸️";
      } else {
        audio.pause();
        if (btnText) btnText.textContent = "💗";
      }
    });
  }

  function lanzarConfeti() {
    const container = document.getElementById("confetti-container");
    if (!container) return;

    container.innerHTML = "";
    const colors = ["#D1C600", "#ef4444", "#ffffff", "#16a34a", "#fbbf24"];

    for (let i = 0; i < 40; i++) {
      const c = document.createElement("div");
      c.className = "confetti";
      c.style.left = Math.random() * 100 + "%";
      c.style.background = colors[Math.floor(Math.random() * colors.length)];
      c.style.animationDelay = Math.random() * 2 + "s";
      c.style.borderRadius = Math.random() > 0.5 ? "50%" : "0";
      container.appendChild(c);
    }
  }
});