const toggleBtn = document.getElementById('toggle');
const close_menu = document.getElementById('close');
const sidebar = document.getElementById('sidebar');

function toggleSidebar() {
  sidebar.classList.toggle('open');
}
toggleBtn.addEventListener('click', toggleSidebar);

function closeSidebar() {
  sidebar.classList.remove('open');
}
close_menu.addEventListener('click', closeSidebar);




let slideIndex = 0;

function mudarSlide(direcao) {
    const slidesContainer = document.getElementById('slides');
    const slideElement = slidesContainer.children[0];
    const slideWidth = slideElement.getBoundingClientRect().width; // usa a largura *real renderizada*
    const totalSlides = slidesContainer.children.length;

    slideIndex = (slideIndex + direcao + totalSlides) % totalSlides;

    // aplica a transformação com base na largura do slide real
    slidesContainer.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
}

// Corrige posição no resize
window.addEventListener('resize', () => {
    const slidesContainer = document.getElementById('slides');
    const slideElement = slidesContainer.children[0];
    const slideWidth = slideElement.getBoundingClientRect().width;

    slidesContainer.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
});
(function() {
  // Popups (modais)
  const saibaMaisButtons = document.querySelectorAll('.custom-saiba-mais');
  saibaMaisButtons.forEach(button => {
    button.addEventListener('click', () => {
      const infoId = button.getAttribute('data-info');
      const popup = document.getElementById(infoId);
      if (popup) popup.style.display = 'flex';
    });
  });

  const fecharButtons = document.querySelectorAll('.custom-fechar');
  fecharButtons.forEach(button => {
    button.addEventListener('click', () => {
      const popup = button.closest('.custom-info-popup');
      if (popup) popup.style.display = 'none';
    });
  });
})();









