import Image from "next/image";
import henry from "../../assets/images/certificateHenry.png";
import efset from "../../assets/images/efset.png";
import alkemy from "../../assets/images/certificate_alkemy.png";
import { withTranslation } from "react-i18next";

const Certificates = ({ t }) => {
  let henryCertificate =
    "https://certificates.soyhenry.com/cert?id=797fa144-b34c-4383-b58c-05b1a4db28ea";
  let utnCertificate =
    "https://res.cloudinary.com/djnhaprmj/image/upload/v1619947730/utn-certicate_hdzya1.png";
  let efsetCertificate = "https://www.efset.org/cert/vCMdaz";
  let alkemyCertificate = "https://assets.alkemy.org/certificates/auth0|60f9cfee31de08001aba5a6b/55d92dd7-10fc-45b6-ba07-8a4c5d1fd01f.pdf";

  return (
    <div className="container">
      <div className="contentCertificates">
        <h1>{t("Certificates")}</h1>
        <div className="contentCertificates__box">
          <div className="certificate">
            <Image
              className="certificateImage"
              src={henry}
              alt="certificate-henry"
              width={200}
              height={165}
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
              height={165}
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
              height={165}
            />
            <button
              className="buttonCertificate"
              onClick={() => window.open(`${efsetCertificate}`)}
            >
              {t("view certificate")}
            </button>
          </div>
          <div className="certificate">
            <Image
              className="certificateImage"
              src={alkemy}
              alt="certificate-alkemy"
              width={200}
              height={165}
            />
            <button
              className="buttonCertificate"
              onClick={() => window.open(`${alkemyCertificate}`)}
            >
              {t("view certificate")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withTranslation()(Certificates);
