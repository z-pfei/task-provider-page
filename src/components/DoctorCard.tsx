import classnames from 'classnames';
import Image from 'next/image';

interface DoctorCardProps {
  name: string;
  title: string;
  description: string;
  imageSrc: string;
  className?: string;
}

export default function DoctorCard({ name, title, description, imageSrc, className = '' }: DoctorCardProps) {
  return (
    <div className={classnames(
      'relative w-[29.375rem] px-6 py-10 rounded-[2rem] border-2 border-yellow-2 text-center',
      className
      )}>
      {/* avatar */}
      <Image
        src={imageSrc}
        alt={name}
        width={170}
        height={170}
        className='mx-auto'
      />

      {/* name */}
      <h3 className="text-[1.5rem] font-crimson leading-9 text-yellow-2 font-bold mb-2">
        {name}
      </h3>

      {/* title */}
      <p className="text-[1.125rem] font-crimson leading-[1.375rem] text-yellow-2 mb-4">
        {title}
      </p>

      {/* description */}
      <p className="text-yellow-5 text-base font-manrope">
        {description}
      </p>
    </div>
  );
} 