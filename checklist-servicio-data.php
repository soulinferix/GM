<?php


if($_POST["message"]) {


mail("luis.morales@vtxco.com", "Checklist de servicio en campo",


$_POST["Hola, envío checklist de visita a campo"]. "From: luis.morales@vtxco.com");


}


?>



<!doctype html>
<html>
<head>
	<meta charset="utf-8">
	<title>Checklist evaluación servicio</title>
	<meta name="viewport" content="width=device-width, minimum-scale=1, shrink-to-fit=yes"> 
	<meta description="Formato de inspección en campo para Distric Managers de GMM">	
	<meta name="author" content="Luis Morales">
	<html lang="es-MX"></html>
	<link rel="icon" href="GM_Gradient_Brandmark_RGB_small.png" type="image/png">
	<link rel="stylesheet" href="checklist_CSS.css">
	<script src="Checklist_JS.js" defer></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
<script src="https://cdn.jsdelivr.net/gh/FThompson/FormPersistence.js@1.0.1/form-persistence.min.js"></script>
   <script src=
"https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.8.1/html2pdf.bundle.min.js" 
        integrity=
"sha512vDKWohFHe2vkVWXHp3tKvIxxXg0pJxeid5eo+UjdjME3DBFBn2F8yWOE0XmiFcFbXxrEOR1JriWEno5Ckpn15A==" 
        crossorigin="anonymous">
    </script>
	
</head>

<body>
	<header>
		<h1>
<div class="formheader">
			<p class="pagetitle">Checklist de Servicio en campo</p>
		<img class="GMLogo" alt="GM Logo" src="GM_Gradient_Brandmark_RGB_small.png">
	</div>
	</h1>
	</header>

	<main>
		<section>
		<h2 name="datosvisita">Datos de la visita</h2>
		<form class="form1" autocomplete="off" method="post" action="../checklist-servicio-data.php" id="form-print">
		<fieldset class="Visit_Data">

			<div class="dealer_number">
				<label for="dealer_number_0" name="no. dealer">No. de Distribuidor (solo dígitos, no letras)</label>
				<input class="dealer_number_1" type="number" id="dealer_number" placeholder="BAC" name="dealer_number" list="BACs" required>
				<datalist id="BACs">
