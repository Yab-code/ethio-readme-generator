"use client";

import { useDeferredValue, useEffect, useState } from "react";
import TechBackground from "@/components/TechBackground";
import { themes } from "@/lib/themes";
import CountrySelector from "@/components/CountrySelector";
import Banner from "@/components/Banner";

type ToggleProps = {
  label: string;
  value: boolean;
  onChange: () => void;
};

type SocialLinkCardProps = {
  label: string;
  placeholder: string;
  hint: string;
  icon: React.ReactNode;
};

type TechCategory = {
  title: string;
  items: string[];
};

type Step = 1 | 2 | 3 | 4 | 5 | 6;

type AboutForm = {
  fullName: string;
  role: string;
  bio: string;
};

function Toggle({ label, value, onChange }: ToggleProps) {
  return (
    <div className="flex items-center justify-between rounded-xl border border-white/10 bg-black/30 p-4">
      <span className="text-base font-medium leading-none sm:text-lg">
        {label}
      </span>
      <button
        onClick={onChange}
        className={`flex h-6 w-12 items-center rounded-full p-1 transition ${
          value ? "bg-cyan-500" : "bg-gray-600"
        }`}
      >
        <div
          className={`h-4 w-4 rounded-full bg-white shadow-md transition-transform ${
            value ? "translate-x-6" : ""
          }`}
        />
      </button>
    </div>
  );
}

function SocialLinkCard({
  label,
  placeholder,
  hint,
  icon,
}: SocialLinkCardProps) {
  return (
    <label className="group flex min-h-40 flex-col rounded-[28px] border border-white/10 bg-white/[0.045] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/35 hover:bg-white/[0.08] hover:shadow-[0_20px_50px_rgba(8,47,73,0.22)]">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-slate-950/70 text-cyan-300 transition-colors duration-300 group-hover:border-cyan-300/30 group-hover:text-white">
            {icon}
          </div>
          <div>
            <div className="text-lg font-semibold leading-none text-white">
              {label}
            </div>
            <div className="mt-2 text-sm leading-snug text-slate-400">
              {hint}
            </div>
          </div>
        </div>

        <div className="rounded-full border border-white/10 px-2.5 py-1 text-xs uppercase tracking-[0.24em] text-slate-500 transition-colors duration-300 group-hover:border-cyan-300/20 group-hover:text-cyan-100/70">
          Link
        </div>
      </div>

      <div className="mt-5">
          <input
            placeholder={placeholder}
            className="social-input w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3.5 text-base text-white outline-none transition-all duration-300 placeholder:text-slate-500"
          />
      </div>
    </label>
  );
}

