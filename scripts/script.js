// game start scripts

function startGame()
{
    document.getElementById("cover").remove();
    updateStartScene();
}

// Scene scripts

var i_scene = 0;

var i_line;
var i_bg;
var i_music;

// this is the function for one scene, currently, the only scene. it's trivial to implement more scenes,
// each of them setting i_line, i_bg, etc. then calling the child functions 'updateLine()', updateBackground(), etc.
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
        case 18:
            i_line = i_line + 1;
            break;

        case 19:
            i_line = i_line + 1;
            i_bg = 4;
            break;
        case 20:
            i_line = i_line + 1;
            i_bg = 2;
            break;
        case 21:
            i_line = i_line + 1;
            break;
        case 22:
            i_line = i_line + 1;
            break;
        case 23:
            i_line = i_line + 1;
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
            setTimeout(updateStartScene, 10000);
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

    updateLine();
    updateBackground();
    updateMusic();
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
    "I can't remember stumbling upon any successes on my way here.",
    "Am I being negative?",
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

    "Will you help me?",
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