<! -- Beginning of BAC list -->
<option value="309072"/>
<option value="181077"/>
<option value="197587"/>
<option value="202843"/>
<option value="122036"/>
<option value="195942"/>
<option value="205816"/>
<option value="209945"/>
<option value="215087"/>
<option value="234381"/>
<option value="122044"/>
<option value="269075"/>
<option value="122046"/>
<option value="122048"/>
<option value="194910"/>
<option value="202431"/>
<option value="256009"/>
<option value="264772"/>
<option value="293974"/>
<option value="312079"/>
<option value="313868"/>
<option value="287076"/>
<option value="314217"/>
<option value="122051"/>
<option value="166824"/>
<option value="122057"/>
<option value="246496"/>
<option value="122060"/>
<option value="186015"/>
<option value="276569"/>
<option value="293941"/>
<option value="316249"/>
<option value="300773"/>
<option value="304676"/>
<option value="318785"/>
<option value="318786"/>
<option value="317810"/>
<option value="202133"/>
<option value="122067"/>
<option value="239743"/>
<option value="247218"/>
<option value="122070"/>
<option value="249196"/>
<option value="122071"/>
<option value="277787"/>
<option value="291316"/>
<option value="285093"/>
<option value="262903"/>
<option value="297598"/>
<option value="122082"/>
<option value="166829"/>
<option value="219075"/>
<option value="202127"/>
<option value="122089"/>
<option value="230516"/>
<option value="282138"/>
<option value="122090"/>
<option value="122091"/>
<option value="210514"/>
<option value="167083"/>
<option value="122093"/>
<option value="122095"/>
<option value="183147"/>
<option value="122096"/>
<option value="201105"/>
<option value="216830"/>
<option value="282173"/>
<option value="282175"/>
<option value="218916"/>
<option value="122101"/>
<option value="122102"/>
<option value="122103"/>
<option value="122105"/>
<option value="122107"/>
<option value="185079"/>
<option value="122108"/>
<option value="204987"/>
<option value="202280"/>
<option value="122109"/>
<option value="211854"/>
<option value="122110"/>
<option value="277926"/>
<option value="122112"/>
<option value="122114"/>
<option value="185005"/>
<option value="122116"/>
<option value="166840"/>
<option value="202139"/>
<option value="122117"/>
<option value="235370"/>
<option value="122118"/>
<option value="230447"/>
<option value="199548"/>
<option value="273046"/>
<option value="233204"/>
<option value="122123"/>
<option value="122124"/>
<option value="197573"/>
<option value="186025"/>
<option value="207785"/>
<option value="211561"/>
<option value="122129"/>
<option value="122130"/>
<option value="122132"/>
<option value="122134"/>
<option value="191966"/>
<option value="122135"/>
<option value="225362"/>
<option value="178581"/>
<option value="122139"/>
<option value="202556"/>
<option value="122140"/>
<option value="122141"/>
<option value="202117"/>
<option value="122142"/>
<option value="122143"/>
<option value="166846"/>
<option value="193468"/>
<option value="230805"/>
<option value="214539"/>
<option value="122147"/>
<option value="122148"/>
<option value="169100"/>
<option value="122152"/>
<option value="166851"/>
<option value="122153"/>
<option value="203322"/>
<option value="166852"/>
<option value="122156"/>
<option value="275715"/>
<option value="122158"/>
<option value="275678"/>
<option value="122159"/>
<option value="205167"/>
<option value="122162"/>
<option value="122163"/>
<option value="222751"/>
<option value="216847"/>
<option value="122164"/>
<option value="227460"/>
<option value="262900"/>
<option value="233563"/>
<option value="235397"/>
<option value="122168"/>
<option value="122169"/>
<option value="208783"/>
<option value="122171"/>
				</datalist>
				</div>
<! -- End of BAC list -->
			<p class="visit_data_1">
				<label class="visit_data_1_1" for="visit_date" name="date">Fecha</label>
				<input class="visit_data_1_2" type="date" id="visit_date" name="visit_date" required>
				</p>
			<p class="visit_data_2">
				<label class="visit_data_2_1" for="observation_date" name="fecha observacion">Hora de observación</label>
				<input class="visit_data_2_2" type="time" id="observation_date" name="observation_date" required>
			</p>
			<p class="visit_data_3">
			<label class="visit_data_3_1" for="observation_time_reception" name="horaobser">Hora de observación - Recepción</label>
				<input class="visit_data_3_2" type="time" id="observation_time_reception" name="observation_time_reception" required>
							</p>
			<p class="visit_data_4">
			<label class="visit_data_4_1" for="observation_time_delivery" name="hora entrega">Hora de observación - Entrega</label>
				<input class="visit_data_4_2	" type="time" id="observation_time_delivery" name="observation_time_delivery" required>
							</p>
			</fieldset>
		</section>

<section>
		<h2 name="Situacion" class="Situacion">Situación del área de Servicio al momento de la visita</h2>
	<fieldset class="Visit_Circumstances">
<p class="form2header1">Situación</p>
<p class="form2header2">Marcar una opción</p>
		
		<label class="form2item1" for="f2checkbox1">Extremadamente ocupado; demasiados Clientes y staff de
servicio no suficiente.</label>
		<div class="f2checkbox1_div">
		<input class="form2checkbox1" type="checkbox" id="f2checkbox1" name="situación" onclick="chkcontrol(0)">
		</div>
		<label class="form2item2" for="f2checkbox2">Todo el staff de servicio ocupado y atendiendo, no hay Clientes esperando</label>
		<input class= "form2checkbox2" type="checkbox" id="f2checkbox2" name="situación" onclick="chkcontrol(1)">

		
		<label class="form2item3" for="f2checkbox3">Tranquilidad (poca actividad) del personal de servicio
