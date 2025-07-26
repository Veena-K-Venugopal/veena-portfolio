import { motion } from "framer-motion"
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa"

const contacts = [
    {
        name: "Email Me",
        href: "mailto:vkvenu10@gmail.com",
        bg: "bg-blue-600",
        hover: "hover:bg-blue-700",
        text: "text-white",
        icon: <FaEnvelope />
    },
    {
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/veena-venugopal",
        bg: "bg-gray-800",
        hover: "hover:bg-gray-900",
        text: "text-white",
        icon: <FaLinkedin />
    },
    {
        name: "GitHub",
        href: "https://github.com/Veena-K-Venugopal",
        bg: "bg-gray-200",
        hover: "hover:bg-gray-300",
        text: "text-gray-800",
        icon: <FaGithub />
    }
]

function Contact() {
    return (
        <section id="contact" className="py-16 bg-white">
            <div className="max-w-3xl mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Contact Me</h2>
                <p className="text-lg text-gray-700 mb-4">
                    I’d love to connect! Feel free to reach out for opportunities, collaborations, or just to say hi.
                </p>
                {/* Contact Links */}
                <motion.div
                    className="flex flex-wrap justify-center gap-4"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5 }}
                >
                    {contacts.map((contact, index) => (
                        <motion.a
                            key={index}
                            href={contact.href}
                            target={contact.href.startsWith('http') ? '_blank' : undefined}
                            rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                            className={`flex items-center gap-2 px-6 py-3 rounded-lg shadow-md transition-colors ${contact.bg} ${contact.text} ${contact.hover}`}
                            whileHover={{ scale: 1.08, boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)" }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            {contact.icon}
                            {contact.name}
                        </motion.a>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

export default Contact;