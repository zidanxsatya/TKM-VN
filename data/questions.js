// ===== SOAL ===== answer = indeks opsi benar (mulai 0); circuit {a,b} menampilkan rangkaian; reward = Knowledge
const QUESTIONS=[
 {q:"Hasil output gerbang AND dengan input A = 1 dan B = 0 adalah ...",options:["0","1","2","Tidak dapat ditentukan"],answer:0,hint:"Ingat, AND hanya menghasilkan 1 jika SEMUA input bernilai 1.",explain:"Karena B = 0, output AND pasti 0.",reward:6},
 {q:"Pada truth table AND dua input, berapa baris yang menghasilkan Y = 1?",options:["0","1","2","4"],answer:1,hint:"Lihat lagi truth table. Kapan Y bernilai 1?",explain:"Hanya baris A = 1, B = 1 yang menghasilkan 1.",reward:6},
 {q:"Kombinasi input mana yang membuat output AND bernilai 1?",options:["A = 0, B = 1","A = 1, B = 0","A = 1, B = 1","A = 0, B = 0"],answer:2,hint:"Kedua input harus sama-sama aktif.",explain:"Kalau input A = 1 dan B = 0, output AND seharusnya 0.",reward:6},
 {q:"Perhatikan rangkaian berikut. Bagaimana kondisi LED?",circuit:{a:0,b:1},options:["LED menyala","LED mati","LED berkedip","Tidak dapat ditentukan"],answer:1,hint:"Periksa input A pada rangkaian. Apakah aktif?",explain:"A = 0, jadi output 0 dan LED mati.",reward:6},
 {q:"Kedua saklar pada rangkaian ini dinyalakan. Apa yang terjadi?",circuit:{a:1,b:1},options:["LED mati karena AND butuh input 0","LED menyala karena A = 1 dan B = 1","LED mati karena ada input 1","Tidak dapat ditentukan"],answer:1,hint:"Hitung: apakah semua input bernilai 1?",explain:"Semua input 1, jadi output AND = 1.",reward:6}
];
