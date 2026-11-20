/**
 * @startingPoint section="Components" subtitle="Pill label for status, tags and categories" viewport="700x140"
 */
export interface BadgeProps {
  /** Label content */
  children: React.ReactNode;
  /** Color treatment */
  tone?: 'neutral' | 'primary' | 'teal' | 'critical' | 'warning' | 'ok' | 'inverse';
  size?: 'sm' | 'md';
}
