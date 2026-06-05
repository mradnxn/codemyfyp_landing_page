"use client";

export default function ContactCTA() {
  return (
    <section
      id="contact"
      className="py-12 sm:py-16 md:py-24"
    > 
      <div className="container-custom">
        <div className="glass rounded-[24px] sm:rounded-[32px] md:rounded-[40px] p-6 sm:p-12 md:p-20 text-center">
          <span className="glass px-3.5 py-1.5 rounded-full text-xs sm:text-sm">
            Contact Us
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mt-6 md:mt-8">
            Ready To Build
            <br />
            <span className="gradient-text">
              Something Amazing?
            </span>
          </h2>

          <p className="text-gray-400 text-sm sm:text-base md:text-lg mt-4 md:mt-8 max-w-2xl mx-auto leading-relaxed">
            Whether you're a student, startup,
            or business, our team is ready
            to help you achieve your goals.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 md:gap-6 mt-8 md:mt-10 max-w-xs sm:max-w-none mx-auto">
            <a
              href="mailto:info@codemyfyp.com"
              className="primary-btn text-xs sm:text-sm md:text-base px-4 sm:px-5 md:px-7 whitespace-nowrap w-full sm:w-auto"
            >
              info@codemyfyp.com
            </a>

            <a
              href="tel:+919483808379"
              className="secondary-btn text-xs sm:text-sm md:text-base px-4 sm:px-5 md:px-7 whitespace-nowrap w-full sm:w-auto"
            >
              +91 9483808379
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
