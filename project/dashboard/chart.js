const ctx = document.getElementById('myChart').getContext('2d');

const myChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ['Ani', 'Budi', 'Citra', 'Dewi'],
    datasets: [{
      label: 'Nilai',
      data: [80, 75, 90, 85],
      backgroundColor: [
        'rgba(52, 152, 219, 0.7)',
        'rgba(46, 204, 113, 0.7)',
        'rgba(241, 196, 15, 0.7)',
        'rgba(231, 76, 60, 0.7)'
      ],
      borderColor: [
        'rgba(41, 128, 185, 1)',
        'rgba(39, 174, 96, 1)',
        'rgba(243, 156, 18, 1)',
        'rgba(192, 57, 43, 1)'
      ],
      borderWidth: 2
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'bottom'
      },
      title: {
        display: true,
        text: 'Distribusi Nilai Siswa'
      }
    }
  }
});

