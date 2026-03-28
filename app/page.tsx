"use client";

import { useState } from "react";

export default function Home() {
  const [step, setStep] = useState(1);

  // Data state
  const [username, setUsername] = useState("");
  const [about, setAbout] = useState("");
  const [social, setSocial] = useState({
    github: "",
    linkedin: "",
    email: "",
  });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>🇪🇹 Ethio README Generator</h1>

      <h3>Step {step} of 6</h3>

      {/* STEP 1 */}
      {step === 1 && (
        <div>
          <h2>GitHub Username</h2>
          <input
            type="text"
            placeholder="Enter GitHub username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{ padding: "10px", width: "300px" }}
          />
          <br />
          <button onClick={nextStep} style={{ marginTop: "10px" }}>
            Next
          </button>
        </div>
      )}

      {/* STEP 2 */}
      {step === 2 && (
        <div>
          <h2>About Me</h2>
          <textarea
            placeholder="Write about yourself"
            value={about}
            onChange={(e) => setAbout(e.target.value)}
            style={{ padding: "10px", width: "300px", height: "100px" }}
          />
          <br />
          <button onClick={prevStep}>Back</button>
          <button onClick={nextStep}>Next</button>
        </div>
      )}

      {/* STEP 3 */}
      {step === 3 && (
        <div>
          <h2>Social Links</h2>

          <input
            type="text"
            placeholder="GitHub"
            value={social.github}
            onChange={(e) =>
              setSocial({ ...social, github: e.target.value })
            }
          />
          <br />

          <input
            type="text"
            placeholder="LinkedIn"
            value={social.linkedin}
            onChange={(e) =>
              setSocial({ ...social, linkedin: e.target.value })
            }
          />
          <br />

          <input
            type="email"
            placeholder="Email"
            value={social.email}
            onChange={(e) =>
              setSocial({ ...social, email: e.target.value })
            }
          />

          <br />
          <button onClick={prevStep}>Back</button>
          <button onClick={nextStep}>Next</button>
        </div>
      )}

      {/* STEP 4 (Placeholder for now) */}
      {step === 4 && (
        <div>
          <h2>Tech Stack (Coming Next)</h2>
          <p>We will add checkboxes here next 🚀</p>

          <button onClick={prevStep}>Back</button>
          <button onClick={nextStep}>Next</button>
        </div>
      )}

      {/* STEP 5 */}
      {step === 5 && (
        <div>
          <h2>Additional Settings</h2>
          <p>Themes, trophies, visitors, quotes...</p>

          <button onClick={prevStep}>Back</button>
          <button onClick={nextStep}>Next</button>
        </div>
      )}

      {/* STEP 6 */}
      {step === 6 && (
        <div>
          <h2>🎉 Your Awesome Profile is ready!</h2>

          <button>Copy Code 📋</button>
          <button>Download Markdown ⬇</button>
          <button onClick={() => setStep(1)}>Create New</button>
        </div>
      )}
    </div>
  );
}