document.getElementById('dataForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const nama = document.getElementById('nama').value;
    const alamat = document.getElementById('alamat').value;
    const tempatLahir = document.getElementById('tempatLahir').value;
    const tanggalLahir = document.getElementById('tanggalLahir').value;
    const nomorHp = document.getElementById('nomorHp').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value; 
    const agama = document.getElementById('agama').value;

    const jenisKelamin = document.querySelector('input[name="jk"]:checked').value;
    const passwordBintang = '*'.repeat(password.length);
    const hobiSelesai = [];
    const checkboxes = document.querySelectorAll('input[name="hobi"]:checked');
    checkboxes.forEach(function(checkbox) {
        hobiSelesai.push(checkbox.value);
    });
    const textHobi = hobiSelesai.length > 0 ? hobiSelesai.join(', ') : 'Tidak ada';
    alert(`Halo ${nama}, data diri Anda berhasil dikirim! Silakan periksa di bagian bawah.`);

    const noDataMessage = document.querySelector('.no-data');
    if (noDataMessage) {
        noDataMessage.remove();
    }
    const outputList = document.getElementById('outputList');
    const jumlahData = outputList.children.length + 1;
    const cardBaru = document.createElement('div');
    cardBaru.className = 'card-hasil';
    cardBaru.innerHTML = `
        <h4>Data Anggota #${jumlahData}</h4>
        <div class="baris-data"><b>Nama Lengkap:</b> <span>${nama}</span></div>
        <div class="baris-data"><b>Jenis Kelamin:</b> <span>${jenisKelamin}</span></div>
        <div class="baris-data"><b>Tempat, Tgl Lahir:</b> <span>${tempatLahir}, ${tanggalLahir}</span></div>
        <div class="baris-data"><b>Alamat:</b> <span>${alamat}</span></div>
        <div class="baris-data"><b>Nomor HP:</b> <span>${nomorHp}</span></div>
        <div class="baris-data"><b>Email:</b> <span>${email}</span></div>
        <div class="baris-data"><b>Agama:</b> <span>${agama}</span></div>
        <div class="baris-data"><b>Hobi:</b> <span>${textHobi}</span></div>
    `;
    outputList.appendChild(cardBaru);
    document.getElementById('dataForm').reset();
    cardBaru.scrollIntoView({ behavior: 'smooth', block: 'end' });
});