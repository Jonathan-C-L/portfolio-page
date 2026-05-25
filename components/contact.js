/**
 * Author: Jonathan Le
 * Date: Dec. 18, 2025
 * Summary: contact.js is responsible for rendering the contact section of the page, which includes various methods of contacting me such as email and LinkedIn, with click-to-copy functionality for easy access
 */

import { ContactData } from "../data/contact.js";
import { copyToClipboard } from "../library/util.js";

export function renderContact(){
    const contact = document.getElementById("contact-card");
    contact.innerHTML = "";

    ContactData().forEach((item) => {
        const row = document.createElement("div");
        row.className = "contact-row";

        // Has a link - use an anchor tag
        if (item.href){
            row.innerHTML = `
            <div class="contact-icon">${item.icon}</div>
            <div>
                <div class="contact-label">${item.label}</div>
                <a class="contact-value" href="${item.href}" target="${item.href.startsWith('http') ? '_blank' : '_self'}">${item.value}</a>
            </div>
            <span class="copy-hint">click to copy</span>
            `;
        }
        else{
            row.innerHTML = `
            <div class="contact-icon">${item.icon}</div>
            <div>
                <div class="contact-label">${item.label}</div>
                <div class="contact-value">${item.value}</div>
            </div>
            <span class="copy-hint">click to copy</span>
            `;
        }

        row.addEventListener("click", () => copyToClipboard(item.value));
        contact.appendChild(row);
    });
}