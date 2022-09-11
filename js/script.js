 // Peringatan //
function masuk() {
    var nama = document.getElementById("nama").value;
    var Semester = document.getElementById("Semester").value;
    swal.setActionValue(Semester);
    if (nama == '') {
        swal("Isikan Nama!!", "", "warning");
        return false;
    } else if (Semester == '') {
        swal("Isikan Semester!!", "", "warning");
        return false;
    } else if (Semester >= 1 && Semester <= 2) {
        swal("Anda mahasiswa tahun pertama", "Mahasiswa Baru", "success");
        return false;
    } else if (Semester >= 3 && Semester<= 4) {
        swal("Anda mahasiswa tahun kedua", "Semangat!", "success");
        return false;
    } else if (Semester >= 5 && Semester <= 6) {
        swal("Anda mahasiswa tahun ketiga", "Tetap Semangat!", "success");
        return false;
    } else if (Semester >= 7 && Semester <= 8) {
        swal("Anda mahasiswa tahun keempat", "Lulus Tahun ini!", "success");
        return false;
    } else if (Semester <= 0) {
        swal("Salah", "Anda Bukan Mahasiswa di Universitas ini!", "warning");
        return false;
    } else if (Semester => 8) {
        swal("Salah", "Anda Bukan Mahasiswa di Universitas ini!", "warning");
        return false;
    }
    document.getElementById("submit").addEventListener("click", function (event) {
        event.preventDefault()
    });
}
