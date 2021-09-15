import Image from "next/image";
import henry from "../../assets/images/certificateHenry.png";
import efset from "../../assets/images/efset.png";
import { withTranslation } from "react-i18next";

const Certificates = ({ t }) => {
  let henryCertificate =
    "https://certificates.soyhenry.com/cert?id=797fa144-b34c-4383-b58c-05b1a4db28ea";
  let utnCertificate =
    "https://res.cloudinary.com/djnhaprmj/image/upload/v1619947730/utn-certicate_hdzya1.png";
  let efsetCertificate = "https://www.efset.org/cert/vCMdaz";

  return (
    <div className="container">
      <h1>{t("Certificates")}</h1>
      <div className="contentCertificates">
        <div className="certificate">
          <Image
            className="certificateImage"
            src={henry}
            alt="certificate-henry"
            objectFit="cover"
          />
          <button
            className="buttonCertificate"
            onClick={() => window.open(`${henryCertificate}`)}
          >
            {t("view certificate")}
          </button>
        </div>
        <div className="certificate">
          <Image
            className="certificateImage"
            src={utnCertificate}
            alt="certificate-henry"
            width={200}
            height={153.94}
          />
          <button
            className="buttonCertificate"
            onClick={() => window.open(`${utnCertificate}`)}
          >
            {t("view certificate")}
          </button>
        </div>
        <div className="certificate">
          <Image
            className="certificateImage"
            src={efset}
            alt="certificate-henry"
            width={200}
            height={153.94}
          />
          <button
            className="buttonCertificate"
            onClick={() => window.open(`${efsetCertificate}`)}
          >
            {t("view certificate")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default withTranslation()(Certificates);
