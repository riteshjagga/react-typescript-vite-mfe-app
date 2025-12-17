import { cssTokenManager } from '../../helpers';
import './Button.css';

type OmitButtonAttributes = 'className' | 'styleName';
type NativeButtonProps = Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  OmitButtonAttributes
>;

type ButtonProps = NativeButtonProps & {
  variant?: 'primary' | 'secondary' | 'tertiary';
};

const Button = ({
  variant = 'primary',
  children,
  ...buttonProps
}: ButtonProps) => {
  const tm = cssTokenManager('btn');
  tm.add(variant);

  return (
    <button className={tm.getClasses()} type="button" {...buttonProps}>
      {children}
    </button>
  );
};

export default Button;
