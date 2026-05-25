/**
 * Author: Jonathan Le
 * Date: Dec. 18, 2025
 * Summary: footer.js is responsible for rendering the footer element of the page, which includes copyright and credits information
 */

export function renderFooter(){
    const copyright = `<p>&copy; Copyright 2025 Jonathan Le</p>`;
    let credits = `<div class='credits'>CRT Effects: <a target='_blank' href='https://codepen.io/thisanimus/pen/OJpaqWz'>https://codepen.io/thisanimus/pen/OJpaqWz</a> (@thisanimus)</div>`;
    AppendAll(footer, [copyright, credits]);
}