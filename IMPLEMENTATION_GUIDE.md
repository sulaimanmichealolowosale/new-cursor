/\*\*

- IMPLEMENTATION GUIDE: How to Use the Premium Motion System
-
- This guide shows how to refactor existing pages to use the new
- scroll-driven 3D motion system.
  \*/

// BEFORE: Using ScrollRevealSection (static sections)
// ================================================
/\*
import ScrollRevealSection from '../components/ScrollRevealSection'

export default function Home() {
return (
<div>
<HeroSection ... />

      <ScrollRevealSection className="py-20 bg-white dark:bg-primary-900">
        <div className="max-w-7xl mx-auto">
          <h2>Services</h2>
          {/* Content */}
        </div>
      </ScrollRevealSection>

      <ScrollRevealSection className="py-20 bg-gray-50 dark:bg-primary-800">
        <div className="max-w-7xl mx-auto">
          <h2>Process</h2>
          {/* Content */}
        </div>
      </ScrollRevealSection>
    </div>

)
}
\*/

// AFTER: Using ScrollSection (scroll-driven 3D stacking)
// ======================================================

import { motion } from 'framer-motion'
import ScrollSection from '../components/ScrollSection'
import {
contentEntranceVariants,
staggerContainerVariants
} from '../utils/scrollMotionSystem'

export default function HomeWithMotion() {
const services = [
{
title: "Radio Advertising",
description: "Reach local audiences...",
},
// ... more services
]

const processSteps = [
{ number: 1, title: "Discovery", description: "..." },
// ... more steps
]

return (
<div>
{/_ SECTION 0: Hero _/}
<ScrollSection
        id="hero"
        sectionIndex={0}
        background="bg-gradient-to-b from-primary-950 to-primary-900 dark:from-primary-950 dark:to-primary-900"
      >
<motion.div
className="text-center py-20"
variants={staggerContainerVariants}
initial="initial"
animate="animate" >
<motion.h1
variants={contentEntranceVariants}
className="text-5xl md:text-6xl font-bold text-white mb-6" >
Elevate Your Brand
</motion.h1>

          <motion.p
            variants={contentEntranceVariants}
            className="text-xl text-white/80 max-w-2xl mx-auto mb-12"
          >
            Strategic advertising solutions that drive real results
          </motion.p>

          <motion.div
            variants={contentEntranceVariants}
            className="flex gap-4 justify-center"
          >
            <button className="px-8 py-3 bg-accent-dark text-white rounded-lg font-semibold hover:opacity-90 transition">
              Book a Call
            </button>
            <button className="px-8 py-3 bg-white text-primary-900 rounded-lg font-semibold hover:opacity-90 transition">
              Learn More
            </button>
          </motion.div>
        </motion.div>
      </ScrollSection>

      {/* SECTION 1: Services */}
      <ScrollSection
        id="services"
        sectionIndex={1}
        background="bg-white dark:bg-primary-900"
      >
        <motion.div
          className="py-20"
          variants={staggerContainerVariants}
          initial="initial"
          animate="animate"
        >
          <motion.div variants={contentEntranceVariants} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 dark:text-primary-300">
              Comprehensive advertising solutions tailored to your brand
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={contentEntranceVariants}
                className="p-6 bg-gradient-to-br from-accent-dark/10 to-transparent dark:from-accent-light/10 border border-accent-dark/20 dark:border-accent-light/20 rounded-lg hover:shadow-lg transition"
              >
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-700 dark:text-primary-300">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </ScrollSection>

      {/* SECTION 2: Process */}
      <ScrollSection
        id="process"
        sectionIndex={2}
        background="bg-gray-50 dark:bg-primary-800"
      >
        <motion.div
          className="py-20"
          variants={staggerContainerVariants}
          initial="initial"
          animate="animate"
        >
          <motion.div variants={contentEntranceVariants} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Process
            </h2>
            <p className="text-xl text-gray-600 dark:text-primary-300">
              Proven approach to campaign success
            </p>
          </motion.div>

          <div className="space-y-6 max-w-2xl mx-auto">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                variants={contentEntranceVariants}
                className="flex items-start gap-6 p-6 bg-white dark:bg-primary-700 rounded-lg border border-gray-200 dark:border-primary-600"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent-dark dark:bg-accent-light text-white dark:text-primary-900 flex items-center justify-center font-bold text-lg">
                  {step.number}
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    {step.title}
                  </h4>
                  <p className="text-gray-700 dark:text-primary-300">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </ScrollSection>

      {/* SECTION 3: Call to Action */}
      <ScrollSection
        id="cta"
        sectionIndex={3}
        background="bg-gradient-to-br from-accent-dark to-orange-700 dark:from-accent-light dark:to-orange-400"
      >
        <motion.div
          className="text-center py-20 text-white dark:text-primary-900"
          variants={staggerContainerVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2
            variants={contentEntranceVariants}
            className="text-4xl font-bold mb-6"
          >
            Ready to Get Started?
          </motion.h2>

          <motion.p
            variants={contentEntranceVariants}
            className="text-xl mb-12 opacity-90"
          >
            Let's discuss how we can elevate your brand with strategic advertising
          </motion.p>

          <motion.button
            variants={contentEntranceVariants}
            className="px-8 py-4 bg-white dark:bg-primary-900 text-accent-dark dark:text-accent-light font-semibold rounded-lg hover:opacity-90 transition"
          >
            Book Your Free Consultation
          </motion.button>
        </motion.div>
      </ScrollSection>
    </div>

)
}

/\*\*

- KEY FEATURES OF THIS IMPLEMENTATION:
-
- 1.  SCROLL-DRIVEN MOTION
- - Each ScrollSection automatically gets scroll-linked 3D transforms
- - No manual scroll event listeners needed
- - Staggered entrance based on sectionIndex
-
- 2.  3D DEPTH STACKING
- - Sections scale down (1.0 → 0.92) as user scrolls past
- - Sections rotate backward (-8deg) to create tilt effect
- - Sections fade out (opacity: 1 → 0.4)
- - Overall effect: sections recede into depth
-
- 3.  SMOOTH PHYSICS
- - Spring-based motion (not linear) for organic feel
- - Configurable stiffness and damping
- - No jumpy or abrupt transitions
-
- 4.  PERFORMANCE
- - Only transform and opacity animated (GPU-accelerated)
- - Will-change hints prevent layout thrashing
- - Spring physics reduce jank
-
- 5.  ACCESSIBILITY
- - Respects prefers-reduced-motion automatically
- - ScrollContainer disables 3D for users who request it
- - All motion is enhancing, not required for content access
-
- 6.  THEME SUPPORT
- - Dark/light mode fully integrated
- - Accent colors adapt to theme
- - Gradients are theme-aware
-
- 7.  REUSABILITY
- - ScrollSection component handles all scroll logic
- - Just provide sectionIndex and children
- - Entrance animations handled automatically
- - Can be applied to any page immediately
    \*/
