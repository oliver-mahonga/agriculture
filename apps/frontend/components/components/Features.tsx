"use client"

import { useSpring, animated } from "@react-spring/web"
//import { Card, CardContent } from "@/components/ui/card"
import {
  Brain,
  PhoneCall,
  ShoppingCart,
  Wallet,
} from "lucide-react"
import styles from "./FeaturesSection.module.css"
import { Card, CardContent } from "./ui/card"

const features = [
  {
    title: "AI Crop Diagnosis",
    description: "Upload a photo and get instant disease analysis powered by AI.",
    icon: Brain,
  },
  {
    title: "Voice Assistant",
    description: "Call and talk to our farming assistant in your local language.",
    icon: PhoneCall,
  },
  {
    title: "Marketplace",
    description: "Buy and sell farm products with verified buyers and sellers.",
    icon: ShoppingCart,
  },
  {
    title: "Co-op Savings",
    description: "Join savings groups and access micro-loans with ease.",
    icon: Wallet,
  },
]

function FeatureCard({ icon: Icon, title, description }: any) {
  const [style, api] = useSpring(() => ({
    transform: "scale(1)",
    boxShadow: "0px 0px 0px rgba(0,0,0,0)",
    config: { tension: 200, friction: 15 },
  }))

  return (
    <animated.div
      style={style}
      onMouseEnter={() =>
        api.start({
          transform: "scale(1.03)",
          boxShadow: "0 10px 20px rgba(255, 102, 0, 0.2)",
        })
      }
      onMouseLeave={() =>
        api.start({
          transform: "scale(1)",
          boxShadow: "0px 0px 0px rgba(0,0,0,0)",
        })
      }
    >
      <Card className={styles.featureCard}>
        <CardContent>
          <div className={styles.icon}>
            <Icon size={40} strokeWidth={2.2} />
          </div>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.description}>{description}</p>
        </CardContent>
      </Card>
    </animated.div>
  )
}

export default function FeaturesSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Our Key Features</h2>
        <div className={styles.grid}>
          {features.map((feature, idx) => (
            <FeatureCard key={idx} {...feature} />
          ))}
        </div>
      </div>
    </section>
  )
}
