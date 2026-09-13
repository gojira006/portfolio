// ============================================================
// EDIT THIS FILE to put in your real info. Nothing else in the
// project needs to change for basic content updates.
// ============================================================

export const profile = {
  name: "Ricardo Jose G. Vicente",
  role: "Computer Engineer",
  tagline:
    "I build things that work — from computer vision on embedded hardware to web apps and reliable day-to-day support.",
  location: "Iligan City, Philippines",
  email: "ricardovicente183@gmail.com",
  github: "https://github.com/gojira006",
  linkedin: "https://www.linkedin.com/in/ricardo-jose-vicente-6254a6418/",
  resumeUrl: "/resume.pdf", // drop a resume.pdf into the /public folder
  photo: "/profile.jpg",
};

export const stats = [
  { label: "Years hands-on", value: "3+" },
  { label: "Deployed on-device models", value: "6" },
  { label: "Also open to", value: "Web development · Virtual Assistant work" },
];

export const focusAreas = [
  {
    title: "Machine Learning / Computer Vision",
    description:
      "Training and deploying vision models on real hardware, including resource-constrained edge devices like Jetson Nano.",
    tools: ["PyTorch", "OpenCV", "TensorRT", "Jetson Nano"],
  },
  {
    title: "Web Development",
    description:
      "Building and shipping web apps — including a full-stack e-learning platform with React and Node.js during an internship at Alliance Software Inc.",
    tools: ["JavaScript / TypeScript", "React / Next.js", "HTML & CSS", "Git"],
  },
  {
    title: "Virtual Assistant / Admin Support",
    description:
      "Reliable support for scheduling, documentation, research, and day-to-day admin work.",
    tools: ["Google Workspace", "Documentation", "Scheduling", "Data entry"],
  },
];

export const skillGroups = [
  {
    category: "Machine Learning / CV",
    items: [
      "PyTorch",
      "TensorFlow / TFLite",
      "OpenCV",
      "YOLO / object detection",
      "Model quantization & pruning",
      "TensorRT",
    ],
  },
  {
    category: "Embedded & Mechatronics",
    items: [
      "NVIDIA Jetson Nano",
      "STM32 / Arduino",
      "ROS / ROS2",
      "Sensor fusion (IMU, LIDAR)",
      "Motor control (PID, servo, stepper)",
      "PCB & circuit prototyping",
    ],
  },
  {
    category: "Systems & Tools",
    items: ["C / C++", "Python", "Linux (Ubuntu/Yocto)", "Git", "Docker", "I2C / SPI / UART"],
  },
  {
    category: "Web Development",
    items: ["JavaScript / TypeScript", "React / Next.js", "HTML & CSS", "REST APIs", "Vercel / GitHub"],
  },
  {
    category: "Admin & VA Support",
    items: ["Google Workspace", "Scheduling & calendar mgmt", "Documentation & write-ups", "Research", "Data entry"],
  },
];

