# Proses Bimbingan Tahap Prasidang Proyek 3
Mulai Simulasi Sidang dengan penilaian :

Untuk pengembang backend, tahapan presentasi:
1. presentasikan dokumentasi swagger pastikan semua endpoint berfungsi (nilai 25)
2. presentasikan package yang telah di buat sendiri(nilai 25)
3. presentasikan Cloud Function yang dibuat telah pasti memanggil package buatan sendiri.(nilai 25)
4. integrasikan dengan whatsauth.my.id(nilai 25)

Untuk pengembang frontend, tahapan presentasi:
1. presentasikan semua rilis versi di jsdelivr dari semua js buatan sendiri yang dipakai frontend(nilai 25)
2. presentasikan pemanggilan jsdelivr pada html yang sudah pasti pakai type module(nilai 25)
3. presentasikan kelengkapan css, favicon, 404.html.(nilai 25)
4. sudah memakai custom domain .my.id pada github pages nya.(nilai 25)

Pastikan simulasi pra sidang terus menerus per minggu sampai mencapai titik nilai maksimal yang akan di inputkan oleh pembimbing sebelum sidang.

## Proses Bimbingan
Proses Bimbingan Tetap dilakukan:
1. Satu kali bimbingan berjalan selama 1 Minggu dimulai dari hari selasa, dengan minimal menjalankan 3 kali cycle pomokit di **group bimbingan dosen masing-masing** per individu bukan per kelompok.
2. Bimbingan wajib dilakukan setiap minggu. Cut Off Satu Pertemuan Bimbingan Mingguan adalah hari senin.
3. Dalam satu minggu agar nilai bimbingan maksimal maka harus menjalankan 3 cycle pomokit yang disetujui. Per cycle yang disetujui bernilai 33, total nilai 99.
4. Persentase nilai bimbingan akan dikali dengan nilai sidang. Misal jika full nilai bimbingan maka 100% x Nilai Sidang.
5. Satu cycle mencakup salah satu atau lebih dari kegiatan pengerjaan mingguan di bawah ini.
6. Setiap repo yang dikerjakan pastikan sudah di pasang webhook, detail webhook ada di deskripsi group wa proyek
7. pastikan setiap commit message mengikuti standar konvensi : jenis(namafungsi):penjelasan
8. Dimana jenis standar konvensi pesan commit terdiri dari feature,fix,add,delete,update
9. Pada saat menjalankan pomokit sudah commit minimal sebanyak 3 commit standar konvensi pada repo yang dikerjakan.
10. Pastikan mengunduh pomokit versi terbaru selalu
11. Pastikan email yang terdaftar terset di git bash sama dengan email yang terdaftar di aplikasi akademik siap. Cara mengecek email di git bash:
    ```s
    git config -l
    ```

## Kegiatan Pengerjaan Mingguan
Dalam waktu kurang dari satu minggu ini bisa melakukan:
1. Membangun Frontend
2. Membangun Backend
3. Mempelajari ilmu untuk membangun frontend atau backend
4. Membuat buku tutorial
5. Membuat jurnal  

Detail dari Kegiatan Pengerjaan Mingguan dijelaskan di bawah ini.

### Membangun Frontend
1. Ada tida repo yang dikerjakan: repo github pages dan repo js.
2. Untuk pengerjaan HTML dan CSS di publish di github pages. Masukkan URL Github Pages pada pomokit.
3. Untuk pengerjaan **JS ditaruh di repo terpisah** dari HTML dan CSS serta dipublikasikan di jsdelivr, contoh: [URL CDN jsdelivr whatsauth](https://cdn.jsdelivr.net/gh/whatsauth/js/). Masukkan URL CDN jsdelivr pada pomokit
4. Website sudah bisa diakses dari root domain. contoh jscroot.github.io ,tidak lagi akses dengan url panjang (misal: jscroot.github.io/jscroot atau jscroot.github.io/jscroot.github.io)
5. Menggunakan implementasi token yang disimpan di cookies untuk otorisasi dan hak akses.
6. Semua file HTML **wajib dekralasikan type module** untuk memanggil hanya js versi ES6+. Dilarang memanggil file js tanpa deklarasi type. Untuk src diisi dengan pemanggilan dari URL CDN jsdelivr. Contoh:
   ```html
   <script src="https://cdn.jsdelivr.net/gh/whatsauth/js@0.0.9/whatsauth.js" type="module"></script>
   ```
7. Hindari penggunaan library jquery karena masih menggunakan script lama ES5 sehingga membingungkan pengembangan Frontend
8. Tambahkan file 404.html pada setiap root folder repo HTML untuk mempercantik bagi yang salah ketik URL
 
### Membangun Backend
1. Ada tiga repo yang dikerjakan: repo untuk package backend, repo source code GCF, repo untuk swagger dokumentasi api.
2. Seluruh API yang sudah dibuat di dokumentasikan melalui swagger versi terbaru yang bisa di akses di laman rootdomain/swagger(contoh:jscroot.github.io/swagger) dengan menyertakan info di laman swagger :
   * source code swagger yang di publish
   * package yang dipublish dan digunakan di GCF
   * repo source code dari GCF
   * Servers di set sudah link URL GCF  
   ![image](https://github.com/bukped/gis/assets/11188109/8db9052d-3056-48ec-af1f-5b5b1b396ac9)
3. Untuk pengerjaan membuat Package Backend, masukkan URL package pada pomokit. Contoh : [URL Package Peda](https://pkg.go.dev/github.com/petapedia/peda)
4. Untuk pengerjaan membuat backend di Google Cloud Function, masukkan URL swagger. Contoh :[URL Swagger JSCroot](https://jscroot.github.io/examples/api/swagger/)
5. Pada endpoint GCF API delete, update dan insert data sudah ditambah pengecekan token pada bagian header request. Pada swagger harus diperhatikan:
   * bisa di set di tombol Authorize  
     ![image](https://github.com/bukped/gis/assets/11188109/5d2e6ef1-eafe-40a9-8a70-6299b76131c3)
   * terdapat icon gembok  
     ![image](https://github.com/bukped/gis/assets/11188109/34716bfe-8918-4a5e-89ba-02cc655f8801)
   * Pada saat executer terdapat header token : -H 'token: asdasdasdad' \  
     ![image](https://github.com/bukped/gis/assets/11188109/dd4b787e-2701-4609-986d-7015213134c2)
6. Semua endpoint di swagger berjalan baik ketika di klik Try It Out ![image](https://github.com/bukped/gis/assets/11188109/40c02a80-3fe1-4ebf-aa1c-b9fa05f22bb5)  
   ![image](https://github.com/bukped/gis/assets/11188109/f14aa7e3-10de-4223-a711-1d91e7f68755)

### Mempelajari ilmu untuk membangun frontend atau backend
Silahkan resumekan dalam file markdown README.md pada repo khusus untuk bahan membuat buku tutorial. Masukkan url github pages repo buku pada pomokit

### Membuat buku tutorial
Silahkan buat dalam file markdown README.md pada repo khusus jurnal. Masukkan url github pages repo jurnal tersebut pada pomokit

### Membuat jurnal
Silahkan buat dalam file markdown README.md pada repo khusus untuk bahan membuat buku tutorial. Masukkan url github pages repo buku pada pomokit

### Referensi
1. [Swagger untuk Github Pages](https://jscroot.github.io/examples/api/swagger/)
2. [JSCroot API Example](https://jscroot.github.io/examples/api/)
3. [GCF Example](https://petapedia.github.io/gcf/)
4. [Package Example](https://pkg.go.dev/github.com/petapedia/peda)
