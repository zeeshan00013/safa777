import { Download } from "lucide-react";
import Link from "next/link";
import React from "react";

const HowToPlaySafa777 = () => {
  return (
    <section className=" px-4  text-black max-w-5xl mx-auto">
      <div className="">
        <h2 className="text-4xl text-[#53A700] font-semibold md:text-5xl leading-13 text-center">
          📲 How to Download & Sign Up on Safa777
        </h2>

        <div className="mb-12 mt-6">
          <h3 className="text-2xl font-semibold mb-4 text-[#53A700]">
            Step 1: Download & Install the Safa777 App
          </h3>
          <ol className="list-decimal list-inside space-y-3 text-gray-700">
            <li>
              <strong>Visit the Website:</strong> Open your browser and go to{" "}
              <a
                href="https://safa777game.pro"
                className="text-blue-600 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Safa777game.pro
              </a>
              .
            </li>
            <li>
              <strong>Download the APK:</strong> Find the Android download
              button and tap it to begin downloading the app.
            </li>
            <li>
              <strong>Enable Unknown Sources:</strong> Go to{" "}
              <em>Settings &gt; Security</em> or <em>Privacy</em> on your phone.
              Then allow your browser to install unknown apps.
            </li>
            <li>
              <strong>Install the App:</strong> Once downloaded, open the APK
              file and follow the installation steps.
            </li>
            <li>
              <strong>Launch the Game:</strong> Find the Safa777 icon on your
              home screen or app drawer and tap to start.
            </li>
          </ol>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-4 text-[#53A700]">
            Step 2: Create Your Safa777 Account
          </h3>
          <ol className="list-decimal list-inside space-y-3 text-gray-700">
            <li>
              <strong>Open the App:</strong> Launch the Safa777 app after
              installation.
            </li>
            <li>
              <strong>Tap "Sign Up":</strong> Look for the <em>Sign Up</em> or{" "}
              <em>Register</em> button on the home screen.
            </li>
            <li>
              <strong>Fill in Your Info:</strong>
              <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                <li>
                  <strong>Username:</strong> Choose a unique username.
                </li>
                <li>
                  <strong>Mobile Number:</strong> Use a valid Pakistani phone
                  number.
                </li>
                <li>
                  <strong>Password:</strong> Set a secure password for your
                  account.
                </li>
                <li>
                  <strong>Referral Code (Optional):</strong> Enter a code if you
                  have one to get a bonus.
                </li>
              </ul>
            </li>
            <li>
              <strong>Verify OTP:</strong> You’ll receive a one-time password
              via SMS. Enter it to confirm your account.
            </li>
            <li>
              <strong>Login & Play:</strong> Use your username and password to
              log in and explore games, rewards, and tournaments.
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
};

export default HowToPlaySafa777;
