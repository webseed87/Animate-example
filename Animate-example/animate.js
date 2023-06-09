class Animate {
    constructor(selector,opiton){
        this.selector = selector
        this.opiton = {duration:500, ...opiton}
        this.startTime =  performance.now()
         this.currentValue = null;
         this.isString = typeof this.opiton.value
            if(this.opiton.prop ==='scroll'){
                this.currentValue = this.selector.scrollY || this.selector.pageYOffset
            } 
            else{
                this.currentValue = parseFloat( getComputedStyle(this.selector)[this.opiton.prop])}
           
        

            if (this.isString === 'string') {
                const parentW = parseInt(getComputedStyle(this.selector.parentElement).width)
                const parentH =parseInt(getComputedStyle(this.selector.parentElement).height)
        
                const x = ['margin-left','margin-right', 'left', 'right', 'width']
                const y = ['margin-top','margin-bottom', 'top', 'bottom', 'height']
                for (let condititon of x) if(this.opiton.prop === condititon) this.currentValue = (currentValue/parentW)*100;
                for (let condititon of y) if(this.opiton.prop === condititon) this.currentValue = (currentValue/parentH)*100;
                opiton.value = parseFloat(this.opiton.value);
            }
        
            if(this.opiton.value === this.currentValue) return
           requestAnimationFrame(time =>this.run(time))
        
    
}

 run(time){
    let timeLast = time - this.startTime
    let progress = timeLast/this.opiton.duration

    if(progress < 0 ) progress = 0 
    if(progress > 1) progress = 1
    if(progress < 1 ) { 
        requestAnimationFrame(time=>this.run(time))
    }
    else{
      if(this.opiton.callback)  this.opiton.callback();
    }


    let result = this.currentValue + (  this.opiton.value - this.currentValue )*progress  
    
    if(this.isString === 'string') {
        this.selector.style[this.opiton.prop] = `${result}%`
    }
    else if(this.opiton.prop === 'opacity'){
        this.selector.style[this.opiton.prop] =result
    }

    else if(this.opiton.prop === 'scroll'){
        this.window.scrollTo(0,result)
    }
    else {
    this.selector.style[this.opiton.prop] = `${result}px`
    }

}
}



 



