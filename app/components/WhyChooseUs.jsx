"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Award,
  Building2,
  GraduationCap,
} from "lucide-react";
import { fadeUp, stagger } from "../lib/animation";

const reasons = [
  {
    icon: <ShieldCheck size={34} />,
    title: "أعلى معايير السلامة",
    text: "نطبق أنظمة سلامة الغذاء العالمية لضمان حماية المستهلك وجودة التشغيل.",
  },
  {
    icon: <Award size={34} />,
    title: "استشاريون معتمدون",
    text: "خبراء متخصصون في HACCP وISO 22000 وأنظمة إدارة الجودة الغذائية.",
  },
  {
    icon: <Building2 size={34} />,
    title: "الامتثال الحكومي",
    text: "نساعد المنشآت على تلبية اشتراطات البلديات وهيئة الغذاء والدواء مع دعم توثيقي كامل.",
  },
  {
    icon: <GraduationCap size={34} />,
    title: "تدريب احترافي",
    text: "تدريب العاملين في مجال الغذاء بأربع لغات (عربية، إنجليزية، أوردية، إندونيسية) ببرامج معتمدة.",
  },
];

export default function WhyChooseUs() {
  return (
    <section>
      <div className="container-custom">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-0"
        >
          <span className="text-green-500 uppercase font-semibold tracking-[4px]">
            لماذا سفك
          </span>
          <h2 className="section-title mt-4">التميز من خلال الخبرة</h2>
          <p className="section-subtitle mx-auto ">
            نجمع بين المعرفة العميقة بالقطاع والحلول العملية لتحقيق نتائج ملموسة.
          </p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-6 md:gap-10 mt-12 md:mt-20"
        >
          {reasons.map((reason) => (
            <motion.div
              key={reason.title}
              variants={fadeUp}
              className="card flex gap-6 group"
            >
              <div className="w-16 h-16 rounded-2xl bg-green-50 flex items-center justify-center text-green-600 shrink-0 transition-transform duration-300 group-hover:scale-110">
                {reason.icon}
              </div>
              <div>
                <h3 className="text-2xl font-bold">{reason.title}</h3>
                <p className="text-slate-600 mt-4 leading-8">{reason.text}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}