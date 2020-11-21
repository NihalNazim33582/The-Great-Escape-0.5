class Health{
    constructor(amountH){
       
        this.hp = [];
        var x=50;

        for(var i=0;i<amountH;i++){
            var h = createSprite(x+5*i,40,5,5);
            this.hp.push(h);
        }
    }

}