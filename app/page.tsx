"use client";
//import Image from "next/image";
import Head from "next/head";

export default function Home() {
  const lastUpdated = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <main className="">
      <Head>
        <title>Rooted - Game Development Agreement</title>
      </Head>

      {/* HEADER SECTION */}
      <section className=" flex flex-col justify-center items-center rounded-lg w-full border-gray-200 border-b top-0 z-50 bg-gradient-to-b from-green-400 to-white text-center py-50 px-6">
        <p className="uppercase tracking-wider text-sm text-green-700 mb-2">
          Understanding Our
        </p>
        <h1 className="text-5xl sm:text-4xl font-bold text-green-900 leading-snug">
          Terms and Conditions
        </h1>
      </section>

      {/* CONTENT SECTION */}
      <section className="container mx-auto px-5 sm:px-12 py-10 text-gray-800 font-sans">
        <h2 className="flex flex-col justify-center items-center text-lg font-bold mb-2 text-green-700">
          GAME DEVELOPMENT AGREEMENT
        </h2>
        <p className="text-gray-500 mb-6 text-sm">
          Last Updated: {lastUpdated}{" "}
        </p>

        <div className="space-y-6 text-[0.95rem] sm:text-base leading-relaxed">
          <div>
            <h3 className="font-semibold text-green-700 mb-1">
              1. Introduction
            </h3>
            <p>
              Welcome to <strong>Rooted</strong> (&ldquo;the Game&rdquo;), a
              Bible-based quiz game designed for children aged 8 to 16. The Game
              is operated by <strong>DaWalk Movement</strong>{" "}
              (&ldquo;Company,&rdquo; &ldquo;we,&rdquo; &ldquo;our,&rdquo; or
              &ldquo;us&rdquo;). By accessing or playing the Game, you agree to
              abide by these Terms and Conditions. If you do not agree, please
              do not use the Game.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-green-700 mb-1">
              2. Eligibility
            </h3>
            <p>
              The Game is intended for users between 8 to 16 years old. If you
              are under 13, parental or guardian consent is required. Parents or
              guardians must review and agree to these Terms before allowing
              their children to use the Game.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-green-700 mb-1">
              3. User Accounts
            </h3>
            <p>
              To play the Game, users may be required to create an account. You
              must provide accurate and truthful information when registering.
              You are responsible for maintaining the security of your account
              and for all activities conducted under it.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-green-700 mb-1">
              4. Game Rules and Conduct
            </h3>
            <p>
              Players earn points, medals, and advance through levels based on
              performance. Players must not use cheats, bots, or exploit
              vulnerabilities to gain an unfair advantage. Misconduct may result
              in suspension or termination.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-green-700 mb-1">
              5. Intellectual Property
            </h3>
            <p>
              All content in the Game, including text, graphics, design, and
              questions, is the property of <strong>DaWalk Movement</strong> and
              protected under copyright laws. Users may not reproduce,
              distribute, or modify any part without consent.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-green-700 mb-1">
              6. Privacy Policy
            </h3>
            <p>
              We collect limited personal information to improve gameplay. We do
              not sell, share, or disclose personal data except as required by
              law.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-green-700 mb-1">
              7. Parental Responsibility
            </h3>
            <p>
              Parents or guardians should monitor their child&rsquo;s activity.
              We encourage responsible gaming and discourage excessive play.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-green-700 mb-1">
              8. Disclaimers
            </h3>
            <p>
              The Game is provided &ldquo;as is,&rdquo; with no guarantee of
              uninterrupted or error-free use. We are not responsible for
              technical failures or data loss.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-green-700 mb-1">
              9. Limitation of Liability
            </h3>
            <p>
              <strong>DaWalk Movement</strong> shall not be liable for indirect
              or consequential damages from Game use.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-green-700 mb-1">
              10. Termination of Access
            </h3>
            <p>
              We may suspend or terminate any account that violates these Terms
              or engages in inappropriate behavior.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-green-700 mb-1">
              11. Changes to These Terms
            </h3>
            <p>
              We may update these Terms periodically. Continued use indicates
              acceptance of the revised Terms.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-green-700 mb-1">
              12. Dispute Resolution
            </h3>
            <p>
              Any disputes arising will be resolved through arbitration or
              mediation before any legal action.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-green-700 mb-1">
              13. Contact Information
            </h3>
            <p>
              For any questions, contact us at{" "}
              <a
                href="mailto:dawalkmovement@gmail.com"
                className="text-green-600 underline"
              >
                dawalkmovement@gmail.com
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
