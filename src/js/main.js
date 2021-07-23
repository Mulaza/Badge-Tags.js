
class BadgeTags {
    constructor(object = {}) {

        this.backgroundColor = object.backgroundColor ? object.backgroundColor : "#e3e9ed";
        this.textColor = object.textColor ? object.textColor : "#798b97";
        this.borderColor = object.borderColor ? object.borderColor : "transparent";
        this.shape = object.shape ? object.shape : 'box'
        this.callback = object.callback;

        this.autorun = this.autorun()
    }


    autorun() {

        const activeArea = document.querySelector("[data-badge-tags='active']");
        const text = activeArea.innerHTML;

        const regex = new RegExp(/\#(\w+)/g);
        let matches = text.match(regex);

        // clear area
        activeArea.innerHTML = '';

        matches.forEach((i) => {

            let node = document.createElement('i');
            node.innerHTML = i.replace('#', '');
            node.style.fontSize = "0.9rem";
            node.style.padding = "4px 13px";
            node.style.margin = "4px";
            node.style.display = "inline-flex";
            node.style.borderStyle = "solid";
            node.style.borderWidth = "1px";
            node.style.borderColor = "transparent";
            node.style.justifyContent = "center";
            node.style.alignItems = "center";
            node.style.fontFamily = "Helvetica";
            node.style.fontStyle = "normal";
            node.style.transition = "background-color 0.2s";
            node.style.cursor = "pointer";
            node.onmouseover = function () { node.style.backgroundColor = "#cfd9e0" };


            // Shape
            if (this.shape == 'pill') {
                node.style.borderRadius = "555px";
            } else {
                node.style.borderRadius = "5px";
            };


            //  Colors
            node.style.backgroundColor = this.backgroundColor;
            node.style.color = this.textColor;
            node.style.borderColor = this.borderColor;


            node.addEventListener('click', this.callback);


            activeArea.appendChild(node);
        });

    }

}