comparado con la de Clientes.</label>
		<input class= "form2checkbox3" type="checkbox" id="f2checkbox3" name="situación" onclick="chkcontrol(2)">
		
			</fieldset>
	
		</section>

		<section class="sticky1">
		<h2 class="cumplimiento1">Cumplimiento 1</h2>
			<fieldset class="Compliance">
				<label class="form3header1" for="complianceperc">Cumplimiento (%)</label>
				<span class="percentage" type="number" id="showPercent" name="complianceperc"></span>

				<label class="form3item1" for="yescount">Sí</label>
				<span id="showAccept" class="counter"></span>	

				
				<label class="form3item2" for="yescount">No</label>
				<span class="counter" id="showReject"></span>

				</fieldset>
			
		</section>
	
<section>
		<h2 class="receptionsticky">Proceso de recepción</h2>
		<fieldset class="Reception">

<div class="whitebkgrd_reception"></div>
<p class="form4header1">Situación</p>
<p class="form4header2">Sí</p>
<p class="form4header3">No</p>
<p class="form4header4">Comentarios</p>
<p class="form4header5">Material de apoyo para DMA</p>

			<label class="form4item1">1. ¿El Asesor de Servicio comienza a atender al Cliente en los primeros 2 minutos?</label>
			<input class="form4item1radio1" type="radio" name="question1" id="a" value="Accept" required>
			<input class="form4item1radio2" type="radio" name="question1" id="b" value="Reject">
			<textarea class="form4item1comment" placeholder="Escribe tus notas aquí"></textarea>
<div class="borderline1"></div>
			
			<label class="form4item2">2. ¿El proceso con el Cliente <b>ALREDEDOR DE SU VEHÍCULO</b> se lleva a cabo conforme al “Proceso Revisado de Atención en
Servicio”?</label>
			<input class="form4item2radio1" type="radio" name="question2" id="a2" value="Accept" required>
			<input class="form4item2radio2" type="radio" name="question2" id="b2" value="Reject">
			<textarea class="form4item2comment" placeholder="Escribe tus notas aquí"></textarea>
<div class="borderline2"></div>
			
			<label class="form4item3">3. ¿El proceso con el Cliente en el <b>CUBÍCULO DEL ASESOR DE SERVICIO</b> se lleva a cabo conforme al “Proceso Revisado de
Atención en Servicio” <b>hasta despedirlo?</b></label>
			<input class="form4item3radio1" type="radio" name="question3" id="e" value="Accept" required>
			<input class="form4item3radio2" type="radio" name="question3" id="f" value="Reject">
			<textarea class="form4item3comment" placeholder="Escribe tus notas aquí"></textarea>
<div class="borderline3"></div>
			
			<p class="multianswer1">4. El tiempo de atención desde el inicio hasta despedir el
Cliente es:</p>
			<label class="form4item4_1">Igual o menos de 15 min</label>
			<input class="form4item4_1radio1" type="radio" name="question4" id="g" value="Accept" required>

			<label class="form4item4_2">De 15 a 30 minutos</label>
			<input class="form4item4_2radio1" type="radio" name="question4" id="h" value="Reject">

			
			<label class="form4item4_3">Más de 30 minutos</label>
			<input class="form4item4_3radio1" type="radio" name="question4" id="i" value="Reject">

			<textarea class="multicomm1" placeholder="Escribe tus notas aquí"></textarea>
			
