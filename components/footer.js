/**
 * Author: Jonathan Le
 * Date: Dec. 18, 2025
 * Summary: footer.js is responsible for rendering the footer element of the page, which includes copyright and credits information
 */
import { AppendAll } from "../library/lib.js";


export function renderFooter(){
    const footer = document.getElementById("footer");
    const copyright = `<span>© 2025 Jonathan Le</span>`;
    let credits = `<span>Blink Effect: <a href="https://codepen.io/thisanimus/pen/OJpaqWz" target="_blank">@thisanimus</a></span>
`;
    AppendAll(footer, [copyright, credits]);
}