console.log('ketan');
var z = 3;
function main(x,y){
    console.log(z);
    return x+y;
}
console.log(main(3,5));
module.exports = {
    y:z
};
// in node by default module.exports is this (pre-defined internally) , so when we soecifically say module.exports = soemthing it modifies modules.this
// if we have to use this we take var self = this and do all things we wanted to do on this in self