import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  getLoan = (value:number): void => {

    if(this.validateStatus()){
      const newBalance = this.setBalance(value);
      console.log(`Voce pegou um empréstimo de ${value} seu novo saldo é de ${newBalance}`)
    }
    
  }
}
