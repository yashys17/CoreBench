const cpus = [
  { name: "Intel Core i3-13100F", cores: 4, threads: 8, baseClock: "3.4GHz", price: "₹9,000", image: "cpu_images/i3.jpg" },
  { name: "Intel Core i5-13600K", cores: 14, threads: 20, baseClock: "3.5GHz", price: "₹26,000", image: "cpu_images/i5.jpg" },
  { name: "Intel Core ultra5-245K", cores: 14, threads: 14, baseClock: "3.6GHz", price: "₹29,600", image: "cpu_images/ultra5.jpg" },
  { name: "Intel Core i7-13700K", cores: 16, threads: 24, baseClock: "3.4GHz", price: "₹34,000", image: "cpu_images/i7.jpg" },
  { name: "Intel Core ultra7-265K", cores: 20, threads: 20, baseClock: "3.3GHz", price: "₹39,900", image: "cpu_images/ultra7.jpg" },
  { name: "Intel Core i9-13900K", cores: 24, threads: 32, baseClock: "3.0GHz", price: "₹49,000", image: "cpu_images/i9.jpg" },
  { name: "Intel Core ultra9-285K", cores: 24, threads: 24, baseClock: "3.2GHz", price: "₹55,150", image: "cpu_images/ultra9.jpg" },
  { name: "AMD Ryzen 3 4100", cores: 4, threads: 8, baseClock: "3.8GHz", price: "₹7,500", image: "cpu_images/ryzen3.jpg" },
  { name: "AMD Ryzen 5 7600X", cores: 6, threads: 12, baseClock: "4.7GHz", price: "₹19,000", image: "cpu_images/ryzen5.jpg" },
  { name: "AMD Ryzen 7 7700X", cores: 8, threads: 16, baseClock: "4.5GHz", price: "₹27,000", image: "cpu_images/ryzen7.jpg" },
  { name: "AMD Ryzen 9 7950X", cores: 16, threads: 32, baseClock: "4.5GHz", price: "₹54,000", image: "cpu_images/ryzen9.jpg" },
  { name: "AMD Threadripper PRO 5995WX", cores: 64, threads: 128, baseClock: "2.7GHz", price: "₹5,30,000", image: "cpu_images/threadripper.jpg" }

];

const gpus = [
  { name: "NVIDIA GeForce GTX 1650", memory: "4GB GDDR5", boostClock: "1.66GHz", price: "₹11,000", image: "gpu_images/gtx1650.jpg" },
  { name: "NVIDIA GeForce RTX 3060", memory: "12GB GDDR6", boostClock: "1.78GHz", price: "₹26,000", image: "gpu_images/rtx3060.jpg" },
  { name: "NVIDIA GeForce RTX 4070", memory: "12GB GDDR6X", boostClock: "2.48GHz", price: "₹55,000", image: "gpu_images/rtx4070.jpg" },
  { name: "NVIDIA GeForce RTX 4090", memory: "24GB GDDR6X", boostClock: "2.52GHz", price: "₹1,50,000", image: "gpu_images/rtx4090.jpg" },
  { name: "NVIDIA GeForce RTX 5070Ti", memory: "12GB GDDR7", boostClock: "2.50GHz", price: "₹64,660", image: "gpu_images/rtx5070ti.jpg" },
  { name: "NVIDIA GeForce RTX 5090", memory: "32GB GDDR7", boostClock: "2.60GHz", price: "₹3,80,000", image: "gpu_images/rtx5090.jpg" },
  { name: "AMD Radeon RX 6600", memory: "8GB GDDR6", boostClock: "2.49GHz", price: "₹17,000", image: "gpu_images/rx6600.jpg" },
  { name: "AMD Radeon RX 6700 XT", memory: "12GB GDDR6", boostClock: "2.58GHz", price: "₹32,000", image: "gpu_images/rx6700xt.jpg" },
  { name: "AMD Radeon RX 7900 XT", memory: "20GB GDDR6", boostClock: "2.4GHz", price: "₹72,000", image: "gpu_images/rx7900xt.jpg" },
  { name: "AMD Radeon RX 7900 XTX", memory: "24GB GDDR6", boostClock: "2.5GHz", price: "₹85,000", image: "gpu_images/rx7900xtx.jpg" }
];

function displayHardware(data, containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = "";
  data.forEach(item => {
    const card = document.createElement("div");
    card.className = "card";

    const detailsHTML = Object.entries(item).map(([key, value]) => {
      if (key !== "name" && key !== "image") {
        return `<p><strong>${key}:</strong> ${value}</p>`;
      }
      return "";
    }).join("");

    card.innerHTML = `
      <h3>${item.name}</h3>
      <div class="details">
        ${detailsHTML}
        <div class="image-box">
          <img src="${item.image}" alt="${item.name}" />
        </div>
      </div>
    `;

    card.addEventListener("click", () => {
      card.classList.toggle("active");
    });

    container.appendChild(card);
  });
}

displayHardware(cpus, "cpu-list");
displayHardware(gpus, "gpu-list");
