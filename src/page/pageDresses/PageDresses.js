/* Desenvolvido por - Bruno Marcondes */
/* Função que exporta as seções para a página Vestidos */
import React, { lazy } from "react";
// import SectionDressesMenu from "./sectionDressesMenu/SectionDressesMenu";
// import SectionFirstDress from "./sectionFirstDress/SectionFirstDress";
// import SectionSecondDress from "./sectionSecondDress/SectionSecondDress";
// import SectionThirdDress from "./sectionThirdDress/SectionThirdDress";
// import SectionFourthDress from "./sectionFourthDress/SectionFourthDress";
// import SectionFifthDress from "./sectionFifthDress/SectionFifthDress";
// import SectionSixthDress from "./sectionSixthDress/SectionSixthDress";

const SectionDressesMenu = lazy(() =>
  import("./sectionDressesMenu/SectionDressesMenu")
);
const SectionFirstDress = lazy(() =>
  import("./sectionFirstDress/SectionFirstDress")
);
const SectionSecondDress = lazy(() =>
  import("./sectionSecondDress/SectionSecondDress")
);
const SectionThirdDress = lazy(() =>
  import("./sectionThirdDress/SectionThirdDress")
);
const SectionFourthDress = lazy(() =>
  import("./sectionFourthDress/SectionFourthDress")
);
const SectionFifthDress = lazy(() =>
  import("./sectionFifthDress/SectionFifthDress")
);
const SectionSixthDress = lazy(() =>
  import("./sectionSixthDress/SectionSixthDress")
);

export default function PageDresses() {
  return (
    <main>
      <SectionDressesMenu />
      <SectionFirstDress />
      <SectionSecondDress />
      <SectionThirdDress />
      <SectionFourthDress />
      <SectionFifthDress />
      <SectionSixthDress />
    </main>
  );
}
