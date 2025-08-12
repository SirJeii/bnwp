// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const nav = document.getElementById('primary-nav');

if (navToggle && nav) {
  navToggle.addEventListener('click', () => {
    const expanded = nav.getAttribute('aria-expanded') === 'true';
    const newState = !expanded;
    nav.setAttribute('aria-expanded', newState);
    navToggle.setAttribute('aria-expanded', newState);
  });
}

// Countdown to Aug 18, 2025 00:00 local time
(function(){
  const el = document.getElementById('countdown');
  if (!el) return;
  const target = new Date('2025-08-18T00:00:00');
  const pad = (n) => n.toString().padStart(2, '0');
  function update(){
    const now = new Date();
    let diff = Math.max(0, target - now);
    const days = Math.floor(diff / (1000*60*60*24));
    diff -= days * 1000*60*60*24;
    const hours = Math.floor(diff / (1000*60*60));
    diff -= hours * 1000*60*60;
    const minutes = Math.floor(diff / (1000*60));
    diff -= minutes * 1000*60;
    const seconds = Math.floor(diff / 1000);
    el.textContent = `${days}d ${pad(hours)}h ${pad(minutes)}m ${pad(seconds)}s`;
  }
  update();
  setInterval(update, 1000);
})();
