import { useState, useEffect, useRef } from 'react';

export const useActiveSection = (sectionIds) => {
    const [activeSection, setActiveSection] = useState(sectionIds[0]);
    const observer = useRef(null);
    useEffect(() => {
        observer.current = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, { rootMargin: '-30% 0px -70% 0px' });

        sectionIds.forEach(id => {
            const el = document.getElementById(id);
            if (el) observer.current.observe(el);
        });

        return () => {
            sectionIds.forEach(id => {
                const el = document.getElementById(id);
                if (el) observer.current.unobserve(el);
            });
        };
    }, [sectionIds]);
    return activeSection;
};