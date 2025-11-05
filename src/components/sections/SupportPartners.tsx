const SupportPartners = () => {
  // Create array of 10 partner placeholders
  const partners = [
    {
      id: 1,
      name: "Universitas Gadjah Mada",
      logo: "http://2.bp.blogspot.com/-aaPKIvsHGwU/ULCIrnblNcI/AAAAAAAAAzE/1g_IgH3NLa4/s1600/Logo+UGM+(Universitas+Gadjah+Mada)-vector.png"
    },
    {
      id: 2,
      name: "UMY",
      logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEifS-v5_ai9cN3oemMj5dZt0N2fsm5tYiSKffferMEKtbJqamhzruA2wgp5HAP8G0prLOHWaFPU-0qGj809YW_xWszvTCNNjoAtN430-IsKR4P-U0SmqfctfuM1yZaAOdkJ_PQPvDdfD6meD6rwzuKUwKAhf1IASFrBhOfR5fBZ-wkEyXmp45Niaw/s1861/Universitas%20Muhammadiyah%20Yogyakarta%20Logo.png"
    },
    {
      id: 3,
      name: "UNM",
      logo: "https://2.bp.blogspot.com/-EtnvpuUCYHg/W1IhSVh0ubI/AAAAAAAAA1g/tJIdXcmj6Z0X2iGr4nM2092DnGcp9H7fwCK4BGAYYCw/s1600/file5E5C90CF28FB160EA2209296E9A31A0B.png"
    },
    {
      id: 4,
      name: "UNY",
      logo: "https://1.bp.blogspot.com/-GMfy95G5L5c/W2bwrpAeXoI/AAAAAAAAAYs/f5fhp5BhdZQd4bTguafQCu4nIg8rYR8igCEwYBhgL/s1600/Logo%2BUniversitas%2BNegeri%2BYogyakarta%2B%2528UNY%2529%2BCDR%2Bdan%2BPNG.png"
    },
    {
      id: 5,
      name: "UAY",
      logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgW_8o58djiJXFaXVx3MTQFzGY3fHGFN59Lw0yov_cNnJlXGw1XL_1x1PFzHSthCz8kh-4TkC9XOWLWm6VdxBI4jisZDD4WVRspOwwyYxhNTcNYcrpbFp7Au1XEHYagrbIxC-TwJc1xuDADlhTPR__4RGego8_Zk6gjcZaHGS8NwqvTiUI3lqadmT-b/s2126/GKL6_Universitas%20Aisyiyah%20UNISA%20Yogyakarta%20-%20Koleksilogo.com.jpg"
    },
    {
      id: 6,
      name: "UPN",
      logo: "https://old.upnyk.ac.id/asset/images/logo_upn.png"
    },
    {
      id: 7,
      name: "USD",
      logo: "https://www.usd.ac.id/logo/usd.png"
    },
    {
      id: 8,
      name: "UIM",
      logo: "https://uim-yogya.ac.id/wp-content/uploads/2024/02/cropped-Logo-UIM-site-identity.png"
    },
    {
      id: 9,
      name: "UMBY",
      logo: "http://mercubuana-yogya.ac.id/assets/img/logo.png"
    },
    {
      id: 10,
      name: "UIN SUKA",
      logo: "https://4.bp.blogspot.com/-S9ujhrBT128/WxnyI2S0dCI/AAAAAAAACUg/3oI8fy2BelsFVSyA0_CrkMzUYq40adQrgCLcBGAs/s1600/logo%2Buin%2Bsunan%2Bkalijaga%2Byogyakarta.png"
    }
  ];


  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-800">
            Our Partner
          </h2>
        </div>

        {/* Partner Grid - auto rows */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-7">
          {partners.map((partner) => (
            <div 
              key={partner.id} 
              className="flex items-center justify-center p-4"
            >
              <img 
                src={partner.logo}
                alt={partner.name}
                className="h-20 w-auto object-contain"
              />
            </div>
          ))}
        </div>

        {/* Decorative element */}
        <div className="mt-16 flex justify-center">
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-slate-300 to-transparent rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default SupportPartners;
