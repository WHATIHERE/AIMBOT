//==============================================
//==============================================
//==================QUALITY SHOP================
//=======DC: https://discord.gg/rHDYnCrdKK======
// ขายต่อพ่องมึงนะไอสัส และ ขอให้มึงตกนรกอเวจีปอยเปรต ควย!!
//==============================================
//==============================================

RegisterCommand(commandName, (source, arg) => {
    if (arg == "open") {
        emitNet('aimbot:kuyrai', source, "isOpen")
    } else {
        emitNet('aimbot:kuyrai', source,"isClose")
    }
})
