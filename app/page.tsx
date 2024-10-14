//app
"use client"

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { Github, Linkedin, Mail, Code, Smartphone, Globe, GraduationCap, Book } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Footer from '@/mycomponentes/footer'
import Header from '@/mycomponentes/header'
import About from '@/mycomponentes/about'
import Contact from '@/mycomponentes/contact'
import Education from '@/mycomponentes/Education'
import Projects from '@/mycomponentes/projects'
import Skills from '@/mycomponentes/skills'

// Snake animation constants and types
const CELL_SIZE = 10;
const CANVAS_WIDTH = 1000;
const CANVAS_HEIGHT = 1000;
const SNAKE_LENGTH = 20;
const MOVE_INTERVAL = 50; // milliseconds

type Point = {
  x: number;
  y: number;
};

export default function Component() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    setIsVisible(true)

    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'education', 'contact']
      const scrollPosition = window.scrollY

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element && scrollPosition >= element.offsetTop - 100) {
          setActiveSection(section)
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let snake: Point[] = Array(SNAKE_LENGTH).fill({ x: 0, y: 0 })
    let direction: Point = { x: 1, y: 0 }
    let target: Point = { x: 0, y: 0 }

    const generateTarget = () => {
      target = {
        x: Math.floor(Math.random() * (CANVAS_WIDTH / CELL_SIZE)) * CELL_SIZE,
        y: Math.floor(Math.random() * (CANVAS_HEIGHT / CELL_SIZE)) * CELL_SIZE
      }
    }

    generateTarget()

    const moveSnake = () => {
      const dx = target.x - snake[0].x
      const dy = target.y - snake[0].y
      const distance = Math.sqrt(dx * dx + dy * dy)

      if (distance < CELL_SIZE) {
        generateTarget()
      } else {
        direction = {
          x: dx / distance,
          y: dy / distance
        }
      }

      const newHead = {
        x: snake[0].x + direction.x * CELL_SIZE,
        y: snake[0].y + direction.y * CELL_SIZE
      }

      newHead.x = (newHead.x + CANVAS_WIDTH) % CANVAS_WIDTH
      newHead.y = (newHead.y + CANVAS_HEIGHT) % CANVAS_HEIGHT

      snake.unshift(newHead)
      snake.pop()
    }

    const drawSnake = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      snake.forEach((segment, index) => {
        const alpha = 1 - (index / SNAKE_LENGTH)
        ctx.fillStyle = `rgba(59, 130, 246, ${alpha * 0.5})`
        ctx.beginPath()
        ctx.arc(segment.x + CELL_SIZE / 2, segment.y + CELL_SIZE / 2, CELL_SIZE / 2, 0, 2 * Math.PI)
        ctx.fill()
      })
    }

    const gameLoop = () => {
      moveSnake()
      drawSnake()
    }

    const intervalId = setInterval(gameLoop, MOVE_INTERVAL)

    return () => clearInterval(intervalId)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100 relative overflow-hidden">
      <canvas 
        ref={canvasRef} 
        width={CANVAS_WIDTH} 
        height={CANVAS_HEIGHT} 
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
      />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-gray-900 bg-opacity-90 backdrop-filter backdrop-blur-lg z-50">
        <div className="container mx-auto px-4 py-4">
          <ul className="flex justify-center space-x-6">
            {['Home', 'About', 'Skills', 'Projects', 'Education', 'Contact'].map((item) => (
              <li key={item}>
                <Button
                //button
                  variant="ghost"
                  className={`text-sm ${activeSection === item.toLowerCase() ? 'text-blue-400' : 'text-gray-400'}`}
                  onClick={() => scrollToSection(item.toLowerCase())}
                >
                  {item}
                </Button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Header */}
    <Header/>

      {/* About */}

    <About/>

      {/* Skills */}
    <Skills/>

      {/* Projects */}

    <Projects/>

      {/* Education */}


    <Education/>

      {/* Contact */}

    <Contact/>

      {/* Footer */}

    <Footer/>
    </main>
  )
}