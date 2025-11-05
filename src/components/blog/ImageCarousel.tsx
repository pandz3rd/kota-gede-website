import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Props = {
  imageUrls: string[];
  // optional: ubah tinggi default jika mau
  heightClass?: string; // misal "h-64 md:h-96 lg:h-[500px]"
};

export default function ImageCarousel({ imageUrls, heightClass = "h-64 md:h-96 lg:h-[500px]" }: Props) {
    const prevRef = useRef<HTMLButtonElement | null>(null);
    const nextRef = useRef<HTMLButtonElement | null>(null);

    return (
        <div className="flex items-center justify-center gap-3">
            <button
                ref={prevRef}
                aria-label="Previous slide"
                className="flex items-center justify-center p-2 rounded-full text-gray-400 hover:text-gray-600 bg-white/90 z-20"
            >
                <ChevronLeft size={35} />
            </button>

    
            <div className="w-full max-w-4xl">
                <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                slidesPerView={1}
                loop={true}
                spaceBetween={10}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                navigation={{
                    // initial refs mungkin null saat render pertama, jadi juga set di onBeforeInit
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                }}
                onBeforeInit={(swiper: any) => {
                    // assign refs ke params navigation sebelum init agar Swiper mengenali tombol eksternal
                    swiper.params.navigation.prevEl = prevRef.current;
                    swiper.params.navigation.nextEl = nextRef.current;
                }}
                className="rounded-lg overflow-hidden shadow-lg"
                >
                {imageUrls.map((url, idx) => (
                    <SwiperSlide key={idx}>
                    <div className={`w-full ${heightClass} bg-gray-100`}>
                        <img
                        src={url}
                        alt={`Slide ${idx + 1}`}
                        className="w-full h-full object-cover"
                        draggable={false}
                        />
                    </div>
                    </SwiperSlide>
                ))}
                </Swiper>
            </div>
            <button
                ref={nextRef}
                aria-label="Next slide"
                className="flex items-center justify-center p-2 rounded-full text-gray-400 hover:text-gray-600 bg-white/90 z-20"
            >
                <ChevronRight size={35} />
            </button>   
        </div>
    );
}
