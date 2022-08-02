(async () => {

	const { value: email } = await Swal.fire({
	  title: '¡BIENBENIDOS!',
	  input: 'email',
	  inputLabel: 'Registrate y Recibi nuestras info!',
	  inputPlaceholder: 'email'
	})
	
	if (email) {
	  Swal.fire(`tu email es: ${email}`)
	}

    

  Swal.fire({
    html: 'por favor acepte nuestro <a href"#"> terminos y condiciones </a>',
    confirmButtonText: 'Acepto',
    icon: 'info' ,
   

    padding: '1rem',
    grow: 'row',
    backdrop: true,
    toast: true,
    position: 'bottom',
    allowsOustsideClick: false,
    allowEscapeKey: false,
    stopKeydownPropagation: false,


    showConfirmButton: true,
    showCanceleButton: false,
    showCloseButton: false,
    closeButtonArialLabel: 'Cerrar esta alerta',

    customClass: {
        content: 'content-class'
    }





 });
	
})()

    