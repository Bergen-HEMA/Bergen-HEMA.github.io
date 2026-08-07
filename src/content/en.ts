import type { SiteContent } from './types';

/**
 * English — a full translation, not a summary. The old site had a single
 * English stub page; visiting fencers, exchange students and people who have
 * just moved to Bergen are a real part of the club's intake, so every page
 * exists here too.
 *
 * Written for someone who does not read Norwegian and may not know Bergen, so
 * a few places carry a little extra explanation (Spond, Vipps, the venue).
 */
export const en: SiteContent = {
  meta: {
    home: {
      title: 'Bergen HEMA — historical martial arts, trained the modern way',
      description:
        'Bergen HEMA is one of Norway’s leading historical European martial arts clubs. We train German longsword at Årstad VGS every Thursday. Beginners welcome — your first session is free.',
    },
    membership: {
      title: 'Training and membership',
      description:
        'Training times, the venue, what to bring and what membership of Bergen HEMA costs. You need no previous experience and no equipment of your own to start.',
    },
    equipment: {
      title: 'Equipment',
      description:
        'Beginners only need sportswear, indoor shoes and a water bottle — we provide swords and protective gear. Here is the guide to a full kit for when you want your own.',
    },
    groups: {
      title: 'Companies and groups',
      description:
        'Team building, stag and hen parties and other events built around historical fencing. Bergen HEMA supplies swords, masks and gloves for every participant.',
    },
    about: {
      title: 'About the club',
      description:
        'Bergen HEMA is a volunteer organisation promoting historical European martial arts in Bergen. The club was founded in autumn 2014. Meet the board and read our bylaws.',
    },
    contact: {
      title: 'Contact',
      description:
        'Get in touch with Bergen HEMA at post@bergenhema.no, on Spond or on social media. We train at Årstad VGS, Fjøsangerveien 38 in Bergen.',
    },
  },

  home: {
    hero: {
      eyebrow: 'Bergen · Since 2014',
      title: 'Historical martial arts, trained the modern way',
      lead: 'We are one of Norway’s leading historical European martial arts clubs, training the German longsword of the late medieval period and the Renaissance.',
      primary: 'Try a free session',
      secondary: 'What is HEMA?',
    },

    what: {
      eyebrow: 'HEMA in brief',
      title: 'Real fighting systems, lifted back out of old books',
      body: [
        'HEMA stands for <strong>Historical European Martial Arts</strong>, a fast-growing combat sport dedicated to reconstructing European fighting systems from the medieval period through to the late nineteenth century.',
        'Most practitioners focus on some form of swordsmanship, but people also train wrestling, dagger, boxing and staff fighting, among other things.',
        'At Bergen HEMA our main focus is fencing with the German longsword of the late medieval period and the Renaissance. We run training for beginners and experienced fencers alike.',
      ],
    },

    forMe: {
      eyebrow: 'Is HEMA for me?',
      title: 'Almost certainly yes',
      lead: 'HEMA suits anyone who wants to train with a sword, have fun, get fitter, make new friends and connect with Europe’s martial and cultural heritage.',
      points: [
        {
          title: 'No experience needed',
          body: 'Everyone starts somewhere. The instructors take you through what you need from your very first session, and you train alongside people at your own level.',
        },
        {
          title: 'No equipment needed',
          body: 'The club provides swords, masks and enough protective gear to train safely. Bring sportswear, indoor shoes with a non-marking sole and a water bottle.',
        },
        {
          title: 'No need to be in great shape',
          body: 'Fitness comes from training. Fencing is technical before it is physical, and you decide how hard you go.',
        },
        {
          title: 'Everyone over 18 is welcome',
          body: 'From 16 to 18 you can train with written consent from a parent or guardian. We have members of all ages, and women and men train together.',
        },
      ],
    },

    heritage: {
      eyebrow: 'European martial arts',
      title: 'Six hundred years of tradition',
      body: [
        'Europe has a long and rich martial tradition, documented in manuscripts and manuals describing fencing with various swords, wrestling, staff fighting and more — produced and published from the early fourteenth century right through to the late nineteenth.',
        'The HEMA movement works to bring these fighting systems out of obscurity and off the page into the present day. We often say that we train historical European fencing in a modern wrapper, with modern protective equipment and modern training methods.',
      ],
    },

    longsword: {
      eyebrow: 'German longsword',
      title: 'The Liechtenauer tradition',
      body: [
        'At Bergen HEMA we focus on what is usually called the German longsword tradition, or Liechtenauer longsword.',
        'Liechtenauer was a fencing master who lived in Germany in the fourteenth century. He inspired a fencing tradition that lasted more than two hundred years, and over a dozen later masters wrote their own manuscripts claiming a direct line back to Liechtenauer himself.',
      ],
    },

    start: {
      eyebrow: 'Getting started',
      title: 'Three steps to your first session',
      lead: 'You are welcome to simply turn up, but we appreciate a heads-up so we know to expect you.',
      steps: [
        {
          title: 'Sign up on Spond',
          body: 'The club uses Spond — a free app for sports teams — for attendance and payments. Register for a session there so we know you are coming and can set gear aside for you.',
        },
        {
          title: 'Come along on Thursday',
          body: 'Bring sportswear, indoor shoes with a non-marking sole and a water bottle. Arriving ten minutes early gives us time to say hello and find kit that fits.',
        },
        {
          title: 'Borrow gear and join in',
          body: 'The club lends you a sword, a mask and protective equipment. Your first session is free — if you are still keen afterwards, you sign up as a member.',
        },
      ],
    },

    faq: {
      eyebrow: 'Frequently asked',
      title: 'What people want to know',
      items: [
        {
          q: 'Is it dangerous?',
          a: 'We train with blunt steel training swords and wear fencing masks, gloves and padding as the intensity goes up. Bruises happen; serious injuries very rarely do. Instructors control the intensity, and you decide how hard you want to go.',
        },
        {
          q: 'Do I need to be fit?',
          a: 'No. Fencing is technical before it is physical, and you train at your own pace. Most people find the fitness arrives on its own after a few weeks.',
        },
        {
          q: 'Do I need my own equipment?',
          a: 'No. The club lends out swords, masks and the protective gear you need. Bring sportswear, indoor shoes with a non-marking sole and a water bottle. Most people gradually buy their own kit, a piece at a time.',
        },
        {
          q: 'Can I just turn up?',
          a: 'Yes. We prefer that you register on Spond first, but you are welcome to simply drop by on a Thursday.',
        },
        {
          q: 'Is this the same as LARP or a knight show?',
          a: 'No. HEMA is a combat sport based on historical fencing manuals, not role-play or performance. There are no costumes and no choreography — the point is to get good at fencing.',
        },
        {
          q: 'Do I need to speak Norwegian?',
          a: 'No. Training is often run in Norwegian, but everyone in the club speaks English and we switch happily. Several of our members do not speak Norwegian.',
        },
        {
          q: 'How old do I have to be?',
          a: 'You must be 18. From 16 to 18 you can train with written consent from a parent or guardian.',
        },
      ],
    },

    cta: {
      title: 'See you on Thursday',
      lead: 'Your first session is free, and you need nothing but sportswear, indoor shoes and a water bottle.',
    },
  },

  membership: {
    eyebrow: 'Training and membership',
    title: 'How to train with us',
    lead: 'Everything you need to know before your first session — and what it costs to keep coming.',

    who: {
      title: 'Who can train?',
      body: [
        'Bergen HEMA is open to everyone over 18. From 16 to 18 you can train with written consent from a parent or guardian.',
        'You need no previous experience and no special equipment to start training with Bergen HEMA.',
      ],
    },

    bring: {
      title: 'What should I bring?',
      lead: 'Bring these, and we will supply the rest:',
      items: ['Sportswear', 'Indoor shoes with a non-marking sole', 'Water bottle'],
      note: 'The club provides swords and enough protective equipment to train safely.',
    },

    venue: {
      title: 'The venue',
      body: [
        'We train in the gym hall at Årstad videregående skole, Fjøsangerveien 38 in Bergen.',
        'The entrance is round the back on the right-hand side of the school as you arrive from Danmarks plass. There is parking directly outside.',
      ],
    },

    times: {
      title: 'Training times',
      body: [
        'Regular training is <strong>Thursdays, 17:00–19:00</strong>.',
        'Open sparring and other activities outside regular training are announced on Spond and on the Bergen HEMA Discord server.',
      ],
    },

    fees: {
      title: 'Membership fees',
      lead: 'Everyone who trains regularly with Bergen HEMA pays a training fee. You can pay per semester or per year.',
      rows: [
        { label: 'One semester', amount: 800, note: 'Same price as the beginners’ course' },
        { label: 'One year', amount: 1300, note: 'Membership fee included' },
        {
          label: 'Supporting membership',
          amount: 100,
          note: 'Membership fee only, if you are not training right now',
        },
      ],
      rights:
        'As a member you have the right to attend and vote at Bergen HEMA’s annual general meeting. A supporting membership is a full membership with voting rights, for those who want to support the club or cannot train at the moment.',
      payment: {
        title: 'Payment',
        body: [
          'Fees are normally paid through <a href="https://spond.com/invite/FUOAS">Spond</a>.',
          'You can also pay directly to Bergen HEMA’s bank account, or by Vipps — the Norwegian mobile payment app.',
        ],
      },
      reference:
        'Please label the payment “full name + type of payment (spring/autumn/year/member) + year”, for example “Kari Nordmann spring 2026”.',
    },
  },

  equipment: {
    eyebrow: 'Equipment',
    title: 'From water bottle to full kit',
    lead: 'You need almost nothing to start. As you keep training you gradually build up a kit, until you have everything needed for full-intensity sparring.',

    beginner: {
      title: 'What do I need right now?',
      body: [
        'Beginners only need a <strong>water bottle, sportswear and indoor shoes</strong> with a non-marking sole. The club provides swords and enough protective gear to train safely.',
        'Once you have been training for a while you will normally build up your own kit piece by piece, until you have everything needed for full-intensity sparring. There is no rush — ask the instructors for advice before you buy anything.',
      ],
    },

    fullTitle: 'A full kit',
    fullLead:
      'This is what you need for full-intensity sparring and for competing in tournaments. The links go to suppliers our members have had good experiences with.',

    groups: [
      {
        title: 'Head and neck',
        items: [
          {
            title: 'Mask',
            body: 'Most solid FIE-certified fencing masks are good enough. We recommend buying a 1600N mask, which gives solid protection while sparring and is accepted at tournaments. Options include <a href="https://allstar.de" target="_blank" rel="noopener">Allstar</a>, <a href="https://leonpaul.com/" target="_blank" rel="noopener">Leon Paul</a>, <a href="https://pbthistoricalfencing.com/" target="_blank" rel="noopener">PBT Historical Fencing</a> and <a href="https://www.afinternationalsporting.com" target="_blank" rel="noopener">Absolute Force</a>.',
          },
          {
            title: 'Back-of-head protection',
            body: 'Several good brands, for instance <a href="https://allstar.de/" target="_blank" rel="noopener">Allstar</a>, <a href="https://pbthistoricalfencing.com/" target="_blank" rel="noopener">PBT Historical Fencing</a>, <a href="https://histfenc.eu/en/" target="_blank" rel="noopener">SPES</a> and <a href="https://afinternationalsporting.com/" target="_blank" rel="noopener">Absolute Force</a>.',
          },
          {
            title: 'Throat protection',
            body: 'Several good brands, for instance <a href="https://allstar.de" target="_blank" rel="noopener">Allstar</a>, <a href="https://pbthistoricalfencing.com/" target="_blank" rel="noopener">PBT Historical Fencing</a> and <a href="https://afinternationalsporting.com" target="_blank" rel="noopener">Absolute Force</a>.',
          },
        ],
      },
      {
        title: 'Hands',
        items: [
          {
            title: 'Gloves',
            body: 'Some of the best gloves on the market are without doubt <a href="https://sparringglove.com/" target="_blank" rel="noopener">Sparring Gloves</a> and <a href="https://histfenc.eu/en/" target="_blank" rel="noopener">SPES Lobster Gloves</a>. They strike the best balance between mobility and protection, and both have very good customer service.',
          },
        ],
      },
      {
        title: 'Body',
        items: [
          {
            title: 'Jacket',
            body: 'A very good option is the Axel Pettersson jacket from Polish maker <a href="https://histfenc.eu/en/" target="_blank" rel="noopener">SPES</a>. The standard sizes fit most people, but you can also have one made to measure.',
          },
          {
            title: 'Knee and elbow protection',
            body: 'Good knee and elbow pads can be found in sports shops, motorcycle shops or army surplus stores.',
          },
          {
            title: 'Shin guards',
            body: 'Available from any ordinary sports shop.',
          },
          {
            title: 'Groin protection',
            body: 'Available from any ordinary sports shop.',
          },
        ],
      },
      {
        title: 'Swords',
        items: [
          {
            title: 'Training swords',
            body: 'The training swords from <a href="https://regenyei.com/" target="_blank" rel="noopener">Peter Regenyei</a> in Hungary are very good and offer a lot for the money. Another favourite in the club is <a href="https://sigiforge.com/" target="_blank" rel="noopener">SIGI Forge</a>.',
          },
        ],
      },
      {
        title: 'Clothing and shoes',
        items: [
          {
            title: 'Shoes',
            body: 'Should have a flat or partly flat sole. Indoor football shoes are often a good option.',
          },
          {
            title: 'Shorts and trousers',
            body: 'Goalkeeper trousers work well and are sold in any sports shop. Some makers produce trousers specifically for HEMA, such as <a href="https://pbthistoricalfencing.com/" target="_blank" rel="noopener">PBT Historical Fencing</a>, <a href="https://histfenc.eu/en/" target="_blank" rel="noopener">SPES</a> and <a href="https://afinternationalsporting.com" target="_blank" rel="noopener">Absolute Force</a>.',
          },
          {
            title: 'Socks',
            body: 'Football socks from any ordinary sports shop.',
          },
        ],
      },
    ],

    outro:
      'Not sure what to buy first? Ask the instructors at training — they tend to have strong opinions, and you can try other people’s gear before committing.',
  },

  groups: {
    eyebrow: 'Companies and groups',
    title: 'Swords as team building',
    lead: 'Bergen HEMA offers an unusual twist on team building, stag and hen parties and other events. No participant needs any experience — we take you through it all from scratch.',

    offerings: [
      {
        title: 'Team building',
        body: [
          'Does your company fancy a different kind of team building? Do you have unfinished business with your boss?',
          'Get an introduction to historical fencing, rounded off with a light-hearted mini-tournament. It suits groups of mixed fitness and experience — it is more about thinking than muscle.',
        ],
      },
      {
        title: 'Stag and hen parties',
        body: [
          'Want to give the bride or groom something they will not forget?',
          'Bergen HEMA can give your group an introduction to historical fencing that lifts both the mood and the heart rate. Among other things, we have helped a groom defend his bride against kidnapping.',
        ],
      },
    ],

    included: {
      title: 'What we provide',
      items: [
        'Swords, masks and gloves for every participant',
        'Experienced instructors who run the whole session',
        'Warm-up, technique introduction and sparring',
        'A light-hearted mini-tournament to finish',
      ],
    },

    cta: {
      title: 'Sound like your kind of thing?',
      lead: 'Get in touch and we will put together something that fits your group, its size and the time you have.',
      button: 'Get in touch',
    },
  },

  about: {
    eyebrow: 'About the club',
    title: 'A volunteer club in Bergen',
    lead: 'Run by its members, for its members — since 2014.',
    body: [
      'Bergen HEMA is a volunteer organisation set up to promote HEMA — Historical European Martial Arts — and related activities in Bergen.',
      'The club was founded in autumn 2014 by Knut Bonan, Petter Brodin, Daniel Flokenes and Margit Reiersen, all practitioners with many years of HEMA behind them.',
      'Today we are one of Norway’s leading historical European martial arts clubs, running German longsword training for beginners and experienced fencers alike.',
    ],

    boardTitle: 'The board',
    boardLead: 'The board is elected by the members at the annual general meeting.',

    bylaws: {
      title: 'Bylaws',
      body: [
        'Bergen HEMA’s bylaws set out how the club is governed, what rights members have and how the annual general meeting works. They are available in Norwegian only.',
      ],
      linkLabel: 'Download the bylaws (PDF, Norwegian)',
    },
  },

  contact: {
    eyebrow: 'Contact',
    title: 'Get in touch',
    lead: 'Questions about membership, training, events or anything else? We are happy to help.',

    emailTitle: 'Email',
    emailBody: 'The surest way to reach us. We normally reply within a couple of days.',

    spondTitle: 'Spond',
    spondBody:
      'The club uses Spond for attendance, announcements and payments. If you are heading to your first session, this is where you sign up.',

    socialTitle: 'Social media',
    socialBody: 'News, and photos from training and tournaments.',

    visitTitle: 'Come and visit',
    visitBody: [
      'We train in the gym hall at Årstad videregående skole every Thursday from 17:00 to 19:00.',
    ],
    directions:
      'The entrance is round the back on the right-hand side of the school as you arrive from Danmarks plass. There is parking directly outside.',
    mapLink: 'Show on map',
  },
};
