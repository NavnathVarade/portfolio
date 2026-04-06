import { motion } from 'framer-motion';

const variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
};

export default function Reveal({ children, delay = 0, className = '', as = 'div', ...props }) {
  const Tag = motion[as] || motion.div;

  return (
    <Tag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      variants={variants}
      {...props}
    >
      {children}
    </Tag>
  );
}
