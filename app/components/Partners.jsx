"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "../lib/animation";

const partners = [
  { name: "سرهد للصناعات الغذائية", category: "قطاع الغذاء" },
  { name: "رواف منى", category: "الضيافة" },
  { name: "الهيئة العامة للغذاء والدواء", category: "جهة تنظيمية" },
  { name: "وزارة البلديات والإسكان", category: "حكومي" },
  { name: "شركات المطابخ المتعاقدة", category: "تدريب" },
  { name: "مرافق الإعاشة", category: "خدمات" },
];

export default function Partners() {
  return (
    <section id="partners">
      <div className="container-custom">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-20"
        >
          <span className="text-green-600 uppercase font-semibold tracking-[4px]">
            يثق بنا
          </span>
          <h2 className="section-title mt-4">شركاؤنا وعملاؤنا</h2>
          <p className="section-subtitle mx-auto ">
            نتعاون مع كبرى المنشآت والجهات التنظيمية في المملكة العربية السعودية.
          </p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {partners.map((partner) => (
            <motion.div
              key={partner.name}
              variants={fadeUp}
              className="card flex flex-col items-center justify-center h-28 md:h-36 group cursor-default"
            >
              <h3 className="text-2xl font-black text-slate-700 group-hover:text-green-600 transition-colors duration-300">
                {partner.name}
              </h3>
              <span className="text-sm text-slate-400 mt-2 uppercase tracking-wider">
                {partner.category}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}