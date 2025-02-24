import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators";
import type { CountrySelector } from "../../data/selector";
import type { HomeAssistant } from "../../types";
import "../ha-country-picker";

@customElement("ha-selector-country")
export class HaCountrySelector extends LitElement {
  @property({ attribute: false }) public hass!: HomeAssistant;

  @property({ attribute: false }) public selector!: CountrySelector;

  @property() public value?: any;

  @property() public label?: string;

  @property() public helper?: string;

  @property({ type: Boolean }) public disabled = false;

  @property({ type: Boolean }) public required = true;

  protected render() {
    return html`
      <ha-country-picker
        .hass=${this.hass}
        .value=${this.value}
        .label=${this.label}
        .helper=${this.helper}
        .countries=${this.selector.country?.countries}
        .noSort=${this.selector.country?.no_sort}
        .disabled=${this.disabled}
        .required=${this.required}
      ></ha-country-picker>
    `;
  }

  static styles = css`
    ha-country-picker {
      width: 100%;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    "ha-selector-country": HaCountrySelector;
  }
}
