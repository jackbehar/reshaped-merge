import React, { ComponentType, FC, ReactNode} from 'react';
import { Button as ButtonM, ButtonProps } from 'reshaped';
/**
 * @uxpindocurl https://reshaped.so/docs/components/button
 * @uxpindescription Interactive element used for single-step actions.
 */
export interface ButtonPropsMerge extends ButtonProps {
  children?: ReactNode,
  icon?: ComponentType,
  endIcon?: ComponentType,
  
  /**
  * Example of a description and additional prop.
  */
  extendedPropExample?: string
}

const Button: FC = (props: ButtonPropsMerge) => {
  return <ButtonM {...props} />
}

export default Button;

