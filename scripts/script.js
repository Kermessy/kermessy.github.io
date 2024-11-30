function startGame()
{
    document.getElementById("cover").remove();
    document.documentElement.requestFullscreen();
    updateStartScene();
}

var i_scene = 0;

var i_line;
var i_bg;
var i_music;

function updateStartScene()
{
    const scene_max = 200;

    if(i_scene >= scene_max)
    {
        console.log("updateStartScene(): scene_max reached, return");
        // possibly prepare the next scene here
        return;
    }

    switch(i_scene++)
    {
        case 0:
            i_line = 0;
            i_bg = 0;
            i_music = 0;
            break;
        case 1:
            i_line = i_line + 1;
            break;
        case 2:
            i_line = i_line + 1;
            i_bg = 1;
            break;
        case 3:
            i_line = i_line + 1;
            i_bg =  2;
            break;
        case 4:
            i_line = i_line + 1;
            i_bg = 4;
            break;
        case 5:
            i_line = i_line + 1;
            break;
        case 6:
            i_line = i_line + 1;
            i_bg = 3;
            break;
        case 7:
            i_line = i_line + 1;
            i_bg = 1;
            break;
        case 8:
            i_line = i_line + 1;
            i_bg = 2;
            break;
        case 9:
            i_line = i_line + 1;
            i_bg = 1;
            break;
        case 10:
            i_line = i_line + 1;
            i_bg = 3;
            break;
        case 11:
            i_line = i_line + 1;
            i_bg = 1;
            break;
        case 12:
            i_line = i_line + 1;
            i_bg = 3;
            break;
        case 13:
            i_line = i_line + 1;
            i_bg = 1;
            break;
        case 14:
            i_line = i_line + 1;
            i_bg = 2;
            break;
        case 15:
            i_line = i_line + 1;
            i_bg = 1;
            break;
        case 16:
            i_line = i_line + 1;
            i_bg = 3;
            break;
        case 17:
            i_line = i_line + 1;
            i_bg = 1;
            break;
        case 18:
            i_line = i_line + 1;
            break;
        case 19:
        case 20:
        case 21:
        case 22:
        case 23:
            i_line = i_line + 1;
            i_bg = 4;
            break;
        case 24:
            i_line = i_line + 1;
            i_bg = 3;
            break;
        case 25:
            i_line = i_line + 1;
            i_bg = 1;
            break;
        case 26:
            i_line = i_line + 1;
            i_bg = 2;
            break;
        case 27:
            i_line = i_line + 1;
            i_bg = 1;
            break;
        case 28:
            i_line = i_line + 1;
            i_bg = 1;
            break;
        case 29:
            i_line = i_line + 1;
            i_bg = 1;
            break;
        case 30:
            i_line = i_line + 1;
            i_bg = 1;
            break;
        case 31:
            i_line = i_line + 1;
            i_bg = 1;
            break;
        case 32:
            i_line = i_line + 1;
            i_bg = 1;
            break;
        case 33:
            i_line = i_line + 1;
            i_bg = 1;
            break;
        case 34:
            i_line = i_line + 1;
            i_bg = 1;
            break;
        case 35:
            i_line = i_line + 1;
            i_bg = 1;
            break;
        case 36:
            i_line = i_line + 1;
            i_bg = 1;
            break;
        case 37:
            i_line = i_line + 1;
            i_bg = 1;
            break;
        case 38:
            i_line = i_line + 1;
            i_bg = 1;
            break;
        case 39:
            i_line = i_line + 1;
            i_bg = 1;
            break;
        case 40:
            i_line = i_line + 1;
            i_bg = 1;
            break;
        case 41:
            i_line = i_line + 1;
            i_bg = 1;
            break;
        case 42:
            i_line = i_line + 1;
            i_bg = 1;
            break;
        case 43:
            i_line = i_line + 1;
            i_bg = 1;
            break;
        case 44:
            i_line = i_line + 1;
            i_bg = 1;
            break;
        case 45:
            i_line = i_line + 1;
            i_bg = 1;
            break;
        case 46:
            i_line = i_line + 1;
            i_bg = 1;
            break;
        case 47:
            i_line = i_line + 1;
            i_bg = 1;
            break;
        case 48:
            i_line = i_line + 1;
            i_bg = 1;
            break;
        case 49:
            i_line = i_line + 1;
            i_bg = 1;
            break;
        case 50:
            i_line = i_line + 1;
            i_bg = 1;
            break;
        case 51:
            i_line = i_line + 1;
            i_bg = 1;
            break;
        case 52:
            i_line = i_line + 1;
            i_bg = 1;
            break;
        case 53:
            i_line = i_line + 1;
            i_bg = 1;
            break;
        case 54:
            i_line = i_line + 1;
            i_bg = 1;
            break;
        case 55:
            i_line = i_line + 1;
            i_bg = 1;
            break;
        case 56:
            i_line = i_line + 1;
            i_bg = 1;
            break;
        case 57:
            i_line = i_line + 1;
            i_bg = 1;
            break;
        case 58:
            i_line = i_line + 1;
            i_bg = 1;
            break;
        case 59:
            i_line = i_line + 1;
            i_bg = 1;
            break;
        case 60:
            i_line = i_line + 1;
            i_bg = 1;
            break;
        case 61:
            i_line = i_line + 1;
            i_bg = 1;
            break;
        case 62:
            i_line = i_line + 1;
            i_bg = 1;
            break;
        case 63:
            i_line = i_line + 1;
            i_bg = 1;
            break;
        case 64:
            i_line = i_line + 1;
            i_bg = 1;
            break;
        case 65:
            i_line = i_line + 1;
            i_bg = 1;
            break;
        case 66:
            i_line = i_line + 1;
            i_bg = 1;
            break;
        case 67:
            i_line = i_line + 1;
            i_bg = 1;
            break;
        case 68:
            i_line = i_line + 1;
            i_bg = 1;
            break;
        case 69:
            i_line = i_line + 1;
            i_bg = 1;
            break;
        case 70:
            i_line = i_line + 1;
            i_bg = 1;
            break;
        case 71:
            i_line = i_line + 1;
            i_bg = 1;
            break;
        case 72:
            i_line = i_line + 1;
            i_bg = 1;
            break;
        case 73:
            i_line = i_line + 1;
            i_bg = 1;
            break;
        case 74:
            i_line = i_line + 1;
            i_bg = 1;
            break;
        case 75:
            i_line = i_line + 1;
            i_bg = 1;
            break;
        case 76:
            i_line = i_line + 1;
            i_bg = 1;
            break;
        case 77:
            i_line = i_line + 1;
            i_bg = 1;
            break;
        case 78:
            i_line = i_line + 1;
            i_bg = 1;
            break;
        case 79:
            i_line = i_line + 1;
            i_bg = 1;
            break;
        case 80:
            i_line = i_line + 1;
            i_bg = 1;
            break;
        case 81:
            i_line = i_line + 1;
            i_bg = 1;
            break;
        case 82:
            i_line = i_line + 1;
            i_bg = 1;
            break;
        case 83:
            i_line = i_line + 1;
            i_bg = 1;
            break;
        case 84:
            i_line = i_line + 1;
            i_bg = 1;
            break;
        case 85:
            i_line = i_line + 1;
            i_bg = 1;
            break;
        case 86:
            i_line = i_line + 1;
            i_bg = 1;
            break;
        case 87:
            i_line = i_line + 1;
            i_bg = 1;
            break;
        case 90:
            i_line = i_line + 1;
            i_bg = 1;
            break;
        case 91:
            i_line = i_line + 1;
            i_bg = 1;
            break;
        case 92:
            i_line = i_line + 1;
            i_bg = 1;
            break;

        case 93:
            i_line = i_line + 1;
            i_bg = 0;
            break;

        case 94:
            i_line = i_line + 1;
            i_bg = 1;
            break;
        case 95:
            i_line = i_line + 1;
            i_bg = 1;
            break;
        case 96:
            i_line = i_line + 1;
            i_bg = 1;
            break;
        case 97:
            i_line = i_line + 1;
            i_bg = 1;
            break;
        case 98:
            i_line = i_line + 1;
            i_bg = 1;
            break;
        case 99:
            i_line = i_line + 1;
            i_bg = 1;
            break;
        case 100:
            i_line = i_line + 1;
            i_bg = 1;
            break;
        case 101:
            i_line = i_line + 1;
            i_bg = 1;
            break;
        case 102:
            i_line = i_line + 1;
            i_bg = 1;
            break;
        case 103:
            i_line = i_line + 1;
            i_bg = 1;
            break;
        case 104:
            i_line = i_line + 1;
            i_bg = 0;
            break;
        case 105:
            i_line = i_line + 1;
            i_bg = 0;
            break;
        case 106:
            i_line = i_line + 1;
            i_bg = 1;
            i_music = 1;
            setTimeout(updateStartScene, 1000000);
            break;

        case 107:
            i_line = 107;
            i_bg = 1;
            break;
        case 108:
            i_line = i_line + 1;
            i_bg = 1;
            break;
        case 109:
            i_line = i_line + 1;
            i_bg = 1;
            break;
        case 110:
            i_line = i_line + 1;
            i_bg = 1;
            break;
        case 111:
            i_line = i_line + 1;
            i_bg = 1;
            break;
        case 112:
            i_line = i_line + 1;
            i_bg = 1;
            break;
        case 113:
            i_line = i_line + 1;
            i_bg = 1;
            break;
        case 114:
            i_line = i_line + 1;
            i_bg = 1;
            break;
        case 115:
            i_line = i_line + 1;
            i_bg = 1;
            break;
        case 116:
            i_line = i_line + 1;
            i_bg = 1;
            break;
        case 117:
            i_line = i_line + 1;
            i_bg = 1;
            break;
        case 118:
            i_line = i_line + 1;
            i_bg = 1;
            break;
        case 119:
            i_line = i_line + 1;
            i_bg = 1;
            break;
        case 120:
            i_line = i_line + 1;
            i_bg = 1;
            break;
        case 121:
            i_line = i_line + 1;
            i_bg = 1;
            break;
        case 122:
            i_line = i_line + 1;
            i_bg = 1;
            break;



            case 310:
                i_line = null;
                i_bg = 0;
                i_music = 0;
                setTimeout(updateStartScene, 30000);
                break;
        default:
            console.log("updateStartScene(): current i_scene unimplemented");
            break;
    }
    updateBackground();
    updateMusic();
    if (Intl.DateTimeFormat().resolvedOptions().timeZone == 'Europe/Paris') {updateLinefr();}
    else updateLine();
}

