// ===== KONFIGURASI UTAMA & KARAKTER =====
const CONFIG={
  title:["TEKNIK KONTROL","MEKATRONIKA"],
  tagline:"Belajar Rangkaian Logika,<br>Menuju Masa Depan yang Lebih Baik",
  backgrounds:{menu:"assets/backgrounds/menu.png",materi:"assets/backgrounds/materi.png",simulasi:"assets/backgrounds/simulasi.png",latihan:"assets/backgrounds/latihan.png"},
  // Isi path file (mp3/ogg) untuk mengganti suara sintetis. null = pakai placeholder.
  audio:{
    bgm:{menu:null,materi:null,simulasi:null,latihan:null},
    sfx:{hover:null,click:null,transition:null,correct:null,wrong:null,talk:null,toggle:null}
  },
  knowledge:{max:100,tiers:{mid:30,high:70}},
  rewards:{simCombo:3,simComplete:8,play:1,materiFinish:6},
  typeSpeed:28
};
// Sprite dicari di: path + ekspresi + "." + ext. Ekspresi yang file-nya belum ada otomatis jatuh ke normal.png
const CHARACTERS={
  alice:{name:"Alice",role:"Teman Masa Kecil",color:"#d6457f",path:"assets/characters/alice/",ext:"png",expressions:["normal","happy","excited","surprised","thinking"]},
  eve:{name:"Eve",role:"Teman Sekelas",color:"#1f8a7a",path:"assets/characters/eve/",ext:"png",expressions:["normal","shy","worried","surprised","happy","embarrassed"]},
  teacher:{name:"Teacher",role:"Guru",color:"#2c4aa8",path:"assets/characters/teacher/",ext:"png",expressions:["normal","explaining","serious","smile","surprised","encouraging"]}
};
