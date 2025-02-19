"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Mail, Bitcoin, Palette, DollarSign, type LucideIcon } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface Feature {
  icon: React.ReactElement<LucideIcon>
  title: string
  description: string
}

const features: Feature[] = [
  {
    icon: <Mail className="w-8 h-8" />,
    title: "Omni-compliant Platform",
    description:
      "Engineered for optimal enterprise usability.",
  },
  {
    icon: <Bitcooin className="w-8 h-8" />,
    title: "Onyx Chain-AI",
    description:
      "Onyx AI agents leverage high throughput hybrid web 3.0 tech to perform real time supply chain optimizations.",
  },
  {
    icon: <Palette className="w-8 h-8" />,
    title: "Custom Branding",
    description: "White label Onyx solutions with your branding using our AI powered design tools.",
  },
  {
    icon: <DollarSign className="w-8 h-8" />,
    title: "Lower Costs, Higher Impact",
    description:
      "Reduce waste and meet sustainability goals without added complexity.",
  },
]

interface FeatureCardProps extends Feature {
  index: number
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="h-full hover:shadow-lg transition-shadow duration-300">
        <CardHeader>
          <div className="flex items-center justify-center mb-4">
            <div className="text-primary p-2 rounded-full bg-primary/10">{icon}</div>
          </div>
          <CardTitle className="text-xl font-semibold text-center">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-center">{description}</CardDescription>
        </CardContent>
      </Card>
    </motion.div>
  )
}

const WhyOnyx: React.FC = () => {
  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">Why Onyx?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyOnyx

