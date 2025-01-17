import { motion } from "motion/react";
const Motion = () => {
  const box = {
    width: 100,
    height: 100,
    backgroundColor: "#9911ff",
    borderRadius: 5,
  };
  return (
    <div>
      <motion.div
        className="m-8 w-40 h-20 rounded-sm"
        initial={{ opacity: 0.8, x: -200 }}
        animate={{
          opacity: 1,
          x: 20,
          transition: { duration: 1.5 },
        }}
      >
        hello this Tom
      </motion.div>

      <motion.div
        className="m-8 w-40 h-20 rounded-sm"
        initial={{ opacity: 0.8, x: -200 }}
        animate={{
          opacity: 1,
          x: 20,

          transition: { duration: 1.5, delay: 0.5 },
        }}
      >
        Pavan MG
        <br />I build things for web
      </motion.div>

      <motion.div
      className="ml-8"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.8 }}
        style={box}
      />
      
    </div>
  );
};

export default Motion;
