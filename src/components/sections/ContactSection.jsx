import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Linkedin, User, Send } from 'lucide-react';
import { mockData } from '../../data/mockData.jsx';
import Button from '../ui/Button';
import Card from '../ui/Card';
import Toast from '../ui/Toast';

const Section = ({ id, children, className = '' }) => (<section id={id} className={`w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>{children}</section>);
const SectionTitle = ({ children }) => (<motion.h2 className="text-3xl md:text-4xl font-bold text-center text-slate-800 dark:text-slate-100 mb-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.5 }}>{children}</motion.h2>);
const ContactSection = () => {
    // Formspree integration: no need for local state or submit handler
    const [toast, setToast] = useState(null);
    return (
        <Section id="contact" className="py-20 md:py-28">
            <SectionTitle>Get In Touch</SectionTitle>
            <div className="grid md:grid-cols-2 gap-12">
                <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.6 }}>
                    <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100">Let's Connect</h3>
                    <p className="mt-4 text-slate-600 dark:text-slate-300">I'm actively seeking new opportunities and collaborations. If you have a project in mind, a question, or just want to connect, I'd love to hear from you. I typically respond within 24 hours.</p>
                    <div className="mt-8 space-y-4">
                        <a href={`mailto:${mockData.personalInfo.email}`} className="flex items-center gap-4 text-slate-600 dark:text-slate-300 hover:text-blue-500 transition-colors"><Mail size={24} /> <span>{mockData.personalInfo.email}</span></a>
                        <a href={mockData.personalInfo.socials.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-slate-600 dark:text-slate-300 hover:text-blue-500 transition-colors"><Linkedin size={24} /> <span>Gagan Reddy A S</span></a>
                        <p className="flex items-center gap-4 text-slate-600 dark:text-slate-300"><User size={24} /> <span>{mockData.personalInfo.location}</span></p>
                    </div>
                </motion.div>
                <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.6, delay: 0.2 }}>
                    <Card className="p-8">
                        <form action="https://formspree.io/f/xpwyyvrq" method="POST" className="space-y-6">
                            <div><label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300">Name</label><input type="text" name="name" id="name" required className="mt-1 block w-full rounded-md border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 shadow-sm focus:border-blue-500 focus:ring-blue-500" /></div>
                            <div><label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300">Email</label><input type="email" name="email" id="email" required className="mt-1 block w-full rounded-md border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 shadow-sm focus:border-blue-500 focus:ring-blue-500" /></div>
                            <div><label htmlFor="subject" className="block text-sm font-medium text-slate-700 dark:text-slate-300">Subject</label><select id="subject" name="subject" className="mt-1 block w-full rounded-md border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 shadow-sm focus:border-blue-500 focus:ring-blue-500"><option>Job Opportunity</option><option>Collaboration</option><option>General Inquiry</option></select></div>
                            <div><label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300">Message</label><textarea name="message" id="message" rows="4" required className="mt-1 block w-full rounded-md border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 shadow-sm focus:border-blue-500 focus:ring-blue-500"></textarea></div>
                            <div><Button type="submit" className="w-full"><Send size={16} />Send Message</Button></div>
                        </form>
                        <div className="mt-4 text-center text-sm text-slate-500 dark:text-slate-400">
                          <span>After submitting, you'll receive a confirmation and I'll get your message directly in my inbox.</span>
                        </div>
                    </Card>
                </motion.div>
            </div>
        </Section>
    );
};
export default ContactSection;