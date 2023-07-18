import { db } from "../../db.ts";

export const six_degree_achievements_creation_query = /* surrealql */`
    
CREATE achievement:Godwin       CONTENT { game_tag: game_tag:six_degree , difficulty: achievement_difficulty:secret };
CREATE achievement:AbsoluteZero CONTENT { game_tag: game_tag:six_degree , difficulty: achievement_difficulty:easy };
CREATE achievement:Hot          CONTENT { game_tag: game_tag:six_degree , difficulty: achievement_difficulty:medium };
CREATE achievement:OverHeat     CONTENT { game_tag: game_tag:six_degree , difficulty: achievement_difficulty:hard };
CREATE achievement:Over9000     CONTENT { game_tag: game_tag:six_degree , difficulty: achievement_difficulty:medium };


RELATE achievement:Godwin->achievement_content->lang:en CONTENT {
    title: "Godwin's law.",
    description: "Make a query with Hitler or the Holocaust as the end page."
};
RELATE achievement:Godwin->achievement_content->lang:fr CONTENT {
    title: "Point Godwin.",
    description: "Faites une requête avec comme page de fin Hitler ou la Shoah."
};

RELATE achievement:AbsoluteZero->achievement_content->lang:en CONTENT {
    title: "0° Kelvin! Entropy is a lie.",
    description: "Find a query of 0° (I let you find what that means)."
};
RELATE achievement:AbsoluteZero->achievement_content->lang:fr CONTENT {
    title: "0° Kelvin! L'entropie n'est qu'un mensonge.",
    description: "Trouver une requête de 0° (je vous laisse trouver ce que cela signifie)."
};

RELATE achievement:Hot->achievement_content->lang:en CONTENT {
    title: "6° of seperation reached! Can it be hotter?",
    description: "Find a query of 6° (start and end pages are separated by 6 links)."
};
RELATE achievement:Hot->achievement_content->lang:fr CONTENT {
    title: "6° de seperation atteint! Peut on faire plus chaud?",
    description: "Trouver une requête de 6° (les pages de début et de fin sont séparé de 6 liens)."
};

RELATE achievement:OverHeat->achievement_content->lang:en CONTENT {
    title: "OVERHEAT! You broke the theory.",
    description: "Find a query of at least 7° (start and end pages are separated by at least 7 links)."
};
RELATE achievement:OverHeat->achievement_content->lang:fr CONTENT {
    title: "SURCHAUFFE! Vous avez enfreint la théorie.",
    description: "Trouver une requête de au moins 7° (les pages de début et de fin sont séparé de au moins 7 liens)."
};

RELATE achievement:Over9000->achievement_content->lang:en CONTENT {
    title: "It's OVER 9000!",
    description: "Get over 8000 paths in 1 query (No mistake here. The original version in japanese say 8000. The english version mistranslated it)."
};
RELATE achievement:Over9000->achievement_content->lang:fr CONTENT {
    title: "Largement au-delà de 8000!",
    description: "Obtenez plus de 8000 chemins en une requête."
};

-- CREATE achievement:firstDaily     CONTENT { game_tag: game_tag:daily , difficulty: achievement_difficulty:easy };

-- RELATE achievement:firstDaily->achievement_content->lang:en CONTENT {
--     title: "Addiction just began!",
--     description: "Finish your first daily challenge."
-- };
-- RELATE achievement:firstDaily->achievement_content->lang:fr CONTENT {
--     title: "L'addiction ne fait que commencer!",
--     description: "Finir son premier défi quotidien."
-- };

`;


// await db.query(six_degree_achievements_creation_query).then(console.log);