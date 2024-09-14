import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc';

const Footer = () => {
    return (
        <motion.footer
            initial={{ x: "100vw" }}
            animate={{ x: 0 }}
            transition={{ duration: 0.2, type: "spring", stiffness: 60 }}
            className="bg-[#100d25] text-white py-3"
        >
            <div className="flex-column items-center gap-5 ">
                <div className="flex items-center justify-around">
                    <motion.a
                        initial={{ x: "-100vw" }}
                        animate={{ x: 0 }}
                        transition={{ duration: 0.8, type: "spring", stiffness: 60, delay: 0.2 }}
                        href="https://github.com/saradpoudel"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mr-4 hover:text-blue-400"
                    >
                        <FaGithub size={40} />
                    </motion.a>
                    <motion.a
                        initial={{ x: "-100vw" }}
                        animate={{ x: 0 }}
                        transition={{ duration: 0.8, type: "spring", stiffness: 60, delay: 0.4 }}
                        href="mailto:sarad@saradpoudel.com.au"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mr-4 text-blue-400 hover:text-gray-400"
                    >
                        sarad@saradpoudel.com.au
                    </motion.a>
                    <motion.a
                        initial={{ x: "-100vw" }}
                        animate={{ x: 0 }}
                        transition={{ duration: 0.8, type: "spring", stiffness: 60, delay: 0.6 }}
                        href="https://www.linkedin.com/in/saradpoudel/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mr-4 hover:text-blue-400"
                    >
                        <FaLinkedin size={40} />
                    </motion.a>

                </div>
                <div className='text-center' >
                    <motion.p
                        initial={{ x: "-100vw" }}
                        animate={{ x: 0 }}
                        transition={{ duration: 0.8, type: "spring", stiffness: 120, delay: 0.8 }}
                        className="text-gray-400"
                    >
                        &copy; 2024 Sarad Poudel. All Rights Reserved.
                    </motion.p>
                </div>
            </div>
        </motion.footer>
    );
};

export default SectionWrapper(Footer, "");