<div class="borderline4"></div>
			

			<p class="multianswer2">Los Consultores de Servicio muestran:</p>
			<label class="form4item5_1">5. Atención y cortesía en todo momento</label>
			<input class="form4item5_1radio1" type="radio" name="question5_1" id="j" value="Accept" required>
			<input class="form4item5_1radio2" type="radio" name="question5_1" id="k" value="Reject">

			<label class="form4item5_2">6. Conocimiento, calidad y detalle en las explicaciones</label>
			<input class="form4item5_2radio1" type="radio" name="question5_2" id="l" value="Accept" required>
			<input class="form4item5_2radio2" type="radio" name="question5_2" id="m" value="Reject">

			<textarea class="multicomm2" placeholder="Escribe tus notas aquí"></textarea>

<div class="borderline5"></div>
			
			<label class="form4item6">7. ¿Aplican correctamente las “Acciones de Éxito” (Quick Wins)?</label>
			<input class="form4item6radio1" type="radio" name="question6" id="n" value="Accept" required>
			<input class="form4item6radio2" type="radio" name="question6" id="o" value="Reject">
			<textarea class="form4item6comment" placeholder="Escribe tus notas aquí" ></textarea>
			
<div class="form4jobaid1_back">
	<p class="form4jobaid1">Proceso rediseñado "Atención a clientes en Servicio"</p>
	</div>
	<p class="form4jobaid2">Infografía digital "6 básicos"</p>
			</fieldset>
		</section>
		

<section>
		<h2 class="followupsticky">Seguimiento</h2>
		<fieldset class="FollowUp">

<div class="whitebkgrd_followup"></div>
<p class="form5header1">Situación</p>
<p class="form5header2">Sí</p>
<p class="form5header3">No</p>
<p class="form5header4">Comentarios</p>
<p class="form5header5">Material de apoyo para DMA</p>

	
			<label class="form5item1">8. ¿El Distribuidor lleva a cabo los pasos conforme al
“Proceso Revisado de Atención en Servicio”?</label>
			<input class="form5item1radio1" type="radio" name="question7" id="p" value="Accept" required>
			<input class="form5item1radio2" type="radio" name="question7" id="q" value="Reject">
			<textarea class="form5item1comment" placeholder="Escribe tus notas aquí"></textarea>

<div class="borderline6"></div>
			
			<label class="form5item2">9. El Distribuidor realiza una comunicación proactiva con los Clientes:</label>
			<input class="form5item2radio1" type="radio" name="question8" id="r" value="Accept" required>
			<input class="form5item2radio2" type="radio" name="question8" id="s" value="Reject">
			
<p class="multianswer3">En caso afirmativo seleccione las que apliquen:</p>

			<label class="form5item3_1">Llamada telefónica al Cliente</label>
			<input class="form5item3_1radio1" type="radio" name="question8_1" id="r2" required>
			<input class="form5item3_1radio2" type="radio" name="question8_1" id="s2" >

			
			<label class="form5item3_2">Mensaje de texto: SMS / WhatsApp / correo electrónico</label>
			<input class="form5item3_2radio1" type="radio" name="question8_2" id="r3" required>
			<input class="form5item3_2radio2" type="radio" name="question8_2" id="s3" >

			
			<label class="form5item3_3">Agenda / horarios de llamadas a Clientes</label>
			<input class="form5item3_3radio1" type="radio" name="question8_3" id="r4" required>
			<input class="form5item3_3radio2" type="radio" name="question8_3" id="s4">
			<textarea class="multicomm3" placeholder="Escribe tus notas aquí"></textarea>

<div class="form5jobaid1_div">
<p class="form5jobaid1">Proceso rediseñado "Atención a clientes en Servicio"</p>
	</div>		
			</fieldset>
		</section>

		
<section>
		<h2 class="deliverysticky">Proceso de Entrega</h2>
		<fieldset class="Delivery">

<div class="whitebkgrd_delivery"></div>
<p class="form6header1">Situación</p>
<p class="form6header2">Sí</p>
<p class="form6header3">No</p>
<p class="form6header4">Comentarios</p>
<p class="form6header5">Material de apoyo para DMA</p>

			<label class="form6item1">10. ¿El proceso con el Cliente en el <b>CUBÍCULO DEL ASESOR DE SERVICI</b>O se lleva a cabo conforme al “Proceso Revisado de
