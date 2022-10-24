from tkinter import *
from tkinter import ttk
def hacer_click():
  try:
    _nombre = int(entrada_textoa.get())
    _nota = float(entrada_textob.get())
    if (_nota >= 6.0):
        _etiqueta.config(text=("aprobo con: ", _nota) )
    else:
        _etiqueta.config(text=("reaprobo con:  ", _nota) )
  
    except ValueError:
    _etiqueta.config(text="Introduce un numero!")

app = Tk()
app.title("ALUMNO")
app.config(bg='#F08AD4')


#Ventana Principal
vp = Frame(app)
vp.grid(column=0, row=0, padx=(50,50), pady=(60,60))
vp.columnconfigure(0, weight=1)
vp.rowconfigure(0, weight=1)
vp.configure(bg='red')

etiqueta = Label(vp, text="NOMBRE DEL ALUMNO ")
etiqueta.grid(column=2, row=2, sticky=(W,E))
etiqueta.configure(bg='pink')

etiqueta = Label(vp, text="NOTA DEL ALUMNO EN DECIMALES DE 0-10.0 ")
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
