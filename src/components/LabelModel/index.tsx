import { LabelStyles } from "./styles";

interface ILabel {
  text: string;
  htmlFor: string;
  showIcon?: React.ReactNode;
}

const LabelModel: React.FC<ILabel> = ({ text, showIcon, htmlFor }) => {
  return (
    <LabelStyles htmlFor={htmlFor}>
      {showIcon}
      {text} <span>*</span>
    </LabelStyles>
  );
};

export default LabelModel;
