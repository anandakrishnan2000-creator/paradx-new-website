import { motion } from 'framer-motion';

const countryCodes = [
  { name: "Afghanistan", code: "+93" }, { name: "Albania", code: "+355" }, { name: "Algeria", code: "+213" },
  { name: "Andorra", code: "+376" }, { name: "Angola", code: "+244" }, { name: "Antigua and Barbuda", code: "+1-268" },
  { name: "Argentina", code: "+54" }, { name: "Armenia", code: "+374" }, { name: "Australia", code: "+61" },
  { name: "Austria", code: "+43" }, { name: "Azerbaijan", code: "+994" }, { name: "Bahamas", code: "+1-242" },
  { name: "Bahrain", code: "+973" }, { name: "Bangladesh", code: "+880" }, { name: "Barbados", code: "+1-246" },
  { name: "Belarus", code: "+375" }, { name: "Belgium", code: "+32" }, { name: "Belize", code: "+501" },
  { name: "Benin", code: "+229" }, { name: "Bhutan", code: "+975" }, { name: "Bolivia", code: "+591" },
  { name: "Bosnia", code: "+387" }, { name: "Botswana", code: "+267" }, { name: "Brazil", code: "+55" },
  { name: "Brunei", code: "+673" }, { name: "Bulgaria", code: "+359" }, { name: "Burkina Faso", code: "+226" },
  { name: "Burundi", code: "+257" }, { name: "Cambodia", code: "+855" }, { name: "Cameroon", code: "+237" },
  { name: "Canada", code: "+1" }, { name: "Cape Verde", code: "+238" }, { name: "Central African Rep", code: "+236" },
  { name: "Chad", code: "+235" }, { name: "Chile", code: "+56" }, { name: "China", code: "+86" },
  { name: "Colombia", code: "+57" }, { name: "Comoros", code: "+269" }, { name: "Congo", code: "+242" },
  { name: "Costa Rica", code: "+506" }, { name: "Croatia", code: "+385" }, { name: "Cuba", code: "+53" },
  { name: "Cyprus", code: "+357" }, { name: "Czech Republic", code: "+420" }, { name: "Denmark", code: "+45" },
  { name: "Djibouti", code: "+253" }, { name: "Dominica", code: "+1-767" }, { name: "Dominican Republic", code: "+1-809" },
  { name: "Ecuador", code: "+593" }, { name: "Egypt", code: "+20" }, { name: "El Salvador", code: "+503" },
  { name: "Equatorial Guinea", code: "+240" }, { name: "Eritrea", code: "+291" }, { name: "Estonia", code: "+372" },
  { name: "Eswatini", code: "+268" }, { name: "Ethiopia", code: "+251" }, { name: "Fiji", code: "+679" },
  { name: "Finland", code: "+358" }, { name: "France", code: "+33" }, { name: "Gabon", code: "+241" },
  { name: "Gambia", code: "+220" }, { name: "Georgia", code: "+995" }, { name: "Germany", code: "+49" },
  { name: "Ghana", code: "+233" }, { name: "Greece", code: "+30" }, { name: "Grenada", code: "+1-473" },
  { name: "Guatemala", code: "+502" }, { name: "Guinea", code: "+224" }, { name: "Guyana", code: "+592" },
  { name: "Haiti", code: "+509" }, { name: "Honduras", code: "+504" }, { name: "Hungary", code: "+36" },
  { name: "Iceland", code: "+354" }, { name: "India", code: "+91" }, { name: "Indonesia", code: "+62" },
  { name: "Iran", code: "+98" }, { name: "Iraq", code: "+964" }, { name: "Ireland", code: "+353" },
  { name: "Israel", code: "+972" }, { name: "Italy", code: "+39" }, { name: "Jamaica", code: "+1-876" },
  { name: "Japan", code: "+81" }, { name: "Jordan", code: "+962" }, { name: "Kazakhstan", code: "+7" },
  { name: "Kenya", code: "+254" }, { name: "Kiribati", code: "+686" }, { name: "Kuwait", code: "+965" },
  { name: "Kyrgyzstan", code: "+996" }, { name: "Laos", code: "+856" }, { name: "Latvia", code: "+371" },
  { name: "Lebanon", code: "+961" }, { name: "Lesotho", code: "+266" }, { name: "Liberia", code: "+231" },
  { name: "Libya", code: "+218" }, { name: "Liechtenstein", code: "+423" }, { name: "Lithuania", code: "+370" },
  { name: "Luxembourg", code: "+352" }, { name: "Madagascar", code: "+261" }, { name: "Malawi", code: "+265" },
  { name: "Malaysia", code: "+60" }, { name: "Maldives", code: "+960" }, { name: "Mali", code: "+223" },
  { name: "Malta", code: "+356" }, { name: "Marshall Islands", code: "+692" }, { name: "Mauritania", code: "+222" },
  { name: "Mauritius", code: "+230" }, { name: "Mexico", code: "+52" }, { name: "Micronesia", code: "+691" },
  { name: "Moldova", code: "+373" }, { name: "Monaco", code: "+377" }, { name: "Mongolia", code: "+976" },
  { name: "Montenegro", code: "+382" }, { name: "Morocco", code: "+212" }, { name: "Mozambique", code: "+258" },
  { name: "Myanmar", code: "+95" }, { name: "Namibia", code: "+264" }, { name: "Nauru", code: "+674" },
  { name: "Nepal", code: "+977" }, { name: "Netherlands", code: "+31" }, { name: "New Zealand", code: "+64" },
  { name: "Nicaragua", code: "+505" }, { name: "Niger", code: "+227" }, { name: "Nigeria", code: "+234" },
  { name: "North Korea", code: "+850" }, { name: "North Macedonia", code: "+389" }, { name: "Norway", code: "+47" },
  { name: "Oman", code: "+968" }, { name: "Pakistan", code: "+92" }, { name: "Palau", code: "+680" },
  { name: "Palestine", code: "+970" }, { name: "Panama", code: "+507" }, { name: "Papua New Guinea", code: "+675" },
  { name: "Paraguay", code: "+595" }, { name: "Peru", code: "+51" }, { name: "Philippines", code: "+63" },
  { name: "Poland", code: "+48" }, { name: "Portugal", code: "+351" }, { name: "Qatar", code: "+974" },
  { name: "Romania", code: "+40" }, { name: "Russia", code: "+7" }, { name: "Rwanda", code: "+250" },
  { name: "Saint Kitts", code: "+1-869" }, { name: "Saint Lucia", code: "+1-758" }, { name: "Saint Vincent", code: "+1-784" },
  { name: "Samoa", code: "+685" }, { name: "San Marino", code: "+378" }, { name: "Sao Tome", code: "+239" },
  { name: "Saudi Arabia", code: "+966" }, { name: "Senegal", code: "+221" }, { name: "Serbia", code: "+381" },
  { name: "Seychelles", code: "+248" }, { name: "Sierra Leone", code: "+232" }, { name: "Singapore", code: "+65" },
  { name: "Slovakia", code: "+421" }, { name: "Slovenia", code: "+386" }, { name: "Solomon Islands", code: "+677" },
  { name: "Somalia", code: "+252" }, { name: "South Africa", code: "+27" }, { name: "South Korea", code: "+82" },
  { name: "South Sudan", code: "+211" }, { name: "Spain", code: "+34" }, { name: "Sri Lanka", code: "+94" },
  { name: "Sudan", code: "+249" }, { name: "Suriname", code: "+597" }, { name: "Sweden", code: "+46" },
  { name: "Switzerland", code: "+41" }, { name: "Syria", code: "+963" }, { name: "Taiwan", code: "+886" },
  { name: "Tajikistan", code: "+992" }, { name: "Tanzania", code: "+255" }, { name: "Thailand", code: "+66" },
  { name: "Togo", code: "+228" }, { name: "Tonga", code: "+676" }, { name: "Trinidad and Tobago", code: "+1-868" },
  { name: "Tunisia", code: "+216" }, { name: "Turkey", code: "+90" }, { name: "Turkmenistan", code: "+993" },
  { name: "Tuvalu", code: "+688" }, { name: "Uganda", code: "+256" }, { name: "Ukraine", code: "+380" },
  { name: "United Arab Emirates", code: "+971" }, { name: "United Kingdom", code: "+44" }, { name: "United States", code: "+1" },
  { name: "Uruguay", code: "+598" }, { name: "Uzbekistan", code: "+998" }, { name: "Vanuatu", code: "+678" },
  { name: "Vatican City", code: "+379" }, { name: "Venezuela", code: "+58" }, { name: "Vietnam", code: "+84" },
  { name: "Yemen", code: "+967" }, { name: "Zambia", code: "+260" }, { name: "Zimbabwe", code: "+263" }
];

