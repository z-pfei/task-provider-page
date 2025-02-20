import classnames from "classnames";

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'default';
  className?: string;
  onClick?: () => void;
}

export default function Button({ children, variant = 'default', className = '', onClick }: ButtonProps) {
  return (
    <button 
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