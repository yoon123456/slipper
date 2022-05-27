export interface IAnswerWriteContainer {
  question: string;
  isActive: boolean;
  setIsActive: (active: boolean) => void;
}
export interface IAnswerWritePresenter {
  question: string;
  isActive: boolean;
  setIsActive: (active: boolean) => void;
}

export interface IWriteButtonProps {
  isActive: boolean;
}
