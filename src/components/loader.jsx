import { motion } from "framer-motion";

export default function Loader({ onComplete }) {
  return (
    <section className="fixed inset-0 `z-[100] bg-yellow-50 flex justify-center items-center flex-col">
      <motion.div
        className="flex flex-col items-center"
        initial={{ x: -200 }}
        animate={{ x: 0 }}
        transition={{ duration: 5 }}
        onAnimationComplete={() => {
          setTimeout(onComplete, 3000);
        }}
      >
        <div className="flex flex-row gap-3">
          <motion.p
            className="w-5 h-5 rounded-full bg-black"
            initial={{ x: -250, rotate: 0 }}
            animate={{ x: 0, rotate: 360 }}
            transition={{ duration: 2, delay: 0 }}
          />

          <motion.p
            className="w-5 h-5 rounded-full bg-black "
            initial={{ x: -200, rotate: 0 }}
            animate={{ x: 0, rotate: 360 }}
            transition={{ duration: 1, delay: 0.2 }}
          />

          <motion.p
            className="w-5 h-5 rounded-full bg-black "
            initial={{ x: -100, rotate: 0 }}
            animate={{ x: 0, rotate: 360 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          />
        </div>
        
        <motion.p
          className="text-2xl font-semibold "
          initial={{ x: 10 }}
          animate={{ x: 0 }}
          transition={{
            duration: 2,
            ease: "ease-in",
            delay:1,
          }}
        >
          Loading...
        </motion.p>
      </motion.div>
    </section>
  );
}
