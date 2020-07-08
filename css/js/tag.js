const colors = {
  p: "#388e3C",
  div: "#1565c0",
  span: "#e53935",
  section: "#f67809",
  ul: "#5e35b1",
  ol: "#fbc02d",
  header: "#d81b60", 
  nav: "#64dd17",
  main: "#00acc1",
  footer: "#304ffe",
  form: "#9f6581",
  body: "#25b6da",
  padrao: "#616161",
  get(tag) {
    //tem essa tag? se sim colocar a cor dela se nao colocar cor padrao
    return this[tag] ? this[tag] : this.padrao;
  },
};

//pegando todo elemento com nome tag e para cada elemento
document.querySelectorAll(".tag").forEach((elemento) => {
  //transmofrmando tudo para letra minuscula
  const tagName = elemento.tagName.toLowerCase();
  //definindo uma cor no elemento
  elemento.style.borderColor = colors.get(tagName);
  //se nao tiver "nolabel"
  if (!elemento.classList.contains("nolabel")) {
    //criar o elemento label
    const label = document.createElement("label");
    //definindo uma cor no elemento criado (label)
    label.style.backgroundColor = colors.get(tagName);
    //inserindo o nome no label criado
    label.innerHTML = tagName;
    //inserindo na linha antes o nome da tag
    elemento.insertBefore(label, elemento.childNodes[0]);
  }
});
