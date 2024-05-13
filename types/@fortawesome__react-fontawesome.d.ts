declare module '@fortawesome/react-fontawesome' {
  import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

  interface FontAwesomeIconProps {
    icon: IconDefinition;
    mask?: IconDefinition;
    size?: string;
    className?: string;
    spin?: boolean;
    pulse?: boolean;
    border?: boolean;
    fixedWidth?: boolean;
    inverse?: boolean;
    flip?: 'horizontal' | 'vertical' | 'both';
    rotation?: 90 | 180 | 270;
    transform?: string | {
      prefix: string;
      iconName: string;
    };
    symbol?: boolean;
  }

  export class FontAwesomeIcon extends React.Component<FontAwesomeIconProps> {}
}