export type Project = {
  slug: string;
  category: "ML/CV & Embedded" | "Web Development" | "VA / Admin" | "AI / Software";
  title: string;
  summary: string;
  role: string;
  stack: string[];
  specs: { label: string; value: string }[];
  outcome: string;
  image?: string; // put an image in /public/projects/ and reference it here
  repoUrl?: string;
  demoUrl?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "realtime-object-detection-jetson",
    category: "ML/CV & Embedded",
    title: "Coffee Fruit Ripeness Classification and Sorting using YOLO11n on NVIDIA Jetson Nano",
    summary:
      "Trained a lightweight YOLO model and optimized it with TensorRT to run live object detection at usable frame rates on Jetson Nano hardware.",
    role: "Solo project — data collection, training, on-device deployment",
    stack: ["PyTorch", "YOLO11n", "TensorRT", "OpenCV", "Jetson Nano"],
    specs: [
      { label: "Inference speed", value: "~22 FPS @ 416x416" },
      { label: "Model size", value: "1.5 MB (quantized)" },
      { label: "Classes", value: "3 custom classes" },
    ],
    outcome: "The model is able to classify the coffee fruit into two classes: ripe, and underripe.",
    repoUrl: "https://github.com/gojira006/Coffee-Fruit-Ripeness-Classification-and-Sorting",
    featured: true,
  },
  {
    slug: "smart-traffic-light-rtos",
    category: "ML/CV & Embedded",
    title: "Smart Traffic Light Signal Control Using RTOS",
    summary:
      "Built a FreeRTOS-based traffic light controller on Arduino that dynamically reprioritizes tasks based on ultrasonic vehicle detection while guaranteeing pedestrian requests are never starved.",
    role: "Team project (3 members) — firmware, task scheduling, synchronization logic",
    stack: ["Arduino", "FreeRTOS", "C", "HC-SR04", "Semaphores/Mutexes"],
    specs: [
      { label: "Detection threshold", value: "<10 cm (HC-SR04)" },
      { label: "Task priorities", value: "Dynamic (1–3)" },
      { label: "Sync primitives", value: "Binary semaphore + mutex" },
    ],
    outcome:
      "System dynamically extended green-light duration when a vehicle was present and reliably served pedestrian requests once traffic cleared, with no observed race conditions across shared state.",
    repoUrl: "https://github.com/gojira006/Smart-Traffic-Light-Signal-Control-Using-RTOS-",
    featured: true,
  },
  {
    slug: "smart-trash-bin",
    category: "ML/CV & Embedded",
    title: "Smart Trash Bin with Touchless Lid and Fill-Level Monitoring",
    summary:
      "Bare-metal ATmega328P firmware that opens a bin lid on hand detection and displays live fill level, built entirely around a non-blocking, interrupt-driven finite state machine.",
    role: "Team project — embedded firmware, FSM design, timer-driven scheduling",
    stack: ["ATmega328P", "Embedded C", "HC-SR04", "Sharp IR sensor", "3D printing"],
    specs: [
      { label: "Architecture", value: "3-state FSM" },
      { label: "Timers used", value: "3 (sampling, PWM, lid timing)" },
      { label: "Blocking delays", value: "None (fully interrupt-driven)" },
    ],
    outcome:
      "Delivered touchless lid operation and real-time fill-level display with no blocking calls in the main loop, keeping the system responsive at all times.",
    repoUrl: "https://github.com/gojira006/-Smart-Trash-Bin-using-an-Interrupt-Driven-Embedded-System",
    featured: true,
  },
  {
    slug: "floodguard-water-detection",
    category: "ML/CV & Embedded",
    title: "FloodGuard: Smart Water Detection for Smart Cities",
    summary:
      "An IoT flood-monitoring device combining ultrasonic and water-level sensing with an ESP8266 to push real-time flood risk alerts to the Blynk app.",
    role: "Team project — sensor integration, cloud connectivity, risk classification logic",
    stack: ["Arduino Uno", "ESP8266-01S", "Blynk", "HC-SR04", "HW-038"],
    specs: [
      { label: "Risk levels", value: "4 (Normal → High)" },
      { label: "Connectivity", value: "WiFi via ESP8266" },
      { label: "Alerting", value: "Live push notifications" },
    ],
    outcome:
      "Correctly classified flood risk in real time and successfully pushed live sensor data and alerts to the Blynk app during testing.",
    repoUrl: "https://github.com/gojira006/FLOODGUARD",
    featured: false,
  },
  {
    slug: "pid-water-level-controller",
    category: "ML/CV & Embedded",
    title: "LevelFlow: Water Pump Dispenser Using PID",
    summary:
      "A closed-loop liquid level controller that uses a tuned PID algorithm to drive a submersible pump via PWM, holding a user-set level without overshoot.",
    role: "Team project — PID implementation and tuning, sensor feedback loop",
    stack: ["Arduino Uno", "PID control", "HC-SR04", "IRF520 MOSFET module"],
    specs: [
      { label: "Control loop rate", value: "10 Hz (100 ms interval)" },
      { label: "Tuned gains", value: "Kp=600, Ki=1.5, Kd=0.08" },
      { label: "Setpoint range", value: "4–16 cm" },
    ],
    outcome:
      "System converged smoothly on the target level without oscillation, correctly halting the pump within tolerance and resuming on drift.",
    repoUrl: "https://github.com/gojira006/LevelFlow-Water-Pump-Dispenser-Using-PID",
    featured: false,
  },
  {
    slug: "automatic-window-light-control",
    category: "ML/CV & Embedded",
    title: "Daylight & Nighttime Detection for Automatic Window",
    summary:
      "An interrupt-driven AVR system that opens or closes a window based on ambient light, with LCD status feedback and a manual override button for accessibility.",
    role: "Team project — AVR C firmware, interrupt/timer configuration",
    stack: ["AVR ATmega328P", "Embedded C", "LDR", "Servo motor", "I2C LCD"],
    specs: [
      { label: "Interrupts used", value: "INT1 + PCINT2 + Timer0" },
      { label: "Servo range", value: "0°–180°" },
      { label: "Blocking delays", value: "None (fully interrupt-driven)" },
    ],
    outcome:
      "Consistently opened/closed the window in response to light changes while supporting instant manual override, aimed at accessibility use cases.",
    repoUrl: "https://github.com/gojira006/Daylight-Nighttime-Detection-for-Automatic-Window",
    featured: false,
  },

  {
    slug: "cafe-finder",
    category: "Web Development",
    title: "Cafe Finder",
    summary:
      "A web app that finds nearby cafes in real time using your location, pulling live data from OpenStreetMap — no paid API, no key required.",
    role: "Solo project — full-stack build, API integration, UI/UX",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Leaflet", "OpenStreetMap Overpass API"],
    specs: [
      { label: "Data source", value: "OpenStreetMap (live, free)" },
      { label: "Filters", value: "Distance, wifi, outdoor seating" },
      { label: "Favorites", value: "Persisted locally" },
    ],
    outcome:
      "Switched from a planned Google Places integration to OpenStreetMap's free Overpass API after weighing API costs against a portfolio project's needs — kept the app fully functional with zero ongoing cost and no API key required.",
    repoUrl: "https://github.com/gojira006/cafe-finder",
    demoUrl: "https://cafe-finder-virid.vercel.app/",
    featured: true,
  },

  {
    slug: "signal-zero-cost-voice-assistant",
    category: "AI / Software",
    title: "Signal — Zero-Cost Voice Assistant",
    summary: "A voice assistant that listens, responds, and talks back — built entirely on free, browser-native tools, with no paid APIs, subscriptions, or backend server required.",
    role: "Solo project — speech pipeline design, intent parsing, UI/UX design",
    stack: ["Next.js", "TypeScript", "Web Speech API", "Open-Meteo API"],
    specs: [
      { label: "Pipeline", value: "Speech-to-text → intent matching → text-to-speech" },
      { label: "Speech engine", value: "Browser-native Web Speech API" },
      { label: "Weather & world time", value: "Open-Meteo geocoding + forecast API" },
    ],
    outcome:
      "Learned to work within a strict constraint — no paid APIs — by leaning on browser-native Web Speech and Web Audio APIs instead of cloud services, including building a real-time audio-reactive waveform and debugging platform-specific quirks in speech recognition (like Chromium's internal state bugs and Brave's blocked speech backend) that don't show up in tutorials.",
    repoUrl: "https://github.com/gojira006/voice-assistant",
    demoUrl: "https://signalvoice-assistant.vercel.app/",
    featured: true,
  },
];

export const experience = [
  {
    period: "June 2025 — July 2025",
    title: "Web Developer Intern",
    org: "Alliance Software Inc.",
    description: "Built a full-stack e-learning platform with a 4-member team using React and Node.js, implementing user authentication and profile management features across both client and server sides.",
  },
];

export const education = [
  {
    period: "2021 — 2026",
    degree: "Bachelor of Science in Computer Engineering",
    school: "Mindanao State University - Iligan Institute of Technology",
    description: "Relevant coursework: Computer Vision, Machine Learning, Embedded Systems, Robotics, etc.",
  },
];