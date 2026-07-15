const App = {
  currentScreen: null,
  currentLesson: null,
  currentStage: null,
  exerciseState: null,
  exploreFilter: 'all',

  init() {
    Audio.init();
    if (Storage.isSetupDone()) this.showScreen('home');
    else this.showScreen('setup');
    document.addEventListener('click', () => Audio.resume(), { once: true });
    window.speechSynthesis && window.speechSynthesis.getVoices();
    this.initNav();
  },

  initNav() {
    const nav = document.getElementById('bottomNav');
    if (!nav) return;
    nav.addEventListener('click', (e) => {
      const item = e.target.closest('.nav-item');
      if (!item) return;
      e.preventDefault();
      const screen = item.dataset.screen;
      if (screen) this.showScreen(screen);
    });
  },

  showScreen(name, data) {
    const app = document.getElementById('app');
    app.innerHTML = '';
    this.currentScreen = name;
    const screen = document.createElement('div');
    screen.className = `screen ${name}-screen active`;
    screen.id = `screen-${name}`;

    switch(name) {
      case 'setup': this.renderSetup(screen); break;
      case 'home': this.renderHome(screen); break;
      case 'roadmap': this.renderRoadmap(screen); break;
      case 'lessons': this.renderLessonList(screen, data); break;
      case 'lesson': this.renderLesson(screen, data); break;
      case 'results': this.renderResults(screen, data); break;
      case 'profile': this.renderProfile(screen); break;
      case 'skills': this.renderSkills(screen); break;
      case 'explore': this.renderExplore(screen); break;
      case 'paths': this.renderPaths(screen); break;
      case 'path_detail': this.renderPathDetail(screen, data); break;
      case 'alphabet': this.renderAlphabet(screen); break;
      case 'alphabet_quiz': this.renderAlphabetQuiz(screen); break;
      case 'dialogue': this.renderDialogue(screen, data); break;
      case 'dialogue_list': this.renderDialogueList(screen); break;
      case 'listening': this.renderListening(screen, data); break;
      case 'listening_list': this.renderListeningList(screen); break;
      case 'phrases': this.renderPhrases(screen, data); break;
      case 'phrase_list': this.renderPhraseList(screen); break;
      case 'sentence_game': this.renderSentenceBuilder(screen); break;
      case 'leaderboard': this.renderLeaderboard(screen); break;
      case 'parent': this.renderParentDashboard(screen); break;
    }
    app.appendChild(screen);

    const nav = document.getElementById('bottomNav');
    const showNav = ['home', 'skills', 'explore', 'paths', 'profile'].includes(name);
    nav.style.display = showNav ? 'flex' : 'none';
    if (showNav) {
      document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
      const activeItem = document.querySelector(`.nav-item[data-screen="${name}"]`);
      if (activeItem) activeItem.classList.add('active');
    }
  },

  // ══════════════════════════════════════
  //  SETUP SCREEN
  // ══════════════════════════════════════
  renderSetup(el) {
    const avatars = ['🦊','🐼','🐨','🦁','🐯','🐸','🐵','🦄'];
    let selected = '🦊';
    el.innerHTML = `
      <div class="splash-bg-shapes"><div class="splash-shape"></div><div class="splash-shape"></div><div class="splash-shape"></div></div>
      <div style="position:relative;z-index:2;width:100%">
        <div style="font-size:64px;margin-bottom:16px">🐝</div>
        <h2 class="setup-title">Chào bạn nhỏ!</h2>
        <p class="setup-subtitle">Hãy chọn nhân vật và đặt tên cho mình nhé!</p>
        <div class="avatar-picker" id="avatarPicker">
          ${avatars.map(a => `<div class="avatar-option ${a===selected?'selected':''}" data-avatar="${a}">${a}</div>`).join('')}
        </div>
        <input type="text" class="name-input" id="nameInput" placeholder="Nhập tên của bé..." maxlength="20">
        <button class="btn btn-primary btn-block" id="startBtn" style="margin-top:16px">Bắt đầu học! 🚀</button>
      </div>`;
    
    el.querySelector('#avatarPicker').addEventListener('click', e => {
      const opt = e.target.closest('.avatar-option');
      if (!opt) return;
      el.querySelectorAll('.avatar-option').forEach(o => o.classList.remove('selected'));
      opt.classList.add('selected');
      selected = opt.dataset.avatar;
      Audio.play('pop');
    });

    el.querySelector('#startBtn').addEventListener('click', () => {
      const name = el.querySelector('#nameInput').value.trim() || 'Bé';
      Storage.set('name', name);
      Storage.set('avatar', selected);
      Audio.play('complete');
      this.showScreen('home');
    });
  },

  // ══════════════════════════════════════
  //  HOME SCREEN (Myna-inspired)
  // ══════════════════════════════════════
  renderHome(el) {
    const data = Storage.load();
    const totalLessons = LessonData.stages.reduce((s,st) => s + st.lessons.length, 0);
    const completedLessons = Object.keys(data.lessonsCompleted).length;

    // Get a recommended lesson (first uncompleted or random)
    const allLessons = LessonData.getAllLessons();
    const uncompleted = allLessons.filter(l => !data.lessonsCompleted[l.id]);
    const recommended = uncompleted.length > 0 ? uncompleted[0] : allLessons[0];

    // Current learning path
    const currentPath = LessonData.learningPaths[0];
    const pathStages = currentPath.stageIds.map(id => LessonData.getStage(id));
    const pathLessons = pathStages.reduce((a, s) => a + s.lessons.length, 0);
    const pathCompleted = pathStages.reduce((a, s) => {
      return a + s.lessons.filter(l => data.lessonsCompleted[l.id]).length;
    }, 0);
    const pathPct = pathLessons > 0 ? Math.round((pathCompleted/pathLessons)*100) : 0;

    // Recent lessons for feed
    const feedLessons = allLessons.slice(0, 5);

    el.innerHTML = `
      <!-- Warm Header -->
      <div class="home-warm-header animate-slide-up">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px">
          <div class="brand"><span class="brand-emoji">🐝</span> TinyBee</div>
          <div class="stats-mini">
            <div class="stat-mini">⭐ ${data.totalStars}</div>
            <div class="stat-mini">🔥 ${data.streak}</div>
            <div class="stat-mini">💫 ${data.totalXP}</div>
          </div>
        </div>
        <div style="font-size:20px;font-weight:800;color:#2c3e50;font-family:'Baloo 2',cursive">
          Xin chào, ${data.name}! 👋
        </div>
        <p style="font-size:14px;color:#7f8c8d;margin-top:4px">Hôm nay bạn muốn học gì?</p>
      </div>

      <!-- Skill Tiles -->
      <div class="home-section animate-slide-up delay-1">
        <div class="home-section__header">
          <div class="home-section__title">Học theo kỹ năng</div>
        </div>
        <div class="skill-tiles">
          <div class="skill-tile" onclick="App.showScreen('roadmap')">
            <div class="skill-tile__icon is-purple">📖</div>
            <div class="skill-tile__name">Từ vựng</div>
            <div class="skill-tile__desc">50 bài học</div>
          </div>
          <div class="skill-tile" onclick="App.showScreen('phrase_list')">
            <div class="skill-tile__icon is-green">💬</div>
            <div class="skill-tile__name">Câu giao tiếp</div>
            <div class="skill-tile__desc">Cụm từ thông dụng</div>
          </div>
          <div class="skill-tile" onclick="App.showScreen('dialogue_list')">
            <div class="skill-tile__icon is-orange">🗣️</div>
            <div class="skill-tile__name">Hội thoại</div>
            <div class="skill-tile__desc">Đàm thoại vui</div>
          </div>
          <div class="skill-tile" onclick="App.showScreen('listening_list')">
            <div class="skill-tile__icon is-pink">🎧</div>
            <div class="skill-tile__name">Luyện nghe</div>
            <div class="skill-tile__desc">Nghe hiểu bài</div>
          </div>
        </div>
      </div>

      <!-- Alphabet Shortcut -->
      <div class="home-section animate-slide-up delay-2">
        <div style="background:linear-gradient(135deg,#2196F3,#64B5F6);border-radius:16px;padding:16px;color:white;display:flex;align-items:center;gap:16px;cursor:pointer" onclick="App.showScreen('alphabet')">
          <div style="font-size:40px">🔤</div>
          <div style="flex:1">
            <div style="font-size:16px;font-weight:800">Bảng chữ cái A-Z</div>
            <div style="font-size:13px;opacity:0.85">Học 26 chữ cái tiếng Anh</div>
          </div>
          <div style="font-size:20px;opacity:0.7">→</div>
        </div>
      </div>

      <!-- Learning Path Spotlight -->
      <div class="home-section animate-slide-up delay-3">
        <div class="home-section__header">
          <div class="home-section__title">Lộ trình học</div>
          <div class="home-section__link" onclick="App.showScreen('paths')">Xem tất cả →</div>
        </div>
        <div class="path-card" onclick="App.showScreen('path_detail',{pathId:'${currentPath.id}'})">
          <div class="path-card__banner" style="background:linear-gradient(135deg,${currentPath.color},${currentPath.color}88)">
            ${currentPath.icon}
            <span class="path-card__badge">🗺️ Lộ trình</span>
          </div>
          <div class="path-card__body">
            <div class="path-card__title">${currentPath.name}</div>
            <div class="path-card__desc">${currentPath.description}</div>
            <div class="path-card__meta">
              <span>📚 ${pathLessons} bài học</span>
              <span>• ${currentPath.level}</span>
            </div>
            <div class="path-card__progress">
              <div class="path-card__progress-fill" style="width:${pathPct}%;background:${currentPath.color}"></div>
            </div>
            <div class="path-card__cta">Bắt đầu học →</div>
          </div>
        </div>
      </div>

      <!-- Feed: Recommended Lessons -->
      <div class="home-section animate-slide-up delay-4" style="padding-bottom:90px">
        <div class="home-section__header">
          <div class="home-section__title">Bài học phổ biến</div>
          <div class="home-section__link" onclick="App.showScreen('explore')">Xem tất cả →</div>
        </div>
        ${feedLessons.map(lesson => this.renderFeedCard(lesson, data)).join('')}
      </div>
    `;
  },

  renderFeedCard(lesson, data) {
    const isFav = (data.favorites || []).includes(lesson.id);
    const stars = data.lessonsCompleted[lesson.id] || 0;
    const emojis = lesson.vocab.slice(0, 4).map(v => v.emoji);
    return `
      <div class="feed-card">
        <div class="feed-card__header">
          <div class="feed-card__avatar" style="background:${lesson.stageColor}22">${lesson.vocab[0].emoji}</div>
          <div class="feed-card__meta">
            <div class="feed-card__title">${lesson.title}</div>
            <div class="feed-card__sub">
              <span class="feed-card__level">A1</span>
              <span>${lesson.titleVi}</span>
              ${stars > 0 ? `<span>${'⭐'.repeat(stars)}</span>` : ''}
            </div>
          </div>
        </div>
        <div class="feed-card__gallery">
          ${emojis.map(e => `<div class="feed-card__emoji-box">${e}</div>`).join('')}
        </div>
        <div class="feed-card__actions">
          <button class="feed-card__fav ${isFav?'active':''}" onclick="event.stopPropagation();App.toggleFav('${lesson.id}',this)">
            ${isFav ? '❤️' : '🤍'}
          </button>
          <a class="feed-card__cta" href="#" onclick="event.preventDefault();App.showScreen('lesson',{lessonId:'${lesson.id}'})">
            Học ngay →
          </a>
        </div>
      </div>`;
  },

  toggleFav(lessonId, btn) {
    const isFav = Storage.toggleFavorite(lessonId);
    btn.innerHTML = isFav ? '❤️' : '🤍';
    btn.classList.toggle('active', isFav);
    Audio.play('pop');
  },

  // ══════════════════════════════════════
  //  EXPLORE SCREEN (Feed with filters)
  // ══════════════════════════════════════
  renderExplore(el) {
    const data = Storage.load();
    const allLessons = LessonData.getAllLessons();

    el.innerHTML = `
      <div class="explore-header">
        <h2 style="font-family:'Baloo 2',cursive;font-size:22px;color:#2c3e50">Khám phá 🔍</h2>
        <p style="font-size:14px;color:#7f8c8d;margin-top:4px">Tất cả bài học và hoạt động</p>
      </div>
      <div class="explore-filters" id="exploreFilters">
        <button class="explore-filter active" data-filter="all">Tất cả</button>
        <button class="explore-filter" data-filter="vocab">📖 Từ vựng</button>
        <button class="explore-filter" data-filter="dialogue">🗣️ Hội thoại</button>
        <button class="explore-filter" data-filter="listening">🎧 Luyện nghe</button>
        <button class="explore-filter" data-filter="phrases">💬 Câu giao tiếp</button>
        <button class="explore-filter" data-filter="favorites">❤️ Yêu thích</button>
      </div>
      <div class="explore-feed" id="exploreFeed">
        ${allLessons.map(l => this.renderFeedCard(l, data)).join('')}
      </div>
    `;

    el.querySelector('#exploreFilters').addEventListener('click', e => {
      const btn = e.target.closest('.explore-filter');
      if (!btn) return;
      el.querySelectorAll('.explore-filter').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      this.exploreFilter = btn.dataset.filter;
      this.updateExploreFeed(el);
    });
  },

  updateExploreFeed(el) {
    const data = Storage.load();
    const filter = this.exploreFilter;
    let items = [];

    if (filter === 'all' || filter === 'vocab') {
      items = items.concat(LessonData.getAllLessons());
    }
    if (filter === 'dialogue') {
      items = (LessonData.dialogues || []).map(d => ({
        id: d.id, title: d.title, titleVi: d.titleVi, vocab: [{emoji: d.icon || '🗣️'}],
        stageColor: '#FF6D00', _type: 'dialogue'
      }));
    }
    if (filter === 'listening') {
      items = (LessonData.listeningPassages || []).map(p => ({
        id: p.id, title: p.title, titleVi: p.titleVi, vocab: [{emoji: p.icon || '🎧'}],
        stageColor: '#FF4081', _type: 'listening'
      }));
    }
    if (filter === 'phrases') {
      items = (LessonData.communicationPhrases || []).map(p => ({
        id: p.id, title: p.title, titleVi: p.titleVi, vocab: [{emoji: p.icon || '💬'}],
        stageColor: '#00C853', _type: 'phrases'
      }));
    }
    if (filter === 'favorites') {
      const favs = data.favorites || [];
      items = LessonData.getAllLessons().filter(l => favs.includes(l.id));
    }

    const feed = el.querySelector('#exploreFeed');
    if (items.length === 0) {
      feed.innerHTML = '<div style="text-align:center;padding:40px;color:#95a5a6"><div style="font-size:48px;margin-bottom:12px">📭</div><p>Chưa có bài học nào</p></div>';
    } else {
      feed.innerHTML = items.map(l => {
        if (l._type === 'dialogue') {
          return `<div class="feed-card" onclick="App.showScreen('dialogue',{dialogueId:'${l.id}'})">
            <div class="feed-card__header"><div class="feed-card__avatar" style="background:#FF6D0022">${l.vocab[0].emoji}</div>
            <div class="feed-card__meta"><div class="feed-card__title">${l.title}</div>
            <div class="feed-card__sub"><span class="feed-card__level" style="background:#FFF3E0;color:#E65100">Hội thoại</span><span>${l.titleVi}</span></div></div></div>
            <div class="feed-card__actions"><div></div><a class="feed-card__cta" href="#">Xem →</a></div></div>`;
        }
        if (l._type === 'listening') {
          return `<div class="feed-card" onclick="App.showScreen('listening',{passageId:'${l.id}'})">
            <div class="feed-card__header"><div class="feed-card__avatar" style="background:#FF408122">${l.vocab[0].emoji}</div>
            <div class="feed-card__meta"><div class="feed-card__title">${l.title}</div>
            <div class="feed-card__sub"><span class="feed-card__level" style="background:#FCE4EC;color:#C62828">Luyện nghe</span><span>${l.titleVi}</span></div></div></div>
            <div class="feed-card__actions"><div></div><a class="feed-card__cta" href="#">Nghe →</a></div></div>`;
        }
        if (l._type === 'phrases') {
          return `<div class="feed-card" onclick="App.showScreen('phrases',{groupId:'${l.id}'})">
            <div class="feed-card__header"><div class="feed-card__avatar" style="background:#00C85322">${l.vocab[0].emoji}</div>
            <div class="feed-card__meta"><div class="feed-card__title">${l.title}</div>
            <div class="feed-card__sub"><span class="feed-card__level" style="background:#E8F5E9;color:#2E7D32">Giao tiếp</span><span>${l.titleVi}</span></div></div></div>
            <div class="feed-card__actions"><div></div><a class="feed-card__cta" href="#">Học →</a></div></div>`;
        }
        return this.renderFeedCard(l, Storage.load());
      }).join('');
    }
  },

  // ══════════════════════════════════════
  //  LEARNING PATHS SCREEN
  // ══════════════════════════════════════
  renderPaths(el) {
    const data = Storage.load();
    const paths = LessonData.learningPaths || [];

    el.innerHTML = `
      <div class="paths-header">
        <h2>Lộ trình học 🗺️</h2>
        <p>Chọn lộ trình phù hợp với bé</p>
      </div>
      <div class="paths-grid">
        ${paths.map((path, i) => {
          const stages = path.stageIds.map(id => LessonData.getStage(id));
          const totalL = stages.reduce((a, s) => a + s.lessons.length, 0);
          const doneL = stages.reduce((a, s) => a + s.lessons.filter(l => data.lessonsCompleted[l.id]).length, 0);
          const pct = totalL > 0 ? Math.round((doneL/totalL)*100) : 0;
          return `
            <div class="path-card animate-slide-up delay-${Math.min(i+1,5)}" onclick="App.showScreen('path_detail',{pathId:'${path.id}'})">
              <div class="path-card__banner" style="background:linear-gradient(135deg,${path.color},${path.color}88)">
                ${path.icon}
                <span class="path-card__badge">${path.level}</span>
              </div>
              <div class="path-card__body">
                <div class="path-card__title">${path.name}</div>
                <div class="path-card__desc">${path.description}</div>
                <div class="path-card__meta">
                  <span>📚 ${totalL} bài học</span>
                  <span>✅ ${doneL} xong</span>
                </div>
                <div class="path-card__progress">
                  <div class="path-card__progress-fill" style="width:${pct}%;background:${path.color}"></div>
                </div>
              </div>
            </div>`;
        }).join('')}
      </div>
    `;
  },

  renderPathDetail(el, { pathId }) {
    const path = (LessonData.learningPaths || []).find(p => p.id === pathId);
    if (!path) { this.showScreen('paths'); return; }
    const data = Storage.load();
    const stages = path.stageIds.map(id => LessonData.getStage(id));

    el.innerHTML = `
      <div class="paths-header" style="background:linear-gradient(135deg,${path.color},${path.color}88)">
        <div style="display:flex;align-items:center;gap:12px;margin-bottom:8px">
          <button class="back-btn" onclick="App.showScreen('paths')" style="color:white;font-size:20px">←</button>
          <h2 style="color:white;flex:1;text-align:center">${path.icon} ${path.name}</h2>
          <div style="width:32px"></div>
        </div>
        <p style="color:rgba(255,255,255,0.85);text-align:center">${path.level} • ${path.description}</p>
      </div>
      <div style="padding:16px;padding-bottom:90px">
        ${stages.map(stage => `
          <div style="margin-bottom:20px">
            <h3 style="font-family:'Baloo 2',cursive;font-size:18px;color:#2c3e50;margin-bottom:10px">${stage.icon} ${stage.name}</h3>
            ${stage.lessons.map((lesson, i) => {
              const stars = Storage.getLessonStars(lesson.id);
              const starHtml = stars > 0 ? '⭐'.repeat(stars) + '☆'.repeat(3-stars) : '☆☆☆';
              return `
                <div class="lesson-item animate-slide-up" onclick="App.showScreen('lesson',{lessonId:'${lesson.id}'})" style="background:white;border:1px solid #f1f2f6;margin-bottom:8px">
                  <div class="lesson-num" style="background:${stage.color}">${i+1}</div>
                  <div class="lesson-info"><h4 style="color:#2c3e50">${lesson.title}</h4><p style="color:#7f8c8d">${lesson.titleVi}</p></div>
                  <div class="lesson-stars">${starHtml}</div>
                </div>`;
            }).join('')}
          </div>
        `).join('')}
      </div>
    `;
  },

  // ══════════════════════════════════════
  //  ALPHABET SCREEN
  // ══════════════════════════════════════
  renderAlphabet(el) {
    const alphabet = LessonData.alphabet || [];
    el.innerHTML = `
      <div class="alphabet-header">
        <button class="back-btn" onclick="App.showScreen('home')">←</button>
        <h3>Bảng chữ cái A-Z 🔤</h3>
        <div style="width:32px"></div>
      </div>
      <div class="alphabet-progress">
        <div class="alphabet-progress-text">Nhấn vào chữ cái để nghe phát âm</div>
      </div>
      <div class="alphabet-grid" id="alphaGrid">
        ${alphabet.map(a => `
          <div class="alpha-card" data-letter="${a.letter}" onclick="App.showAlphaDetail('${a.letter}')">
            <div class="alpha-card__letter" style="color:hsl(${(a.letter.charCodeAt(0)-65)*14}, 70%, 50%)">${a.upper}</div>
            <div class="alpha-card__lower">${a.lower}</div>
            <div class="alpha-card__emoji">${a.emoji}</div>
            <div class="alpha-card__word">${a.word}</div>
          </div>
        `).join('')}
      </div>
      <div style="padding:16px 16px 90px;display:flex;flex-direction:column;gap:12px">
        <button class="btn btn-primary btn-block" onclick="App.showScreen('alphabet_quiz')">🎯 Kiểm tra bảng chữ cái</button>
      </div>
      <div class="alpha-detail" id="alphaDetail">
        <div class="alpha-detail__card" id="alphaDetailCard"></div>
      </div>
    `;
  },

  showAlphaDetail(letter) {
    const a = (LessonData.alphabet || []).find(x => x.letter === letter);
    if (!a) return;
    const detail = document.getElementById('alphaDetail');
    const card = document.getElementById('alphaDetailCard');
    card.innerHTML = `
      <div class="alpha-detail__letter" style="color:hsl(${(a.letter.charCodeAt(0)-65)*14}, 70%, 50%)">${a.upper} ${a.lower}</div>
      <div class="alpha-detail__phonetic">${a.phonetic}</div>
      <div class="alpha-detail__emoji">${a.emoji}</div>
      <div class="alpha-detail__word">${a.word}</div>
      <div class="alpha-detail__meaning">${a.meaning}</div>
      <div style="display:flex;gap:10px;margin-top:20px;justify-content:center">
        <button class="btn btn-primary" onclick="Audio.speak('${a.letter}');Audio.play('pop')" style="padding:12px 24px;font-size:16px">🔊 Nghe chữ</button>
        <button class="btn btn-success" onclick="Audio.speak('${a.word}');Audio.play('pop')" style="padding:12px 24px;font-size:16px">🔊 Nghe từ</button>
      </div>
      <button class="btn btn-secondary btn-block" onclick="document.getElementById('alphaDetail').classList.remove('show')" style="margin-top:12px;color:#636e72">Đóng</button>
    `;
    detail.classList.add('show');
    Audio.speak(a.letter);
    Audio.play('pop');
  },

  renderAlphabetQuiz(el) {
    const alphabet = LessonData.alphabet || [];
    const shuffled = [...alphabet].sort(() => Math.random() - 0.5);
    const questions = shuffled.slice(0, 10);
    this.exerciseState = { questions, currentQ: 0, correct: 0 };
    this._renderAlphaQuizStep(el);
  },

  _renderAlphaQuizStep(el) {
    const state = this.exerciseState;
    if (state.currentQ >= state.questions.length) {
      const pct = Math.round((state.correct / state.questions.length) * 100);
      const stars = pct >= 90 ? 3 : pct >= 60 ? 2 : 1;
      Storage.addXP(stars * 5);
      el.innerHTML = `
        <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:100vh;padding:32px;text-align:center;background:var(--gradient-primary)">
          <div style="font-size:80px;margin-bottom:16px">${stars >= 2 ? '🎉' : '😊'}</div>
          <h2 style="color:white;font-size:28px;margin-bottom:8px">${stars >= 2 ? 'Tuyệt vời!' : 'Cố gắng thêm!'}</h2>
          <p style="color:rgba(255,255,255,0.8);margin-bottom:24px">${state.correct}/${state.questions.length} câu đúng</p>
          <div style="display:flex;gap:8px;margin-bottom:32px">${[1,2,3].map(i => `<span style="font-size:40px">${i<=stars?'⭐':'☆'}</span>`).join('')}</div>
          <button class="btn btn-primary btn-block" onclick="App.showScreen('alphabet_quiz')">Làm lại 🔄</button>
          <button class="btn btn-secondary btn-block" style="margin-top:12px" onclick="App.showScreen('alphabet')">Quay lại 🔤</button>
        </div>`;
      if (stars >= 2) Animations.confetti();
      Audio.play('complete');
      return;
    }

    const q = state.questions[state.currentQ];
    const alphabet = LessonData.alphabet || [];
    const wrong = alphabet.filter(a => a.letter !== q.letter).sort(() => Math.random() - 0.5).slice(0, 3);
    const options = [q, ...wrong].sort(() => Math.random() - 0.5);
    const progress = Math.round((state.currentQ / state.questions.length) * 100);

    el.innerHTML = `
      <div class="lesson-header" style="background:linear-gradient(135deg,#2196F3,#64B5F6)">
        <button class="back-btn" onclick="App.showScreen('alphabet')" style="color:white">←</button>
        <div class="lesson-progress"><div class="progress-bar"><div class="progress-bar-fill" style="width:${progress}%"></div></div></div>
        <span style="color:white;font-size:14px">${state.currentQ+1}/${state.questions.length}</span>
      </div>
      <div style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:24px;background:linear-gradient(180deg,#E3F2FD,#f5f6fa)">
        <p style="color:#7f8c8d;margin-bottom:16px;font-size:15px">Emoji này thuộc chữ cái nào?</p>
        <div style="font-size:80px;margin-bottom:8px">${q.emoji}</div>
        <div style="font-size:18px;font-weight:700;color:#2c3e50;margin-bottom:32px">${q.word} - ${q.meaning}</div>
        <div style="width:100%;display:flex;flex-direction:column;gap:10px" id="alphaQuizOpts">
          ${options.map(o => `
            <div class="quiz-option" data-letter="${o.letter}" style="background:white;color:#2c3e50;border:3px solid #ecf0f1">
              <span class="option-letter" style="background:#E3F2FD;color:#1565C0;font-family:'Baloo 2',cursive;font-size:20px">${o.upper}</span>
              <span style="font-family:'Baloo 2',cursive;font-size:20px">${o.upper} - ${o.word}</span>
            </div>
          `).join('')}
        </div>
      </div>
    `;

    el.querySelector('#alphaQuizOpts').addEventListener('click', e => {
      const opt = e.target.closest('.quiz-option');
      if (!opt || opt.classList.contains('correct') || opt.classList.contains('wrong')) return;
      if (opt.dataset.letter === q.letter) {
        opt.classList.add('correct');
        opt.style.borderColor = '#00B894';
        opt.style.background = '#E8F5E9';
        Audio.play('correct');
        state.correct++;
        setTimeout(() => { state.currentQ++; this._renderAlphaQuizStep(el); }, 700);
      } else {
        opt.classList.add('wrong');
        opt.style.borderColor = '#FF6B6B';
        opt.style.background = '#FFEBEE';
        Audio.play('wrong');
        Animations.shake(opt);
        setTimeout(() => { opt.classList.remove('wrong'); opt.style.borderColor='#ecf0f1'; opt.style.background='white'; }, 600);
      }
    });
  },

  // ══════════════════════════════════════
  //  DIALOGUE SCREENS
  // ══════════════════════════════════════
  renderDialogueList(el) {
    const dialogues = LessonData.dialogues || [];
    el.innerHTML = `
      <div class="dialogue-header" style="background:linear-gradient(180deg,#FFF3E0,#f5f6fa);padding:20px 16px">
        <button class="back-btn" onclick="App.showScreen('skills')">←</button>
        <h3>Hội thoại 🗣️</h3>
        <div style="width:32px"></div>
      </div>
      <div style="padding:16px;padding-bottom:90px">
        ${dialogues.map((d, i) => `
          <div class="feed-card animate-slide-up delay-${Math.min(i+1,5)}" onclick="App.showScreen('dialogue',{dialogueId:'${d.id}'})">
            <div class="feed-card__header">
              <div class="feed-card__avatar" style="background:#FF6D0022">${d.icon || '🗣️'}</div>
              <div class="feed-card__meta">
                <div class="feed-card__title">${d.title}</div>
                <div class="feed-card__sub">
                  <span class="feed-card__level" style="background:#FFF3E0;color:#E65100">${d.level || 'A1'}</span>
                  <span>${d.titleVi}</span>
                </div>
              </div>
            </div>
            <div class="feed-card__actions">
              <span style="font-size:12px;color:#95a5a6">${(d.lines || []).length} câu</span>
              <a class="feed-card__cta" href="#">Xem hội thoại →</a>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  },

  renderDialogue(el, { dialogueId }) {
    const d = (LessonData.dialogues || []).find(x => x.id === dialogueId);
    if (!d) { this.showScreen('dialogue_list'); return; }

    el.innerHTML = `
      <div class="dialogue-header">
        <button class="back-btn" onclick="App.showScreen('dialogue_list')">←</button>
        <h3>${d.title}</h3>
        <div style="width:32px"></div>
      </div>
      <div class="dialogue-title-bar">
        <div class="dialogue-title-bar__vi">${d.titleVi}</div>
      </div>
      <div class="chat-container" id="chatContainer">
        ${(d.lines || []).map((line, i) => {
          const isLeft = i % 2 === 0;
          return `
            <div class="chat-bubble ${isLeft ? 'left' : 'right'} animate-slide-up delay-${Math.min(i+1,8)}" 
                 onclick="App.speakLine(this,'${line.text.replace(/'/g, "\\'")}')">
              <div class="chat-bubble__speaker">${line.emoji || ''} ${line.speaker}</div>
              <div>${line.text}</div>
              <div class="chat-bubble__translation">${line.translation}</div>
            </div>`;
        }).join('')}
      </div>
      <div style="padding:16px;display:flex;gap:10px">
        <button class="btn btn-secondary" style="flex:1;color:#636e72" onclick="App.toggleAllTranslations()">👁️ Xem nghĩa</button>
        <button class="btn btn-primary" style="flex:1" onclick="App.playFullDialogue('${dialogueId}')">🔊 Nghe toàn bộ</button>
      </div>
    `;
    Storage.addXP(5);
  },

  speakLine(bubble, text) {
    Audio.speak(text);
    bubble.classList.toggle('show-translation');
    Audio.play('pop');
  },

  toggleAllTranslations() {
    document.querySelectorAll('.chat-bubble').forEach(b => b.classList.toggle('show-translation'));
  },

  playFullDialogue(dialogueId) {
    const d = (LessonData.dialogues || []).find(x => x.id === dialogueId);
    if (!d) return;
    d.lines.forEach((line, i) => {
      setTimeout(() => Audio.speak(line.text), i * 2000);
    });
  },

  // ══════════════════════════════════════
  //  LISTENING SCREENS
  // ══════════════════════════════════════
  renderListeningList(el) {
    const passages = LessonData.listeningPassages || [];
    el.innerHTML = `
      <div class="listening-header" style="background:linear-gradient(180deg,#FCE4EC,#f5f6fa);padding:20px 16px">
        <button class="back-btn" onclick="App.showScreen('skills')">←</button>
        <h3>Luyện nghe 🎧</h3>
        <div style="width:32px"></div>
      </div>
      <div style="padding:16px;padding-bottom:90px">
        ${passages.map((p, i) => `
          <div class="feed-card animate-slide-up delay-${Math.min(i+1,5)}" onclick="App.showScreen('listening',{passageId:'${p.id}'})">
            <div class="feed-card__header">
              <div class="feed-card__avatar" style="background:#FF408122">${p.icon || '🎧'}</div>
              <div class="feed-card__meta">
                <div class="feed-card__title">${p.title}</div>
                <div class="feed-card__sub">
                  <span class="feed-card__level" style="background:#FCE4EC;color:#C62828">${p.level || 'A1'}</span>
                  <span>${p.titleVi}</span>
                </div>
              </div>
            </div>
            <div class="feed-card__actions">
              <span style="font-size:12px;color:#95a5a6">${(p.questions || []).length} câu hỏi</span>
              <a class="feed-card__cta" href="#">Nghe bài →</a>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  },

  renderListening(el, { passageId }) {
    const p = (LessonData.listeningPassages || []).find(x => x.id === passageId);
    if (!p) { this.showScreen('listening_list'); return; }
    this.exerciseState = { passage: p, answeredCount: 0, correctCount: 0, speed: 1 };

    el.innerHTML = `
      <div class="listening-header">
        <button class="back-btn" onclick="App.showScreen('listening_list')">←</button>
        <h3>${p.title}</h3>
        <div style="width:32px"></div>
      </div>
      <div class="listen-player">
        <button class="listen-player__btn" id="listenPlayBtn" onclick="App.playPassage()">🔊</button>
        <div style="font-size:14px;color:#7f8c8d;margin-bottom:8px">Nhấn để nghe đoạn văn</div>
        <div class="listen-player__speed">
          <button class="listen-player__speed-btn" data-speed="0.7" onclick="App.setSpeed(0.7,this)">🐢 Chậm</button>
          <button class="listen-player__speed-btn active" data-speed="1" onclick="App.setSpeed(1,this)">Thường</button>
          <button class="listen-player__speed-btn" data-speed="1.2" onclick="App.setSpeed(1.2,this)">🐇 Nhanh</button>
        </div>
      </div>
      <div class="listening-passage" id="passageText" onclick="this.classList.toggle('show-translation')">
        <div class="listening-passage__text">${p.text}</div>
        <div class="listening-passage__translation">${p.translation}</div>
        <div style="font-size:12px;color:#b2bec3;margin-top:8px;text-align:center">Nhấn để xem/ẩn bản dịch</div>
      </div>
      <div class="listening-questions" id="listenQuestions">
        <h4 style="font-family:'Baloo 2',cursive;font-size:17px;color:#2c3e50;margin-bottom:12px">Câu hỏi nghe hiểu:</h4>
        ${(p.questions || []).map((q, qi) => `
          <div class="listening-question" data-qi="${qi}">
            <div class="listening-question__text">${qi+1}. ${q.question}</div>
            <div style="font-size:13px;color:#7f8c8d;margin-bottom:10px">${q.questionVi || ''}</div>
            <div class="quiz-options" data-qi="${qi}">
              ${(q.options || []).map((o, oi) => `
                <div class="quiz-option" data-qi="${qi}" data-oi="${oi}" data-correct="${o.isCorrect}" style="background:white;color:#2c3e50;border:2px solid #ecf0f1;font-size:14px;padding:10px 14px">
                  <span class="option-letter" style="width:28px;height:28px;font-size:12px">${'ABCD'[oi]}</span>
                  <span>${o.text}</span>
                </div>
              `).join('')}
            </div>
          </div>
        `).join('')}
      </div>
      <div style="height:80px"></div>
    `;

    el.querySelector('#listenQuestions').addEventListener('click', e => {
      const opt = e.target.closest('.quiz-option');
      if (!opt || opt.classList.contains('correct') || opt.classList.contains('wrong')) return;
      const qi = opt.dataset.qi;
      const isCorrect = opt.dataset.correct === 'true';
      // Disable all options in this question
      el.querySelectorAll(`.quiz-option[data-qi="${qi}"]`).forEach(o => {
        if (o.dataset.correct === 'true') {
          o.classList.add('correct');
          o.style.borderColor = '#00B894';
          o.style.background = '#E8F5E9';
        }
      });
      if (isCorrect) {
        Audio.play('correct');
        this.exerciseState.correctCount++;
      } else {
        opt.classList.add('wrong');
        opt.style.borderColor = '#FF6B6B';
        opt.style.background = '#FFEBEE';
        Audio.play('wrong');
      }
      this.exerciseState.answeredCount++;
      if (this.exerciseState.answeredCount === (p.questions || []).length) {
        Storage.addXP(this.exerciseState.correctCount * 10);
        setTimeout(() => this.showToast(`🎉 ${this.exerciseState.correctCount}/${p.questions.length} câu đúng! +${this.exerciseState.correctCount * 10} XP`), 500);
      }
    });

    setTimeout(() => this.playPassage(), 500);
  },

  playPassage() {
    const p = this.exerciseState?.passage;
    if (!p) return;
    const btn = document.getElementById('listenPlayBtn');
    if (btn) { btn.classList.add('playing'); setTimeout(() => btn.classList.remove('playing'), 3000); }
    const u = new SpeechSynthesisUtterance(p.text);
    u.lang = 'en-US';
    u.rate = this.exerciseState.speed || 1;
    u.pitch = 1.1;
    const voices = window.speechSynthesis.getVoices();
    const enVoice = voices.find(v => v.lang === 'en-US') || voices.find(v => v.lang.startsWith('en'));
    if (enVoice) u.voice = enVoice;
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(u);
  },

  setSpeed(speed, btn) {
    if (this.exerciseState) this.exerciseState.speed = speed;
    document.querySelectorAll('.listen-player__speed-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    this.playPassage();
  },

  // ══════════════════════════════════════
  //  PHRASE SCREENS
  // ══════════════════════════════════════
  renderPhraseList(el) {
    const groups = LessonData.communicationPhrases || [];
    el.innerHTML = `
      <div class="phrases-header" style="background:linear-gradient(180deg,#E8F5E9,#f5f6fa);padding:20px 16px">
        <button class="back-btn" onclick="App.showScreen('skills')">←</button>
        <h3>Câu giao tiếp 💬</h3>
        <div style="width:32px"></div>
      </div>
      <div style="padding:16px;padding-bottom:90px">
        ${groups.map((g, i) => `
          <div class="feed-card animate-slide-up delay-${Math.min(i+1,5)}" onclick="App.showScreen('phrases',{groupId:'${g.id}'})">
            <div class="feed-card__header">
              <div class="feed-card__avatar" style="background:${g.color || '#00C853'}22">${g.icon || '💬'}</div>
              <div class="feed-card__meta">
                <div class="feed-card__title">${g.title}</div>
                <div class="feed-card__sub">
                  <span class="feed-card__level">${(g.phrases || []).length} cụm từ</span>
                  <span>${g.titleVi}</span>
                </div>
              </div>
            </div>
            <div class="feed-card__actions">
              <div></div>
              <a class="feed-card__cta" href="#">Học ngay →</a>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  },

  renderPhrases(el, { groupId }) {
    const group = (LessonData.communicationPhrases || []).find(g => g.id === groupId);
    if (!group) { this.showScreen('phrase_list'); return; }

    el.innerHTML = `
      <div class="phrases-header">
        <button class="back-btn" onclick="App.showScreen('phrase_list')">←</button>
        <h3>${group.icon || '💬'} ${group.title}</h3>
        <div style="width:32px"></div>
      </div>
      <div style="padding:4px 16px 4px;text-align:center">
        <p style="color:#7f8c8d;font-size:14px">${group.titleVi} • Nhấn vào cụm từ để nghe</p>
      </div>
      <div class="phrases-list">
        ${(group.phrases || []).map((p, i) => `
          <div class="phrase-card animate-slide-up delay-${Math.min(i+1,6)}" onclick="Audio.speak('${p.phrase.replace(/'/g, "\\'")}');Audio.play('pop')">
            <div style="display:flex;align-items:center;gap:10px">
              <span style="font-size:24px">${p.emoji || '💬'}</span>
              <div style="flex:1">
                <div class="phrase-card__phrase">${p.phrase}</div>
                <div class="phrase-card__meaning">${p.meaning}</div>
              </div>
              <span style="font-size:18px;color:#b2bec3">🔊</span>
            </div>
            ${p.example ? `<div class="phrase-card__example">"${p.example}"<br><span style="color:#95a5a6">${p.exampleVi || ''}</span></div>` : ''}
          </div>
        `).join('')}
      </div>
      <div style="padding:16px;padding-bottom:80px">
        <button class="btn btn-primary btn-block" onclick="App.startPhraseQuiz('${groupId}')">🎯 Kiểm tra</button>
      </div>
    `;
    Storage.addXP(5);
  },

  startPhraseQuiz(groupId) {
    const group = (LessonData.communicationPhrases || []).find(g => g.id === groupId);
    if (!group || !group.phrases || group.phrases.length < 2) { this.showToast('Chưa đủ dữ liệu để quiz!'); return; }
    
    const shuffled = [...group.phrases].sort(() => Math.random() - 0.5);
    this.exerciseState = { phrases: shuffled, currentQ: 0, correct: 0, groupId };
    this._renderPhraseQuizStep();
  },

  _renderPhraseQuizStep() {
    const state = this.exerciseState;
    const el = document.querySelector('.screen.active');
    if (!el) return;

    if (state.currentQ >= state.phrases.length) {
      const pct = Math.round((state.correct / state.phrases.length) * 100);
      Storage.addXP(state.correct * 10);
      el.innerHTML = `
        <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:100vh;padding:32px;text-align:center;background:var(--gradient-primary)">
          <div style="font-size:80px;margin-bottom:16px">${pct >= 70 ? '🎉' : '😊'}</div>
          <h2 style="color:white;font-size:28px;margin-bottom:8px">${state.correct}/${state.phrases.length} đúng!</h2>
          <button class="btn btn-primary btn-block" style="margin-top:24px" onclick="App.showScreen('phrases',{groupId:'${state.groupId}'})">Quay lại →</button>
        </div>`;
      Audio.play('complete');
      return;
    }

    const phrase = state.phrases[state.currentQ];
    const others = state.phrases.filter(p => p.phrase !== phrase.phrase).sort(() => Math.random() - 0.5).slice(0, 3);
    const options = [phrase, ...others].sort(() => Math.random() - 0.5);

    el.innerHTML = `
      <div class="lesson-header" style="background:linear-gradient(135deg,#00C853,#69F0AE)">
        <button class="back-btn" onclick="App.showScreen('phrases',{groupId:'${state.groupId}'})" style="color:white">←</button>
        <div class="lesson-progress"><div class="progress-bar"><div class="progress-bar-fill" style="width:${Math.round((state.currentQ/state.phrases.length)*100)}%"></div></div></div>
        <span style="color:white;font-size:14px">${state.currentQ+1}/${state.phrases.length}</span>
      </div>
      <div style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:24px;background:#f5f6fa">
        <p style="color:#7f8c8d;margin-bottom:16px">Nghĩa của cụm từ này là gì?</p>
        <div style="font-size:24px;font-weight:800;color:#2c3e50;margin-bottom:8px;text-align:center">"${phrase.phrase}"</div>
        <button class="btn btn-secondary" onclick="Audio.speak('${phrase.phrase.replace(/'/g, "\\'")}')" style="margin-bottom:24px;color:#636e72;font-size:14px;padding:8px 20px">🔊 Nghe</button>
        <div style="width:100%;display:flex;flex-direction:column;gap:10px" id="phraseQuizOpts">
          ${options.map((o, i) => `
            <div class="quiz-option" data-phrase="${o.phrase}" style="background:white;color:#2c3e50;border:2px solid #ecf0f1;font-size:15px">
              <span class="option-letter" style="background:#E8F5E9;color:#2E7D32">${'ABCD'[i]}</span>
              <span>${o.meaning}</span>
            </div>
          `).join('')}
        </div>
      </div>
    `;

    el.querySelector('#phraseQuizOpts').addEventListener('click', e => {
      const opt = e.target.closest('.quiz-option');
      if (!opt || opt.classList.contains('correct') || opt.classList.contains('wrong')) return;
      if (opt.dataset.phrase === phrase.phrase) {
        opt.classList.add('correct'); opt.style.borderColor='#00B894'; opt.style.background='#E8F5E9';
        Audio.play('correct'); state.correct++;
        setTimeout(() => { state.currentQ++; this._renderPhraseQuizStep(); }, 700);
      } else {
        opt.classList.add('wrong'); opt.style.borderColor='#FF6B6B'; opt.style.background='#FFEBEE';
        Audio.play('wrong');
        setTimeout(() => { opt.classList.remove('wrong'); opt.style.borderColor='#ecf0f1'; opt.style.background='white'; }, 600);
      }
    });
  },

  // ══════════════════════════════════════
  //  SKILLS SCREEN (enhanced)
  // ══════════════════════════════════════
  renderSkills(el) {
    el.innerHTML = `
      <div style="padding:24px 16px;background:var(--gradient-warm,linear-gradient(180deg,#FFF0C7,#FFF8E7));border-radius:0 0 24px 24px">
        <h2 style="font-family:'Baloo 2',cursive;font-size:22px;color:#2c3e50">Thực hành kỹ năng 🎯</h2>
        <p style="font-size:14px;color:#7f8c8d;margin-top:4px">Chọn kỹ năng muốn luyện tập</p>
      </div>
      <div style="padding:16px;display:flex;flex-direction:column;gap:12px;padding-bottom:90px">
        <div class="action-card" style="background:linear-gradient(135deg,#7C4DFF,#B388FF);box-shadow:0 4px 16px rgba(124,77,255,0.3)" onclick="App.showScreen('roadmap')">
          <div class="action-icon">📖</div>
          <div class="action-text"><h4>Từ Vựng</h4><p>50 bài học flashcard & quiz</p></div>
          <div class="action-arrow">→</div>
        </div>
        <div class="action-card" style="background:linear-gradient(135deg,#2196F3,#64B5F6);box-shadow:0 4px 16px rgba(33,150,243,0.3)" onclick="App.showScreen('alphabet')">
          <div class="action-icon">🔤</div>
          <div class="action-text"><h4>Bảng Chữ Cái</h4><p>Học 26 chữ cái A-Z</p></div>
          <div class="action-arrow">→</div>
        </div>
        <div class="action-card" style="background:linear-gradient(135deg,#00C853,#69F0AE);box-shadow:0 4px 16px rgba(0,200,83,0.3)" onclick="App.showScreen('phrase_list')">
          <div class="action-icon">💬</div>
          <div class="action-text"><h4>Câu Giao Tiếp</h4><p>Cụm từ thông dụng hàng ngày</p></div>
          <div class="action-arrow">→</div>
        </div>
        <div class="action-card" style="background:linear-gradient(135deg,#FF6D00,#FFAB40);box-shadow:0 4px 16px rgba(255,109,0,0.3)" onclick="App.showScreen('dialogue_list')">
          <div class="action-icon">🗣️</div>
          <div class="action-text"><h4>Hội Thoại</h4><p>Luyện đàm thoại tiếng Anh</p></div>
          <div class="action-arrow">→</div>
        </div>
        <div class="action-card" style="background:linear-gradient(135deg,#FF4081,#FF80AB);box-shadow:0 4px 16px rgba(255,64,129,0.3)" onclick="App.showScreen('listening_list')">
          <div class="action-icon">🎧</div>
          <div class="action-text"><h4>Luyện Nghe</h4><p>Nghe đoạn văn & trả lời câu hỏi</p></div>
          <div class="action-arrow">→</div>
        </div>
        <div class="action-card" style="background:var(--gradient-fun,linear-gradient(135deg,#a29bfe,#6c5ce7));box-shadow:var(--shadow-glow)" onclick="App.startSentenceBuilder()">
          <div class="action-icon">🎮</div>
          <div class="action-text"><h4>Ghép Câu</h4><p>Sắp xếp từ tạo thành câu</p></div>
          <div class="action-arrow">→</div>
        </div>
      </div>
    `;
  },

  // ══════════════════════════════════════
  //  EXISTING SCREENS (kept & improved)
  // ══════════════════════════════════════
  renderRoadmap(el) {
    const data = Storage.load();
    let html = `<div class="roadmap-header"><button class="back-btn" onclick="App.showScreen('home')">←</button><h3>Chọn chủ đề</h3><div style="width:40px"></div></div><div class="roadmap-content"><div class="roadmap-path">`;

    LessonData.stages.forEach((stage, i) => {
      const lessonIds = stage.lessons.map(l => l.id);
      const progress = Storage.getStageProgress(stage.id, lessonIds);
      const isComplete = progress.percent === 100;
      const statusClass = isComplete ? 'completed' : 'current';

      html += `<div class="stage-node animate-slide-up delay-${Math.min(i+1,8)}">
        <div class="stage-dot ${statusClass}" style="background:${stage.color}" onclick="App.showScreen('lessons',{stageId:${stage.id}})">${stage.icon}</div>
        <div class="stage-info"><div class="stage-card" onclick="App.showScreen('lessons',{stageId:${stage.id}})">
          <h4>${stage.icon} ${stage.name}</h4><p>${stage.lessons.length} bài học</p>
          <div class="stage-progress"><div class="stage-progress-fill" style="width:${progress.percent}%;background:${stage.color}"></div></div>
        </div></div>
      </div>`;
    });
    html += '</div></div>';
    el.innerHTML = html;
  },

  renderLessonList(el, { stageId }) {
    const stage = LessonData.getStage(stageId);
    this.currentStage = stage;

    let html = `<div class="roadmap-header"><button class="back-btn" onclick="App.showScreen('roadmap')">←</button><h3>${stage.icon} ${stage.name}</h3><div style="width:40px"></div></div><div class="lesson-list">`;

    stage.lessons.forEach((lesson, i) => {
      const stars = Storage.getLessonStars(lesson.id);
      const starHtml = stars > 0 ? '⭐'.repeat(stars) + '☆'.repeat(3-stars) : '☆☆☆';

      html += `<div class="lesson-item animate-slide-up delay-${Math.min(i+1,8)}" onclick="App.showScreen('lesson',{lessonId:'${lesson.id}'})">
        <div class="lesson-num" style="background:${stage.color}">${i+1}</div>
        <div class="lesson-info"><h4>${lesson.title}</h4><p>${lesson.titleVi}</p></div>
        <div class="lesson-stars">${starHtml}</div>
      </div>`;
    });
    html += '</div>';
    el.innerHTML = html;
  },

  renderLesson(el, { lessonId }) {
    const lesson = LessonData.getLesson(lessonId);
    if (!lesson) return;
    this.currentLesson = lesson;
    this.exerciseState = { step: 0, totalSteps: lesson.vocab.length * 3, correctCount: 0, currentStep: 0 };
    this.exerciseState.phases = [
      ...lesson.vocab.map((v,i) => ({ type:'flashcard', vocabIndex: i })),
      ...lesson.vocab.map((v,i) => ({ type:'listen', vocabIndex: i })),
      ...lesson.vocab.map((v,i) => ({ type:'quiz', vocabIndex: i }))
    ];
    this.exerciseState.totalSteps = this.exerciseState.phases.length;
    this.renderExerciseStep(el);
  },

  renderExerciseStep(el) {
    const state = this.exerciseState;
    const lesson = this.currentLesson;
    if (state.currentStep >= state.totalSteps) {
      const pct = Math.round((state.correctCount / (state.totalSteps - lesson.vocab.length)) * 100);
      const stars = pct >= 90 ? 3 : pct >= 60 ? 2 : 1;
      const savedData = Storage.completeLesson(lesson.id, stars);
      if (Object.keys(savedData.lessonsCompleted).length === 1) Storage.addBadge('first_lesson');
      if (stars === 3) Storage.addBadge('perfect');
      this.showScreen('results', { stars, pct, lesson });
      return;
    }

    const phase = state.phases[state.currentStep];
    const vocab = lesson.vocab[phase.vocabIndex];
    const progress = Math.round((state.currentStep / state.totalSteps) * 100);

    let body = '';
    if (phase.type === 'flashcard') body = this.renderFlashcard(vocab, lesson);
    else if (phase.type === 'listen') body = this.renderListenPick(vocab, lesson);
    else body = this.renderQuiz(vocab, lesson);

    el.innerHTML = `
      <div class="lesson-header">
        <button class="back-btn" onclick="App.confirmExit()">✕</button>
        <div class="lesson-progress"><div class="progress-bar"><div class="progress-bar-fill" style="width:${progress}%"></div></div></div>
        <span class="step-count" style="color:white">${state.currentStep+1}/${state.totalSteps}</span>
      </div>
      <div class="lesson-body">${body}</div>`;

    this.bindExerciseEvents(el, phase, vocab, lesson);
  },

  renderFlashcard(vocab) {
    return `<div class="flashcard-container">
      <p style="color:rgba(255,255,255,0.7);margin-bottom:8px">Nhấn vào thẻ để lật 👆</p>
      <div class="flashcard" id="flashcard">
        <div class="flashcard-inner">
          <div class="flashcard-front"><div class="flashcard-emoji">${vocab.emoji}</div><div class="flashcard-word">${vocab.word}</div><p class="flashcard-hint">Nhấn để xem nghĩa</p></div>
          <div class="flashcard-back"><div class="flashcard-emoji">${vocab.emoji}</div><div class="flashcard-word">${vocab.word}</div><div class="flashcard-meaning">${vocab.meaning}</div></div>
        </div>
      </div>
      <button class="btn btn-primary" id="speakBtn" style="margin-top:16px">🔊 Nghe phát âm</button>
      <button class="btn btn-success btn-block" id="nextBtn" style="margin-top:12px">Tiếp theo →</button>
    </div>`;
  },

  renderListenPick(vocab, lesson) {
    const options = this.getShuffledOptions(vocab, lesson.vocab, 4);
    return `<div class="listen-container">
      <p style="color:rgba(255,255,255,0.7);margin-bottom:16px">Nghe và chọn đúng 👂</p>
      <button class="listen-btn" id="listenBtn">🔊</button>
      <p class="listen-text">Nhấn để nghe từ</p>
      <div class="pick-grid" id="pickGrid">
        ${options.map(o => `<div class="pick-card" data-word="${o.word}"><div class="pick-emoji">${o.emoji}</div><span>${o.meaning}</span></div>`).join('')}
      </div>
    </div>`;
  },

  renderQuiz(vocab, lesson) {
    const options = this.getShuffledOptions(vocab, lesson.vocab, 4);
    return `<div class="quiz-container">
      <div class="quiz-question"><div class="question-emoji">${vocab.emoji}</div><div class="question-text">"${vocab.word}" nghĩa là gì?</div></div>
      <div class="quiz-options" id="quizOptions">
        ${options.map((o,i) => `<div class="quiz-option" data-word="${o.word}"><span class="option-letter">${'ABCD'[i]}</span><span>${o.meaning}</span></div>`).join('')}
      </div>
    </div>`;
  },

  getShuffledOptions(correct, allVocab, count) {
    const others = allVocab.filter(v => v.word !== correct.word);
    const shuffled = others.sort(() => Math.random() - 0.5).slice(0, count - 1);
    return [correct, ...shuffled].sort(() => Math.random() - 0.5);
  },

  bindExerciseEvents(el, phase, vocab) {
    if (phase.type === 'flashcard') {
      const card = el.querySelector('#flashcard');
      card && card.addEventListener('click', () => { card.classList.toggle('flipped'); Audio.play('pop'); });
      const speakBtn = el.querySelector('#speakBtn');
      speakBtn && speakBtn.addEventListener('click', () => { Audio.speak(vocab.word); });
      const nextBtn = el.querySelector('#nextBtn');
      nextBtn && nextBtn.addEventListener('click', () => {
        this.exerciseState.currentStep++;
        Audio.play('whoosh');
        this.renderExerciseStep(document.querySelector('.lesson-screen'));
      });
    } else if (phase.type === 'listen') {
      const listenBtn = el.querySelector('#listenBtn');
      listenBtn && listenBtn.addEventListener('click', () => { Audio.speak(vocab.word); listenBtn.classList.add('playing'); setTimeout(() => listenBtn.classList.remove('playing'), 1000); });
      setTimeout(() => Audio.speak(vocab.word), 500);
      const grid = el.querySelector('#pickGrid');
      grid && grid.addEventListener('click', e => {
        const card = e.target.closest('.pick-card');
        if (!card || card.classList.contains('correct') || card.classList.contains('wrong')) return;
        if (card.dataset.word === vocab.word) {
          card.classList.add('correct'); Audio.play('correct'); this.exerciseState.correctCount++;
          setTimeout(() => { this.exerciseState.currentStep++; this.renderExerciseStep(document.querySelector('.lesson-screen')); }, 800);
        } else {
          card.classList.add('wrong'); Audio.play('wrong'); Animations.shake(card);
          setTimeout(() => card.classList.remove('wrong'), 600);
        }
      });
    } else {
      const options = el.querySelector('#quizOptions');
      options && options.addEventListener('click', e => {
        const opt = e.target.closest('.quiz-option');
        if (!opt || opt.classList.contains('correct') || opt.classList.contains('wrong')) return;
        if (opt.dataset.word === vocab.word) {
          opt.classList.add('correct'); Audio.play('correct'); this.exerciseState.correctCount++;
          setTimeout(() => { this.exerciseState.currentStep++; this.renderExerciseStep(document.querySelector('.lesson-screen')); }, 800);
        } else {
          opt.classList.add('wrong'); Audio.play('wrong');
          setTimeout(() => opt.classList.remove('wrong'), 600);
        }
      });
    }
  },

  renderResults(el, { stars, pct, lesson }) {
    const mascotEmoji = stars === 3 ? '🤩' : stars === 2 ? '😄' : '😊';
    const title = stars === 3 ? 'Xuất sắc!' : stars === 2 ? 'Tốt lắm!' : 'Cố gắng hơn nhé!';
    if (stars >= 2) setTimeout(() => Animations.confetti(), 300);

    el.innerHTML = `
      <div class="splash-bg-shapes"><div class="splash-shape"></div><div class="splash-shape"></div></div>
      <div style="position:relative;z-index:2">
        <div class="results-mascot">${mascotEmoji}</div>
        <h2 class="results-title">${title}</h2>
        <p class="results-subtitle">${lesson.title} - ${lesson.titleVi}</p>
        <div class="results-stars">
          ${[1,2,3].map(i => `<span class="star ${i<=stars?'earned':'empty'} animate-scale-in delay-${i}" style="font-size:48px">${i<=stars?'⭐':'☆'}</span>`).join('')}
        </div>
        <div class="results-stats">
          <div class="result-stat"><div class="stat-num">${pct}%</div><div class="stat-desc">Chính xác</div></div>
          <div class="result-stat"><div class="stat-num">+${stars*10}</div><div class="stat-desc">XP</div></div>
          <div class="result-stat"><div class="stat-num">${stars}</div><div class="stat-desc">Sao</div></div>
        </div>
        <div class="results-actions">
          <button class="btn btn-primary btn-block" onclick="App.showScreen('lesson',{lessonId:'${lesson.id}'})">Học lại 🔄</button>
          <button class="btn btn-secondary btn-block" onclick="App.goToNextLesson('${lesson.id}')">Bài tiếp theo →</button>
          <button class="btn btn-secondary btn-block" onclick="App.showScreen('home')">Về trang chủ 🏠</button>
        </div>
      </div>`;
    Audio.play('complete');
  },

  goToNextLesson(currentId) {
    for (const stage of LessonData.stages) {
      const idx = stage.lessons.findIndex(l => String(l.id) === String(currentId));
      if (idx >= 0) {
        if (idx < stage.lessons.length - 1) {
          this.showScreen('lesson', { lessonId: stage.lessons[idx+1].id });
        } else { this.showScreen('home'); }
        return;
      }
    }
    this.showScreen('home');
  },

  renderProfile(el) {
    const data = Storage.load();
    const totalLessons = LessonData.stages.reduce((s,st) => s + st.lessons.length, 0);
    const completed = Object.keys(data.lessonsCompleted).length;

    el.innerHTML = `
      <div style="padding:24px 16px;background:var(--gradient-warm,linear-gradient(180deg,#FFF0C7,#FFF8E7));border-radius:0 0 24px 24px;text-align:center">
        <div class="avatar avatar-lg" style="margin:0 auto 12px">${data.avatar}</div>
        <div style="font-family:'Baloo 2',cursive;font-size:22px;color:#2c3e50">${data.name}</div>
        <div style="font-size:14px;color:#7f8c8d">Level ${Math.floor(data.totalXP/100)+1} • ${data.totalXP} XP</div>
      </div>
      <div class="profile-stats-grid" style="padding:16px;display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px">
        <div style="background:white;border-radius:16px;padding:14px;text-align:center;box-shadow:0 2px 8px rgba(0,0,0,0.05)">
          <div style="font-size:24px">⭐</div><div style="font-size:20px;font-weight:900;color:#2c3e50">${data.totalStars}</div><div style="font-size:11px;color:#95a5a6">Sao</div>
        </div>
        <div style="background:white;border-radius:16px;padding:14px;text-align:center;box-shadow:0 2px 8px rgba(0,0,0,0.05)">
          <div style="font-size:24px">🔥</div><div style="font-size:20px;font-weight:900;color:#2c3e50">${data.streak}</div><div style="font-size:11px;color:#95a5a6">Streak</div>
        </div>
        <div style="background:white;border-radius:16px;padding:14px;text-align:center;box-shadow:0 2px 8px rgba(0,0,0,0.05)">
          <div style="font-size:24px">📚</div><div style="font-size:20px;font-weight:900;color:#2c3e50">${completed}/${totalLessons}</div><div style="font-size:11px;color:#95a5a6">Bài học</div>
        </div>
      </div>
      <div style="padding:0 16px">
        <h3 style="font-family:'Baloo 2',cursive;font-size:18px;color:#2c3e50;margin-bottom:12px">🏆 Huy hiệu</h3>
        <div style="display:flex;flex-direction:column;gap:8px">
          ${(LessonData.badges || []).map(b => {
            const earned = data.badges.includes(b.id);
            return `<div style="display:flex;align-items:center;gap:12px;padding:10px 14px;background:${earned?'white':'#f8f9fa'};border-radius:12px;opacity:${earned?1:0.5};box-shadow:${earned?'0 2px 8px rgba(0,0,0,0.05)':'none'}">
              <span style="font-size:24px;${earned?'':'filter:grayscale(1)'}">${b.icon}</span>
              <div style="flex:1"><div style="font-weight:700;font-size:14px;color:#2c3e50">${b.name}</div><div style="font-size:12px;color:#95a5a6">${b.desc}</div></div>
              <span>${earned?'✅':'🔒'}</span>
            </div>`;
          }).join('')}
        </div>
      </div>
      <div style="padding:16px 16px 90px;display:flex;flex-direction:column;gap:10px">
        <button class="btn btn-block" style="background:linear-gradient(135deg,#636e72,#2d3436);color:white;padding:14px;border-radius:14px" onclick="App.showParentDashboard()">🔒 Báo cáo cho phụ huynh</button>
        <button class="btn btn-block" style="background:#ff6b6b;color:white;padding:14px;border-radius:14px" onclick="if(confirm('Xóa toàn bộ tiến độ?')){Storage.reset();location.reload();}">🗑️ Xóa dữ liệu</button>
      </div>
    `;
  },

  renderLeaderboard(el) {
    const data = Storage.load();
    const rankBots = [
      { name: 'Bé Bi', xp: data.totalXP + 150, avatar: '🐼' },
      { name: 'Miu Miu', xp: data.totalXP + 50, avatar: '🐱' },
      { name: data.name, xp: data.totalXP, avatar: data.avatar, isMe: true },
      { name: 'Tí Sún', xp: Math.max(0, data.totalXP - 80), avatar: '🐶' },
      { name: 'Bống', xp: Math.max(0, data.totalXP - 200), avatar: '🐰' }
    ].sort((a,b) => b.xp - a.xp);

    el.innerHTML = `
      <div class="roadmap-header"><h3>Bảng Xếp Hạng 🏆</h3><div style="width:40px"></div></div>
      <div style="padding:16px;padding-bottom:80px">
        <div style="background:white;border-radius:20px;box-shadow:0 4px 15px rgba(0,0,0,0.05);overflow:hidden">
          ${rankBots.map((b, i) => `
            <div style="display:flex;align-items:center;padding:12px 16px;border-bottom:1px solid #f1f2f6;background:${b.isMe?'#f8f9ff':'white'}">
              <div style="width:30px;font-weight:bold;color:${i===0?'#f1c40f':i===1?'#bdc3c7':i===2?'#d35400':'#95a5a6'};font-size:${i<3?'20px':'16px'}">#${i+1}</div>
              <div style="font-size:32px;margin:0 12px">${b.avatar}</div>
              <div style="flex:1"><div style="font-weight:700;color:${b.isMe?'var(--color-primary)':'#2c3e50'}">${b.name} ${b.isMe?'(Bạn)':''}</div><div style="font-size:13px;color:#7f8c8d">${b.xp} XP</div></div>
              ${i===0?'<div style="font-size:24px">👑</div>':''}
            </div>
          `).join('')}
        </div>
      </div>
    `;
  },

  startSentenceBuilder() {
    const sentences = LessonData.sentences || [];
    if (sentences.length === 0) { this.showToast('Chưa có dữ liệu!'); return; }
    const randomSentence = sentences[Math.floor(Math.random() * sentences.length)];
    this.exerciseState = {
      sentence: randomSentence,
      currentWordIndex: 0,
      shuffledWords: [...randomSentence.words].sort(() => Math.random() - 0.5)
    };
    this.showScreen('sentence_game');
  },

  renderSentenceBuilder(el) {
    const state = this.exerciseState;
    const s = state.sentence;
    const progress = Math.round((state.currentWordIndex / s.words.length) * 100);

    el.innerHTML = `
      <div class="lesson-header">
        <button class="back-btn" onclick="App.showScreen('skills')">←</button>
        <div class="lesson-progress"><div class="progress-bar"><div class="progress-bar-fill" style="width:${progress}%"></div></div></div>
        <button class="btn-icon" id="speakFullBtn" style="width:40px;height:40px;font-size:18px">🔊</button>
      </div>
      <div class="sentence-game">
        <div class="sentence-hint">${s.vi}</div>
        <div class="target-slots">
          ${s.words.map((w, i) => `<div class="slot ${i < state.currentWordIndex ? 'filled' : ''}">${i < state.currentWordIndex ? w : ''}</div>`).join('')}
        </div>
        <div class="word-pool" id="wordPool">
          ${state.shuffledWords.map((w, i) => `<div class="word-tile" data-word="${w}" data-index="${i}">${w}</div>`).join('')}
        </div>
        <div class="game-success-overlay" id="successOverlay">
          <div class="success-card">
            <div style="font-size:64px;margin-bottom:16px">🌟</div>
            <h2 style="color:var(--color-success);margin-bottom:8px">Tuyệt vời!</h2>
            <p style="color:#636e72;margin-bottom:24px">Bạn đã ghép đúng câu</p>
            <div style="color:var(--color-primary);font-weight:800;font-size:20px;margin-bottom:24px">"${s.text}"</div>
            <button class="btn btn-primary btn-block" onclick="App.startSentenceBuilder()">Câu tiếp theo 🔄</button>
            <button class="btn btn-secondary btn-block" style="margin-top:12px;color:#636e72" onclick="App.showScreen('skills')">Quay lại 🏠</button>
          </div>
        </div>
      </div>
    `;

    el.querySelector('#speakFullBtn').addEventListener('click', () => {
      Audio.speak(s.text); Audio.play('click');
    });

    const pool = el.querySelector('#wordPool');
    pool.addEventListener('click', e => {
      const tile = e.target.closest('.word-tile');
      if (!tile || tile.classList.contains('hidden')) return;
      if (tile.dataset.word === s.words[state.currentWordIndex]) {
        Audio.play('pop'); tile.classList.add('hidden'); state.currentWordIndex++;
        this.renderSentenceBuilder(el);
        if (state.currentWordIndex === s.words.length) {
          setTimeout(() => {
            Audio.play('complete'); Animations.confetti(); Storage.addXP(20);
            el.querySelector('#successOverlay').classList.add('show');
            Audio.speak(s.text);
          }, 300);
        }
      } else { Audio.play('wrong'); Animations.shake(tile); }
    });
  },

  renderParentDashboard(el) {
    const data = Storage.load();
    const totalLessons = LessonData.stages.reduce((s,st) => s + st.lessons.length, 0);
    const completed = Object.keys(data.lessonsCompleted).length;
    const level = Math.floor(data.totalXP / 100) + 1;
    const days = ['T2','T3','T4','T5','T6','T7','CN'];
    const today = new Date().getDay();
    const weekData = days.map((d, i) => {
      if (i < today || (today === 0 && i < 7)) return { day: d, mins: Math.floor(Math.random() * 20 + 5), active: true };
      if (i === (today === 0 ? 6 : today - 1)) return { day: d, mins: Math.floor(Math.random() * 15 + 10), active: true, isToday: true };
      return { day: d, mins: 0, active: false };
    });
    const maxMins = Math.max(...weekData.map(w => w.mins), 1);

    el.innerHTML = `
      <div class="parent-dashboard">
        <div class="parent-header">
          <button class="back-btn" onclick="App.showScreen('profile')" style="color:white">←</button>
          <h3 style="color:white;font-size:20px">Báo cáo học tập</h3>
          <div style="width:40px"></div>
        </div>
        <div class="parent-child-info">
          <div style="font-size:48px">${data.avatar}</div>
          <div><div style="font-weight:800;font-size:20px;color:#2c3e50">${data.name}</div><div style="color:#7f8c8d;font-size:14px">Level ${level} • ${data.totalXP} XP</div></div>
        </div>
        <div class="parent-section">
          <h4>📊 Thời gian học trong tuần</h4>
          <div class="week-chart">
            ${weekData.map(w => `
              <div class="chart-bar-wrapper">
                <div class="chart-bar-value">${w.mins > 0 ? w.mins + 'p' : ''}</div>
                <div class="chart-bar-track"><div class="chart-bar" style="height:${(w.mins/maxMins)*100}%;background:${w.isToday?'var(--gradient-fun)':'#74b9ff'}"></div></div>
                <div class="chart-bar-label" style="${w.isToday?'color:var(--color-primary);font-weight:800':''}">${w.day}</div>
              </div>
            `).join('')}
          </div>
        </div>
        <div class="parent-stats-grid">
          <div class="parent-stat-card" style="background:linear-gradient(135deg,#a29bfe,#6c5ce7)"><div style="font-size:28px">⭐</div><div style="font-size:24px;font-weight:900;color:white">${data.totalStars}</div><div style="font-size:12px;color:rgba(255,255,255,0.8)">Sao</div></div>
          <div class="parent-stat-card" style="background:linear-gradient(135deg,#fd79a8,#e84393)"><div style="font-size:28px">🔥</div><div style="font-size:24px;font-weight:900;color:white">${data.streak}</div><div style="font-size:12px;color:rgba(255,255,255,0.8)">Ngày liên tiếp</div></div>
          <div class="parent-stat-card" style="background:linear-gradient(135deg,#55efc4,#00b894)"><div style="font-size:28px">📚</div><div style="font-size:24px;font-weight:900;color:white">${completed}/${totalLessons}</div><div style="font-size:12px;color:rgba(255,255,255,0.8)">Bài học xong</div></div>
          <div class="parent-stat-card" style="background:linear-gradient(135deg,#ffeaa7,#fdcb6e)"><div style="font-size:28px">🏆</div><div style="font-size:24px;font-weight:900;color:white">${data.badges.length}/${(LessonData.badges||[]).length}</div><div style="font-size:12px;color:rgba(255,255,255,0.8)">Huy hiệu</div></div>
        </div>
        <div class="parent-section">
          <h4>🎯 Tiến độ từng chặng</h4>
          ${LessonData.stages.map(stage => {
            const ids = stage.lessons.map(l => l.id);
            const p = Storage.getStageProgress(stage.id, ids);
            return `<div class="parent-stage-row">
              <span style="font-size:20px">${stage.icon}</span>
              <div style="flex:1">
                <div style="display:flex;justify-content:space-between;margin-bottom:4px"><span style="font-weight:700;font-size:14px;color:#2c3e50">${stage.name}</span><span style="font-size:13px;color:#7f8c8d">${p.completed}/${p.total}</span></div>
                <div style="height:8px;background:#ecf0f1;border-radius:10px;overflow:hidden"><div style="height:100%;width:${p.percent}%;background:${stage.color};border-radius:10px"></div></div>
              </div>
            </div>`;
          }).join('')}
        </div>
        <div class="parent-section">
          <h4>💡 Đề xuất cho phụ huynh</h4>
          <div class="parent-tips">
            ${data.streak < 3 ? '<p>📌 Khuyến khích bé học mỗi ngày để tăng streak!</p>' : '<p>✅ Bé đang học rất đều đặn!</p>'}
            ${completed < 5 ? '<p>📌 Bé mới bắt đầu, hãy cùng bé học nhé.</p>' : `<p>✅ Bé đã hoàn thành ${completed} bài, tiếp tục phát huy!</p>`}
          </div>
        </div>
      </div>
    `;
  },

  showParentDashboard() {
    const pin = prompt('🔒 Nhập mã PIN (mặc định: 1234):');
    if (pin === '1234') this.showScreen('parent');
    else if (pin !== null) this.showToast('❌ Sai mã PIN!');
  },

  confirmExit() {
    if (confirm('Bạn có muốn thoát bài học không?')) this.showScreen('home');
  },

  showToast(msg) {
    let t = document.querySelector('.toast');
    if (t) t.remove();
    t = document.createElement('div');
    t.className = 'toast';
    t.textContent = msg;
    document.body.appendChild(t);
    setTimeout(() => t.classList.add('show'), 50);
    setTimeout(() => { t.classList.remove('show'); setTimeout(() => t.remove(), 300); }, 2500);
  }
};

document.addEventListener('DOMContentLoaded', () => App.init());
