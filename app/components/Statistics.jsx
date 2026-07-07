"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Building2, Users, GraduationCap, ShieldCheck } from "lucide-react";

const stats = [
  {
    icon: <Building2 size={36} />,
    number: 100,
    suffix: "+",
    title: "منشأة غذائية",
  },
  {
    icon: <Users size={36} />,
    number: 1000,
    suffix: "+",
    title: "موظف تم تدريبه",
  },
  {
    icon: <GraduationCap size={36} />,
    number: 4,
    suffix: "",
    title: "لغات التدريب",
  },
  {
    icon: <ShieldCheck size={36} />,
    number: 100,
    suffix: "%",
    title: "الالتزام",
  },
];

function AnimatedCounter({ target, suffix }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function Statistics() {
  return (
    <section className="bg-green-900 text-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-green-600/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-500/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="uppercase tracking-[4px] text-green-500 font-semibold">
            أثرنا
          </span>
          <h2 className="text-4xl lg:text-5xl font-black mt-4">
            أرقام تتحدث
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 md:gap-10">
          {stats.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="text-center"
            >
              <div className="flex justify-center text-green-500 mb-4 md:mb-6">
                {item.icon}
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black">
                <AnimatedCounter target={item.number} suffix={item.suffix} />
              </h2>

              <p className="mt-2 md:mt-3 text-base md:text-lg text-slate-200">
                {item.title}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}