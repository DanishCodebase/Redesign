import { useState, useRef } from "react";
import { Button } from "../../components/ui/button";
import { Card } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import heroVideo from "../../assets/videos/hero-video1.mp4";
import {
  Volume2,
  Volume1,
  VolumeX,
  Play,
  ChevronRight,
  Star,
  Users,
  Trophy,
} from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection() {
  const [isMuted, setIsMuted] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef(null);

  const stats = [
    { icon: Users, label: "Active Users", value: "10K+" },
    { icon: Star, label: "Rating", value: "4.9/5" },
    { icon: Trophy, label: "Success Rate", value: "95%" },
  ];

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <section className="relative overflow-hidden pt-[84px] bg-gradient-to-br from-[#ff9056] via-[#ff9056] to-[#ff9056] min-h-screen">
      {/* Animated Background Patterns */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute w-full h-full bg-[linear-gradient(to_right,#ffffff12_2px,transparent_2px),linear-gradient(to_bottom,#ffffff12_2px,transparent_2px)] bg-[size:4rem_4rem]" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/10 to-transparent" />
      </div>

      <div className="container max-w-7xl px-4 mx-auto relative z-10">
        <div className="py-16">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8 text-center text-white"
          >
            <Badge
              variant="secondary"
              className="text-sm px-6 py-2 bg-white/20 backdrop-blur-md border-0 text-white"
            >
              🚀 Trusted by 10,000+ Traders
            </Badge>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
              Change Your
              <span className="relative inline-block px-2">
                Trading
                <div className="absolute inset-x-0 bottom-0 h-3 bg-orange-600 -z-10 transform -rotate-2"></div>
              </span>
              <br />
              Habit & Mindset
            </h1>

            <p className="text-lg md:text-xl text-center text-white/90 leading-relaxed max-w-xl mx-auto">
              Resilient Grow is a trusted choice for thousands of satisfied
              traders and investors in India. Begin your educational journey
              with us today.
            </p>

            <a
              href="https://wa.link/i12lb8"
              target="_blank"
              className="flex flex-wrap justify-center gap-4 items-center"
            >
              <Button
                size="lg"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="group relative bg-white text-orange-600 hover:bg-white/90 font-semibold px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Start Free Demo
                <ChevronRight
                  className={`ml-2 inline-block transition-transform duration-300 ${
                    isHovered ? "translate-x-1" : ""
                  }`}
                />
                <span className="absolute inset-x-0 w-full h-full bg-gradient-to-r from-white/40 to-transparent rounded-full animate-shine" />
              </Button>
            </a>

            {/* Stats Row */}
            {/* <div className="grid grid-cols-3 gap-6 pt-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 * index }}
                  className="text-center"
                >
                  <div className="flex justify-center mb-2">
                    <stat.icon className="w-6 h-6 text-white/90" />
                  </div>
                  <div className="font-bold text-2xl">{stat.value}</div>
                  <div className="text-sm text-white/80">{stat.label}</div>
                </motion.div>
              ))}
            </div> */}
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="relative mt-16 lg:mt-8"
          >
            <div className="overflow-hidden rounded-2xl bg-white shadow-2xl">
              {/* Header */}
              <div className="flex items-center justify-between border-b border-gray-100 bg-gray-50 p-4">
                <div className="flex items-center space-x-4">
                  <div className="h-3 w-3 rounded-full bg-red-500" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500" />
                  <div className="h-3 w-3 rounded-full bg-green-500" />
                </div>
                {/* <div className="flex items-center space-x-3">
                  <Badge variant="destructive" className="animate-pulse">
                    LIVE
                  </Badge>
                  <Badge variant="outline" className="bg-white">
                    <div className="mr-1 h-2 w-2 rounded-full bg-green-500" />
                    Trading Active
                  </Badge>
                </div> */}
              </div>

              {/* Trading Chart */}
              <div className="relative aspect-video bg-gray-50 p-0 sm:p-4">
                <div className="absolute inset-0 bg-[url('/placeholder.svg?height=400&width=600')] bg-cover bg-center opacity-50" />
                {/* <div className="relative h-full rounded-lg border border-gray-200 bg-white/80 p-4 backdrop-blur"> */}
                {/* Video Element */}
                <video
                  className="w-full h-full sm:rounded-lg"
                  autoPlay
                  loop
                  muted
                  ref={videoRef}
                >
                  <source src={heroVideo} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                {/* </div> */}
                <button
                  onClick={toggleMute}
                  className="absolute bottom-1 sm:bottom-4 right-1 sm:right-7 bg-white text-black p-2 rounded-full flex items-center"
                >
                  {isMuted ? <VolumeX /> : <Volume2 />}
                </button>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-orange-400 opacity-20 blur-2xl" />
            <div className="absolute -bottom-8 -left-8 h-40 w-40 rounded-full bg-orange-300 opacity-20 blur-3xl" />
          </motion.div>
        </div>
      </div>

      {/* Enhanced Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-orange-200 to-rose-200 rounded-full blur-3xl opacity-20 animate-pulse" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gradient-to-br from-orange-500 to-rose-400 rounded-full blur-3xl opacity-20 transform translate-x-1/2 translate-y-1/2" />
    </section>
  );
}
