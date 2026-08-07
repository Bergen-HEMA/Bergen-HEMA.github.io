import type { Locale } from '../site';
import type { SiteContent } from './types';
import { no } from './no';
import { en } from './en';

const content: Record<Locale, SiteContent> = { no, en };

export const getContent = (locale: Locale): SiteContent => content[locale];

export type { SiteContent };
