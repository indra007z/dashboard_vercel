async function fetchCSVData() {
  const response = await fetch('sales_data.csv');
  const data = await response.text();

  const rows = data.trim().split('\n').slice(1);
  const dailySales = {};

  rows.forEach(row => {
    const [tanggal, produk, region, penjualan] = row.split(',');
    if (!dailySales[tanggal]) dailySales[tanggal] = 0;
    dailySales[tanggal] += parseInt(penjualan);
  });

  return {
    labels: Object.keys(dailySales),
    data: Object.values(dailySales),
  };
}

async function renderChart() {
  const sales = await fetchCSVData();

  // Ambil data dari sales_data.csv
  fetch('sales_data.csv')
    .then(response => response.text())
    .then(text => {
      const rows = text.trim().split('\n');
      // Kolom: Tanggal,Produk,Region,Penjualan
      const produkSales = {};
      rows.slice(1).forEach(row => {
        const values = row.split(',');
        const produk = values[1];
        const penjualan = parseInt(values[3]);
        if (!produkSales[produk]) produkSales[produk] = 0;
        produkSales[produk] += penjualan;
      });
      const labels = Object.keys(produkSales);
      const dataPie = Object.values(produkSales);
      const ctx = document.getElementById('salesChart').getContext('2d');
      const data = {
        labels: labels,
        datasets: [{
          label: 'Penjualan',
          data: dataPie,
          backgroundColor: [
            'rgba(52, 152, 219, 0.7)',
            'rgba(46, 204, 113, 0.7)',
            'rgba(241, 196, 15, 0.7)',
            'rgba(231, 76, 60, 0.7)',
            '#9b59b6', '#1abc9c', '#e67e22', '#34495e'
          ],
          borderColor: [
            'rgba(41, 128, 185, 1)',
            'rgba(39, 174, 96, 1)',
            'rgba(243, 156, 18, 1)',
            'rgba(192, 57, 43, 1)',
            '#8e44ad', '#16a085', '#d35400', '#2c3e50'
          ],
          borderWidth: 2
        }]
      };
      const config = {
        type: 'pie',
        data: data,
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: 'bottom',
              labels: {
                font: {
                  size: 16
                }
              }
            },
            title: {
              display: true,
              text: 'Distribusi Penjualan per Produk',
              font: {
                size: 20
              },
              color: '#2980b9'
            }
          }
        }
      };
      new Chart(ctx, config);
    });
}

renderChart();
