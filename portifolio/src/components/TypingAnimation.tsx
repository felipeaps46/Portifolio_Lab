import { useState, useEffect, useRef } from "react"
import { Box } from "@mui/material"
import { motion } from "framer-motion"

interface TypingAnimationProps {
  texts: string[]
  typingSpeed?: number
  deletingSpeed?: number
  pauseTime?: number
  startDelay?: number
  loop?: boolean
  className?: string
}

export default function TypingAnimation({
  texts,
  typingSpeed = 90,
  deletingSpeed = 50,
  pauseTime = 1000,
  startDelay = 300,
  loop = true,
  className = "",
}: TypingAnimationProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const timeoutRef = useRef<number | null>(null)

  useEffect(() => {
    if (texts.length === 0) return

    const currentText = texts[currentTextIndex]
    let charIndex = isDeleting ? displayText.length : displayText.length

    const animate = () => {
      if (isDeleting) {
        if (charIndex > 0) {
          setDisplayText(currentText.slice(0, charIndex - 1))
          charIndex--
          const speed = typingSpeed === 0 ? 1 : Math.max(1, deletingSpeed)
          timeoutRef.current = setTimeout(animate, speed)
        } else {
          setIsDeleting(false)
          const nextIndex = (currentTextIndex + 1) % texts.length
          if (nextIndex !== 0 || loop) {
            setCurrentTextIndex(nextIndex)
          }
        }
      } else {
        if (charIndex < currentText.length) {
          setDisplayText(currentText.slice(0, charIndex + 1))
          charIndex++
          const speed = typingSpeed === 0 ? 1 : Math.max(1, typingSpeed)
          timeoutRef.current = setTimeout(animate, speed)
        } else {
          timeoutRef.current = setTimeout(() => {
            setIsDeleting(true)
          }, pauseTime)
        }
      }
    }

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }

    timeoutRef.current = setTimeout(animate, startDelay)

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [currentTextIndex, isDeleting, texts, typingSpeed, deletingSpeed, pauseTime, startDelay, loop])

  return (
    <Box
      component={motion.div}
      className={className}
      sx={{
        display: "inline-flex",
        alignItems: "center",
        fontFamily: "Cascadia Code, monospace",
        fontWeight: 700,
        lineHeight: 1,
        color: "#36BCF7FF",
        textShadow: `
          0 0 5px rgba(54, 188, 247, 0.7),
          0 0 10px rgba(54, 188, 247, 0.6),
          0 0 20px rgba(54, 188, 247, 0.5),
          0 0 40px rgba(54, 188, 247, 0.4)
        `,
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <span>{displayText}</span>

      <Box
        component="span"
        sx={{
          display: "inline-block",
          width: "2px",
          height: "1em",
          backgroundColor: "#36BCF7FF",
          marginLeft: "2px",
          animation: "blink 1.2s ease-in-out infinite",
          "@keyframes blink": {
            "0%": { opacity: 1 },
            "50%": { opacity: 0 },
            "100%": { opacity: 1 },
          },
        }}
      />
    </Box>
  )
}
