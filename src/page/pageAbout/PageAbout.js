/* Desenvolvido por - Bruno Marcondes */
/* Função que exporta as seções para a página Sobre */

import SectionAboutBanner from "./sectionAboutBanner/SectionAboutBanner";
import SectionAboutText from "./sectionAboutText/SectionAboutText";
import SectionAboutFeedback from "./sectionAboutFeedback/SectionAboutFeedback";

export default function PageAbout() {
  return (
    <main>
      <SectionAboutBanner />
      <SectionAboutText />
      <SectionAboutFeedback />
    </main>
  );
}
