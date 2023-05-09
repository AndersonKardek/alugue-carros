import { Button } from "./styles"

interface IButtonProps {
  name: string;
  hasBackgroundColor?: boolean;
  hasIcons?: React.ReactNode;
}

const ButtonModel: React.FC<IButtonProps> = ({
  name,
  hasBackgroundColor,
  hasIcons
}) => {
  return (
    <Button bgColor={hasBackgroundColor}>
      {name}{hasIcons}
      </Button>

    )
}

export default ButtonModel;