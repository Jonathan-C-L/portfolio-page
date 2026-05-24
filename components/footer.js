console.log("footer.js connected");

export function RenderFooter(){
    const copyright = `<p>&copy; Copyright 2025 Jonathan Le</p>`;
    let credits = `<div class='credits'>CRT Effects: <a target='_blank' href='https://codepen.io/thisanimus/pen/OJpaqWz'>https://codepen.io/thisanimus/pen/OJpaqWz</a> (@thisanimus)</div>`;
    AppendAll(footer, [copyright, credits]);
}