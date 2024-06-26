import './page.css';
import Image from 'next/image';
import {
  GalleryItem,
  galleryItems,
} from '@app/model/gallery/fitness-instructor';
import ScrollIntoView from '@app/components/ScrollIntoView/ScrollIntoView';
import testIds from '@app/utils/test-ids';

const TrainingOptionSelection = ({
  text,
  className,
  bgImageSrc,
  href,
}: {
  text: string;
  bgImageSrc: string;
  href: string;
  className?: string;
}) => (
  <a
    className={`flex-1 aspect-[4/3] relative flex justify-center ${className}`}
    href={href}
  >
    <div className={`absolute-full bg-cover ${bgImageSrc}`}></div>
    <div className="absolute-full h-full opacity-0 hover:opacity-50 bg-highlight"></div>
    <div className="flex align-middle justify-center flex-col gap-5 h-full w-full max-w-[490px]">
      <h3 className="z-10 uppercase text-3xl tracking-[.3em]">{text}</h3>
      <div className="mx-auto">
        <Image
          className="hover:brightness-0 hover:invert rotate-270"
          width={50}
          height={50}
          alt={`select ${text}`}
          src="/common/arrow-circle.png"
        />
      </div>
    </div>
  </a>
);

const AchievementItem = ({
  title,
  tagline,
}: {
  title: string;
  tagline: string;
}) => (
  <li>
    <h4 className="title mb-5">{title}</h4>
    <div className="mb-5 bg-black h-px w-28"></div>
    <p className="text-xl sm:text-2xl">{tagline}</p>
  </li>
);

const GalleryItem = ({
  item: { title, tagline, imgSrc, id },
}: {
  item: GalleryItem;
}) => (
  <li className="aspect-video relative">
    <Image src={imgSrc} alt={title} fill />
    <div className="absolute-full opacity-0 hover:opacity-70 bg-white p-8 flex flex-col justify-between text-black">
      <div className="text-center">
        <h4 className="text-2xl pt-4 pb-2">{title}</h4>
        <p className="font-open-sans-condensed">{tagline}</p>
      </div>
      <div className="flex justify-between">
        <a href="/#" className="cursor-pointer">
          <Image
            src="/common/like.svg"
            height={24}
            width={24}
            alt="like image"
          />
        </a>
        <a href="/#" className="cursor-pointer">
          <Image
            src="/common/share.svg"
            height={24}
            width={24}
            alt="share image"
          />
        </a>
      </div>
    </div>
  </li>
);

