import React, { useEffect, useState } from 'react';

const AboutCompany = () => {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setInView(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800 flex items-center justify-center min-h-screen p-4">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className={`transition-all duration-1000 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="mb-4 text-4xl font-bold text-gray-900 sm:text-5xl dark:text-white">
              About Our Company
            </h2>
            <p className="mx-auto text-xl text-gray-600 dark:text-gray-300">
              We're passionate about creating innovative solutions that help businesses thrive in the digital age.
            </p>
          </div>
        </div>
        <div className="items-center grid gap-16 mb-20 lg:grid-cols-2">
          <div className="space-y-8">
            <div className={`transition-all duration-1000 ease-out delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h3 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">
                Building Tomorrow's Solutions Today
              </h3>
              <p className="mb-6 text-lg text-gray-600 leading-relaxed dark:text-gray-300">
                Founded in 2020, we've been at the forefront of digital transformation, helping over 10,000 businesses worldwide achieve their goals through innovative technology solutions.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed dark:text-gray-300">
                Our team of expert developers, designers, and strategists work tirelessly to deliver cutting-edge solutions that not only meet today's challenges but anticipate tomorrow's opportunities.
              </p>
            </div>
            <div className={`transition-all duration-1000 ease-out delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="space-y-4">
                {/* Card 1 */}
                <div className="items-start space-x-4 rtl:space-x-reverse flex">
                  <div className="flex-shrink-0 items-center justify-center flex w-[32px] h-[32px] rounded-full bg-blue-600">
                    <svg className="w-[16px] h-[16px] text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Expert Team
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      50+ skilled professionals with years of experience
                    </p>
                  </div>
                </div>
                {/* Card 2 */}
                <div className="items-start space-x-4 rtl:space-x-reverse flex">
                  <div className="flex-shrink-0 items-center justify-center flex w-[32px] h-[32px] rounded-full bg-blue-600">
                    <svg className="w-[16px] h-[16px] text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Global Reach
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      Serving clients across 25+ countries worldwide
                    </p>
                  </div>
                </div>
                {/* Card 3 */}
                <div className="items-start space-x-4 rtl:space-x-reverse flex">
                  <div className="flex-shrink-0 items-center justify-center flex w-[32px] h-[32px] rounded-full bg-blue-600">
                    <svg className="w-[16px] h-[16px] text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Innovation Focus
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      Always adopting the latest technologies and methodologies
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className={`transition-all duration-1000 ease-out delay-300 ${inView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Our team at work"
                  className="object-cover w-full h-[384px]"
                />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="backdrop-blur-sm p-6 rounded-xl bg-white shadow-lg dark:bg-gray-800">
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-gray-900 dark:text-white">5+</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">Years</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-gray-900 dark:text-white">50+</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">Team</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-gray-900 dark:text-white">25+</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">Countries</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCompany;
