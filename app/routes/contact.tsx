import React, { useState } from "react";
import { Mail, Github, Linkedin } from "lucide-react";
import { Button } from "~/components/ui/button/button";
import { Navigation } from "~/components/navigation";
import { ParticleField } from "~/components/particle-field";
import styles from "./contact.module.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" });
      setSubmitted(false);
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className={styles.page}>
      <Navigation />
      <ParticleField />

      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>Get in Touch</h1>
          <p className={styles.subtitle}>Have a project in mind? Let's create something amazing together.</p>
        </header>

        <div className={styles.formCard}>
          {submitted ? (
            <div className={styles.success}>✨ Message sent successfully! I'll get back to you soon.</div>
          ) : (
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.label}>
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={styles.input}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.label}>
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={styles.input}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.label}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={styles.textarea}
                  required
                />
              </div>

              <Button type="submit" size="lg" className={styles.submitButton}>
                Send Message
              </Button>
            </form>
          )}
        </div>

        <div className={styles.contactInfo}>
          <div className={styles.infoCard}>
            <div className={styles.infoIcon}>
              <Mail />
            </div>
            <div className={styles.infoLabel}>Email</div>
            <div className={styles.infoValue}>hello@example.com</div>
          </div>

          <div className={styles.infoCard}>
            <div className={styles.infoIcon}>
              <Github />
            </div>
            <div className={styles.infoLabel}>GitHub</div>
            <div className={styles.infoValue}>@yourusername</div>
          </div>

          <div className={styles.infoCard}>
            <div className={styles.infoIcon}>
              <Linkedin />
            </div>
            <div className={styles.infoLabel}>LinkedIn</div>
            <div className={styles.infoValue}>Your Name</div>
          </div>
        </div>
      </div>
    </div>
  );
}
