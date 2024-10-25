import * as type from "./typeActions";
export function ajouter_article(nom_article) {
  return {
    type: type.AJOUTER,
    acticle: nom_article,
  };
}

export function vider_panier() {
  return {
    type: type.VIDER,
  };
}
