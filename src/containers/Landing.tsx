import { FaGithub, FaRegEnvelope, FaTwitter } from "react-icons/fa";

const LandingContainer = () => {
  return (
    <>
      <section className="relative w-screen h-screen flex flex-col justify-center items-center bg-slate-800 text-gray-300">
        <section className="text-center mb-2">
          <h1 className="text-[100px] md:text-[200px] hand-write text-teal-400">{`Yutthana Yahan.`}</h1>
        </section>

        <section className="pb-28 text-center">
          <h2 className="text-3xl font-thin">Web developer & Web designer</h2>
        </section>

        <footer className="absolute bottom-0 mb-8 flex justify-center gap-4">
          <address>
            <a href="mailto:thyahan@gmail.com">
              <FaRegEnvelope />
            </a>
          </address>
          <a href="https://github.com/thyahan">
            <FaGithub />
          </a>
          <a href="https://twitter.com/thyahan">
            <FaTwitter />
          </a>
        </footer>
      </section>
    </>
  );
};

export default LandingContainer;
