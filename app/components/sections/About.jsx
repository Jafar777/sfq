"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  ClipboardCheck,
  GraduationCap,
  Building2,
} from "lucide-react";

import SectionHeading from "../ui/SectionHeading";
import { fadeLeft, fadeRight } from "../../lib/animation";

const cards = [
  {
    icon: <ShieldCheck size={30} />,
    title: "سلامة الغذاء",
    text: "نطبق أنظمة سلامة الغذاء العالمية لحماية المستهلك وتعزيز جودة العمليات التشغيلية.",
  },
  {
    icon: <ClipboardCheck size={30} />,
    title: "الامتثال",
    text: "نساعد المنشآت على الالتزام باشتراطات وزارة البلديات وهيئة الغذاء والدواء.",
  },
  {
    icon: <GraduationCap size={30} />,
    title: "التدريب",
    text: "برامج تدريبية مهنية متعددة اللغات في سلامة الغذاء.",
  },
  {
    icon: <Building2 size={30} />,
    title: "الاستشارات",
    text: "خدمات استشارية متكاملة من التخطيط إلى الحصول على الشهادات.",
  },
];

export default function About() {
  return (
    <section id="about">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 lg:gap-24 items-center">
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-green-500/20 blur-3xl" />
            <Image
              src="/foodSafty.jpg"
              width={700}
              height={900}
              alt="سلامة الغذاء"
              className="rounded-[40px] shadow-2xl"
            />
            <div className="absolute -bottom-4 -right-4 md:-bottom-8 md:-right-8 p-5 md:p-8 rounded-2xl md:rounded-3xl ">
              <p className="text-3xl md:text-5xl font-black text-green-600">10+</p>
              <p className="mt-2 text-slate-700">سنوات خبرة مجتمعة</p>
            </div>
          </motion.div>

          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <SectionHeading
              subtitle="من نحن"
              title="استشارات غذائية احترافية"
            />

            <p className="section-subtitle">
              سفك هي شركة مختصة في خدمات الاستشارات الغذائية، نقدم خدمات متعددة
              للمطابخ والمطاعم والمنشآت الغذائية للمحافظة على سلامة وجودة الغذاء
              المقدم. كما نقدم الشهادات المختصة في سلامة الغذاء، ونضمن جودة العمل
              والاحترافية من خلال تطبيق أعلى معايير الجودة، وهدفنا هو مساعدة
              المنشآت الغذائية لتحقيق الامتثال الغذائي الكامل.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mt-12">
              {cards.map((card) => (
                <div key={card.title} className="card">
                  <div className="text-green-600">{card.icon}</div>
                  <h3 className="font-bold text-xl mt-6">{card.title}</h3>
                  <p className="text-slate-600 leading-8 mt-4">{card.text}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}