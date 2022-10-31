export abstract class DioAccount {
  private readonly  name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  setName = (name: string): void => {
    
    console.log('Não é permitido alterar o nome da conta')
  }

  getName = (): string => {
    return this.name
  }

  deposit = (value:number): void => {
    if(this.validateStatus()){
    const newbalance =this.setBalance(value)
      console.log(`Voce depositou: ${value}`)
      console.log(`Seu novo saldo é : ${newbalance}`)
    }
    
  }

  withdraw = (value:number): void => {
    if(this.validateStatus()){
      if(this.balance>=value){
        const newbalance = this.setBalance(- value)
        console.log(`Voce sacou : ${value}`)
        console.log(`Seu novo saldo é : ${newbalance}`)
      }
      console.log('Saldo insuficiente')
      
    }
    
  }

  getBalance = (): void => {
    console.log(this.balance)
  }
  setBalance = (value:number): number => {
    this.balance += value;

    return this.balance;
  }
 validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
