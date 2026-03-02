import React from 'react';
import { MapPin, Phone, Mail, Send, Clock, Facebook, MessageCircle } from 'lucide-react';

const Contact = () => {
  return (
    <div className="flex flex-col w-full pt-20">
      
      {/* --- HERO --- */}
      <section className="bg-brand-green text-white py-16 text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
          <p className="text-lg text-brand-bg/80">
            Based in Liberia, working globally. Contact us for partnerships or inquiries.
          </p>
        </div>
      </section>

      {/* --- CONTACT CONTENT --- */}
      <section className="py-20 bg-brand-bg relative">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 bg-white rounded-3xl shadow-xl overflow-hidden">
            
            {/* Left: Info Panel */}
            <div className="bg-brand-green text-white p-10 md:p-12 flex flex-col justify-between relative overflow-hidden">
               {/* Decorative Circle */}
               <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
               
               <div>
                 <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
                 <div className="space-y-8">
                   <div className="flex items-start gap-4">
                     <MapPin className="text-brand-earth mt-1 shrink-0" size={24} />
                     <div>
                       <p className="font-bold text-lg">Headquarters</p>
                       <p className="text-brand-bg/80 leading-relaxed">
                         72nd SKD Boulevard<br/>
                         Paynesville City, Montserrado County<br/>
                         Liberia
                       </p>
                     </div>
                   </div>
                   
                   <div className="flex items-start gap-4">
                     <Phone className="text-brand-earth mt-1 shrink-0" size={24} />
                     <div>
                       <p className="font-bold text-lg">Phone / WhatsApp</p>
                       <p className="text-brand-bg/80">+231 77 042 9791</p>
                       <p className="text-brand-bg/80">+231 88 843 1534</p>
                     </div>
                   </div>

                   <div className="flex items-start gap-4">
                     <Mail className="text-brand-earth mt-1 shrink-0" size={24} />
                     <div>
                       <p className="font-bold text-lg">Email</p>
                       <p className="text-brand-bg/80">greenlanscapes.ini@gmail.com</p>
                     </div>
                   </div>
                   
                   <div className="flex items-start gap-4">
                     <Clock className="text-brand-earth mt-1 shrink-0" size={24} />
                     <div>
                       <p className="font-bold text-lg">Operating Hours</p>
                       <p className="text-brand-bg/80">Mon - Fri: 8:30 AM - 5:00 PM</p>
                     </div>
                   </div>
                 </div>
               </div>

               {/* Social Icons */}
               <div className="flex gap-4 mt-8">
                  <a href="#" className="p-2 bg-white/20 rounded-full hover:bg-brand-earth transition-colors"><MessageCircle size={20}/></a>
                  <a href="#" className="p-2 bg-white/20 rounded-full hover:bg-brand-earth transition-colors"><Facebook size={20}/></a>
               </div>
            </div>

            {/* Right: Form */}
            <div className="p-10 md:p-12">
              <h3 className="text-2xl font-bold text-brand-green mb-6">Send us a Message</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-gray-600">First Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-green outline-none bg-gray-50" placeholder="Enter name" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-gray-600">Last Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-green outline-none bg-gray-50" placeholder="Enter name" />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-gray-600">Email Address</label>
                  <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-green outline-none bg-gray-50" placeholder="email@example.com" />
                </div>

                <div className="flex flex-col gap-2">
                   <label className="text-sm font-bold text-gray-600">Subject</label>
                   <select className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-green outline-none bg-gray-50">
                      <option>General Partnership</option>
                      <option>Project Inquiry (Lofa/Nimba/Sinoe)</option>
                      <option>Volunteering</option>
                   </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-gray-600">Message</label>
                  <textarea rows="4" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-green outline-none bg-gray-50" placeholder="How can we collaborate?"></textarea>
                </div>

                <button type="submit" className="w-full bg-brand-earth text-white font-bold py-4 rounded-xl hover:bg-[#7a5e45] transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1 cursor-pointer">
                  Send Message <Send size={18} />
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>
      
      {/* --- MAP PLACEHOLDER --- */}
      <section className="h-96 w-full bg-gray-200 relative grayscale">
         {/* In a real project, you would embed a Google Map iframe here */}
         <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.9307580371665!2d-10.718266817509251!3d6.272835609841825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xf0a03185dfc66b5%3A0x58c9d809005d59d2!2sGreen%20Landscapes%20Initiatives!5e0!3m2!1sen!2sgh!4v1770989084422!5m2!1sen!2sgh" 
            width="100%" 
            height="100%" 
            style={{border:0}} 
            allowFullScreen="" 
            loading="lazy"
            title="Google Map"
         ></iframe>
      </section>
    </div>
  );
};

export default Contact;