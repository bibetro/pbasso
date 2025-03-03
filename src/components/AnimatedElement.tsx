import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode;
  delay?: number;
}

export default function AnimatedElement({ children, delay = 0 }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  )
}