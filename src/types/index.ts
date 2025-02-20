export interface ChallengeDay {
  number: number;
  title: string;
  description: string;
  points: string[];
}

export interface CallToActionProps {
  isLive: boolean;
  countdown: string;
  onClick: () => void;
}

export interface ProgressBarProps {
  percent: number;
  currentDay: number;
}