import classnames from "classnames";

interface ButtonProps {
  children: React.ReactNode;
  type?: 'primary' | 'default';
  className?: string;
  onClick?: () => void;
}

export default function Button({ children, type = 'default', className = '', onClick }: ButtonProps) {
  return (
    <button 
      className={classnames(
        'flex items-center font-manrope rounded-full transition duration-300',
        className,
        {
          'button-default': type === 'default',
          'button-primary': type === 'primary',
        }
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
} 