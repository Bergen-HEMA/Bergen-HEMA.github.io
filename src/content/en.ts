import { site } from '../site';
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
        'Bergen HEMA is one of Norway’s leading historical European martial arts clubs. We train German longsword at Årstad VGS every Thursday. We take in new members in September and January, and the intake period is free.',
    },
    membership: {
      title: 'Training and membership',
      description:
        'Training times, the venue, what to bring and what membership of Bergen HEMA costs. You need no previous experience and no equipment of your own to start.',
    },
    equipment: {
      title: 'Equipment',
      description:
        'Beginners only need sportswear, indoor shoes and a water bottle — we provide swords and protective gear. Here are the equipment requirements for nylon and steel when you want your own.',
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
        'The quickest reply comes via Instagram or Facebook, but you can also reach Bergen HEMA at post@bergenhema.no, on Spond or on Discord. We train at Årstad VGS, Fjøsangerveien 38 in Bergen.',
    },
  },

  home: {
    hero: {
      eyebrow: 'Bergen · Since 2014',
      title: 'Historical martial arts, trained the modern way',
      lead: 'We are one of Norway’s leading historical European martial arts clubs, training the German longsword of the late medieval period and the Renaissance.',
      primary: 'Try free at the start of term',
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
      lead: 'We take in new members in September and from January to mid-February. The whole intake period is free.',
      steps: [
        {
          title: 'Sign up on Spond',
          body: 'The club uses Spond — a free app for sports teams — for attendance and payments. Register for a session there so we know you are coming and can set gear aside for you.',
        },
        {
          title: 'Come along on Thursday',
          body: 'Bring sportswear, indoor shoes with a non-marking sole and a water bottle. Arriving ten minutes early for your first session gives us time to say hello and find kit that fits.',
        },
        {
          title: 'Borrow gear and join in',
          body: 'The club lends you a sword, a mask and protective equipment. The whole intake period is free — if you are still keen afterwards, you sign up as a member.',
        },
      ],
    },

    faq: {
      eyebrow: 'Frequently asked',
      title: 'What people want to know',
      items: [
        {
          q: 'When can I start?',
          a: 'We take in new members twice a year, at the start of each semester: in September, and from January to mid-February. That whole period is free, and you only pay if you want to carry on afterwards. If you already train HEMA, you can start at any time of year.',
        },
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
          a: 'During an intake period, yes — we prefer that you register on Spond first, but you are welcome to simply drop by on a Thursday. Outside those periods, wait for the next intake, unless you already train HEMA. In that case get in touch and we will sort something out.',
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
      lead: 'The intake period is free, and you need nothing but sportswear, indoor shoes and a water bottle.',
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

    intake: {
      title: 'When can I start?',
      lead: 'We take in new members at the start of each semester, twice a year:',
      windows: [
        { label: 'September', note: 'Autumn semester' },
        { label: 'January to mid-February', note: 'Spring semester' },
      ],
      free: 'The whole intake period is free. If you want to keep training afterwards, you sign up as a member and pay the training fee.',
      experienced:
        'Already train HEMA? Then you can start at any time of year — send us an email, or drop by on a Thursday.',
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
        'Regular training is <strong>Tuesdays, 19:00–21:00</strong> and <strong>Thursdays, 17:00–19:00</strong>.',
        `Open sparring and other activities outside regular training are announced on Spond and on the <a href="${site.links.discord}" target="_blank" rel="noopener">Bergen HEMA Discord server</a>.`,
      ],
    },

    fees: {
      title: 'Membership fees',
      lead: 'The intake period is free. If you want to keep training afterwards, you pay a training fee — either per semester or for the whole year.',
      rows: [
        { label: 'One semester', amount: site.prices.semester, note: 'Spring or autumn' },
        { label: 'One year', amount: site.prices.year, note: 'Membership fee included' },
        {
          label: 'Supporting membership',
          amount: site.prices.supporting,
          note: 'Membership fee only, if you are not training right now',
        },
      ],
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

    fullTitle: 'Equipment requirements',
    fullLead:
      'What you need to own depends on what you spar with. Nylon asks very little of you; steel needs a full kit. Below is the short version — the complete list of requirements, recommendations and suppliers is kept up to date in the club’s equipment document.',

    requirements: [
      {
        title: 'Nylon',
        lead: 'To fence with nylon swords at Bergen HEMA you need the following.',
        required: [
          'Fencing mask',
          'Gloves — Red Dragon or equivalent/better protection',
          'Groin protection (for men)',
        ],
        recommended: ['Plastron (for women)'],
      },
      {
        title: 'Steel',
        lead: 'Fencing with steel needs a full kit. Steel gauntlets are not permitted for sparring within the club.',
        required: [
          'Fencing mask with an overlay — the overlay must cover the back of the head',
          'Neck protector',
          'Gloves suitable for longsword',
          'Fencing jacket with adequate padding, enough overlap at the front and no gaps under the arms',
          'Knee and elbow protectors',
          'Groin protection (for men)',
        ],
        recommended: [
          'Plastron (for women)',
          'Forearm and shin protectors',
          'Fencing trousers',
          '350N or higher on jacket and trousers — also the usual tournament requirement',
        ],
      },
    ],

    doc: {
      title: 'The equipment document',
      body: [
        'The club keeps a separate document with every equipment requirement, concrete recommendations for masks, gloves, jackets, trousers and protectors, and our own verdicts on the models available today.',
        'It also lists the suppliers we hold a club discount with — The Knight Shop, Faits’d armes and SPES.',
        'The document is written in Norwegian, with an English translation further down the page.',
      ],
      linkLabel: 'Open the equipment document',
    },

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
    lead: 'Questions about membership, training, events or anything else? The quickest and easiest way to reach us is a message on Instagram or Facebook, but you are just as welcome to send an email.',

    emailTitle: 'Email',
    emailBody: 'If you would rather write an email, that works too. We normally reply within a couple of days.',

    spondTitle: 'Spond',
    spondBody:
      'The club uses Spond for attendance, announcements and payments. If you are heading to your first session, this is where you sign up.',

    discordTitle: 'Discord',
    discordBody:
      'The club uses Discord for internal communication — planning, open sparring and chat between sessions. All members are welcome to join.',

    socialTitle: 'Social media',
    socialBody:
      'The quickest route to an answer: send us a message on Instagram or Facebook. We also post news and photos from training and tournaments here.',

    visitTitle: 'Come and visit',
    visitBody: [
      'We train in the gym hall at Årstad videregående skole every Thursday from 17:00 to 19:00.',
    ],
    directions:
      'The entrance is round the back on the right-hand side of the school as you arrive from Danmarks plass. There is parking directly outside.',
    mapLink: 'Show on map',
  },
};
