import { LitElement, html } from "lit-element";
import { unsafeHTML } from 'lit-html/directives/unsafe-html';
import '@vaadin/vaadin-radio-button/vaadin-radio-group';
import '@vaadin/vaadin-radio-button/vaadin-radio-button';

class VaadinRadiogroupDataSource extends LitElement {
    static get properties() {
        return {
            radioGroupItems: { type: Array },
            selectedGrocery: { type: String }
        }
    }
    constructor() {
        super();
        this.radioGroupItems = ["Milk", "Bananas", "Eggs"];
    }
    render() {
        var radioGroupList = "";
        for (let i = 0; i < this.radioGroupItems.length; i++) {
            radioGroupList += "<vaadin-radio-button value = '" + this.radioGroupItems[i] + "'>" +
                this.radioGroupItems[i] + "</vaadin-radio-button>";
        }
        return html`
            <vaadin-radio-group theme="vertical" @value-changed= "${this.radioValueChanged}">
                <vaadin-radio-button value='None' checked id="vrbNone">None</vaadin-radio-button> 
                 ${unsafeHTML(radioGroupList)}
            </vaadin-radio-group>
        `;
    }
    radioValueChanged(e) {
        this.selectedGrocery = e.target.value;
    }
}
customElements.define("vaadin-radiogroup-datasource", VaadinRadiogroupDataSource);