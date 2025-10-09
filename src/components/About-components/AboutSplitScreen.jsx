import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Lottie from 'lottie-react';

// Default paragraphs
const defaultParagraphs = [
  `We are a multidisciplinary team dedicated to building intuitive digital products that help people solve real problems. Our approach blends research-led design with pragmatic engineering to ship delightful experiences fast.`,
  `Over the years we've partnered with startups and enterprises to rethink workflows, simplify complexity, and deliver measurable impact. We value transparency, rapid iteration and long-term partnerships.`,
  `Our culture centers on curiosity and continuous learning — every project is an opportunity to grow. We invest in design systems, shared patterns, and robust tooling so our teams move faster together.`,
  `Sustainability and accessibility guide our decisions. We aim to build products that are inclusive, performant, and maintainable so they stand the test of time.`,
];

export default function AboutSplitScreen({
  paragraphs = defaultParagraphs,
  lottieData = null, 
  autoAdvance = true,
  advanceInterval = 6000,
}) {
  const [index, setIndex] = useState(0);
  const length = paragraphs.length;
  const intervalRef = useRef(null);

  // Respect reduced motion preference
  const [reduceMotion, setReduceMotion] = useState(false);
  useEffect(() => {
    try {
      const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
      setReduceMotion(mq.matches);
      const handler = (e) => setReduceMotion(e.matches);
      mq.addEventListener('change', handler);
      return () => mq.removeEventListener('change', handler);
    } catch {}
  }, []);

  // Auto-advance carousel
  useEffect(() => {
    if (!autoAdvance || reduceMotion) return;
    intervalRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % length);
    }, advanceInterval);
    return () => clearInterval(intervalRef.current);
  }, [autoAdvance, advanceInterval, length, reduceMotion]);

  const goPrev = () => {
    clearInterval(intervalRef.current);
    setIndex((i) => (i - 1 + length) % length);
  };
  const goNext = () => {
    clearInterval(intervalRef.current);
    setIndex((i) => (i + 1) % length);
  };
  const goTo = (i) => {
    clearInterval(intervalRef.current);
    setIndex(i);
  };

  const paraVariant = {
    initial: { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    exit: { opacity: 0, y: -12, transition: { duration: 0.45 } },
  };

  return (
    <section
      className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-white via-[#f6fffb] to-[#e8f9f3] overflow-hidden"
      aria-label="About section"
    >
      <div className="w-[95%] h-[88vh] flex flex-col md:flex-row items-center justify-center gap-8 md:gap-10">

        {/* LEFT: Text Carousel */}
        <div className="w-full md:w-[65%] h-full flex justify-center items-center">
          <div className="w-[95%] h-[85%] bg-white/80 backdrop-blur-md rounded-3xl p-10 md:p-14 shadow-lg border border-[#d6f3eb] flex flex-col justify-between">
            <div>
              <h2 className="text-5xl md:text-6xl font-bold mb-8 text-[#2f7c6a] text-center md:text-left">
                About Skill Hive
              </h2>
              <div className="relative min-h-[160px] flex items-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={index}
                    variants={paraVariant}
                    initial={reduceMotion ? false : "initial"}
                    animate={reduceMotion ? false : "animate"}
                    exit={reduceMotion ? false : "exit"}
                    className="text-gray-700 text-xl md:text-2xl leading-relaxed tracking-wide text-center md:text-left"
                  >
                    {paragraphs[index]}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Controls */}
            <div className="mt-10 flex items-center justify-between flex-wrap gap-4">
              <div className="flex gap-3">
                <button
                  onClick={goPrev}
                  className="px-5 py-2.5 rounded-md text-base bg-[#e3f7f1] text-[#2f7c6a] hover:bg-[#c8efe3] transition font-medium"
                >
                  Prev
                </button>
                <button
                  onClick={goNext}
                  className="px-5 py-2.5 rounded-md text-base bg-gradient-to-r from-[#62b7a3] to-[#7edec8] text-white hover:opacity-90 transition font-medium"
                >
                  Next
                </button>
              </div>

              <div className="flex gap-2 justify-center">
                {paragraphs.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    className={`w-3.5 h-3.5 rounded-full transition-all ${
                      i === index
                        ? "scale-125 bg-gradient-to-r from-[#62b7a3] to-[#7edec8]"
                        : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT: Lottie Animation */}
        <div className="w-full md:w-[35%] h-full flex justify-center items-center">
          <div className="w-[90%] h-[80%] rounded-3xl shadow-lg border border-[#d6f3eb] bg-gradient-to-br from-[#f5fffb] to-[#e9f9f4] overflow-hidden flex items-center justify-center">
            {lottieData ? (
              <Lottie
                animationData={lottieData}
                loop
                autoplay
                className="w-full h-full max-w-[450px] max-h-[450px]"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-gray-300">
                Animation loading...
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
