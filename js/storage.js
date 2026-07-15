// EngKids v2 - LocalStorage Manager
const Storage = {
  KEY: 'engkids_v2_data',
  OLD_KEY: 'tinybee_data',
  
  getDefault() {
    return {
      name: '',
      avatar: '🦊',
      totalStars: 0,
      totalXP: 0,
      streak: 0,
      lastStudyDate: null,
      lessonsCompleted: {},
      stagesCompleted: [],
      badges: [],
      favorites: [],
      settings: { sound: true, music: true }
    };
  },

  load() {
    try {
      // Try new key first
      let data = localStorage.getItem(this.KEY);
      if (data) return { ...this.getDefault(), ...JSON.parse(data) };
      
      // Migrate from old key if exists
      const oldData = localStorage.getItem(this.OLD_KEY);
      if (oldData) {
        const parsed = { ...this.getDefault(), ...JSON.parse(oldData) };
        this.save(parsed);
        return parsed;
      }
    } catch(e) { console.warn('Storage load error', e); }
    return this.getDefault();
  },

  save(data) {
    try { localStorage.setItem(this.KEY, JSON.stringify(data)); } 
    catch(e) { console.warn('Storage save error', e); }
  },

  get(key) { return this.load()[key]; },

  set(key, value) {
    const data = this.load();
    data[key] = value;
    this.save(data);
  },

  completeLesson(lessonId, stars) {
    const data = this.load();
    const prev = data.lessonsCompleted[lessonId] || 0;
    if (stars > prev) {
      data.totalStars += (stars - prev);
      data.lessonsCompleted[lessonId] = stars;
    }
    data.totalXP += stars * 10;
    this.updateStreak(data);
    this.save(data);
    return data;
  },

  updateStreak(data) {
    const today = new Date().toDateString();
    if (data.lastStudyDate === today) return;
    const yesterday = new Date(Date.now() - 86400000).toDateString();
    data.streak = (data.lastStudyDate === yesterday) ? data.streak + 1 : 1;
    data.lastStudyDate = today;
  },

  getLessonStars(lessonId) {
    return this.load().lessonsCompleted[lessonId] || 0;
  },

  getStageProgress(stageId, lessonIds) {
    const data = this.load();
    let completed = 0;
    lessonIds.forEach(id => { if (data.lessonsCompleted[id]) completed++; });
    return { completed, total: lessonIds.length, percent: Math.round((completed / lessonIds.length) * 100) };
  },

  isSetupDone() { return !!this.load().name; },

  addBadge(badgeId) {
    const data = this.load();
    if (!data.badges.includes(badgeId)) {
      data.badges.push(badgeId);
      this.save(data);
      return true;
    }
    return false;
  },

  addXP(amount) {
    const data = this.load();
    data.totalXP += amount;
    this.updateStreak(data);
    this.save(data);
    return data;
  },

  toggleFavorite(lessonId) {
    const data = this.load();
    if (!data.favorites) data.favorites = [];
    const idx = data.favorites.indexOf(lessonId);
    if (idx >= 0) {
      data.favorites.splice(idx, 1);
    } else {
      data.favorites.push(lessonId);
    }
    this.save(data);
    return data.favorites.includes(lessonId);
  },

  isFavorite(lessonId) {
    const data = this.load();
    return (data.favorites || []).includes(lessonId);
  },

  reset() { localStorage.removeItem(this.KEY); }
};
