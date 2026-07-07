"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, ArrowUp } from "lucide-react";
import { fadeUp } from "../lib/animation";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-900 text-white relative">
      <div className="container-custom py-12 md:py-20">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid lg:grid-cols-4 gap-8 md:gap-12"
        >
          <div>
            <p className="text-slate-400 mt-6 leading-8">
              شركة سفك – استشارات سلامة الغذاء للمطاعم والفنادق والمطابخ ومرافق
              الإنتاج الغذائي في جميع أنحاء المملكة.
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-6 text-lg">الخدمات</h3>
            <ul className="space-y-3 text-slate-400">
              <li className="hover:text-green-400 transition-colors cursor-pointer">سلامة الغذاء</li>
              <li className="hover:text-green-400 transition-colors cursor-pointer">HACCP</li>
              <li className="hover:text-green-400 transition-colors cursor-pointer">ISO 22000</li>
              <li className="hover:text-green-400 transition-colors cursor-pointer">التدريب</li>
              <li className="hover:text-green-400 transition-colors cursor-pointer">الامتثال</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-6 text-lg">روابط سريعة</h3>
            <ul className="space-y-3 text-slate-400">
              <li><a href="#about" className="hover:text-green-400 transition-colors">من نحن</a></li>
              <li><a href="#services" className="hover:text-green-400 transition-colors">الخدمات</a></li>
              <li><a href="#projects" className="hover:text-green-400 transition-colors">المشاريع</a></li>
              <li><a href="#contact" className="hover:text-green-400 transition-colors">اتصل بنا</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-6 text-lg">معلومات الاتصال</h3>
            <div className="space-y-4 text-slate-400">
              <div className="flex gap-3 items-center">
                <Phone size={18} className="text-green-400 shrink-0" />
                <span dir="ltr">+966 50 456 0713</span>
              </div>
              <div className="flex gap-3 items-center">
                <Mail size={18} className="text-green-400 shrink-0" />
                <span>SFQM.2024@gmail.com</span>
              </div>
              <div className="flex gap-3 items-center">
                <MapPin size={18} className="text-green-400 shrink-0" />
                <span>مكة المكرمة، المملكة العربية السعودية</span>
              </div>
            </div>
          </div>
        </motion.div>

        <hr className="border-slate-800 my-12" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left text-slate-500">
            © {new Date().getFullYear()} سفك. جميع الحقوق محفوظة.
          </div>

          <button
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full bg-green-600 hover:bg-green-500 flex items-center justify-center transition-colors"
            aria-label="العودة للأعلى"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
}