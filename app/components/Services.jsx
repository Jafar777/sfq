"use client";

import { motion } from "framer-motion";
import services from "../data/services";
import { fadeUp, stagger } from "../lib/animation";

export default function Services() {
  return (
    <section id="services" className="bg-slate-100 ">
      <div className="container-custom">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-20"
        >
          <span className="text-green-600 font-semibold uppercase tracking-[4px]">
            خدماتنا
          </span>

          <h2 className="section-title mt-4">خدمات غذائية احترافية</h2>

          <p className="section-subtitle text-center mx-auto ">
            نساعد المؤسسات على تحسين جودة الغذاء، والامتثال للوائح،
            وتطبيق المعايير العالمية، وحماية المستهلكين.
          </p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 md:gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={fadeUp}
              className="card group cursor-default text-center"
            >
              <div className="text-5xl transition-transform duration-300 group-hover:scale-110">
                {service.icon}
              </div>

              <h3 className="text-2xl font-bold mt-6">{service.title}</h3>

              <p className="text-slate-600 leading-8 mt-5">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}