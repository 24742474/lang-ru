LANGUAGES.RU = {
    name: "Russian",
    inter_name: "Русский",
    icon: "lang-ru",

    text: {
        // Currencies

        'fish-name': "Рыба",
        'fish-costName': toTextStyle('Рыб','рыб'),

        'prestige-name': "Осколки престижа",
        'prestige-costName': toTextStyle('Осколков','осколков') + " Престижа",

        'coral-name': "Коралл",
        'coral-costName': toTextStyle('Кораллов','кораллов'),

        'ice-name': "Лед",
        'ice-costName': toTextStyle('Льда','льда'),

        'salt-name': "Соль",
        'salt-costName': toTextStyle('Соли','соли'),

        'snow-name': "Сжатый Снег",
        'snow-costName': toTextStyle('Сжатого Снега','снега'),

        'kelp-name': "Ламинария",
        'kelp-costName': toTextStyle('Ламинарии','ламинарии'),

        'core-name': "Магматические фрагменты",
        'core-costName': toTextStyle('Магматические','ядерные') + ' Фрагменты',

        'curr-top-0-req': x => `Достигните <b>${format(x)}</b> общего количества ${toTextStyle('Рыбы','рыб')}`, 
        'curr-top-0-reset': x => `Сбросить прогресс ради <b>${x.format(0)}</b> ${toTextStyle('Осколков','осколков')} Престижа`,

        'curr-top-1-req': x => `Достигните <b>${format(x)}</b> общего количества ${toTextStyle('Осколков','осколков')} Престижа`, 
        'curr-top-1-reset': x => `Войти в ядро за <b>${x.format(0)}</b> ${toTextStyle('Магматические','ядерные')} Фрагменты`,

        'radioactive-name': toTextStyle('Радиация '+icon("радиоактивный"),'ядро'),

        // Tabs

        'tab-shark': toTextStyle('Акула','акула'),
        'tab-options': "Настройки",
        'tab-auto': "Автоматизация",
        'tab-research': toTextStyle('Исследования','престижа'),
        'tab-explore': "Исследование",
        'tab-core': toTextStyle('Ядро','ядро'),
        'tab-core-reactor': toTextStyle('Ядерный','ядерный')+" Рeактор",
        'tab-core-radiation': toTextStyle('Ядерная','ядерная')+" Радиация",

        // Elements

        'fish-div': `Ваша ${toTextStyle('Акула','акула')} съела <h2>${toTextStyle('0','fish','fish-amount')}</h2> <span id="fish-gain"></span> ед. рыбы.`,
        'shark-stats': `${toTextStyle('Статистика','статистика')} Акулы<br>Level: <h4 id="shark-level">???</h4><br>Ранг: <h4 id="shark-tier">???</h4>`,

        'option-title-1': "Основные настройки",
        'option-title-2': "Нотации",
        'option-title-3': "Подтверждения",
        'option-title-4': "Языки",

        'offline-speed': "Скорость в оффлайне",
        'offline-done': "Готово.",

        'radioactive-div': `${toTextStyle('Ядро','ядро')} произвело <h3>${toTextStyle('0 / 1,000 '+icon("radioactive"),'core','radioactive-amount')}</h3> <span id="radioactive-gain"></span>.`,
        get 'radioactive-summary'() {
            var c = toTextStyle('Core','core'), rf = toTextStyle('Рыба '+icon("radioactive"),'рыбы')
            return `
            <summary>${c} Радиоактивеный эксперимент</summary>
            Эксперементы с радиацей выполняют ${toTextStyle('Ядерный','ядерный')} ресет.
            Пока в эксперименте, все ядерные реакторы не работают, и ${toTextStyle('Рыба','рыба')}, ${toTextStyle('Осколки','осколки')} престижа, первые 4 океанических ресурса возведены в кубический корень.
            Эксперимент заставляет вашу ${toTextStyle('Акулу','акулу')} есть радиоактивные ${rf}.<br>
            Покупайте радиоактивные улучшения ${rf} чтобы генерировать больше ${toTextStyle('Радиации '+icon("radioactive"),'core')}, которая дает дополнительные усиления.
            `
        },
        'radioboost-div': `У вас <h3 id="radioactive-boost">0</h3> радиоактивных усилений.`,

        // Upgrades

        'su-s1-req': "Уровень 3",
        'su-s1-name': 'Сила акулы',
        'su-s1-desc': `Увеличивает съеденную ${toTextStyle('Рыбу','рish')} на <b>+1</b> за уровень.`,

        'su-s2-req': "Уровень 7",
        'su-s2-name': 'Ловкость акулы',
        'su-s2-desc': `Увеличивает базу уровня ${toTextStyle('Акулы','акулы')} ${toTextStyle('Fish','fish')} bonus by <b>+1</b> per level.`,

        'su-s3-req': "Level 15",
        'su-s3-name': 'Shark Teeth',
        'su-s3-desc': `Increases the exponent of 1st ${toTextStyle('Shark','shark')} Upgrade by <b>+50%</b> per level.`,

        'su-s4-req': "Level 38",
        'su-s4-name': 'Shark Exponent',
        'su-s4-desc': `Increases the exponent of ${toTextStyle('Fish','fish')} by <b>+1%</b> per level.`,

        'su-s5-req': "Level 640",
        'su-s5-name': 'Radioactive Shark',
        'su-s5-desc': `Increase ${toTextStyle('Radiation '+icon("radioactive"),'core')} production by <b>x2</b> per level.`,

        'su-p1-req': "First Prestige",
        'su-p1-name': 'Super Shark Strength',
        'su-p1-desc': `Increases ${toTextStyle('Fish','fish')} eaten by <b>×3</b> per level.`,

        'su-p2-req': "First Prestige",
        'su-p2-name': 'Prestige Booster',
        'su-p2-desc': `Increases ${toTextStyle('Fish','fish')} eaten by <b>×lg(${toTextStyle('Fish','fish')})</b> per level.`,

        'su-p3-name': 'Scaled Shark',
        'su-p3-desc': `Delays the first ${toTextStyle('Shark','shark')} Level scaling by <b>+1</b> per level.`,

        // Researches

        'research-p1-name': "Prestigious Agility",
        'research-p1-desc': `'Shark Agility' now affects the base of ${toTextStyle("Shark",'shark')} Level's ${toTextStyle("Prestige",'prestige')} Shard bonus at a reduced rate.`,

        'research-p2-name': "Shark Upgrade EL",
        'research-p2-desc': `${toTextStyle("Shark",'shark')} ${toTextStyle("Fish",'fish')} upgrades no longer spend ${toTextStyle("Fish",'fish')}.`,

        'research-p3-name': "Upgraded Shark Level",
        'research-p3-desc': `Reduce the base of ${toTextStyle("Shark",'shark')} level's requirement by <b>1</b>,
        but force a ${toTextStyle("Prestige",'prestige')} reset, resetting your ${toTextStyle("Prestige",'prestige')} shards and ${toTextStyle("Prestige",'prestige')} upgrades.
        Unlock new ${toTextStyle("Shark",'shark')} upgrades.`,

        'research-p4-name': "Better Prestige",
        'research-p4-desc': `Slightly improve the formula of ${toTextStyle("Prestige",'prestige')} shards gain.`,

        'research-p5-name': "Mega Strength",
        'research-p5-desc': `'Super Shark Strength' is <b>1%</b> stronger for every ${toTextStyle("Shark",'shark')} Level, starting at 100.`,

        'research-p6-name': "Super Scaled Shark",
        'research-p6-desc': `'Scaled Shark' is <b>twice</b> as strong.`,

        'research-p7-name': "Better Resources I",
        'research-p7-desc': `${toTextStyle("Coral",'coral')} and ${toTextStyle("Ice",'ice')}' effect is better.`,

        'research-p8-name': "Further Upgraded Shark Level",
        'research-p8-desc': `Further reduce the base of ${toTextStyle("Shark",'shark')} level's requirement by 1.`,

        'research-e1-name': "Ocean Synergism I",
        'research-e1-desc': `${toTextStyle("Salt",'salt')} boosts ${toTextStyle("Corals",'coral')} generated.`,

        'research-e2-name': "Ocean Synergism II",
        'research-e2-desc': `${toTextStyle("Compressed Snow",'snow')} boosts ${toTextStyle("Ice",'ice')} generated.`,

        'research-e3-name': "Exploration Automation",
        'research-e3-desc': `Automatically update the best base of the first <b>X</b> oceans without exploring.`,

        'research-e4-name': "Kelp Oxidation",
        'research-e4-desc': `<b>Oxygen</b> now affects ${toTextStyle("Kelp",'kelp')} production at a reduced rate.`,

        'research-c1-name': "Research C-Keeper",
        'research-c1-desc': `Keep ${toTextStyle("Research",'prestige')} on entering the ${toTextStyle('Core','core')}.`,

        'research-c2-name': "Exploration C-Keeper",
        'research-c2-desc': `Keep first <b>X</b> oceans unlocked and their depth on entering the ${toTextStyle('Core','core')}.`,

        'research-c3-name': "Neon's Affection I",
        'research-c3-desc': `<b>Neon</b> now affects 'Shark Teeth', 'Shark Exponent', and 'Scaled Shark'.`,

        'research-c4-name': "Better Nickel",
        'research-c4-desc': `<b>Nickel</b>'s effect is <b>twice</b> as powerful.`,

        'research-c5-name': "Additional Core Boost",
        'research-c5-desc': `The core radiation's first boost now affects the core reactor's boost to ${toTextStyle('Fish','fish')} at a reduced rate.`,

        'research-c6-name': "Radiation Reduction",
        'research-c6-desc': `${toTextStyle('Magmatic','core')} fragments reduce the core radiation's limit at a reduced rate.`,

        'research-c7-name': "Greater Shark Teeth",
        'research-c7-desc': `The effect of 'Shark Teeth' is raised to the <b>2.5th</b> power.`,

        // Exploration

        'explore-while': `While exploring`,
        'explore-inside': (a,b,c)=>`Base ${a.format()}/s`+(b.gt(a) ? " ➜ " : " ~ ")+`${b.format()}/s`+`.<br>Reach ${format(c,0)} best ${toTextStyle("Fish",'fish')}.`,
        'explore-outside': x=>`Your current base is ${x.format()}/s.<br>Explore the ocean!`,

        'explore-next': x=>`New Ocean at ${toTextStyle("Shark",'shark')} Level <h3>${format(x,0)}</h3>.`,

        'explore-doubler-1': x=>`Double ${x} gained.`,
        'explore-doubler-2': `Double depth progression gain.`,

        'explore-0-name': `Pacific Ocean`,
        'explore-0-desc': `${toTextStyle('Fish','fish')} gain is rooted by 2.`,
        'explore-0-milestone': [
            `Raise ${toTextStyle('Prestige','prestige')} shards gained to the 1.05th power.`,
            `Increase the resource and depth progression by 25% compounding per square-rooted ${toTextStyle('Shark','shark')} level.`,
            `Leveling ${toTextStyle('Shark','shark')} will no longer spend ${toTextStyle('Fish','fish')}.`,
            `Raise ${toTextStyle('Fish','fish')} eaten to the 1.05th power.`,
            `Unlock the ${toTextStyle('Core','core')}.`,
        ],

        'explore-1-name': `Arctic Ocean`,
        'explore-1-desc': `Reset your ${toTextStyle("Prestige",'prestige')} shards and ${toTextStyle("Prestige",'prestige')} upgrades. ${toTextStyle('Prestige','prestige')} Shards gain is rooted by 2.`,
        'explore-1-milestone': [
            `Unlock Auto-${toTextStyle('Shark','shark')} ${toTextStyle('Prestige','prestige')} upgrades.`,
            `Increase the resource and depth progression by 25% compounding per square-rooted ${toTextStyle('Shark','shark')} level.`,
            `${toTextStyle('Shark','shark')} ${toTextStyle('Prestige','prestige')} upgrades will no longer spend ${toTextStyle('Prestige','prestige')} shards.`,
            `Passively generate 100% of ${toTextStyle('Prestige','prestige')} shards earned on ${toTextStyle('Prestige','prestige')}.`,
        ],

        'explore-2-name': `Atlantic Ocean`,
        'explore-2-desc': `Reset your ${toTextStyle("Prestige",'prestige')} shards and ${toTextStyle("Prestige",'prestige')} upgrades. ${toTextStyle('Shark','shark')} Level scales 10x as strong.` ,
        'explore-2-milestone': [
            `'Shark Teeth' and 'Shark Exponent' scalings are weaker slightly.`,
            `Increase the resource and depth progression by 25% compounding per square-rooted ${toTextStyle('Shark','shark')} level.`,
            `${toTextStyle('Shark','shark')} Level's first scaling starts +1 later per 500m of depth.`,
            `${toTextStyle("Salt",'salt')}'s effect is 50% more powerful.`,
        ],

        'explore-3-name': `Southern Ocean`,
        'explore-3-desc': `Reset your ${toTextStyle("Prestige",'prestige')} shards and ${toTextStyle("Prestige",'prestige')} upgrades. You cannot buy ${toTextStyle('Shark','shark')} ${toTextStyle('Fish','fish')} & ${toTextStyle('Prestige','prestige')} upgrades.`,
        'explore-3-milestone': [
            `Increase the base of exploration by 10x.`,
            `Increase the resource and depth progression by 25% compounding per square-rooted ${toTextStyle('Shark','shark')} level.`,
            `${toTextStyle('Compressed Snow','snow')}'s effect is 50% more powerful.`,
        ],

        'explore-4-name': `Indian Ocean`,
        'explore-4-desc': `You are trapped in the first four active oceans, and your ${toTextStyle('Fish','fish')} exponent is raised to the 0.75th power.`,
        'explore-4-milestone': [
            `Decrease core radiation's limit by /1,000.`,
            `Increase the resource and depth progression by 25% compounding per square-rooted ${toTextStyle('Shark','shark')} level.`,
            `Core reactors scale +5 later.`,
            `Improve ${toTextStyle('Kelp','kelp')} better.`,
        ],

        // Core Reactor

        'core-0-name': `Iron`,
        'core-0-desc': `${toTextStyle("Fish",'fish')} raises itself based on <b>Iron</b>'s tier.`,

        'core-1-name': `Nickel`,
        'core-1-desc': `${toTextStyle("Prestige",'prestige')} shards raise their base based on <b>Nickel</b>'s tier.`,

        'core-2-name': `Oxygen`,
        'core-2-desc': `Product of the first four oceans' resources boosts their production based on <b>Oxygen</b>'s tier.`,

        'core-3-name': `Neon`,
        'core-3-desc': `${toTextStyle("Shark",'shark')} Level reduces its requirement based on <b>Neon</b>'s tier.`,

        'core-bonus': x => `Product of core reactors will boost ${toTextStyle("Fish",'fish')} by <h4>${formatMult(x)}</h4>.`,

        // Core Radiation

        'cr-start': x=>x?"Stop the experiment.":"Start the experiment.",

        'upgrade-cr': (gen,cost)=>`
        Upgrade the ${toTextStyle('Radiation '+icon("radioactive"),'core')} production.<br>
        Producing <b>${format(gen,0)}</b> per second.<br>
        Cost: ${format(cost,0)} ${toTextStyle('Fish '+icon("radioactive"),'fish')}`,

        'reset-cr': (inc)=>`Reset the ${toTextStyle('Radiation '+icon("radioactive"),'core')}, but increase its limit by <b>${formatMult(inc,0)}</b>, and sometimes add a new boost or upgrade the boosts. You need to reach the limit to reset.`,

        'cr-boosts': [
            x=>`Provide <h4>+${format(x)}</h4> bonus core reactors on the first row.`,
            x=>`Boost ${toTextStyle('Magmatic','core')} fragments by <h4>${formatMult(x)}</h4>.`,
            x=>`The first four ${toTextStyle('Shark','shark')} ${toTextStyle('Fish','fish')} upgrades are <h4>${formatPercent(x.sub(1))}</h4> more powerful.`,
            x=>`Second ${toTextStyle('Shark','shark')} level scaling is delayed by <h4>+${format(x)}</h4>.`,
            x=>`Increase the base of ${toTextStyle('Shark','shark')} level's ${toTextStyle('Magmatic','core')} fragment bonus by <h4>+${format(x,3)}</h4>.`,
        ],

        // Automation

        'auto-shark-name': `Auto-${toTextStyle("Shark","shark")} Level`,
        'auto-su-name': `Auto-${toTextStyle("Shark","shark")} ${toTextStyle("Fish","fish")} Upgrade`,
        'auto-spu-name': `Auto-${toTextStyle("Shark","shark")} ${toTextStyle("Prestige","prestige")} Upgrade`,
        'auto-eu-name': `Auto-Exploration Upgrade`,

        'auto-cost': (D,cost,name) => `Decrease Interval by ${formatReduction(D,0)}.<br>Cost: ${format(cost,0)} ${name}`,
        'auto-interval': (a,b,maxed) => `Interval: ${format(a,3)}s`+(maxed ? "" :` ➜ ${format(b,3)}s`),

        // Progress

        'progress-0-text': r => `Reach ${format(r)} total ${toTextStyle('Fish','fish')}`, 
        get 'progress-0-cond-text'() { return `Do a ${toTextStyle('Prestige','prestige')}` },

        'progress-1-text': r => `Reach ${format(r)} ${toTextStyle('Prestige','prestige')} shards to unlock Automation`,
        'progress-2-text': r => `Reach ${format(r)} ${toTextStyle('Prestige','prestige')} shards to unlock Research`,
        'progress-3-text': r => `Reach ${toTextStyle('Shark','shark')} Level ${format(r,0)} to unlock Exploration`,
        'progress-4-text': r => `Reach ${format(r)}m of Pacific ocean's depth to unlock the ${toTextStyle('Core','core')}`,

        'progress-5-text': r => `Reach ${format(r)} total ${toTextStyle('Prestige','prestige')} shards`, 
        get 'progress-5-cond-text'() { return `Enter the ${toTextStyle('Core','core')}` },

        'progress-6-text': r => `Reach ${format(r)} ${toTextStyle('Magmatic','core')} fragments to unlock the next core feature`, 

        'progress-7-text': r => `Reach ${toTextStyle('Shark','shark')} Level ${format(r,0)} to unlock new ocean type`, 

        'maxed-progress': "All features unlocked!",

        // Reset

        get 'reset-prestige-message'() {
            let p = toTextStyle('Prestige','prestige'), s = toTextStyle('Shark','shark'), f = toTextStyle('Fish','fish')
            return `
            <h3>${p}</h3><br>
            ${p} is the first reset layer. Prestiging resets your ${s}, ${s} upgrades, and ${f} for ${p} shards.
            First ${p} unlocks new ${s} upgrades.<br>
            <img src="textures/PrestigeShard.png"><br>
            Are you sure you want to prestige?
            `
        },
        get 'reset-core-message'() {
            let c = toTextStyle('Core','core'), m = toTextStyle('Magmatic','core'), p = toTextStyle('Prestige','prestige')
            return `
            <h3>The ${c}</h3><br>
            The ${c} is the second reset layer. Entering the core resets everything ${p} does, as well as ${p} shards, ${p} upgrades, ${toTextStyle('Research','prestige')} (almost), and Exploration for ${m} fragments.
            It also unlocks the ${c} reactor.<br>
            <img src="textures/Magmatic.png"><br>
            Are you sure you want to enter the core?
            `
        },
        
        // Other

        'upgrade-shark': x => `Upgrade ${toTextStyle('Shark','shark')} Level<br>Cost: ${x.format(0)} ${toTextStyle('Fish','fish')}`,
        'shark-bonus-fish': x => `+${x.format(0)} ${toTextStyle('Fish','fish')}'s base`,
        'shark-bonus-prestige': x => `${formatMult(x)} ${toTextStyle('Prestige','prestige')} shard`,
        'shark-bonus-core': x => `${formatMult(x)} ${toTextStyle('Magmatic','core')} fragments`,
        // 'shark-bonus-rad': x => `${formatMult(x)} ${toTextStyle('Radiation ' + icon("radioactive"),'core')}`,

        'level': "Level",
        'effect': "Effect",
        'cost': "Cost",
        'buyMax': "Buy Max",
        'require': "Require",
        'next-at': "Next at",
        'depth': "Depth",

        'offline-time-text': x=>`You have been offline for <b>${formatTime(x,0)}</b>.`,

        'research-afford': bool => bool ? "Purchase" : "Can't Afford",
        'research-bought': bool => bool ? `<b>Purchased</b>` : `<b>Not Purchased</b>`,

        'off-on': bool => bool ? "ON" : "OFF",

        'popup-buttons': [
            ["Yes","No"],
            ["Ok","Cancel"],
        ],

        'popup-desc' : {
            import: `Paste in your save. WARNING: WILL OVERWRITE YOUR CURRENT SAVE!`,
            wipe: `Are you sure you want to wipe your save? To wipe, type "<span class="free-select">I'm sorry what I don't want sharks!</span>"`,
        },

        'notify-desc' : {
            save: "Game Saved!",
        },

        'radio-desc' : {
            'notation': ['Formatting Notation',['Scientific','Standard','Mixed Scientific']],
            'comma-format': ['Maximum OoMs of Number Commas',['3','6','9','12','15']],
            'autosave': ['Autosaving',['Disabled','Enabled']],
            'autosave-time': ['Autosave Interval',['15s','30s','60s','120s']],
            'offline': ['Offline Progress',['Disabled','Enabled']],
        },

        'radio-desc-default' : ['Disabled','Enabled'],

        'prompt-placeholder': "Type text here...",

        'option-buttons-text': ["Save","Export to clipboard","Export as file","Import from prompt","Import from file","WIPE!!!",'Join the community (Discord)','Support the creator (Boosty)'],

        'confirm-prestige': "Prestige",
        'confirm-core': "Enter the Core",
    },
}
        'confirm-core': "Вход в ядро",
    },
}
