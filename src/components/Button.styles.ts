import styled, { css } from "styled-components";

export type ButtonVariants = "primary" | "secondary" | "danger" | "success";

const ButtonVariantsColors = {
  primary: "purple",
  secondary: "orange",
  danger: "red",
  success: "green",
};

type ButtonContainerProps = {
  variant: ButtonVariants;
};

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100px;
  height: 50px;
  color: #fff;
  border: none;
  margin-left: 12px;

  ${({ variant }) =>
    css`
      background-color: ${ButtonVariantsColors[variant]};
    `}
`;
