

const audio = document.getElementById("audio");
const playlist = [
    { title: "Kya kro ge", src: "https://raag.fm/files/mp3/128/Hindi-Singles/24844/Kya%20Loge%20Tum%20-%20(Raag.Fm).mp3" },
        { title: "Sab kuch from MOH", src: "https://raag.fm/files/mp3/128/Punjabi-Singles/23459/Sab%20Kuchh%20From%20Moh%20-%20(Raag.Fm).mp3" },
        { title: "Hamare adhuri khahani ", src: "https://raag.fm/files/mp3/128/Hindi/13032/Hamari%20Adhuri%20Kahani%20-%20(Raag.Fm).mp3" },
        { title: "Kesariya", src: "https://raag.fm/files/mp3/128/Hindi-Singles/23303/Kesariya%20(Brahmastra)%20-%20(Raag.Fm).mp3" },
        { title: "Chaamak chalo", src: "https://raag.fm/files/mp3/128/Hindi/1044026/Chammak%20Challo%20-%20(Raag.Fm).mp3" },
        { title: "haai Garmi", src: "https://raag.fm/files/mp3/128/Hindi-Singles/17138/Garmi%20(Street%20Dancer%203D)%20-%20(Raag.Fm).mp3" },
        { title: "Hanuman chalisha ", src: "https://raag.fm/files/mp3/128/Hindi/10588243/Hanuman%20Chalisa%20-%20(Raag.Fm).mp3" },
        { title: "Tum hi ho [asshique -2]", src: "https://raag.fm/files/mp3/128/Hindi/1139549/Tum%20Hi%20Ho%20-%20(Raag.Fm).mp3" },
        { title: "kalstaar ", src: "https://raag.fm/files/mp3/128/Punjabi-Singles/25527/Kalaastar%20-%20(Raag.Fm).mp3" },
        { title: "desi kalakar", src: "https://raag.fm/files/mp3/128/Hindi/1195833/Desi%20Kalakaar%20-%20(Raag.Fm).mp3" },
];
let currentTrack = 0;

function loadTrack(index) {
    audio.src = playlist[index].src;
    audio.load();
    document.getElementById("songname").innerHTML = playlist[index].title;
}
function playMusic(index) {
    loadTrack(index);
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}
function playPause() {
    if (audio.paused) {
        audio.play();
        document.getElementById("Image").src = "paused.svg"; // Update with your pause button image
    } else {
        audio.pause();
        document.getElementById("Image").src = "play.svg"; // Update with your play button image
    }
}

function prevTrack() {
    currentTrack = (currentTrack - 1 + playlist.length) % playlist.length;
    loadTrack(currentTrack);
    if (!audio.paused) {
        audio.play();
    }
    document.getElementById("playpausebtn").src = "pause.svg"; // Update with your pause button image
}

function nextTrack() {
    currentTrack = (currentTrack + 1) % playlist.length;
    loadTrack(currentTrack);
    if (!audio.paused) {
        audio.play();
    }
    document.getElementById("playpausebtn").src = "pause.svg"; // Update with your pause button image
}

// Load the first track initially
loadTrack(currentTrack);
