import { ButtonContainer, ButtonVariants } from "./Button.styles";

type ButtonProps = {
  variant?: ButtonVariants;
};

export const Button = ({ variant = "primary" }: ButtonProps) => {
  return <ButtonContainer variant={variant}>Enviar</ButtonContainer>;
};