export default function Home() {
  const [step, setStep] = useState<Step>(1);
  const [username, setUsername] = useState("");
  const [country, setCountry] = useState<keyof typeof themes>("Ethiopia");
  const currentTheme = themes[country];
  const [hasScrolled, setHasScrolled] = useState(false);
  const [techSearch, setTechSearch] = useState("");
  const [activeTechCategory, setActiveTechCategory] = useState("All");
  const [showSelectedOnly, setShowSelectedOnly] = useState(false);
  const [about, setAbout] = useState<AboutForm>({
    fullName: "",
    role: "",
    bio: "",
  });
  const [githubStats, setGithubStats] = useState({
    theme: "dark",
    border: true,
    commits: true,
    privateCommits: false,
  });
  const [selectedTech, setSelectedTech] = useState<string[]>([]);
  const deferredTechSearch = useDeferredValue(techSearch);
  const toggleTech = (tech: string) => {
    setSelectedTech((prev) =>
      prev.includes(tech)
        ? prev.filter((t) => t !== tech)
        : [...prev, tech]
    );
  };
  useEffect(() => {
    const onScroll = () => {
      setHasScrolled(window.scrollY > 16);
    };

    onScroll();
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const stepTitles = {
    1: "Identity",
    2: "About",
    3: "Stats",
    4: "Socials",
    5: "Stack",
    6: "Export",
  } as const;
  const techCategories: TechCategory[] = [
    {
      title: "Languages",
      items: [
        "Apache Groovy", "Assembly Script", "C", "C#", "C++", "Clojure", "Crystal", "CSS3", "Dart", "Dgraph", "Elixir", "Elm", "Erlang", "Fortran", "Go/Golang", "GraphQL", "Haskell", "HTML5", "Java", "JavaScript", "Julia", "Kotlin", "LaTeX", "Lua", "Markdown", "Nim", "Nix", "Objective-C", "OCaml", "Octave", "Org Mode", "Perl", "PHP", "PowerShell", "Python", "R", "ReScript", "Ruby", "Rust", "Scala", "Bash Script", "Solidity", "Swift", "TypeScript", "Windows Terminal", "Zig",
      ],
    },
    {
      title: "Hosting/SaaS",
      items: [
        "Alibaba Cloud", "AWS", "Azure", "Cloudflare", "Codeberg", "Datadog", "DigitalOcean", "Firebase", "Glitch", "Google Cloud", "Heroku", "Linode", "Netlify", "Oracle", "OpenStack", "OVH", "Render", "Scaleway", "Vercel", "Vultr",
      ],
    },
    {
      title: "Frameworks, Platforms & Libraries",
      items: [
        ".NET", "AdonisJS", "Alpine.js", "Anaconda", "Angular", "Angular.js", "Ant Design", "Apache Spark", "Apache Kafka", "Apache Hadoop", "Apache Hive", "Apollo GraphQL", "Astro", "Aurelia", "Blazor", "Bootstrap", "Buefy", "Bulma", "Bun", "Chakra UI", "Chart.js", "Code Igniter", "Context API", "CUDA", "DaisyUI", "Deno JS", "Directus", "Django", "DjangoRest", "Drupal", "EJS", "Elasticsearch", "Electron.js", "Ember", "esbuild", "Expo", "Express.js", "FastAPI", "Fastify", "Filament", "Flask", "Flutter", "Framework7", "Gatsby.js", "Grav", "Green Sock", "Gulp", "Gutenberg", "Insomnia", "Handlebars", "Ionic", "Jasmine", "JavaFX", "Jinja", "Joomla", "jQuery", "JWT/JSON Web Token", "Laravel", "Livewire", "Less", "MUI", "Meteor JS", "Mantine", "MaxCompute", "npm", "NestJS", "Next JS", "Node.js", "Nodemon", "Node-RED", "Nuxt JS", "Nx", "OpenCV", "OpenGL", "P5.js", "Phoenix Framework", "pnpm", "Pug", "Qt", "Quarkus", "Quasar", "ROS", "RabbitMQ", "Radix UI", "Rails", "Raylib", "React", "React Native", "React Query", "React Router", "React Hook Form", "Redux", "Remix", "RollupJS", "RxDB", "RxJS", "Sass", "Semantic UI React", "Snowflake", "Socket.IO", "SolidJS", "Spring", "Strapi", "Streamlit", "Styled Components", "Stylus", "Svelte", "SvelteKit", "Symfony", "TailwindCSS", "Tauri", "Three.js", "Thymeleaf", "tRPC", "TypeGraphQL", "UnoCSS", "Vite", "Vue.js", "Vuetify", "WebGL", "Webpack", "Web3.js", "WindiCSS", "WordPress", "Xamarin", "Yarn",
      ],
    },
    {
      title: "Servers",
      items: [
        "Apache", "Apache Airflow", "Apache Ant", "Apache Flink", "Apache Maven", "Apache Tomcat", "Gunicorn", "Jenkins", "Nginx",
      ],
    },
    {
      title: "Databases / ORM",
      items: [
        "Amazon DynamoDB", "Appwrite", "ArangoDB", "Cassandra", "Cockroach Labs", "Couchbase", "CrateDB", "Firebase", "InfluxDB", "MariaDB", "MusicBrainz", "Microsoft SQL Server", "MongoDB", "MySQL", "Neo4j", "PlanetScale", "PocketBase", "Postgres", "Realm", "Redis", "SingleStore", "SQLite", "Supabase", "SurrealDB", "Teradata", "Hibernate", "Prisma", "Sequelize", "Quill",
      ],
    },
    {
      title: "Design",
      items: [
        "Adobe", "Adobe Acrobat Reader", "Adobe After Effects", "Adobe Audition", "Adobe Creative Cloud", "Adobe Dreamweaver", "Adobe Fonts", "Adobe Illustrator", "Adobe InDesign", "Adobe Lightroom", "Adobe Lightroom Classic", "Adobe Photoshop", "Adobe Premiere Pro", "Adobe XD", "Aseprite", "Affinity Designer", "Affinity Photo", "Blender", "Canva", "Clip Studio Paint", "Dribbble", "Figma", "Framer", "GIMP", "Inkscape", "InVision", "Krita", "Proto.io", "Rhinoceros", "Sketch", "Sketch Up", "Storybook",
      ],
    },
    {
      title: "ML/DL",
      items: [
        "Keras", "Matplotlib", "MLflow", "NumPy", "Pandas", "Plotly", "PyTorch", "scikit-learn", "SciPy", "TensorFlow",
      ],
    },
    {
      title: "CI/CD VCS",
      items: [
        "CircleCI", "ChipCercI", "CloudBees", "Fastlane", "GitLab CI", "GitHub Actions", "TeamCity", "Travis CI", "Octopus Deploy", "Apache Subversion", "Bitbucket", "Forgejo", "Git", "Gitea", "Gitee", "GitHub", "GitLab", "Gitpod", "Mercurial", "Perforce Helix",
      ],
    },
    {
      title: "Testing",
      items: [
        "Cypress", "Jasmine", "Jest", "Mocha", "Playwright", "Puppeteer", "Selenium", "Sentry", "Testing Library", "Vitest",
      ],
    },
    {
      title: "Other",
      items: [
        "Airbnb", "Alfred", "Ansible", "Aqua Sec", "Arduino", "Babel", "Bitwarden", "Cisco", "CMake", "Codecov", "Confluence", "Crowdin", "Docker", "ESLint", "Elasticsearch", "FFmpeg", "Gradle", "Grafana", "Home Assistant", "Homebridge", "Jellyfin", "Jira", "Kubernetes", "Meta", "Mosquitto", "Notion", "OpenAPI Specification", "OpenSea", "OpenTelemetry", "Packer", "Pi-hole", "PlatformIO", "Plex", "Portfolio", "Postman", "Power BI", "Prettier", "Prezi", "Prometheus", "Rancher", "Raspberry Pi", "SonarLint", "SonarQube", "Splunk", "Swagger", "Tampermonkey", "Tor", "Terraform", "Trello", "Twilio", "Uber", "Ubiquiti", "Vagrant", "WireGuard", "XFCE", "Zigbee", "AMD", "Analogue", "Battle.net", "Bevy", "EA", "Epic Games", "Godot Engine", "Humble Bundle", "Itch.io", "NVIDIA", "OpenGL", "PlayStation Network", "Riot Games", "SideQuest", "Square Enix", "Steam", "Ubisoft", "Unity", "Unreal Engine", "Xbox",
      ],
    },
  ];
  const techCategoryFilters = ["All", ...techCategories.map((category) => category.title)];
  const normalizedTechSearch = deferredTechSearch.trim().toLowerCase();
  const filteredTechCategories = techCategories
    .filter(
      (category) =>
        activeTechCategory === "All" || category.title === activeTechCategory
    )
    .map((category) => ({
      ...category,
      items: category.items.filter((item) => {
        const matchesSearch =
          normalizedTechSearch.length === 0 ||
          item.toLowerCase().includes(normalizedTechSearch);
        const matchesSelected = !showSelectedOnly || selectedTech.includes(item);

        return matchesSearch && matchesSelected;
      }),
    }))
    .filter((category) => category.items.length > 0);
  const visibleTechCount = filteredTechCategories.reduce(
    (count, category) => count + category.items.length,
    0
  );
  const socialLinks = [
    {
      label: "Bluesky",
      placeholder: "@yourname.bsky.social",
      hint: "Use your public handle for a clean identity link.",
      icon: (
        <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
          <path d="M12 11.54c-1.44-2.82-5.36-7.15-8.43-9.34-.74-.53-1.95-.94-1.95.43 0 .27.16 2.3.26 2.62.37 1.09 1.71 1.46 2.9 1.58 2.02.21 3.82-.52 5.66-1.77-.76.67-1.6 1.24-2.48 1.7-2.69 1.4-5.73 1.73-2.84 5.05 3.17 3.52 4.55-.76 5.26-2.89.13-.41.2-.6.32-.6s.19.19.32.6c.71 2.13 2.09 6.41 5.26 2.89 2.89-3.32-.15-3.65-2.84-5.05a10.75 10.75 0 0 1-2.48-1.7c1.84 1.25 3.64 1.98 5.66 1.77 1.19-.12 2.53-.49 2.9-1.58.1-.32.26-2.35.26-2.62 0-1.37-1.21-.96-1.95-.43-3.07 2.19-6.99 6.52-8.43 9.34Z" />
        </svg>
      ),
    },
    {
      label: "Discord",
      placeholder: "discord.gg/yourserver",
      hint: "Add your invite or username if collaboration happens there.",
      icon: (
        <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
          <path d="M19.54 5.34A16.6 16.6 0 0 0 15.5 4l-.2.41a14.3 14.3 0 0 1 3.8 1.86 12.8 12.8 0 0 0-4.56-1.44 15.8 15.8 0 0 0-5.08 0A12.8 12.8 0 0 0 4.9 6.27a14.3 14.3 0 0 1 3.8-1.86L8.5 4a16.6 16.6 0 0 0-4.04 1.34C1.8 9.22 1.1 12.97 1.46 16.66A16.74 16.74 0 0 0 6.4 19.2l1.2-1.67c-.66-.25-1.3-.58-1.88-.97.16.12.33.23.5.34a11.58 11.58 0 0 0 11.56 0c.17-.11.34-.22.5-.34-.58.39-1.22.72-1.88.97l1.2 1.67a16.74 16.74 0 0 0 4.94-2.54c.42-4.28-.71-8-3-11.32ZM9.38 14.38c-.92 0-1.67-.86-1.67-1.92 0-1.06.74-1.92 1.67-1.92.93 0 1.68.86 1.67 1.92 0 1.06-.74 1.92-1.67 1.92Zm5.24 0c-.92 0-1.67-.86-1.67-1.92 0-1.06.74-1.92 1.67-1.92.93 0 1.68.86 1.67 1.92 0 1.06-.74 1.92-1.67 1.92Z" />
        </svg>
      ),
    },
    {
      label: "Instagram",
      placeholder: "instagram.com/yourname",
      hint: "Great for visual work, community building, or product storytelling.",
      icon: (
        <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
          <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2.2A2.8 2.8 0 0 0 4.2 7v10A2.8 2.8 0 0 0 7 19.8h10a2.8 2.8 0 0 0 2.8-2.8V7A2.8 2.8 0 0 0 17 4.2H7Zm10.35 1.65a1.15 1.15 0 1 1 0 2.3 1.15 1.15 0 0 1 0-2.3ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2.2A2.8 2.8 0 1 0 12 14.8 2.8 2.8 0 0 0 12 9.2Z" />
        </svg>
      ),
    },
    {
      label: "Medium",
      placeholder: "medium.com/@yourname",
      hint: "Useful if you publish technical writing or product essays.",
      icon: (
        <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
          <path d="M4 7.5a1 1 0 0 0-.31-.76L2 4.79V4.5h5.43l4.2 9.2 3.7-9.2H20v.29l-1.46 1.4a.43.43 0 0 0-.17.41v10.8a.43.43 0 0 0 .17.41l1.43 1.4v.29h-7.2v-.29l1.49-1.44c.15-.15.15-.19.15-.41V8.92l-4.14 10.53h-.56L4.9 8.92v7.1c-.04.3.05.6.25.82l1.94 2.35v.29H1.6v-.29l1.94-2.35c.2-.22.28-.52.22-.82V7.5Z" />
        </svg>
      ),
    },
    {
      label: "LinkedIn",
      placeholder: "linkedin.com/in/yourname",
      hint: "Best for professional credibility and recruiter-friendly discovery.",
      icon: (
        <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
          <path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3A1.97 1.97 0 1 0 5.3 6.94 1.97 1.97 0 0 0 5.25 3ZM20.44 12.77c0-3.42-1.82-5.01-4.25-5.01a3.68 3.68 0 0 0-3.32 1.83V8.5H9.5c.04.72 0 11.5 0 11.5h3.37v-6.42c0-.34.02-.69.13-.93.27-.69.88-1.4 1.91-1.4 1.35 0 1.9 1.03 1.9 2.55V20h3.37v-7.23Z" />
        </svg>
      ),
    },
    {
      label: "YouTube",
      placeholder: "youtube.com/@yourchannel",
      hint: "Ideal for demos, talks, tutorials, and longer-form walkthroughs.",
      icon: (
        <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
          <path d="M21.58 7.19a2.85 2.85 0 0 0-2-2C17.8 4.7 12 4.7 12 4.7s-5.8 0-7.58.49a2.85 2.85 0 0 0-2 2A29.8 29.8 0 0 0 2 12a29.8 29.8 0 0 0 .42 4.81 2.85 2.85 0 0 0 2 2c1.78.49 7.58.49 7.58.49s5.8 0 7.58-.49a2.85 2.85 0 0 0 2-2A29.8 29.8 0 0 0 22 12a29.8 29.8 0 0 0-.42-4.81ZM9.68 15.05V8.95L15.5 12l-5.82 3.05Z" />
        </svg>
      ),
    },
    {
      label: "X",
      placeholder: "x.com/yourname",
      hint: "Handy for fast updates, launches, and industry conversations.",
      icon: (
        <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
          <path d="M18.9 2H22l-6.76 7.73L23.2 22h-6.24l-4.88-7.38L5.63 22H2.5l7.22-8.25L1.9 2h6.4l4.4 6.7L18.9 2Zm-1.1 18h1.73L7.36 3.9H5.5L17.8 20Z" />
        </svg>
      ),
    },
    {
      label: "Email",
      placeholder: "you@example.com",
      hint: "Keep one direct contact option for people who want to reach out fast.",
      icon: (
        <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
          <path d="M3 5.5A2.5 2.5 0 0 1 5.5 3h13A2.5 2.5 0 0 1 21 5.5v13a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 18.5v-13Zm2 1.06V7l7 4.9L19 7v-.44a.5.5 0 0 0-.5-.5h-13a.5.5 0 0 0-.5.5Zm14 2.88-6.43 4.5a1 1 0 0 1-1.14 0L5 9.44v9.06c0 .28.22.5.5.5h13a.5.5 0 0 0 .5-.5V9.44Z" />
        </svg>
      ),
    },
  ] as const;

  const generateMarkdown = () => {
    const techBadges = selectedTech
      .map((tech) => {
        const badgeLabel = encodeURIComponent(tech);
        const logoLabel = tech
          .toLowerCase()
          .replace(/\./g, "")
          .replace(/\s+/g, "-")
          .replace(/\//g, "-");

        return `![${tech}](https://img.shields.io/badge/${badgeLabel}-black?style=for-the-badge&logo=${logoLabel})`;
      })
      .join(" ");

    const c0 = currentTheme.colors[0].replace("#", "");
    const c50 = (currentTheme.colors[Math.floor(currentTheme.colors.length / 2)] || c0).replace("#", "");
    const c100 = (currentTheme.colors[currentTheme.colors.length - 1] || c50).replace("#", "");
    const gradientString = `0:${c0},50:${c50},100:${c100}`;
    const encodedGreeting = encodeURIComponent(currentTheme.greeting);

    return `<img src="https://capsule-render.vercel.app/api?type=waving&color=${gradientString}&height=200&section=header&text=👋 ${encodedGreeting} | Hello%20&fontSize=40&fontColor=ffffff" />

# 👋 ${currentTheme.greeting} | Hello

◇ ◆ ◇ ◆ ◇ ◆ ◇ ◆

![Made in ${currentTheme.name}](https://img.shields.io/badge/Made%20in-${currentTheme.name}-${c0}?style=for-the-badge)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## 🚀 About Me
- Username: ${username || "your-github-username"}
- Full Name: ${about.fullName || "Your Name"}
- Role: ${about.role || "Your Role"}
${about.bio || "Write a short bio in step 2."}

${currentTheme.banner}

## 📊 GitHub Stats
![Stats](https://github-readme-stats.vercel.app/api?username=${
    username || "your-github-username"
  }&theme=${githubStats.theme}&show_icons=true)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## 🛠 Tech Stack
${techBadges || "_Choose your stack in step 5 to add badges here._"}

◇ ◆ ◇ ◆ ◇ ◆ ◇ ◆

<img src="https://capsule-render.vercel.app/api?type=waving&color=${gradientString}&height=120&section=footer" />`;
  };


  const handleCopyMarkdown = async () => {
    await navigator.clipboard.writeText(generateMarkdown());
    alert("Copied!");
  };

  const handleDownloadMarkdown = () => {
    const blob = new Blob([generateMarkdown()], {
      type: "text/markdown",
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");

    link.href = url;
    link.download = "README.md";
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <main className="relative min-h-dvh overflow-x-hidden text-white">
      {/* Animated background */}
      <TechBackground />

      <div className="relative z-10 flex min-h-dvh flex-col bg-[linear-gradient(180deg,rgba(2,6,23,0.12),rgba(2,6,23,0.82))]">
        {/* Top message bar */}
        <div className="w-full border-b border-white/10 bg-black/20 px-4 py-3 text-center text-sm leading-snug text-slate-300 backdrop-blur-xl sm:text-base">
          &quot;Make your GitHub professional.&quot;
        </div>

        {/* Sticky navbar */}
        <div
          className={`sticky top-0 z-30 flex w-full flex-wrap items-center justify-between gap-3 border-b px-4 py-4 transition-all duration-300 sm:px-6 lg:px-8 ${
            hasScrolled
              ? "border-cyan-400/20 bg-slate-950/75 shadow-[0_18px_50px_rgba(2,6,23,0.45)] backdrop-blur-2xl"
              : "border-white/10 bg-slate-950/35 backdrop-blur-md"
          }`}
        >
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-400/30 bg-cyan-400/10 shadow-[0_0_30px_rgba(34,211,238,0.16)]">
              <div className="grid grid-cols-2 gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
                <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-500" />
                <span className="h-1.5 w-1.5 rounded-full bg-white" />
              </div>
            </div>

            <div>
              <div className="text-xl font-bold leading-none tracking-wide text-cyan-400 sm:text-2xl">
                Git Builder
              </div>
              <div className="mt-1 text-xs uppercase tracking-[0.28em] text-cyan-100/55">
                README Studio
              </div>
            </div>
          </div>

          <div className="w-full text-left text-sm leading-none text-gray-400 sm:w-auto sm:text-right sm:text-base">
            {stepTitles[step]} / Step {step}
          </div>
        </div>

        {/* Global back button */}
        <div className="px-4 pt-4 sm:px-6 lg:px-8">
          <button
            onClick={() =>
              setStep((current) => (current > 1 ? ((current - 1) as Step) : 1))
            }
            disabled={step === 1}
            className="inline-flex rounded-full border border-white/12 bg-slate-950/75 px-4 py-3 text-sm font-semibold leading-none text-white shadow-[0_16px_40px_rgba(2,6,23,0.35)] backdrop-blur-xl transition-all duration-300 hover:border-cyan-300/35 hover:text-cyan-200 disabled:cursor-not-allowed disabled:opacity-45"
          >
            Back
          </button>
        </div>

        {/* Step 1: identity */}
        {step === 1 && (
          <section className="flex flex-1 flex-col-reverse items-center justify-center gap-10 px-4 py-10 sm:px-6 md:flex-row md:justify-between md:px-10 md:py-16">
            <div className="w-full max-w-xl space-y-6 text-center md:space-y-8 md:text-left">
              <h1 className="text-4xl font-bold leading-tight sm:text-5xl md:text-6xl lg:text-7xl">
                Build Your <br />
                <span className="text-cyan-400">Developer Profile</span>
              </h1>

              <Banner text={currentTheme.slogan} colors={currentTheme.colors} />
              
              <div className="space-y-6">
                <input
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter GitHub username"
                  className="field-input w-full border-none bg-slate-950/65 text-base sm:text-xl"
                />

                <div className="pt-2 sm:text-left text-center">
                  <div className="mb-4 text-sm font-medium uppercase tracking-[0.18em] text-cyan-400">
                    Select Your Country Theme
                  </div>
                  <CountrySelector 
                    selected={country} 
                    onChange={(value) => setCountry(value as Extract<keyof typeof themes, string>)} 
                  />
                </div>
              </div>

              <button
                onClick={() => setStep(2)}
                className="primary-button w-full justify-center sm:w-auto"
              >
                Start
              </button>
            </div>

            <div className="relative hidden h-[220px] w-full max-w-[280px] shrink-0 sm:h-[280px] sm:max-w-[320px] md:block md:h-[340px] md:max-w-[340px]">
              <div className="absolute inset-0 rounded-full bg-cyan-500/20 blur-3xl" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/programming.svg"
                alt="Developer illustration"
                className="relative h-full w-full object-contain drop-shadow-[0_24px_80px_rgba(34,211,238,0.18)]"
              />
            </div>
          </section>
        )}

        {/* Step 2: about form */}
        {step === 2 && (
          <section className="flex flex-1 flex-col items-center justify-center gap-8 px-4 py-10 sm:px-6 md:flex-row md:gap-12 md:px-10 md:py-12">
            <div className="relative h-52 w-52 shrink-0 sm:h-64 sm:w-64 md:h-[300px] md:w-[300px]">
              <div className="absolute inset-0 rounded-full bg-cyan-500/20 blur-3xl" />
              {/* Using a plain img here avoids extra remote image config for this external asset. */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/github.svg"
                alt="Programming illustration"
                className="relative h-full w-full"
              />
            </div>

            <div className="w-full max-w-2xl space-y-6">
              <h2 className="text-3xl font-bold leading-none text-cyan-400 sm:text-4xl">
                About You
              </h2>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <input
                  placeholder="Full Name"
                  className="input"
                  value={about.fullName}
                  onChange={(e) =>
                    setAbout({ ...about, fullName: e.target.value })
                  }
                />
                <input
                  placeholder="Role"
                  className="input"
                  value={about.role}
                  onChange={(e) => setAbout({ ...about, role: e.target.value })}
                />
              </div>

              <textarea
                placeholder="Short Bio"
                className="input h-32 w-full"
                value={about.bio}
                onChange={(e) => setAbout({ ...about, bio: e.target.value })}
              />

              <div className="flex justify-end">
                <button
                  onClick={() => setStep(3)}
                  className="primary-button w-full justify-center sm:w-auto"
                >
                  Next
                </button>
              </div>
            </div>
          </section>
        )}

        {/* Step 3: stats settings */}
        {step === 3 && (
          <section className="flex flex-1 items-center justify-center px-4 py-10 sm:px-6 md:px-10">
            <div className="w-full max-w-2xl space-y-8">

              <h2 className="text-3xl font-bold leading-none text-cyan-400 sm:text-4xl">
                Flex your GitHub Stats
              </h2>

              <select
                value={githubStats.theme}
                onChange={(e) =>
                  setGithubStats({ ...githubStats, theme: e.target.value })
                }
                className="input w-full"
              >
                <option value="dark">Dark</option>
                <option value="radical">Radical</option>
                <option value="tokyonight">Tokyo Night</option>
              </select>

              <Toggle
                label="Show Border"
                value={githubStats.border}
                onChange={() =>
                  setGithubStats({
                    ...githubStats,
                    border: !githubStats.border,
                  })
                }
              />

              <Toggle
                label="Lifetime Commits"
                value={githubStats.commits}
                onChange={() =>
                  setGithubStats({
                    ...githubStats,
                    commits: !githubStats.commits,
                  })
                }
              />

              <Toggle
                label="Private Commits"
                value={githubStats.privateCommits}
                onChange={() =>
                  setGithubStats({
                    ...githubStats,
                    privateCommits: !githubStats.privateCommits,
                  })
                }
              />

              <div className="flex justify-end">
                <button
                  onClick={() => setStep(4)}
                  className="primary-button w-full justify-center sm:w-auto"
                >
                  Next
                </button>
              </div>
            </div>
          </section>
        )}

        {/* Step 4: social links */}
        {step === 4 && (
          <section className="flex flex-1 flex-col items-center justify-center px-4 py-10 sm:px-6 md:px-10">

            <div className="mt-5 w-full max-w-6xl">
              <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-3xl font-semibold leading-none text-cyan-400 sm:text-4xl">
                  Social Links
                </h2>
              </div>

              <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
                {socialLinks.map((item) => (
                  <SocialLinkCard
                    key={item.label}
                    label={item.label}
                    placeholder={item.placeholder}
                    hint={item.hint}
                    icon={item.icon}
                  />
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <button
                onClick={() => setStep(5)}
                className="primary-button w-full justify-center sm:w-auto"
              >
                Next
              </button>
            </div>
          </section>
        )}

        {/* Step 5: tech stack selector */}
        {step === 5 && (
          <section className="flex flex-1 flex-col items-center px-4 py-10 text-center sm:px-6">
            <div className="w-full max-w-7xl">
              <div className="mx-auto max-w-3xl">
                <h2 className="text-3xl leading-none text-cyan-400 sm:text-4xl">
                  Tech Stack
                </h2>
                <p className="mt-4 text-base leading-relaxed text-slate-400">
                  Choose the tools you actually use. Each category below is a
                  modern checklist made of selectable buttons, so building your
                  stack stays fast and visual.
                </p>
                <div className="mt-4 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-100">
                  {selectedTech.length} selected
                </div>
              </div>

              <div className="mt-8 rounded-[28px] border border-white/10 bg-white/[0.045] p-5 text-left backdrop-blur-xl">
                <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
                  <label className="block">
                    <span className="mb-2 block text-sm font-medium uppercase tracking-[0.18em] text-slate-400">
                      Search tech
                    </span>
                    <input
                      type="text"
                      value={techSearch}
                      onChange={(e) => setTechSearch(e.target.value)}
                      placeholder="Search React, Docker, Prisma..."
                      className="input w-full"
                    />
                  </label>

                  <button
                    type="button"
                    onClick={() => setShowSelectedOnly((prev) => !prev)}
                    className={`inline-flex min-h-12 items-center justify-center rounded-full border px-4 py-3 text-sm font-semibold transition-all duration-300 ${
                      showSelectedOnly
                        ? "border-cyan-300/40 bg-cyan-400 text-slate-950 shadow-[0_12px_30px_rgba(34,211,238,0.22)]"
                        : "border-white/10 bg-slate-950/65 text-slate-200 hover:border-cyan-300/25 hover:text-white"
                    }`}
                  >
                    {showSelectedOnly ? "Showing selected only" : "Show selected only"}
                  </button>
                </div>

                <div className="mt-5 flex flex-wrap gap-3">
                  {techCategoryFilters.map((category) => {
                    const isActive = activeTechCategory === category;

                    return (
                      <button
                        key={category}
                        type="button"
                        onClick={() => setActiveTechCategory(category)}
                        className={`rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300 ${
                          isActive
                            ? "border-cyan-300/40 bg-cyan-400 text-slate-950 shadow-[0_12px_30px_rgba(34,211,238,0.22)]"
                            : "border-white/10 bg-slate-950/65 text-slate-300 hover:border-cyan-300/25 hover:text-white"
                        }`}
                      >
                        {category}
                      </button>
                    );
                  })}
                </div>

                <div className="mt-5 flex flex-wrap items-center justify-between gap-3 text-sm text-slate-400">
                  <span>
                    {visibleTechCount} result{visibleTechCount === 1 ? "" : "s"} across{" "}
                    {filteredTechCategories.length} categor
                    {filteredTechCategories.length === 1 ? "y" : "ies"}
                  </span>
                  {(techSearch || activeTechCategory !== "All" || showSelectedOnly) && (
                    <button
                      type="button"
                      onClick={() => {
                        setTechSearch("");
                        setActiveTechCategory("All");
                        setShowSelectedOnly(false);
                      }}
                      className="text-sm font-medium text-cyan-200 transition-colors duration-300 hover:text-white"
                    >
                      Reset filters
                    </button>
                  )}
                </div>
              </div>

              <div className="mt-8 space-y-8 text-left">
                {filteredTechCategories.map((category) => (
                  <div
                    key={category.title}
                    className="rounded-[28px] border border-white/10 bg-white/[0.045] p-5 backdrop-blur-xl"
                  >
                    <div className="mb-4 flex items-center justify-between gap-4">
                      <h3 className="text-xl font-semibold leading-none text-white">
                        {category.title}
                      </h3>
                      <div className="text-sm text-slate-500">
                        {category.items.length} items
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      {category.items.map((item) => {
                        const isSelected = selectedTech.includes(item);

                        return (
                          <button
                            key={item}
                            type="button"
                            onClick={() => toggleTech(item)}
                            className={`rounded-full border px-3 py-2 text-xs font-medium leading-tight transition-all duration-300 sm:px-4 sm:py-2.5 sm:text-sm ${
                              isSelected
                                ? "border-cyan-300/40 bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 shadow-[0_12px_30px_rgba(34,211,238,0.22)]"
                                : "border-white/10 bg-slate-950/65 text-slate-300 hover:-translate-y-0.5 hover:border-cyan-300/25 hover:text-white"
                            }`}
                          >
                            {item}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}

                {filteredTechCategories.length === 0 && (
                  <div className="rounded-[28px] border border-dashed border-white/10 bg-slate-950/40 p-8 text-center text-slate-400">
                    No tech matches this filter yet. Try another search or reset the filters.
                  </div>
                )}
              </div>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <button
                onClick={() => setStep(6)}
                className="primary-button w-full justify-center sm:w-auto"
              >
                Next
              </button>
            </div>
          </section>
        )}

        {/* Step 6: markdown output */}
        {step === 6 && (
          <section className="flex flex-1 flex-col items-center justify-center px-4 py-10 sm:px-6">
            <div className="w-full max-w-5xl space-y-8 text-center">
              <div>
                <h2 className="text-3xl font-bold text-green-400 sm:text-4xl">
                  Your Awesome Profile is Ready!
                </h2>
                <p className="mt-4 text-base text-slate-400">
                  Generate, preview, copy, or download your README markdown.
                </p>
              </div>

              <div className="rounded-[28px] border border-white/10 bg-black/35 p-4 backdrop-blur-xl">
                <div className="mb-3 flex items-center justify-between text-sm uppercase tracking-[0.2em] text-cyan-100/65">
                  <span>Preview</span>
                  <span>README.md</span>
                </div>

                <textarea
                  readOnly
                  value={generateMarkdown()}
                  className="h-72 w-full rounded-2xl border border-white/10 bg-black/50 p-4 font-mono text-xs leading-relaxed text-slate-100 outline-none sm:text-sm"
                />
              </div>

              <div className="flex flex-wrap justify-center gap-4">
                <button
                  onClick={handleCopyMarkdown}
                  className="primary-button w-full justify-center sm:w-auto"
                >
                  Copy Code
                </button>

                <button
                  onClick={handleDownloadMarkdown}
                  className="ghost-button w-full justify-center border-emerald-300/20 bg-emerald-400/10 text-emerald-100 hover:border-emerald-300/35 hover:bg-emerald-400/16 hover:text-white sm:w-auto"
                >
                  Download Markdown
                </button>

                <button
                  onClick={() => setStep(1)}
                  className="ghost-button w-full justify-center sm:w-auto"
                >
                  Create New
                </button>
              </div>
            </div>
          </section>
        )}

        {/* Footer */}
        <div className="mt-auto flex w-full flex-col items-start justify-between gap-2 border-t border-white/10 px-4 py-4 text-sm leading-none text-gray-400 backdrop-blur-md sm:flex-row sm:items-center sm:gap-4 sm:px-6 sm:text-base lg:px-8">
          <div>(c) {new Date().getFullYear()} Git Builder</div>
          <div>{stepTitles[step]}</div>
        </div>
      </div>

    </main>
  );
}
