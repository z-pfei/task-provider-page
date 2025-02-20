import Carousel from '@/components/Carousel'
import AttentionCard from '@/components/Home/AttentionCard'

export default function AttentionCarousel() {
  return (
    <Carousel direction='vertical' className='h-[80rem]' speed={0.05} autoplay={true}>
      <AttentionCard
        className='mb-12'
        title='Cardiac System'
        description={
          <>
            <strong>38.2</strong> years old, 8.2 years older than expected,
            contributing <strong>28.6%</strong> to your overall aging process
          </>
        }
        size='large'
      />
      <AttentionCard
        className='mb-12'
        title='Reproductive System'
        description={
          <>
            <strong>36.2</strong> years old, 6.2 years older than expected,
            contributing <strong>20.1%</strong> to your overall aging process
          </>
        }
        size='medium'
      />
      <AttentionCard
        className='mb-12'
        title='Reproductive System'
        description={
          <>
            <strong>36.2</strong> years old, 6.2 years older than expected,
            contributing <strong>20.1%</strong> to your overall aging process
          </>
        }
        size='small'
      />
    </Carousel>
  )
}
