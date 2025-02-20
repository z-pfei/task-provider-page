import classnames from "classnames";

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'default';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

export default function Button({ children, variant = 'default', className = '', onClick, type = 'button' }: ButtonProps) {
  return (
    <button 
      type={type}
      className={classnames(
        'flex items-center font-manrope rounded-full transition duration-300',
        className,
        {
          'button-default': variant === 'default',
          'button-primary': variant === 'primary',
        }
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
} 