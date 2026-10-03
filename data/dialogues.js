// ===== DIALOG ===== DIALOGUES[mode][event] = [variasi, ...]; tiap variasi = [{c:karakter,e:ekspresi,t:teks}, ...]
// Variabel: {hint} {explain} {score}
const T=(e,t)=>({c:"teacher",e,t}), A=(e,t)=>({c:"alice",e,t}), E=(e,t)=>({c:"eve",e,t});
const DIALOGUES={
 materi:{
  enter_low:[[T("normal","Selamat datang di kelas. Hari ini kita mulai dari dasar: gerbang AND."),T("serious","Sepertinya kamu masih perlu memahami dasar AND. Perhatikan baik-baik.")]],
  enter_mid:[[T("smile","Kamu kembali. Kamu sudah mulai memahami pola input dan output."),T("explaining","Mari kita rapikan pemahamanmu.")]],
  enter_high:[[T("smile","Kamu sudah cukup lancar membaca rangkaian logika."),T("encouraging","Tetap, mari kita ulas bersama.")]],
  slide0:[[T("explaining","Perhatikan papan tulis. Gerbang AND adalah gerbang logika paling dasar."),T("serious","Jangan hanya menghafalnya. Pahami hubungan antara input dan output.")]],
  slide1:[[T("explaining","Ini adalah simbol dari gerbang AND. Bentuknya seperti huruf D."),T("normal","Dua input di kiri, satu output di kanan. Coba ubah inputnya.")]],
  slide2:[[T("explaining","Anggap dua saklar dipasang berurutan. Lampu hanya menyala jika keduanya aktif."),T("encouraging","Silakan coba sendiri.")]],
  slide3:[[T("serious","Truth table mencatat semua kemungkinan input. Hanya satu baris yang menghasilkan 1."),T("normal","Klik barisnya untuk melihat rangkaiannya.")]],
  slide4:[[T("explaining","Contoh nyata: brankas. Pintu terbuka jika kartu akses DAN PIN sama-sama benar."),T("normal","Coba kombinasikan.")]],
  play_on:[[T("smile","Bagus. Semua input aktif, maka output menjadi 1.")],[T("encouraging","Benar. Output 1 hanya muncul jika semua input 1.")]],
  play_off:[[T("normal","Perhatikan, outputnya 0. Ada input yang belum aktif.")],[T("serious","Output mati. Sudah paham alasannya?")]],
  done:[[T("smile","Bagus. Kamu sudah memahami konsep dasarnya."),T("encouraging","Lanjutkan ke Simulasi bersama Alice, lalu uji dirimu di Latihan.")]],
  idle:[[T("normal","Ada yang ingin kamu tanyakan? Ambil waktumu.")],[T("serious","Fokus, ya. Jangan melamun.")]]
 },
 sim:{
  enter_low:[[A("happy","Hai! Akhirnya kita praktik! Yuk, kita coba nyalakan input A dulu!")]],
  enter_mid:[[A("excited","Kamu balik lagi! Yuk, coba semua kombinasinya!")]],
  enter_high:[[A("excited","Kamu pasti sudah jago. Coba cari semua kombinasinya lebih cepat!")]],
  a0b0:[[A("thinking","Semua input masih mati. Output pasti 0, kan?")]],
  a1b0:[[A("happy","Input A sudah aktif!"),A("thinking","Tapi output masih mati. Hmm...")],[A("surprised","Eh? Output-nya masih mati. Coba kita periksa lagi.")]],
  a0b1:[[A("happy","Nah! Sekarang input B yang aktif."),A("thinking","Output tetap mati. Berarti A juga perlu aktif?")]],
  a1b1:[[A("excited","Yay! Output-nya menyala!"),A("happy","Berarti kita sudah mendapatkan kombinasi yang benar!")]],
  complete:[[A("excited","Semua kombinasi sudah kita coba! Cuma A = 1 dan B = 1 yang bikin LED nyala."),A("happy","Berhasil! Ternyata nggak sesulit yang kita kira.")]],
  run_on:[[A("excited","Dijalankan... LED-nya nyala!")]],
  run_off:[[A("thinking","Dijalankan... LED-nya masih mati. Coba ubah inputnya.")]],
  idle:[[A("happy","Eh, tahu nggak? Aku suka banget bagian utak-atik begini.")],[A("normal","Mau coba kombinasi yang lain?")]]
 },
 quiz:{
  enter_low:[[E("shy","A-ah... selamat datang. Aku Eve."),E("worried","Kita kerjakan pelan-pelan saja, ya...")]],
  enter_mid:[[E("normal","Oh... kamu datang. Ayo kita kerjakan soalnya.")]],
  enter_high:[[E("shy","Kamu sudah cukup lancar, kan? ...jangan bikin aku gugup.")]],
  correct:[[E("surprised","Oh... benar."),E("normal","{explain}")],[E("happy","Kamu ternyata sudah cukup memahami materinya."),E("normal","{explain}")]],
  wrong:[[E("worried","A-ah... sepertinya jawabannya bukan itu..."),E("shy","{hint}")],[E("embarrassed","Maaf... mungkin aku terlalu cepat menyimpulkannya."),E("normal","{hint}")]],
  finish_low:[[E("worried","Skormu {score}. Nggak apa-apa... ulangi materinya dulu, ya.")]],
  finish_mid:[[E("normal","Skormu {score}. Lumayan..."),E("shy","Mungkin sekali lagi, supaya lebih yakin?")]],
  finish_high:[[E("surprised","Skormu {score}...! Aku sedikit terkejut."),E("happy","Kamu hebat.")]],
  idle:[[E("shy","A-ah... kamu masih mikir? Nggak apa-apa, pelan-pelan saja.")]]
 }
};
