# Proses Bimbingan Proyek 3
Persyaratan:
1. Satu kali bimbingan berjalan selama 1 Minggu dimulai dari hari selasa, dengan minimal menjalankan 3 kali cycle pomokit di **group bimbingan dosen masing-masing** per individu bukan per kelompok.
2. Bimbingan wajib dilakukan setiap minggu. Cut Off Satu Pertemuan Bimbingan Mingguan adalah hari senin.
3. Dalam satu minggu agar nilai bimbingan maksimal maka harus menjalankan 3 cycle pomokit yang disetujui. Per cycle yang disetujui bernilai 33, total nilai 100.
4. Persentase nilai bimbinagan akan dikali dengan nilai sidang. Misal jika full nilai bimbingan maka 100% x Nilai Sidang.
5. Satu cycle mencakup salah satu atau lebih dari kegiatan pengerjaan mingguan di bawah ini.

## Kegiatan Pengerjaan Mingguan
Dalam waktu kurang dari satu minggu ini bisa melakukan:
1. Membangun Frontend
2. Membangun Backend
3. Mempelajari ilmu untuk membangun frontend atau backend
4. Membuat buku tutorial
5. Membuat jurnal
Detail dari Kegiatan Pengerjaan Mingguan dijelaskan di bawah ini.

### Membangun Frontend
1. Untuk pengerjaan HTML dan CSS di publish di github pages. Masukkan URL Github Pages pada pomokit.
2. Untuk pengerjaan **JS ditaruh di repo terpisah** dari HTML dan CSS serta dipublikasikan di jsdelivr, contoh: [URL CDN jsdelivr whatsauth](https://cdn.jsdelivr.net/gh/whatsauth/js/). Masukkan URL CDN jsdelivr pada pomokit
3. Website sudah bisa diakses dari root domain. contoh jscroot.github.io ,tidak lagi akses dengan url panjang (misal: jscroot.github.io/jscroot atau jscroot.github.io/jscroot.github.io)
4. Menggunakan implementasi token yang disimpan di cookies untuk otorisasi dan hak akses.
5. Semua file HTML **wajib dekralasikan type module** untuk memanggil hanya js versi ES6+. Dilarang memanggil file js tanpa deklarasi type.
   ```html
   <script src="./app.js" type="module"></script>
   ```
6. Hindari penggunaan library jquery karena masih menggunakan script lama ES5 sehingga membingungkan pengembangan Frontend
7. Tambahkan file 404.html pada setiap root folder repo HTML untuk mempercantik bagi yang salah ketik URL
 
### Membangun Backend
1. Seluruh API yang sudah dibuat di dokumentasikan melalui swagger yang bisa di akses di laman rootdomain/swagger(contoh:jscroot.github.io/swagger) dengan menyertakan info di laman swagger :
   * source code swagger yang di publish
   * package yang dipublish dan digunakan di GCF
   * repo source code dari GCF
   * Servers di set sudah link URL GCF  
   ![image](https://github.com/bukped/gis/assets/11188109/8db9052d-3056-48ec-af1f-5b5b1b396ac9)
2. Untuk pengerjaan membuat Package Backend, masukkan URL package pada pomokit. Contoh : [URL Package Peda](https://pkg.go.dev/github.com/petapedia/peda)
3. Untuk pengerjaan membuat backend di Google Cloud Function, masukkan URL swagger. Contoh :[URL Swagger JSCroot](https://jscroot.github.io/examples/api/swagger/)
4. Pada endpoint GCF API delete, update dan insert data sudah ditambah pengecekan token pada bagian header request. Pada swagger harus diperhatikan:
   * bisa di set di tombol Authorize  
     ![image](https://github.com/bukped/gis/assets/11188109/5d2e6ef1-eafe-40a9-8a70-6299b76131c3)
   * terdapat icon gembok  
     ![image](https://github.com/bukped/gis/assets/11188109/34716bfe-8918-4a5e-89ba-02cc655f8801)
   * Pada saat executer terdapat header token : -H 'token: asdasdasdad' \  
     ![image](https://github.com/bukped/gis/assets/11188109/dd4b787e-2701-4609-986d-7015213134c2)
5. Semua endpoint di swagger berjalan baik ketika di klik Try It Out ![image](https://github.com/bukped/gis/assets/11188109/40c02a80-3fe1-4ebf-aa1c-b9fa05f22bb5)  
   ![image](https://github.com/bukped/gis/assets/11188109/f14aa7e3-10de-4223-a711-1d91e7f68755)

## Publish Package Frontend
Contoh Package Frontend : 
1. [Jscroot](https://jscroot.github.io/)
2. [C-Craft](https://c-craftjs.github.io/) 
Kemudian Frontend di distribusikan melalui [jsDelivr](https://www.jsdelivr.com/)

## Publish Package Backend

Terus kembangkan package backend yang sudah dipublish di Registri / Repository Publik.   
Berikut ini adalah daftar repository publik yang ada di setiap bahasa pemrograman :
1. Go Lang bisa diakses di [pkg.go.dev](https://pkg.go.dev/)
2. Node.js bisa diakses di [npmjs.org](https://www.npmjs.com/)
3. Python bisa diakses di [pypi.org](https://pypi.org/)
4. PHP bisa diakses di [packagist.org](https://packagist.org/)

Contoh Package Backend : [Peda](https://pkg.go.dev/github.com/petapedia/peda)

## Publish Backend di Google Cloud Function

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
