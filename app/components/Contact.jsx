"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, CheckCircle } from "lucide-react";
import { fadeUp, fadeLeft, fadeRight } from "../lib/animation";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contact">
      <div className="container-custom grid lg:grid-cols-2 gap-12 md:gap-20">
        <motion.div
          variants={fadeLeft}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <span className="text-green-600 uppercase font-semibold tracking-[4px]">
            تواصل معنا
          </span>

          <h2 className="section-title mt-4">لنتبادل الحديث</h2>

          <p className="section-subtitle">
            يسعدنا سماع رأيك. تواصل معنا اليوم للحصول على استشارة احترافية في سلامة الغذاء.
          </p>

          <div className="space-y-6 md:space-y-8 mt-8 md:mt-12">
            <div className="flex gap-5 items-start">
              <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center text-green-600 shrink-0">
                <Phone size={20} />
              </div>
              <div>
                <h3 className="font-bold text-lg">الهاتف</h3>
                <p dir="ltr" className="text-slate-600 mt-1">+966 50 456 0713</p>
              </div>
            </div>

            <div className="flex gap-5 items-start">
              <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center text-green-600 shrink-0">
                <Mail size={20} />
              </div>
              <div>
                <h3 className="font-bold text-lg">البريد الإلكتروني</h3>
                <p className="text-slate-600 mt-1">SFQM.2024@gmail.com</p>
              </div>
            </div>

            <div className="flex gap-5 items-start">
              <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center text-green-600 shrink-0">
                <MapPin size={20} />
              </div>
              <div>
                <h3 className="font-bold text-lg">الموقع</h3>
                <p className="text-slate-600 mt-1">مكة المكرمة، المملكة العربية السعودية</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={fadeRight}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="card"
        >
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="h-full flex flex-col items-center justify-center text-center py-12"
            >
              <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center text-green-600 mb-6">
                <CheckCircle size={32} />
              </div>
              <h3 className="text-2xl font-bold">تم إرسال الرسالة!</h3>
              <p className="text-slate-600 mt-3">
                شكراً لتواصلك معنا، سنرد عليك في أقرب وقت.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="الاسم الكامل"
                  required
                  className="w-full border border-slate-200 rounded-xl p-3 md:p-4 outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100 transition-all"
                />
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="البريد الإلكتروني"
                  required
                  className="w-full border border-slate-200 rounded-xl p-3 md:p-4 outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100 transition-all"
                />
              </div>

              <input
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="رقم الهاتف"
                className="w-full border border-slate-200 rounded-xl p-3 md:p-4 outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100 transition-all"
              />

              <textarea
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                placeholder="كيف يمكننا مساعدتك؟"
                required
                className="w-full border border-slate-200 rounded-xl p-3 md:p-4 outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100 transition-all resize-none"
              />

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary w-full gap-3"
              >
                <Send size={18} />
                إرسال الرسالة
              </motion.button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}