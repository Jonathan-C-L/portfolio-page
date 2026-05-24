console.log("header.js connected");


export function RenderHeader(){
    header.append(NewHeader("Jonathan", {"About": "", "Projects": "", "Contact": ""}));
    HeaderEvents();
}
function HeaderEvents(){
    header.click(e=>{
        switch(e.target.id){
            case "about":
                RenderAboutMe(AboutMeData());
                break;
            case "projects":
                RenderProjects(ProjectsData());
                break;
            case "contact":
                RenderContact(ContactData());
                break;
        }
    });
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