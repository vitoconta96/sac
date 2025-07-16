class SimpleGauge extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<div style="font-size:24px; color:#00aaff;">Gauge Widget Funziona!</div>`;
  }
}
customElements.define("custom-gauge", SimpleGauge);
