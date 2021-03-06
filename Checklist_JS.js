document.addEventListener('alpine:init', () => {
    Alpine.data('formData', () => ({
        init(){
			this.formReset = this.form;
            let form = JSON.parse(localStorage.getItem('formDataState'));
            if(form){
                this.form = form;
                this.setTotals();

                setTimeout(()=>{
                    let textareas = document.getElementsByTagName('textarea');

                    for(let i in textareas){
                        let item = textareas.item(i);
                        item.style.height = "5px";
                        console.log(item.scrollHeight, item.style.height)
                        item.style.height = (item.scrollHeight+15)+"px";
                    }
                },500)
                
            }

        },
        providers: {
            '101': [{bac: '309072', name: 'CHEVROLET AEROPUERTO CDMX',}],
            '105': [{bac: '181077', name: 'CHEVROLET TOLLOCAN',}, 
                    {bac: '297115', name: 'CHEVROLET TOLLOCAN ZITÁCUARO',}, 
                    {bac: '298821', name: 'CHEVROLET TOLLOCAN TENANCINGO',},],
            '106': [{bac: '197587', name: 'BUICK-GMC AEROPUERTO CDMX',}, 
                    {bac: '290368', name: 'BUICK-GMC MIRAMONTES',},],
            '110': [{bac: '202843', name: 'BUICK-GMC INGENIO CUATITLAN ',},
                    {bac: '290369', name: 'CHEVROLET EXCELENCIA SANTA FE',},],
            '123': [{bac: '195942', name: 'CHEVROLET VILLAUTOS ARAGON',},],
            '127': [{bac: '205816', name: 'BUICK-GMC-CADILLAC ANGAR SATELITE',},
                    {bac: '290391', name: 'BUICK-GMC-CADILLAC ANGAR PEDREGAL',},
                    {bac: '290393', name: 'BUICK-GMC-CADILLAC ANGAR ESMERALDA',},],
            '135': [{bac: '209945', name: 'CHEVROLET ANGAR AZCAPOTZALCO',},
                    {bac: '304461', name: 'CHEVROLET ANGAR PEDREGAL',},
                    {bac: '307068', name: 'CHEVROLET ANGAR TEPEPAN',},],
            '137': [{bac: '215087', name: 'BUICK-GMC-CADILLAC SURMAN POLANCO',},],
            '141': [{bac: '234381', name: 'CHEVROLET SURMAN ANZURES',},],
            '145': [{bac: '122044', name: 'CHEVROLET EXCELENCIA CUAUTITLAN IZCALLI',},
                    {bac: '290395', name: 'CHEVROLET EXCELENCIA HIDALGO',},
                    {bac: '296510', name: 'CHEVROLET EXCELENCIA PERINORTE',},],
            '145': [{bac: '298345', name: 'CHEVROLET EXCELENCIA ZUMPANGO',},],
            '146': [{bac: '269075', name: 'CHEVROLET UNICARS',},],
            '150': [{bac: '122046', name: 'CHEVROLET LOMAS VERDES',},
                    {bac: '294162', name: 'CHEVROLET ZONA ESMERALDA',},],
            '152': [{bac: '122048', name: 'CHEVROLET KASA VALLE DORADO',},
                    {bac: '290397', name: 'CHEVROLET KASA COACALCO',},
                    {bac: '291579', name: 'CHEVROLET KASA ATIZAPÁN',},
                    {bac: '292156', name: 'CHEVROLET KASA CUAUTITLÁN',},
                    {bac: '307615', name: 'CHEVROLET KASA TLALNEPANTLA',},],
            '155': [{bac: '194910', name: 'CHEVROLET JILOTEPEC',},
                    {bac: '292396', name: 'CHEVROLET TEPEJI DEL RIO',},],
            '156': [{bac: '202431', name: 'BUICK-GMC-CADILLAC TOLLOCAN',},
                    {bac: '290398', name: 'BUICK-GMC-CADILLAC METEPEC',},],
            '157': [{bac: '256009', name: 'CHEVROLET SURMAN ECATEPEC',},
                    {bac: '299292', name: 'CHEVROLET SURMAN TECAMAC',},],
            '158': [{bac: '264772', name: 'CHEVY SAN CARLOS',},
                    {bac: '290399', name: 'CHEVY ZINACANTEPEC',},
                    {bac: '290400', name: 'CHEVY ATLACOMULCO',},
                    {bac: '290401', name: 'CHEVY TOLUCA CENTRO',},
                    {bac: '300222', name: 'CHEVY TOLUCA AEROPUERTO',},
                    {bac: '308453', name: 'CHEVY CALIMAYA',},],
            '159': [{bac: '293974', name: 'BUICK-GMC VALLE DORADO',},],
            '164': [{bac: '312079', name: 'CHEVROLET VALLEJO',},
                    {bac: '312162', name: 'CHEVROLET POLITÉCNICO',},],
            '165': [{bac: '313868', name: 'CHEVROLET PASION AUTOMOTRIZ',},],
            '177': [{bac: '287076', name: 'CHEVROLET CAR ONE TLALPAN',},
                   {bac: '293251', name: 'CHEVROLET CAR ONE LAS BOMBAS',},],
            '180': [{bac: '314217', name: 'CHEVROLET SATELITE',},],
            '207': [{bac: '122051', name: 'CHEVROLET CUAUTLA',},],
            '210': [{bac: '166824', name: 'CHEVROLET AMERICAS MOTORS',},],
            '226': [{bac: '122057', name: 'CHEVROLET ACAPULCO',},
                    {bac: '290404', name: 'CHEVROLET ZIHUATANEJO',},
                    {bac: '290406', name: 'CHEVROLET CHILPANCINGO',},
                    {bac: '290408', name: 'CHEVROLET ACAPULCO DIAMANTE',},
                    {bac: '318590', name: 'CHEVROLET IGUALA',},],
            '229': [{bac: '246496', name: 'BUICK-GMC ACAPULCO DIAMANTE',},
                    {bac: '290409', name: 'BUICK-GMC CHILPANCIGO',},],
            '235': [{bac: '122060', name: 'CHEVROLET EL TREBOL ERMITA',},
                    {bac: '290414', name: 'CHEVROLET EL TREBOL CHALCO',},
                    {bac: '313393', name: 'CHEVROLET EL TREBOL TEXCOCO',},
                    {bac: '314987', name: 'CHEVROLET EL TREBOL ZARAGOZA',},
                    {bac: '314988', name: 'CHEVROLET EL TREBOL IXTAPALUCA',},
                    {bac: '314989', name: 'CHEVROLET EL TREBOL IXTAPALUCA SANTA BARBARA',},],
            '236': [{bac: '186015', name: 'CHEVROLET IZTACALCO',},
                    {bac: '290415', name: 'CHEVROLET DELTA',},
                    {bac: '312230', name: 'CHEVROLET CENTRO HISTORICO',},],
            '239': [{bac: '276569', name: 'CHEVROLET INSURGENTES SUR',},],
            '243': [{bac: '293941', name: 'CHEVROLET SAN JERONIMO',},
                    {bac: '294267', name: 'CHEVROLET LAS ROSAS',},],
            '244': [{bac: '316249', name: 'BUICK-GMC SAN ANTONIO',},],
            '247': [{bac: '300773', name: 'CHEVROLET TLAHUAC',},
                    {bac: '301896', name: 'CHEVROLET LOS OLIVOS',},],
            '248': [{bac: '304676', name: 'CHEVROLET TAXQUENA',},
                    {bac: '309087', name: 'CHEVROLET CAMPESTRE CDMX',},
                    {bac: '316451', name: 'CHEVROLET UNIVERSIDAD',},],
            '255': [{bac: '317810', name: 'CHEVROLET CUERNAVACA',},
                    {bac: '317822', name: 'CHEVROLET CUERNAVACA PALMAS',},
                    {bac: '317835', name: 'CHEVROLET CUERNAVACA ZAPATA',},],
            '268': [{bac: '318785', name: 'CHEVY INTERLOMAS',},
                    {bac: '318787', name: 'CHEVY SANTA FE',},],
            '286': [{bac: '318786', name: 'CBGMC PREMIUM INTERLOMAS',},
                    {bac: '318788', name: 'CBGMC PREMIUM SANTA FE',},],
            '305': [{bac: '202133', name: 'BUICK-GMC-CADILLAC PEREGRINA PUEBLA',},
                   {bac: '290424', name: 'BUICK-GMC-CADILLAC PEREGRINA CUERNAVACA',},],
            '309': [{bac: '122067', name: 'CHEVROLET GOMEX CORDOBA',},
                    {bac: '290426', name: 'CHEVROLET GOMEX ACAYUCAN',},
                    {bac: '290427', name: 'CHEVROLET GOMEX TUXTEPEC',},
                    {bac: '290428', name: 'CHEVROLET GOMEX ORIZABA',},
                    {bac: '290425', name: 'CHEVROLET GOMEX TIERRA BLANCA',},
                    {bac: '318225', name: 'CHEVROLET GOMEX XALAPA',},
                    {bac: '318226', name: 'CHEVROLET GOMEX TEZIUTLÁN',},
                    {bac: '318227', name: 'CHEVROLET GOMEX MARTINEZ DE LA TORRE',},],
            '313': [{bac: '239743', name: 'CHEVROLET MEGA MINA',},],
            '315': [{bac: '247218', name: 'BUICK-GMC MEGA DIEZ OAXACA',},],
            '316': [{bac: '122070', name: 'CHEVROLET MEGA OAXACA',},
                    {bac: '290434', name: 'CHEVROLET MEGA SAN PABLO ETLA',},
                    {bac: '304300', name: 'CHEVROLET MEGA ESTADIO OAXACA',},
                    {bac: '318642', name: 'CHEVROLET MEGA TEHUANTEPEC',},
                    {bac: '318643', name: 'CHEVROLET MEGA HUATULCO',},],
            '318': [{bac: '249196', name: 'BUICK-GMC-CADILLAC GOMEX VERACRUZ',},
                    {bac: '290436', name: 'BUICK-GMC-CADILLAC GOMEX XALAPA',},],
            '319': [{bac: '122071', name: 'CHEVROLET PEREGRINA SAN MARTIN',},],
            '323': [{bac: '277787', name: 'CHEVROLET BALDERRAMA PUEBLA',},
                    {bac: '290437', name: 'CHEVROLET BALDERRAMA ZACATELCO',},
                    {bac: '295352', name: 'CHEVROLET BALDERRAMA CHOLULA',},],
            '326': [{bac: '291316', name: 'CHEVROLET HUAUCHINANGO',},],
            '329': [{bac: '285093', name: 'CHEVROLET MONTOTO PUEBLA',},
                    {bac: '290442', name: 'CHEVROLET MONTOTO ATLIXCO',},
                    {bac: '290444', name: 'CHEVROLET MONTOTO TEHUACAN',},],
            '342': [{bac: '262903', name: 'CHEVROLET PEREGRINA PUEBLA',},
                    {bac: '290446', name: 'CHEVROLET PEREGRINA LORETO',},
                    {bac: '297547', name: 'CHEVROLET PEREGRINA TEPEACA',},],
            '343': [{bac: '297598', name: 'CHEVROLET PEREGRINA ANGELÓPOLIS',},
                    {bac: '313760', name: 'CHEVROLET PEREGRINA BUGAMBILIAS',},],
            '355': [{bac: '122082', name: 'CHEVROLET DIAUTOS DIAZ MIRON',},
                    {bac: '290449', name: 'CHEVROLET DIAUTOS ZONA NORTE',},],
            '356': [{bac: '166829', name: 'CHEVROLET GRUVER BOCA DEL RIO',},
                    {bac: '290450', name: 'CHEVROLET GRUVER DIAZ MIRON',},
                    {bac: '292395', name: 'CHEVROLET GRUVER MOCAMBO',},],
            '359': [{bac: '219075', name: 'CHEVROLET APIZACO',},],
            '410': [{bac: '202127', name: 'BUICK-GMC-CADILLAC FAME MORELIA',},
                    {bac: '290451', name: 'BUICK-GMC-CADILLAC FAME URUAPAN',},],
            '413': [{bac: '122089', name: 'CHEVROLET NAOSA',},
                    {bac: '290452', name: 'CHEVROLET NAOSA TEPATITLAN',},
                    {bac: '298346', name: 'CHEVROLET NAOSA CLOUTHIER',},],
            '414': [{bac: '230516', name: 'BUICK-GMC NAOSA',},],
            '415': [{bac: '282138', name: 'CHEVROLET CARSOL COLIMA',},
                    {bac: '290453', name: 'CHEVROLET CARSOL TECOMAN',},
                    {bac: '296621', name: 'CHEVROLET CARSOL VILLA DE ALVAREZ',},],
            '416': [{bac: '122090', name: 'CHEVROLET CARSOL MOTORS',},
                    {bac: '290454', name: 'CHEVROLET CARSOL CIUDAD GUZMAN',},
                    {bac: '309084', name: 'CHEVROLET CARSOL SANTA ANITA',},],
            '420': [{bac: '122091', name: 'CHEVROLET AUTONOVA',},
                    {bac: '298823', name: 'CHEVROLET AUTONOVA JARDINES',},],
            '422': [{bac: '210514', name: 'BUICK-GMC-CADILLAC CARSOL GUADALAJARA',},
                    {bac: '290455', name: 'BUICK-GMC-CADILLAC CARSOL ZAPOPAN',},
                    {bac: '290456', name: 'BUICK-GMC-CADILLAC CARSOL COLIMA',},
                    {bac: '296622', name: 'BUICK-GMC-CADILLAC CARSOL CIUDAD GUZMAN',},],
            '426': [{bac: '167083', name: 'CHEVROLET MILENIO MOTORS',},
                    {bac: '290457', name: 'CHEVROLET MILENIO GALERÍAS',},],
            '428': [{bac: '122093', name: 'CHEVROLET LA PIEDAD',},
                    {bac: '295680', name: 'CHEVROLET PÉNJAMO',},
                    {bac: '316454', name: 'CHEVROLET DE LOS ALTOS',},],
            '436': [{bac: '122095', name: 'CHEVROLET MOTORES DE MORELIA',},
                    {bac: '290933', name: 'CHEVROLET MADERO MOTORES DE MORELIA ',},],
            '437': [{bac: '183147', name: 'CHEVROLET FAME MORELIA',},
                    {bac: '289275', name: 'CHEVROLET FAME ZAMORA',},
                    {bac: '289278', name: 'CHEVROLET FAME URUAPAN',},
                    {bac: '289279', name: 'CHEVROLET FAME APATZINGAN',},
                    {bac: '289280', name: 'CHEVROLET FAME LAZARO CARDENAS',},],
            '440': [{bac: '122096', name: 'CHEVROLET FLOSOL PUERTO VALLARTA',},
                    {bac: '290458', name: 'CHEVROLET FLOSOL MANZANILLO',},
                    {bac: '293909', name: 'CHEVROLET FLOSOL RIVIERA',},],
            '442': [{bac: '201105', name: 'CHEVROLET FLOSOL GUADALAJARA',},
                    {bac: '290459', name: 'CHEVROLET FLOSOL AMERICAS',},
                    {bac: '290460', name: 'CHEVROLET FLOSOL OCOTLAN',},
                    {bac: '316453', name: 'CHEVROLET FLOSOL RIO NILO',},],
            '443': [{bac: '216830', name: 'BUICK-GMC FLOSOL PUERTO VALLARTA',},
                    {bac: '290461', name: 'BUICK-GMC FLOSOL MANZANILLO',},
                    {bac: '293910', name: 'BUICK-GMC FLOSOL RIVIERA',},],
            '446': [{bac: '282173', name: 'CHEVROLET AEROPLASA TEPIC',},],
            '447': [{bac: '282175', name: 'BUICK-GMC AEROPLASA TEPIC',},],
            '505': [{bac: '218916', name: 'CHEVROLET LAS HADAS AGUASCALIENTES',},
                    {bac: '290462', name: 'CHEVROLET HERRERA AGUASCALIENTES',},
                    {bac: '313395', name: 'CHEVROLET HERRERA DE ZACATECAS',},
                    {bac: '313396', name: 'CHEVROLET HERRERA DE FRESNILLO',},],
            '506': [{bac: '122101', name: 'CHEVROLET AUTOMOTRIZ CELAYA',},
                    {bac: '290463', name: 'CHEVROLET CELAYA NORPONIENTE',},],
            '509': [{bac: '122102', name: 'CHEVROLET CELAYA CENTRO',},
                    {bac: '290464', name: 'CHEVROLET ACAMBARO',},],
            '512': [{bac: '122103', name: 'CHEVROLET CIUDAD MANTE',},],
            '518': [{bac: '122105', name: 'CHEVROLET HERRERA HUASTECA',},],
            '521': [{bac: '122107', name: 'CHEVROLET DALSA',},],
            '522': [{bac: '185079', name: 'CHEVROLET BAJIO MOTORS',},
                    {bac: '311333', name: 'CHEVROLET BAJIO SAN MIGUEL DE ALLENDE',},
                    {bac: '311332', name: 'CHEVROLET BAJIO GUANAJUATO',},],
            '523': [{bac: '122108', name: 'CHEVROLET DEL PARQUE',},],
            '523': [{bac: '290469', name: 'CHEVROLET DEL PARQUE',},],
            '524': [{bac: '204987', name: 'BUICK-GMC LEON',},
                    {bac: '290470', name: 'BUICK-GMC IRAPUATO',},],
            '525': [{bac: '202280', name: 'CHEVROLET SILAO',},],
            '527': [{bac: '122109', name: 'CHEVROLET IRAPUATO',},],
            '528': [{bac: '211854', name: 'BUICK-GMC-CADILLAC QUERETARO',},
                    {bac: '290471', name: 'CADILLAC LEON',},],
            '531': [{bac: '122110', name: 'CHEVROLET POZA RICA',},
                    {bac: '290472', name: 'CHEVROLET TUXPAN',},],
            '535': [{bac: '277926', name: 'CHEVROLET HERRERA MOTORS DE HIDALGO',},
                    {bac: '290473', name: 'CHEVROLET HERRERA TULANCINGO',},],
            '538': [{bac: '122112', name: 'CHEVROLET QUERETARO MOTORS',},],
            '545': [{bac: '122114', name: 'CHEVROLET SAN JUAN DEL RIO',},],
            '547': [{bac: '185005', name: 'CHEVROLET SALAMANCA',},
                    {bac: '294896', name: 'CHEVROLET URIANGATO',},],
            '548': [{bac: '122116', name: 'CHEVROLET HERRERA SAN LUIS POTOSI',},
                    {bac: '290476', name: 'CHEVROLET HERRERA MATEHUALA',},
                    {bac: '290477', name: 'CHEVROLET HERRERA RIO VERDE',},
                    {bac: '290478', name: 'CHEVROLET HERRERA EL DORADO',},],
            '550': [{bac: '166840', name: 'CHEVROLET GM MOTRIZ',},
                    {bac: '290479', name: 'CHEVROLET GM MOTRIZ LOMAS',},],
            '551': [{bac: '202139', name: 'BUICK-GMC-CADILLAC SAN LUIS POTOSI',},
                    {bac: '290480', name: 'BUICK-GMC-CADILLAC LAS HADAS AGUASCALIENTES',},
                    {bac: '290481', name: 'BUICK-GMC-CADILLAC PACHUCA',},
                    {bac: '313397', name: 'BUICK-GMC HERRERA DE ZACATECAS',},
                    {bac: '313398', name: 'BUICK-GMC HERRERA DE FRESNILLO',},],
            '552': [{bac: '122117', name: 'CHEVROLET AUTO IDEAL',},
                    {bac: '304299', name: 'CHEVROLET AUTO IDEAL HIDALGO JARDIN',},],
            '554': [{bac: '235370', name: 'BUICK-GMC TAMPICO',},
                    {bac: '290482', name: 'BUICK-GMC POZA RICA',},],
            '555': [{bac: '122118', name: 'CHEVROLET TAMPICO SALES',},],
            '556': [{bac: '230447', name: 'CHEVROLET SS DE QUERETARO',},
                    {bac: '318639', name: 'CHEVROLET AUTOS SS DE JURIQUILLA',},],
            '605': [{bac: '199548', name: 'BUICK-GMC-CADILLAC BELDEN',},
                    {bac: '299962', name: 'BUICK-GMC-CADILLAC BELDEN ANAHUAC',},],
            '609': [{bac: '273046', name: 'CHEVROLET JEBLA CIUDAD VICTORIA',},],
            '610': [{bac: '233204', name: 'BUICK-GMC-CADILLAC SALTILLO',},
                    {bac: '290485', name: 'BUICK-GMC-CADILLAC PIEDRAS NEGRAS',},],
            '612': [{bac: '122123', name: 'CHEVROLET MATAMOROS',},
                    {bac: '290486', name: 'CHEVROLET MATAMOROS SAN FERNANDO',},],
            '617': [{bac: '122124', name: 'CHEVROLET MONCLOVA',},],
            '620': [{bac: '197573', name: 'CHEVROLET CAR ONE UNIVERSIDAD',},
                    {bac: '290487', name: 'CHEVROLET CAR ONE RUIZ CORTINES',},
                    {bac: '290488', name: 'CHEVROLET CAR ONE LAS TORRES',},
                    {bac: '290489', name: 'CHEVROLET CAR ONE NOGALAR',},
                    {bac: '290490', name: 'CHEVROLET CAR ONE ALLENDE',},],
            '623': [{bac: '186025', name: 'CHEVROLET RIVERO LINDA VISTA',},
                    {bac: '290491', name: 'CHEVROLET RIVERO GUADALUPE',},
                    {bac: '290842', name: 'CHEVROLET RIVERO HUMBERTO LOBO',},
                    {bac: '293302', name: 'CHEVROLET RIVERO SANTA CATARINA',},],
            '624': [{bac: '207785', name: 'CHEVROLET LA SILLA',},],
            '625': [{bac: '211561', name: 'BUICK-GMC-CADILLAC RIVERO',},
                    {bac: '290843', name: 'BUICK-GMC-CADILLAC RIVERO HUMBERTO LOBO',},],
            '628': [{bac: '122129', name: 'CHEVROLET DEL RIO',},
                    {bac: '290492', name: 'CHEVROLET DEL RIO CUMBRES',},
                    {bac: '297114', name: 'CHEVROLET DEL RIO LINCOLN',},],
            '632': [{bac: '122130', name: 'CHEVROLET TEC',},],
            '636': [{bac: '122132', name: 'CHEVROLET LAREDO AUTOS',},],
            '640': [{bac: '122134', name: 'CHEVROLET PIEDRAS NEGRAS',},],
            '641': [{bac: '191966', name: 'CHEVROLET ACUÑA',},
                    {bac: '313757', name: 'CHEVROLET SABINAS',},
                    {bac: '313759', name: 'CHEVROLET MELCHOR MUZQUIZ',},],
            '644': [{bac: '122135', name: 'CHEVROLET REYNOSA',},
                    {bac: '290493', name: 'CHEVROLET RIO BRAVO',},
                    {bac: '290494', name: 'CHEVROLET CD. MIGUEL ALEMAN',},],
            '647': [{bac: '225362', name: 'BUICK-GMC-CADILLAC REYNOSA',},
                    {bac: '290612', name: 'BUICK-GMC-CADILLAC MATAMOROS',},],
            '657': [{bac: '178581', name: 'CHEVROLET SALTILLO',},
                    {bac: '290497', name: 'CHEVROLET GALO SALTILLO',},
                    {bac: '316455', name: 'CHEVROLET RAMOS',},],
            '707': [{bac: '122139', name: 'CHEVROLET CARIBE MOTORS',},],
            '709': [{bac: '202556', name: 'BUICK-GMC MERIDA',},],
            '712': [{bac: '122140', name: 'CHEVROLET CAMPECHANA',},
                    {bac: '292397', name: 'CHEVROLET CAMPECHE CHAMPOTON',},
                    {bac: '290507', name: 'CHEVROLET CAMPECHE',},],
            '714': [{bac: '122141', name: 'CHEVROLET CIUDAD DEL CARMEN',},],
            '715': [{bac: '202117', name: 'BUICK-GMC-CADILLAC VILLAHERMOSA',},
                    {bac: '290508', name: 'BUICK-GMC-CADILLAC COATZACOALCOS',},],
            '716': [{bac: '122142', name: 'CHEVROLET CANCUN',},
                    {bac: '290512', name: 'CHEVROLET COBÁ',},
                    {bac: '290510', name: 'CHEVROLET PLAYA DEL CARMEN',},],
            '718': [{bac: '122143', name: 'CHEVROLET CRUCES DE TABASCO',},
                    {bac: '290513', name: 'CHEVROLET CARDENAS TABASCO',},
                    {bac: '301723', name: 'CHEVROLET COMALCALCO',},],
            '720': [{bac: '166846', name: 'CHEVROLET PENSIONES',},
                    {bac: '290571', name: 'CHEVROLET MONTEJO',},
                    {bac: '290572', name: 'CHEVROLET MONTECRISTO',},
                    {bac: '290573', name: 'CHEVROLET VALLADOLID',},
                    {bac: '295532', name: 'CHEVROLET PERIFERICO MERIDA',},],
            '721': [{bac: '193468', name: 'BUICK-GMC-CADILLAC CANCUN',},
                    {bac: '290574', name: 'CADILLAC MERIDA',},],
            '727': [{bac: '230805', name: 'BUICK-GMC CAMPECHE',},
                    {bac: '290575', name: 'BUICK-GMC CD DEL CARMEN',},],
            '731': [{bac: '214539', name: 'BUICK-GMC FARRERA TUXTLA',},],
            '735': [{bac: '122147', name: 'CHEVROLET FARRERA TUXTLA',},
                    {bac: '290576', name: 'CHEVROLET FARRERA TAPACHULA',},
                    {bac: '290577', name: 'CHEVROLET FARRERA COMITAN',},
                    {bac: '290578', name: 'CHEVROLET FARRERA SAN CRISTOBAL DE LAS CASAS',},
                    {bac: '290579', name: 'CHEVROLET FARRERA LIBRAMIENTO TUXTLA',},
                    {bac: '313394', name: 'CHEVROLET FARRERA COATZACOALCOS',},],
            '740': [{bac: '122148', name: 'CHEVROLET TABASQUEÑA',},],
            '804': [{bac: '169100', name: 'CHEVROLET CAJEME',},],
            '812': [{bac: '122152', name: 'CHEVROLET PREMIER CULIACAN',},],
            '814': [{bac: '166851', name: 'CHEVROLET CULIACAN MOTORS',},
                    {bac: '301711', name: 'CHEVROLET AEROPUERTO CULIACAN',},],
            '816': [{bac: '122153', name: 'CHEVROLET FELIX GUASAVE',},],
            '819': [{bac: '203322', name: 'CADILLAC CULIACAN',},
                    {bac: '290582', name: 'CADILLAC LOS MOCHIS',},],
            '820': [{bac: '166852', name: 'CHEVROLET CARSOL HERMOSILLO',},
                    {bac: '290584', name: 'CHEVROLET CARSOL GUAYMAS',},
                    {bac: '290585', name: 'CHEVROLET CARSOL NOGALES',},],
            '824': [{bac: '122156', name: 'CHEVROLET SUPER AUTOS HERMOSILLO',},],
            '828': [{bac: '275715', name: 'CHEVROLET LA PAZ',},
                    {bac: '290586', name: 'CHEVROLET LOS CABOS',},],
            '831': [{bac: '122158', name: 'CHEVROLET FELIX LOS MOCHIS',},],
            '832': [{bac: '275678', name: 'CHEVROLET MAZATLAN',},],
            '837': [{bac: '122159', name: 'CHEVROLET NAVOJOA',},],
            '850': [{bac: '205167', name: 'BUICK-GMC CULIACAN',},
                    {bac: '290587', name: 'BUICK-GMC LOS MOCHIS',},
                    {bac: '292490', name: 'BUICK-GMC MAZATLAN',},],
            '851': [{bac: '122162', name: 'CHEVROLET MEXICALI',},
                    {bac: '290588', name: 'CHEVROLET SAN LUIS RIO COLORADO',},
                    {bac: '291153', name: 'CHEVROLET MEXICALI SAN PEDRO',},],
            '852': [{bac: '122163', name: 'CHEVROLET TIJUANA',},
                    {bac: '290591', name: 'CHEVROLET ENSENADA',},
                    {bac: '293978', name: 'CHEVROLET GUSTAVO SALINAS',},],
            '854': [{bac: '222751', name: 'BUICK-GMC-CADILLAC TIJUANA',},
                    {bac: '290592', name: 'BUICK-GMC-CADILLAC MEXICALI',},
                    {bac: '298347', name: 'BUICK-GMC-CADILLAC ENSENADA',},],
            '888': [{bac: '216847', name: 'BUICK-GMC HERMOSILLO',},
                    {bac: '299145', name: 'BUICK-GMC CIUDAD OBREGON',},],
            '908': [{bac: '122164', name: 'CHEVROLET CIUDAD JUAREZ',},
                    {bac: '290593', name: 'CHEVROLET AGUA PRIETA',},
                    {bac: '290594', name: 'CHEVROLET CANANEA',},
                    {bac: '316456', name: 'CHEVROLET SARACHO CASAS GRANDES',},],
            '911': [{bac: '227460', name: 'BUICK-GMC CIUDAD JUAREZ',},],
            '919': [{bac: '262900', name: 'CHEVROLET TORO',},
                    {bac: '289357', name: 'CHEVROLET TORO CD CUAUHTEMOC',},
                    {bac: '289363', name: 'CHEVROLET TORO UNIVERSIDAD',},
                    {bac: '289364', name: 'CHEVROLET TORO CD CAMARGO',},
                    {bac: '295681', name: 'CHEVROLET TORO ORTIZ MENA',},
                    {bac: '295682', name: 'CHEVROLET TORO CIUDAD DELICIAS',},
                    {bac: '289365', name: 'CHEVROLET TORO MANITOBA',},],
            '924': [{bac: '233563', name: 'BUICK-GMC TORREON',},
                    {bac: '290596', name: 'BUICK-GMC GOMEZ PALACIO',},
                    {bac: '290597', name: 'BUICK-GMC TORREON',},],
            '926': [{bac: '235397', name: 'BUICK-GMC-CADILLAC CHIHUAHUA',},],
            '927': [{bac: '122168', name: 'CHEVROLET SURMAN DURANGO',},],
            '928': [{bac: '122169', name: 'CHEVROLET SURMAN LAGUNA',},
                    {bac: '290598', name: 'CHEVROLET SURMAN GOMEZ PALACIO',},
                    {bac: '290599', name: 'CHEVROLET SURMAN TORREON',},],
            '929': [{bac: '208783', name: 'BUICK-GMC SURMAN DURANGO',},],
            '936': [{bac: '122171', name: 'CHEVROLET PARRAL',},
                    {bac: '290600', name: 'CHEVROLET CD. JIMENEZ',},],

        },
        form:{
            provider:'',
            dealer:'',
            bac:'',
            visit_date:'',
            observation_date:'',
            observation_time_reception:'',
            observation_time_delivery:'',
            situacion1:false,
            situacion2:false,
            situacion3:false,
            question1:'',
            question2:'',
            question3:'',
            question4:'',
            question5_1:'',
            question5_2:'',
            question6:'',
            question7:'',
            question8:'',
            question8_1:'',
            question8_2:'',
            question8_3:'',
            question9:'',
            question10:'',
            question11:'',
            question12:'',
            question13:'',
            question14:'',
            section2q1:'',
            section2q2_1:'',
            section2q2_2:'',
            section2q3_1:'',
            section2q3_2:'',
            section2qadded:'',
            section2qadded2:'',
            section2q4:'',
            section2qadded3:'',
            section2q5:'',
            section2q6:'',
            section2q7:'',
            section2q8:'',
            section2q9:'',
            section2q10:'',
            section2q11:'',
            comment:[],
        },
		formReset:{},
        totals:{
           accept:0,
           reject:0,
           accept2:0,
           reject2:0,
        },
        setBac(){
            const {provider, bac} = this.form;
            let filtered = this.providers[provider]?this.providers[provider].filter(x=> x.bac === bac):[];
            if(filtered.length > 0){
                this.form.dealer = filtered[0].name;
            }
        },
        saveLocal(){
            localStorage.setItem('formDataState', JSON.stringify(this.form));
            this.setTotals();
        },
        clearForm(){
            this.form = this.formReset;
            this.saveLocal();
        },
        setTotals(){
            this.totals.accept = 0;
            this.totals.reject = 0;
            this.totals.accept2 = 0;
            this.totals.reject2 = 0;
            Object.keys(this.form).forEach(question => {
                if(this.form[question] === 'Accept'){
                    this.totals.accept++;
                }else if(this.form[question] === 'Reject'){
                    this.totals.reject++;
                }else if(this.form[question] === 'Accept2'){
                    this.totals.accept2++;
                }else if(this.form[question] === 'Reject2'){
                    this.totals.reject2++;
                }
            })
        },
        savePdf(){
            const elm = document.getElementById('form-print');
            
            this.formatPrintElements();
            var opt = {
              margin:       .5,
              filename:     'resultados.pdf',
              html2canvas:  { scale: 2 },
              image: {type: 'jpeg', quality: 1},
              pagebreak: { mode: 'avoid-all', before: '.page' },
              jsPDF:        { unit: 'in', format: 'letter', orientation: 'landscape' }
            };

            html2pdf().set(opt).from(elm).save().then(r=>this.unformatPrintElements());
            
           

        },
        formatPrintElements(){
            document.getElementById('sumbitBtn').classList.add("hidden")
            document.getElementById('clearBtn').classList.add("hidden")
            
            let fixElements = document.getElementsByClassName('fix-print');
            for(let i in fixElements){
                fixElements.item(i).classList.add("position-none");
            }
        },
        unformatPrintElements(){
            let fixElements = document.getElementsByClassName('fix-print');
            document.getElementById('sumbitBtn').classList.remove("hidden")
            document.getElementById('clearBtn').classList.remove("hidden")
            
            for(let i in fixElements){
                fixElements.item(i).classList.remove("position-none");
            }

        },
        checkSituation(index){
            let cases = ['situacion1','situacion2', 'situacion3'];
            cases.filter(x=>x != index).forEach(x=>{
                if(this.form[x]){
                    this.form[x] = false;
                    alert('Selecciona solo una circunstancia');
                }
            })
            
        },
        autoGrow(element) {
            this.$el.style.height = "5px";
            this.$el.style.height = (this.$el.scrollHeight+15)+"px";
        }
    }));
});

