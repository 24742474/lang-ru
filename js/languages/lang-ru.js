LANGUAGES.RU = {
    name: "Russian",
    inter_name: "Русский",
    icon: "lang-ru",

    text: {
        // Currencies

        'fish-name': "Рыба",
        'fish-costName': toTextStyle('Рыб','fish'),

        'prestige-name': "Осколок Престижа",
        'prestige-costName': "Осколков " + toTextStyle('Престижа','prestige'),

        'coral-name': "Коралл",
        'coral-costName': toTextStyle('Коралла','coral'),

        'ice-name': "Лед",
        'ice-costName': toTextStyle('Льда','ice'),

        'salt-name': "Соль",
        'salt-costName': toTextStyle('Солей','salt'),

        'snow-name': "Сжатый Снег",
        'snow-costName': toTextStyle('Сжатого Снега','snow'),

        'core-name': "Магматические Фрагменты",
        'core-costName': toTextStyle('Магматических','core') + ' Фрагментов',

        'curr-top-0-req': x => `Набрать <b>${format(x)}</b> ${toTextStyle('Рыб','fish')}`, 
        'curr-top-0-reset': x => `Престиж ради <b>${x.format(0)}</b> Осколков ${toTextStyle('Престижа','prestige')}`,

        'curr-top-1-req': x => `Набрать <b>${format(x)}</b> Осколков ${toTextStyle('Престижа','prestige')}`, 
        'curr-top-1-reset': x => `Войти в ядро за <b>${x.format(0)}</b> ${toTextStyle('Магматических','core')} Фрагментов`,

        // Tabs

        'tab-shark': toTextStyle('Акула','shark'),
        'tab-options': "Настройки",
        'tab-auto': "Автоматика",
        'tab-research': toTextStyle('Исследования','prestige'),
        'tab-explore': "Разведка",
        'tab-core': toTextStyle('Ядро','core'),
        'tab-core-reactor': toTextStyle('Ядерный','core')+ " Реактор",

        // Elements

        'fish-div': `Ваша ${toTextStyle('Акула','shark')} съела <h2>${toTextStyle('0','fish','fish-amount')}</h2> <span id="fish-gain"></span> рыб.`,
        'shark-stats': `Статистика ${toTextStyle('Акулы','shark')}<br>Уровень: <h4 id="shark-level">???</h4><br>Ранг: <h4 id="shark-tier">???</h4>`,

        'option-title-1': "Основные настройки",
        'option-title-2': "Запись чисел",
        'option-title-3': "Подтверждения",
        'option-title-4': "Языки",
        
        // Upgrades

        'su-s1-req': "3 уровень",
        'su-s1-name': 'Сила Акулы',
        'su-s1-desc': `Увеличивает количество съеденной ${toTextStyle('Рыбы','fish')} на <b>+1</b> за уровень.`,

        'su-s2-req': "7 уровень",
        'su-s2-name': 'Ловкость Акулы',
        'su-s2-desc': `Увеличивает базовый бонус ${toTextStyle('Рыбы','fish')} уровня ${toTextStyle('Акулы','shark')} на <b>+1</b> за уровень.`,

        'su-s3-req': "15 уровень",
        'su-s3-name': 'Зубы Акулы',
        'su-s3-desc': `Увеличивает экспоненту 1-го улучшения ${toTextStyle('Акулы','shark')} на <b>+50%</b> за уровень.`,

        'su-s4-req': "38 уровень",
        'su-s4-name': 'Экспонента Акулы',
        'su-s4-desc': `Увеличивает экспоненту ${toTextStyle('Рыбы','fish')} на <b>+1%</b> за уровень.`,

        'su-s5-req': "640 уровень",
        'su-s5-name': 'Радиоактивная Акула',
        'su-s5-desc': `Увеличивает производство ${toTextStyle('Радиации '+icon("radioactive"),'core')} на <b>x2</b> за уровень.`

        'su-p1-req': "Первый Престиж",
        'su-p1-name': 'Суперсила Акулы',
        'su-p1-desc': `Увеличивает количество съеденной ${toTextStyle('Рыбы','fish')} на <b>x3</b> за уровень.`,

        'su-p2-req': "Первый Престиж",
        'su-p2-name': 'Престижный Усилитель',
        'su-p2-desc': `Увеличивает количество съеденной ${toTextStyle('Рыбы','fish')} на <b>×lg(${toTextStyle('Рыба','fish')})</b> за уровень.`,

        'su-p3-name': 'Скалируемая Акулы',
        'su-p3-desc': `Откладывает первое усиление цены уровня ${toTextStyle('Акулы','shark')}, на <b>+1</b> за уровень.`,

        // Researches

        'research-p1-name': "Престижная Ловкость",
        'research-p1-desc': `'Ловкость Акулы' теперь влияет на базовый бонус осколков ${toTextStyle('Престижа','prestige')} уровня ${toTextStyle('Акулы','shark')} в ослабленном темпе.`,

        'research-p2-name': "Улучшение Акулы EL",
        'research-p2-desc': `${toTextStyle("Рыбные",'fish')} улучшения ${toTextStyle("Акулы",'shark')} больше не тратят ${toTextStyle("Рыбу",'fish')}.`,

        'research-p3-name': "Улучшенный уровень Акулы",
        'research-p3-desc': `Уменьшает базу требования уровня ${toTextStyle("Акулы",'shark')} на <b>1</b>,
        но делает ${toTextStyle("Престижный",'prestige')} сброс, сбросив осколки ${toTextStyle("Прстижа",'prestige')} и ${toTextStyle("Престижные",'prestige')} улучшения.
        Разблокирует новые улучшения ${toTextStyle("Акулы",'shark')}.`,

        'research-p4-name': "Улучшенный Престиж",
        'research-p4-desc': `Немного улучшает формулу получения Осколков ${toTextStyle("Престижа",'prestige')}.`,

        'research-p5-name': "Мега-Сила",
        'research-p5-desc': `'Суперсила Акулы' на <b>1%</b> сильнее за каждый уровень ${toTextStyle("Акулы",'shark')}, начиная со 100.`,

        'research-p6-name': "Супермасштабная Акула",
        'research-p6-desc': `'Масштабная Акула' в <b>два</b> раза сильнее.`,

        'research-p7-name': "Ресурсы Лучше I",
        'research-p7-desc': `Эффекты ${toTextStyle("Коралла",'coral')} и ${toTextStyle("Льда",'ice')} становятся лучше.`,

        'research-p8-name': "Более Улучшенный Уровень Акулы",
        'research-p8-desc': `Уменьшает базу требования уровня ${toTextStyle("Акулы",'shark')} на <b>1</b>.`,

        'research-e1-name': "Океаническая Синергия I",
        'research-e1-desc': `${toTextStyle("Соль",'salt')} усиливает генерацию ${toTextStyle("Кораллов",'coral')}.`,

        'research-e2-name': "Океаническая Синергия II",
        'research-e2-desc': `${toTextStyle("Сжатый Снег",'snow')} усиливает генерацию ${toTextStyle("Льда",'ice')}.`,

        'research-e3-name': "Автоматизация Разведки",
        'research-e3-desc': `Автоматически обновляет лучшую базу первых <b>X</b> океанов без разведок.`,

        'research-e4-name': "Окисление ламинарии",
        'research-e4-desc': `<b>Кислород</b> теперь влияет на производство ${toTextStyle("Ламинарии",'kelp')} в ослабленном темпе.`,
    
        'research-c1-name': "С-Хранитель Исследований",
        'research-c1-desc': `Сохраняет ${toTextStyle("Изучения",'prestige')} при входе в ${toTextStyle('Ядро','core')}.`,

        'research-c2-name': "C-Хранитель Разведок",
        'research-c2-desc': `Сохраняет первые <b>X</b> разблокированных океанов и их глубину при входе в ${toTextStyle('Ядро','core')}.`,

        'research-c3-name': "Привязанность к Неону I",
        'research-c3-desc': `<b>Неон</b> теперь влияет на 'Зубы Акулы', 'Экспоненту Акулы', and 'Скалируемую Акулу'.`,

        'research-c4-name': "Улучшенный Никель",
        'research-c4-desc': `Эффект <b>Никеля</b> в <b>два</b> раза сильнее.`,

        'research-c5-name': "Дополнительное Усиление Ядра",
        'research-c5-desc': `Первое усиление радиации Ядра теперь влияет на улучшение реактора ядра для ${toTextStyle('Рыбы','fish')} в ослабленном темпе.`,

        'research-c6-name': "Ослабление Радиации",
        'research-c6-desc': `${toTextStyle('Магматические','core')} фрагменты уменьшают лимит радиации ядра в ослабленном темпе.`,

        'research-c7-name': "Усиленные Зубы Акулы",
        'research-c7-desc': `Эффект от 'Зубов Акулы' увеличен в <b>2.5-ую</b> степень.`,

        // Exploration

        'explore-while': `Во время разведки`,
        'explore-inside': (a,b,c)=>`База ${a.format()}/s`+(b.gt(a) ? " ➜ " : " ~ ")+`${b.format()}/s`+`.<br>Набрать ${format(c,0)} ${toTextStyle("Рыб",'fish')}.`,
        'explore-outside': x=>`Ваша текущая база - ${x.format()}/s.<br>Исследуйте океан!`,

        'explore-next': x=>`Новый океан на <h3>${format(x,0)}</h3> уровне ${toTextStyle("Акулы",'shark')}.`,

        'explore-doubler-1': x=>`Удваивает генерацию ${x}.`,
        'explore-doubler-2': `Удваивает получение глубины.`,

        'explore-0-name': `Тихий Океан`,
        'explore-0-desc': `Количество получаемой ${toTextStyle('Рыбы','fish')} возводится в квадратный корень.`,
        'explore-0-milestone': [
            `Возведёт количество осколков ${toTextStyle('Престижа','prestige')} в 1.05-ую степень.`,
            `Увеличивает получение ресурса и глубины на 25% за каждый уровень ${toTextStyle('Акулы','shark')} в квадратным корне.`,
            `При повышении уровня ${toTextStyle('Акулы','shark')} больше не будет тратить Рыбу.`,
            `Возведёт количество съеденной ${toTextStyle('Рыбы','fish')} в 1.05-ую степень.`,
            `Разблокирует ${toTextStyle('Ядро','core')}.`,
        ],

        'explore-1-name': `Северный Ледовитый Океан`,
        'explore-1-desc': `Сбросит осколки ${toTextStyle("Престижа",'prestige')} и улучшения ${toTextStyle("Престижа",'prestige')}. Количество Осколков ${toTextStyle('Престижа','prestige')} возводится в квадратный корень.`,
        'explore-1-milestone': [
            `Разблокирует автоматические Улучшения ${toTextStyle("Престижа","prestige")} ${toTextStyle("Акулы","shark")}.`,
            `Увеличивает получение ресурса и глубины на 25% за уровень ${toTextStyle('Акулы','shark')} в квадратном корне.`,
            `Улучшения ${toTextStyle("Престижа","prestige")} ${toTextStyle("Акулы","shark")} больше не будут тратить осколки ${toTextStyle('Престижа','prestige')}.`,
            `Пассивно генерирует 100% осколков ${toTextStyle('Престижа','prestige')}, полученных от ${toTextStyle('Престижа','prestige')} каждую секунду.`,
        ],

        'explore-2-name': `Атлантический Океан`,
        'explore-2-desc': `Сбросит осколки ${toTextStyle("Престижа",'prestige')} и ${toTextStyle("Престижные",'prestige')} улучшения. Усиление цены уровня ${toTextStyle('Акулы','shark')} в 10 раз больше.` ,
        'explore-2-milestone': [
            `Усиление цены 'Зуба Акулы' и 'Экспоненты Акулы' немного слабее.`,
            `Увеличивает получение ресура и глубины на 25% за уровень ${toTextStyle('Акулы','shark')} в квадратным корне.`,
            `Первое усиление цены уровня ${toTextStyle('Акулы','shark')} начинается через +1 уровень за каждые 500 м глубины.`,
            `Эффект соли на 50% мощнее.`,
        ],

        'explore-3-name': `Южный Океан`,
        'explore-3-desc': `Сбросит осколки ${toTextStyle("Престижа",'prestige')} и ${toTextStyle("Престижные",'prestige')} улучшения. Вы не можете покупать ${toTextStyle('Рыбные','fish')} и ${toTextStyle('Престижные','prestige')} улучшения ${toTextStyle('Акулы','shark')}.`,
        'explore-3-milestone': [
            `Увеличьте базу исследований в 10 раз.`,
            `Увеличивает ресурс и глубину прогрессии на 25% за уровень ${toTextStyle('Акулы','shark')} с квадратным корнем.`,
            `Эффект этого океана на 50% мощнее.`,
        ],
        
        'explore-4-name': `Индийский Океан`,
        'explore-4-desc': `Вы закрыты в первых четырех океанах, а экспонента ${toTextStyle('Рыбы','fish')} становится 0,75.`,
        'explore-4-milestone': [
            `Уменьшает лимит радиации ядра на /1,000.`,
            `Увеличивает ресурс и глубину прогрессии на 25% за уровень ${toTextStyle('Акулы','shark')} с квадратным корнем.`,
            `Цена реакторов ядра усиливается на +5 позже.`,
            `Усиливает ${toTextStyle('Ламинарию','kelp')}.`,
        ],

        // Core Reactor

        'core-0-name': `Железо`,
        'core-0-desc': `${toTextStyle("Рыба",'fish')} возводит себя в степень на основе уровня <b>Железа</b>`,

        'core-1-name': `Никель`,
        'core-1-desc': `Осколки ${toTextStyle("Престижа",'prestige')} возведут свою базу в степень на основе уровня <b>Никеля</b>.`,

        'core-2-name': `Кислород`,
        'core-2-desc': `Количество ресурсов с первых четырех океанов увеличивает производство ресурсов на основе уровня <b>Кислорода</b>.`,

        'core-3-name': `Неон`,
        'core-3-desc': `Уровень ${toTextStyle("Акулы",'shark')} снижает требование на основе уровня <b>Неона</b>.`,

        'core-bonus': x => `Ресурсы ядерного реактора увеличивает количество съеденной ${toTextStyle("Рыбы",'fish')} на <h4>${formatMult(x)}</h4>.`,

        // Automation

        'auto-shark-name': `Авто-Уровень ${toTextStyle("Акулы","shark")}`,
        'auto-su-name': `Авто-Улучшение ${toTextStyle("Рыбы","fish")} ${toTextStyle("Акулы","shark")}`,
        'auto-spu-name': `Авто-Улучшение${toTextStyle("Престижа","prestige")} ${toTextStyle("Акулы","shark")}`,
        'auto-eu-name': `Авто-Улучшение Исследования`,

        'auto-cost': (D,cost,name) => `Уменьшить интервал на ${formatReduction(D,0)}.<br>Цена: ${format(cost,0)} ${name}`,
        'auto-interval': (a,b,maxed) => `Интервал: ${format(a,3)}с`+(maxed ? "" :` ➜ ${format(b,3)}с`),

        // Progress

        'progress-0-text': r => `Наберите ${format(r)} ${toTextStyle('Рыб','fish')}`, 
        get 'progress-0-cond-text'() { return `Сделайте ${toTextStyle('Престиж','prestige')}` },

        'progress-1-text': r => `Наберите ${format(r)} осколков ${toTextStyle('Престижа','prestige')}, чтобы разблокировать Автоматику`,
        'progress-2-text': r => `Наберите ${format(r)} осколков ${toTextStyle('Престижа','prestige')}, чтобы разблокировать Исследование`,
        'progress-3-text': r => `Достигните ${format(r,0)} уровня ${toTextStyle('Акулы','shark')}, чтобы разблокировать Разведку`,
        'progress-4-text': r => `Достигните ${format(r)}m глубины Тихого океана, чтобы разблокировать ${toTextStyle('Ядро','core')}`,

        'progress-5-text': r => `Наберите ${format(r)} осколков ${toTextStyle('Престижа','prestige')}`, 
        get 'progress-5-cond-text'() { return `Войдите в ${toTextStyle('Ядро','core')}` },

        'maxed-progress': "Все возможности разблокированы!",

        // Reset

        get 'reset-prestige-message'() {
            let p = toTextStyle('Престиж','prestige')
            return `
            <h3>${p}</h3><br>
            ${p} - это первый слой сброса.
            Престиж сбрасывает ваши ${toTextStyle('Акулу','shark')}, улучшения ${toTextStyle('Акулы','shark')} и ${toTextStyle('Рыбу','fish')} for за осколки ${toTextStyle('Престижа','prestige')}.
            Первый ${p} разблокирует новые улучшения ${toTextStyle('Акулы','shark')}.<br>
            <img src="textures/PrestigeShard.png"><br>
            Вы уверены, что хотите получить престиж?
            `
        },
        get 'reset-core-message'() {
            let c = toTextStyle('Ядро','core'), m = toTextStyle('Magmatic','core'), p = toTextStyle('Prestige','prestige')
            return `
            <h3>${c}</h3><br>
            ${c} - это второй слой сброса.
            При входе в ядро сбрасывается все механики${toTextStyle('Престижа','prestige')}, а также осколки ${toTextStyle('Престижа','prestige')},
            Улучшения ${toTextStyle('Престижа','prestige')}, почти все ${toTextStyle('Исследования','prestige')} и Исследования за ${toTextStyle('Магматические','core')} фрагменты,
            впервые разблокируя реактор ${toTextStyle('Ядра','core')}.<br>
            <img src="textures/Magmatic.png"><br>
            Вы уверены, что хотите войти в ядро?
            `
        },

        // Other

        'level': "Уровень",
        'effect': "Эффект",
        'cost': "Цена",
        'buyMax': "Купить Максимум",
        'require': "Требуется",
        'next-at': "Следующее",
        'depth': "Глубина",

        'upgrade-shark': x => `Повысить уровень ${toTextStyle('Акулы','shark')}<br>Цена: ${x.format(0)} ${toTextStyle('Рыб','fish')}`,
        'shark-bonus-fish': x => `+${x.format(0)} к основе ${toTextStyle('Рыбы','fish')}`,
        'shark-bonus-prestige': x => `${formatMult(x)} Осколков ${toTextStyle('Престижа','prestige')}`,
        'shark-bonus-core': x => `${formatMult(x)} ${toTextStyle('Магматических','core')} фрагментов`,

        'research-afford': bool => bool ? "Купить" : "Недостаточно ресурсов",
        'research-bought': bool => bool ? `<b>Куплен</b>` : `<b>Не куплен</b>`,

        'off-on': bool => bool ? "ВКЛ" : "ВЫКЛ",

        'popup-buttons': [
            ["Да","Нет"],
            ["Ок","Отмена"],
        ],

        'popup-desc' : {
            import: `Вставьте свое сохранение. ПРЕДУПРЕЖДЕНИЕ: ТЕКУЩЕЕ СОХРАНЕНИЕ БУДЕТ ПЕРЕЗАПИСАНО!`,
            wipe: `Вы уверены, что хотите стереть свои сохранения? Чтобы стереть, введите "<span class="free-select">I'm sorry what I don't want sharks!</span>"`,
        },

        'notify-desc' : {
            save: "Игра сохранена!",
        },

        'radio-desc' : {
            'notation': ['Формат записи чисел',['Научный','Стандартный','Смешанный научный']],
            'comma-format': ['Максимальное кол-во чисел в научной нотации (после е)',['3','6','9','12','15']],
            'autosave': ['Автосохранение',['Отключено','Включено']],
            'autosave-time': ['Интервал автосохранения',['15сек','30сек','60сек','120сек']],
            'offline': ['Оффлайн-прогресс',['Отключен','Включен']],
        },

        'radio-desc-default' : ['Отключено','Включено'],

        'prompt-placeholder': "Введите текст...",

        'option-buttons-text': ["Сохранить","Экспорт через буфер обмена","Экспорт через файл","Импорт через запрос","Импорт через файл","ПОЛНЫЙ СБРОС!!!","Присоединиться к сообществу (Discord)","Поддержать разработчика (Boosty)"],

        'confirm-prestige': "Престиж:",
        'confirm-core': "Вход в ядро:",
    },
}
