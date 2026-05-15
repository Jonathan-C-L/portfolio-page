import { AboutMe } from '../../../../shared/types';

interface AboutMeProp {
    data: AboutMe | undefined;
}

export const About = ({data}: AboutMeProp) => {
    if (!data) return null;

    return (
        <section id="about">
            <div className="section-label">Background</div>
            <h2 className="section-title fade-in">About Me</h2>
            <div className="about-grid fade-in">
                <div className="about-text">{data.description}</div>
                <div className="skills-block">
                {Object.entries(data.skills).map(([category, items]) => (
                    <div key={category} className="skill-row">
                    <div className="skill-row-label">{category}</div>
                    <div className="skill-pills">
                        {items.map((skill) => (
                        <span key={skill} className="pill">{skill}</span>
                        ))}
                    </div>
                    </div>
                ))}
                </div>
            </div>
        </section>
    );
};