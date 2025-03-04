'use client'

import { useState } from 'react'
import Button from '@/components/Button'
import Image from 'next/image'
import DoctorCard from '@/components/DoctorCard'
import Carousel from '@/components/Carousel'
import Link from 'next/link'
import AttentionCarousel from '@/components/Home/AttentionCarousel'
import SampleReportForm from '@/components/Home/SampleReportForm'

const doctors = [
  {
    name: 'Dr. James Pattinson, MD',
    title: 'Explore Longevity Clinic, Los Angeles',
    description:
      'Lobortis leo pretium facilisis amet nisl at nec. Scelerisque risus tortor donec ipsum consequat semper consequat adipiscing ultrices.',
    imageSrc: '/image/dr-1.png',
  },
  {
    name: 'Dr. Clayton Anderwson, MD',
    title: 'Peek Longevity Clinic, New York',
    description:
      'Lobortis leo pretium facilisis amet nisl at nec. Scelerisque risus tortor donec ipsum consequat semper consequat adipiscing ultrices.',
    imageSrc: '/image/dr-2.png',
  },
  {
    name: 'Dr. Kate Ma, MD',
    title: 'Peek Longevity Clinic, New York',
    description:
      'Lobortis leo pretium facilisis amet nisl at nec. Scelerisque risus tortor donec ipsum consequat semper consequat adipiscing ultrices.',
    imageSrc: '/image/dr-3.png',
  },
]

const papers = [
  '/image/papers-1.png',
  '/image/papers-2.png',
  '/image/papers-3.png',
]

export default function Home() {
  const [isSampleReportOpen, setIsSampleReportOpen] = useState(false)

  return (
    <>
      <header className="text-yellow-1 bg-[url('/image/header.png')] bg-cover bg-center bg-no-repeat p-12">
        {/* first section */}
        <section className='mb-6'>
          <div className='text-8xl font-light font-manrope'>Measure Aging</div>
          <p className='text-[52px] italic mb-7 font-crimson'>
            with golden standard
          </p>
          <Button className='gap-7 font-manrope'>
            <Image
              src='/svg/left-arrow.svg'
              alt='arrow-left'
              width={40}
              height={10}
            />
            Learn about our test
          </Button>
        </section>

        {/* second section */}
        <section>
          <div className='text-8xl font-light text-right font-manrope'>
            Intervene Health
          </div>
          <p className='text-[52px] italic mb-7 text-right font-crimson'>
            with scientific confidence
          </p>
          <Button className='ml-auto gap-7 font-manrope'>
            Learn about action plan
            <Image
              src='/svg/right-arrow.svg'
              alt='arrow-right'
              width={40}
              height={10}
            />
          </Button>
        </section>
      </header>
      {/* first block */}
      <section className='bg-black p-[7.5rem] pr-0'>
        <div className='flex justify-between mb-12'>
          <div className='text-[4rem] text-yellow-1 font-manrope'>
            Elevate Your Practice
          </div>
          <Button className='mr-10 font-merriweather' variant='primary'>
            Become a Provider
          </Button>
        </div>

        <Carousel direction='horizontal'>
          {doctors.map((doctor, index) => (
            <DoctorCard
              key={index}
              className='mr-12'
              name={doctor.name}
              title={doctor.title}
              description={doctor.description}
              imageSrc={doctor.imageSrc}
            />
          ))}
        </Carousel>
      </section>
      {/* second block */}
      <div className='bg-primary-gradient'>
        <section className='relative container-width-step step-1 p-[7.5rem]'>
          <div className='text-8xl font-crimson font-light leading-[7.25rem] mb-20'>
            SAMPLE PROCESSING
          </div>
          <div className='flex items-center justify-between flex-wrap gap-20'>
            <div className='flex-1 text-dark-1'>
              <div className='text-[4rem] font-crimson font-light leading-[4.875rem]'>
                Measure with Precision
              </div>
              <p className='text-4xl font-manrope font-light leading-[3rem] mt-3'>
                Generation Lab partners with Tempus and Illumina to ensure
                gold-standard accuracy in our SystemAge Test, leveraging
                Illumina&apos;s sequencing and Tempus&apos; CLIA-certified lab
                for precise aging insights.
              </p>
            </div>
            <Image
              src='/image/tempus.png'
              alt='Tempus Logo'
              width={617}
              height={535}
              className='object-contain'
            />
          </div>
        </section>
        <section className='relative container-width-step step-2 pt-[7.5rem]'>
          <div className='text-8xl font-crimson font-light leading-[7.25rem] mb-20 px-[7.5rem]'>
            MOST ADVANCED ANALYSIS
          </div>
          {/* 2-1 */}
          <div className='flex items-center justify-between flex-wrap gap-20 px-[7.5rem]'>
            <div className='flex-1 text-dark-1 min-w-[30rem]'>
              <div className='text-[4rem] font-crimson font-light leading-[4.875rem]'>
                Go Beyond Just A Number
              </div>
              <p className='text-4xl font-manrope font-light leading-[3rem] mt-6'>
                <strong className='font-bold'>BioNoise Level:</strong>{' '}
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat.
              </p>
              <p className='text-4xl font-manrope font-light leading-[3rem] mt-6'>
                <strong className='font-bold'>Aging Trajectory:</strong> Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat.
              </p>
              <Button
                className='mt-12 font-merriweather'
                variant='primary'
                onClick={() => setIsSampleReportOpen(true)}
              >
                Read more in our white paper
              </Button>
            </div>
            <div className='flex-1'>
              <Image
                src='/image/example.png'
                alt='example png'
                width={617}
                height={469}
                className='object-contain'
              />
              <div className='text-[2rem] font-crimson font-bold italic leading-[2.5rem] mt-[2.625rem] mb-3'>
                Read our papers:
              </div>
              <Carousel direction='horizontal' autoplay={true}>
                {papers.map((paper, index) => (
                  <Link href={paper} key={index}>
                    <Image
                      key={index}
                      src={paper}
                      alt='paper'
                      width={240}
                      height={80}
                      className='object-contain mr-12'
                    />
                  </Link>
                ))}
              </Carousel>
            </div>
          </div>
          {/* 2-2 */}
          <div className='flex items-center justify-between flex-wrap pt-[7.5rem] pr-[7.5rem]'>
            <div className='flex-1'>
              <AttentionCarousel />
            </div>
            <div className='flex-1 min-w-[30rem] text-dark-1 ml-40'>
              <div className='text-[4rem] font-crimson font-light leading-[4.875rem]'>
                Identify Top Aging Factors
              </div>
              <p className='text-4xl font-manrope font-light leading-[3rem] mt-6'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p className='text-4xl font-manrope font-light leading-[3rem] mt-6'>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
              <Button
                className='mt-12 font-merriweather'
                variant='primary'
                onClick={() => setIsSampleReportOpen(true)}
              >
                View sample report
              </Button>
            </div>
          </div>
        </section>
        <section className='relative container-width-step step-3 text-[#F4EFE7] py-[7.5rem]'>
          <div className='text-8xl font-crimson font-light leading-[7.25rem] mb-20 px-[7.5rem]'>
            Intervene with Confidence
          </div>
          <div className='px-[7.5rem]'>
            <div className='text-[4rem] font-crimson font-light leading-[4.875rem]'>
              Intelligent Interventions
            </div>
          </div>
        </section>
      </div>

      <SampleReportForm
        isOpen={isSampleReportOpen}
        onClose={() => setIsSampleReportOpen(false)}
      />
    </>
  )
}
