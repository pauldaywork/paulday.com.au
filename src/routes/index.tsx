import { createFileRoute } from '@tanstack/react-router'
import { 
  // CloudArrowUpIcon, 
  LockClosedIcon, ServerIcon, CursorArrowRaysIcon, ArrowRightCircleIcon, ArrowUpLeftIcon } from '@heroicons/react/20/solid'
import LogoLoop from '../components/LogoLoop';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiNodedotjs, SiPython, SiPostgresql, SiLinux, SiDocker, SiGithub } from 'react-icons/si';
import TextPressure from '../components/TextPressure';
import LetterGlitch from '../components/LetterGlitch';
import TiltedCard from '../components/TiltedCard';

export const Route = createFileRoute('/')({
  component: App,
})

const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiNodedotjs />, title: "Node.JS", href: "https://" },
  { node: <SiPython />, title: "Python", href: "https://" },
  { node: <SiPostgresql />, title: "PostgreSQL", href: "https://" },
  // { node: <Si />, title: "", href: "https://" },
  { node: <SiLinux />, title: "Linux", href: "https://" },
  { node: <SiDocker />, title: "Docker", href: "https://" },
];

function Logos() {
  return (
    <div className="relative mt-40 mb-10" style={{ 
      height: '200px', 
      position: 'relative', 
      overflow: 'hidden' 
      }}>
      <LogoLoop
        logos={techLogos}
        speed={40}
        direction="left"
        logoHeight={48}
        style={{ color: "#ffffff" }}
        gap={40}
        hoverSpeed={0}
        scaleOnHover
        fadeOut
        fadeOutColor="#000000"
        ariaLabel="Coding Skills"
      />
    </div>
  );
}

export function Intro() {
  return (
    <div className="relative">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-[1300px] py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <div className="h-[100px] md:h-[200px] lg:h-[300px]" style={{ position: 'relative' }}>
              <TextPressure
                text="Paul Day"
                // fontFamily="Montserrat"
                // letterSpacing="-40px"
                minFontSize={20}
              />
            </div>
            <p className="text-center text-base/7 font-semibold text-indigo-400 text-shadow-lg mt-10 mb-15">I help build digital tools for progressive causes</p>
          </div>
        </div>
      </div>
    </div>
  )
}

const Image = ({ item }) => <div className="even:ml-[-200px]">
  <div className="w-[300px] mx-auto mt-[-100px]">
    <TiltedCard
      rotateAmplitude={8}
      scaleOnHover={1.25}
      showTooltip={false}
      containerWidth="300px"
      // containerHeight="320px"
      href={item.link}
      imageSrc={item.image}
      altText={item.name}
      captionText={item.name}
      displayOverlayContent={true}
      overlayContent={<div 
        // className="bg-black/30 text-white shadow-xl/30 absolute top-5 left-5 rounded-lg px-3 font-bold py-2 text-xs ring-1 ring-black/10 hover:ring-black/20 uppercase"
        className="absolute top-5 left-5  text-black" style={{ zIndex: 100 }}
        > 
        <ArrowRightCircleIcon />
        {/* <ArrowUpLeftIcon /> */}
      </div>}
    />
  </div>
</div>


// https://tailwindcss.com/plus-assets/img/component-images/dark-project-app-screenshot.png
export function Content({ reverse = false, title = "", subtitle = "", items = [] }) {
  const img = <div className="md:flex flex-col justify-center hidden">
    {items.map(item => <Image item={item} />)}
  </div>

  const text = <div className={"lg:pt-4 lg:pr-8" + (reverse && " ")}>
    <div className="lg:max-w-lg">
      <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl">
        {title}
      </p>
      <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-400 lg:max-w-none">
        {items.map((item) => (
          <div key={item.name} className="relative pl-9">
            <dt className="inline font-semibold text-white">
              <a href={item.link} target="_blank"><item.icon aria-hidden="true" className="absolute top-1 left-1 size-5 text-indigo-400" />
              {item.name}</a>
            </dt>{' '}
            <dd className="inline">{item.description}</dd>
          </div>
        ))}
      </dl>
    </div>
  </div>
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {reverse ? [text, img] : [img, text]}
        </div>
      </div>
    </div>
  )
}

const Bg1 = () => <div className="w-full h-full absolute bottom-0" style={{ opacity: 0.9 }} >
  <div style={{ zIndex: 1000 }} className="bg-gradient-to-b from-black to-black/0 absolute h-100 w-full"></div>
  <LetterGlitch
    glitchSpeed={50}
    centerVignette={true}
    outerVignette={true}
    smooth={true}
    glitchColors={['#160077ff', '#0028acff', '#5400c2ff']}
  />
</div>

const workItems = [
  // {
  //   link: 'https://anthonyalbanese.com.au/', name: 'Anthony Albanese', image: '/projects/albo.jpg', icon: ArrowRightCircleIcon, description:
  //     "Prime Minister of Australia's Website.",
  // },
  {
    link: 'https://raisely.com/', name: 'Raisely', image: '/projects/raisely.jpg', icon: ArrowRightCircleIcon, description:
      'Fundraising platform for non profits. Suitable for various types of complex fundraising strategies.',
  },
  {
    link: 'https://chuffed.org/', name: 'Chuffed', image: '/projects/chuffed.jpg', icon: ArrowRightCircleIcon, description:
      'Crowdfunding platform for non profits and social issues.',
  },
  // { link: '#', name: 'Unions Australia', image: '/projects/unions.jpg',     icon: ArrowRightCircleIcon, description:
  //     'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.', },
];

const volunteerItems = [
  {
    link: 'https://climatetracker.org/', name: 'Climate Tracker', image: '/projects/tracker.jpg', icon: ArrowRightCircleIcon, description:
      'Platform to train young writers to write and publish impactful journalism on their local issues related to climate change.',
  },
  {
    link: 'https://progtech-report-test-fzxavapeq.vercel.app/', name: '2020 Progressive Tech Report', image: '/projects/progtech.jpg', icon: ArrowRightCircleIcon, description:
      'An Australian national survey of what technology progressive organisations are currently using and the summaried visual report of that data.',
  }
];

function App() {
  return (
    <div className="bg-black relative">
      <div className="flex flex-col relative" style={{ zIndex: 100 }}>
        <Intro />
        <Content title="Work History" subtitle="I worked on" items={workItems} />
        <Content reverse title="Volunteering" subtitle="I have contributed to" items={volunteerItems} />
        <Logos />
      </div>
      <Bg1 />
    </div>
  )
}


///////////////////////////////////
// Notes
///////////////////////////////////

// Docs
// https://ui.shadcn.com/docs/components/empty#background
// https://tailwindcss.com/docs/text-align#examples

// Possbile font options
// https://fonts.google.com/specimen/Space+Grotesk
// https://fonts.google.com/specimen/Montserrat
// https://fonts.google.com/specimen/Lato
// https://fonts.google.com/specimen/Roboto

// Possible Alternative heading
// https://reactbits.dev/text-animations/ascii-text?asciiFontSize=6&text=Paul+Day

// Other ideas
// https://reactbits.dev/animations/gradual-blur
// https://reactbits.dev/backgrounds/letter-glitch?speed=20&showOuterVignette=true&colors=%23f212d9,%235f10fc,%23890463
// https://reactbits.dev/text-animations/scrambled-text?duration=5&speed=1.8&radius=50&scrambleChars=.:-_
