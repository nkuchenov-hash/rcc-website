(() => {
  'use strict';
  const $ = s => document.querySelector(s);
  const $$ = s => [...document.querySelectorAll(s)];
  const dictionary = {
    en: {
      topline:'A home for people from everywhere.',ribbonLine:'PEOPLE. CULTURE. CONNECTION.',photoCaption:'STRANGERS → FRIENDS',formatTalkKicker:'LANGUAGES & CONVERSATION',formatTripKicker:'CITY & ADVENTURES',formatArtKicker:'ART & STORIES',formatNightKicker:'MUSIC & FRIENDS',footerNote:'CULTURE IS WHAT WE MAKE TOGETHER.',announce:'Saint Petersburg · A club for curious people from everywhere', navFormats:'Our events',navCalendar:'Calendar',navAbout:'About us',join:'Join the club',
      heroEyebrow:'AN INTERNATIONAL COMMUNITY IN SAINT PETERSBURG',heroLine1:'MANY CULTURES.',heroLine2:'ONE CIRCLE',heroLine3:'OF FRIENDS.',
      heroSubtitle:'Meet people, discover Russia and make memories worth sharing.',
      heroDescription:'Language meetups, movie nights, city walks and adventures. Come as you are — there is always room at the table.',
      seeEvents:'See the calendar',learnMore:'Our community',heroBottom:'OPEN TO EVERYONE · REAL CONNECTIONS',
      section1Eyebrow:' / WAYS TO CONNECT',formatsTitle:'More than events.\nReal connections.',
      formatsAside:'From casual Friday conversations to unforgettable journeys — find your kind of adventure.',
      formatTalk:'Talk & Connect',formatTalkText:'Meet new people, practice languages and share stories.',
      formatTrips:'Explore Together',formatTripsText:'Discover the city and beyond, together.',
      formatCulture:'See & Feel',formatCultureText:'Museums, history and the people behind the stories.',
      formatMusic:'Good Times',formatMusicText:'Karaoke, parties and moments worth remembering.',
      section2Eyebrow:' / PLAN YOUR NEXT MEETUP',calendarTitle:'Your next\nmeetup.',
      calendarAside:"Find your people. Pick a date. We'll take care of the good company.",
      today:'Today',filterAll:'All events',filterMeetups:'Meetups',filterTrips:'Trips',filterCulture:'Culture',filterMusic:'Music & parties',filterOther:'More',
      calendarLive:'Events are updated by RCC organizers',moreTelegram:'More announcements in Telegram',
      section3Eyebrow:' / MORE THAN A MEETUP',aboutTitle1:'Different places.',aboutTitle2:'Shared stories.',aboutTitle3:'More like',aboutTitle4:'friends.',
      aboutBody:'RCC brings together Petersburg locals, travelers and people from around the world. We connect through conversation, culture and friendship — with no formalities.',
      value1:'Come as you are',value2:'Languages bring us together',value3:'Culture through people',joinKicker:' / THE NEXT CHAPTER IS YOURS',joinTitle:'SEE YOU AT\nTHE NEXT MEETUP!',joinTitle2:'START TOGETHER.',
      joinText:'You do not have to know anyone in advance. Just come along.',telegramJoin:'Join our Telegram',admin:'Organizers',
      noEvents:'No published events this month yet',noEventsHelp:'New dates appear here as soon as our organizers announce them. For the latest updates, join the Telegram community.',
      loading:'Loading calendar…',unavailable:'Calendar is temporarily unavailable',unavailableHelp:'Please check our Telegram group for current announcements.',
      register:'Event details / registration ↗',original:'See Telegram announcement ↗',place:'Location',when:'When',price:'Price',dayNames:['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],
      categories:{meetup:'Meetup',trip:'Trip',museum:'Culture',music:'Music',party:'Party',workshop:'Workshop',other:'Event'}
    },
    ru: {
      topline:'Сообщество для людей со всего мира.',ribbonLine:'ЛЮДИ. КУЛЬТУРА. ДРУЖБА.',photoCaption:'НЕЗНАКОМЦЫ → ДРУЗЬЯ',formatTalkKicker:'ЯЗЫКИ И ОБЩЕНИЕ',formatTripKicker:'ГОРОД И ПУТЕШЕСТВИЯ',formatArtKicker:'ИСКУССТВО И ИСТОРИИ',formatNightKicker:'ВЕЧЕРА И МУЗЫКА',footerNote:'КУЛЬТУРА — ЭТО ТО, ЧТО МЫ СОЗДАЁМ ВМЕСТЕ.',announce:'Санкт-Петербург · Клуб для любознательных людей со всего мира',navFormats:'Наши встречи',navCalendar:'Календарь',navAbout:'О клубе',join:'Вступить в клуб',
      heroEyebrow:'МЕЖДУНАРОДНОЕ СООБЩЕСТВО В САНКТ-ПЕТЕРБУРГЕ',heroLine1:'Много культур.',heroLine2:'Один круг',heroLine3:'друзей.',
      heroSubtitle:'Знакомимся, открываем Россию и создаём истории, которые хочется рассказывать.',
      heroDescription:'Разговорные встречи, кино, прогулки и культурные приключения. Можно прийти одному — здесь всегда найдётся компания.',
      seeEvents:'Смотреть календарь',learnMore:'Наш Telegram',heroBottom:'ОТКРЫТЫ ДЛЯ ВСЕХ · ЗНАКОМИМСЯ ПО-НАСТОЯЩЕМУ',
      section1Eyebrow:' / КАК МЫ ВСТРЕЧАЕМСЯ',formatsTitle:'Не просто мероприятия.\nНастоящие знакомства.',
      formatsAside:'От уютных пятничных встреч до увлекательных поездок — найдите то, что понравится именно вам.',
      formatTalk:'Talk & Connect',formatTalkText:'Разговорные встречи по пятницам, новые лица и большие разговоры.',
      formatTrips:'Explore Together',formatTripsText:'Прогулки, поездки и новые места с хорошей компанией.',
      formatCulture:'See & Feel',formatCultureText:'Музеи, кино и культура России во всём многообразии.',
      formatMusic:'Good Times',formatMusicText:'Караоке, вечеринки, игры и спонтанные приключения.',
      section2Eyebrow:' / ПЛАНИРУЙ ВСТРЕЧУ',calendarTitle:'Календарь\nмероприятий.',
      calendarAside:'Выбирай дату, знакомься с людьми — за хорошую компанию мы отвечаем.',
      today:'Сегодня',filterAll:'Все события',filterMeetups:'Общение',filterTrips:'Поездки',filterCulture:'Культура',filterMusic:'Музыка и вечеринки',filterOther:'Другое',
      calendarLive:'Календарь обновляют организаторы RCC',moreTelegram:'Больше анонсов в Telegram',
      section3Eyebrow:' / МЫ — СООБЩЕСТВО',aboutTitle1:'Разные страны.',aboutTitle2:'Общие истории.',aboutTitle3:'В одном',aboutTitle4:'круге.',
      aboutBody:'RCC объединяет жителей Петербурга, путешественников и людей со всего мира. Мы знакомимся через разговоры, культурные открытия и дружбу — без формальностей и требований.',
      value1:'Можно прийти одному',value2:'Говорим на разных языках',value3:'Узнаём культуру через людей',joinKicker:' / ТВОЯ СЛЕДУЮЩАЯ ИСТОРИЯ',joinTitle:'Увидимся\nна встрече!',joinTitle2:'НА НОВОЙ ВСТРЕЧЕ!',
      joinText:'Не нужно никого знать заранее. Достаточно просто прийти.',telegramJoin:'Вступить в Telegram',admin:'Организаторам',
      noEvents:'На этот месяц пока нет опубликованных встреч',noEventsHelp:'Новые события появятся здесь после подтверждения организаторами. Анонсы можно отслеживать в нашем Telegram.',
      loading:'Загружаем календарь…',unavailable:'Календарь временно недоступен',unavailableHelp:'Актуальные анонсы смотрите в нашей Telegram-группе.',
      register:'Подробнее / регистрация ↗',original:'Исходный анонс в Telegram ↗',place:'Место',when:'Когда',price:'Стоимость',dayNames:['Пн','Вт','Ср','Чт','Пт','Сб','Вс'],
      categories:{meetup:'Общение',trip:'Поездка',museum:'Культура',music:'Музыка',party:'Вечеринка',workshop:'Мастер-класс',other:'Событие'}
    }
  };
  let savedLang; try { savedLang = localStorage.getItem('rcc-lang'); } catch {}
  let lang = savedLang === 'en' ? 'en' : 'ru';
  function moscowToday() {
    const parts=Object.fromEntries(new Intl.DateTimeFormat('en-US',{timeZone:'Europe/Moscow',year:'numeric',month:'numeric',day:'numeric'}).formatToParts(new Date()).map(x=>[x.type,x.value]));
    return new Date(Number(parts.year),Number(parts.month)-1,Number(parts.day));
  }
  let current = moscowToday(); current = new Date(current.getFullYear(), current.getMonth(), 1);
  let filter = 'all', events = [], fetchError = false;
  const fmtISO = date => `${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,'0')}-${String(date.getDate()).padStart(2,'0')}`;
  const escapeHtml = s => String(s || '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const t = k => dictionary[lang][k];
  function setLanguage(next) {
    lang = next;
    try { localStorage.setItem('rcc-lang', lang); } catch {}
    document.documentElement.lang = lang;
    $$('[data-lang]').forEach(el => {el.classList.toggle('active',el.dataset.lang===lang);el.setAttribute('aria-pressed',String(el.dataset.lang===lang));});
    $$('[data-i18n]').forEach(el => {
      const key=el.dataset.i18n, val=t(key);
      if (!val || typeof val!=='string') return;
      if (['formatsTitle','calendarTitle','joinTitle'].includes(key)) {
        const nodes = val.split('\n');
        if (key==='formatsTitle'||key==='calendarTitle'||key==='joinTitle') el.innerHTML=escapeHtml(nodes[0])+'<br>'+escapeHtml(nodes.slice(1).join(' '));
        else el.textContent=val;
      } else el.textContent=val;
    });
    // Russian headline needs compact typography.
    $('#heroHeading').classList.toggle('ru-title',lang==='ru');
    renderCalendar();
  }
  const locale=()=>lang==='ru'?'ru-RU':'en-US';
  function categoryMatches(ev){return filter==='all' || ev.category===filter || (filter==='music' && ev.category==='party') || (filter==='other' && ev.category==='workshop');}
  function showEvent(event){
    const d=$('#eventDialog'), container=$('#dialogContent');
    const dateTime=event.start_at?new Date(event.start_at).toLocaleString(locale(),{day:'numeric',month:'long',year:'numeric',hour:'2-digit',minute:'2-digit'}):'—';
    const image=event.image_url&&(/^(https:\/\/|\/media\/)/.test(event.image_url)) ? `<div class="dialog-image"><img alt="" src="${escapeHtml(event.image_url)}"></div>` : '';
    const details=[`<div class="dialog-detail"><span>${t('when')}</span><strong>${escapeHtml(dateTime)}</strong></div>`];
    if(event.location) details.push(`<div class="dialog-detail"><span>${t('place')}</span><strong>${escapeHtml(event.location)}</strong></div>`);
    if(event.price) details.push(`<div class="dialog-detail"><span>${t('price')}</span><strong>${escapeHtml(event.price)}</strong></div>`);
    const actions=[];
    if(event.registration_url?.startsWith('https://'))actions.push(`<a class="button button-red" href="${escapeHtml(event.registration_url)}" rel="noopener noreferrer" target="_blank">${t('register')}</a>`);
    if(event.source_url?.startsWith('https://'))actions.push(`<a class="button button-dark" href="${escapeHtml(event.source_url)}" rel="noopener noreferrer" target="_blank">${t('original')}</a>`);
    container.innerHTML=`${image}<div class="dialog-body"><div class="dialog-category">${escapeHtml(t('categories')[event.category]||t('categories').other)}</div><h3 id="eventDialogTitle">${escapeHtml(event.title)}</h3>${details.join('')}<p class="dialog-description">${escapeHtml(event.description)}</p><div class="dialog-actions">${actions.join('')}</div></div>`;
    d.showModal(); document.body.classList.add('dialog-open');
  }
  function renderCalendar(){
    const heading=$('#calendarMonth'),grid=$('#calendarGrid'),weekdays=$('#calendarWeekdays');
    heading.textContent=new Intl.DateTimeFormat(locale(),{month:'long',year:'numeric'}).format(current).replace(/^./,c=>c.toUpperCase());
    weekdays.innerHTML='';
    t('dayNames').forEach(name=>{const cell=document.createElement('div');cell.textContent=name;weekdays.append(cell);});
    grid.replaceChildren();
    const first=new Date(current.getFullYear(),current.getMonth(),1),offset=(first.getDay()+6)%7;
    const days=new Date(current.getFullYear(),current.getMonth()+1,0).getDate();
    const rowCount=Math.ceil((offset+days)/7);
    const today=fmtISO(moscowToday());
    for(let i=0;i<rowCount*7;i++){
      const day=new Date(current.getFullYear(),current.getMonth(),i-offset+1), iso=fmtISO(day);
      const cell=document.createElement('div');cell.className='calendar-day';
      if(day.getMonth()!==current.getMonth())cell.classList.add('outside');
      if(iso===today)cell.classList.add('today');
      const dayLabel=document.createElement('div');dayLabel.className='day-number';
      const number=document.createElement('span');number.textContent=day.getDate();dayLabel.append(number);cell.append(dayLabel);
      const relevant=events.filter(ev => ev.start_at?.slice(0,10)===iso && categoryMatches(ev));
      relevant.slice(0,3).forEach(ev=>{
        const btn=document.createElement('button');btn.type='button';btn.className=`event-pill ${ev.category}`;
        const tm=ev.start_at.slice(11,16);
        btn.innerHTML=`<span class="event-time">${escapeHtml(tm)}</span>${escapeHtml(ev.title)}`;
        btn.setAttribute('aria-label',`${ev.title} ${iso} ${tm}`);
        btn.title=ev.title;btn.addEventListener('click',()=>showEvent(ev));cell.append(btn);
      });
      if(relevant.length>3){const extra=document.createElement('div');extra.className='more-events';extra.textContent=`+${relevant.length-3}`;cell.append(extra);}
      grid.append(cell);
    }
    if(fetchError){
      const note=document.createElement('div');note.className='calendar-notice';note.textContent=t('unavailable');note.setAttribute('role','status');grid.before(note);
    }
    const filtered=events.filter(ev=>categoryMatches(ev));
    // Render empty state beneath the real month grid — never invent dates.
    let status=$('#calendarStatus');if(!status){status=document.createElement('div');status.id='calendarStatus';grid.after(status);}
    status.innerHTML=filtered.length===0?`<div class="calendar-empty"><strong>${escapeHtml(fetchError?t('unavailable'):t('noEvents'))}</strong><span>${escapeHtml(fetchError?t('unavailableHelp'):t('noEventsHelp'))}</span></div>`:'';
  }
  async function loadEvents(){
    if (window.RCC_PREVIEW) { events=[]; fetchError=false; renderCalendar(); return; }
    fetchError=false;
    const start=fmtISO(new Date(current.getFullYear(),current.getMonth(),1)),end=fmtISO(new Date(current.getFullYear(),current.getMonth()+1,0));
    try{const r=await fetch(`./events.json`,{cache:'no-store'});if(!r.ok)throw new Error('Failed to fetch');const d=await r.json();events=d.events||[];}
    catch(err){events=[];fetchError=true;console.warn('RCC calendar:',err.message);}
    $$('.calendar-notice').forEach(el=>el.remove());renderCalendar();
  }
  $$('#prevMonth, #nextMonth').forEach(el=>el.addEventListener('click',()=>{current.setMonth(current.getMonth()+(el.id==='nextMonth'?1:-1));loadEvents();}));
  $('#goToday').addEventListener('click',()=>{const d=moscowToday();current=new Date(d.getFullYear(),d.getMonth(),1);loadEvents();});
  $$('.filter-chip').forEach(b=>b.addEventListener('click',()=>{filter=b.dataset.category;$$('.filter-chip').forEach(x=>x.classList.toggle('selected',x===b));renderCalendar();}));
  $$('.format-card[data-filter]').forEach(a=>a.addEventListener('click',()=>{filter=a.dataset.filter;$$('.filter-chip').forEach(x=>x.classList.toggle('selected',x.dataset.category===filter));renderCalendar();}));
  $$('[data-lang]').forEach(b=>b.addEventListener('click',()=>setLanguage(b.dataset.lang)));
  $('#dialogClose').addEventListener('click',()=>$('#eventDialog').close());
  $('#eventDialog').addEventListener('close',()=>document.body.classList.remove('dialog-open'));
  $('#eventDialog').addEventListener('click',e=>{if(e.target===$('#eventDialog'))$('#eventDialog').close();});
  const menu=$('.mobile-menu');menu.addEventListener('click',()=>{const open=$('.main-nav').classList.toggle('open');menu.setAttribute('aria-expanded',String(open));});
  $$('.main-nav a').forEach(a=>a.addEventListener('click',()=>{$('.main-nav').classList.remove('open');menu.setAttribute('aria-expanded','false');}));
  $('#year').textContent=new Date().getFullYear();
  setLanguage(lang);loadEvents();
})();