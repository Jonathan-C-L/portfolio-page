//------------------------------------------------------
// Defining of DOM elements for Contact section
//------------------------------------------------------
import { ContactItem } from '../../../../shared/types';

// Data type holding my contact information and a clipboard copy function
interface ContactProps {
    items: ContactItem[] | undefined;
    onCopy: (value: string) => void;
}

export const Contact = ({items, onCopy}: ContactProps) => {
    // If nothing fetched from portfolio API, empty in the webpage
    if (!items) return null;

    return (
        <section id="contact">
            <div className="section-label">Reach Out</div>
            <h2 className="section-title fade-in">Contact</h2>
            <div className="contact-card fade-in">
                {items.map(item => (
                <div key={item.label} className="contact-row" onClick={() => onCopy(item.value)}>
                    <div className="contact-icon">{item.icon}</div>
                    <div>
                        <div className="contact-label">{item.label}</div>
                        {item.href ? 
                        (<a 
                            className="contact-value" 
                            href={item.href} 
                            target={item.href.startsWith('http') ? '_blank' : '_self'} 
                            rel="noreferrer">{item.value}</a>) : 
                            (<span className="contact-value">{item.value}</span>)}
                    </div>
                    <span className="copy-hint">click to copy</span>
                </div>
                ))}
            </div>
        </section>
    );
};