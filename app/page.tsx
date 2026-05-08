export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-20">
        <div className="inline-block bg-[#161b22] border border-[#30363d] rounded-full px-4 py-1 text-sm text-[#58a6ff] mb-6">
          A/B Test AI Prompts Across Multiple Models
        </div>
        <h1 className="text-4xl font-bold text-white mb-4 leading-tight">
          Stop Guessing Which AI Model<br />Performs Best for Your Prompts
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Send the same prompt to GPT-4, Claude, and Gemini simultaneously. Get automated quality scores, cost breakdowns, and data-driven insights to optimize your AI spending.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start Comparing — $39/mo
        </a>
        <p className="text-sm text-[#8b949e] mt-3">Cancel anytime. No credit card lock-in.</p>
        <div className="mt-12 grid grid-cols-3 gap-6 text-center">
          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
            <div className="text-2xl font-bold text-[#58a6ff]">3</div>
            <div className="text-sm text-[#8b949e] mt-1">AI Models Compared</div>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
            <div className="text-2xl font-bold text-[#58a6ff]">Real-time</div>
            <div className="text-sm text-[#8b949e] mt-1">Cost Analytics</div>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
            <div className="text-2xl font-bold text-[#58a6ff]">Auto</div>
            <div className="text-sm text-[#8b949e] mt-1">Quality Scoring</div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple, Transparent Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-xl p-8 max-w-sm mx-auto text-center">
          <div className="text-sm text-[#58a6ff] font-semibold uppercase tracking-wide mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$39</div>
          <div className="text-[#8b949e] mb-6">/month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Unlimited A/B prompt experiments',
              'GPT-4, Claude 3, Gemini Pro support',
              'Automated quality scoring',
              'Cost-per-token breakdown',
              'Experiment history & analytics',
              'CSV export of results',
            ].map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm">
                <span className="text-[#58a6ff] mt-0.5">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            Get Started Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: 'Which AI models can I compare?',
              a: 'You can run experiments across OpenAI GPT-4, Anthropic Claude 3, and Google Gemini Pro simultaneously from a single dashboard.',
            },
            {
              q: 'How is quality scoring calculated?',
              a: 'Responses are evaluated on relevance, coherence, and completeness using automated metrics. You can also add custom scoring criteria for your use case.',
            },
            {
              q: 'Do I need to bring my own API keys?',
              a: 'Yes — you connect your own OpenAI, Anthropic, and Google API keys. This keeps your data private and gives you full control over usage and billing.',
            },
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-lg p-5">
              <div className="font-semibold text-white mb-2">{q}</div>
              <div className="text-sm text-[#8b949e]">{a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-sm text-[#8b949e] border-t border-[#30363d] pt-8">
        © {new Date().getFullYear()} AI Prompt Performance Comparator. All rights reserved.
      </footer>
    </main>
  )
}