Atención en Servicio”?</label>
			<input class="form6item1radio1" type="radio" name="question9" id="u" value="Accept" required>
			<input class="form6item1radio2" type="radio" name="question9" id="v" value="Reject">
			<textarea class="form6item1comment" placeholder="Escribe tus notas aquí"></textarea>

<div class="borderline7"></div>
			
			<label class="form6item2">11. ¿El proceso con el Cliente <b>ALREDEDOR DE SU
VEHICULO</b> se lleva a cabo conforme al “Proceso Revisado de Atención en Servicio” <b>hasta despedirlo?</b></label>
			<input class="form6item2radio1" type="radio" name="question10" id="w" value="Accept" required>
			<input class="form6item2radio2" type="radio" name="question10" id="x" value="Reject">
			<textarea class="form6item2comment" placeholder="Escribe tus notas aquí"></textarea>

<div class="borderline8"></div>
			
<p class="multianswer4">12. El tiempo de atención desde el inicio hasta despedir el
Cliente es:</p>
			<label class="form6item3_1">Menos de 15 minutos</label>
			<input class="form6item3_1radio1" type="radio" name="question11" id="y" value="Accept" required>

			<label class="form6item3_2">De 15 a 30 minutos</label>
			<input class="form6item3_2radio1" type="radio" name="question11" id="z" value="Reject">

			<label class="form6item3_3">Más de 30 minutos</label>
			<input class="form6item3_3radio1" type="radio" name="question11" id="aa" value="Reject">
			<textarea class="multicomm4" placeholder="Escribe tus notas aquí"></textarea>

<div class="borderline9"></div>
			
			<label class="form6item4">13. ¿El Distribuidor mide y cumple con la FECHA y HORA de entrega?</label>
			<input class="form6item4radio1" type="radio" name="question12" id="ab" value="Accept" required>
			<input class="form6item4radio2" type="radio" name="question12" id="ac" value="Reject">
			<textarea class="form6item4comment" placeholder="Escribe tus notas aquí"></textarea>

<div class="borderline10"></div>
			
			<label class="form6item5">14. ¿Se aplican correctamente las “Acciones de Éxito” (Quick Wins)?</label>
			<input class="form6item5radio1" type="radio" name="question13" id="ad" value="Accept" required>
			<input class="form6item5radio2" type="radio" name="question13" id="ae" value="Reject">
			<textarea class="form6item5comment" placeholder="Escribe tus notas aquí"></textarea>

<div class="borderline11"></div>
			
			<label class="form6item6">15. ¿La aplicación de la ENCUESTA DE PULSO se lleva a cabo conforme a las MEJORES PRACTICAS y SCRIPT proporcionado por GM?</label>
			<input class="form6item6radio1" type="radio" name="question14" id="af" value="Accept" required>
			<input class="form6item6radio2" type="radio" name="question14" id="ag" value="Reject">
			<textarea class="form6item6comment" placeholder="Escribe tus notas aquí"></textarea>

<p class="form6item6note1">Observar cómo aplican encuestas a Clientes</p>
<p class="form6item6note2">Verificar que haya señalizaciones con código QR</p>

<div class="form6jobaid1_back"></div>
<p class="form6jobaid1">Proceso rediseñado "Atención a clientes en Servicio"</p>

<div class="form6jobaid2_back">
<p class="form6jobaid2">Infografía digital "6 básicos"</p>
</div>
<div class="form6jobaid3_back">
<p class="form6jobaid3">Infografía digital Pulso
			<br>Script aplicación de encuesta de Pulso
			</p>
</div>
			</fieldset>
