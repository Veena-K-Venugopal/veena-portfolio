import { motion } from 'framer-motion';

function ProjectCard({ title, description, tech, link }) {
    return (
        <motion.div
            className="bg-gray-100 rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover={{
                scale: 1.05,
                boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)"
            }}
        >
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
            <p className="text-gray-600 mb-4">{description}</p>
            <p className="text-sm text-gray-500 mb-4">
                <span className="font-medium">Tech:</span>{tech}
            </p>
            {link && (
                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-sm font-semibold text-blue-600 hover:underline"
                >
                    View Project →
                </a>
            )}
        </motion.div>
    )
}

export default ProjectCard;