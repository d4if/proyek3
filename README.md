# Proyek 3: Micro Frontend & Micro Service Developer

Tujuan Pembelajaran :
1. Menguasai bagaimana membuat fungsi dan package
2. Menguasai dependensi dan versioning software
3. Menguasai micro service adalah gabungan dari beberapa backend dari fungsi yang berbeda dan lokasi yang berbeda
4. Menguasai membuat endpoint backend micro service pada layanan Cloud populer
5. Menguasai RestFull dan penggunaan token untuk pengamanan Backend
6. Menguasai Javascript Object Signing and Encryption(JOSE) framework untuk pembuatan token
7. Menguasai cara debug frontend menggunakan Chrome DevTools
8. Menguasai konsep keamanan Algoritma Hashing Password
9. Menguasai konsep Cookies dan fitur keamanannya

Luaran dari proyek 3 adalah :
1. Package Backend yang sudah di publikasikan
2. Daftar URL Google Cloud Function yang digunakan oleh Frontend untuk memanggil backend.
3. Package Frontend yang sudah di publikasikan
4. Daftar fungsi dan kelompok js yang digunakan di frontend URL Github Pages
5. Buku tutorial membangun package BE dan FE dan cara memanggilnya di GCF dan GHP
6. Jurnal Terapan atau Pengabdian Masyarakat

Detail ketentuan:
1. Frontend wajib di deploy di github pages dengan menggunakan konsep serverless micro frontend menggunakan [Javascript ES6+](https://vanillajskit.github.io/)
2. Backend minimal menggunakan RESTFull dengan menggunaan konsep web service dan pemanggilan package.
3. Backend wajib di hosting di GCF(Google Cloud Function).
4. Backend wajib menggunakan sistem Authentikasi berbasiskan token [PASETO V4](https://github.com/whatsauth/watoken).
5. Package sudah status publish, contoh untuk golang bisa diakses di [Go Package](https://pkg.go.dev/)
6. Semua proses Proyek 3 menggunakan metode belajar Pomodoro dengan aplikasi [pomokit](https://pomokit.github.io/).

# FAQ Proyek 3
T : Apakah boleh saya tidak membangun frontend di github pages?  
J : Syarat Proyek3 adalah lulus Mata Kuliah Web Service, artinya jika tidak bisa membangun frontend di github pages dipastikan belum menguasi mata kuliah Web Service

T : Apakah boleh saya membangun frontend menggunakan android?  
J : Mata kuliah mobile programming ada di semester 5, masih berjalan. Dibolehkan sebagai nilai tambah, tapi tetap yang di nilai adalah github pages dari JS ES6+.

## Proses Pendaftaran Peserta (Sabtu-Minggu 7-8 Oktober 2023)

Buatlah Proposal Proyek 3 dalam bentuk Frontend di Github Pages Dengan Ketentuan :
1. Menggunakan Ketentuan [Micro Frontend](https://vanillajskit.github.io/)
2. Menggunakan sintak [HTML 5](https://www.tutorialspoint.com/html5/index.htm).
3. Konten isi web diambil dengan metode HTTP get dari file json. Tidak boleh konten web hard code di dalam kode HTML, konten harus diambil menggunakan Javascript ES6+.
4. Isi Web Merupakan Isi dari Proposal Proyek 3 dimana isinya se kreatif dan semenarik mungkin mengikuti isi proposal Program Kreatifitas Mahasiswa.
5. Web proposal dibangun menggunakan CSS Framework Bulma atau Tailwind atau Bootstrap
6. Web wajib Responsive baik dibuka di laptop maupun di ponsel.
7. Web setidaknya memiliki 3 menu yang bisa menavigasi satu sama lainnya
8. Gunakan Hanya Javascript ES6+, pemanggilan atau penggunaan JS selain ES6+ langsung di eliminasi. 
9. Alamat github pages harus berhubungan dengan topik yang akan dikerjakan, misal : "mau membuat sistem informasi kuliner" maka alamat url github pagenya : kulineryuk.github.io
10. Satu kelompok maksimal 2 orang, menggunakan url github pages yang sama.
11. Dikumpulkan menggunakan [pomokit](https://pomokit.github.io/) release terbaru, masing-masing anggota kelompok menjalankan pomokit. Untuk yang satu kelompok menggunakan URL github pages yang sama.
12. Meminta restu dari orang tua dengan mengirimkan link restu yang di klik oleh orang tua. Bagi yang melakukan manipulasi nomor orang tua akan langsung di eliminasi. 

Jika kamu merasa tertantang di sesi submit proposal ini, kamu boleh menambahkan :
1. Method POST dari API Publik.
2. Memiliki Backend Authentikasi PASETO
3. Method GET dari API Publik
4. Ada penjelasan Video


## Bimbingan Perdana
Proses bimbingan perdana bisa dilihat di [laman berikut](./perdana)
