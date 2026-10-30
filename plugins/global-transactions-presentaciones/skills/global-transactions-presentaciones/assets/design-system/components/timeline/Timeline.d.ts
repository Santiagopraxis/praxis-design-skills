/**
 * @startingPoint section="Components" subtitle="Milestone road for project cronogramas" viewport="700x160"
 */
export interface TimelineStep {
  label: string;
  date?: string;
  status?: 'done' | 'current' | 'upcoming';
}
export interface TimelineProps {
  steps: TimelineStep[];
}
