import React, { FC, } from 'react';
import { Button as ButtonM, ButtonProps } from 'reshaped';

export interface ButtonPropsMerge
  extends ButtonProps {
  tailwindClasses?: string
}

const Button: FC = (props: ButtonPropsMerge) => {
  return <ButtonM {...props} />
}

export default Button;

