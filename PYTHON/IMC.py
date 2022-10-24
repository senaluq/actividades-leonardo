from tkinter import *
from tkinter import ttk
def hacer_click():
  try:
    _peso = int(entrada_textoa.get())
    _altura = float(entrada_textob.get())
    _imc =(_peso/(_altura**2))
    if _imc <= 18.5:
        _etiqueta.config(text=("bajo de peso ",_imc))
    elif _imc>18.5 :
        _etiqueta.config(text=("peso normal y saludable ",_imc))
    if _imc>=25 :
      _etiqueta.config(text=("estas en soobrepeso ",_imc))
     
  except ValueError:
    _etiqueta.config(text="Introduce un numero!")


app = Tk()
app.title("IMC")
app.config(bg='#F08AD4')


#Ventana Principal
vp = Frame(app)
vp.grid(column=0, row=0, padx=(50,50), pady=(60,60))
vp.columnconfigure(0, weight=1)
vp.rowconfigure(0, weight=1)
vp.configure(bg='red')

etiqueta = Label(vp, text="Digite su peso en Kg ")
etiqueta.grid(column=2, row=2, sticky=(W,E))
etiqueta.configure(bg='pink')

etiqueta = Label(vp, text="digite su altura en m2  ")
etiqueta.grid(column=4, row=2, sticky=(W,E))
etiqueta.configure(bg='pink')

_etiqueta = Label(vp, text="")
_etiqueta.grid(column=3, row=6, sticky=(W,E))
_etiqueta.configure(bg='pink')

boton = Button(vp, text="OK!", command=hacer_click)
boton.grid(column=1, row=4)
boton.configure(bg='#F5E43C')
boton.configure(fg='black')

valor = ""
valor = ""

entrada_textoa = Entry(vp, width=30, textvariable=valor)
entrada_textoa.grid(column=2, row=1)
entrada_textoa.configure(bg='pink')

entrada_textob = Entry(vp, width=30, textvariable=valor)
entrada_textob.grid(column=4, row=3)
entrada_textob.configure(bg='pink')


app.mainloop()

