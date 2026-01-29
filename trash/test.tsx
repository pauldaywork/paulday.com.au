import { createFileRoute } from '@tanstack/react-router'
export const Route = createFileRoute('/test')({
  component: App,
})
// import Aurora from '../components/Aurora.jsx';
// import Iridescence from '../components/Iridescence';
// import ColorBends from '../components/ColorBends.jsx'
// import MagicBento from '../components/MagicBento.jsx'
// import FaultyTerminal from '../components/FaultyTerminal.jsx'
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import FlowingMenu from '../components/FlowingMenu'
import TiltedCard from '../components/TiltedCard';
import LogoLoop from '../components/LogoLoop';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiNodedotjs, SiPython, SiPostgresql, SiLinux, SiDocker } from 'react-icons/si';
// import Plasma from '../components/Plasma';
import DarkVeil from '../components/DarkVeil';


const BgVeil = () => <DarkVeil
    speed={1.4}
    scanlineFrequency={0.5}
    warpAmount={3.4}
  />
// 
const BgPlasma = () => <div style={{ width: '100%', height: '600px', position: 'relative' }}>
  <Plasma 
    color="#ff6b35"
    speed={0.6}
    direction="forward"
    scale={1.1}
    opacity={0.8}
    mouseInteractive={true}
  />
</div>

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
  // { node: <Si />, title: "", href: "https://" },
  // { node: <Si />, title: "", href: "https://" },
  // { node: <Si />, title: "", href: "https://" },
  // { node: <Si />, title: "", href: "https://" },

];

// Alternative with image sources
// const imageLogos = [
//   { src: "/logos/company1.png", alt: "Company 1", href: "https://company1.com" },
//   { src: "/logos/company2.png", alt: "Company 2", href: "https://company2.com" },
//   { src: "/logos/company3.png", alt: "Company 3", href: "https://company3.com" },
// ];

function Logos() {
  return (
    <div className="relative" style={{ height: '200px', position: 'relative', overflow: 'hidden'}}>
      {/* Basic horizontal loop */}
      <LogoLoop
        logos={techLogos}
        speed={120}
        direction="left"
        logoHeight={48}
        style={{ color: "#ffffff"}}
        gap={40}
        hoverSpeed={0}
        scaleOnHover
        fadeOut
        fadeOutColor="#000000"
        ariaLabel="Technology partners"
      />
      
      {/* Vertical loop with deceleration on hover */}
      {/* <LogoLoop
        logos={techLogos}
        speed={80}
        direction="up"
        logoHeight={48}
        gap={40}
        hoverSpeed={20}
        fadeOut
      /> */}
    </div>
  );
}

