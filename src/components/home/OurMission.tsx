"use client";
import { useState, useRef, useEffect } from "react";

const OurMission = () => {
    const cards = [
        {
            subTitle: "Maximizes Your ",
            title: "Deductions",
            description: "Regular updates throughout the process.",
            icon: "🔔", // Replace with actual icons
        },
        {
            subTitle: "Enhances Your",
            title: "Case Continuously",
            description: "Continuously refine and enhance your tax case for better results.",
            icon: "🛠️",
        },
        {
            subTitle: "Maintains Constant",
            title: "Communication",
            description: "Regular updates throughout the process.",
            icon: "💡",
        },
        {
            subTitle: "View More",
            title: "Services",
            description: "Explore additional services to meet all your property tax needs.",
            icon: "📉",
        },
        {
            subTitle: "Provides Strategic Insights",
            title: "and Expert Plans",
            description: "Expert analysis and strategic recommendations.",
            icon: "📂",
        },

    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const sliderRef = useRef<HTMLDivElement | null>(null);

    const cardsPerSlide = 4;

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            Math.min(prevIndex + 1, cards.length - cardsPerSlide)
        );
    };

    useEffect(() => {
        if (sliderRef.current) {
            sliderRef.current.style.transform = `translateX(-${currentIndex * (100 / cardsPerSlide)
                }%)`;
        }
    }, [currentIndex]);
    const gradientStyle: React.CSSProperties = {
        background: `url('https://i.ibb.co/55skbHM/10.jpg'), linear-gradient(to top, rgba(0, 0, 0, 0.212), rgba(0, 0, 0, 0))`,
        backgroundSize: "cover",
        backgroundBlendMode: "overlay",
        backgroundPosition: "bottom",
      };
    return (
        <div style={gradientStyle} className="grid justify-center mb-72 items-center my-20">
            <div  className="text-center text-white px-20 py-20  grid  gap-3 max-w-7xl my-10">
                <p className="text-center text-xl text-red-500">We Are Committed</p>
                <h1 className="text-4xl">Our Mission Statement</h1>
                <p>Our mission is to make property tax management straightforward and stress-free. We are dedicated to providing accurate, efficient, and reliable services tailored to your unique needs. Focusing on transparency and expert guidance, we aim to maximize your savings and ensure compliance. At <span className="text-red-500"
                >Miami Properties, LLC,</span> your satisfaction and financial well-being are our top priorities.</p>
            </div>
            <div className="relative w-full max-w-7xl -mb-32 mx-auto">
                <div className="overflow-hidden">
                    <div
                        ref={sliderRef}
                        className="flex transition-transform duration-300 ease-in-out"
                        style={{ width: `${(cards.length / cardsPerSlide) * 100}%` }}
                    >
                        {cards.map((card, index) => (
                            <div
                                key={index}
                                className="w-1/4 flex-shrink-0 p-4"
                                style={{ width: "20%" }}
                            >
                                <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl shadow-lg text-center p-8">
                                    <div className="text-5xl mb-4">{card.icon}</div>
                                    <p>{card.subTitle}</p>
                                    <h3 className="text-2xl font-semibold mb-2">{card.title}</h3>
                                    <p className="text-gray-700">{card.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Navigation Arrows */}
                <div className="absolute left-[44%] -bottom-[100px] flex justify-between items-center gap-8 px-4">
                    <button
                        onClick={prevSlide}
                        className="text-3xl bg-gray-200 hover:bg-gray-300 rounded-full p-2 shadow-lg"
                        disabled={currentIndex === 0}
                    >
                        ←
                    </button>
                    <button
                        onClick={nextSlide}
                        className="text-3xl bg-gray-200 hover:bg-gray-300 rounded-full p-2 shadow-lg"
                        disabled={currentIndex >= cards.length - cardsPerSlide}
                    >
                        →
                    </button>
                </div>

                {/* Indicator Dots */}
                {/* <div className="absolute -bottom-10  inset-x-0 flex justify-center space-x-2">
                    {Array.from({
                        length: Math.ceil(cards.length / cardsPerSlide),
                    }).map((_, index) => (
                        <div
                            key={index}
                            className={`w-2 h-2 rounded-full ${index === Math.floor(currentIndex / cardsPerSlide)
                                ? "bg-blue-500"
                                : "bg-gray-400"
                                }`}
                        ></div>
                    ))}
                </div> */}
            </div>
        </div>
    );
};

export default OurMission;