<p class="page1footer">Acordar acción requerida por parte del Distribuidor dentro del PLAN DE ACCIÓN
para respuestas “PARCIALMENTE o NO”, así como para tiempos de atención en
entrega / recepción mayores a 15 minutos y fecha / hora de entrega incumplida.</p>

		</section>
		<section class="sticky2">
		<h2 class="cumplimiento2">Cumplimiento 2</h2>
			<fieldset class="Compliance2">
				<label class="form7header1">Cumplimiento (%)</label>
				<span class="counter" type="number" id="showPercent2" name="yescount2"></span>
				
				<label class="form7item1" for="yescount">Sí (cantidad)</label>
				<span class="counter" type="number" id="showAccept2" name="yescount2"></span>
				
				<label class="form7item2" for="yescount">No (cantidad)</label>
					<span class="counter" type="number" id="showReject2" name="nocount2"></span>

				</fieldset>
			
		</section>


		<section>
		<h2 class="worksessionsticky">En sesión de trabajo con Gerente de Servicio y Líder de Calidad</h2>
		<fieldset class="WorkSession">

<div class="whitebkgrd_worksession"></div>
<p class="form8header1">Encuesta de Pulso</p>
<p class="form8header2">Sí</p>
<p class="form8header3">No</p>
<p class="form8header4">Comentarios</p>
<p class="form8header5">Material de apoyo para DMA</p>

			
			<label class="form8item1">1. ¿Existe correlación entre resultados de PULSO y CSI?
- PULSO CSI &#47; NPS &#62; Platforma CSI &#47; NPS &#38; VOC ---&#62; Requiere
Plan de acción</label>
			<input class="form8item1radio1" type="radio" name="section2q1" id="ah" value="Accept2" required>
			<input class="form8item1radio2" type="radio" name="section2q1" id="ai" value="Reject2">
			<textarea class="form8item1comment" placeholder="Escribe tus notas aquí"></textarea>

<div class="borderline12"></div>
			
<p class="multianswer5">El Distribuidor ha difundido y asegurado que cada
integrante en servicio aplique:</p>			
			<label class="form8item2_1">2. Infografía de Pulso (Enfoque y mejores prácticas)</label>
			<input class="form8item2_1radio1" type="radio" name="section2q2_1" id="aj" value="Accept2" required>
			<input class="form8item2_1radio2" type="radio" name="section2q2_1" id="ak" value="Reject2">

			<label class="form8item2_2">3. Script de Pulso (¿Cómo invitar a los Clientes a contestar pulso?)</label>
			<input class="form8item2_2radio1" type="radio" name="section2q2_2" id="al" value="Accept2" required>
			<input class="form8item2_2radio2" type="radio" name="section2q2_2" id="am" value="Reject2">
			<textarea class="multicomm5" placeholder="Escribe tus notas aquí"></textarea>
			
<div class="borderline13"></div>
			
<p class="multianswer6">La notificación de HOT ALERTS en la aplicación de Pulso
funciona correctamente para:</p>			
			<label class="form8item3_1">4. Gerente de Servicio</label>
			<input class="formitem3_1radio1" type="radio" name="section2q3_1" id="an" value="Accept2" required>
			<input class="formitem3_1radio2" type="radio" name="section2q3_1" id="ao" value="Reject2">

			<label class="form8item3_2">5. Líder de Calidad</label>
			<input class="formitem3_2radio1" type="radio" name="section2q3_2" id="ap" value="Accept2" required>
			<input class="formitem3_2radio2" type="radio" name="section2q3_2" id="aq" value="Reject2">

			<label class="form8item3_3">Personal asignado para atender Clientes (especificar qué puestos tienen)</label>
			<textarea class="multicomm6" placeholder="Escribe tus notas aquí"></textarea>

