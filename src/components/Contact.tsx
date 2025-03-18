import { useState, FormEvent } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";


const Contact = () => {
  
  const [ref,] = useInView({ threshold: 0.1, triggerOnce: true });

  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_uaf81if",
        "template_jryy3u5",
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        
        "qr2Od9R3SbUu4GT8v"
      )
      .then(() => {
        setSuccess("Message envoyé avec succès !");
        setLoading(false);
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error("Erreur:", error);
        setSuccess("Erreur lors de l'envoi.");
        setLoading(false);
      });
  };

  return (
    <section id="contact" className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(100,255,218,0.05)_0%,transparent_100%)]"></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.h2 
          className="section-heading text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Contact
        </motion.h2>

        <motion.form 
          ref={ref} 
          onSubmit={handleSubmit} 
          className="space-y-6 sm:space-y-8 max-w-2xl mx-auto px-4"
        >
          <div>
            <label className="block text-base sm:text-lg font-medium mb-2 text-cyan">Nom</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="contact-input text-base sm:text-lg"
              required
            />
          </div>

          <div>
            <label className="block text-base sm:text-lg font-medium mb-2 text-cyan">Email</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="contact-input text-base sm:text-lg"
              required
            />
          </div>

          <div>
            <label className="block text-base sm:text-lg font-medium mb-2 text-cyan">Message</label>
            <textarea
              rows={6}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="contact-input text-base sm:text-lg"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-cyan text-night-blue font-semibold py-3 sm:py-4 rounded-lg hover:bg-cyan/90 transition-all duration-300 transform hover:-translate-y-1 text-base sm:text-lg"
            disabled={loading}
          >
            {loading ? "Envoi..." : "Envoyer"}
          </button>

          {success && <p className="text-center text-cyan mt-4">{success}</p>}
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
