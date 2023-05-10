import { Button } from "./styles";

interface IButtonProps {
  name: string;
  bgSecundary?: boolean;
  hasIcon?: boolean;
  showIcon?: React.ReactNode;
}

const ButtonModel: React.FC<IButtonProps> = ({
  name,
  bgSecundary,
  hasIcon,
  showIcon,
}) => {
  return (
    <Button displayIcon={hasIcon} secundary={bgSecundary}>
      {name} {showIcon}
    </Button>
  );
};

export default ButtonModel;
