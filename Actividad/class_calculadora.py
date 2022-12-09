
class Calculadora:

    def __init__(self):
        self.num1 = int(input("Ingrese numero uno: "))
        self.num2 = int(input("Ingrese numero dos: "))
        
    def suma(self):
        sume = self.num1 + self.num2
        print(sume)
  
    def resta(self):
        rest = self.num1 - self.num2
        print(rest)

    def multi(self):
        multipli = self.num1* self.num2
        print(multipli)

    def divi(self):
        if self.num1 == 0:
            print("el numeo uno es igula a cero ")
        else:
            dividir= self.num1/self.num2
            print(dividir)
        
calculadora=Calculadora()
calculadora.suma()
calculadora.resta()
calculadora.multi()
calculadora.divi()