export const ContactUs = () => {
  return (
    <div className="bg-brand-light min-h-screen text-brand-dark relative selection:bg-brand-accent selection:text-brand-dark">
      
      {/* 1. Hero Section */}
      <section className="relative w-full min-h-[500px] flex flex-col items-center justify-center overflow-hidden bg-brand-light px-6 pt-32 pb-20 text-center">
        {/* Premium Light-Theme Glass Architecture */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop" alt="Light Architecture" className="w-full h-full object-cover opacity-60 select-none pointer-events-none scale-105 filter grayscale" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-white/80 to-brand-light"></div>
        </div>
        
        <div className="relative z-10 w-full max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="font-sans font-bold text-brand-accent tracking-[0.3em] text-sm md:text-md uppercase block mb-6">
              Get In Touch
            </span>
            <h1 className="font-display font-black text-5xl md:text-[clamp(4.5rem,10vw,13rem)] leading-[0.85] tracking-tighter uppercase text-brand-dark">
              LET'S GET<br/><span className="text-brand-accent">STARTED</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* 2. Direct Contact Strip */}
      <section className="w-full bg-brand-dark text-white py-16 px-6">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-center gap-12 md:gap-32 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group cursor-pointer"
          >
            <span className="font-sans text-brand-gray tracking-[0.2em] font-semibold text-xs md:text-sm uppercase block mb-2 group-hover:text-brand-accent transition-colors">Email Our Team</span>
            <button 
              onClick={() => document.getElementById('contact-form-section')?.scrollIntoView({ behavior: 'smooth' })} 
              className="font-display font-black text-3xl md:text-5xl tracking-tighter hover:text-brand-accent transition-colors block"
            >
              hello@paradxdigital.com
            </button>
          </motion.div>
        </div>
      </section>

      {/* 3. The Centered Form Layout */}
      <section id="contact-form-section" className="w-full flex items-center justify-center min-h-[800px] bg-white px-6 py-24 md:py-32">
        
        <div className="w-full max-w-[800px]">
             
             <motion.div
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="mb-16"
             >
               <h2 className="font-display font-black text-5xl md:text-7xl tracking-tighter uppercase text-brand-dark leading-[0.9] mb-6">
                 LET'S <br/>
                 <span className="text-brand-accent">TALK!</span>
               </h2>
               <p className="font-sans text-brand-gray text-lg md:text-xl">
                 Fill out the form below and our strategic team will reach out to discuss how Paradx can engineer your next growth phase.
               </p>
             </motion.div>

              <form className="flex flex-col gap-8 w-full" onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                const name = formData.get('name');
                const email = formData.get('email');
                const countryCode = formData.get('countryCode');
                const phone = formData.get('phone');
                const bizName = formData.get('bizName');
                const message = formData.get('message');
                
                const subject = `New Inquiry from ${name || 'Website User'}`;
                const body = `Name: ${name}\nEmail: ${email}\nPhone: ${countryCode} ${phone}\nBusiness Name: ${bizName || 'N/A'}\n\nMessage:\n${message}`;
                
                window.location.href = `mailto:hello@paradxdigital.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
              }}>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex flex-col relative group">
                    <label className="font-sans font-bold text-xs uppercase tracking-[0.2em] text-brand-gray mb-2">Name *</label>
                    <input type="text" name="name" className="w-full bg-transparent border-b-2 border-brand-dark/10 py-3 text-lg font-sans font-medium text-brand-dark placeholder:text-brand-gray/40 focus:outline-none focus:border-brand-accent transition-colors" required placeholder="Aarav Patel" />
                  </div>
                  <div className="flex flex-col relative group">
                    <label className="font-sans font-bold text-xs uppercase tracking-[0.2em] text-brand-gray mb-2">Email *</label>
                    <input type="email" name="email" className="w-full bg-transparent border-b-2 border-brand-dark/10 py-3 text-lg font-sans font-medium text-brand-dark placeholder:text-brand-gray/40 focus:outline-none focus:border-brand-accent transition-colors" required placeholder="aarav@zenith.in" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex flex-col relative group">
                    <label className="font-sans font-bold text-xs uppercase tracking-[0.2em] text-brand-gray mb-2">Phone</label>
                    <div className="flex w-full items-center border-b-2 border-brand-dark/10 focus-within:border-brand-accent transition-colors">
                      <select 
                        name="countryCode"
                        defaultValue="+91"
                        className="bg-transparent py-3 text-lg font-sans font-medium text-brand-dark focus:outline-none cursor-pointer border-r border-brand-dark/10 pr-2 mr-4 flex-shrink-0 w-[140px] appearance-none"
                      >
                         {countryCodes.map((country) => (
                           <option key={country.name} value={country.code}>
                             {country.name} ({country.code})
                           </option>
                         ))}
                      </select>
                      <input type="tel" name="phone" className="w-full bg-transparent py-3 text-lg font-sans font-medium text-brand-dark placeholder:text-brand-gray/40 focus:outline-none" placeholder="98765 43210" />
                    </div>
                  </div>
                  <div className="flex flex-col relative group">
                    <label className="font-sans font-bold text-xs uppercase tracking-[0.2em] text-brand-gray mb-2">Business Name</label>
                    <input type="text" name="bizName" className="w-full bg-transparent border-b-2 border-brand-dark/10 py-3 text-lg font-sans font-medium text-brand-dark placeholder:text-brand-gray/40 focus:outline-none focus:border-brand-accent transition-colors" placeholder="Zenith Enterprises" />
                  </div>
                </div>

                <div className="flex flex-col relative group mt-4">
                  <label className="font-sans font-bold text-xs uppercase tracking-[0.2em] text-brand-gray mb-2">Message *</label>
                  <textarea name="message" className="w-full bg-transparent border-b-2 border-brand-dark/10 py-3 text-lg font-sans font-medium text-brand-dark placeholder:text-brand-gray/40 focus:outline-none focus:border-brand-accent transition-colors resize-none h-32" required placeholder="Tell us about your project..."></textarea>
                </div>

                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit" 
                  className="mt-8 bg-brand-dark text-white px-12 py-6 rounded-full font-sans font-bold text-sm tracking-widest uppercase hover:bg-brand-accent hover:text-brand-dark transition-colors self-start shadow-xl"
                >
                  Send Message
                </motion.button>
                
              </form>
        </div>

      </section>
    </div>
  );
};
