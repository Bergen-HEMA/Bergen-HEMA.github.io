import type { Locale } from '../site';

/**
 * Alt text for every photograph, in both languages.
 *
 * The WordPress originals had no alt text at all. These describe what is
 * actually happening in each frame rather than repeating the page heading,
 * because for a screen-reader user the photographs are most of what makes the
 * club look like somewhere you would want to turn up on a Thursday.
 *
 * All action photographs were taken at Bergenhus fortress in Bergen.
 */
type AltKey =
  | 'heroCrossedSwords'
  | 'archway'
  | 'swordsStoneWall'
  | 'swordRedGrip'
  | 'lineupBlueDoor'
  | 'sparringLunge'
  | 'fencersWaiting'
  | 'longswordStrike'
  | 'overheadBind'
  | 'portraitBraid'
  | 'portraitSmiling'
  | 'portraitMaskOff'
  | 'portraitRedJacket'
  | 'sparringPair'
  | 'trainingHall'
  | 'glovesBind'
  | 'outdoorTraining'
  | 'eventGroup'
  | 'eventSparring'
  | 'eventPair'
  | 'eventWarmup';

export const alt: Record<Locale, Record<AltKey, string>> = {
  no: {
    heroCrossedSwords:
      'To fektere i svart beskyttelsesutstyr krysser langsverd foran en gammel blå dør på Bergenhus.',
    archway:
      'Fire fektere med sverd over skulderen går gjennom en steinhvelving på Bergenhus, med Bryggen i bakgrunnen.',
    swordsStoneWall: 'Tre langsverd lent mot en gammel steinmur. Det midterste har rødt grep.',
    swordRedGrip: 'Nærbilde av et langsverd med rødviklet grep, lent mot en steinmur.',
    lineupBlueDoor:
      'Fire fektere i fullt utstyr står oppstilt med sverdene foran seg utenfor en blå portdør.',
    sparringLunge:
      'To fektere i sparring på brostein. Den ene går i utfall mens den andre parerer.',
    fencersWaiting:
      'En rekke fektere i masker og røde og svarte jakker venter på tur med sverdene i hånden.',
    longswordStrike: 'En fekter i maske midt i et hugg med langsverd.',
    overheadBind: 'To fektere i bind med sverdene hevet over hodet.',
    portraitBraid:
      'Smilende fekter med flettet hår i svart fektejakke, med hansken hevet mot kameraet.',
    portraitSmiling: 'Smilende fekter i svart jakke som holder et langsverd foran seg.',
    portraitMaskOff: 'Fekter med masken av, foran en steinmur, med sverdet hvilende mot skulderen.',
    portraitRedJacket: 'Fekter i knallrød fektejakke med masken under armen.',
    sparringPair: 'To fektere i maske og full beskyttelse i sparring utendørs på brostein.',
    trainingHall:
      'To fektere i sparring i gymsalen, foran ribbevegg og med sverdene krysset over hodet.',
    glovesBind:
      'To fektere i bind med sverdene hevet, i gymsalen foran en ribbevegg.',
    outdoorTraining: 'Fekter i maske med langsverd, utendørs i grønt norsk landskap.',
    eventGroup: 'Fornøyd gjeng deltakere som poserer med sverd etter to timer med fekting.',
    eventSparring:
      'Deltaker på et arrangement prøver seg på sparring mot en instruktør i rød jakke.',
    eventPair: 'To deltakere på et utdrikningslag fekter mot hverandre med maske og hansker.',
    eventWarmup: 'Deltakere på et arrangement varmer opp før fekting.',
  },
  en: {
    heroCrossedSwords:
      'Two fencers in black protective gear crossing longswords in front of an old blue door at Bergenhus fortress.',
    archway:
      'Four fencers with swords over their shoulders walking through a stone archway at Bergenhus, the Bryggen wharf visible beyond.',
    swordsStoneWall:
      'Three longswords leaning against an old stone wall. The middle one has a red-wrapped grip.',
    swordRedGrip: 'Close-up of a longsword with a red-wrapped grip, leaning against a stone wall.',
    lineupBlueDoor:
      'Four fencers in full kit lined up with their swords in front of them outside a blue gate door.',
    sparringLunge:
      'Two fencers sparring on cobblestones. One lunges forward while the other parries.',
    fencersWaiting:
      'A row of fencers in masks and red and black jackets waiting their turn, swords in hand.',
    longswordStrike: 'A masked fencer mid-strike with a longsword.',
    overheadBind: 'Two fencers in a bind with their swords raised overhead.',
    portraitBraid:
      'Smiling fencer with braided hair in a black fencing jacket, gloved hand raised towards the camera.',
    portraitSmiling: 'Smiling fencer in a black jacket holding a longsword in front of them.',
    portraitMaskOff:
      'Fencer with their mask off, standing against a stone wall with the sword resting on one shoulder.',
    portraitRedJacket: 'Fencer in a bright red fencing jacket with their mask tucked under one arm.',
    sparringPair: 'Two fencers in masks and full protection sparring outdoors on cobblestones.',
    trainingHall:
      'Two fencers sparring in the gym hall, wall bars behind them and swords crossed overhead.',
    glovesBind: 'Two fencers in a bind with their swords raised, in the gym hall in front of wall bars.',
    outdoorTraining: 'A masked fencer holding a longsword outdoors in a green Norwegian landscape.',
    eventGroup: 'A cheerful group of participants posing with swords after two hours of fencing.',
    eventSparring:
      'A participant at an event trying their hand at sparring against an instructor in a red jacket.',
    eventPair: 'Two participants at a stag party fencing each other in masks and gloves.',
    eventWarmup: 'Participants at an event warming up before fencing.',
  },
};

export const getAlt = (locale: Locale) => alt[locale];