// line scripts

const textline = document.getElementById("textline");

const line_array = [
    "Have you ever felt like something was off?",
    "Have you ever felt as if you're not truly awake?",
    "It's that emptiness you feel as you walk from place to place.",
    "As if none of it matters.",
    "As if it's all just a dream.",
    "A feeling that never goes away.",
    "It follows you everywhere you go.",
    "It never lets go.",
    "Sometimes, you forget it.",
    "Not because it's gone, you're just used to it.",
    "The same way you're used to your heart beating.",
    "To your own breathing, your own movements.",
    "But when you notice, it grips you so tightly.",
    "It reminds you that you will never escape it.",
    "That slowly, but surely, every part of you will fall to it.",
    "And over time, things just seem to get stranger and stranger.",
    "Like everything is crumbling around you.",
    "It's only a matter of time.",
    "The numbness spreads.",
    "And it never stops.",
    "Maybe I'm trying to give meaning to something meaningless.",
    "Maybe I want to feel like it's not all for nothing.",
    "That there is a reason behind this.",
    "That there is something I have to do with my burden.",
    "Or perhaps I'm hoping I'm not alone.",
    "By thinking about all of this, by hearing my own words...",
    "They start to feel familiar.",
    "It feels so casual now.",
    "And I often wonder if everyone thinks like this.",
    "Well, I wouldn't know.",
    "It's not like I've asked anyone.",
    "How would you even begin discussing this?",
    "What would you say?",
    "Besides, who would you ask?",
    "Noone seems to feel the way I do.",
    "I can't find any common ground to stand on.",
    "About these dreams, these nightmares, or this awful feeling.",
    "It feels hopeless.",
    "My way of experiencing this world, my thoughts, or my feelings.",
    "None of these will ever be brought to light.",
    "Nobody will ever know what it's like to be me.",
    "I will continue to suffer, and then, I'll die.",
    "I will disappear the same way I was brought here.",
    "Without a sound, not a single cry.",
    "And I can't complain about it.",
    "Even though I so desperately crave another way, I can't.",
    "How selfish would it be to ask for others to remember you?",
    "What have I done to be remembered for?",
    "What have I ever done to deserve to be mourned?",
    "Was I really good to people?",
    "I can't remember stumbling upon any successes on my way here, either.",
    "Ah, am I being negative?",
    "Of course I am.",
    "But how could I not be?",
    "I wake up every day unsure of whether or not I truly did wake up.",
    '"I think, therefore I am."',
    "I mean, I do a lot of thinking, for sure.",
    "But am I?",
    "I don't even have the luxury of feeling alive.",
    "Hell, I feel a stronger sense of being in my nightmares.",
    "Being surrounded by faceless monsters feels better than breathing this air.",
    "My body doesn't feel like it belongs to me anymore.",
    "Has it ever?",
    "Is this normal?",
    "And yet again, I come back to this question.",
    "The answer is so simple, though.",
    '"I will never know."',
    "I know that.",
    "I know that well.",
    "I know it way too well.",
    "I know it way, way, way too well.",
    "So why can't I stop asking this question?",
    "Am I hoping the answer will change?",
    "I've come to a point where I wish I could go insane.",
    "I don't want to face reality anymore.",
    "It's been this way for years, now.",
    "I wish I could rely on something, anything.",
    "Something like faith, something like promises, or white lies.",
    "But I can't help it.",
    "Faith isn't something you choose.",
    "I can't change reality, and I can't change myself either.",
    "I wish someone could tell me these two words:",
    '"I understand."',
    "I want others to understand me and I want to understand them too.",
    "I want it more than anything else.",
    "I want to speak, I want to say something, and be understood.",
    "I want to find someone like me.",
    "I need it.",
    "But it won't happen, will it?",
    "You don't just hope things into existence.",
    "You have to work for them.",
    "Yeah, work for them, sure.",
    "How do you work for that?",
    "I should just stop.",
    "I need to stop thinking.",
    "It feels horrible.",
    "Like opening my eyes to stare directly into the sun.",
    "Why bother?",
    "I can't.",
    "You can't be someone else.",
    "You can only ever be yourself.",
    "It's just how it is.",
    "It's cruel, but it's just how it is.",
    "It's depressing, but it's just how it is.",
    "Isn't it?",

// Fade out

    "",

// Alarm wakes MC up

    "God, I feel AWFUL.",
    "Wait, I'm gonna be late-",
    "Hold on.",
    "What time is it?",
    "Hard to tell with the blinds closed.",
    "Ah.",
    "Right.",
    "I guess I took a nap.",
    "Yeah.",
    "Wait, is it Sunday or Saturday, again?",

    // MC checks their phone

    "Okay, that makes sense.",
    "School again?",

    // Walk around house

        // MC checks kitchen
        "It's clean. Guess there must've been guests.",
        // MC checks living room
        "",
        // MC checks their phone
    // Walk outside

    // End of day

    "Will you help me?",
];


