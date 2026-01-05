import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";
import {
  Sparkles,
  Code,
  Cpu,
  Zap,
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Download,
  ExternalLink,
  Award,
  Briefcase,
  GraduationCap,
} from "lucide-react";
import { useEffect, useState, useRef } from "react";
import classNames from "classnames";
import { Button } from "~/components/ui/button/button";
import { ParticleField } from "~/components/particle-field";
import { ThemeToggle } from "~/components/theme-toggle";
import { ScrollProgress } from "~/components/scroll-progress";
import { CursorGlow } from "~/components/cursor-glow";
import { AnimatedBackground } from "~/components/animated-background";
import { TypingText } from "~/components/typing-text";
import { ScrollToTop } from "~/components/scroll-to-top";
import { projects } from "~/data/projects";
import { skills } from "~/data/skills";
import { experiences } from "~/data/experience";
import { Input } from "~/components/ui/input/input";
import { Textarea } from "~/components/ui/textarea/textarea";
import { Badge } from "~/components/ui/badge/badge";
import styles from "./home.module.css";

function Hero3DScene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={2} color="#ffc100" />
      <pointLight position={[-10, -5, -10]} intensity={1.5} color="#8e4ec6" />
      <pointLight position={[0, -10, 5]} intensity={1} color="#00a2c7" />
      <Sphere args={[2, 64, 64]}>
        <meshStandardMaterial
          color="#1a1f2e"
          metalness={0.8}
          roughness={0.2}
          emissive="#8e4ec6"
          emissiveIntensity={0.2}
        />
      </Sphere>
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
    </>
  );
}

