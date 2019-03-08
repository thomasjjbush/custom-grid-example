const convert = (val) => {
    return `area_${val}`;
}
const randomise = (max) => {
    return `option_${Math.floor(Math.random() * max) + 1}`;
}
export const generate6items = async (i) => {
    const a = convert(i), 
          b = convert(i+1), 
          c = convert(i+2), 
          d = convert(i+3), 
          e = convert(i+4), 
          f = convert(i+5),
          random = randomise(3);
    switch ( random ) {
        case "option_3": return {
            styles: {
                desktop: [
                    `${a} ${a} ${b} ${b} ${c} ${c} ${d} ${d}`,
                    `${a} ${a} ${b} ${b} ${e} ${e} ${f} ${f}`
                ],
                mobile: [
                    `${a} ${a} ${b} ${b}`,
                    `${a} ${a} ${c} ${c}`,
                    `${d} ${d} ${f} ${f}`,
                    `${e} ${e} ${f} ${f}`
                ]
            },
            skip: [ i, i+1, i+2, i+3, i+4, i+5 ]
        };
        case "option_2": return {
            styles: {
                desktop: [
                    `${a} ${a} ${b} ${b} ${c} ${c} ${c} ${c}`,
                    `${a} ${a} ${d} ${d} ${e} ${e} ${f} ${f}`
                ],
                mobile: [
                    `${a} ${a} ${a} ${a}`,
                    `${b} ${b} ${d} ${d}`,
                    `${c} ${c} ${c} ${c}`,
                    `${e} ${e} ${f} ${f}`
                ]
            },
            skip: [ i, i+1, i+2, i+3, i+4, i+5 ]
        }
        default: return {
            styles: {
                desktop: [
                    `${a} ${a} ${b} ${b} ${e} ${e} ${f} ${f}`,
                    `${c} ${c} ${d} ${d} ${e} ${e} ${f} ${f}`
                ],
                mobile: [
                    `${a} ${a} ${b} ${b}`,
                    `${c} ${c} ${d} ${d}`,
                    `${e} ${e} ${e} ${e}`,
                    `${f} ${f} ${f} ${f}`
                ]
            },
            skip: [ i, i+1, i+2, i+3, i+4, i+5 ]
        }
    }
} 

export const generate5items = async (i) => {
    const a = convert(i), 
          b = convert(i+1), 
          c = convert(i+2), 
          d = convert(i+3), 
          e = convert(i+4), 
          random = randomise(3);
    switch ( random ) {
        case "option_3": return {
            styles: {
                desktop: [
                    `${a} ${a} ${a} ${a} ${b} ${b} ${d} ${d}`,
                    `${a} ${a} ${a} ${a} ${c} ${c} ${e} ${e}`
                ],
                mobile: [
                    `${a} ${a} ${a} ${a}`,
                    `${b} ${b} ${c} ${c}`,
                    `${d} ${d} ${e} ${e}`
                ]
            },
            skip: [ i, i+1, i+2, i+3, i+4 ]
        };
        case "option_2": return {
            styles: {
                desktop: [
                    `${a} ${a} ${c} ${c} ${c} ${c} ${d} ${d}`,
                    `${b} ${b} ${c} ${c} ${c} ${c} ${e} ${e}`
                ],
                mobile: [
                    `${a} ${a} ${b} ${b}`,
                    `${c} ${c} ${c} ${c}`,
                    `${d} ${d} ${e} ${e}`
                ]
            },
            skip: [ i, i+1, i+2, i+3, i+4 ]
        }
        default: return {
            styles: {
                desktop: [
                    `${a} ${a} ${a} ${a} ${b} ${b} ${d} ${d}`,
                    `${e} ${e} ${e} ${e} ${c} ${c} ${d} ${d}`
                ],
                mobile: [
                    `${a} ${a} ${a} ${a}`,
                    `${b} ${b} ${d} ${d}`,
                    `${c} ${c} ${d} ${d}`,
                    `${e} ${e} ${e} ${e}`
                ]
            },
            skip: [ i, i+1, i+2, i+3, i+4 ]
        }
    }
}

