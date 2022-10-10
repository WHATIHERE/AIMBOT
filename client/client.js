//==============================================
//==============================================
//==================QUALITY SHOP================
//=======DC: https://discord.gg/rHDYnCrdKK======
// ขายต่อพ่องมึงนะไอสัส และ ขอให้มึงตกนรกอเวจีปอยเปรต ควย!!
//==============================================
//==============================================

RegisterNetEvent('aimbot:kuyrai')
onNet('aimbot:kuyrai', (arg) => {
    SetNuiFocus(true, true)
    SendNUIMessage({
        type: arg,
    })
})

RegisterNuiCallbackType('close')
on('__cfx_nui:close', (data) =>{
    SetNuiFocus(false,false)
})