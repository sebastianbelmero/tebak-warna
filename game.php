<div class="vh-100 row justify-content-center py-5">
    <div class="col-12 col-md-6 row justify-content-center">
        <button onclick="pilih(1)" class="button col-5 btn btn-secondary w-50 border-white" id="box-1"></button>
        <button onclick="pilih(2)" class="button col-5 btn btn-secondary w-50 border-white" id="box-2"></button>
        <button onclick="pilih(3)" class="button col-5 btn btn-secondary w-50 border-white" id="box-3"></button>
        <button onclick="pilih(4)" class="button col-5 btn btn-secondary w-50 border-white" id="box-4"></button>
    </div>
    <div class="col-12 col-md-6">
        <span id="hitung">Jumlah Klik</span>
        <span id="hasil"></span>
        <div>
            Riwayat Permainan : 
        <ul class="list-group">
            <?php
            include 'koneksi.php';
            $no = 1;
            $ambil = $koneksi->query("SELECT * FROM hasil ORDER BY id DESC LIMIT 10");
            while ($pecah = $ambil->fetch_assoc()) { ?>
                <li class="list-group-item"><?php echo $no++." - ".$pecah['hasil']; ?></li>
            <?php } ?>
        </ul>
        </div>
    </div>
</div>