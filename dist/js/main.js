

class Tags {
    constructor(callback = undefined) {
        this.callback = callback
        this.autorun = this.autorun()
    }


    autorun() {

        const activeArea = document.querySelector("[data-tags='active']");
        const text = activeArea.innerHTML;

        let regex = new RegExp(/\#(\w+)/g);
        let matches = text.match(regex);

        // clear area
        activeArea.innerHTML = '';

        matches.forEach((i) => {

            let node = document.createElement('i');

            node.innerHTML = i.replace('#', '');
            node.classList.add('tag');


            node.addEventListener('click', this.callback)


            activeArea.appendChild(node);
        });

    }

}


module.exports = { Tags }

