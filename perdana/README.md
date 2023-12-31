# Bimbingan Perdana Proyek 3 : Membuat Token Based Authentication
Pada bimbingan perdana ini akan mengerjakan konsep dari gambar berikut:  
 ![image](https://github.com/d4if/proyek3/assets/11188109/495e3636-2217-41a4-a79f-785820ec026c)

## Instruksi
Dalam waktu kurang dari satu minggu ini lakukan :
1. Tetapkan bahasa pemrograman yang akan digunakan untuk membangun Backend
2. Membuat Package dari Bahasa Pemrograman yang dipilih dan di publikasikan di repository publik. 
3. Membuat Akun Google Cloud Platform, aktifkan Free Trial Menggunakan Bank Digital Masing-masing
4. Pangggil Package yang sudah dibuat melalui Google Cloud Function untuk satu endpoin Backend Proses Login Berbasiskan Token
5. Buatlah Frontend di github pages yang menggunakan endpoint Backend Tersebut
6. Satu kali bimbingan berjalan selama 1 Minggu dimulai dari hari senin, dengan minimal menjalankan 3 kali cycle pomokit di **group bimbingan dosen masing-masing** per individu bukan per kelompok.
7. Minta group id kepada dosen pembimbing masing-masing melalui group whatsapp bimbingan dosen tersebut, pastikan iteung ada di group tersebut.
8. Bimbingan wajib dilakukan setiap minggu. Cut Off Satu Pertemuan Bimbingan Mingguan adalah hari minggu.
9. Apabila kurang dari 3 cycle pomokit, dianggap tidak bimbingan dan berdampak pada kelulusan proyek.
10. Satu cycle mencakup salah satu atau lebih dari tiga kegiatan yaitu Publish package, Publish Google Cloud Function, Publish Github Pages.
11. Penjelasan masing-masing kegiatan ada di langkah di bawah ini.

## Publish Package di Registry / Repository Publik

Buatlah package yang sudah dipublish di Registri / Repository Publik.   
Berikut ini adalah daftar repository publik yang ada di setiap bahasa pemrograman :
1. Go Lang bisa diakses di [pkg.go.dev](https://pkg.go.dev/)
2. Node.js bisa diakses di [npmjs.org](https://www.npmjs.com/)
3. Python bisa diakses di [pypi.org](https://pypi.org/)
4. PHP bisa diakses di [packagist.org](https://packagist.org/)

Contoh Package : [Peda](https://pkg.go.dev/github.com/petapedia/peda)

## Publish Backend dari Google Cloud Function

Buatlah endpoint backend micro service dengan langkah-langkah yang wajib minimal dilakukan:
1. Pastikan sudah memiliki akun Google Cloud Platform(GCP)
2. Masuk ke Menu Google Cloud Function(GCF) Buat Satu fungsi endpoint
3. Pada fungsi endpoint tersebut **wajib hanya memanggil dan menggunakan Package yang sudah di publish**
4. Endpoint menerima POST dari frontend berupa username dan password
5. Endpoint mengembalikan token PASETO jika user dan password benar
6. Gunakan Library PASETO minimal Versi 4(V4)
7. Data User dan Password diambil dari basis data
8. Password yang disimpan di basis data harus sudah di hash minimal menggunakan Bcrypt atau yang diatasnya

Contoh Backend : [URL](https://asia-southeast2-awangga.cloudfunctions.net/petapedia-post) dan [Source Code](https://petapedia.github.io/gcf/post/)

## Publish Frontend di Github Pages

Buatlah frontend di github pages dengan langkah-langkah yang wajib minimal dilakukan:
1. Membuat form login yang terdiri dari minimal username dan password
2. Mengirimkan data form login ke backend GCF
3. Mendapatkan respon berupa Token PASETO jika login benar, peringatan jika login salah
4. Token Paseto disimpan di dalam cookies browser dengan expires mengikuti expire token PASETO
5. Lakukan pengamanan Cookies dengan mengaktifkan Secure, SameSite Strict, Path dan HttpOnly
   ```js
   Set-Cookie: id=a3fWa; Expires=Thu, 21 Oct 2021 07:28:00 GMT; Secure; HttpOnly; SameSite=Strict
   ```
6. Setelah Menyimpan Cookie maka diarahkan(Redirecting) ke dashboard profile dari user tersebut.
7. Jika ada cookies token PASETO selalu redirect dari form login ke dashboard
8. Siapkan halaman logout, halaman logout berfungsi untuk menghapus cookies TOKEN dan kembali(Redirect) ke form login.
9. Untuk mempercantik tambahkan laman 404.html
10. Frontend sudah menggunakan CSS Framework seperti Tailwind, Bulma, Bootstrap.

Contoh Frontend : [POST ke GCF](https://jscroot.github.io/examples/api/post/togcf/) dan [Contoh Source Code](https://jscroot.github.io/examples/api/), tinggal tambahkan redirecting ke dashboard user.
