function compras(trb1, trb2)
{
    const comprarSorvete = trb1 || trb2
    const compraTv50 = trb1 && trb2
    const comprarTv32 = trb1 != trb2 // ou exclusivo
    const manterSaudavel = !comprarSorvete

    return { comprarSorvete, compraTv50, comprarTv32, manterSaudavel } // implicitamente está sendo criado o par chave valor
}

console.log(compras(true, true))
console.log(compras(true, false))