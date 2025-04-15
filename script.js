// Función para expandir/contraer secciones principales
function toggleSection(sectionId) {
  const section = document.getElementById(sectionId);
  const content = section.querySelector('.content');
  if (content.style.display === 'block') {
    content.style.display = 'none';
    section.querySelector('h2').textContent = section.querySelector('h2').textContent.replace('▲', '▼');
  } else {
    content.style.display = 'block';
    section.querySelector('h2').textContent = section.querySelector('h2').textContent.replace('▼', '▲');
  }
}

// Función para expandir/contraer eventos de la cronología
function toggleTimelineEvent(eventHeader) {
  const eventContent = eventHeader.nextElementSibling;
  if (eventContent.style.display === 'block') {
    eventContent.style.display = 'none';
  } else {
    eventContent.style.display = 'block';
  }
}
