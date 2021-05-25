
class BadgeTags {
    constructor(object) {

        this.backgroundColor = object.backgroundColor ? object.backgroundColor : "rgb(240, 240, 240";
        this.textColor = object.textColor ? object.textColor : "grey";
        this.borderColor = object.borderColor ? object.borderColor : "transparent";
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

            //  Colors
            node.style.backgroundColor = this.backgroundColor;
            node.style.color = this.textColor;
            node.style.borderColor = this.borderColor;


            node.addEventListener('click', this.callback)


            activeArea.appendChild(node);
        });

    }

}
