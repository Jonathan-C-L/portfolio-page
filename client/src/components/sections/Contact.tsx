import { ContactItem } from '../../../../shared/types';

interface ContactProps {
    items: ContactItem[] | undefined;
    onCopy: (value: string) => void;
}

export const Contact = ({items, onCopy}: ContactProps) => {
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
                        <div className="contact-label">{item.label}
                        {item.href ? 
                        (<a 
                            className="contact-value" 
                            href={item.href} 
                            target={item.href.startsWith('http') ? '_blank' : '_self'} 
                            rel="noreferrer"></a>) : 
                            (<></>)}
                        </div>
                        <span className="copy-hint">click to copy</span>
                    </div>
                </div>
                ))}
            </div>
        </section>
    );
};