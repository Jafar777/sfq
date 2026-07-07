"use client";

import { motion } from "framer-motion";
import {
  BadgeCheck,
  ClipboardCheck,
  Shield,
  FileCheck,
} from "lucide-react";
import { fadeUp, stagger } from "../lib/animation";

const certifications = [
  {
    icon: <BadgeCheck size={40} />,
    title: "HACCP",
    description: "نظام تحليل المخاطر ونقاط التحكم الحرجة – تطبيق واعتماد.",
  },
  {
    icon: <ClipboardCheck size={40} />,
    title: "ISO 22000",
    description: "النظام الدولي لإدارة سلامة الغذاء – إعداد وتوثيق.",
  },
  {
    icon: <Shield size={40} />,
    title: "معايير سلامة الغذاء",
    description: "أفضل الممارسات العالمية لضمان سلامة وجودة الغذاء.",
  },
  {
    icon: <FileCheck size={40} />,
    title: "الامتثال الحكومي",
    description: "التوافق الكامل مع اشتراطات هيئة الغذاء والدواء والبلديات.",
  },
];

export default function Certifications() {
  return (
    <section className="bg-slate-100">
      <div className="container-custom">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-20"
        >
          <span className="text-green-600 uppercase font-semibold tracking-[4px]">
            المعايير
          </span>
          <h2 className="section-title mt-4">الشهادات والامتثال</h2>
          <p className="section-subtitle mx-auto ">
            نضمن لمنشأتك تحقيق أعلى المعايير الدولية والمحلية.
          </p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {certifications.map((item) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              className="card text-center group"
            >
              <div className="w-20 h-20 mx-auto rounded-2xl bg-green-50 flex items-center justify-center text-green-600 transition-transform duration-300 group-hover:scale-110">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mt-6">{item.title}</h3>
              <p className="text-slate-600 mt-4 leading-7 text-sm">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}