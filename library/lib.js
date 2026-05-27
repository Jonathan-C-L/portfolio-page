/**
 * Summary: lib.js is a library file that contains javascript that will be commonly used between all other js files to keep 
 * the files organized and to minimize the size of each js file
 * Author: Jonathan Le
 * Date: Dec. 18, 2025
 */

/**
 * AppendAll appends all jQuery childnodes to a parent node
 * @param {*} parent the parent jQuery node to be appended to
 * @param {any} childNodes the child jQuery nodes to append
 */
export function AppendAll(parent, childNodes){
    // exception handling for non-array argument
    if(!Array.isArray(childNodes)){
        console.error("childNodes argument is not an array");
        return;
    }
    childNodes.forEach(child => {
        if (child == null)
            return;

        $(parent).append(child);
    });
}
/**
 * NewElement creates a new element of the specified type and id (if provided)
 * @param {string} element 
 * @param {string} id 
 * @returns 
 */
export function NewElement(element, id = null){
    const newElement = $(`<${element}>`);
    if(id != null)
        newElement.attr("id", id);
    return newElement;
}
/**
 * AddHeader places the argument string into a header element
 * @param {string} title string to be inserted into the h2 tag
 * @returns h2 element with the argument text within
 */
export function AddHeader(title){
    return $(`<h2>${title}</h2>`);
}
/**
 * AddParagraph places the argument text into a paragraph element
 * @param {string} text string to be inserted into the paragraph
 * @returns paragraph element with the text inside
 */
export function AddParagraph(text){
    return $(`<p>${text}</p>`);
}
/**
 * ConvertToTitle
 * @param {string} word string argument to have it's first letter capitalized
 * @returns the word with the first letter capitalized
 */
export function ConvertToTitle(title, separator = " "){
    if(title.length === 0)
        return "";

    let titleWords = [];

    // Dash character
    if(title.includes("-")){
        titleWords = title.split("-");
    }
    // Space character
    else if (title.includes(" ")){
        titleWords = title.split(" ");
    }
    // Empty Array
    else if (!titleWords.length)
        return TitleCase([title]);

    return TitleCase(titleWords).join(separator);
}

export function TitleCase(stringArray){
    for(let i = 0; i < stringArray.length; i++){
        // Edge case of single letters (i.e. "C")
        if (stringArray[i].length == 1){
            stringArray[i] = stringArray[i].toUpperCase();
        } else{
            stringArray[i] = stringArray[i][0].toUpperCase() + stringArray[i].substring(1);
        }
    }

    return stringArray;
}