// ===== MATERI ===== visual: "none" | "widget" | "table"; labels = nama input pada contoh; reward = Knowledge (sekali per slide)
const MATERIALS={and:[
 {title:"Apa itu Gerbang AND?",text:"Gerbang AND adalah gerbang logika dasar. Outputnya bernilai <b>1</b> hanya jika <b>semua</b> inputnya bernilai 1.",visual:"none",reward:2},
 {title:"Simbol Gerbang AND",text:"Simbolnya berbentuk huruf D: dua input (A, B) di kiri dan satu output (Y) di kanan.",visual:"widget",reward:2},
 {title:"Cara Kerja AND",text:"Seperti dua saklar berurutan: lampu menyala hanya jika keduanya ON. Ubah input A dan B!",visual:"widget",reward:2},
 {title:"Truth Table",text:"Daftar semua kombinasi input beserta outputnya. Klik baris untuk mencoba.",visual:"table",reward:3},
 {title:"Contoh: Brankas",text:"Pintu terbuka (Y = 1) hanya jika kartu akses benar <b>DAN</b> PIN benar.",visual:"widget",labels:{a:"Kartu",b:"PIN",y:"Pintu"},reward:3}
]};
