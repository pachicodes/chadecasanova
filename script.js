const gifts = [
  {
    id: 1,
    name: "Porta temperos para armario (5 potes, preto) - Unidade 1",
    url: "https://shopee.com.br/Porta-Temperos-Para-Arm%C3%A1rio-2-a-5-Potes-Organizador-de-Condimentos-Economiza-Espa%C3%A7o-Cozinha-Pote-i.404079657.58255464919?xptdk=7dbe83bb-3363-4258-8365-d943184c6883"
  },
  {
    id: 2,
    name: "Porta temperos para armario (5 potes, preto) - Unidade 2",
    url: "https://shopee.com.br/Porta-Temperos-Para-Arm%C3%A1rio-2-a-5-Potes-Organizador-de-Condimentos-Economiza-Espa%C3%A7o-Cozinha-Pote-i.404079657.58255464919?xptdk=7dbe83bb-3363-4258-8365-d943184c6883"
  },
  {
    id: 3,
    name: "Imagem Santa Sara Kali 30cm (gesso premium pintado)",
    url: "https://shopee.com.br/Imagem-Santa-Sara-Kali-30cm-Gesso-Premium-Pintado-i.1146960644.21399256355?xptdk=dc32f9a2-02e2-4341-ac23-45a04b145df4"
  },
  {
    id: 4,
    name: "Porta incenso pescador (aguas calmas)",
    url: "https://shopee.com.br/Porta-Incenso-Pescador-%C3%81guas-Calmas-Decora%C3%A7%C3%A3o-Zen-Canoa-Relaxamento-Decora%C3%A7%C3%A3o-Calma-e-Minimalista-i.1665375855.58255244610?xptdk=39cb4a67-ec08-4e2d-9c60-cbf51bc7aa03"
  },
  {
    id: 5,
    name: "Arranhador gato com rampa e toca (30x47cm)",
    url: "https://shopee.com.br/Arranhador-Gato-Rampa-Anti-Estresse-Casinha-Brinquedo-T%C3%B3ca-30x47cm-i.1610896010.58253767614?xptdk=5db25628-6a56-485f-b35b-02a4eec2ebc0"
  },
  {
    id: 6,
    name: "Suporte p/ extensao (fixador auto adesivo) - Kit 04",
    url: "http://shopee.com.br/Suporte-p-Extens%C3%A3o-Fixar-Filtro-de-Linha-e-Objetos-Diversos-Household-Auto-Adesivo-Plugue-Fixer-Broca-Livre-i.1078273222.23792826814?xptdk=1fdac74e-c2a5-4dfb-be3f-4273a0f6719e"
  },
  {
    id: 7,
    name: "Mini planner ima de geladeira (12x19,5cm)",
    url: "https://shopee.com.br/Mini-Planner-%C3%8Dm%C3%A3-de-Geladeira-Magn%C3%A9tico-Lista-de-Compras-Anota%C3%A7%C3%B5es-Lousa-12x19-5cm-i.387370849.22891462662?xptdk=d8151e5d-1275-4fe2-957e-6f5852f9af8f"
  },
  {
    id: 8,
    name: "Jogo de copos inox 250ml (opcao 6 unidades)",
    url: "https://shopee.com.br/Jogo-De-Copos-Inox-250ml-Alta-Resistencia-Dur%C3%A1vel-Para-Suco-Agua-Refrigerante-Kit-Copo-A%C3%A7o-Inox-12Un-i.382649146.22494376342?xptdk=b0eea8c8-69dd-4ca7-b2c8-5cb50588aa48"
  },
  {
    id: 9,
    name: "Regua extensao 6 tomadas + 4 USB + Tipo-C (modelo 5)",
    url: "https://shopee.com.br/R%C3%A9gua-Extens%C3%A3o-6-Tomadas-E-4-Entradas-USB-1-Entrada-Tipo-c-Bivolt-110-220v-PL-i.1603702792.58252157654?xptdk=95161253-1bcd-462e-80e6-b67c5e68970e"
  },
  {
    id: 10,
    name: "Colchonete camping 170x60cm solteiro",
    url: "https://shopee.com.br/Colchonete-Camping-170x60cm-Espregui%C3%A7adeira-Solteiro-para-Acampamento-Confort%C3%A1vel-i.1522265240.18698152309?xptdk=5f727baf-698a-4fb4-a690-4466d0fdfd18"
  },
  {
    id: 11,
    name: "Tapete protetor de pia silicone antirrespingos",
    url: "https://shopee.com.br/Tapete-Protetor-de-Pia-Silicone-Torneira-Antirrespingos-Dobr%C3%A1vel-Resistente-F%C3%A1cil-de-Limpar-i.1044608462.22394409218?xptdk=fcdacf5d-1d74-4c60-89e4-71ca982f803e"
  },
  {
    id: 12,
    name: "Aspirador de po vertical Philco Ciclone 2 em 1 1400W (127V)",
    url: "https://shopee.com.br/Aspirador-de-P%C3%B3-Vertical-Philco-Ciclone-2-em-1-1400W-PAS1550C-i.811034337.23796064307?xptdk=0dd7b833-5c6b-4fb7-9ec5-78279bb21fdf"
  },
  {
    id: 13,
    name: "Fruteira telada 26cm com tampa protetora",
    url: "https://shopee.com.br/Fruteira-Telada-26cm-com-Tampa-Protetora-A%C3%A7o-Ventilada-Anti-Moscas-Insetos-Cozinha-Casa-i.442356163.58255939663?xptdk=7b6a8ca1-2e12-4c04-89a7-86a2a60f3a50"
  },
  {
    id: 14,
    name: "Ferraduras sorte, fe e energia positiva",
    url: "https://shopee.com.br/Ferraduras-Sorte-Fe-Simpatia-energia-positiva-i.340103372.9212121325?xptdk=a1154bf1-04f0-4cea-8d58-404dd6432072"
  },
  {
    id: 15,
    name: "Cesto coador multifuncoes com funil",
    url: "https://shopee.com.br/Cesto-coador-multifun%C3%A7%C3%B5es-com-funil-para-lavagem-de-legumes-e-salada-de-frutas-i.1357069533.23898905949?xptdk=7a160476-cc54-49e9-9662-454b602ef1f3"
  },
  {
    id: 16,
    name: "Porta chave de parede criativo 15x21cm (Home Sweet Home)",
    url: "https://shopee.com.br/Porta-Chave-De-Parede-Criativo-15x21-cm-C-Vidro-Foto-Decora%C3%A7%C3%A3o-Casa-Home-Sweet-Home-i.714085280.20197031696?extraParams=%7B%22display_model_id%22%3A209156128483%2C%22model_selection_logic%22%3A3%7D"
  },
  {
    id: 17,
    name: "Kit 12 pregadores seladores com ima",
    url: "https://shopee.com.br/12-pregadores-Seladoras-Batatas-Fritas-%C3%80-Prova-De-Umidade-12-Clipes-De-Veda%C3%A7%C3%A3o-De-Conserva%C3%A7%C3%A3o-Fresca-%C3%8Dm%C3%A3-i.1392850246.20199563978?extraParams=%7B%22display_model_id%22%3A228776543395%2C%22model_selection_logic%22%3A3%7D"
  },
  {
    id: 18,
    name: "Puxa saco barrado bordado com vies rustico",
    url: "https://shopee.com.br/Puxa-Saco-Barrado-Bordado-com-Vi%C3%A9s-R%C3%BAstico-i.607254885.22494338714?extraParams=%7B%22display_model_id%22%3A189179521967%2C%22model_selection_logic%22%3A3%7D"
  },
  {
    id: 19,
    name: "Tapete porta de entrada antiderrapante",
    url: "https://shopee.com.br/Tapete-Porta-de-Entrada-Limpou-o-Pezinho-Capacho-Antiderrapante-Lav%C3%A1vel-Interno-Externo-i.1556901328.51705032503?extraParams=%7B%22display_model_id%22%3A355463800728%2C%22model_selection_logic%22%3A3%7D"
  },
  {
    id: 20,
    name: "Maleta de medicamentos e primeiros socorros",
    url: "https://shopee.com.br/Maleta-De-Medicamentos-Primeiros-Socorros-Caixa-Organizadora-De-Rem%C3%A9dios-C-2-Bandejas-10-Divisorias-i.369813937.20019963254?xptdk=47aa67f1-223b-4605-b3b0-30dff5bb353f"
  },
  {
    id: 21,
    name: "Panela eletrica mini waffle/quiche",
    url: "https://shopee.com.br/Panela-El%C3%A9trica-De-waffle-Quiche-De-Forno-Eggette-maker-Mini-Ferro-i.774134748.23293002949?xptdk=5f534262-e217-44f1-b8a0-94226690bbab"
  },
  {
    id: 22,
    name: "Kit 5 tapetes de piso para banheiro (45x70cm)",
    url: "https://shopee.com.br/Kit-5-Tapete-de-Piso-banheiro-45x70cm-100-Algod%C3%A3o-Super-Absorvente-Grande-Banheiro-Conforto-i.1629502407.58255553726?xptdk=8a95427a-1928-4e08-ac1f-cf0c67354515"
  },
  {
    id: 23,
    name: "Item Amazon (lista de desejos)",
    url: "https://www.amazon.com.br/dp/B07K32CH6K/?coliid=I232FIZKYWPB8K&colid=VT4P3HX0P1YB&psc=1&ref_=list_c_wl_lv_ov_lig_dp_it"
  },
  {
    id: 24,
    name: "Item Amazon (lista de desejos) 2",
    url: "https://www.amazon.com.br/dp/B0FD3CVQNJ/?coliid=I3KSST48VL1TCJ&colid=VT4P3HX0P1YB&ref_=list_c_wl_lv_ov_lig_dp_it&th=1"
  },
  {
    id: 25,
    name: "Item Amazon (lista de desejos) 3",
    url: "https://www.amazon.com.br/dp/B09VQ39F41/?coliid=I3OMF4C8NBFI54&colid=VT4P3HX0P1YB&ref_=list_c_wl_lv_ov_lig_dp_it&th=1"
  },
  {
    id: 26,
    name: "Item Amazon (lista de desejos) 4",
    url: "https://www.amazon.com.br/dp/B0FX72CBHK/?coliid=I5QF3PFZB6SGE&colid=VT4P3HX0P1YB&psc=1&ref_=list_c_wl_lv_ov_lig_dp_it"
  },
  {
    id: 27,
    name: "Item Amazon (lista de desejos) 5",
    url: "https://www.amazon.com.br/dp/B0C2JKFCTT/?coliid=I3ICK8AWLQC48D&colid=VT4P3HX0P1YB&ref_=list_c_wl_lv_ov_lig_dp_it&th=1"
  },
  {
    id: 28,
    name: "Liquidificador Diamante 800W (preto)",
    url: "https://www.amazon.com.br/Liquidificador-Diamante-800W-33102118-Preto/dp/B07659FXRM/ref=sr_1_3?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=14155NF074LVP&dib=eyJ2IjoiMSJ9.Pngi5UnwvNM31geKxTCD0pE-3x2swZ2NsRUUHoBzbTeE4uKLgD3hk6fR8mTTDJdWDLvr9IQs7k92qe-Et3WfTkTYT4cCUcvUpCRsK_IZxNFlZaOFJ8nFTtpEigmOfeu4Sg_qfJ9uqBB5wzq3NXqIEJIWaKmEJ3RhlykHrGZMIQRgr8zMDJrsrHzGgui4FalvT-8NJR1i10crtabhBsI_Lq7dQ3h4Ar_gEOFiQ5-WCw8.sPwUt0tR3oRdlLUbwe3zUZYUJeTJFKrgRnLV38fm4ug&dib_tag=se&keywords=liquidificador%2Bbritania&qid=1774810589&s=kitchen&sprefix=liquidificador%2Bbritania%2Ckitchen%2C351&sr=1-3&th=1"
  }
];

