export const less = (data) => {
    let arrayLess = data.filter(e => e.population < 100000) 
    console.log("less:",arrayLess)
}

export const more = (data) => {
    let arrayMore = data.filter(e => e.population > 100000) 
    console.log("more:",arrayMore)
}

