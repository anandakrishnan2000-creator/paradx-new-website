export const Footer = ({ setActivePage }: { setActivePage?: (page: string) => void }) => {
  return (
    <footer className="bg-brand-dark text-white pt-24 pb-8 px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto text-center">
        <h2 className="font-sans font-bold text-sm tracking-[0.3em] uppercase text-brand-accent mb-12">
          SO WHAT'S NEXT?
        </h2>
        
        <a 
          href="#"
          onClick={(e) => {
            e.preventDefault();
            if (setActivePage) {
              setActivePage('Contact Us');
              window.scrollTo(0, 0);
            }
          }}
          className="inline-block font-display text-4xl md:text-9xl lg:text-[10rem] font-black uppercase tracking-[-0.04em] leading-none hover:text-brand-accent transition-colors duration-500 mt-6"
          data-cursor="hover"
        >
          Let's Work!
        </a>
      </div>

      <div className="max-w-[1400px] mx-auto mt-32 flex flex-col md:flex-row justify-between items-center text-brand-gray font-sans text-sm md:text-base border-t border-white/10 pt-8">
        <div className="flex items-center gap-4">
          <img src="/logo.png" alt="Company Logo" className="h-8 object-contain opacity-50 hover:opacity-100 transition-opacity" />
          <p>© {new Date().getFullYear()} All Rights Reserved.</p>
        </div>
        <div className="flex gap-8 mt-4 md:mt-0">
          <a href="#" className="hover:text-white transition-colors" data-cursor="hover">Instagram</a>
          <a href="#" className="hover:text-white transition-colors" data-cursor="hover">LinkedIn</a>
          <a href="#" className="hover:text-white transition-colors" data-cursor="hover">Twitter</a>
        </div>
      </div>
    </footer>
  );
};
