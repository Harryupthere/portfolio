import { useState } from "react";
import { motion } from "framer-motion";
import {
  Youtube,
  Linkedin,
  Github,
  Mail,
  Globe,
  Briefcase,
  Clock,
  Code,
} from "lucide-react";
import { toast } from "sonner";
import "./Contact.scss";
import emailjs from "@emailjs/browser";

const socialLinks = [
  {
    name: "YouTube",
    icon: Youtube,
    url: "https://www.youtube.com/@hashingwithharsh",
    color: "#FF0000",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "http://linkedin.com/in/harsh-chouhan-010/",
    color: "#0077B5",
  },
  {
    name: "GitHub",
    icon: Github,
    url: "https://github.com/Harryupthere",
    color: "#181717",
  },
  // { name: 'Fiverr', icon: Briefcase, url: 'https://www.fiverr.com/harshchouhan001/', color: '#1DBF73' },
  // { name: 'Freelancer', icon: Globe, url: 'https://www.freelancer.in/u/Harsh01119?sb=t', color: '#29B2FE' },
  // { name: 'Upwork', icon: Briefcase, url: 'https://upwork.com', color: '#6FDA44' },
  // { name: 'PeoplePerHour', icon: Clock, url: 'https://peopleperhour.com', color: '#FF6B00' },
  // { name: 'LeetCode', icon: Code, url: 'https://leetcode.com', color: '#FFA116' },
];

const Contact = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendEmail(formData);
    toast.success("Message sent! I will get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

    const sendEmail = async (form) => {
      try{
    await emailjs.send(
      "service_5m1gwy8",
      "template_r7yhhg9",
      {
        name: form.name,
        email: form.email,
        message: form.message,
      },
      "1tYmJQRi0ymUx_Jax",
    );
  }catch(error){console.log(error)}
  };

  return (
    <section id="contact" className="contact">
      <div className="contact__clouds"></div>

      <div className="contact__container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="contact__header"
        >
          <h2 className="contact__title">Let's Connect in the Sky ☁️</h2>
          <p className="contact__subtitle">
            Reach out and let's build something amazing together
          </p>
        </motion.div>

        <div className="contact__content">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="contact__social"
          >
            <h3 className="contact__social-title">Find Me Online</h3>
            <div className="contact__social-grid">
              {socialLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                    viewport={{ once: true }}
                    className="contact__social-link"
                    style={
                      { "--hover-color": link.color } as React.CSSProperties
                    }
                  >
                    <Icon size={24} />
                    <span>{link.name}</span>
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="contact__form-container"
          >
            <h3 className="contact__form-title">Send a Message</h3>
            <form onSubmit={handleSubmit} className="contact__form">
              <div className="contact__form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                />
              </div>

              <div className="contact__form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                />
              </div>

              <div className="contact__form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Your message..."
                />
              </div>

              <button type="submit" className="contact__form-submit">
                <Mail size={20} />
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
