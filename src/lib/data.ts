// ============================================================
// EDIT THIS FILE to put in your real info. Nothing else in the
// project needs to change for basic content updates.
// ============================================================

export const profile = {
  name: "Your Name",
  role: "Computer Vision & Embedded Systems Engineer",
  tagline:
    "I build machines that see and react — from trained models to the boards that run them in real time.",
  location: "Manila, Philippines",
  email: "you@example.com",
  github: "https://github.com/yourhandle",
  linkedin: "https://linkedin.com/in/yourhandle",
  resumeUrl: "/resume.pdf", // drop a resume.pdf into the /public folder
};

export const stats = [
  { label: "Years hands-on", value: "3+" },
  { label: "Deployed on-device models", value: "6" },
  { label: "Platforms", value: "Jetson · STM32 · ESP32" },
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
];

export type Project = {
  slug: string;
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
    title: "Real-Time Object Detection on Jetson Nano",
    summary:
      "Trained a lightweight YOLO model and optimized it with TensorRT to run live object detection at usable frame rates on Jetson Nano hardware.",
    role: "Solo project — data collection, training, on-device deployment",
    stack: ["PyTorch", "YOLOv8", "TensorRT", "OpenCV", "Jetson Nano"],
    specs: [
      { label: "Inference speed", value: "~22 FPS @ 416x416" },
      { label: "Model size", value: "6.1 MB (quantized)" },
      { label: "Classes", value: "8 custom classes" },
    ],
    outcome:
      "Replace with the real result: e.g. what it detected, what it was used for, what you'd improve next.",
    repoUrl: "https://github.com/yourhandle/repo-name",
    featured: true,
  },
  {
    slug: "autonomous-line-following-robot",
    title: "Autonomous Line-Following Robot",
    summary:
      "Built a two-wheeled robot that combines a camera-based line detector with a PID controller for smooth, drift-free tracking on curved paths.",
    role: "Solo project — mechanical build, control loop, tuning",
    stack: ["Arduino", "OpenCV", "PID control", "DC motors + encoders"],
    specs: [
      { label: "Control loop rate", value: "100 Hz" },
      { label: "Max stable speed", value: "0.6 m/s" },
      { label: "Sensors", value: "Camera + wheel encoders" },
    ],
    outcome: "Replace with the real result and what problem it solved or what you learned.",
    repoUrl: "https://github.com/yourhandle/repo-name",
    featured: true,
  },
  {
    slug: "gesture-controlled-robotic-arm",
    title: "Gesture-Controlled Robotic Arm",
    summary:
      "Used hand-landmark tracking to map human hand gestures to a 4-DOF robotic arm's servo positions in real time.",
    role: "Solo project — CV pipeline, kinematics, firmware",
    stack: ["MediaPipe", "Python", "Servo motors", "Inverse kinematics"],
    specs: [
      { label: "Degrees of freedom", value: "4" },
      { label: "Latency", value: "~80 ms gesture-to-motion" },
      { label: "Control", value: "Serial over USB" },
    ],
    outcome: "Replace with the real result — what it could grip/do, demo video link, etc.",
    repoUrl: "https://github.com/yourhandle/repo-name",
    featured: false,
  },
];

export const experience = [
  {
    period: "2024 — Present",
    title: "Your Role",
    org: "Company / Lab / University",
    description: "One or two lines on what you actually did and shipped.",
  },
  {
    period: "2023 — 2024",
    title: "Your Role",
    org: "Company / Lab / University",
    description: "One or two lines on what you actually did and shipped.",
  },
];
