import React from "react";
import "./index.css";
import {
  FaGithub,
  FaLinkedin,
  FaRobot,
  FaBrain,
  FaShieldAlt,
  FaCode,
} from "react-icons/fa";
import {
  SiOpenai,
  SiKubernetes,
  SiAmazonaws,
  SiDocker,
  SiGrafana,
  SiTerraform,
  SiGithubactions,
  SiHasura,
  SiPostgresql,
  SiLinux,
  SiVmware,
} from "react-icons/si";

function App() {
  return (
    <main className="min-h-screen bg-black text-white font-sans px-4 py-10">
      <div className="max-w-3xl w-full mx-auto">

        {/* Profile Section */}
        <section className="mb-12 flex flex-col items-center text-center">
          <img
            src="/profile.jpg"
            alt="Ikmal Shafiq"
            className="w-32 h-32 sm:w-40 sm:h-40 rounded-full mb-4 border-4 border-indigo-500 shadow-lg hover:shadow-indigo-500/50 transition-all duration-300 object-cover"
          />
          <h2 className="text-2xl font-semibold mb-1">Ikmal Shafiq</h2>
          <p className="text-gray-400 mb-2">DevOps Consultant</p>

          {/* Social Links */}
          <div className="flex justify-center space-x-4 mb-4">
            <a
              href="https://linkedin.com/in/ikmal-shafiq-107666257"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://github.com/maltrbl"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <FaGithub size={24} />
            </a>
          </div>

          <p className="text-gray-300 max-w-xl text-sm sm:text-base px-2">
            I’m currently working as a DevOps and AI Consultant at{" "}
            <span className="text-red-500 font-medium">Virtuosity Solutions</span>, building intelligent agents,
            designing prompts, and integrating AI into enterprise systems.
          </p>
        </section>

        {/* Projects */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-indigo-300 text-center sm:text-left">Projects</h2>
          <div className="text-left text-gray-300 space-y-6">
            <div className="hover:scale-[1.02] transition transform duration-300 ease-in-out">
              <strong className="flex items-center gap-2">
                <FaRobot className="text-purple-400" /> Leave Management Agent (Coming Soon)
              </strong>
              <p className="text-sm mt-1 text-gray-400">
                • Automates leave requests, approvals, and record tracking using a streamlined workflow.<br />
                • Tools used: Kubernetes, Docker, n8n, Streamlit.
              </p>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-indigo-300 mb-4 text-center sm:text-left">Experience</h2>
          <div className="text-left text-gray-300 space-y-6 max-w-xl text-sm sm:text-base">
          {[
              {
                title: "Associate DevOps & AI Consultant",
                company: "Virtuosity Solutions Sdn. Bhd.",
                time: "Oct 2024 – Present · Shah Alam, Hybrid",
                desc: [
                  "Building enterprise-ready AI agents and automation workflows using Large Language Models (LLMs).",
                  "Designing and refining prompt engineering strategies for client-specific use cases.",
                  "Automating infrastructure using Ansible, Kafka, and container-based solutions.",
                  "Supporting hybrid cloud environments and DevOps pipelines using tools like GitHub Actions, Jenkins, and Kubernetes."
                ]
              },
              {
                title: "Associate Cyber Security Engineer",
                company: "ABYRES HOLDINGS SDN BHD",
                time: "Oct 2023 – Sep 2024 · Malaysia",
                desc: [
                  "Participated in CMERP, threat detection, and incident response.",
                  "Managed ELK stack, OpenVAS, oVirt, and Zmanda backups.",
                  "Conducted CVAS, OS patching, and security support."
                ]
              }
            ].map((job, index) => (
              <div
                key={index}
                className="hover:scale-[1.02] transition-transform duration-300 ease-in-out px-2 py-2 rounded-md"
              >
                <strong>{job.title}</strong><br />
                <span className="text-white">{job.company}</span><br />
                <span className="text-sm text-gray-500">{job.time}</span>
                {job.desc.length > 0 && (
                  <ul className="list-disc list-inside mt-2 text-sm text-gray-400">
                    {job.desc.map((line, i) => (
                      <li key={i}>{line}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-indigo-300 mb-4 text-center sm:text-left">Skills</h2>
          <div className="text-left text-gray-300 space-y-6 max-w-xl text-sm sm:text-base">
          {[
              [<FaBrain className="text-purple-400" />, "Large Language Models (LLM)"],
              [<FaBrain className="text-purple-400" />, "Generative AI"],
              [<FaCode className="text-purple-400" />, "Prompt Engineering & Prompt Design"],
              [<SiKubernetes className="text-purple-400" />, "Kubernetes, GKE"],
              [<SiDocker className="text-purple-400" />, "Docker, Kafka"],
              [<><SiTerraform className="text-purple-400" /> Terraform, <SiGithubactions className="text-purple-400" /> GitHub Actions</>],
              [<SiHasura className="text-purple-400" />, "Hasura, PostgreSQL"],
              [<SiAmazonaws className="text-purple-400" />, "Cloud Computing (AWS)"],
              [<FaShieldAlt className="text-purple-400" />, "Vulnerability Assessment, Cybersecurity"],
              [<SiGrafana className="text-purple-400" />, "ELK Stack, Grafana, oVirt"],
              [<><SiLinux className="text-purple-400" /> Linux, <SiVmware className="text-purple-400" /> VMware, IT Operations</>],
            ].map(([icon, text], index) => (
              <div
                key={index}
                className="flex items-start gap-3 hover:scale-[1.02] hover:text-indigo-300 transition-transform duration-200 ease-in-out cursor-default px-2 py-1 rounded-md"
              >
                {icon}
                <span className="break-words">{text}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

export default App;
