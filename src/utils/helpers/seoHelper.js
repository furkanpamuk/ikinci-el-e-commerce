
// changed characters for url 
export const stringHelper = (value = '') => {
    let result = value
    result = result.toLowerCase().trim().replace(/ /gim, '-')
    result = result
        .replace(/ğ/gim, "g")
        .replace(/ü/gim, "u")
        .replace(/ş/gim, "s")
        .replace(/ı/gim, "i")
        .replace(/ö/gim, "o")
        .replace(/ç/gim, "c");
    return result
} 