class GaugeChart extends HTMLElement {
  constructor() {
    super();
    this._value = 50;
    this.attachShadow({ mode: "open" });
  }

  set value(val) {
    this._value = val;
    this.render();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <canvas id="gauge" width="200" height="100"></canvas>
    `;
    const ctx = this.shadowRoot.getElementById("gauge").getContext("2d");
    new Chart(ctx, {
      type: "doughnut",
      data: { datasets: [{ data: [this._value, 100 - this._value], backgroundColor: ["#00aaff", "#eeeeee"], borderWidth: 0 }]},
      options: { circumference: Math.PI, rotation: Math.PI, cutout: "80%", plugins: { legend: { display: false } } }
    });
  }
}

customElements.define("custom-gauge", GaugeChart);
