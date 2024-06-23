import type { Component } from 'solid-js';
import { Dynamic } from "solid-js/web"

type ButtonProps = {
  variant: string;
  text: string;
  isUppercase?: boolean;
  to?: string;
  handleClick?: () => {};
};

export const Button: Component<ButtonProps> = (props) => {
  const variants = {
    primary: 'bg-blue-600 hover:bg-blue-500 text-white',
    secondary: 'bg-red-500 hover:bg-red-400 text-white',
    tertiary: 'bg-yellow-300 hover:bg-yellow-400 text-black',
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


  return (
    <Dynamic component={componentOptions} />
  )
};

