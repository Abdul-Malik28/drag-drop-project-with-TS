export default class Component {
    constructor(templateId, hostElementId, insertAtstart, newElementId) {
        this.templateElement = document.getElementById(templateId);
        this.hostElement = document.getElementById(hostElementId);
        const importedNode = document.importNode(this.templateElement.content, true);
        this.element = importedNode.firstElementChild;
        if (newElementId) {
            this.element.id = newElementId;
        }
        this.attach(insertAtstart);
    }
    attach(insertAtBegginning) {
        this.hostElement.insertAdjacentElement(insertAtBegginning ? 'afterbegin' : 'beforeend', this.element);
    }
}
//# sourceMappingURL=base-component.js.map