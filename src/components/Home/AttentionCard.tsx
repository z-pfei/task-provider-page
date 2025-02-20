import classnames from 'classnames'

interface AttentionCardProps {
  title: string
  description: string | React.ReactNode
  size: 'small' | 'medium' | 'large'
  className?: string
}

export default function AttentionCard({
  title,
  description,
  size,
  className = '',
}: AttentionCardProps) {
  return (
    <div
      className={classnames(
        'relative flex flex-col items-start justify-center pl-[11rem]',
        {
          'attention-card-l h-[40rem]': size === 'large',
          'attention-card-m h-[26.26rem]': size === 'medium',
          'attention-card-s h-[23.73rem]': size === 'small',
        },
        className
      )}
    >
      <div className='relative flex flex-col items-start'>
        <span
          className={classnames(
            'flex items-center gap-2 text-origin-1 border-2 border-origin-1 rounded-full px-4',
            {
              'text-xl leading-8': size === 'large',
              'text-base leading-7': size === 'medium',
              'text-base': size === 'small',
            }
          )}
        >
          <span
            className={classnames(
              'bg-origin-1 rounded-full',
              size === 'small' ? 'w-4 h-4' : 'w-5 h-5'
            )}
          ></span>
          Attention
        </span>
        <div className={classnames(
          'text-black font-light font-manrope my-2.5',
          {
            'text-5xl leading-[4.125rem]': size === 'large',
            'text-4xl leading-[3rem]': size === 'medium',
            'text-2xl': size === 'small',
          }
        )}>
          {title}
        </div>
        <div className={classnames(
          'text-black font-manrope',
          {
            'text-xl': size === 'large',
            'text-base': size === 'medium',
            'text-sm': size === 'small',
          }
        )}>{description}</div>
      </div>
    </div>
  )
}
