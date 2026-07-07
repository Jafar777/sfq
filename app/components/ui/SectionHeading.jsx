"use client";

import { motion } from "framer-motion";
import { fadeUp } from "../../lib/animation";

export default function SectionHeading({

subtitle,

title,

center=false,

}){

return(

<motion.div

variants={fadeUp}

initial="hidden"

whileInView="show"

viewport={{once:true}}

className={center?"text-center":"text-right"}


>

<span  className="uppercase tracking-[4px] text-green-600 font-semibold">

{subtitle}

</span>

<h2 className="section-title mt-5">

{title}

</h2>

</motion.div>

);

}