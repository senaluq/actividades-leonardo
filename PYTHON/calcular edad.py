from tkinter import *
from tkinter import ttk

def hacer_click():
 try:
  _edad = int(entrada_texto.get())
  if _edad>=18:
    etiqueta.config(text="mayor de edad")
  else:
    etiqueta.config(text="menor  de edad")
 except ValueError:
  etiqueta.config(text="Introduce un numero!")


app = Tk()
app.title("Calcular edades")
app['bg']='#F08AD4'

#Ventana Principal
vp = Frame(app)
vp.grid(column=0, row=0, padx=(100,100), pady=(200,200))
vp.columnconfigure(10, weight=10)
vp.rowconfigure(10, weight=10)
vp.configure(bg='red')

etiqueta = Label(vp, text="digite su edad ")
etiqueta.grid(column=2, row=2, sticky=(W,E))
etiqueta.configure(bg='pink')

boton = Button(vp, text="OK!", command=hacer_click)
boton.grid(column=1, row=1)
boton.configure(bg='pink')
boton.configure(fg='black')

valor = ""

entrada_texto = Entry(vp, width=30, textvariable=valor)
entrada_texto.grid(column=2, row=1)
entrada_texto.configure(bg='pink')




app.mainloop()
