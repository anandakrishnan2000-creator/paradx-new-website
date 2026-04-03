import { motion } from 'framer-motion';
import { useState } from 'react';


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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // !!! IMPORTANT !!!
    // Go to https://web3forms.com/, enter hello@paradxdigital.com, 
    // and click "Create Access Key". Paste the key below:
    const WEB3FORMS_ACCESS_KEY = "a9c4f166-89b8-4365-89af-fdc04ba135b5";

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      if (response.ok) {
        setIsSuccess(true);
      } else {
        console.error("Form submission failed");
        alert("Failed to send message. Please try again or email us directly at hello@paradxdigital.com");
      }
    } catch (error) {
      console.error("Error submitting form", error);
      alert("Network error. Please email us directly at hello@paradxdigital.com");
    } finally {
      setIsSubmitting(false);
    }
  };

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

            <h1 className="font-display font-black text-5xl md:text-[clamp(4.5rem,10vw,13rem)] leading-[0.85] tracking-tighter uppercase text-brand-dark mb-8 mt-4">
              LET'S<br /><span className="text-brand-accent">CONNECT.</span>
            </h1>
            <p className="font-sans font-bold text-[0.65rem] md:text-lg max-w-3xl mx-auto uppercase tracking-[0.2em] text-brand-dark leading-relaxed">
              Your competition isn't waiting for you to think. <br className="hidden md:block" />
              Let's get to work.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. The Centered Form Layout */}
      <section id="contact-form-section" className="w-full flex items-center justify-center min-h-[800px] bg-white px-6 py-24 md:py-32">
        <div className="w-full max-w-[800px]">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-14 text-center max-w-2xl mx-auto"
          >
            <h3 className="font-display font-black text-4xl md:text-5xl uppercase tracking-tighter text-brand-dark mb-4">
              Be the Parad<span className="text-brand-accent">X</span> Factor.
            </h3>
            <p className="font-sans text-brand-dark text-lg md:text-xl leading-relaxed">
              Fill out the form below. Our team will reach out to you.
            </p>
          </motion.div>

          {!isSuccess ? (
            <form className="flex flex-col gap-8 w-full" onSubmit={handleSubmit}>
              <input type="hidden" name="from_name" value="Paradx Website" />
              <input type="hidden" name="subject" value="New Strategic Inquiry" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col relative group">
                  <label className="font-sans font-bold text-xs uppercase tracking-[0.2em] text-brand-dark mb-2">Name *</label>
                  <input type="text" name="name" className="w-full bg-transparent border-b-2 border-brand-dark/10 py-3 text-lg font-sans font-medium text-brand-dark placeholder:text-brand-dark/40 focus:outline-none focus:border-brand-accent transition-colors" required placeholder="Aarav Patel" />
                </div>
                <div className="flex flex-col relative group">
                  <label className="font-sans font-bold text-xs uppercase tracking-[0.2em] text-brand-dark mb-2">Email *</label>
                  <input type="email" name="email" className="w-full bg-transparent border-b-2 border-brand-dark/10 py-3 text-lg font-sans font-medium text-brand-dark placeholder:text-brand-dark/40 focus:outline-none focus:border-brand-accent transition-colors" required placeholder="aarav@zenith.in" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col relative group">
                  <label className="font-sans font-bold text-xs uppercase tracking-[0.2em] text-brand-dark mb-2">Phone</label>
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
                    <input type="tel" name="phone" className="w-full bg-transparent py-3 text-lg font-sans font-medium text-brand-dark placeholder:text-brand-dark/40 focus:outline-none" placeholder="98765 43210" />
                  </div>
                </div>
                <div className="flex flex-col relative group">
                  <label className="font-sans font-bold text-xs uppercase tracking-[0.2em] text-brand-dark mb-2">Business Name</label>
                  <input type="text" name="bizName" className="w-full bg-transparent border-b-2 border-brand-dark/10 py-3 text-lg font-sans font-medium text-brand-dark placeholder:text-brand-dark/40 focus:outline-none focus:border-brand-accent transition-colors" placeholder="Zenith Enterprises" />
                </div>
              </div>

              <div className="flex flex-col relative group mt-4">
                <label className="font-sans font-bold text-xs uppercase tracking-[0.2em] text-brand-dark mb-2">Message *</label>
                <textarea name="message" className="w-full bg-transparent border-b-2 border-brand-dark/10 py-3 text-lg font-sans font-medium text-brand-dark placeholder:text-brand-dark/40 focus:outline-none focus:border-brand-accent transition-colors resize-none h-32" required placeholder="Tell us about your project..."></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className="mt-8 bg-brand-dark text-white px-12 py-6 rounded-full font-sans font-bold text-sm tracking-widest uppercase hover:bg-brand-accent hover:text-brand-dark transition-colors self-start shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Transmitting Intel...' : 'Send Message'}
              </motion.button>

            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="w-full bg-brand-dark text-white p-12 md:p-16 rounded-[2rem] text-center flex flex-col items-center justify-center min-h-[400px] shadow-2xl relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-brand-accent/5 opacity-50"></div>
              <div className="w-20 h-20 bg-brand-accent rounded-full flex items-center justify-center mb-8 shadow-[0_0_40px_rgba(34,211,238,0.3)] mx-auto relative z-10">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#0f172a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </div>
              <h4 className="font-display font-black text-3xl md:text-5xl tracking-tighter uppercase mb-4 relative z-10">Intel Received.</h4>
              <p className="font-sans text-brand-gray/80 text-lg md:text-xl relative z-10 max-w-lg mx-auto">
                The Paradx collective has been notified. Our strategic team will review your parameters and initiate contact shortly.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* 3. Direct Contact Strip & Socials */}
      <section className="w-full bg-brand-dark text-white py-20 px-6">
        <div className="max-w-[1400px] mx-auto flex flex-col items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-8"
          >
            <a
              href="mailto:hello@paradxdigital.com"
              className="font-display font-black text-3xl md:text-5xl tracking-tighter hover:text-brand-accent transition-colors block cursor-pointer"
            >
              hello@paradxdigital.com
            </a>

            <div className="flex items-center gap-8 mt-2">
              <a href="#" aria-label="Instagram" className="text-brand-gray hover:text-brand-accent transition-all hover:scale-110">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
              </a>
              <a href="#" aria-label="Facebook" className="text-brand-gray hover:text-brand-accent transition-all hover:scale-110">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="text-brand-gray hover:text-brand-accent transition-all hover:scale-110">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
              </a>
              <a href="#" aria-label="Twitter" className="text-brand-gray hover:text-brand-accent transition-all hover:scale-110">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
