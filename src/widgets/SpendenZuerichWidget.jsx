import { useEffect } from "react";

export const SpendenZuerichWidget = () => {
  useEffect(() => {
    // const script = document.createElement("script");
    // script.src = "https://tamaro.raisenow.com/sp-schweiz/latest/widget.js";
    // script.async = false;

    // document.body.appendChild(script);

    //@ts-ignore-comment
    window.rnw.tamaro.runWidget(".rnw-widget-container", {
      /***************Settings**************/

      // Sprache wählen (de,fr,it)
      language: "de",

      // Kampagnen-ID setzen (Projekt-UID aus Sextant)
      purposeDetails: {
        p1: {
          stored_campaign_id: 33838117,
        },
      },

      // Purpose (p1) in allen Sprachen hinterlegen
      translations: {
        de: {
          purposes: {
            p1: "SP queer",
          },
          payment_methods: {
            dd: "Lastschriftenverfahren (LSV/DD)",
          },
          payment_form: {
            datenschutz:
              '</br></br></br>Das Bundesgesetz über die politischen Rechte (BPR) verbietet die Annahme von anonymen Spenden. Wir sind deshalb verpflichtet die Postadresse abzufragen. Mit deiner Spende erklärst du dich einverstanden, dass die SP dich auf dem Laufenden halten darf. Mehr dazu <a href="https://www.sp-ps.ch/datenschutz-policy/" target="_blank">hier</a>.',
          },
        },
        fr: {
          purposes: {
            p1: "PS queer",
          },
          payment_methods: {
            dd: "Recouvrement direct (LSV/DD)",
          },
          payment_form: {
            datenschutz:
              '</br></br></br>La loi fédérale sur les droits politiques (LDP) interdit la réception de dons anonymes. Nous avons donc l\'obligation de demander l\'adresse postale. En faisant un don, vous acceptez que le PS vous tienne au courant de ses activités. En savoir plus <a href="https://www.sp-ps.ch/fr/politique-de-protection-des-donnees/" target="_blank">ici</a>.',
          },
        },
        it: {
          purposes: {
            p1: "PS queer",
          },
          payment_methods: {
            dd: "Addebito diretto (LSV/DD)",
          },
          payment_form: {
            datenschutz:
              '</br></br></br>La Legge federale sui diritti politici (LDP) vieta l\'accettazione di donazioni anonime. Siamo pertanto obbligati a richiedere l\'indirizzo postale. Con la tua donazione accetti che il PS ti informi sulle sue attività. Maggiori informazioni <a href="https://www.sp-ps.ch/datenschutz-policy/" target="_blank">qui</a>.',
          },
        },
      },

      // Standard-Beträge setzen
      amounts: [
        {
          if: "paymentType() == onetime",
          then: [50, 100, 200, 400],
        },
        {
          if: "recurringInterval() == monthly && paymentType() == recurring",
          then: [10, 20, 30, 50],
        },
        {
          if: "recurringInterval() == quarterly && paymentType() == recurring",
          then: [30, 60, 90, 150],
        },
        {
          if: "recurringInterval() == semestral && paymentType() == recurring",
          then: [60, 120, 180, 300],
        },
        {
          if: "recurringInterval() == yearly && paymentType() == recurring",
          then: [120, 240, 360, 600],
        },
      ],

      // Regelmässige Spenden aktivieren (optional) und Layout wählen (compact/list)
      paymentTypes: [
        "onetime",
        //'recurring'
      ],
      recurringIntervalsLayout: "compact",

      // Stored_hidden_parameter aktivieren und setzen (optional)
      paymentFormPrefill: {
        stored_customer_email_permission: true,
        stored_customer_donation_receipt: true,
        stored_customer_country: "CH",
        stored_sxt_address_source: "1008",
        stored_sxt_product_id: "209933",
        //stored_hidden_parameter: 'myValue',
      },

      // Sonstige Konfigurationen (nur bei begründetem Bedarf anpassen)
      testMode: false,
      debug: false,
      purposes: ["p1"],
      showFields: {
        stored_customer_email_permission: false,
        stored_customer_donation_receipt: false,
        stored_customer_birthdate: false,
      },
      showFooter: false,
      slots: {
        end: [
          {
            component: "content",
            text_html: "payment_form.datenschutz",
          },
        ],
      },
      //minimumCustomAmount: [15],
      //allowCustomAmount: true,
      //layout: 'list',
    });
  }, []);
  return null;
};
