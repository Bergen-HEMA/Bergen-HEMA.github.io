import type { SiteContent } from './types';

/**
 * Norsk (bokmål) — hovedspråket på nettstedet.
 *
 * Teksten er hentet fra den gamle WordPress-siden og lettere omarbeidet for
 * den nye strukturen. Fakta som priser, kontonummer og treningstider ligger
 * ikke her, men i `src/site.ts`, slik at de bare finnes ett sted.
 */
export const no: SiteContent = {
  meta: {
    home: {
      title: 'Bergen HEMA — historisk kampsport i moderne innpakning',
      description:
        'Bergen HEMA er en av Norges fremste klubber innen historisk europeisk kampsport. Vi trener tysk langsverdfekting på Årstad VGS hver torsdag. Nybegynnere er velkomne — første trening er gratis.',
    },
    membership: {
      title: 'Trening og medlemskap',
      description:
        'Treningstider, treningslokale, hva du må ta med og hva medlemskap i Bergen HEMA koster. Du trenger ingen forkunnskaper eller eget utstyr for å begynne.',
    },
    equipment: {
      title: 'Utstyr',
      description:
        'Nybegynnere trenger bare treningstøy, innesko og vannflaske — vi stiller med sverd og beskyttelse. Her er guiden til fullt utstyr når du vil skaffe ditt eget.',
    },
    groups: {
      title: 'Bedrift og grupper',
      description:
        'Teambuilding, utdrikningslag og andre arrangementer med historisk fekting. Bergen HEMA stiller med sverd, masker og hansker til alle deltakere.',
    },
    about: {
      title: 'Om klubben',
      description:
        'Bergen HEMA er en frivillig organisasjon som fremmer historisk europeisk kampsport i Bergen. Klubben ble startet høsten 2014. Her finner du styret og vedtektene.',
    },
    contact: {
      title: 'Kontakt',
      description:
        'Ta kontakt med Bergen HEMA på post@bergenhema.no, på Spond eller i sosiale medier. Vi trener på Årstad VGS i Fjøsangerveien 38 i Bergen.',
    },
  },

  home: {
    hero: {
      eyebrow: 'Bergen · Siden 2014',
      title: 'Historisk kampsport i moderne innpakning',
      lead: 'Vi er en av Norges fremste klubber innen historisk europeisk kampsport, og trener tysk langsverdfekting fra senmiddelalderen og renessansen.',
      primary: 'Prøv en gratis trening',
      secondary: 'Hva er HEMA?',
    },

    what: {
      eyebrow: 'Kort om HEMA',
      title: 'Ekte kampsystemer, hentet ut av gamle bøker',
      body: [
        'HEMA står for <strong>Historical European Martial Arts</strong>, og er en hurtig voksende kampsport som er fokusert på å gjenskape historiske europeiske kampsystemer fra middelalderen og frem til sent 1800-tall.',
        'Hovedfokuset for de fleste er på forskjellige former for sverdfekting, men i tillegg til fekting trenes det også blant annet bryting, dolk, boksing og stavkamp.',
        'I Bergen HEMA er vårt hovedfokus på fekting med tysk langsverd fra senmiddelalderen og renessansen. Vi holder kurs for både nybegynnere og viderekomne utøvere.',
      ],
    },

    forMe: {
      eyebrow: 'Er HEMA noe for meg?',
      title: 'Sannsynligvis ja',
      lead: 'HEMA passer for alle som har lyst til å trene med sverd, ha det gøy, komme i bedre form, få nye venner og komme i kontakt med den europeiske kampsport- og kulturarven.',
      points: [
        {
          title: 'Du trenger ingen forkunnskaper',
          body: 'Alle begynner et sted. Instruktørene tar deg gjennom det du trenger fra første trening, og du trener sammen med folk på ditt eget nivå.',
        },
        {
          title: 'Du trenger ikke eget utstyr',
          body: 'Klubben stiller med sverd, maske og tilstrekkelig beskyttelsesutstyr. Ta med treningstøy, innesko med lys såle og en vannflaske.',
        },
        {
          title: 'Du trenger ikke være i toppform',
          body: 'Formen kommer av å trene. Fekting er teknisk før det er fysisk, og du styrer selv hvor hardt du går ut.',
        },
        {
          title: 'Alle over 18 er velkomne',
          body: 'Fra 16 til 18 år kan du trene med skriftlig samtykke fra foresatte. Vi har medlemmer i alle aldre, og både kvinner og menn trener sammen.',
        },
      ],
    },

    heritage: {
      eyebrow: 'Europeisk kampsport',
      title: 'En tradisjon på 600 år',
      body: [
        'Europa har en lang og rik kampsporttradisjon og -historie, med mange manuskripter og manualer som beskriver fekting med forskjellige sverd, bryting, stavkamp og mer, produsert og publisert helt fra rundt starten av 1300-tallet og frem til sent på 1800-tallet.',
        'HEMA-bevegelsen strever for å bringe disse kampformene ut av forglemmelsen og bøkene og inn i nåtiden. Vi sier ofte at vi trener historisk europeisk fekting i en moderne innpakning, med moderne beskyttelsesutstyr og treningsmetoder.',
      ],
    },

    longsword: {
      eyebrow: 'Tysk langsverd',
      title: 'Liechtenauer-tradisjonen',
      body: [
        'I Bergen HEMA fokuserer vi på det som ofte kalles den tyske langsverdtradisjonen, eller Liechtenauer-langsverd.',
        'Liechtenauer var en fektemester som levde i Tyskland på 1300-tallet. Han inspirerte en over 200 år lang fektetradisjon, og det er over et dusin senere fektemestere som forfattet sine egne manuskripter og hadde — eller hevdet å ha — en direkte linje til Liechtenauer selv.',
      ],
    },

    start: {
      eyebrow: 'Slik kommer du i gang',
      title: 'Tre steg til første trening',
      lead: 'Du kan møte opp uten påmelding, men vi setter pris på at du sier fra så vi vet at du kommer.',
      steps: [
        {
          title: 'Meld deg på i Spond',
          body: 'Klubben bruker Spond til treningsoppmøte og betaling. Meld deg på treningen der, så vet vi at du kommer og kan sette av utstyr til deg.',
        },
        {
          title: 'Møt opp på torsdag',
          body: 'Ta med treningstøy, innesko med lys såle og en vannflaske. Kom gjerne ti minutter før, så rekker vi å hilse og finne utstyr som passer.',
        },
        {
          title: 'Lån utstyr og bli med',
          body: 'Du får låne sverd, maske og beskyttelse av klubben. Den første treningen er gratis — er du fortsatt gira etterpå, melder du deg inn.',
        },
      ],
    },

    faq: {
      eyebrow: 'Ofte stilte spørsmål',
      title: 'Det folk lurer på',
      items: [
        {
          q: 'Er det farlig?',
          a: 'Vi trener med stumpe treningssverd i stål, og bruker fektemaske, hansker og polstring når intensiteten går opp. Blåmerker forekommer, alvorlige skader gjør det svært sjelden. Instruktørene styrer intensiteten, og du bestemmer selv hvor hardt du vil gå ut.',
        },
        {
          q: 'Må jeg være i god form?',
          a: 'Nei. Fekting er teknisk før det er fysisk, og du trener i ditt eget tempo. De fleste opplever at formen kommer av seg selv etter noen uker.',
        },
        {
          q: 'Trenger jeg eget utstyr?',
          a: 'Nei. Klubben låner ut sverd, maske og nødvendig beskyttelse. Du tar med treningstøy, innesko med lys såle og en vannflaske. Etter hvert skaffer de fleste seg eget utstyr, litt om gangen.',
        },
        {
          q: 'Kan jeg bare møte opp?',
          a: 'Ja. Vi setter pris på at du melder deg på i Spond først, men du er velkommen til å bare komme innom en torsdag.',
        },
        {
          q: 'Er dette det samme som LARP eller riddershow?',
          a: 'Nei. HEMA er en kampsport basert på historiske fektemanualer, ikke rollespill eller oppvisning. Vi har ingen kostymer, og det er ingen koreografi — det handler om å bli god til å fekte.',
        },
        {
          q: 'Hvor gammel må jeg være?',
          a: 'Du må være fylt 18 år. Fra 16 til 18 år kan du trene med skriftlig samtykke fra foresatte.',
        },
      ],
    },

    cta: {
      title: 'Vi ses på torsdag',
      lead: 'Første trening er gratis, og du trenger ikke ta med annet enn treningstøy, innesko og en vannflaske.',
    },
  },

  membership: {
    eyebrow: 'Trening og medlemskap',
    title: 'Slik trener du med oss',
    lead: 'Alt du trenger å vite før du kommer på din første trening — og hva det koster å bli med videre.',

    who: {
      title: 'Hvem kan trene?',
      body: [
        'Bergen HEMA er åpen for alle over 18 år. Fra 16 til 18 år kan man trene med foresattes skriftlige samtykke.',
        'Du trenger ikke noen forkunnskaper eller spesialutstyr for å begynne å trene i Bergen HEMA.',
      ],
    },

    bring: {
      title: 'Hva må jeg ta med?',
      lead: 'Ta med dette, så stiller vi med resten:',
      items: ['Treningstøy', 'Innesko med lys såle', 'Vannflaske'],
      note: 'Klubben stiller med sverd og tilstrekkelig beskyttelsesutstyr.',
    },

    venue: {
      title: 'Treningslokale',
      body: [
        'Vi trener i gymsalen på Årstad videregående skole, Fjøsangerveien 38 i Bergen.',
        'Inngangen finner du bak til høyre for Årstad skole når du ankommer fra Danmarks plass. Det finnes parkeringsplasser rett utenfor.',
      ],
    },

    times: {
      title: 'Treningstider',
      body: [
        'Fast trening er <strong>torsdager 17:00–19:00</strong>.',
        'Open sparring og andre aktiviteter utenom faste treninger blir annonsert på Spond og på Discord-serveren til Bergen HEMA.',
      ],
    },

    fees: {
      title: 'Medlemskontingent',
      lead: 'Alle som trener fast med Bergen HEMA må betale treningskontingent. Det kan gjøres enten for hvert semester eller for hvert år.',
      rows: [
        { label: 'Ett semester', amount: 800, note: 'Samme pris som nybegynnerkurset' },
        { label: 'Ett år', amount: 1300, note: 'Inkluderer medlemsavgift' },
        {
          label: 'Støttemedlemskap',
          amount: 100,
          note: 'Kun medlemsavgift, for deg som ikke trener nå',
        },
      ],
      rights:
        'Som medlem har du rett til å delta og stemme ved Bergen HEMAs årsmøter. Støttemedlemskap gir et fullverdig medlemskap med stemmerett, for deg som ønsker å støtte klubben eller ikke har mulighet til å trene akkurat nå.',
      payment: {
        title: 'Betaling',
        body: [
          'Medlemskontingenten betales normalt via <a href="https://spond.com/invite/FUOAS">Spond</a>.',
          'Innbetalinger kan alternativt gjøres til Bergen HEMAs bankkonto eller over Vipps.',
        ],
      },
      reference:
        'Merk betalingen med «fullt navn + type betaling (vår/høst/år/medlem) + år», for eksempel «Kari Nordmann vår 2026».',
    },
  },

  equipment: {
    eyebrow: 'Utstyr',
    title: 'Fra vannflaske til fullt utstyr',
    lead: 'Du trenger nesten ingenting for å begynne. Etter hvert som du trener, skaffer du deg gradvis mer — helt til du har fullt utstyr for sparring i full intensitet.',

    beginner: {
      title: 'Hva trenger jeg nå?',
      body: [
        'Nybegynnere trenger bare <strong>vannflaske, treningstøy og innesko</strong> med lys såle. Klubben stiller med sverd og tilstrekkelig beskyttelsesutstyr.',
        'Etter hvert som man har trent en stund vil man normalt gradvis skaffe seg mer utstyr, til man til slutt har fullt utstyr for trening og sparring i full intensitet. Det er ingen hast — spør gjerne instruktørene om råd før du kjøper noe.',
      ],
    },

    fullTitle: 'Fullt utstyr',
    fullLead:
      'Dette er utstyret du trenger for å sparre i full intensitet og delta i turneringer. Lenkene går til leverandører klubbens medlemmer har god erfaring med.',

    groups: [
      {
        title: 'Hode og hals',
        items: [
          {
            title: 'Maske',
            body: 'De fleste solide FIE-sertifiserte fektemasker er gode nok. Vi anbefaler alle å kjøpe en 1600N maske, som gir solid beskyttelse under sparring og samtidig er godkjent i turneringene. Noen alternativer er <a href="https://allstar.de" target="_blank" rel="noopener">Allstar</a>, <a href="https://leonpaul.com/" target="_blank" rel="noopener">Leon Paul</a>, <a href="https://pbthistoricalfencing.com/" target="_blank" rel="noopener">PBT Historical Fencing</a> og <a href="https://www.afinternationalsporting.com" target="_blank" rel="noopener">Absolute Force</a>.',
          },
          {
            title: 'Bakhodebeskyttelse',
            body: 'Her er det flere merker som er gode, for eksempel <a href="https://allstar.de/" target="_blank" rel="noopener">Allstar</a>, <a href="https://pbthistoricalfencing.com/" target="_blank" rel="noopener">PBT Historical Fencing</a>, <a href="https://histfenc.eu/en/" target="_blank" rel="noopener">SPES</a> og <a href="https://afinternationalsporting.com/" target="_blank" rel="noopener">Absolute Force</a>.',
          },
          {
            title: 'Halsbeskyttelse',
            body: 'Flere gode merker, for eksempel <a href="https://allstar.de" target="_blank" rel="noopener">Allstar</a>, <a href="https://pbthistoricalfencing.com/" target="_blank" rel="noopener">PBT Historical Fencing</a> og <a href="https://afinternationalsporting.com" target="_blank" rel="noopener">Absolute Force</a>.',
          },
        ],
      },
      {
        title: 'Hender',
        items: [
          {
            title: 'Hansker',
            body: 'Noen av de beste hanskene på markedet er uten tvil <a href="https://sparringglove.com/" target="_blank" rel="noopener">Sparring Gloves</a> og <a href="https://histfenc.eu/en/" target="_blank" rel="noopener">SPES Lobster Gloves</a>. De tilbyr den beste balansen mellom bevegelighet og beskyttelse, og har veldig god kundeservice.',
          },
        ],
      },
      {
        title: 'Kropp',
        items: [
          {
            title: 'Jakke',
            body: 'Et veldig godt alternativ er Axel Pettersson-jakken fra polske <a href="https://histfenc.eu/en/" target="_blank" rel="noopener">SPES</a>. Standardstørrelsene er greie for de fleste, men man kan også få den målsydd dersom man ønsker det.',
          },
          {
            title: 'Kne- og albuebeskyttelse',
            body: 'Sett med gode kne- og albuebeskyttere kan skaffes i sportsbutikk, MC-butikk eller i militært utsalg.',
          },
          {
            title: 'Leggbeskyttere',
            body: 'Kan kjøpes i vanlig sportsbutikk.',
          },
          {
            title: 'Susp (for menn)',
            body: 'Kan kjøpes i vanlig sportsbutikk.',
          },
        ],
      },
      {
        title: 'Sverd',
        items: [
          {
            title: 'Treningssverd',
            body: 'Treningssverdene fra <a href="https://regenyei.com/" target="_blank" rel="noopener">Peter Regenyei</a> i Ungarn er veldig gode og gir mye for pengene. En annen favoritt i klubben er sverdene fra <a href="https://sigiforge.com/" target="_blank" rel="noopener">SIGI Forge</a>.',
          },
        ],
      },
      {
        title: 'Klær og sko',
        items: [
          {
            title: 'Sko',
            body: 'Bør ha flat eller delvis flat såle. Sko for innendørs fotball er ofte et godt alternativ.',
          },
          {
            title: 'Shorts og bukser',
            body: 'Keeperbukser er gode, og fås kjøpt i vanlig sportsbutikk. Ellers er det noen som lager bukser spesielt for HEMA, som <a href="https://pbthistoricalfencing.com/" target="_blank" rel="noopener">PBT Historical Fencing</a>, <a href="https://histfenc.eu/en/" target="_blank" rel="noopener">SPES</a> og <a href="https://afinternationalsporting.com" target="_blank" rel="noopener">Absolute Force</a>.',
          },
          {
            title: 'Sokker',
            body: 'Fotballstrømper fås kjøpt i vanlig sportsbutikk.',
          },
        ],
      },
    ],

    outro:
      'Usikker på hva du bør kjøpe først? Spør instruktørene på trening — de har som regel sterke meninger, og du får prøve andres utstyr før du bestemmer deg.',
  },

  groups: {
    eyebrow: 'Bedrift og grupper',
    title: 'Sverd som teambuilding',
    lead: 'Bergen HEMA kan tilby en spennende vri på teambuilding, utdrikningslag og andre arrangementer. Ingen av deltakerne trenger erfaring — vi tar dere gjennom alt fra grunnen av.',

    offerings: [
      {
        title: 'Teambuilding',
        body: [
          'Har du og firmaet ditt lyst på annerledes teambuilding? Har du noe uoppgjort med sjefen?',
          'Få en introduksjon i historisk fekting med en uhøytidelig miniturnering på slutten. Passer for grupper med blandet form og erfaring — det handler mer om hoderegning enn om muskler.',
        ],
      },
      {
        title: 'Utdrikningslag',
        body: [
          'Vil du gi bruden eller brudgommen en unik opplevelse i utdrikningslaget sitt?',
          'Bergen HEMA kan gi dere en introduksjon i historisk fekting som får opp både stemningen og pulsen. Vi har blant annet hjulpet en brudgom med å forsvare bruden mot kidnapping.',
        ],
      },
    ],

    included: {
      title: 'Dette stiller vi med',
      items: [
        'Sverd, masker og hansker til alle deltakere',
        'Erfarne instruktører som leder hele opplegget',
        'Oppvarming, teknikkinnføring og sparring',
        'Uhøytidelig miniturnering til slutt',
      ],
    },

    cta: {
      title: 'Høres dette spennende ut?',
      lead: 'Ta kontakt, så finner vi et opplegg som passer gruppen deres, antallet og tiden dere har.',
      button: 'Ta kontakt',
    },
  },

  about: {
    eyebrow: 'Om klubben',
    title: 'En frivillig klubb i Bergen',
    lead: 'Drevet av medlemmene, for medlemmene — siden 2014.',
    body: [
      'Bergen HEMA er en frivillig organisasjon som skal fremme HEMA (Historical European Martial Arts) og relaterte aktiviteter i Bergen.',
      'Klubben ble startet høsten 2014 av Knut Bonan, Petter Brodin, Daniel Flokenes og Margit Reiersen — utøvere med mange års erfaring fra HEMA.',
      'I dag er vi en av Norges fremste klubber innen historisk europeisk kampsport, og holder kurs i tysk langsverdfekting for både nybegynnere og viderekomne utøvere.',
    ],

    boardTitle: 'Styret',
    boardLead: 'Styret velges av medlemmene på årsmøtet.',

    bylaws: {
      title: 'Vedtekter',
      body: [
        'Bergen HEMAs vedtekter beskriver hvordan klubben styres, hvilke rettigheter medlemmene har og hvordan årsmøtet fungerer.',
      ],
      linkLabel: 'Last ned vedtektene (PDF)',
    },
  },

  contact: {
    eyebrow: 'Kontakt',
    title: 'Ta kontakt',
    lead: 'Har du spørsmål om medlemskap, trening, arrangementer eller noe annet? Vi svarer gjerne.',

    emailTitle: 'E-post',
    emailBody: 'Den sikreste måten å nå oss på. Vi svarer normalt innen et par dager.',

    spondTitle: 'Spond',
    spondBody:
      'Klubben bruker Spond til treningsoppmøte, beskjeder og betaling. Er du på vei til din første trening, er det her du melder deg på.',

    socialTitle: 'Sosiale medier',
    socialBody: 'Siste nytt, bilder fra trening og turneringer legges ut her.',

    visitTitle: 'Kom innom',
    visitBody: [
      'Vi trener i gymsalen på Årstad videregående skole hver torsdag fra 17:00 til 19:00.',
    ],
    directions:
      'Inngangen finner du bak til høyre for Årstad skole når du ankommer fra Danmarks plass. Det finnes parkeringsplasser rett utenfor.',
    mapLink: 'Vis i kart',
  },
};
