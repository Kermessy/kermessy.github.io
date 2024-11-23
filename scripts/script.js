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
    const scene_max = 18;

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
            i_bg = 0;
            break;
        case 7:
            i_line = i_line + 1;
            i_bg = 5;
            break;
        case 8:
            i_line = i_line + 1;
            i_bg = 5;
            break;
        case 9:
            i_line = i_line + 1;
            i_bg = 5;
            break;
        case 10:
            i_line = i_line + 1;
            i_bg = 5;
            break;
        case 11:
            i_line = i_line + 1;
            i_bg = 0;
            break;
        case 12:
            i_line = i_line + 1;
            i_bg = 0;
            break;
        case 13:
            i_line = i_line + 1;
            i_bg = 0;
            break;
        case 14:
            i_line = i_line + 1;
            i_bg = 0;
            break;
        case 15:
            i_line = i_line + 1;
            i_bg = 0;
            break;
        case 16:
            i_line = i_line + 1;
            i_bg = 0;
            break;
        case 17:
            i_line = i_line + 1;
            i_bg = 0;
            break;

        case 18:
            i_line = null;
            i_bg = 0;
            i_music = 0;
            setTimeout(updateStartScene, 10500);
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
    "But when you notice, it clings onto you.",
    ""
    
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
    "url('images/lake.gif')",
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
    'audio/webpremonition.ogg',
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