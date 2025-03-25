import { AnimatePresence, motion } from "framer-motion";

export default function GlobalAlert({ children, show, type }) {
  const types = {
    success:
      "fixed top-[5em] right-[5em] px-4 py-2 rounded-sm bg-success-darker border border-success text-white",
    danger:
      "fixed top-[5em] right-[5em] px-4 py-2 rounded-sm bg-danger-darker border border-danger text-white",
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className={types[type]}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
