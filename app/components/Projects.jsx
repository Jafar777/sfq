"use client";

import { motion } from "framer-motion";
import { CheckCircle, ArrowUpRight } from "lucide-react";
import { fadeUp, stagger } from "../lib/animation";

const projects = [
  {
    title: "شركة سرهد للصناعات الغذائية",
    description:
      "متابعة ومراقبة سلامة الأغذية وتطبيق نظام HACCP وISO 22000 خلال موسم حج 1446.",
    tags: ["HACCP", "مراقبة", "الحج"],
  },
  {
    title: "شركة رواف منى",
    description:
      "مراقبة جودة وسلامة الأغذية وتطبيق نظام الرقابة الصحية في مساكن ضيوف الرحمن – موسم 1446.",
    tags: ["جودة", "امتثال", "مطبخ"],
  },
  {
    title: "تدريب موظفي المطابخ المتعاقدة",
    description:
      "تدريب مكثف للعاملين في المطابخ المتعاقدة على سلامة الغذاء وتحقيق الوعي الغذائي.",
    tags: ["تدريب", "توعية", "تطوير"],
  },
];

export default function Projects() {
  return (
    <section id="projects">
      <div className="container-custom">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-20"
        >
          <span className="text-green-500 uppercase font-semibold tracking-[4px]">
            خبراتنا
          </span>
          <h2 className="section-title mt-4">أبرز أعمالنا</h2>
          <p className="section-subtitle text-center mx-auto">
            إنجازاتنا الميدانية في المطابخ والفنادق ومرافق الإعاشة.
          </p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={fadeUp}
              className="card group cursor-default relative overflow-hidden"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-green-50 flex items-center justify-center text-green-600">
                  <CheckCircle size={28} />
                </div>
                <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-green-600 group-hover:text-white transition-colors duration-300">
                  <ArrowUpRight size={18} />
                </div>
              </div>

              <h3 className="text-2xl font-bold">{project.title}</h3>
              <p className="text-slate-600 mt-4 leading-8">{project.description}</p>

              <div className="flex flex-wrap gap-2 mt-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full bg-green-50 text-green-700 text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}