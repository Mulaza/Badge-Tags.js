
class BadgeTags {
    constructor(object = {}) {

        this.backgroundColor = object.backgroundColor ? object.backgroundColor : "#f0f0f0";
        this.textColor = object.textColor ? object.textColor : "grey";
        this.borderColor = object.borderColor ? object.borderColor : "transparent";
        this.shape = object.shape ? object.shape == 'pill' || 'box' : 'pill'
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
            node.classList.add('tag');

            // Shape
            if (this.shape == 'box') {
                node.style.borderRadius = "5px"
            }


            //  Colors
            node.style.backgroundColor = this.backgroundColor;
            node.style.color = this.textColor;
            node.style.borderColor = this.borderColor;


            node.addEventListener('click', this.callback)


            activeArea.appendChild(node);
        });

    }

}
