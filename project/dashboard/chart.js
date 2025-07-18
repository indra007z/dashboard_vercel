const ctx = document.getElementById('myChart').getContext('2d');

const myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Ani', 'Budi', 'Citra', 'Dewi'],
    datasets: [{
      label: 'Nilai',
      data: [80, 75, 90, 85],
      backgroundColor: 'rgba(46, 204, 113, 0.6)',
      borderColor: 'rgba(39, 174, 96, 1)',
      borderWidth: 1
    }]
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

