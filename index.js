const main = document.getElementById("main");
main.remove();

const newHeader = document.createElement('h1');
newHeader.setAttribute("id", "victory");
newHeader.setAttribute("YOUR-NAME", "YOUR-NAME");
newHeader.textContent = "YOUR-NAME" + "is the champion";
document.body.append(newHeader);

/*
const element = document.createElement("div");
const ul = document.createElement('ul');

for(let i = 0;i < 3;i++) {
  const li = document.createElement('li');
  li.textContent = (i + 1 ).toString();
  ul.append(li);
}

element.append(ul)

document.body.append(element);
*/