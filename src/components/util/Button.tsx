import type { Component } from 'solid-js';
import { Dynamic } from "solid-js/web"

type ButtonProps = {
  variant: 'primary' | 'secondary';
  text: string;
  isUppercase?: boolean;
  to?: string;
  handleClick?: () => {};
};

export const Button: Component<ButtonProps> = (props) => {
  const variants = {
    primary: 'bg-primary-standard hover:bg-primary-prominent text-white',
    secondary: 'bg-secondary-standard hover:bg-secondary-prominent text-white',
  }

  const ButtonElement = () => (
    <button 
      class={`
        px-4 py-2
        ${variants[props.variant]}
        ${props.isUppercase ? 'uppercase' : ''}
      `}
      onClick={() => props.handleClick?.()}
    >
        {props.text}
    </button>
  )

  const AnchorElement = () => (
    <a 
      href={props.to} 
      class={`
        px-4 py-2
        ${variants[props.variant]}
        ${props.isUppercase ? 'uppercase' : ''}
      `}
    >
      {props.text}
    </a>
  )
  const componentOptions = props.to ? AnchorElement : ButtonElement

  return <Dynamic component={componentOptions} />
};