export function Example2() {
  return (
    <div className="relative">
      <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="relative isolate overflow-hidden bg-gray-800 px-6 pt-16 after:pointer-events-none after:absolute after:inset-0 after:inset-ring after:inset-ring-white/10 sm:rounded-3xl sm:px-16 after:sm:rounded-3xl md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          <svg
            viewBox="0 0 1024 1024"
            aria-hidden="true"
            className="absolute top-1/2 left-1/2 -z-10 size-256 -translate-y-1/2 mask-[radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
          >
            <circle r={512} cx={512} cy={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
            <defs>
              <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                <stop stopColor="#7775D6" />
                <stop offset={1} stopColor="#E935C1" />
              </radialGradient>
            </defs>
          </svg>
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <h2 className="text-3xl font-semibold tracking-tight text-balance text-white sm:text-4xl">
              Boost your productivity. Start using our app today.
            </h2>
            <p className="mt-6 text-lg/8 text-pretty text-gray-300">
              Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <a
                href="#"
                className="rounded-md bg-gray-700 px-3.5 py-2.5 text-sm font-semibold text-white inset-ring inset-ring-white/5 hover:bg-gray-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                {' '}
                Get started{' '}
              </a>
              <a href="#" className="text-sm/6 font-semibold text-white hover:text-gray-100">
                Learn more
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
          <div className="relative mt-16 h-80 lg:mt-8">
            <img
              alt="App screenshot"
              src="https://tailwindcss.com/plus-assets/img/component-images/dark-project-app-screenshot.png"
              width={1824}
              height={1080}
              className="absolute top-0 left-0 w-228 max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
            />
          </div>
        </div>
      </div>
    </div>
  )

}

export function Example() {
  return (
    <div className="reative py-24 sm:py-32 ">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8 relative">
        <h2 className="text-center text-base/7 font-semibold text-indigo-400 text-shadow-lg">Deploy faster</h2>
        <p className="mx-auto mt-2 max-w-lg text-center text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl text-shadow-lg">
          Everything you need to deploy your app
        </p>
        <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
          <div className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-lg bg-gray-800 lg:rounded-l-4xl" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
              <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                <p className="mt-2 text-lg font-medium tracking-tight text-white max-lg:text-center">Mobile friendly</p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-400 max-lg:text-center">
                  Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.
                </p>
              </div>
              <div className="@container relative min-h-120 w-full grow max-lg:mx-auto max-lg:max-w-sm">
                <div className="absolute inset-x-10 top-10 bottom-0 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-gray-700 bg-gray-900 outline outline-white/20">
                  <img
                    alt=""
                    src="/projects/progtech.jpg"
                    className="size-full object-cover object-top"
                  />
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-white/15 lg:rounded-l-4xl" />
          </div>
          <div className="relative max-lg:row-start-1">
            <div className="absolute inset-px rounded-lg bg-gray-800 max-lg:rounded-t-4xl" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-lg font-medium tracking-tight text-white max-lg:text-center">Performance</p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-400 max-lg:text-center">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit maiores impedit.
                </p>
              </div>
              <div className="flex flex-1 items-center justify-center px-8 max-lg:pt-10 max-lg:pb-12 sm:px-10 lg:pb-2">
                <img
                  alt=""
                  src="/projects/albo.jpg"
                  className="w-full max-lg:max-w-xs"
                />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-white/15 max-lg:rounded-t-4xl" />
          </div>
          <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
            <div className="absolute inset-px rounded-lg bg-gray-800" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-lg font-medium tracking-tight text-white max-lg:text-center">Security</p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-400 max-lg:text-center">
                  Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi.
                </p>
              </div>
              <div className="@container flex flex-1 items-center max-lg:py-6 lg:pb-2">
                <img
                  alt=""
                  src="/projects/chuffed.jpg"
                  className="h-[min(152px,40cqw)] object-cover"
                />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-white/15" />
          </div>
          <div className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-lg bg-gray-800 max-lg:rounded-b-4xl lg:rounded-r-4xl" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
              <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                <p className="mt-2 text-lg font-medium tracking-tight text-white max-lg:text-center">Powerful APIs</p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-400 max-lg:text-center">
                  Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget sem sodales gravida.
                </p>
              </div>
              <div className="relative min-h-120 w-full grow">
                <div className="absolute top-10 right-0 bottom-0 left-10 overflow-hidden rounded-tl-xl bg-gray-900/60 outline outline-white/10">
                  <div className="flex bg-gray-900 outline outline-white/5">
                    <div className="-mb-px flex text-sm/6 font-medium text-gray-400">
                      <div className="border-r border-b border-r-white/10 border-b-white/20 bg-white/5 px-4 py-2 text-white">
                        NotificationSetting.jsx
                      </div>
                      <div className="border-r border-gray-600/10 px-4 py-2">App.jsx</div>
                    </div>
                  </div>
                  <div className="px-6 pt-6 pb-14">{/* Your code example */}</div>
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-white/15 max-lg:rounded-b-4xl lg:rounded-r-4xl" />
          </div>
        </div>
      </div>
    </div>
  )
}


export function ExampleBento() {
  return (
    <div className="py-24 sm:py-32 ">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8 relative">
        <h2 className="text-center text-base/7 font-semibold text-indigo-400 text-shadow-lg">Deploy faster</h2>
        <p className="mx-auto mt-2 max-w-lg text-center text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl text-shadow-lg">
          Everything you need to deploy your app
        </p>
        <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
          {/* <div className="relative lg:row-span-2"> */}
          <MagicBento
            textAutoHide={true}
            enableStars={true}
            enableSpotlight={true}
            enableBorderGlow={true}
            enableTilt={true}
            enableMagnetism={true}
            clickEffect={true}
            spotlightRadius={300}
            particleCount={12}
            glowColor="132, 0, 255"
          />
        </div>
      </div>
    </div>
  )
}
      {/* <Background /> */}

      {/* <BgRays /> */}
      {/* <Background style={{ transform: "rotate(180deg)", bottom:0 }} /> */}

      {/* <FaultyTerminal 
        scale={2.8}
        digitSize={1.6}
        timeScale={3}
        scanlineIntensity={2}
        curvature={0.32}
        tint="#190094"
        noiseAmp={0.7}
        brightness={0.3}
      /> */}


const BgRays = () => <div style={{ width: '100%', height: '600px', position: 'absolute', bottom: 0, zIndex: -100 }}>
  <LightRays
    raysOrigin="bottom-center"
    raysColor="#ae01fe"
    raysSpeed={1.7}
    lightSpread={2}
    rayLength={2.1}
    fadeDistance={1.6}
    saturation={0.2}
    distortion={0.4}
    className="custom-rays"
  />
</div>


const BgPixel = () => <div style={{ width: '100%', height: '600px', position: 'absolute', bottom: 0 }}>
  <PixelBlast
    variant="circle"
    pixelSize={3}
    patternScale={1.75}
    pixelSizeJitter={0.85}
    speed={1}
    edgeFade={0.1}
    color="#6802e3"
  />
</div>


const features = [
  {
    name: 'Push to deploy.',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'SSL certificates.',
    description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
    icon: LockClosedIcon,
  },
  {
    name: 'Database backups.',
    description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    icon: ServerIcon,
  },
]

export default function Example3() {
  return (
    <div className="overflow-hidden  py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pt-4 lg:pr-8">
            <div className="lg:max-w-lg">
              <h2 className="text-base/7 font-semibold text-indigo-400">Deploy faster</h2>
              <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl">
                A better workflow
              </p>
              <p className="mt-6 text-lg/8 text-gray-300">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque,
                iste dolor cupiditate blanditiis ratione.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-400 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-white">
                      <feature.icon aria-hidden="true" className="absolute top-1 left-1 size-5 text-indigo-400" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <img
            alt="Product screenshot"
            src="https://tailwindcss.com/plus-assets/img/component-images/dark-project-app-screenshot.png"
            width={2432}
            height={1442}
            className="w-3xl max-w-none rounded-xl shadow-xl ring-1 ring-white/10 sm:w-228 md:-ml-4 lg:-ml-0"
          />
        </div>
      </div>
    </div>
  )
}

// https://reactbits.dev/components/staggered-menu#home
// https://reactbits.dev/animations/logo-loop
export function Intro() {
  return (
    <div className="relative">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-400 ring-1 ring-white/10 hover:ring-white/20">
              Currently working on an <a href="#" className="font-semibold text-indigo-400"><span aria-hidden="true" className="absolute inset-0"></span>
                free offline mental health toolkit <span aria-hidden="true">&rarr;</span></a> to assist alongside clinical therapy
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-5xl font-semibold tracking-tight text-balance text-white sm:text-7xl text-shadow-lg mb-6">Paul Day</h1>
            <p className="text-center text-base/7 font-semibold text-indigo-400 text-shadow-lg">I help build digital tools for progressive causes</p>
            {/* <div className="mt-10 flex items-center justify-center gap-x-6">
              <a href="#" className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Past Projects</a>
              <a href="#" className="text-sm/6 font-semibold text-white">My Values</a>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}


/* <ColorBends
    rotation={45}
    speed={0.2}
    colors={["#5227FF","#FF9FFC","#7cff67","#24ffda","#ff0505"]}
    transparent
    autoRotate={0}
    scale={1}
    frequency={1}
    warpStrength={1}
    mouseInfluence={1}
    parallax={0.5}
    noise={0.1}
  /> 
  <Aurora
  color1="#ff66a8"
  color2="#9c38ff"
  color3="#0022cc"
  speed={1.5}
  blend={1}
/>  <Iridescence
  color={[1, 1, 1]}
  mouseReact={false}
  amplitude={0.1}
  speed={1.0}
/> */

// https://reactbits.dev/backgrounds/dark-veil?speed=1.4&scanlineFrequency=0.5&warpAmount=3.4

export function Background() {
  return (
    <div style={{ width: '100%', height: '100%', position: 'absolute' }}>
      <BgVeil />
      {/* <BgPlasma /> */}
     {/* <FaultyTerminal 
        scale={2.8}
        digitSize={1.6}
        timeScale={3}
        scanlineIntensity={2}
        curvature={0.32}
        tint="#190094"
        noiseAmp={0.7}
        brightness={0.3}
      /> */}
    </div>
  )
}


            {/* <div
              // className="relative rounded-full px-3 py-1 text-sm/6 text-gray-400 ring-1 ring-white/10 hover:ring-white/20"
              className={bubbleStyle}
            >
              Currently working on an <a href="#" className="font-semibold text-indigo-400"><span aria-hidden="true" className="absolute inset-0"></span>
                free offline mental health toolkit <span aria-hidden="true">&rarr;</span></a> to assist alongside clinical therapy
            </div> */}

// export function Background({ style = {} }) {
//   return (
//     <div style={{ width: '100%', height: '900px', position: 'absolute', ...style }}>
//       <BgVeil />

//     </div>
//   )
// }


const demoItems = [
  { link: '#', text: 'Anthony Albanese', image: '/projects/albo.jpg' },
  { link: '#', text: 'Raisely', image: '/projects/raisely.jpg' },
  { link: '#', text: 'Chuffed', image: '/projects/chuffed.jpg' },
  { link: '#', text: 'Unions Australia', image: '/projects/unions.jpg' },
  { link: '#', text: 'Climate Tracker', image: '/projects/tracker.jpg' },
  { link: '#', text: '2020 Progressive Tech Report', image: '/projects/progtech.jpg' }
];

export function ProjectsCompact() {
  return (
    <div className="relative border-b-1 border-b-white mb-5" >
      <FlowingMenu items={demoItems} />
    </div>
  )
}


export function Projects() {
  return (
    <div className="relative" >
      <p className="mx-auto mb-4 mt-2 max-w-lg text-center text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl text-shadow-lg">
        Past Projects
      </p>
      <h2 className="text-center text-base/7 font-semibold text-indigo-400 text-shadow-lg mb-2  ">
        I have contributed to
      </h2>
      <div className="flex flex-wrap justify-center">
        {demoItems.map(i => <div className="m-10"><TiltedCard
          rotateAmplitude={21}
          scaleOnHover={1.25}
          showTooltip={false}
          // containerWidth="100%"
          // containerHeight="320px"
          className="tilted-card-demo-text"
          imageSrc={i.image}
          altText={i.text}
          captionText={i.text}
          // displayOverlayContent={true}
          overlayContent={<div className="bg-black/30 text-white shadow-xl/30 absolute top-5 left-5 rounded-lg px-3 font-bold py-2 text-xs ring-1 ring-black/10 hover:ring-black/20 uppercase">{i.text}</div>}
        /></div>)}
      </div>
      {/* <FlowingMenu items={demoItems} /> */}
    </div>
  )
} // css: backdrop-blur-md lg:basis-1/3 md:basis-1/2 sm:basis-1 pt-20

// export function Footer() {
//   return (
//     <div className="relative isolate px-6 pt-14 lg:px-8">
//       <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
//         <footer className="bg-neutral-primary-soft rounded-base shadow-xs border border-default m-4">
//           <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
//             <span className="text-sm text-body sm:text-center">© 2023 <a href="https://flowbite.com/" className="hover:underline">Flowbite™</a>. All Rights Reserved.
//             </span>
//             <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-body sm:mt-0">
//               <li>
//                 <a href="#" className="hover:underline me-4 md:me-6">About</a>
//               </li>
//               <li>
//                 <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
//               </li>
//               <li>
//                 <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
//               </li>
//               <li>
//                 <a href="#" className="hover:underline">Contact</a>
//               </li>
//             </ul>
//           </div>
//         </footer>
//       </div> </div>
//   )
// }

// const bubbleStyle = "bg-white/20 backdrop-blur-[10px] border mx-auto rounded-full border-solid px-3 py-1 text-xs/6 text-gray-400"


// github icon for intro block  {/* <div className="flex flex-row justify-center text-base/7 font-semibold text-indigo-400 text-shadow-lg mt-5  text-xl"> <a className="" href="#"><SiGithub /></a></div> */}


export function Footer() {
  return (
    <footer className="relative py-40 text-[90px] text-white" >
      <div className=" justify-center flex">
        {/* <a className="" href="#"><SiGithub /></a> */}
      </div>
    </footer>
  )
}

function App() {
  return (
    <div className="bg-black">
      <Background />
      <Intro />


      <ProjectsCompact />
            <Logos />
                  {/* <Projects /> */}
      {/* <Example /> */}
      {/* <Example2 /> */}
      {/* <Example3 /> */}
      <Footer />
    </div>
  )


}

