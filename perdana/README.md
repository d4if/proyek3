
# Bimbingan Perdana Proyek 3 
Pada bimbingan perdana ini membuat :
1. Pilih bahasa pemrograman yang akan digunakan untuk membangun Backend
2. Membuat Package dari Bahasa Pemrograman yang dipilih dan di publikasikan di repository publik. 
3. Membuat Akun Google Cloud Platform, aktifkan Free Trial Menggunakan Bank Digital Masing-masing
4. Pangggil Package yang sudah dibuat melalui Google Cloud Function untuk satu endpoin Backend Proses Login Berbasiskan Token
5. Buatlah Frontend di github pages yang menggunakan endpoint Backend Tersebut
6. Bimbingan ini Berjalan selama 1 Minggu kedepan dengan minimal menjalankan 3 kali cycle pomodoro di group bimbingan dosen masing-masing
7. Satu cycle terdiri dari minimal tiga kegiatan yaitu pembuatan package, pembuatan Google Cloud Function, Pembuatan Github Pages.
8. Penjelasan masing-masing kegiatan ada di langkah di bawah ini.

## Publish Package di Registry / Repository Publik

Buatlah package yang sudah dipublish di Registri / Repository Publik.   
Berikut ini adalah daftar repository publik yang ada di setiap bahasa pemrograman :
1. Go Lang bisa diakses di [pkg.go.dev](https://pkg.go.dev/)
2. Node.js bisa diakses di [npmjs.org](https://www.npmjs.com/)
3. Python bisa diakses di [pypi.org](https://pypi.org/)
4. PHP bisa diakses di [packagist.org](https://packagist.org/)

## Membuat Backend dari Google Cloud Function

Buatlah endpoint backend micro service dengan langkah-langkah yang wajib minimal dilakukan:
1. Pastikan sudah memiliki akun Google Cloud Platform(GCP)
2. Masuk ke Menu Google Cloud Function(GCF) Buat Satu fungsi
3. Pada fungsi tersebut wajib memanggil dan menggunakan Package yang sudah di buat sebelumnya

## Membuat Frontend di Github Pages

Buatlah frontend di github pages dengan langkah-langkah yang wajib minimal dilakukan:
1. Membuat form login yang terdiri dari minimal username dan password
2. Mengirimkan data form login ke backend GCF
3. Mendapatkan respon berupa Token PASETO jika login benar, peringatan jika login salah
4. Token Paseto disimpan di dalam cookies browser dengan expires mengikuti expire token PASETO
5. Cookies di set path nya menggunakan http only dan domain dari frontent untuk keamanan
6. Setelah Menyimpan Cookie maka diarahkan(Redirecting) ke dashboard profile dari user tersebut.
7. Jika ada cookies token PASETO selalu redirect dari form login ke dashboard
8. Siapkan halaman logout, halaman logout berfungsi untuk menghapus cookies TOKEN dan kembali(Redirect) ke form login.
9. Untuk mempercantik tambahkan laman 404.html
