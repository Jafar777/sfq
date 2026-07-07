"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  BadgeCheck,
  Building2,
  Users,
  ArrowLeft,
} from "lucide-react";

const stats = [
  {
    icon: <Building2 size={26} />,
    title: "منشآت غذائية",
    value: "100+",
  },
  {
    icon: <Users size={26} />,
    title: "موظف تم تدريبه",
    value: "1000+",
  },
  {
    icon: <BadgeCheck size={26} />,
    title: "شهادات",
    value: "HACCP & ISO",
  },
  {
    icon: <ShieldCheck size={26} />,
    title: "سلامة الغذاء",
    value: "معايير عالمية",
  },
];

export default function Hero() {
  return (
    <section
      id="hero"
      dir="rtl"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/Hero.png"
          className="w-full h-full object-cover"
          alt="خلفية سفك"
        />
        <div className="absolute inset-0 bg-slate-900/70" />
      </div>

      {/* Blur effects */}
      <div className="absolute w-[500px] h-[500px] bg-green-500/20 blur-[120px] rounded-full top-10 right-10" />
      <div className="absolute w-[300px] h-[300px] bg-cyan-500/20 blur-[100px] rounded-full bottom-10 left-10" />

      <div className="container-custom relative z-10">
        <div className="max-w-4xl">
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="uppercase tracking-[5px] text-green-400 font-semibold"
          >
            استشارات غذائية احترافية
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-7xl font-black text-white mt-4 md:mt-6 leading-tight"
          >
            حماية سلامة الغذاء
            <br />
            <span className="gradient-text">من خلال التميز</span>
            <br />
            والاحترافية
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-slate-300 text-base md:text-lg lg:text-xl leading-7 md:leading-9 mt-6 md:mt-8 lg:mt-10 max-w-3xl"
          >
            شركة سفك تقدم استشارات احترافية، تطبيق نظام HACCP،
            إعداد ISO 22000، مراقبة جودة الغذاء، الامتثال التنظيمي،
            وتدريب متخصص في سلامة الغذاء بأربع لغات.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-4 md:gap-6 mt-8 md:mt-10 lg:mt-12"
          >
            <a href="#services" className="btn-primary gap-3">
              استكشف الخدمات
              <ArrowLeft size={18} />
            </a>
            <a href="#contact" className="btn-secondary">
              احصل على استشارة
            </a>
          </motion.div>
        </div>

        {/* Floating stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-6 mt-10 md:mt-14 lg:mt-20">
          {stats.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 + 0.6 }}
              className="rounded-2xl lg:rounded-3xl p-4 md:p-5 lg:p-6 text-white"
            >
              <div className="text-green-300 w-8 h-8 md:w-10 md:h-10 flex items-center justify-center">
                {item.icon}
              </div>
              <h2 className="text-lg md:text-xl lg:text-2xl font-black mt-2 md:mt-3 lg:mt-4">
                {item.value}
              </h2>
              <p className="mt-1 text-slate-300 text-xs md:text-sm lg:text-base">
                {item.title}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <div className="w-7 h-12 border-2 border-white rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 16, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-2 h-2 rounded-full bg-white mt-2"
          />
        </div>
      </div>
    </section>
  );
}