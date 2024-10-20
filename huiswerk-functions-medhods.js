// Functie om de domeinnaam uit een emailadres te halen

function getEmailDomain(email) {
    if (typeof email !== 'string') {
        throw new Error("Input moet een string zijn.");
    }
    const atIndex = email.indexOf('@');
    if (atIndex === -1) {
        throw new Error("Ongeldig emailadres: '@' ontbreekt.");
    }
    return email.slice(atIndex + 1);
}

try {
    console.log(getEmailDomain("n.eeken@novi-education.nl")); // Verwachte uitkomst: novi-education.nl
    console.log(getEmailDomain("t.mellink@novi.nl")); // Verwachte uitkomst: novi.nl
    console.log(getEmailDomain("a.wiersma@outlook.com")); // Verwachte uitkomst: outlook.com
    console.log(getEmailDomain("invalid-email")); // Fout: Ongeldig emailadres: '@' ontbreekt.
} catch (error) {
    console.error(error.message);
}

// Functie om het type email te bepalen

function typeOfEmail(email) {
    if (typeof email !== 'string') {
        throw new Error("Input moet een string zijn.");
    }
    const domain = getEmailDomain(email);
    if (domain.endsWith("novi-education.nl")) {
        return "Student";
    } else if (domain.endsWith("novi.nl")) {
        return "Medewerker";
    } else {
        return "Extern";
    }
}

try {
    console.log(typeOfEmail("n.eeken@novi-education.nl")); // Verwachte uitkomst: Student
    console.log(typeOfEmail("t.mellink@novi.nl")); // Verwachte uitkomst: Medewerker
    console.log(typeOfEmail("novi.nlaapjesk@outlook.com")); // Verwachte uitkomst: Extern
    console.log(typeOfEmail("a.wiersma@outlook.com")); // Verwachte uitkomst: Extern
    console.log(typeOfEmail(12345)); // Fout: Input moet een string zijn.
} catch (error) {
    console.error(error.message);
}

// Functie om de geldigheid van een emailadres te controleren

function checkEmailValidity(email) {
    if (typeof email !== 'string') {
        throw new Error("Input moet een string zijn.");
    }
    const hasAt = email.includes('@');
    const hasComma = email.includes(',');
    const endsWithDot = email.endsWith('.');
    return hasAt && !hasComma && !endsWithDot;
}

try {
    console.log(checkEmailValidity("n.eeken@novi.nl")); // Verwachte uitkomst: true
    console.log(checkEmailValidity("tessmellink@novi.nl")); // Verwachte uitkomst: true
    console.log(checkEmailValidity("n.eekenanovi.nl")); // Verwachte uitkomst: false
    console.log(checkEmailValidity("n.eeken@novinl.")); // Verwachte uitkomst: false
    console.log(checkEmailValidity("tessmellink@novi,nl")); // Verwachte uitkomst: false
    console.log(checkEmailValidity(["not", "a", "string"])); // Fout: Input moet een string zijn.
} catch (error) {
    console.error(error.message);
}
