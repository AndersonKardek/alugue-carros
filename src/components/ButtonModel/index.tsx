import { Button } from "./styles"

interface IButtonProps {
  name: string;
  hasBackgroundColor?: boolean;
}

const ButtonModel: React.FC<IButtonProps> = ({
  name,
  hasBackgroundColor
}) => {
  return (
    <Button bgColor={hasBackgroundColor}>
      {name}
      </Button>

    )
}

export default ButtonModel;