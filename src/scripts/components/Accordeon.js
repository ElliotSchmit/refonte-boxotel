export default class Accordeon{
    constructor(element){
        this.element = element;
         this.accordeons = this.element.querySelectorAll(".js-accordeon");


        this.init();
    }

    init(){
        for (let i = 0; i < this.accordeons.length; i++) {
            const accordeon = this.accordeons[i];
            accordeon.addEventListener('click', this.openClose.bind(this));
        }

    }

    openClose(event){
        if(event.currentTarget.classList.contains('accordeon-is-active')){
            event.currentTarget.classList.remove('accordeon-is-active');
        }
        else{
            for (let i = 0; i < this.accordeons.length; i++) {
                const accordeon = this.accordeons[i];
                accordeon.classList.remove('accordeon-is-active');
            }
            event.currentTarget.classList.add('accordeon-is-active');
        }
        
    }
}