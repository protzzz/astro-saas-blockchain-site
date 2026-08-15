import { CutCornerButton } from '@components/cut_corner_button';
import { Hexagon } from '@components/hexagon';

export const HeroSection = () => {
  return (
    <section className="overflow-x-clip py-24 md:py-52">
      <div className="container">
        <p className="text-center font-extrabold tracking-wider text-zinc-500 uppercase">
          Introducing Blockforge
        </p>
        <h1 className="font-heading mx-auto mt-4 max-w-3xl text-center text-5xl font-black md:text-6xl lg:text-7xl">
          The Future of Blockchain is Here.
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-center text-xl text-zinc-400 md:text-2xl">
          Blockforge is pioneering smart contract intergrity with cutting-edge data solutions.
        </p>
        <div className="mt-10 flex justify-center">
          <CutCornerButton className="">Get Started</CutCornerButton>
        </div>
        <div className="mt-24 flex justify-center">
          <div className="relative z-0 inline-flex">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <Hexagon className="size-275" />
            </div>
            <img
              src="/assets/images/icosahedron.png"
              alt=""
              className="- absolute top-1/2 left-1/2 -z-10 w-[calc(100%+100px)] max-w-none -translate-x-1/2 -translate-y-1/2 brightness-4 hue-rotate-240 saturate-10"
            />
            <img
              src="/assets/images/icosahedron.png"
              alt="Icosahedron 3D Image"
              className="w-125"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