const linefr_array = [
    "Vous vous êtes déja demandé si quelque chose n'allait pas?",
    "Comme si vous n'étiez pas vraiment réveillé?",
    "C'est ce vide qu'on ressent en allant du point A au point B.",
    "Comme si tout n'était rien.",
    "Rien qu'un rêve.",
    "Une sensation qui ne s'en va jamais.",
    "Elle te suit, partout où tu vas.",
    "Et elle ne lache pas.",
    "Des fois, on l'oublie.",
    "Pas qu'elle soit partie, on s'y habitue seulement.",
    "De la même façon qu'on s'habitue aux battements de son coeur.",
    "À notre respiration, nos propres mouvements.",
    "Mais quand on s'en rend compte, c'est terrifiant.",
    "C'est un rappel qu'on n'y échappera jamais.",
    "Que lentement, mais sûrement, chaque partie de nous y tombera.",
    "Et au fur et à mesure, les choses paraissent devenir de plus en plus étrange.",
    "Comme si tout s'écroulait autour de toi.",
    "C'est qu'une question de temps.",
    "Cet ennui total s'étend.",
    "Et ne s'arrête jamais.",
    "Peut-être que je cherche un sens à quelque chose qui n'en a pas.",
    "Peut-être que je veux croire que tout ça n'est pas pour rien.",
    "Qu'il y a une raison à tout ça.",
    "Qu'il y a quelque chose que je dois faire avec ce fardeau.",
    "Ou peut-être que j'éspère juste ne pas être seul.",
    "En pensant à tout ça, en entendant mes propres mots...",
    "Ils semblent plus familiers.",
    "C'est si normal, maintenant.",
    "Et je me demande souvent si tout le monde pense pareil.",
    "Enfin, je pourrais pas savoir.",
    "C'est pas comme si j'avais demandé à qui que ce soit.",
    "Comment commencer une conversation sur ce sujet?",
    "Qu'est-ce que je devrais dire?",
    "Et puis, à qui demander?",
    "Personne n'a l'air de sentir ce que je sens.",
    "Il n'y a pas de points communs à relier.",
    "À propos de ces rêves, de ces cauchemars, ou même mes sentiments.",
    "C'est désespérant.",
    "Ma façon de voir le monde, de vivre, mes pensées, et mes émotions.",
    "Aucunes ne seront mises à la lumière du jour.",
    "Personne ne saura jamais ce que c'était d'être moi.",
    "Je vais continuer de souffrir, et après, je vais mourir.",
    "Je vais disparaître de ce monde de la même façon que j'y suis entré.",
    "Sans un seul son, pas même un pleur.",
    "Et je ne peux pas me plaindre.",
    "Même si je voudrais tant pouvoir changer les chose, je ne peux pas.",
    "Est-ce que ça ne serait pas égoïste d'éxiger qu'on se souvienne de nous?",
    "Qu'est-ce que j'ai fait pour qu'on se souvienne de moi?",
    "Qu'est-ce que j'ai fait pour mériter d'être pleuré?",
    "Est-ce que j'ai vraiment été bon envers les autres?",
    "Je ne me souviens pas avoir rencontré du succès sur mon chemin, non plus.",
    "Ah, est-ce que je suis pessimiste?",
    "Évidemment.",
    "Comment ne pas l'être?",
    "Je me lève chaque jour sans même la certitude de m'être vraiment levé.",
    '«Je pense, donc je suis.»',
    "Bah, je pense beaucoup, ça, c'est sûr.",
    "Mais est-ce que je suis?",
    "C'est drôle, mais je n'ai même pas le privilège de me sentir en vie.",
    "Sérieusement, je me sens plus à l'aise dans un cauchemar.",
    "Être autour de monstres défigurés est toujours mieux que devoir respirer cet air.",
    "Mon corps ne me semble plus mien.",
    "L'a-t-il un jour été?",
    "Est-ce que c'est normal?",
    "Encore une fois, je reviens à cette question.",
    "La réponse est pourtant si simple.",
    '«Je ne le saurais jamais.»',
    "Oui, je sais.",
    "Je sais bien.",
    "Je sais très bien.",
    "Je le sais très, trop, tellement bien.",
    "Alors pourquoi je continue d'y penser?",
    "Est-ce que j'éspère que la réponse va changer?",
    "J'en suis au point d'espérer perdre la raison.",
    "Je ne veux plus faire face à la réalité.",
    "Ça fait déjà des années que ça dure.",
    "J'aimerais pouvoir m'accrocher à quelque chose, n'importe quoi.",
    "La foi, les promesses, ou les jolis mensonges, par exemple.",
    "Mais je n'y peux rien.",
    "La foi n'est pas quelque chose qu'on choisit.",
    "Je ne peux changer ni la réalité, ni moi-même.",
    "Si seulement quelqu'un pouvais me dire ces deux mots:",
    '«Je comprends.»',
    "Je veux qu'on me comprenne, et comprendre en retour.",
    "Je le veux plus que tout au monde.",
    "Je veux parler, je veux dire quelque chose, et qu'on le comprenne.",
    "Je veux trouver quelqu'un comme moi.",
    "J'en ai besoin.",
    "Mais ça n'arrivera pas, hein?",
    "L'espoir ne fait pas bouger les choses par magie.",
    "Faut toujours travailler pour avoir.",
    "Oui, travailler pour avoir, bien sûr.",
    "Mais comment travailler pour avoir ça?",
    "Je dois me calmer.",
    "Penser ne sert à rien.",
    "C'est horrible.",
    "Comme si j'ouvrais mes yeux seulement pour regarder le soleil.",
    "Pourquoi faire?",
    "Je ne peux pas.",
    "On ne peux pas être quelqu'un d'autre.",
    "Tu ne seras jamais que toi-même.",
    "C'est juste comme ça.",
    "C'est cruel, mais c'est comme ça.",
    "C'est déprimant, mais c'est comme ça.",
    "Non?",

// Fade out

    "",

// Alarm wakes MC up

    "Oh là là, ça va vraiment pas.",
    "Attends, je vais être en retard-",
    "Ah, mais.",
    "Il est quelle heure?",
    "Dur à savoir avec les rideaux fermés.",
    "Ah.",
    "C'est vrai.",
    "J'ai du faire une sieste.",
    "Ouais.",
    "Au fait, c'est samedi ou dimanche, déjà?",

    // MC checks their phone

    "Ok, je vois.",

    // Walk around house

        // MC checks kitchen
        "It's clean. Guess there must've been guests.",
        // MC checks living room
        "",
        // MC checks their phone
    // Walk outside

    // End of day

    "Will you help me?"
];

