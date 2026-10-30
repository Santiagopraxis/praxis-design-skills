/**
 * @startingPoint section="Components" subtitle="Content surface with optional eyebrow and title" viewport="700x220"
 */
export interface CardProps {
  eyebrow?: string;
  title?: string;
  children: React.ReactNode;
  elevated?: boolean;
  tone?: 'light' | 'dark';
}
