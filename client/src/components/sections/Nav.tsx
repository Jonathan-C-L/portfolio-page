import { useState } from "react";

interface NavProps {
    onNavigate: (id: string) => void;
}

export const Nav = ({ onNavigate }: NavProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleNav = (id: string) => {
        onNavigate(id);
        setIsOpen(false);
    }

    return (
        <nav>
            <div className="nav-logo">JL<span className="cursor">.</span></div>
            <button className="hamburger" id="hamburger" aria-label="Menu" onClick={() => setIsOpen(prev => !prev)}>
                <span></span><span></span><span></span>
            </button>
            <ul className="nav-links" id="nav-links">
                <li><a onClick={() => handleNav("about")}>About</a></li>
                <li><a onClick={() => handleNav("projects")}>Projects</a></li>
                <li><a onClick={() => handleNav("contact")}>Contact</a></li>
            </ul>
        </nav>
    );
};