var current_line;

var line_interval = null;
var i_text;

function updateLine()
{
    if(current_line == i_line)
    {
        return;
    }
    else
    {
        current_line = i_line;
    }

    if(current_line == null)
    {
        if(line_interval != null)
        {
                clearInterval(line_interval);
                line_interval = null;
        }
        textline.innerHTML = "";
        return;
    }

    if (current_line <= line_array.length)
    {
        if(line_interval != null)
        {
            clearInterval(line_interval);
            line_interval = null;
        }

        textline.innerHTML = "";
        i_text = 0;

        line_interval = setInterval(lineAddNextLetter, 40, line_array[current_line]);
    }
    else
    {
        console.log("updateLine(): line_array.length reached, return");
        return;
    }
}

function updateLinefr()
{
    if(current_line == i_line)
    {
        return;
    }
    else
    {
        current_line = i_line;
    }

    if(current_line == null)
    {
        if(line_interval != null)
        {
                clearInterval(line_interval);
                line_interval = null;
        }
        textline.innerHTML = "";
        return;
    }

    if (current_line <= linefr_array.length)
    {
        if(line_interval != null)
        {
            clearInterval(line_interval);
            line_interval = null;
        }

        textline.innerHTML = "";
        i_text = 0;

        line_interval = setInterval(lineAddNextLetter, 40, linefr_array[current_line]);
    }
    else
    {
        console.log("updateLine(): linefr_array.length reached, return");
        return;
    }
}

