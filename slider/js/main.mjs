import Animate from './animaite.mjs';

export default class Slider {
    constructor(selector, opt){
        this.slider = document.querySelector(selector);
        this.panel = this.slider.querySelector(opt.panel);
        this.btns = this.slider.querySelectorAll(opt.btns);
        this.ring = this.slider.querySelector(opt.ring); 
        this.speed = opt.duration;     

        this.btns.forEach((el, index)=>{
            el.addEventListener('click', e=>{
                e.preventDefault();
        
                let isOn = e.currentTarget.classList.contains('on');
                if(isOn) return;
        
                this.activation(index);
            })
        })
    }

    activation(index){      
        new Animate(this.panel,{
            prop: 'margin-left',
            value: `${-100*index}%`,
            duration: this.speed
        })
    
        for(let btn of this.btns) btn.classList.remove('on');
        this.btns[index].classList.add('on');
    
        this.ring.className='';
        this.ring.classList.add('rot'+index);
    }
}
