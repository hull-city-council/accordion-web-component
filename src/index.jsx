import r2wc from "@r2wc/react-to-web-component";
import AccordionWebComponent from "./App";

const AccordionComponent = r2wc(AccordionWebComponent);

customElements.define("accordion-component", AccordionComponent);
