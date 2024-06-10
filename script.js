document.getElementById('heatTransferForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var thermalConductivity = parseFloat(document.getElementById('thermalConductivity').value);
    var crossSectionArea = parseFloat(document.getElementById('crossSectionArea').value);
    var thickness = parseFloat(document.getElementById('thickness').value);
    var initialTemperature = parseFloat(document.getElementById('initialTemperature').value);
    var finalTemperature = parseFloat(document.getElementById('finalTemperature').value);

    var deltaT = Math.abs(finalTemperature - initialTemperature); // Menggunakan Math.abs() untuk mendapatkan nilai positif deltaT
    var heatTransfer = thermalConductivity * crossSectionArea * deltaT / thickness;

    // Menampilkan hasil perhitungan dalam modal
    var resultModalBody = document.getElementById('resultBody');
    resultModalBody.innerHTML = "<p>Jumlah Panas yang Dipindahkan: " + heatTransfer.toFixed(2) + " Watt</p>";

    // Menambahkan informasi tambahan
    var additionalInfo = "<p><strong>Dalam 5 menit (atau 5×60=300 detik), jumlah panas yang dipindahkan akan menjadi:</strong></p>";
    additionalInfo += "<p>Jumlah Panas = Q × Waktu</p>";
    additionalInfo += "<p>Jumlah Panas = " + heatTransfer.toFixed(2) + " Watt × 300 detik</p>";
    additionalInfo += "<p>Jumlah Panas = " + (heatTransfer * 300).toLocaleString() + " Joule</p>";

    resultModalBody.innerHTML += additionalInfo;

    // Menampilkan modal
    var myModal = new bootstrap.Modal(document.getElementById('resultModal'));
    myModal.show();
  });

  // Menambahkan contoh soal ke dalam formulir
  document.getElementById('exampleButton').addEventListener('click', function() {
    document.getElementById('thermalConductivity').value = 80;
    document.getElementById('crossSectionArea').value = "0.02"; // Menggunakan string karena tipe inputnya 'text'
    document.getElementById('thickness').value = "0.005"; // Menggunakan string karena tipe inputnya 'text'
    document.getElementById('initialTemperature').value = 100;
    document.getElementById('finalTemperature').value = 200;
  });

  // Validasi input untuk Luas Penampang (m²) agar tidak boleh kurang dari atau sama dengan 0
  document.getElementById('crossSectionArea').addEventListener('input', function() {
    var crossSectionAreaValue = parseFloat(this.value);
    if (crossSectionAreaValue <= 0) {
      this.setCustomValidity('Luas Penampang harus lebih besar dari 0.');
    } else {
      this.setCustomValidity('');
    }
  });

  // Validasi input untuk Ketebalan (m) agar tidak boleh kurang dari atau sama dengan 0
  document.getElementById('thickness').addEventListener('input', function() {
    var thicknessValue = parseFloat(this.value);
    if (thicknessValue <= 0) {
      this.setCustomValidity('Ketebalan harus lebih besar dari 0.');
    } else {
      this.setCustomValidity('');
    }
  });