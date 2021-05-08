

(function () {

    const activeArea = document.querySelector("[data-tags='active']");
    const text = activeArea.innerHTML;

    let regex = new RegExp(/\#(\w+)/g);
    let matches = text.match(regex);
    console.log("Matches:", matches);

    // clear area
    activeArea.innerHTML = '';

    matches.forEach((i) => {

        let node = document.createElement('i');

        node.innerHTML = i.replace('#', '')
        node.classList.add('tag');
        activeArea.appendChild(node);
    });


})()