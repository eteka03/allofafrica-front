const fakeCardData = Array.from({ length: 40 })
  .map((data, i) => {
    let random = Math.random() * 10;
    let dataToreturn;
    random > 5
      ? (dataToreturn = { cat: "restaurant", nom: `restau - ${i}` })
      : (dataToreturn = { cat: "hotels", nom: `hotel - ${i}` });

    return dataToreturn;
  })
  .reduce((tabByCat, obj) => {
    const { nom } = obj;

    tabByCat[obj.cat] = [...(tabByCat[obj.cat] || []), { nom }];

    return tabByCat;
  }, {});

export default fakeCardData;
