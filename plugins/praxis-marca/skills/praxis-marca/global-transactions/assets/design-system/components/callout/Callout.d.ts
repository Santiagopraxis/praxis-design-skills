/**
 * @startingPoint section="Components" subtitle="Risk, mitigation and note boxes" viewport="700x160"
 */
export interface CalloutProps {
  tone?: 'info' | 'critical' | 'warning' | 'ok';
  title?: string;
  children: React.ReactNode;
}
