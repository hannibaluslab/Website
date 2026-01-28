import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "How does JAW.ID handle user custody and security?",
    answer: "JAW.ID is built on a true self-custody model. Users retain full control of their keys and assets at all times. We use passkey-based authentication tied to device biometrics, eliminating seed phrases while maintaining the security guarantees of non-custodial wallets. All smart account infrastructure is built on audited, standards-compliant contracts."
  },
  {
    question: "What chains and networks does JAW.ID support?",
    answer: "JAW.ID supports all major EVM-compatible chains including Ethereum, Base, Arbitrum, Optimism, Polygon, and more. Our cross-chain identity system allows users to maintain a single identity (ENS-based) across all supported networks, with automatic network selection and routing for seamless multi-chain experiences."
  },
  {
    question: "How long does integration take for existing products?",
    answer: "Most teams are production-ready within minutes. JAW.ID integrates directly with Wagmi or any EIP-1193 provider with just a few lines of code. For more complex enterprise deployments with custom requirements, our team provides dedicated integration support to ensure a smooth rollout."
  },
  {
    question: "What are the costs associated with gasless transactions?",
    answer: "JAW.ID offers flexible gas sponsorship options. You can sponsor gas for your users entirely, set spending limits per account, or implement hybrid models where users cover gas above certain thresholds. Gas costs are transparent and predictable, with no hidden fees or markups on sponsored transactions."
  },
  {
    question: "Can we use JAW.ID for regulatory-compliant applications?",
    answer: "Yes. JAW.ID is designed to meet the operational, security, and compliance needs of regulated environments. We provide audit documentation, support for identity verification workflows, configurable spending policies, and detailed transaction logging. Our enterprise tier includes dedicated compliance support."
  },
  {
    question: "How do programmable permissions work for AI agents and subscriptions?",
    answer: "JAW.ID's smart account architecture allows users to delegate specific capabilities with granular controls. You can define spending limits, time windows, allowed contracts, and transaction types. This enables use cases like recurring subscription payments, AI agent trading with caps, and automated DeFi strategies—all while users maintain ultimate control and can revoke permissions anytime."
  },
  {
    question: "Is there a difference between native and universal accounts?",
    answer: "Native accounts are scoped to your application—users create and manage their account within your product exclusively. Universal accounts follow users across multiple JAW-integrated products, allowing them to carry their identity and assets between apps. You choose which model fits your product strategy."
  },
  {
    question: "What kind of analytics and monitoring do you provide?",
    answer: "The JAW Dashboard provides real-time visibility into user analytics, engagement tracking, identity verification status, cross-chain activity, and custom event monitoring. You can set up webhooks for key events, track conversion funnels, and export data for your own analytics pipelines."
  },
]

export default function FAQ() {
  return (
    <section id="faq" className="py-12 md:py-20 px-4 md:px-6" style={{ background: '#0a0a0a' }}>
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 font-['Space_Grotesk',sans-serif] text-white">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-400 text-sm md:text-base">
            Everything you need to know about integrating JAW.ID into your product.
          </p>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-b border-white/10"
            >
              <AccordionTrigger className="text-left font-medium text-base md:text-lg py-4 md:py-5 hover:no-underline text-white hover:text-gray-300 [&[data-state=open]]:text-[#135bec]">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-400 text-sm md:text-base leading-relaxed pb-4 md:pb-5">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* CTA */}
        <div className="text-center mt-4 md:mt-6">
          <p className="text-gray-400 text-sm md:text-base">
            Still have questions?{' '}
            <a href="#contact" className="text-[#135bec] font-medium hover:underline">
              Get in touch
            </a>
            {' '}with our team.
          </p>
        </div>
      </div>
    </section>
  )
}
