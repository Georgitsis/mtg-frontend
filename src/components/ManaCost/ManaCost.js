import React from "react";
import "./ManaCost.css";

export default function ManaCost(props) {
  const { manaCost } = props;

  const manaSymbolArrayCreator = (manaCostString) => {
    if (!manaCostString) return;
    let _manaCostString = manaCostString;
    let manaSymbolArray = [];
    while (_manaCostString.length > 0) {
      const i = _manaCostString.indexOf("}");
      const manaType = _manaCostString.slice(1, i).replace(/\//g, "");
      manaSymbolArray.push(manaType);
      _manaCostString = _manaCostString.slice(i + 1);
    }
    return manaSymbolArray;
  };
  const manaSymbolArray = manaSymbolArrayCreator(manaCost);

  return manaSymbolArray.map((symbol, index) => {
    return <img key={symbol + "-" + index} className="mana-cost-img" src={`/assets/images/${symbol}.svg`} />;
  });
}
