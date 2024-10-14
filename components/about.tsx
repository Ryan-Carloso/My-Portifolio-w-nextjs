"use cliente"
import { useState, useEffect } from 'react'
import { Github, Linkedin, Mail, Code, Smartphone, Globe, GraduationCap, Book } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"




export default function About() {
    const [isVisible, setIsVisible] = useState(false)

    // Use effect to set visibility after component mounts
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true)
        }, 100); // Delay to see the transition effect
        
        return () => clearTimeout(timer); // Cleanup timer on unmount
    }, []);
    return (
        <div>
      <section id="about" className="py-16 bg-gray-800 bg-opacity-50 relative z-10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-blue-400">About Me</h2>
          <Card>
            <CardContent className="p-6">
              <p className="text-lg text-gray-900 mb-6 leading-relaxed transition-all duration-1000 ease-in-out transform translate-y-10 opacity-0" style={{ transform: isVisible ? 'translateY(0)' : 'translateY(2rem)', opacity: isVisible ? 1 : 0 }}>
                I'm a passionate React Native and Next.js developer with 5 years of experience building
                cross-platform mobile apps and responsive web applications. I love creating intuitive
                and performant user interfaces that provide great user experiences. My goal is to blend
                creativity with technical expertise to deliver outstanding digital solutions.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
        </div>
    );
}