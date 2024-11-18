import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll } from "motion/react";
import { Code2, Layers, Briefcase, Star, Trophy, Rocket } from "lucide-react";

const BentoGrid = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentState, setCurrentState] = useState(0);
  const [prevState, setPrevState] = useState(0);
  const [stateProgress, setStateProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const { scrollYProgress, scrollY } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest) => {
      const element = containerRef.current;
      if (!element) return;

      const rect = element.getBoundingClientRect();
      setIsVisible(rect.top <= 0 && rect.bottom >= 0);
    });

    return () => unsubscribe();
  }, [scrollY]);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      setPrevState(currentState);

      if (latest > 0.66) {
        setCurrentState(2);
        setStateProgress((latest - 0.66) / 0.34);
      } else if (latest > 0.33) {
        setCurrentState(1);
        setStateProgress((latest - 0.33) / 0.33);
      } else {
        setCurrentState(0);
        setStateProgress(latest / 0.33);
      }
    });
    return () => unsubscribe();
  }, [scrollYProgress, currentState]);

  const isFirstToSecondTransition = () => {
    return currentState === 1 && prevState === 0;
  };

  const isSecondToFirstTransition = () => {
    return currentState === 0 && prevState === 1;
  };

  const getTopRightDelay = () => {
    if (isFirstToSecondTransition()) return 0.35;
    if (isSecondToFirstTransition()) return 0;
    return 0;
  };

  const getBottomDelay = () => {
    if (isFirstToSecondTransition()) return 0;
    if (isSecondToFirstTransition()) return 0.35;
    return 0;
  };

  const getProgressColors = () => {
    return {
      background: "bg-dots-back",
      foreground: "bg-dots-front",
    };
  };

  const colors = getProgressColors();

  const ContentVariants = {
    enter: {
      opacity: 0,
      y: 20,
      transition: { duration: 0.3 },
    },
    center: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.3 },
    },
  };

  return (
    <div ref={containerRef} className="h-[450vh] relative">
      {isVisible && (
        <motion.div
          className="fixed top-8 left-1/2 -translate-x-1/2 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div
            className={`h-1 w-32 ${colors.background} rounded-full overflow-hidden`}
          >
            <motion.div
              className={`h-full transition-colors duration-300 ease-in-out ${colors.foreground}`}
              style={{
                width: `${stateProgress * 100}%`,
              }}
            />
          </div>
        </motion.div>
      )}

      <div className="sticky top-0 w-full h-screen flex items-center justify-center pt-14">
        <div className="w-full h-full max-w-[1000px] max-h-[600px] md:max-h-[1900px] lg:max-h-[1900px] relative m-8">
          {/* Left Box */}
          <motion.div
            className="absolute p-2"
            animate={{
              width: currentState === 2 ? "100%" : "50%",
              height: currentState === 2 ? "100%" : "50%",
            }}
            transition={{
              duration: 0.3,
              ease: [0.32, 0.72, 0, 1],
            }}
          >
            <div
              className="w-full h-full rounded-3xl flex items-center justify-center text-white relative overflow-hidden backdrop-blur-xl border border-accent"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.1)",
              }}
            >
              <div
                className="absolute inset-0 opacity-50"
                style={{ mixBlendMode: "overlay" }}
              />
              <div className="relative z-10 w-full h-full p-8">
                <AnimatePresence mode="wait">
                  {currentState === 0 && (
                    <motion.div
                      key="featured"
                      className="flex flex-col items-center space-y-6 w-full"
                      variants={ContentVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                    >
                      <Trophy className="w-12 h-12 text-yellow-400" />
                      <h2 className="text-3xl font-bold text-center">
                        Featured Project
                      </h2>
                      <div className="bg-white/10 rounded-xl p-6 w-full">
                        <h3 className="text-xl font-semibold mb-2">
                          Project Name
                        </h3>
                        <p className="text-gray-300 mb-4">
                          A brief description of your most impressive project
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                            React
                          </span>
                          <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                            Node.js
                          </span>
                          <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                            AWS
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                  {/* Other state content remains the same */}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>

          {/* Top Right Box */}
          <motion.div
            className="absolute top-0 right-0 w-1/2 p-2"
            animate={{
              height: currentState >= 1 ? "100%" : "50%",
              width: currentState === 2 ? "0%" : "50%",
            }}
            transition={{
              duration: 0.3,
              ease: [0.32, 0.72, 0, 1],
              delay: getTopRightDelay(),
            }}
          >
            <div
              className={`w-full h-full rounded-3xl flex items-center justify-center text-white relative overflow-hidden backdrop-blur-xl ${
                currentState !== 2 ? "border border-accent" : ""
              }`}
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.1)",
              }}
            >
              <div
                className="absolute inset-0 opacity-50"
                style={{ mixBlendMode: "overlay" }}
              />
              <div className="relative z-10 w-full h-full p-8">
                <AnimatePresence mode="wait">
                  {/* Content remains the same */}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>

          {/* Bottom Box */}
          <motion.div
            className="absolute bottom-0 left-0 h-1/2 p-2"
            animate={{
              width: currentState >= 1 ? "50%" : "100%",
              height: currentState === 2 ? "0%" : "50%",
            }}
            transition={{
              duration: 0.3,
              ease: [0.32, 0.72, 0, 1],
              delay: getBottomDelay(),
            }}
          >
            <div
              className={`w-full h-full rounded-3xl flex items-center justify-center text-white relative overflow-hidden backdrop-blur-xl ${
                currentState !== 2 ? "border border-accent" : ""
              }`}
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.1)",
              }}
            >
              <div
                className="absolute inset-0 opacity-50"
                style={{ mixBlendMode: "overlay" }}
              />
              <div className="relative z-10 w-full h-full p-8">
                <AnimatePresence mode="wait">
                  {/* Content remains the same */}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default BentoGrid;