const boughtIds = new Set();

const giftListElement = document.getElementById("gift-list");
const confirmDialog = document.getElementById("confirm-dialog");
const dialogMessage = document.getElementById("dialog-message");
const confirmButton = document.getElementById("confirm-button");

let selectedGiftId = null;

function renderList() {
  giftListElement.innerHTML = "";

  gifts.forEach((gift) => {
    const isBought = boughtIds.has(gift.id);

    const item = document.createElement("li");
    item.className = `gift-item${isBought ? " done" : ""}`;

    const info = document.createElement("div");

    const title = document.createElement("p");
    title.className = "gift-name";
    title.textContent = gift.name;

    const badge = document.createElement("span");
    badge.className = `badge ${isBought ? "done" : "available"}`;
    badge.textContent = isBought ? "Comprado" : "Disponivel";

    info.appendChild(title);
    info.appendChild(badge);

    const actions = document.createElement("div");
    actions.className = "gift-actions";

    if (gift.url) {
      const link = document.createElement("a");
      link.className = "btn btn-secondary";
      link.href = gift.url;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.textContent = "Ver item";
      actions.appendChild(link);
    }

    const action = document.createElement("button");
    action.className = "btn btn-primary";
    action.type = "button";
    action.textContent = isBought ? "Ja comprado" : "Marcar como comprado";
    action.disabled = isBought;

    if (!isBought) {
      action.addEventListener("click", () => {
        selectedGiftId = gift.id;
        dialogMessage.textContent = `Tem certeza que deseja marcar \"${gift.name}\" como comprado?`;
        confirmDialog.showModal();
      });
    }

    item.appendChild(info);
    actions.appendChild(action);
    item.appendChild(actions);
    giftListElement.appendChild(item);
  });
}

confirmButton.addEventListener("click", (event) => {
  event.preventDefault();

  if (selectedGiftId === null) {
    confirmDialog.close();
    return;
  }

  boughtIds.add(selectedGiftId);
  selectedGiftId = null;
  confirmDialog.close();
  renderList();
});

confirmDialog.addEventListener("close", () => {
  selectedGiftId = null;
});

renderList();
