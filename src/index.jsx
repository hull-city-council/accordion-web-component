import r2wc from "@r2wc/react-to-web-component";
import ContactUsWebComponent from "./App";

const contactUsWebComponent = r2wc(ContactUsWebComponent);

customElements.define("contact-us-component", contactUsWebComponent);
