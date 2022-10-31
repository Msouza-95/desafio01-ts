import { CompanyAccount } from './class/CompanyAccount'
import { DioAccount } from './class/DioAccount';
import GoodAccount from './class/GoodAccount';
import { PeopleAccount } from './class/PeopleAccount'
console.log("------------------------------------------");
console.log(" ------ Teste PeopleAccount -------")
const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Matheus', 10)
console.log(peopleAccount)
peopleAccount.deposit(10)
peopleAccount.withdraw(5)
console.log(peopleAccount.getName())
peopleAccount.setName("matheus")
console.log(peopleAccount)

console.log("------------------------------------------");
console.log(" ------ Teste CompanyAccount -------")
const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
console.log(companyAccount)
companyAccount.deposit(15)
companyAccount.withdraw(16)
console.log(companyAccount.getName())
companyAccount.setName("dio")
console.log(companyAccount)
console.log("------------------------------------------");

console.log("------------------------------------------");
console.log(" ------ Teste GoodAccount -------")
const dioAccount: GoodAccount= new GoodAccount('DeusS', 50)
console.log(companyAccount)
companyAccount.deposit(15)
companyAccount.withdraw(16)
console.log(companyAccount.getName())
companyAccount.setName("dio")
console.log(companyAccount)
console.log("------------------------------------------");