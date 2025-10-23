

export default function Services(){
 const services = [
  {
    title1: "Consultations",
    title2: "Générales",
    bg: "bg-[#f3f3f3]",
    highlight: "bg-[#b9ff66]",
    img: "https://iili.io/3IZ2HuI.png",
    textColor: "text-black",
  },
  {
    title1: "Spécialistes",
    title2: "Cardiologie",
    bg: "bg-[#b9ff66]",
    highlight: "bg-[#f3f3f3]",
    img: "https://iili.io/3IZdmaR.png",
    textColor: "text-black",
  },
  {
    title1: "Radiologie",
    title2: "et Imagerie",
    bg: "bg-[#191A23]",
    highlight: "bg-[#f3f3f3]",
    img: "https://iili.io/3IZdyyN.png",
    textColor: "text-white",
  },
  {
    title1: "Analyses",
    title2: "Médicales",
    bg: "bg-[#f3f3f3]",
    highlight: "bg-[#b9ff66]",
    img: "https://iili.io/3IZ2dZX.png",
    textColor: "text-black",
  },
  {
    title1: "Chirurgie",
    title2: "et Soins",
    bg: "bg-[#b9ff66]",
    highlight: "bg-[#f3f3f3]",
    img: "https://iili.io/3IZ2Jjt.png",
    textColor: "text-black",
  },
  {
    title1: "Suivi",
    title2: "et Conseils",
    bg: "bg-[#191A23]",
    highlight: "bg-[#f3f3f3]",
    img: "https://iili.io/3IZ23nn.png",
    textColor: "text-white",
  },
];


  return (
    <section className="mx-auto max-w-[1440px] pt-12 px-4">
      <h1 className="text-4xl font-bold text-center mb-12">
        Nos <span className="text-[#4ade80]">Services Médicaux</span>
      </h1>

      <div className="grid justify-center gap-10 md:gap-6 lg:gap-8 xl:grid-cols-2 xl:gap-10">
        {services.map((service, index) => (
          <div
            key={index}
            className={`inline-flex items-center justify-between overflow-hidden rounded-[45px] ${service.bg} p-8 shadow-[0px_5px_0px_0px_rgba(25,26,35,1)] outline outline-1 outline-offset-[-1px] outline-[#191a23] sm:p-12 lg:p-8 xl:p-12`}
          >
            <div className="inline-flex flex-col items-start justify-center gap-[90px]">
              <h2
                className={`flex flex-col items-start justify-start text-3xl font-medium ${service.textColor}`}
              >
                <span className={`${service.highlight} px-2 rounded-lg`}>
                  {service.title1}
                </span>
                <span className={`${service.highlight} px-2 rounded-lg`}>
                  {service.title2}
                </span>
              </h2>

              <button className={`inline-flex items-center gap-[10px] font-medium transition-all hover:scale-105 ${service.textColor}`}>
                <svg
                  width="41"
                  height="41"
                  viewBox="0 0 41 41"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="20.5" cy="20.5" r="20.5" fill={service.textColor === "text-white" ? "white" : "black"} />
                  <path
                    d="M11.25 24.701C10.5326 25.1152 10.2867 26.0326 10.701 26.75C11.1152 27.4674 12.0326 27.7133 12.75 27.299L11.25 24.701ZM30.7694 16.3882C30.9838 15.588 30.5089 14.7655 29.7087 14.5511L16.6687 11.0571C15.8685 10.8426 15.046 11.3175 14.8316 12.1177C14.6172 12.9179 15.0921 13.7404 15.8923 13.9548L27.4834 17.0607L24.3776 28.6518C24.1631 29.452 24.638 30.2745 25.4382 30.4889C26.2384 30.7033 27.0609 30.2284 27.2753 29.4282L30.7694 16.3882ZM12.75 27.299L30.0705 17.299L28.5705 14.701L11.25 24.701L12.75 27.299Z"
                    fill={service.highlight === "bg-[#b9ff66]" ? "#B9FF66" : "#000"}
                  />
                </svg>
                <span>Voir plus</span>
              </button>
            </div>

            <img className="w-[210px]" src={service.img} alt={service.title1} />
          </div>
        ))}
      </div>
    </section>
  );
};