export default function Home() {
  const [activeSection, setActiveSection] = useState("hero");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set(["hero"]));
  const heroRef = useRef<HTMLElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        setMousePosition({ x: x * 20, y: y * 20 });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set(prev).add(entry.target.id));
          }
        });
      },
      { threshold: 0.2 }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => {
      if (observerRef.current) {
        observerRef.current.observe(section);
      }
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "projects", "skills", "experience", "contact"];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className={styles.page}>
      <AnimatedBackground />
      <CursorGlow />
      <ScrollProgress />
      <ThemeToggle />
      <ScrollToTop />
      <ParticleField />

      {/* Sidebar Navigation */}
      <nav className={styles.sidebar}>
        <div className={styles.sidebarInner}>
          <button
            className={classNames(styles.navDot, { [styles.navDotActive]: activeSection === "hero" })}
            onClick={() => scrollToSection("hero")}
            aria-label="Go to hero"
          >
            <span className={styles.navLabel}>Home</span>
          </button>
          <button
            className={classNames(styles.navDot, { [styles.navDotActive]: activeSection === "about" })}
            onClick={() => scrollToSection("about")}
            aria-label="Go to about"
          >
            <span className={styles.navLabel}>About</span>
          </button>
          <button
            className={classNames(styles.navDot, { [styles.navDotActive]: activeSection === "projects" })}
            onClick={() => scrollToSection("projects")}
            aria-label="Go to projects"
          >
            <span className={styles.navLabel}>Projects</span>
          </button>
          <button
            className={classNames(styles.navDot, { [styles.navDotActive]: activeSection === "skills" })}
            onClick={() => scrollToSection("skills")}
            aria-label="Go to skills"
          >
            <span className={styles.navLabel}>Skills</span>
          </button>
          <button
            className={classNames(styles.navDot, { [styles.navDotActive]: activeSection === "experience" })}
            onClick={() => scrollToSection("experience")}
            aria-label="Go to experience"
          >
            <span className={styles.navLabel}>Experience</span>
          </button>
          <button
            className={classNames(styles.navDot, { [styles.navDotActive]: activeSection === "contact" })}
            onClick={() => scrollToSection("contact")}
            aria-label="Go to contact"
          >
            <span className={styles.navLabel}>Contact</span>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" ref={heroRef} className={styles.section}>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <p className={styles.greeting}>Welcome, I'm</p>
            <h1 className={styles.title}>
              Kiran Surya Sahukar
            </h1>
            <div className={styles.typingWrapper}>
              <TypingText 
                texts={[
                  "AI/ML Engineer",
                  "IoT Developer",
                  "Full Stack Developer",
                  "Problem Solver",
                  "Innovation Enthusiast"
                ]}
                className={styles.typingText}
              />
            </div>
            <p className={styles.subtitle}>
              B.Tech (AIML) Student | Motivated AIML undergraduate with hands-on experience in machine learning, 
              computer vision, IoT-based systems, and chatbot development. Building practical AI solutions for 
              agriculture and innovative technologies.
            </p>
            <div className={styles.cta}>
              <Button size="lg" onClick={() => scrollToSection("projects")}>
                View Projects
              </Button>
              <Button variant="outline" size="lg" onClick={() => scrollToSection("contact")}>
                Get in Touch
              </Button>
            </div>
          </div>

          <div className={styles.hero3d}>
            <div 
              className={styles.profileImageContainer}
              style={{
                transform: `rotateY(${mousePosition.x}deg) rotateX(${-mousePosition.y}deg)`
              }}
            >
              <div className={styles.glowOrb} />
              <img src="/profile.png" alt="Kiran Surya Sahukar" className={styles.profileImage} />
              <Canvas className={styles.canvas3dOverlay} camera={{ position: [0, 0, 5], fov: 75 }}>
                <Hero3DScene />
              </Canvas>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={styles.section}>
        <div className={classNames(styles.sectionContent, { [styles.visible]: visibleSections.has("about") })}>
          <h2 className={styles.sectionTitle}>About Me</h2>
          <div className={styles.aboutGrid}>
            <div className={styles.aboutText}>
              <p className={styles.aboutParagraph}>
                I'm a motivated AIML undergraduate at GIET University with a passion for creating intelligent, connected 
                systems that solve real-world problems. My expertise spans machine learning, computer vision, IoT-based 
                systems, and chatbot development.
              </p>
              <p className={styles.aboutParagraph}>
                From building offline plant disease detection systems with Raspberry Pi to developing WhatsApp bots for 
                farmers, and from enhancing satellite imagery with GANs to competing in national hackathons, I love 
                tackling complex challenges that combine AI, hardware, and practical applications.
              </p>
              <p className={styles.aboutParagraph}>
                With achievements including 1st Prize at Hacknovation 1.0, 2nd Prize at Lernathon 4.0, and participation 
                in Smart India Hackathon, I'm committed to using technology to make a meaningful impact, especially in 
                agriculture and emerging technologies.
              </p>
            </div>

            <div className={styles.statsGrid}>
              <div className={styles.statCard}>
                <Award className={styles.statIcon} />
                <div className={styles.statNumber}>5+</div>
                <div className={styles.statLabel}>Awards Won</div>
              </div>
              <div className={styles.statCard}>
                <Code className={styles.statIcon} />
                <div className={styles.statNumber}>10+</div>
                <div className={styles.statLabel}>Projects</div>
              </div>
              <div className={styles.statCard}>
                <Briefcase className={styles.statIcon} />
                <div className={styles.statNumber}>1+</div>
                <div className={styles.statLabel}>Internships</div>
              </div>
              <div className={styles.statCard}>
                <GraduationCap className={styles.statIcon} />
                <div className={styles.statNumber}>7.85</div>
                <div className={styles.statLabel}>CGPA</div>
              </div>
            </div>

            <div className={styles.featuresGrid}>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>
                  <Sparkles />
                </div>
                <h3 className={styles.featureTitle}>AI/ML Solutions</h3>
                <p className={styles.featureDescription}>
                  Expertise in CNNs, GANs, ESRGAN, and computer vision for plant disease detection and satellite image enhancement.
                </p>
              </div>

              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>
                  <Cpu />
                </div>
                <h3 className={styles.featureTitle}>IoT Systems</h3>
                <p className={styles.featureDescription}>
                  Building IoT solutions with Raspberry Pi 5, sensors, and wireless communication for agricultural automation.
                </p>
              </div>

              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>
                  <Code />
                </div>
                <h3 className={styles.featureTitle}>Development Stack</h3>
                <p className={styles.featureDescription}>
                  Proficient in Python, Java, C++, MySQL, AWS, and .NET for building robust software solutions.
                </p>
              </div>

              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>
                  <Zap />
                </div>
                <h3 className={styles.featureTitle}>Chatbot Development</h3>
                <p className={styles.featureDescription}>
                  Creating intelligent chatbots with WhatsApp API integration and location-based services for farmers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={styles.section}>
        <div className={classNames(styles.sectionContent, { [styles.visible]: visibleSections.has("projects") })}>
          <h2 className={styles.sectionTitle}>Featured Projects</h2>
          <div className={styles.projectsGrid}>
            {projects.map((project, index) => (
              <div key={index} className={styles.projectCard} style={{ animationDelay: `${index * 0.1}s` }}>
                <div className={styles.projectImage}>
                  <img src={project.image} alt={project.title} />
                  <div className={styles.projectOverlay}>
                    <p className={styles.projectDescription}>{project.description}</p>
                    <div className={styles.projectLinks}>
                      <Button size="sm" variant="outline">
                        <ExternalLink size={16} />
                        View Details
                      </Button>
                    </div>
                  </div>
                </div>
                <div className={styles.projectContent}>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <div className={styles.projectTech}>
                    {project.tech.map((tech, i) => (
                      <Badge key={i} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className={styles.section}>
        <div className={classNames(styles.sectionContent, { [styles.visible]: visibleSections.has("skills") })}>
          <h2 className={styles.sectionTitle}>Skills & Technologies</h2>
          <div className={styles.skillsGrid}>
            {skills.map((skill, index) => (
              <div key={index} className={styles.skillCard}>
                <div className={styles.skillHeader}>
                  <h3 className={styles.skillName}>{skill.name}</h3>
                  <span className={styles.skillLevel}>{skill.level}%</span>
                </div>
                <div className={styles.skillBar}>
                  <div className={styles.skillProgress} style={{ width: `${skill.level}%` }} />
                </div>
                <p className={styles.skillCategory}>{skill.category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className={styles.section}>
        <div className={classNames(styles.sectionContent, { [styles.visible]: visibleSections.has("experience") })}>
          <h2 className={styles.sectionTitle}>Experience & Journey</h2>
          <div className={styles.timeline}>
            {experiences.map((item, index) => (
              <div key={index} className={styles.timelineItem}>
                <div className={styles.timelineDot} />
                <div className={styles.timelineCard}>
                  <div className={styles.timelineDate}>{item.period}</div>
                  <h3 className={styles.timelineTitle}>{item.title}</h3>
                  <p className={styles.timelineCompany}>{item.organization}</p>
                  <p className={styles.timelineDescription}>{item.description}</p>
                  <div className={styles.timelineTech}>
                    {item.achievements.map((achievement, i) => (
                      <Badge key={i} variant="secondary">
                        {achievement}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={styles.section}>
        <div className={classNames(styles.sectionContent, { [styles.visible]: visibleSections.has("contact") })}>
          <h2 className={styles.sectionTitle}>Get In Touch</h2>
          <div className={styles.contactGrid}>
            <div className={styles.contactInfo}>
              <p className={styles.contactText}>
                I'm always interested in hearing about new projects and opportunities. Whether you have a question or
                just want to say hi, feel free to reach out!
              </p>
              <div className={styles.contactDetails}>
                <div className={styles.contactItem}>
                  <MapPin className={styles.contactItemIcon} />
                  <div>
                    <div className={styles.contactItemLabel}>Location</div>
                    <div className={styles.contactItemValue}>Rayagada, India</div>
                  </div>
                </div>
                <div className={styles.contactItem}>
                  <Mail className={styles.contactItemIcon} />
                  <div>
                    <div className={styles.contactItemLabel}>Email</div>
                    <div className={styles.contactItemValue}>kiransahukar16@gmail.com</div>
                  </div>
                </div>
                <div className={styles.contactItem}>
                  <Phone className={styles.contactItemIcon} />
                  <div>
                    <div className={styles.contactItemLabel}>Phone</div>
                    <div className={styles.contactItemValue}>+91 8926394789</div>
                  </div>
                </div>
              </div>
              <div className={styles.socialLinks}>
                <a href="https://github.com/kiran1465313" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                  <Github />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://linkedin.com/in/kiran-surya-sahukar-516933324"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                >
                  <Linkedin />
                  <span>LinkedIn</span>
                </a>
              </div>
              <Button className={styles.downloadCV} size="lg" asChild>
                <a href="/resume.pdf" download="Kiran_Surya_Sahukar_Resume.pdf">
                  <Download size={20} />
                  Download Resume
                </a>
              </Button>
            </div>

            <form className={styles.contactForm}>
              <div className={styles.formGroup}>
                <Input type="text" placeholder="Your Name" className={styles.formInput} />
              </div>
              <div className={styles.formGroup}>
                <Input type="email" placeholder="Your Email" className={styles.formInput} />
              </div>
              <div className={styles.formGroup}>
                <Textarea placeholder="Your Message" rows={6} className={styles.formInput} />
              </div>
              <Button type="submit" size="lg" className={styles.submitButton}>
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <p>© 2024 Kiran Surya Sahukar.</p>
        <p className={styles.footerEducation}>B.Tech – Computer & Information Sciences (AIML), GIET University | CGPA: 7.85 | Expected 2028</p>
      </footer>
    </div>
  );
}
