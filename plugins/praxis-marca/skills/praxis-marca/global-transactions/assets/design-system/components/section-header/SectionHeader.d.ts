/**
 * @startingPoint section="Components" subtitle="Kicker + title + description, for slide and doc section openers" viewport="700x180"
 */
export interface SectionHeaderProps {
  kicker?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  tone?: 'light' | 'dark';
}
