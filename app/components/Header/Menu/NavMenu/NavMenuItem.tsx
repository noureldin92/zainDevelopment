import { motion } from "framer-motion";
import React, { memo } from "react";

const NavMenuItem: React.FC<{
  title: string;
}> = memo(({ title }) => {
  return (
    <>
      <motion.li className="hover:bg-blackColor flex ps-2 py-1 rounded-tr-lg rounded-br-lg justify-start items-center cursor-pointer">
        {title}
      </motion.li>
    </>
  );
});

export default NavMenuItem;
