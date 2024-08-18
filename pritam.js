document.addEventListener('DOMContentLoaded', (event) => {
    // Array of songs
    const songs = [
        {
            title: "Channa Mereya",
            src: "https://raag.fm/files/mp3/128/Hindi-Singles/2742941/Channa%20Mereya%20(Ae%20Dil%20Hai%20Mushkil)%20-%20(Raag.Fm).mp3",
        },
        {
            title: "Channa Mereya",
            src: "https://raag.fm/files/mp3/128/Hindi-Singles/2742941/Channa%20Mereya%20(Ae%20Dil%20Hai%20Mushkil)%20-%20(Raag.Fm).mp3",
        },
        {
            title: "Ae Dil Hai Mushkil (Title Track)",
            src: "https://raag.fm/files/mp3/128/Hindi/2597301/Ae%20Dil%20Hai%20Mushkil%20Title%20Track%20-%20(Raag.Fm).mp3",
        },
        {
            title: "Phir Le Aya Dil",
            src: "https://raag.fm/files/mp3/128/Hindi/1062298/Phir%20Le%20Aya%20Dil%20(Reprise)%20-%20(Raag.Fm).mp3",
        },
        {
            title: "Bheegi Si Bhaagi Si",
            src: "https://raag.fm/files/mp3/128/Hindi/1245022/Bheegi%20Si%20Bhaagi%20Si%20(Raajneeti)%20-%20(Raag.Fm).mp3",
        },
        {
            title: "Party On My Mind (From Race 2)",
            src: "https://raag.fm/files/mp3/128/Hindi/1104219/Party%20On%20My%20Mind%20-%20(Raag.Fm).mp3",
        },
        {
            title: "Tu Hi Haqeeqat",
            src: "https://raag.fm/files/mp3/128/Hindi/10984485/Tu%20Hi%20Haqeeqat%20(Tum%20Mile)%20-%20(Raag.Fm).mp3",
        },
        {
            title: "Bekhayali",
            src: "https://raag.fm/files/mp3/128/Hindi-Singles/15070/Bekhayali%20(Kabir%20Singh)%20-%20(Raag.Fm).mp3",
        },
        {
            title: "Tera Yaar Hoon Main",
            src: "https://raag.fm/files/mp3/128/Hindi-Singles/14259/Tera%20Yaar%20Hoon%20Main-Remix%20-%20(Raag.Fm).mp3",
        },
        {
            title: "Phir Bhi Tumko Chaahunga",
            src: "https://raag.fm/files/mp3/128/Hindi/10601320/Phir%20Bhi%20Tumko%20Chaahunga%20-%20(Raag.Fm).mp3",
        },
        {
            title: "Gerua",
            src: "https://raag.fm/files/mp3/128/Hindi/1629673/Gerua%20-%20(Raag.Fm).mp3",
        },
        {
            title: "Tum Hi Ho",
            src: "https://raag.fm/files/mp3/128/Hindi/1139549/Tum%20Hi%20Ho%20-%20(Raag.Fm).mp3",
        },
        {
            title: "Jai Ho",
            src: "https://raag.fm/files/mp3/128/Hindi/1049174/Jai%20Ho%20-%20(Raag.Fm).mp3",
        },
        {
            title: "Chaiyya Chaiyya",
            src: "https://raag.fm/files/mp3/128/Hindi/1025683/Chaiyya%20Chaiyya%20-%20(Raag.Fm).mp3",
        },
        {
            title: "Tum Tak",
            src: "https://raag.fm/files/mp3/128/Hindi/1141010/Tum%20Tak%20-%20(Raag.Fm).mp3",
        },
        {
            title: "Tere Bina",
            src: "https://raag.fm/files/mp3/128/Hindi/1022758/Tere%20Bina%20-%20(Raag.Fm).mp3",
        },
        {
            title: "Kun Faya Kun",
            src: "https://raag.fm/files/mp3/128/Hindi/1725915/Kun%20Faaya%20Kun%20-%20(Raag.Fm).mp3",
        },
        {
            title: "Urvashi Urvashi",
            src: "https://raag.fm/files/mp3/128/Hindi/1030440/Urvashi%20Urvashi%20-%20(Raag.Fm).mp3",
        },
        {
            title: "Kaise Hua",
            src: "https://raag.fm/files/mp3/128/Hindi-Singles/15256/Kaise%20Hua%20(Kabir%20Singh)%20-%20(Raag.Fm).mp3",
        },
        {
            title: "Manjha",
            src: "https://raag.fm/files/mp3/128/Punjabi/2288692/Manjha%20-%20(Raag.Fm).mp3",
        },
        {
            title: "Aaj Bhi",
            src: "https://raag.fm/files/mp3/128/Hindi-Singles/17747/Aaj%20Bhi%20-%20(Raag.Fm).mp3",
        },
        {
            title: "Veere",
            src: "https://raag.fm/files/mp3/128/Hindi/1215558/Touch%20My%20Body%20-%20(Raag.Fm).mp3",
        },
        {
            title: "Sajna Ve",
            src: "https://raag.fm/files/mp3/128/Hindi/1183979/Sajna%20Ve%20-%20(Raag.Fm).mp3",
        },{
            title: "Nai Lagda",
            src: "https://raag.fm/files/mp3/128/Hindi/1025659/Dil%20Nai%20Lagda%20-%20(Raag.Fm).mp3",
        },{
            title: "Why This Kolaveri Di",
            src: "https://raag.fm/files/mp3/128/Hindi/1017242/Why%20This%20Kolaveri%20Di%20(The%20Soup%20Of%20Love)%20-%20(Raag.Fm).mp3",
        },
        {
            title: "Kaun Hoyega",
            src: "https://raag.fm/files/mp3/128/Punjabi/14511/Kaun%20Hoyega%20-%20(Raag.Fm).mp3",
        },
        {
            title: "Mann Bharrya",
            src: "https://raag.fm/files/mp3/128/Punjabi-Singles/10444685/Mann%20Bharrya%20-%20(Raag.Fm).mp3",
        },
        {
            title: "Baarish Ki Jaaye",
            src: "https://raag.fm/files/mp3/128/Punjabi-Singles/20407/Baarish%20Ki%20Jaaye%20-%20(Raag.Fm).mp3",
        },
        {
            title: "12 Saal",
            src: "https://raag.fm/files/mp3/128/Punjabi/2288513/12%20Saal%20(Original%20Edit)%20-%20(Raag.Fm).mp3",
        },
        {
            title: "Dholna",
            src: "https://raag.fm/files/mp3/128/Hindi/1142560/Dholna%20-%20(Raag.Fm).mp3",
        },
        {
            title: "Genda Phool",
            src: "https://raag.fm/files/mp3/128/Punjabi-Singles/17630/Genda%20Phool%20Full%20-%20(Raag.Fm).mp3",
        },
        {
            title: "DJ Waley Babu",
            src: "https://raag.fm/files/mp3/128/Punjabi/1772806/Dj%20Waley%20Babu%20-%20(Raag.Fm).mp3",
        },
        {
            title: "Paagal",
            src: "https://raag.fm/files/mp3/128/Punjabi-Singles/15499/Paagal%20-%20(Raag.Fm).mp3",
        },
        {
            title: "Mercy",
            src: "https://raag.fm/files/mp3/128/Punjabi/14444/Mercy%20-%20(Raag.Fm).mp3",
        },
        {
            title: "Proper Patola",
            src: "https://raag.fm/files/mp3/128/Punjabi-Singles/3170503/Proper%20Patola%20-%20(Raag.Fm).mp3",
        },{
            title: "Abhi Toh Party Shuru Hui Hai",
            src: "https://raag.fm/files/mp3/128/Hindi/10958901/Abhi%20Toh%20Party%20Shuru%20Hui%20Hai%20(Khoobsurat)%20-%20(Raag.Fm).mp3",
        },
         
    ];
    
    // Current song index
    let currentSongIndex = -1;

    // Get the audio element and current song display element
    const audioPlayer = document.getElementById('audioPlayer');
    const currentSongDisplay = document.getElementById('songname');

    // Function to load and play a song
    window.playSong = function(index) {
        if (index <= 0 || index >= songs.length) {
            console.error("Invalid song index");
            return;
        }
        currentSongIndex = index;
        audioPlayer.src = songs[index].src;
        currentSongDisplay.textContent = `Now playing: ${songs[index].title}`;
        document.getElementById('Image').src = 'paused.svg';
        audioPlayer.play();
    }

    // Function to resume playing the current song
    window.playAudio = function() {
        if (currentSongIndex >= 0) {

            if(audioPlayer.paused){
                audioPlayer.play();
        
                document.getElementById('Image').src = 'paused.svg';
            }else{
                audioPlayer.pause();
                document.getElementById('Image').src = 'play.svg';
            }
        } else {
            console.error("No song selected");
        }
    }

    // Function to pause the audio
    window.pauseAudio = function() {
        
        audioPlayer.pause();
    }

    // Function to stop the audio
    window.stopAudio = function() {
        audioPlayer.pause();
        audioPlayer.currentTime = 0;
    }

    // Function to play the previous song
    window.prevSong = function() {
        if (currentSongIndex > 0) {
            currentSongIndex--;
        } else {
            currentSongIndex = songs.length - 1;
        }
        playSong(currentSongIndex);
    }

    // Function to play the next song
    window.nextSong = function() {
        if (currentSongIndex < songs.length - 1) {
            currentSongIndex++;
        } else {
            currentSongIndex = 0;
        }
        playSong(currentSongIndex);
    }
});
