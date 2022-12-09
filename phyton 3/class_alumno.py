class Alumno:

    def __init__(self):
        self.nombre=input("Ingrese el nombre del alumno: ")
        self.nota=float(input("Ingrese la nota: "))


    def print(self):
        print("Nombre: ",self.nombre)
        print("nota: ",self.nota)

        if self.nota  >=3:
            print("Aprobo")
        else:
            print("No Aprobo")
alumno=Alumno()
alumno.print()
