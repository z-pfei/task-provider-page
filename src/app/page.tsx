import Button from "@/components/Button";
import Image from "next/image";
import DoctorCard from "@/components/DoctorCard";
import Carousel from "@/components/Carousel";

export default function Home() {
  return (
    <>
      <header className="text-yellow-1 bg-[url('/image/header.png')] bg-cover bg-center bg-no-repeat p-12">
        {/* first section */}
        <section className="mb-6">
          <div className="text-8xl font-light">
            Measure Aging
          </div>
          <p className="text-[52px] italic mb-7">
            with golden standard
          </p>
          <Button className="gap-7">
            <Image src="/svg/left-arrow.svg" alt="arrow-left" width={40} height={10} />
            Learn about our test
          </Button>
        </section>

        {/* second section */}
        <section>
          <div className="text-8xl font-light text-right">
            Intervene Health
          </div>
          <p className="text-[52px] italic mb-7 text-right">
            with scientific confidence
          </p>
          <Button className="ml-auto gap-7">
            Learn about action plan
            <Image src="/svg/right-arrow.svg" alt="arrow-right" width={40} height={10} />
          </Button>
        </section>
      </header>
      <section className="bg-black p-[7.5rem] pr-0">
        <div className="flex justify-between mb-12">
          <div className="text-[4rem]">Elevate Your Practice</div>
          <Button className="mr-10" type="primary">Become a Provider</Button>
        </div>
        
        <Carousel 
          direction="horizontal"
          autoplay={true}
        >
          <DoctorCard
            className="mr-12"
            name="Dr. James Pattinson, MD"
            title="Explore Longevity Clinic, Los Angeles"
            description="Lobortis leo pretium facilisis amet nisl at nec. Scelerisque risus tortor donec ipsum consequat semper consequat adipiscing ultrices."
            imageSrc="/image/dr-1.png"
          />
          <DoctorCard
            className="mr-12"
            name="Dr. Clayton Anderwson, MD"
            title="Peek Longevity Clinic, New York"
            description="Lobortis leo pretium facilisis amet nisl at nec. Scelerisque risus tortor donec ipsum consequat semper consequat adipiscing ultrices."
            imageSrc="/image/dr-2.png"
          />
          <DoctorCard
            className="mr-12"
            name="Dr. Kate Ma, MD"
            title="Peek Longevity Clinic, New York"
            description="Lobortis leo pretium facilisis amet nisl at nec. Scelerisque risus tortor donec ipsum consequat semper consequat adipiscing ultrices."
            imageSrc="/image/dr-3.png"
          />
        </Carousel>
      </section>
    </>
  );
}
