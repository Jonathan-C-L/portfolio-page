/**
 * Data object definition
 * description - from AboutMe data and carries quote or any other descriptions I want
 * onNavigate - event callback when buttons are clicked
 */
interface HeroProps {
    description: string | undefined;
    onNavigate: (id: string) => void;
}

export const Hero = ({ description, onNavigate }: HeroProps) => {
    return (
        <section id="hero">
            <div className="hero-tag fade-in">Software Developer</div>
                <h1 className="hero-name fade-in crt">Jonathan<br/><em>Le</em></h1>
                <p className="hero-desc fade-in">
                    <i>{description}</i>
                </p>
                <div className="hero-ctas fade-in">
                <button className="btn btn-primary" onClick={() => onNavigate("projects")}>View Projects</button>
                <button className="btn btn-ghost" onClick={() => onNavigate("contact")}>Get in Touch</button>
            </div>
            <div className="hero-badge">
            <div className="dot"></div>
            Open to opportunities
            </div>
        </section>
    );
};