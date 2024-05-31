import React, { FC } from 'react';
import { Button as ButtonM, ButtonProps } from 'reshaped';
import "reshaped/themes/reshaped/theme.css";

const Button: FC = (props: ButtonProps) => {
  return <ButtonM {...props}/>
}

export default Button;



// import * as React from "react"
// import { Button as ButtonM } from "reshaped";
// import type { ButtonProps } from "reshaped";



// export interface ButtonProps
//   extends React.ButtonHTMLAttributes<HTMLButtonElement>,
//   VariantProps<typeof buttonVariants> {
//   asChild?: boolean
//   children?: React.ReactNode
//   variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'
//   size?: 'default' | 'sm' | 'lg' | 'icon'
//   disabled?: boolean
//   name?: string
//   type?: "submit" | "reset" | "button"
//   tailwindClasses?: string
// }

// const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(

//     return (
//       <ButtonM
//         ref={ref}
//         {...props}
//       />
//     )
// )


// // A DEFAULT EXPORT IS NEEDED FOR UXPIN
// export default Button