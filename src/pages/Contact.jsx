import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <div className="flex flex-col w-full pt-20">
      
      {/* --- HERO --- */}
      <section className="bg-brand-green text-white py-16 text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
          <p className="text-lg text-brand-bg/80">
            Have questions or want to partner with us? We'd love to hear from you.
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
                     <MapPin className="text-brand-earth mt-1" size={24} />
                     <div>
                       <p className="font-bold text-lg">Headquarters</p>
                       <p className="text-brand-bg/80 leading-relaxed">
                         12 Independence Avenue<br/>
                         Accra, Greater Accra Region<br/>
                         Ghana
                       </p>
                     </div>
                   </div>
                   
                   <div className="flex items-start gap-4">
                     <Phone className="text-brand-earth mt-1" size={24} />
                     <div>
                       <p className="font-bold text-lg">Phone</p>
                       <p className="text-brand-bg/80">+233 20 000 0000</p>
                       <p className="text-brand-bg/80">+233 30 000 0000</p>
                     </div>
                   </div>

                   <div className="flex items-start gap-4">
                     <Mail className="text-brand-earth mt-1" size={24} />
                     <div>
                       <p className="font-bold text-lg">Email</p>
                       <p className="text-brand-bg/80">info@greenlandscapes.org</p>
                       <p className="text-brand-bg/80">partners@greenlandscapes.org</p>
                     </div>
                   </div>
                   
                   <div className="flex items-start gap-4">
                     <Clock className="text-brand-earth mt-1" size={24} />
                     <div>
                       <p className="font-bold text-lg">Office Hours</p>
                       <p className="text-brand-bg/80">Mon - Fri: 8:00 AM - 5:00 PM</p>
                     </div>
                   </div>
                 </div>
               </div>

               {/* Social Icons could go here */}
            </div>

            {/* Right: Form */}
            <div className="p-10 md:p-12">
              <h3 className="text-2xl font-bold text-brand-green mb-6">Send us a Message</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-gray-600">First Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-green focus:ring-1 focus:ring-brand-green outline-none transition-all bg-gray-50" placeholder="Kwame" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-gray-600">Last Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-green focus:ring-1 focus:ring-brand-green outline-none transition-all bg-gray-50" placeholder="Mensah" />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-gray-600">Email Address</label>
                  <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-green focus:ring-1 focus:ring-brand-green outline-none transition-all bg-gray-50" placeholder="kwame@example.com" />
                </div>

                <div className="flex flex-col gap-2">
                   <label className="text-sm font-bold text-gray-600">Subject</label>
                   <select className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-green focus:ring-1 focus:ring-brand-green outline-none transition-all bg-gray-50">
                      <option>General Inquiry</option>
                      <option>Partnership Proposal</option>
                      <option>Volunteering</option>
                      <option>Report an Issue</option>
                   </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-gray-600">Message</label>
                  <textarea rows="4" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-green focus:ring-1 focus:ring-brand-green outline-none transition-all bg-gray-50" placeholder="How can we help you?"></textarea>
                </div>

                <button type="submit" className="w-full bg-brand-earth text-white font-bold py-4 rounded-xl hover:bg-[#7a5e45] transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d254236.6513079989!2d-0.3472097!3d5.5912087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9084b2b7a773%3A0xbed14ed8650e2dd3!2sAccra%2C%20Ghana!5e0!3m2!1sen!2sus!4v1600000000000!5m2!1sen!2sus" 
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