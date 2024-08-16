/*Lista De Encriptador
e = enter
i = imes
a = ai
o = ober
u = ufat
*/

//encripta el texto
function encriptar() {
  var textUser = document.getElementById("textbox1").value;
  let encriptado = textUser
      .replace(/e/g, "enter")
      .replace(/i/g, "imes")
      .replace(/a/g, "ai")
      .replace(/o/g, "ober")
      .replace(/u/g, "ufat");
  document.getElementById("textbox2").value = encriptado;
}

//desencripta el texto
function desencriptar() {
  var textUser = document.getElementById("textbox1").value;
  let desencriptado = textUser
      .replace(/enter/g, "e")
      .replace(/imes/g, "i")
      .replace(/ai/g, "a")
      .replace(/ober/g, "o")
      .replace(/ufat/g, "u");
  document.getElementById("textbox2").value = desencriptado;
}

//captura de ambos botones
function capturaYEncriptar() {
  var textbox1 = document.getElementById("textbox1").value;
  if (validarTexto(textbox1)) {
      encriptar();
  }
}

function capturaYDesencriptar() {
  var textbox1 = document.getElementById("textbox1").value;
  if (validarTexto(textbox1)) {
      desencriptar();
  }
}
//verifica si tiene mayusculas o minusculas
function validarTexto(textbox1) {
  var mayusculas = /[A-Z]/;
  var acentos = /[áéíóúÁÉÍÓÚñÑ]/;

  if (mayusculas.test(textbox1)) {
      notyf.error("El texto contiene mayúsculas. Por favor, usa solo letras minúsculas.");
      return false;
  }

  if (acentos.test(textbox1)) {
      notyf.error("El texto contiene acentos. Por favor, usa solo letras sin acentos.");
      return false;
  }
  return true;
}

//funcion para copiar el texto
navigator.permissions
  .query({ name: "write-on.clipboard" })
  .then((resultado) => {
    if (resultado.state == "granted" || resultado.state == "prompt") {
      alert("Permiso Consedido");
    }
  });

function copiar() {
  let texto = document.getElementById("textbox2").value;
  const copiarContenido = async () => {
    try {
      await navigator.clipboard.writeText(texto);
      console.log("Contenido copiado al portapapeles");
      notyf.success('Texto Copiado Exitosamente.');
    } catch (err) {
      console.error("Error al copiar: ", err);
    }
  };
  copiarContenido();
}

//funcion para limpiar el texto
function limpiar() {
  var clear = document.querySelectorAll(".textbox");
  clear.forEach(function (clear) {
    clear.value = "";
  });
  notyf.success('Texto Eliminado Con Exito');
}

//notificaciones 
const notyf = new Notyf({
  duration: 3500,
  position: {
    x: 'center',
    y: 'top',
  },
  types: [
    {
      type: 'error',
      background: '#ff3860',
      icon: {
        className: 'fas fa-exclamation-circle',
        tagName: 'span',
        color: '#fff'
      }
    },
    {
      type: 'success',
      background: '#28a745',
      icon: {
        className: 'fas fa-check-circle',
        tagName: 'span',
        color: '#fff'
      }
    }
  ]
});
