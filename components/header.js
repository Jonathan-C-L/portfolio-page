/**
 * Author: Jonathan Le
 * Date: Dec. 18, 2025
 * Summary: header.js is responsible for rendering the header element of the page, which includes the logo and navigation links
 */

export function renderHeader(){
    header.append(NewHeader("Jonathan", {"About": "", "Projects": "", "Contact": ""}));
}

/*********************************************** Header Factory Function *******************************************/
function NewHeader(logo, links){
    // parent divs for flex styling
    const header = $(`<div class='container' id='header'></div>`);
    const headerLogo = $(`<div id='logo'>${logo}<span class='cursor'>_</span></div>`);
    const headerOptions = $(`<div class='container' id='options'></div>`);

    // assigning titles and hrefs
    Object.keys(links).forEach(title =>{
        // href='${links[title]}' for when links are ever incorporated
        const tempLink = $(`<a id='${title.toLowerCase().replaceAll(" ", "_")}'>${title}</a>`);
        headerOptions.append(tempLink);
    });

    // appended together and returned
    AppendAll(header, [headerLogo, headerOptions]);
    return header;
}