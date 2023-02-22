/* Desenvolvido por - Bruno Marcondes */
/* Função que exporta as seções para a página Serviços */
// import { lazy } from "react";
import SectionServicesTitle from "./sectionServicesTitle/SectionServicesTitle";
import SectionServicesAccessories from "./sectionServicesAccessories/SectionServicesAccessories";
import SectionServiceVeils from "./sectionServiceVeils/SectionServiceVeils";
import SectionServicesOthers from "./sectionServicesOthers/SectionServicesOthers";

// const SectionServicesAccessories = lazy(() =>
//   import("./sectionServicesAccessories/SectionServicesAccessories")
// );
// const SectionServiceVeils = lazy(() =>
//   import("./sectionServiceVeils/SectionServiceVeils")
// );

export default function PageServices() {
  return (
    <main>
      <SectionServicesTitle />
      <SectionServicesAccessories />
      <SectionServiceVeils />
      <SectionServicesOthers />
    </main>
  );
}
