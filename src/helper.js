// Obtener la diferencia de años
export function getDifferenceYear(year) {
    return new Date().getFullYear() - year;
}

// Calcular el total a pagar segun la marca
export function calculateBrand(brand) {
    let increase;

    switch(brand){
        case 'european':
            increase = 1.3;
            break;
        case 'american':
            increase = 1.15;
            break;
        case 'asian':
            increase = 1.05;
            break;
        default:
            break;
    }

    return increase;
}

// Calcular el tipo de seguro
export function getPlan(plan) {
    return (plan === 'basic') ? 1.2 : 1.5;
}

// Muestra primera letra en mayúscula
export function firstCapital(texts) {
    return texts.charAt(0).toUpperCase() + texts.slice(1);
}

// Treducir la marca
export function translateBrand(brand) {
    let translate;

    switch(brand){
        case 'european':
            translate = 'europeo';
            break;
        case 'american':
            translate = 'americano';
            break;
        case 'asian':
            translate = 'asiático';
            break;
        default:
            break;
    }
    
    return translate;
}

// Treducir la Plan
export function translatePlan(plan) {
    let translate;

    switch(plan){
        case 'basic':
            translate = 'básico';
            break;
        case 'full':
            translate = 'completo';
            break;
        default:
            break;
    }
    
    return translate;
}
