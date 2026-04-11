import { motion } from "framer-motion";

const container = {
    hidden: { opacity: 0, y: 80 },
    show: {
        opacity: 1,
        y: 0,
        transition: { staggerChildren: 0.15, duration: 0.5 }
    }
}

const item = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.3 } }
}

const skills = ['Python', 'FastAPI', 'PostgreSQL', 'AWS', 'React', 'Docker', 'LLMs', 'SQL']

function About() {
    return (
        <section id="about" className="py-16 bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">About Me</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                    I'm <span className="font-semibold">Veena</span>, a software engineer
                    with a CS degree and ~4 years of experience in IT operations and data
                    workflows. That background gives me firsthand context for where systems
                    break, where data goes wrong, and where AI can actually change outcomes.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                    I'm currently focused on building end-to-end AI/ML systems, data pipelines,
                    and backend APIs — deploying to the cloud and integrating LLMs into
                    real-world workflows.
                </p>
                {/* Skills Badge */}
                <motion.div
                    className="flex flex-wrap justify-center gap-2 mt-4"
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.8 }}
                >
                    {skills.map((skill, index) => (
                        <motion.span
                            key={index}
                            className="px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded-full font-medium shadow-sm cursor-default"
                            variants={item}
                            whileHover={{
                                scale: 1.1,
                                backgroundColor: "#2563eb",
                                color: "#fff",
                            }}
                        >
                            {skill}
                        </motion.span>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

export default About;