<div class="borderline14"></div>
			
			<p class="form8itemadded">El Gerente de Servicio y Líder de Calidad deberán mostrar si:</p>

			<label class="form8itemadded_1">6. Conocen dónde revisar su calificación de CSI/NPS de Pulso</label>
			
			<input class="formitemaddedradio1" type="radio" name="section2qadded" id="at2" value="Accept2" required>
			<input class="formitemaddedradio2" type="radio" name="section2qadded" id="au2" value="Reject2">

			<label class="form8itemadded_2">7. Cumplen con el objetivo del 70% de Encuestas de Pulso vs OR (público y garantía)</label>
			
			<input class="formitemadded_2radio1" type="radio" name="section2qadded2" id="at2_2" value="Accept2" required>
			<input class="formitemadded_2radio2" type="radio" name="section2qadded2" id="au2_2" value="Reject2">
			
			
			<textarea class="multicommadded" placeholder="Escribe tus notas aquí"></textarea>

	<div class="borderline15"></div>
			
			<label class="form8item4">8. ¿El Distribuidor analiza la calidad de información en Encuestas de Pulso?</label>
			<input class="formitem4radio1" type="radio" name="section2q4" id="at" value="Accept2" required>
			<input class="formitem4radio2" type="radio" name="section2q4" id="au" value="Reject2">
			<textarea class="multicomm7" placeholder="Escribe tus notas aquí"></textarea>

			
<p class="form8item4note1">Si alguno de los puntos de análisis no se realiza, el punto 5 se encuentra en incumplimiento (marcar la casilla “NO”):</p>
<p class="form8item4note2">-% de encuestas sin comentarios vs total de encuestas en el mes</p>
<p class="form8item4note3">-% de encuestas comentarios SENTIMIENTO NEGATIVO vs total de encuestas en el mes</p>
<p class="form8item4note4">-% de Hot Alerts en Pulso vs total de encuestas en el mes</p>
<p class="form8item4note5">-Acciones puntuales de mejora con base en el análisis de información de la Encuesta de Pulso</p>

<div class="borderline16"></div>
			
			<label class="form8item2ndadded">9. ¿Cuenta el Distribuidor con un proceso de recuperación de clientes por HA de Pulso (evidencia de procesos y responsables, así como casos documentados)?</label>
			<input class="formitem2ndaddedradio1" type="radio" name="section2qadded3" id="at3" value="Accept2" required>
			<input class="formitem2ndaddedradio2" type="radio" name="section2qadded3" id="au3" value="Reject2">
			<textarea class="multicommadded2" placeholder="Escribe tus notas aquí"></textarea>

<div class="borderline17"></div>
			
<div class="form8jobaid1_back">
<p class="form8jobaid1">Reporte mensual revisado
	<br>Resultados CX</p>
</div>

<div class="form8jobaid2_back">
<p class="form8jobaid2">Infografía digital Pulso
	<br>Script aplicación encuesta de Pulso</p>
</div>

<div class="form8jobaid3_back">
<p class="form8jobaid3">Manual de usuario de plataforma de Pulso</p>
</div>

<div class="whitebkgrd_worksession_2"></div>
<p class="form8header1_2">CSI &#38; VOC</p>
<p class="form8header2_2">Sí</p>
<p class="form8header3_2">No</p>
<p class="form8header4_2">Comentarios</p>
<p class="form8header5_2">Material de apoyo para DMA</p>

	
			<label class="form8item5">10. ¿Existe un proceso para asegurar la calidad de los registros en su DMS para las encuestas de CSI?</label>
			<input class="form8item5radio1" type="radio" name="section2q5" id="av" value="Accept2" required>
			<input class="form8item5radio2" type="radio" name="section2q5" id="aw" value="Reject2">
			<textarea class="form8item5comment" placeholder="Escribe tus notas aquí"></textarea>
		
<div class="borderline18"></div>
			
			
			<label class="form8item6">11. ¿Cuenta con esquema retador y alcanzable de bonificación por cumplimiento de CSI y “0” HA para Asesores de Servicio?</label>
			<input class="form8item6radio1" type="radio" name="section2q6" id="ax" value="Accept2" required>
			<input class="form8item6radio2" type="radio" name="section2q6" id="ay" value="Reject2">
			<textarea class="form8item6comment" placeholder="Escribe tus notas aquí"></textarea>
		