function lineAddNextLetter(text)
{
    if(i_text < text.length)
    {
        textline.innerHTML += text[i_text];
        i_text++;
    }
    else
    {
        clearInterval(line_interval);
        line_interval = null;
    }
}

// background scripts

const bg_array = [
    "url('images/ysky.gif')",
    "url('images/rsky.gif')",
    "url('images/bsky.gif')",
    "url('images/gsky.gif')",
    "url('images/cover.gif')",
]

var current_bg;

function updateBackground()
{
    if(current_bg == i_bg)
    {
        return;
    }
    else
    {
        current_bg = i_bg;
    }

    document.body.style.backgroundImage = bg_array[current_bg];
}

// music scripts

const music_array = [
    'audio/webpremonition.ogg',
    'audio/nothing.mp3',
]

var music = null;

var current_music;

function updateMusic()
{
    if(current_music == i_music)
    {
        return;
    }
    else
    {
        current_music = i_music;
    }

    if(music)
    {
        music.pause();
    }

    switch(current_music)
    {
        case 0:
            music = new Audio(music_array[current_music]);
            music.loop = true;
            music.play();
            break;
        case 1:
            music = new Audio(music_array[current_music]);
            music.loop = true;
            music.play();
            break;
        case 2:
            music = new Audio(music_array[current_music]);
            music.loop = true;
            music.play();
            break;
        default:
            console.log("updateMusic(): current_music unimplemented");
            break;
    }
}