const os =require('os');

//info about the current user
const user = os.userInfo();

//method return the systen uptime in seconds
const currentOs={
    name:os.type(),
    release:os.release(),
    totalMen:os.totalmem(),
    freeMen:os.freemem()
}
console.log(currentOs);