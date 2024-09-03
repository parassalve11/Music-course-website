"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const content = [
    {
        
        title: "Unlock Your Musical Potential: Discover Our Courses!",
        description: "Dive into melody, rhythm, and harmony with our diverse music courses. From theory to instrument mastery, we cater to all levels and interests. Learn from expert instructors passionate about nurturing your talent. Join a vibrant community of music enthusiasts and collaborate with fellow learners. Let us guide you on a fulfilling musical journey towards your aspirations."
            
        
    },
    {
        title: "Explore Your Musical Horizons: Enroll in Our Courses!",
        description: "Immerse yourself in melody, rhythm, and harmony through our diverse range of music courses. Whether you're a novice or an expert, we offer tailored instruction to suit all levels and interests. Learn from seasoned instructors dedicated to fostering your talent. Join a dynamic community of music lovers and engage in collaborative learning. Let us be your compass on an enriching journey towards musical excellence."
    },
    {
        title: "Harmonize Your Skills: Unveil Our Music Course Offerings!",
        description: "Discover the intricacies of melody, rhythm, and harmony in our comprehensive music courses. With topics ranging from fundamental theory to advanced instrument techniques, we cater to diverse skill levels and passions. Benefit from the expertise of our passionate instructors committed to nurturing your potential. Engage with fellow music aficionados in our lively community. Let us accompany you on a rewarding musical odyssey towards realizing your aspirations."
    },
    {
        title: "Elevate Your Musical Mastery: Embrace Our Course Selection!",
        description: "Delve into the world of melody, rhythm, and harmony with our array of music courses. Whether you're a beginner or an aficionado, we offer tailored instruction to elevate your skills. Learn from dedicated instructors who share their expertise with passion and commitment. Connect with like-minded individuals in our supportive community of music enthusiasts. Let us inspire and guide you on your journey to musical proficiency."
    },
    {
        title: "Discover the Symphony Within: Enroll in Our Music Courses!",
        description: "Embark on a journey of discovery as you explore melody, rhythm, and harmony in our diverse music courses. From foundational theory to advanced instrumental techniques, our offerings cater to every level and interest. Learn from experienced instructors who are dedicated to nurturing your talent and passion. Engage with fellow music lovers in our vibrant community. Let us help you unlock your musical potential and achieve your dreams."
    },
    {
        title: "Unleash Your Musical Creativity: Dive into Our Courses!",
        description: "Ignite your passion for melody, rhythm, and harmony through our dynamic music courses. With a curriculum designed to suit all levels and interests, we empower you to explore and create. Learn from expert instructors who are committed to fostering your unique talents. Connect with a community of fellow musicians and enthusiasts, sharing inspiration and collaboration. Let us be your guide as you embark on a fulfilling musical journey."
    },

    {
        title: "Master the Art of Music: Explore Our Course Catalog!",
        description: "Immerse yourself in the enchanting world of melody, rhythm, and harmony with our comprehensive music courses. Whether you're a beginner or an advanced musician, our diverse offerings cater to your individual needs. Benefit from the guidance of experienced instructors who are passionate about nurturing your musical talent. Join a supportive community of like-minded individuals and collaborate on creative projects. Let us accompany you on your path to musical excellence."
    },
    {
        title: "Ignite Your Musical Passion: Enroll in Our Dynamic Courses!",
        description: "Fuel your love for melody, rhythm, and harmony with our engaging music courses. Explore a variety of topics tailored to your interests and skill level, from foundational theory to advanced techniques. Learn from dedicated instructors who are eager to share their knowledge and expertise. Connect with a community of fellow music enthusiasts, sharing insights and inspiration. Let us inspire and empower you on your musical journey."
    },
    {
        title: "Uncover Your Musical Talents: Join Our Diverse Courses!",
        description: "Unveil the magic of melody, rhythm, and harmony in our array of music courses. Whether you're a novice or a seasoned musician, we provide personalized instruction to nurture your skills. Learn from passionate instructors dedicated to unlocking your full potential. Engage with a supportive community of fellow learners, sharing experiences and insights. Let us guide you as you embark on a fulfilling musical adventure."
    }];

export default function WhyChooseUs() {
    return (
        <div className="p-10 mt-28">
          <StickyScroll content={content} />
        </div>
      );
}
