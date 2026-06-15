let chart; // Keep reference to update chart later

function calculateImpact() {
  const packagesPerMonth = parseInt(document.getElementById("packages").value);
  const results = document.getElementById("results");
  const chartCanvas = document.getElementById("impactChart");

  if (isNaN(packagesPerMonth) || packagesPerMonth <= 0) {
    results.innerHTML = "<p style='color:red;'>⚠️ Please enter a valid number above 0.</p>";
    if (chart) chart.destroy();
    return;
  }

  const gramsPerPackage = 30;
  const co2PerKgPlastic = 1.8;
  const monthsPerYear = 12;

  const totalPackages = packagesPerMonth * monthsPerYear;
  const plasticSavedKg = (totalPackages * gramsPerPackage) / 1000;
  const co2Traditional = plasticSavedKg * co2PerKgPlastic;
  const co2Eco = co2Traditional * 0.4;
  const co2Saved = co2Traditional - co2Eco;

  results.innerHTML = `
    <p>🌍 By switching to eco-packaging, you save:</p>
    <ul style="list-style: none; padding-left: 0;">
      <li><strong>${plasticSavedKg.toFixed(2)} kg</strong> of plastic per year</li>
      <li><strong>${co2Saved.toFixed(2)} kg</strong> of CO₂ emissions per year</li>
    </ul>
  `;

  // Chart.js bar chart
  if (chart) chart.destroy(); // Remove old chart

  chart = new Chart(chartCanvas, {
    type: 'bar',
    data: {
      labels: ['CO₂ with Traditional Packaging', 'CO₂ with Eco-Packaging'],
      datasets: [{
        label: 'kg CO₂/year',
        data: [co2Traditional.toFixed(2), co2Eco.toFixed(2)],
        backgroundColor: ['#e74c3c', '#2ecc71']
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: false },
        title: {
          display: true,
          text: 'Annual CO₂ Emissions Comparison'
        }
      }
    }
  });
}