export const generate4items = async (i) => {
    const a = convert(i), 
          b = convert(i+1), 
          c = convert(i+2), 
          d = convert(i+3), 
          random = randomise(3);
    switch ( random ) {
        case "option_3": return {
            styles: {
                desktop: [
                    `${a} ${a} ${b} ${b} ${d} ${d} ${d} ${d}`,
                    `${a} ${a} ${c} ${c} ${d} ${d} ${d} ${d}`
                ],
                mobile: [
                    `${a} ${a} ${b} ${b}`,
                    `${a} ${a} ${c} ${c}`,
                    `${d} ${d} ${d} ${d}`
                ]
            },
            skip: [ i, i+1, i+2, i+3 ]
        };
        case "option_2": return {
            styles: {
                desktop: [
                    `${a} ${a} ${a} ${a} ${c} ${c} ${d} ${d}`,
                    `${b} ${b} ${b} ${b} ${c} ${c} ${d} ${d}`
                ],
                mobile: [
                    `${a} ${a} ${a} ${a}`,
                    `${b} ${b} ${b} ${b}`,
                    `${c} ${c} ${d} ${d}`
                ]
            },
            skip: [ i, i+1, i+2, i+3 ]
        }
        default: return {
            styles: {
                desktop: [
                    `${a} ${a} ${c} ${c} ${c} ${c} ${d} ${d}`,
                    `${b} ${b} ${c} ${c} ${c} ${c} ${d} ${d}`
                ],
                mobile: [
                    `${a} ${a} ${c} ${c}`,
                    `${b} ${b} ${c} ${c}`,
                    `${d} ${d} ${d} ${d}`
                ]
            },
            skip: [ i, i+1, i+2, i+3 ]
        }
    }
} 

export const generate3items = async (i) => {
    const a = convert(i), 
          b = convert(i+1), 
          c = convert(i+2), 
          random = randomise(3);
    switch ( random ) {
        case "option_3": return {
            styles: {
                desktop: [
                    `${a} ${a} ${b} ${b} ${c} ${c} ${c} ${c}`,
                ],
                mobile: [
                    `${a} ${a} ${b} ${b}`,
                    `${c} ${c} ${c} ${c}`
                ]
            },
            skip: [ i, i+1, i+2 ]
        };
        case "option_2": return {
            styles: {
                desktop: [
                    `${a} ${a} ${a} ${a} ${c} ${c} ${c} ${c}`,
                    `${b} ${b} ${b} ${b} ${c} ${c} ${c} ${c}`
                ],
                mobile: [
                    `${a} ${a} ${c} ${c}`,
                    `${b} ${b} ${c} ${c}`
                ]
            },
            skip: [ i, i+1, i+2 ]
        }
        default: return {
            styles: {
                desktop: [
                    `${a} ${a} ${a} ${a} ${b} ${b} ${b} ${b}`,
                    `${a} ${a} ${a} ${a} ${c} ${c} ${c} ${c}`
                ],
                mobile: [
                    `${a} ${a} ${b} ${b}`,
                    `${a} ${a} ${c} ${c}`
                ]
            },
            skip: [ i, i+1, i+2 ]
        }
    }
} 

export const generate2items = async (i) => {
    const a = convert(i), 
          b = convert(i+1);
    return {
        styles: {
            desktop: [
                `${a} ${a} ${a} ${a} ${b} ${b} ${b} ${b}`,
            ],
            mobile: [
                `${a} ${a} ${b} ${b}`
            ]
        },
        skip: [ i, i+1 ]
    };
} 

export const generate1item = async (i) => {
    const a = convert(i);
    return {
        styles: {
            desktop: [
                `${a} ${a} ${a} ${a} ${a} ${a} ${a} ${a}`,
            ],
            mobile: [
                `${a} ${a} ${a} ${a}`
            ]
        },
        skip: [ i ]
    };
} 



