import React from "react";

import Button from "./Button.js";
class CardResult extends React.Component {
  render() {
    const { results } = this.props;

    // console.log(results[0].id);

    const fakeResult = [
      {
        id: 1,
        title: "Tieni in ordine il prato con il tagliaerba",
        description:
          "Il tagliaerba è il tuo miglior alleato per prenderti cura e tenere sempre in ordine il tuo spazio verde. Per svolgere un buon lavoro in breve tempo e con poco sforzo, scegli la tipologia giusta considerando le dimensioni del tuo giardino, il tipo di terreno e l’alimentazione più adatta.",
        url:
          "https://www.leroymerlin.it/prodotti/tagliaerba-CAT749-c?ruleFilter=FRULE66412%2CFRULE1920675"
      },
      {
        id: 5,
        title: "Tieni in ordine il prato con il tagliaerba",
        description:
          "Il tagliaerba è il tuo miglior alleato per prenderti cura e tenere sempre in ordine il tuo spazio verde. Per svolgere un buon lavoro in breve tempo e con poco sforzo, scegli la tipologia giusta considerando le dimensioni del tuo giardino, il tipo di terreno e l’alimentazione più adatta.",
        url:
          "https://www.leroymerlin.it/prodotti/tagliaerba-CAT749-c?ruleFilter=FRULE1269%2CFRULE1306"
      }
    ];

    const resultMap = fakeResult.map(res => (
      <div className="step-card" key={res.id}>
        <h3>{res.title}</h3>
        <p>{res.description}</p>
        <Button
          className={"button"}
          name="ECCO COSA ABBIAMO SCELTO PER TE"
          url={res.url}
        />
      </div>
    ));

    return (
      <div>
        <div>
          <h1>{"This will always render"}</h1>
        </div>
        {resultMap}
      </div>
    );
  }
}

export default CardResult;