export default async function Home() {
  return (
    <div>
      <div
        className="text-center min-h-screen bg-[url('/home/bcover.png')] parallax-background"
        data-testid={testIds.HOME_PAGE.HEADER}
      >
        <section className="py-[355px]">
          <h1 className="tracking-widest">SHINE CITY</h1>
          <div className="pt-7">
            <div className="tracking-[.4em] text-3xl uppercase">
              Experience automotive opulence like never before
            </div>
          </div>
          <div className="pt-14 flex gap-8 justify-center">
            <a
              className="btn-third text-lg px-7"
              href="https://shine-city-auto-detailing.square.site/"
              data-testid={testIds.HOME_PAGE.BOOK_CLASS_CTA}
            >
              Book Now
            </a>
            <a
              className="btn-third text-lg px-7"
              href="tel:+14694278162"
              data-testid={testIds.HOME_PAGE.BOOK_PLAN_CTA}
            >
              Call Now
            </a>
          </div>
        </section>
        <section className="flex flex-col sm:flex-row pt-1 pb-7 bg-gray-c2 cursor-pointer">
          <TrainingOptionSelection
            href="https://www.instagram.com/shinecity_autodetailing/"
            text="Instagram"
            className="sm:justify-end"
            bgImageSrc="bg-[url('/home/bcover3.png')]"
          />
          <TrainingOptionSelection
            href="https://www.facebook.com/shinecity.autodetailing/"
            text="Facebook"
            className="sm:justify-start"
            bgImageSrc="bg-[url('/home/bcover4.jpeg')]"
          />
        </section>
      </div>
      <ScrollIntoView hashName="#about" offset="-90px" />
      <div className="min-h-screen bg-[url('/home/bcover6.png')] parallax-background">
        <div className="max-w-full-content mx-auto box-content pt-2">
          <div className="max-w-[400px] pt-10 pb-2">
            <h2 className="uppercase text-7xl leading-tight py-7">ABOUT US</h2>
            <section className="font-open-sans-condensed text-base text-stone-300 tracking-wider">
              <p className="py-3">
                {`Welcome to Shine City Auto Detailing, your premier choice for auto detailing services in Dallas, TX. We understand that your vehicle is more than just a mode of transportation—it's a vital part of your daily life. Over time, dirt, grime, and environmental elements can diminish its beauty and performance. That's where we come in.
                `}
              </p>
              <p className="py-3">
                {`At Shine City Auto Detailing, we are passionate about cars. Our mission is to restore your vehicle to its original showroom shine, inside and out. Whether you need auto detailing, exterior detailing to bring back that glossy finish, or complete interior detailing for a fresh and immaculate cabin, we've got you covered.`}
              </p>
              <p className="py-3">
                {`We are a mobile service, bringing our expertise right to your doorstep. Whether you're at home or work, we'll accommodate your schedule with appointments that suit you best. Our commitment to quality and customer satisfaction means we go above and beyond to ensure every vehicle leaves looking flawless.`}
              </p>
              <p className="py-3">
                {`Ready to give your car the treatment it deserves? Book your appointment with Shine City Auto Detailing now and experience the difference. Your car will thank you!`}
              </p>
            </section>
            <section className="mt-5">
              <ul aria-label="Social Bar" className="flex gap-2 invert -ml-3">
                <li>
                  <a
                    href="https://www.facebook.com/shinecity.autodetailing/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Image
                      width={43}
                      height={43}
                      alt="Facebook"
                      src="https://static.wixstatic.com/media/0fdef751204647a3bbd7eaa2827ed4f9.png"
                    />
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank" rel="noreferrer">
                    <Image
                      width={43}
                      height={43}
                      src="https://static.wixstatic.com/media/c7d035ba85f6486680c2facedecdcf4d.png"
                      alt="Twitter"
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/shinecity_autodetailing/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Image
                      width={43}
                      height={43}
                      src="https://static.wixstatic.com/media/01c3aff52f2a4dffa526d7a9843d46ea.png"
                      alt="Instagram"
                    />
                  </a>
                </li>
              </ul>
              {/* <div className="fixed right-0 top-0 bottom-0 flex justify-center items-center lg:w-1/3 lg:pr-5">
                <div className="max-w-[150px]">
                  <video controls width="100%" height="auto">
                    <source src="/home/shine.MOV" type="video/quicktime" />
                    <source src="/home/shine.MOV" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div> */}
            </section>
          </div>
        </div>
        {/* <div className="fixed right-0 top-0 bottom-0 flex justify-center items-center lg:w-1/3 lg:pr-5">
          <div>OPEN</div>
          <div></div>
          <br></br>
          <div></div>
          <div>CLOSE</div>
          <div className="max-w-[400px]">
            <video controls width="100%" height="auto">
              <source src="/home/shine.MOV" type="video/quicktime" />
              <source src="/home/shine.MOV" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div> */}
        <section className="bg-[url('/home/coacher-achievements-background.jpg')] bg-center bg-cover">
          <div className="max-w-full-content px-4 mx-auto text-black">
            <h2 className="title pt-24 pb-20 tracking-[.3em] text-center">
              Our Reviews
            </h2>
            <div className="pb-20 px-2">
              {/* EmbedReviews Widget */}
              {/* <script src="https://cdn.embedsocial.com/embedscript/google.js"></script> */}
              <div
                className="embedsocial-reviews"
                data-ref="YOUR_UNIQUE_WIDGET_ID"
              ></div>
            </div>
          </div>
        </section>
        <section className="bg-gray-c2">
          <div className="max-w-full-content px-4 mx-auto py-20 flex flex-col gap-10 items-center">
            <h3 className="text-3xl uppercase tracking-[.4em] pt-7">Gallery</h3>
            <a
              className="btn-secondary px-10 text-lg px-7"
              href="https://shinecitydetailing.pixieset.com/autodetailing/"
            >
              View Now
            </a>
          </div>
        </section>
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {galleryItems.map((item) => (
            <GalleryItem item={item} key={item.id} />
          ))}
        </section>
      </div>
      <ScrollIntoView hashName="#studio" offset="-90px" />
      <div className="text-center py-24 bg-[url('/home/SCD/25.jpeg')] parallax-background">
        <div className="mx-auto max-w-md px-2">
          <h2 className="title tracking-widest">Shine City Detailing</h2>
          <div className="pt-7 font-open-sans-condensed text-lg text-stone-300">
            {`offers top-tier auto detailing services in the Dallas/Fort Worth (DFW) area, specializing in rejuvenating and enhancing the appearance of your vehicle.`}
          </div>
          <section className="text-center uppercase pt-24 text-stone-200">
            <h4 className="text-3xl tracking-[.4em]">Address</h4>
            <div className="pt-6">
              <div className="text-2xl">Dallas</div>
              <div className="text-lg">Fort Worth</div>
            </div>
          </section>
          <section className="text-center uppercase pt-20 text-stone-200">
            <h4 className="text-3xl tracking-[.4em]">Hours</h4>
            <div className="text-2xl pt-6">
              <div>Monday - Friday</div>
              <div>8:00AM - 10:00PM</div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
