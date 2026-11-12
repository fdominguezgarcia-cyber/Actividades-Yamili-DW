

  
document.addEventListener("DOMContentLoaded", () => {
  if (typeof lucide !== "undefined") {
    lucide.createIcons();
  }


  const paginas = ['page-0', 'pagina1', 'pagina2'];
  let indiceActual = 0;


  function irAPagina(nuevoIndice) {
    if (nuevoIndice < 0 || nuevoIndice >= paginas.length) return;


    const paginaActual = document.getElementById(paginas[indiceActual]);
    if (paginaActual) {
      paginaActual.classList.remove('active');
    }


    indiceActual = nuevoIndice;
    const nuevaPagina = document.getElementById(paginas[indiceActual]);
    if (nuevaPagina) {
      nuevaPagina.classList.add('active');
    }
  }


  const btnEnter = document.getElementById('btn-enter');
  if (btnEnter) {
    btnEnter.addEventListener('click', () => {
      irAPagina(1);
    });
  }


  const btnNext1 = document.getElementById('btn-next-1');
  if (btnNext1) {
    btnNext1.addEventListener('click', () => {
      irAPagina(2);
    });
  }
});
