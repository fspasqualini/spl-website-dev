import { sortedLabEvents } from "./labEvents";
import { getLabEventLabel, type Label } from "./labels";

export type NewsItem = {
  date: string;
  label: Label;
  title: string;
  text: string;
  href?: string;
};

const toNewsItem = (event: (typeof sortedLabEvents)[number]): NewsItem => ({
  date: event.date,
  label: getLabEventLabel(event),
  title: event.title,
  text: event.text,
  href: event.href,
});

export const newsItems = sortedLabEvents.map(toNewsItem);

export const homepageNews = newsItems.slice(0, 5);
