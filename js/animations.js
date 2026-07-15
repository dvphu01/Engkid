// EngKids - Animation Helpers
const Animations = {
  confetti(count = 40) {
    const colors = ['#FF6B6B','#FDCB6E','#00B894','#74B9FF','#A29BFE','#FD79A8','#55EFC4','#FF9FF3'];
    for (let i = 0; i < count; i++) {
      const el = document.createElement('div');
      el.className = 'confetti-piece';
      el.style.left = Math.random() * 100 + '%';
      el.style.background = colors[Math.floor(Math.random() * colors.length)];
      el.style.width = (Math.random() * 8 + 5) + 'px';
      el.style.height = (Math.random() * 8 + 5) + 'px';
      el.style.animationDuration = (Math.random() * 2 + 1.5) + 's';
      el.style.animationDelay = (Math.random() * 0.5) + 's';
      document.body.appendChild(el);
      setTimeout(() => el.remove(), 4000);
    }
  },

  starBurst(x, y, count = 8) {
    for (let i = 0; i < count; i++) {
      const star = document.createElement('div');
      star.textContent = '⭐';
      star.style.cssText = `position:fixed;left:${x}px;top:${y}px;font-size:20px;pointer-events:none;z-index:9999;transition:all 0.8s ease-out;`;
      document.body.appendChild(star);
      const angle = (i / count) * Math.PI * 2;
      const dist = 60 + Math.random() * 40;
      requestAnimationFrame(() => {
        star.style.transform = `translate(${Math.cos(angle)*dist}px, ${Math.sin(angle)*dist}px) scale(0)`;
        star.style.opacity = '0';
      });
      setTimeout(() => star.remove(), 900);
    }
  },

  floatUp(el, text, color = '#FDCB6E') {
    const f = document.createElement('div');
    f.textContent = text;
    f.style.cssText = `position:absolute;color:${color};font-size:24px;font-weight:900;pointer-events:none;z-index:999;transition:all 1s ease-out;`;
    const rect = el.getBoundingClientRect();
    f.style.left = rect.left + rect.width/2 - 20 + 'px';
    f.style.top = rect.top + 'px';
    document.body.appendChild(f);
    requestAnimationFrame(() => { f.style.transform = 'translateY(-60px)'; f.style.opacity = '0'; });
    setTimeout(() => f.remove(), 1100);
  },

  shake(el) {
    el.classList.add('animate-shake');
    setTimeout(() => el.classList.remove('animate-shake'), 600);
  },

  bounceIn(el) {
    el.classList.add('animate-bounce-in');
    setTimeout(() => el.classList.remove('animate-bounce-in'), 700);
  },

  staggerChildren(parent, className = 'animate-slide-up') {
    const children = parent.children;
    Array.from(children).forEach((child, i) => {
      child.style.animationDelay = (i * 0.08) + 's';
      child.classList.add(className);
    });
  }
};
