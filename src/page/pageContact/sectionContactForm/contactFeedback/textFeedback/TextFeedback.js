/* Desenvolvido por - Bruno Marcondes */

import ImgContactFeedback from "../imgContactFeedback/ImgContactFeedback";

import styles from "./TextFeedback.module.css";

export default function TextFeedback({
  txtFb,
  linkFb,
  hrefFb,
  targetFb,
  relFb,
}) {
  return (
    <>
      <p className={styles.txtContactFeedback}>{txtFb}</p>
      <a
        className={styles.linkContactFeedback}
        target={targetFb}
        rel={relFb}
        href={hrefFb}
      >
        {linkFb}
        <ImgContactFeedback
          pathImgFb="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAZCAYAAAAv3j5gAAACZElEQVRIia2Wz4uOURTHv/edV5JGyWtmjJnRsKAxNGqSRCg/alZKVjbsbOQPEAuykK0oG8aUBU0ZkUTjxwILJLOxkcWMZJqh/BoxfHTqvLndd955Ht73bG7P9577/Z5z7nPvuUEZBsyTtFFSr6QmSSVfMSFpXNJTSY9CCFNZXDMasAW4Dnwn28xnCNhcja8iI6BDUr+krQ79kvRC0kNJo5ImHV8kyXyNvEdSg+PDkvaHEEZny2IXMOnxTwDHgeYc2TcDJ6K1Nu6s5rwB+OKOd4DWzPpWcjQBN5zjG7BppojK0VwEMn+SWcQC0B9VZXE8ed4nhoHi/4pEfEXgvnOeK4MdwDTwA+iqVSQSWw38dO52Aw678tV6iURig859qCCpz/HBegtFnH0m1Okfz5NoCsAOoCXB1wLrEqzkRyPd32c+dprTZ0+vMVl81PHXEdblNf8N9Eb4S/c9lXA0Ov6pEJ3o6SQa8tQm8a2+Bhhz1fYEt9JtT28GoBvoSbCSl7mY4Cud+5V93PaPvf+QQS4D9jn3LSvdPV+0u95Ckvb4eNNU2/yw2uFaUcdsuqMD21YGL3iKdm00ZLJki8wBHjjn2XjCNvNd+RTXKGKX6oBzjRt36nDJJ4/UILIk+rm+WutJHVqjlr0mwu0Xn59DoAU4CXyo1vjsOl8gaUjSXBtDCCO+eLmkAUnWEEe8lb9JWvmyqJUXHL8r6UAIYSyN5opH8dayAbYBZ7xD5rUp4FpFR43MNs6eTH+7YBSDpMuSjvkjZL2kpZIW+pw9t977c+tx5nMLOAh89IvSavwEOA2sytqb3CbpD86T0NUgBYhdAAAAAElFTkSuQmCC"
          altImgFb="Ícone de Feedback"
        />
      </a>
    </>
  );
}