<div class="borderline19"></div>
			
			<label class="form8item7">12. ¿El Distribuidor conoce las 3 prioridades de mejora con base a sus VERBATIMS? (Sentimiento Negativo)</label>
			<input class="form8item7radio1" type="radio" name="section2q7" id="az" value="Accept2" required>
			<input class="form8item7radio2" type="radio" name="section2q7" id="aaa" value="Reject2">
			<textarea class="form8item7comment" placeholder="Escribe tus notas aquí"></textarea>

<div class="borderline20"></div>
			
			<label class="form8item8">13. ¿Cuenta con revisiones programadas con su equipo de
servicio para revisar PULSO y desempeño de CSI / NPS (Plataforma de InMoment)? ¿Tiene evidencia?</label>
			<input class="form8item8radio1" type="radio" name="section2q8" id="aab" value="Accept2" required>
			<input class="form8item8radio2" type="radio" name="section2q8" id="aac" value="Reject2">
			<textarea class="form8item8comment" placeholder="Escribe tus notas aquí"></textarea>
		
<div class="borderline21"></div>
			
			<label class="form8item9">14. ¿El Gerente de Servicio revisa con su equipo el One
Pager de Posventa?</label>
			<input class="form8item9radio1" type="radio" name="section2q9" id="aad" value="Accept2" required>
			<input class="form8item9radio2" type="radio" name="section2q9" id="aae" value="Reject2">
			<textarea class="form8item9comment" placeholder="Escribe tus notas aquí"></textarea>

<div class="borderline22"></div>
			
			<label class="form8item10">15. ¿Cuenta con acciones puntuales en su Plan de Mejora considerando los resultados de CSI / NPS &#38; Verbatims?</label>
			<input class="form8item10radio1" type="radio" name="section2q10" id="aaf" value="Accept2" required>
			<input class="form8item10radio2" type="radio" name="section2q10" id="aag" value="Reject2">
			<textarea class="form8item10comment" placeholder="Escribe tus notas aquí"></textarea>

<div class="borderline23"></div>
			
			<label class="form8item11">16. ¿El personal de Servicio ha acreditado el WBT del
Proceso Revisado de atención en Servicio?</label>
			<input class="form8item11radio1" type="radio" name="section2q11" id="aah" value="Accept2" required>
			<input class="form8item11radio2" type="radio" name="section2q11" id="aai" value="Reject2">
			<textarea class="form8item11comment" placeholder="Escribe tus notas aquí"></textarea>
<p class="form8item11note">Verificar si han revisado el VIDEO y que cuenten con la infografía digital</p>

<div class="form8jobaid4_back">
<p class="form8jobaid4">Reportes de calidad de registros</p>
</div>
			
<div class="form8jobaid5_back">			
<p class="form8jobaid5">Esquema base comisiones por CSI</p>
</div>
			
<div class="form8jobaid6_back">			
<p class="form8jobaid6">Dashboard verbatims - Encuestas de CSI</p>
</div>
			
<div class="form8jobaid7_back">			
<p class="form8jobaid7">OnePager posventa CSI</p>
</div>
			
<div class="form8jobaid8_back">			
<p class="form8jobaid8">Proceso rediseñado "Atención a clientes en Servicio"
			<br>Video e infografía digital</p>
</div>
		</fieldset>

<p class="page2footer">Acordar acción requerida por parte del Distribuidor dentro del PLAN DE ACCIÓN para respuestas “PARCIALMENTE o NO”.</p>

		</section>
	</main>
	

	<footer>
	<button class="Submit" onclick="GeneratePdf();"><img src="GM_Gradient_Brandmark_RGB_small.png" alt="Submit button"><span>Enviar</span></button>
	</footer>
		</form>

</body>
	
</html>
