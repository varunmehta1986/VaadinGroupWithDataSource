import { LitElement, html } from "lit-element";
import '@vaadin/vaadin-radio-button/vaadin-radio-group';
import '@vaadin/vaadin-radio-button/vaadin-radio-button';

class VaadinRadiogroupDataSource extends LitElement {
    static get properties() {
        return {
            radioGroupItems: { type: Array },
            selectedGrocery : {type:String}
        }
    }
    constructor() {
        super();
        this.radioGroupItems = ["Milk", "Bananas", "Eggs"];
        this.updateComplete.then(() => {
            var radioGroup = this.shadowRoot.querySelector("vaadin-radio-group");
            //in case you want to have a default checked None option.
            var radioGroupList = "<vaadin-radio-button value='None' checked>None</vaadin-radio-button>";
            for (let i = 0; i < this.radioGroupItems.length; i++) {
                radioGroupList += "<vaadin-radio-button value = '" + this.radioGroupItems[i] + "'>" +
                    this.radioGroupItems[i] + "</vaadin-radio-button>";
            }
            radioGroupList+= ""
            radioGroup.innerHTML += radioGroupList;
        });
    }
    render() {
        return html`

            <vaadin-radio-group theme="vertical" @value-changed= "${this.radioValueChanged}">
            </vaadin-radio-group>
        `;
    }
    radioValueChanged(e){
        this.selectedGrocery = e.target.value;
    }
}
customElements.define("vaadin-radiogroup-datasource", VaadinRadiogroupDataSource);