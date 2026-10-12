<?

/* aqui se incializan variables de PHP */
if (phpversion() >= "4.2.0") {
        if ( ini_get('register_globals') != 1 ) {
                $supers = array('_REQUEST',
                                '_ENV',
                                '_SERVER',
                                '_POST',
                                '_GET',
                                '_COOKIE',
                                '_SESSION',
                                '_FILES',
                                '_GLOBALS' );
                                                                                
                foreach( $supers as $__s) {
                        if ( (isset($$__s) == true) && (is_array( $$__s
) == true) ) extract( $$__s, EXTR_OVERWRITE );
                }
                unset($supers);
        }
} else {
        if ( ini_get('register_globals') != 1 ) {
                                                                                
                $supers = array('HTTP_POST_VARS',
                                'HTTP_GET_VARS',
                                'HTTP_COOKIE_VARS',
                                'GLOBALS',
                                'HTTP_SESSION_VARS',
                                'HTTP_SERVER_VARS',
                                'HTTP_ENV_VARS'
                                 );
                                                                                
                foreach( $supers as $__s) {
                        if ( (isset($$__s) == true) && (is_array( $$__s
) == true) ) extract( $$__s, EXTR_OVERWRITE );
                }
                unset($supers);
        }
}

/*  DE AQUI EN ADELANTE PUEDES EDITAR EL ARCHIVO */

require_once('classes/Validation.class.php');

if($name=="")
{
	echo "Necesitas introducir tu Nombre, Da clic en el botón regresar.";
	exit();
}
if($email=="")
{
	echo "Necesitas introducir tu Correo, Da clic en el botón regresar.";
	exit();
}
if($phone=="")
{
	echo "Necesitas introducir tu Teléfono, Da clic en el botón regresar.";
	exit();
}
$form = new Validation('post');
$captcha_error = $form->captcha_validation($num1, $num2, $captcha);

//echo $num1 + $num2;
//echo "total $captcha";
//exit();
if($captcha_error!="")
{
	echo "Respuesta invalida, Da clic en el botón regresar...".$num1.",".$num2."-$total";
	exit();	
} 

/* aquí se especifica la pagina de respuesta en caso de envío exitoso */
$respuesta="mensajeexitoso_pacifika.html";
// la respuesta puede ser otro archivo, en incluso estar en otro servidor

/* AQUÍ ESPECIFICAS EL CORREO AL CUAL QUEIRES QUE SE ENVÍEN LOS DATOS
DEL FORMULARIO, SI QUIERES ENVIAR LOS DATOS A MÁS DE UN CORREO,
LOS PUEDES SEPARAR POR COMAS */
$para ="pacifikaclinicadental@hotmail.com";
/* AQUI ESPECIFICAS EL SUJETO (Asunto) DEL EMAIL */
$sujeto = "Datos del Formulario Pacifika Clinica Dental";

/* aquí se construye el encabezado del correo, en futuras
versiones del script e
xplicaré mejor esta parte */ 
$encabezado = "From: Sistema de Mensajes <mensajeweb@pacifikaclinicadental.com>";
$encabezado .= "\nReply-To: $email";
$encabezado .= "\nX-Mailer: PHP/" . phpversion();

/* las siguientes líneas arman el mensaje */
$mensaje .= "Nombre: $name\n";
$mensaje .= "Correo: $email\n";
$mensaje .= "Telefono: $phone\n";
$mensaje .= "Comentarios: $message\n";

/* aqui se intenta enviar el correo, si no se
tiene éxito se da un mensaje de error */
if(!mail($para, $sujeto, $mensaje, $encabezado))
{
	echo "<h1>Tu mensaje no ha sido enviado, clic atrás.</h1>";
	exit();
}
else
{
	/* aqui redireccionamos a la pagina de respuesta */
	echo "<meta HTTP-EQUIV='refresh' content='1;url=$respuesta'>";
}

?>