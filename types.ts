
export interface Question {
  id: number;
  text: string;
  options: {
    label: string;
    value: string;
    points: number;
  }[];
}

export type VerdictType = 'DO_NOT_TEXT' | 'RISKY' | 'GO_AHEAD';

export interface Verdict {
  title: string;
  description: string;
  color: string;
  icon: string;
}

export type AppState = 'LANDING' | 'QUIZ' | 'LOADING' | 'RESULT';
