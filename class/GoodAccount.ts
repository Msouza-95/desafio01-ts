import { DioAccount } from "./DioAccount";

class GoodAccount extends DioAccount{
    constructor(name: string, accountNumber: number){
        super(name, accountNumber)
      }
    // Metodo Good Depósito, que acresce 10 a mais ao valor informado para depósito.
    // (Ex: Um depósito de 100, será de 110 no final)
      goodDeposit = (value:number):void => {

        if(this.validateStatus()){

            const newbalance =this.setBalance(value+10)
            console.log(`Voce depositou: ${value} e foram acrescido o valor de 10 como bonus`)
            console.log(`Seu novo saldo é : ${newbalance}`)
        }

      }
}

export default GoodAccount;