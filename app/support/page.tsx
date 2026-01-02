"use client";

import { useState } from "react";
import Link from "next/link";

export default function SupportPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "Is Rooted free to use?",
      answer: "Rooted offers free access to all features.",
    },
    {
      question: "Do I need an account to use Rooted?",
      answer:
        "No account is required to start playing and learning. An account is however required to track and save your progress.",
    },
    {
      question: "How are questions created?",
      answer:
        "Questions are generated based on biblical topics and Scripture to encourage learning and reflection.",
    },
    {
      question: "Who is Rooted for?",
      answer:
        "Rooted is suitable for all ages: individuals, families, youth groups, and church communities.",
    },
    {
      question: "Can I choose specific Bible topics?",
      answer:
        "Yes. You select the topic you want to be questioned on before starting.",
    },
  ];

  const steps = [
    { number: "1", text: "Install the app" },
    {
      number: "2",
      text: "Open the app and select a Bible topic you want to explore",
    },
    {
      number: "3",
      text: "Rooted generates Scripture-based trivia questions related to that topic",
    },
    {
      number: "4",
      text: "Answer the questions and reflect on biblical truths",
    },
    {
      number: "5",
      text: "Proceed to higher levels of difficulty if you desire",
    },
    {
      number: "6",
      text: "Continue exploring new topics to grow in knowledge and faith",
    },
  ];

  const troubleshootingSteps = [
    "Ensure you have a stable internet connection",
    "Close and reopen the app",
    "Update to the latest version of iOS or Android",
    "Check that you're using the latest version of the Rooted app",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-amber-50">
      {/* Hero Section */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-700"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-30"></div>
        <div className="relative max-w-5xl mx-auto px-6 py-20 text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <span className="text-emerald-100 text-sm font-medium">
              🌱 App Support
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight">
            ROOTED
          </h1>
          <p className="text-xl md:text-2xl text-emerald-100 font-medium">
            Grow deeper in Scripture, one question at a time
          </p>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-16 space-y-20">
        {/* About Section */}
        <section className="relative">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-lg shadow-emerald-200">
              <span className="text-2xl">📖</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900">About Rooted</h2>
          </div>
          <div className="bg-white rounded-3xl p-8 shadow-xl shadow-gray-100 border border-gray-100">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Rooted is a Bible-based trivia app designed to help users grow
              deeper in their understanding of Scripture and their relationship
              with Christ.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              By combining thoughtful questions with engaging topics from the
              Bible, Rooted encourages learning, reflection, and spiritual
              growth in a fun and accessible way. Whether you&apos;re exploring
              the Bible for the first time or deepening an existing faith,
              Rooted helps you stay grounded in God&apos;s Word — one question
              at a time.
            </p>
          </div>
        </section>

        {/* How It Works Section */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center shadow-lg shadow-amber-200">
              <span className="text-2xl">⚡</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900">
              How the App Works
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {steps.map((step, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-6 shadow-lg shadow-gray-100 border border-gray-100 hover:shadow-xl hover:shadow-emerald-100 hover:border-emerald-200 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white font-bold mb-4 group-hover:scale-110 transition-transform">
                  {step.number}
                </div>
                <p className="text-gray-700 font-medium">{step.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-6 border border-emerald-100">
            <p className="text-emerald-800 font-medium">
              ✨ Rooted is designed for personal devotion, family learning,
              group discussions, and friendly challenges.
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-purple-200">
              <span className="text-2xl">❓</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg shadow-gray-100 border border-gray-100 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-900">
                    {faq.question}
                  </span>
                  <span
                    className={`w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 transition-transform ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                  >
                    ↓
                  </span>
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-5">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Troubleshooting Section */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-rose-500 to-pink-600 flex items-center justify-center shadow-lg shadow-rose-200">
              <span className="text-2xl">🔧</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900">
              Troubleshooting
            </h2>
          </div>
          <div className="bg-white rounded-3xl p-8 shadow-xl shadow-gray-100 border border-gray-100">
            <p className="text-gray-700 mb-6">
              If you experience issues, try the following:
            </p>
            <ul className="space-y-4">
              {troubleshootingSteps.map((step, index) => (
                <li key={index} className="flex items-start gap-4">
                  <span className="w-6 h-6 rounded-full bg-rose-100 flex items-center justify-center text-rose-600 text-sm font-bold flex-shrink-0 mt-0.5">
                    {index + 1}
                  </span>
                  <span className="text-gray-700">{step}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-gray-600 italic">
              If problems persist, please contact support using the information
              below.
            </p>
          </div>
        </section>

        {/* Contact Support Section */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center shadow-lg shadow-blue-200">
              <span className="text-2xl">💬</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900">
              Contact Support
            </h2>
          </div>
          <div className="bg-gradient-to-br from-blue-600 to-cyan-700 rounded-3xl p-8 text-white shadow-xl">
            <p className="text-xl font-medium mb-6">We&apos;re here to help.</p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <p className="text-blue-200 text-sm font-medium mb-2">Email</p>
                <a
                  href="mailto:dawalkmovement@gmail.com"
                  className="text-white font-semibold hover:underline"
                >
                  dawalkmovement@gmail.com
                </a>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <p className="text-blue-200 text-sm font-medium mb-2">
                  Response Time
                </p>
                <p className="text-white font-semibold">Within 24–48 hours</p>
              </div>
            </div>
            <div className="mt-6 bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <p className="text-blue-100 text-sm">
                💡 Please include your device model and iOS/Android version when
                contacting us for faster assistance.
              </p>
            </div>
          </div>
        </section>

        {/* Privacy Section */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-gray-600 to-slate-700 flex items-center justify-center shadow-lg shadow-gray-200">
              <span className="text-2xl">🔒</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900">
              Privacy & Data Use
            </h2>
          </div>
          <div className="bg-white rounded-3xl p-8 shadow-xl shadow-gray-100 border border-gray-100">
            <p className="text-lg text-gray-700 mb-6">
              Rooted respects your privacy.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <span className="text-emerald-500 text-xl">✓</span>
                <p className="text-gray-700">
                  We do not sell or share personal data
                </p>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-emerald-500 text-xl">✓</span>
                <p className="text-gray-700">
                  Any data collected is used solely to improve app performance
                  and user experience
                </p>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-emerald-500 text-xl">✓</span>
                <p className="text-gray-700">
                  Rooted does not collect sensitive personal information
                </p>
              </div>
            </div>
            <p className="mt-6 text-gray-500">
              For full details, please review our{" "}
              <Link
                href="/"
                className="text-emerald-600 font-medium hover:underline"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </section>

        {/* Scripture Section */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-lg shadow-emerald-200">
              <span className="text-2xl">✝️</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900">
              Scripture & Faith Statement
            </h2>
          </div>
          <div className="bg-gradient-to-br from-emerald-600 to-teal-700 rounded-3xl p-8 text-white shadow-xl">
            <p className="text-lg text-emerald-100 mb-6">
              Rooted is a faith-based application created to glorify God and
              help users grow in Christ. All questions are inspired by Scripture
              and biblical teachings. Rooted is intended as a learning and
              engagement tool and does not replace personal Bible study, prayer,
              or church fellowship.
            </p>
            <blockquote className="border-l-4 border-white/30 pl-6 py-4">
              <p className="text-xl font-medium italic mb-3">
                &quot;So then, just as you received Christ Jesus as Lord,
                continue to live your lives in him, rooted and built up in
                him.&quot;
              </p>
              <cite className="text-emerald-200 font-medium">
                — Colossians 2:6–7
              </cite>
            </blockquote>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-2xl">🌱</span>
            <span className="text-xl font-bold">Rooted</span>
          </div>
          <p className="text-gray-400">
            © {new Date().getFullYear()} Rooted App. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
