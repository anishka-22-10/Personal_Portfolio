"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import profilePic from '/images/IMG_1174 2.jpg';
import avatarPic from '/images/pp.jpg'; // Add your avatar picture here
import MagicButton from "./ui/MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { FaLocationArrow } from "react-icons/fa6";
import { BackgroundBeams } from "./ui/background-beams";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";

const Hero = () => {
    const [showAvatar, setShowAvatar] = useState(false);

    useEffect(() => {
        const flipToAvatar = setTimeout(() => {
            setShowAvatar(true);
        }, 1000); // Show avatar after 1 second

        const flipBackToProfile = setTimeout(() => {
            setShowAvatar(false);
        }, 2000); // Flip back to profile after 2 seconds

        return () => {
            clearTimeout(flipToAvatar);
            clearTimeout(flipBackToProfile);
        };
    }, []);

    const handleClick = () => {
        setShowAvatar(!showAvatar);
        setTimeout(() => {
            setShowAvatar((prev) => !prev);
        }, 1000); // Flip back after 1 second
    };

    return (
        <div className="pb-20 pt-31 relative">
            <div>
                <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white"/>
                <Spotlight className="top-10 left-full h-[80vh] w-[50vw]" fill="purple"/>
                <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue"/>
            </div>
            <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
                <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent 20%,black)]"/>
            </div>
            <div className="flex justify-center relative my-20 z-10">
                <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
                    <div className="flex flex-col items-center mb-6">
                        <div className="border-gradient rounded-full">
                            <div className="inner-border rounded-full" onClick={handleClick}>
                                <div className={`flip-container ${showAvatar ? 'flipping' : ''}`}>
                                    <div className="flipper">
                                        <div className="front">
                                            <Image
                                                src={profilePic}
                                                alt="Profile Picture"
                                                className="rounded-full w-full h-full"
                                            />
                                        </div>
                                        <div className="back">
                                            <Image
                                                src={avatarPic}
                                                alt="Avatar Picture"
                                                className="rounded-full w-full h-full"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <TypewriterEffectSmooth
                        className="text-center text-[40px] md:text-5xl lg:text-6xl mb-4"
                        words={[
                            { text: "Hi, I'm" },
                            { text: " Anishka", color: "rgb(196, 181, 253)" } // Using Tailwind's purple-300 color
                        ]}
                    />
                    <p className="text-center md:tracking-wider mb-6 text-small md:text-lg lg:text-2xl">
                        a final-year Information Technology student
                    </p>
                    <a href="/#about">
                        <MagicButton
                            title="Show my Work"
                            icon={<FaLocationArrow />}
                            position="right"
                        />
                    </a>
                </div>
            </div>
            <BackgroundBeams />  
            <br></br>
        </div>
    );
};

export default Hero;
