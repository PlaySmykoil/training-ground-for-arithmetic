interface IAnswer { 
  firstNumber: number, 
  secondNumber: number, 
  value: number, 
  action: '*' | '+' 
}

export class Answer implements IAnswer {
  firstNumber: number
  secondNumber: number
  value: number
  action: '+' | '*'

  constructor ({ firstNumber, secondNumber, value, action }: IAnswer) {
    this.firstNumber = firstNumber
    this.secondNumber = secondNumber
    this.value = value
    this.action = action
  }

  get success(): boolean {
    return eval(`${this.firstNumber} ${this.action} ${this.secondNumber} === ${this.value}`)
  }

  get decision(): number {
    return eval(`${this.firstNumber} ${this.action} ${this.secondNumber}`)
  }
}