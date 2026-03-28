export type TechCategory = {
  title: string;
  items: string[];
};

export const TECH_CATEGORIES: TechCategory[] = [
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
