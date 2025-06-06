import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { memo } from "react";

const SlidingImage: React.FC<{ images: StaticImageData[]; index: number }> =
  memo(({ images, index }) => {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 1.3 }}
        animate={{ opacity: 1, scale: 1 }}>
        <Image
          priority
          src={images[index]}
          alt={`Slide ${index + 1}`}
          width={1200}
          height={400}
          className="rounded-lg transition-all duration-5000 ease-in-out  mx-auto"
        />
      </motion.div>
    );
  });

export default SlidingImage;
