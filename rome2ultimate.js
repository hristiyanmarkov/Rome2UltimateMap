

$(function () {
    $(".mapcontainer").mapael({
        map: {
            // Set the name of the map to display
            name: "resources",
            defaultArea: {
                attrs: {
                    fill: "#000000",
                    stroke: "#ced8d0",
                    opacity: 0.5,
                },
                attrsHover: {
                    opacity: 1,
          	    }
      	    },
        }, legend:{
        	redrawOnResize: true,
            area:[{

            		cssClass:"areaLegend",	
                	hideElemsOnClick:{
                		opacity:0,
                		animDuration:250,
                	},
                	slices:[{
                		label:"Resources",
                		sliceValue:"Resources",
                		width:50,
                		height:50,
                		attrsHover:{
                			transform: "s1.25"
                		},	
                		legendSpecificAttrs:{
                			transform: "s3",
                		},
                	}],
            	},
            ],
        	plot:{
        		hideElemsOnClick:{
        			// enabled:true,
        			opacity: 0,
        			animDuration:250,
        		},
        		mode:"horizontal",
            	slices: [{
            		label:"",
            		sliceValue:"Wonders",
            		type: "image",
            		url: "img/wonder.png",
            		width:14,
            		height:14,
            		attrsHover:{
            			transform: "s1.75"
            		},
            		},
            		{
            		label:"",
            		sliceValue:"RegionWonders",
            		type: "image",
            		url: "img/regionwonder.png",
            		width:14,
            		height:14,
            		attrsHover:{
            			transform: "s1.75",
            		},
            		},
            	],
            },



        }, plots:{
        	'carthage':{
        		x:290,
        		y:540,
        		tooltip:{content:"<b>Carthago</b><br><i>All trade passes through here.</i><br>+25% wealth from all commerce"},
        		value:"RegionWonders",
        	},
        	'rome':{
        		x:330,
        		y:420,
        		tooltip:{content:"<b>Rome</b><br><i>The large population provides many warm bodies to fill the ranks of the army.</i><br>+15% wealth from all sources<br>+2 army recruitment capacity"},
        		value:"RegionWonders",
        	},
        	'antioch':{
        		x:665,
        		y:510,
        		tooltip:{content:"<b>Antioch</b><br><i>Happiness abounds in the golden city.</i><br>+6 public order"},
        		value:"RegionWonders",
        	},
        	'pella':{
        		x:485,
        		y:440,
        		tooltip:{content:"<b>Pella</b><br><i>The mines nearby are the reason the Macedonian Kings chose this place as their capital.</i><br>+25% wealth from industry"},
        		value:"RegionWonders",
        	},
        	'stonehenge':{
        		x:142,
        		y:197,
        		tooltip:{content:"<b>Stonehenge</b><br><i>\"Their legacy remains, hewn into the living rock of Stonehenge.\"</i><br>+10% civil research rate<br>-20% public order penalties from cultural differences"},
        		value: "Wonders"
        	},
        	'karnag':{
        		x:117,
        		y:275,
        		tooltip:{content:"<b>The Dolmens of Karnag</b><br><i>\"Swirled in mist and mystery these stones have much to tell.\"</i><br>+10% military research rate<br>+4 growth per turn (global)"},
        		value: "Wonders"
        	},
        	'hercules':{
        		x:77,
        		y:534,
        		tooltip:{content:"<b>Pillars of Hercules</b><br><i>\"Great pillars created by the might of Hercules.\"</i><br>+5% movement range for all fleets<br>-10% naval unit recruitment cost"},
        		value: "Wonders"
        	},
        	'hercules2':{
        		x:77,
        		y:564,
        		tooltip:{content:"<b>Pillars of Hercules</b><br><i>\"Great pillars created by the might of Hercules.\"</i><br>+5% movement range for all fleets<br>-10% naval unit recruitment cost"},
        		value: "Wonders"
        	},
        	'vesuvius':{
        		x:352,
        		y:432,
        		tooltip:{content:"<b>Mount Vesuvius </b><br><i>\"Those living in the shadow of Vesuvius respect its power.\"</i><br>+5% morale for all armies and fleets<br>+5% wealth from agriculture(global)"},
        		value: "Wonders"
        	},
        	'etna':{
        		x:347,
        		y:523,
        		tooltip:{content:"<b>Mount Etna</b><br><i>\"Home of the mighty Hephaestus forge and prison to the monster Typhon.\"</i><br>+5% armour for all armies and fleets<br>+10% wealth from agriculture(global)"},
        		value: "Wonders"
        	},
        	'greatgods':{
        		x:505,
        		y:410,
        		tooltip:{content:"<b>The Sanctuary of the Great Gods</b><br><i>\"In the heart of the Sanctuary the Great Gods wait...\"</i><br>+4 growth per turn (global)<br>+4 cultural influence(global)"},
        		value: "Wonders"
        	},
        	'olympus':{
        		x:465,
        		y:455,
        		tooltip:{content:"<b>Mount Olympus</b><br><i>\"Home of the Gods and mightiest of mountains.\"</i><br>-20% public order penalties from cultural differences<br>Bread and Games Edict: +25% wealth generated by culture"},
        		value: "Wonders"
        	},
        	'zeus':{
        		x:450,
        		y:492,
        		tooltip:{content:"<b>Statue of Zeus at Olympia</b><br><i>\"It is a wonder, to look upon the face of a God.\"</i><br>+10% wealth from culture<br>Bread and Games Edict: +10 public order"},
        		value: "Wonders"
        	},
        	'amunra':{
        		x:523,
        		y:674,
        		tooltip:{content:"<b>Oracle of Amun-Ra</b><br><i>\"Only the worthy may hear the words of the oracle.\"</i><br>+2 public order (global)<br>-20% resistance to foreign occupation"},
        		value: "Wonders"
        	},
        	'giza':{
        		x:566,
        		y:655,
        		tooltip:{content:"<b>The Necropolis of Giza</b><br><i>\"The swirling sands hold the greatest treasures.\"</i><br>-5% construction costs<br>+5% wealth from culture"},
        		value: "Wonders"
        	},
        	'pharos':{
        		x:550,
        		y:635,
        		tooltip:{content:"<b>The Pharos of ALexandria</b><br><i>\"May its light be a beacon when all other lights go out.\"</i><br>+20 line of sight to fleets<br>+15% wealth from maritime commerce buildings"},
        		value: "Wonders"
        	},
        	'colossus':{
        		x:545,
        		y:525,
        		tooltip:{content:"<b>The Colossus of Rhodes</b><br><i>\"To you, O Sun, the people of Dorian Rhodes set up this bronze statue reaching to Olympus.\"</i><br>+2% tariff income from trade<br>+1 fleet recruitment capacity"},
        		value: "Wonders"
        	},
        	'mausoleum':{
        		x:552,
        		y:494,
        		tooltip:{content:"<b>Mausoleum of Mausollus</b><br><i>\"A memorial of his own fame and of the sculptor's art.\"</i><br>-3% construction costs<br>+2% tax rage"},
        		value: "Wonders"
        	},
        	'argaeus':{
        		x:630,
        		y:485,
        		tooltip:{content:"<b>Mount Argaeus</b><br><i>\"Mount Argaeus, the highest mountain of all.\"</i><br>+20 line of sight to armies<br>+5% movement range for armies"},
        		value: "Wonders"
        	},
        	'babylon':{
        		x:775,
        		y:589,
        		tooltip:{content:"<b>The Great City of Babylon</b><br><i>\"A city of breathtaking beauty and wonder.\"</i><br>+3% civil research rate<br>+2 growth per turn"},
        		value: "Wonders"
        	},
        	'behistun':{
        		x:808,
        		y:538,
        		tooltip:{content:"<b>Mount Behistun</b><br><i>\"Temples may burn to the ground but mountains last forever.\"</i><br>+3% military research rate<br>-20% resistance to foreign occupation"},
        		value: "Wonders"
        	},
        	'davamand':{
        		x:850,
        		y:515,
        		tooltip:{content:"<b>Mount Davamand</b><br><i>\"Within the depths of this mountain lies a terrible monster.\"</i><br>+2 public order<br>+5% missile attack range for all archers in armies and fleets"},
        		value: "Wonders"
        	},
        	'rostam':{
        		x:870,
        		y:600,
        		tooltip:{content:"<b>Necropolis of Rostam</b><br><i>\"Great men should never be lain to rest in the cold ground.\"</i><br>+3% morale for all units<br>-3% land unit recruitment cost"},
        		value: "Wonders"
        	},
        	'bam':{
        		x:925,
        		y:575,
        		tooltip:{content:"<b>Bam Citadel</b><br><i>\"The greatest citadel ever built. All others pale in comparison.\"</i><br>-10% attritional losses when under siege<br>+2 siege hold-out time"},
        		value: "Wonders"
        	},

        },areas: {
            "moridunon-resource-gold":{
				attrs:{
					fill:"#493D31"
				},
				attrsHover:{
					fill:"#493D31",
				},
                value: "Resources",
                href: "#",
                tooltip: {content: "<span style=\"font-weight:bold;\">Moridunon (Britannia)</span><br/><img src=\"img/gold.png\"> <span style=\"font-weight:bold;\">Gold</span><br/>0/-1/-4/-8 food <br/>200/350/500/700 mining wealth<br>+5%/10%/15%/20% mining wealth(global)<br>1/2/3/4 growth<br>0/0/0/5% commerce wealth(global)"},
            },
            "nemossos-resource-gold":{
				attrs:{
					fill:"#493D31"
				},
				attrsHover:{
					fill:"#493D31",
				},
                value: "Resources",
                href: "#",
                tooltip: {content: "<span style=\"font-weight:bold;\">Nemossos (Aquitania)</span><br/><img src=\"img/gold.png\"> <span style=\"font-weight:bold;\">Gold</span><br/>0/-1/-4/-8 food <br/>200/350/500/700 mining wealth<br>+5%/10%/15%/20% mining wealth(global)<br>1/2/3/4 growth<br>0/0/0/5% commerce wealth(global)"},
            },
            "istros-resource-gold":{
				attrs:{
					fill:"#493D31"
				},
				attrsHover:{
					fill:"#493D31",
				},
                value: "Resources",
                href: "#",
                tooltip: {content: "<span style=\"font-weight:bold;\">Istros (Hercynia)</span><br/><img src=\"img/gold.png\"> <span style=\"font-weight:bold;\">Gold</span><br/>0/-1/-4/-8 food <br/>200/350/500/700 mining wealth<br>+5%/10%/15%/20% mining wealth(global)<br>1/2/3/4 growth<br>0/0/0/5% commerce wealth(global)"},
            },
            "aksum-resource-gold":{
				attrs:{
					fill:"#493D31"
				},
				attrsHover:{
					fill:"#493D31",
				},
                value: "Resources",
                href: "#",
                tooltip: {content: "<span style=\"font-weight:bold;\">Aksum (Aethiopia)</span><br/><img src=\"img/gold.png\"> <span style=\"font-weight:bold;\">Gold</span><br/>0/-1/-4/-8 food <br/>200/350/500/700 mining wealth<br>+5%/10%/15%/20% mining wealth(global)<br>1/2/3/4 growth<br>0/0/0/5% commerce wealth(global)"},
            },
            "gabala-resource-gold":{
				attrs:{
					fill:"#493D31"
				},
				attrsHover:{
					fill:"#493D31",
				},
                value: "Resources",
                href: "#",
                tooltip: {content: "<span style=\"font-weight:bold;\">Gabala (Caucasia)</span><br/><img src=\"img/gold.png\"> <span style=\"font-weight:bold;\">Gold</span><br/>0/-1/-4/-8 food <br/>200/350/500/700 mining wealth<br>+5%/10%/15%/20% mining wealth(global)<br>1/2/3/4 growth<br>0/0/0/5% commerce wealth(global)"},
            },
            "eucratideia-resource-gold":{
				attrs:{
					fill:"#493D31"
				},
				attrsHover:{
					fill:"#493D31",
				},
                value: "Resources",
                href: "#",
                tooltip: {content: "<span style=\"font-weight:bold;\">Eucratideia (Bactria)</span><br/><img src=\"img/gold.png\"> <span style=\"font-weight:bold;\">Gold</span><br/>0/-1/-4/-8 food <br/>200/350/500/700 mining wealth<br>+5%/10%/15%/20% mining wealth(global)<br>1/2/3/4 growth<br>0/0/0/5% commerce wealth(global)"},
            },
            "bam-resource-marble":{
				attrs:{
					fill:"#493D31"
				},
				attrsHover:{
					fill:"#493D31",
				},
            	value: "Resources",
            	href: "#",
            	tooltip: {content: "<span style=\"font-weight:bold;\">Bam (Carmania)</span><br/><img src=\"img/marble.png\"> <span style=\"font-weight:bold;\">Marble</span><br/>0/-1/-4/-8 food <br/>100/150/200/300 mining wealth<br>5%/10%/15%/20% cheaper construction<br>1/2/3/4 public order(global)<br>1/2/3/4 growth"},
            },
            "iader-resource-marble":{
				attrs:{
					fill:"#493D31"
				},
				attrsHover:{
					fill:"#493D31",
				},
            	value: "Resources",
            	href: "#",
            	tooltip: {content: "<span style=\"font-weight:bold;\">Iader (Illyria)</span><br/><img src=\"img/marble.png\"> <span style=\"font-weight:bold;\">Marble</span><br/>0/-1/-4/-8 food <br/>100/150/200/300 mining wealth<br>10%/20%/30%/40% cheaper construction<br>+0/2/4/6 public order(global)<br>1/2/3/4 growth"},
            },
            "sparta-resource-marble":{
				attrs:{
					fill:"#493D31"
				},
				attrsHover:{
					fill:"#493D31",
				},
            	value: "Resources",
            	href: "#",
            	tooltip: {content: "<span style=\"font-weight:bold;\">Sparta (Hellas)</span><br/><img src=\"img/marble.png\"> <span style=\"font-weight:bold;\">Marble</span><br/>0/-1/-4/-8 food <br/>100/150/200/300 mining wealth<br>10%/20%/30%/40% cheaper construction<br>+0/2/4/6 public order(global)<br>1/2/3/4 growth"},
            },
            "pergamon-resource-marble":{
				attrs:{
					fill:"#493D31"
				},
				attrsHover:{
					fill:"#493D31",
				},
            	value: "Resources",
            	href: "#",
            	tooltip: {content: "<span style=\"font-weight:bold;\">	Pergamon (Asia)</span><br/><img src=\"img/marble.png\"> <span style=\"font-weight:bold;\">Marble</span><br/>0/-1/-4/-8 food <br/>100/150/200/300 mining wealth<br>10%/20%/30%/40% cheaper construction<br>+0/2/4/6 public order(global)<br>1/2/3/4 growth"},
            },
            "aracillum-resource-marble":{
				attrs:{
					fill:"#493D31"
				},
				attrsHover:{
					fill:"#493D31",
				},
            	value: "Resources",
            	href: "#",
            	tooltip: {content: "<span style=\"font-weight:bold;\">	Aracillum (Tarraconensis)</span><br/><img src=\"img/marble.png\"> <span style=\"font-weight:bold;\">Marble</span><br/>0/-1/-4/-8 food <br/>100/150/200/300 mining wealth<br>10%/20%/30%/40% cheaper construction<br>+0/2/4/6 public order(global)<br>1/2/3/4 growth"},
            },
            "yathrib-resource-marble":{
				attrs:{
					fill:"#493D31"
				},
				attrsHover:{
					fill:"#493D31",
				},
            	value: "Resources",
            	href: "#",
            	tooltip: {content: "<span style=\"font-weight:bold;\">Yathrib (Arabia Magna)</span><br/><img src=\"img/marble.png\"> <span style=\"font-weight:bold;\">Marble</span><br/>0/-1/-4/-8 food <br/>100/150/200/300 mining wealth<br>10%/20%/30%/40% cheaper construction<br>+0/2/4/6 public order(global)<br>1/2/3/4 growth"},
            },
            "edessa-resource-silk":{
                attrs:{
                    fill:"#7256AB"
                },
                attrsHover:{
                    fill:"#7256AB"
                },
            	value: "Resources",
            	href: "#",
            	tooltip: {content: "<span style=\"font-weight:bold;\">Edessa (Mesopotamia)</span><br/><img src=\"img/silk.png\"> <span style=\"font-weight:bold;\">Silk</span><br/>0/-1/-4/-8 food <br/>100/150/200/250 local commerce<br>5%/10%/15%/20% commerce wealth(global)<br>0/1/2/3 public order<br>1/2/3/3 growth"},
            },
            "susia-resource-silk":{
                attrs:{
                    fill:"#7256AB"
                },
                attrsHover:{
                    fill:"#7256AB"
                },
            	value: "Resources",
            	href: "#",
            	tooltip: {content: "<span style=\"font-weight:bold;\">Susia (Parthia)</span><br/><img src=\"img/silk.png\"> <span style=\"font-weight:bold;\">Silk</span><br/>0/-1/-4/-8 food <br/>100/150/200/250 local commerce<br>5%/10%/15%/20% commerce wealth(global)<br>0/1/2/3 public order<br>1/2/3/3 growth"},
            },
            "bukhara-resource-silk":{
                attrs:{
                    fill:"#7256AB"
                },
                attrsHover:{
                    fill:"#7256AB"
                },
            	value: "Resources",
            	href: "#",
            	tooltip: {content: "<span style=\"font-weight:bold;\">Bukhara (Transoxania)</span><br/><img src=\"img/silk.png\"> <span style=\"font-weight:bold;\">Silk</span><br/>0/-1/-4/-8 food <br/>100/150/200/250 local commerce<br>5%/10%/15%/20% commerce wealth(global)<br>0/1/2/3 public order<br>1/2/3/3 growth"},
            },
            "eborakon-resource-leather":{
				attrs:{
					fill:"#493D31"
				},
				attrsHover:{
					fill:"#493D31",
				},
				value: "Resources",
            	href: "#",
            	tooltip: {content: "<span style=\"font-weight:bold;\">Eborakon (Britannia)</span><br/><img src=\"img/leather.png\"> <span style=\"font-weight:bold;\">Leather</span><br/>0/-1/-4/-8 food <br/>100/150/200/250 local commerce<br>5%/10%/15%/20% manufacturing wealth(global)<br>1/2/3/4 growth"},
            },
            "uburzis-resource-leather":{
				attrs:{
					fill:"#493D31"
				},
				attrsHover:{
					fill:"#493D31",
				},
				value: "Resources",
            	href: "#",
            	tooltip: {content: "<span style=\"font-weight:bold;\">Uburzis (Magna Germania)</span><br/><img src=\"img/leather.png\"> <span style=\"font-weight:bold;\">Leather</span><br/>0/-1/-4/-8 food <br/>100/150/200/250 local commerce<br>5%/10%/15%/20% manufacturing wealth(global)<br>1/2/3/4 growth"},
            },
            "galic-resource-leather":{
				attrs:{
					fill:"#493D31"
				},
				attrsHover:{
					fill:"#493D31",
				},
				value: "Resources",
            	href: "#",
            	tooltip: {content: "<span style=\"font-weight:bold;\">Galic (Sarmatia)</span><br/><img src=\"img/leather.png\"> <span style=\"font-weight:bold;\">Leather</span><br/>0/-1/-4/-8 food <br/>100/150/200/250 local commerce<br>5%/10%/15%/20% manufacturing wealth(global)<br>1/2/3/4 growth"},
            },
            "gelonus-resource-leather":{
				attrs:{
					fill:"#493D31"
				},
				attrsHover:{
					fill:"#493D31",
				},
				value: "Resources",
            	href: "#",
            	tooltip: {content: "<span style=\"font-weight:bold;\">Gelonus (Scythia)</span><br/><img src=\"img/leather.png\"> <span style=\"font-weight:bold;\">Leather</span><br/>0/-1/-4/-8 food <br/>100/150/200/250 local commerce<br>5%/10%/15%/20% manufacturing wealth(global)<br>1/2/3/4 growth"},
            },
            "namnetum-resource-timber":{
				attrs:{
					fill:"#493D31"
				},
				attrsHover:{
					fill:"#493D31",
				},
            	value: "Resources",
            	href: "#",
            	tooltip: {content: "<span style=\"font-weight:bold;\">Namnetum (Celtica)</span><br/><img src=\"img/timber.png\"> <span style=\"font-weight:bold;\">Timber</span><br/>0/-1/-4/-8 food <br/>40/60/80/100 manufacturing wealth<br>5%/10%/15%/20% industry wealth<br>1/2/3/4 growth<br>0/1/2/3 public order<br>0/1/2/3 level hulls"},
            },
            "iol-resource-timber":{
				attrs:{
					fill:"#493D31"
				},
				attrsHover:{
					fill:"#493D31",
				},
            	value: "Resources",
            	href: "#",
            	tooltip: {content: "<span style=\"font-weight:bold;\">Iol (Mauretania)</span><br/><img src=\"img/timber.png\"> <span style=\"font-weight:bold;\">Timber</span><br/>0/-1/-4/-8 food <br/>40/60/80/100 manufacturing wealth<br>5%/10%/15%/20% industry wealth<br>1/2/3/4 growth<br>0/1/2/3 public order<br>0/1/2/3 level hulls"},
            },
            "rhougion-resource-timber":{
				attrs:{
					fill:"#493D31"
				},
				attrsHover:{
					fill:"#493D31",
				},
            	value: "Resources",
            	href: "#",
            	tooltip: {content: "<span style=\"font-weight:bold;\">Rhougion (Suebia)</span><br/><img src=\"img/timber.png\"> <span style=\"font-weight:bold;\">Timber</span><br/>0/-1/-4/-8 food <br/>40/60/80/100 manufacturing wealth<br>5%/10%/15%/20% industry wealth<br>1/2/3/4 growth<br>0/1/2/3 public order<br>0/1/2/3 level hulls"},
            },
            "sinope-resource-timber":{
				attrs:{
					fill:"#493D31"
				},
				attrsHover:{
					fill:"#493D31",
				},
            	value: "Resources",
            	href: "#",
            	tooltip: {content: "<span style=\"font-weight:bold;\">Sinope (Bithynia et Pontus)</span><br/><img src=\"img/timber.png\"> <span style=\"font-weight:bold;\">Timber</span><br/>0/-1/-4/-8 food <br/>40/60/80/100 manufacturing wealth<br>5%/10%/15%/20% industry wealth<br>1/2/3/4 growth<br>0/1/2/3 public order<br>0/1/2/3 level hulls"},
            },
            "kapisene-resource-timber":{
				attrs:{
					fill:"#493D31"
				},
				attrsHover:{
					fill:"#493D31",
				},
            	value: "Resources",
            	href: "#",
            	tooltip: {content: "<span style=\"font-weight:bold;\">Kapisene (Arachosia)</span><br/><img src=\"img/timber.png\"> <span style=\"font-weight:bold;\">Timber</span><br/>0/-1/-4/-8 food <br/>40/60/80/100 manufacturing wealth<br>5%/10%/15%/20% industry wealth<br>1/2/3/4 growth<br>0/1/2/3 public order<br>0/1/2/3 level hulls"},
            },
            "tolosa-resource-oliveoil":{
				attrs:{
					fill:"#493D31"
				},
				attrsHover:{
					fill:"#493D31",
				},
            	value: "Resources",
            	href: "#",
            	tooltip: {content: "<span style=\"font-weight:bold;\">Tolosa (Provincia)</span><br/><img src=\"img/oliveoil.png\"> <span style=\"font-weight:bold;\">Olive oil</span><br/>1/2/4/8 food <br/>100/150/200/300 farming wealth<br>5%/10%/15%/20% agriculture wealth(global)<br>1/2/3/4 growth<br>0/1/2/3 public order"},
            },
            "arse-resource-oliveoil":{
				attrs:{
					fill:"#493D31"
				},
				attrsHover:{
					fill:"#493D31",
				},
            	value: "Resources",
            	href: "#",
            	tooltip: {content: "<span style=\"font-weight:bold;\">Arse (Cartaginensis)</span><br/><img src=\"img/oliveoil.png\"> <span style=\"font-weight:bold;\">Olive oil</span><br/>1/2/4/8 food <br/>100/150/200/300 farming wealth<br>5%/10%/15%/20% agriculture wealth(global)<br>1/2/3/4 growth<br>0/1/2/3 public order"},
            },
            "neapolis-resource-oliveoil":{
				attrs:{
					fill:"#493D31"
				},
				attrsHover:{
					fill:"#493D31",
				},
            	value: "Resources",
            	href: "#",
            	tooltip: {content: "<span style=\"font-weight:bold;\">Neapolis (Italia)</span><br/><img src=\"img/oliveoil.png\"> <span style=\"font-weight:bold;\">Olive oil</span><br/>1/2/4/8 food <br/>100/150/200/300 farming wealth<br>5%/10%/15%/20% agriculture wealth(global)<br>1/2/3/4 growth<br>0/1/2/3 public order"},
            },
            "jerusalem-resource-oliveoil":{
				attrs:{
					fill:"#493D31"
				},
				attrsHover:{
					fill:"#493D31",
				},
            	value: "Resources",
            	href: "#",
            	tooltip: {content: "<span style=\"font-weight:bold;\">Jerusalem (Nabataea)</span><br/><img src=\"img/oliveoil.png\"> <span style=\"font-weight:bold;\">Olive oil</span><br/>1/2/4/8 food <br/>100/150/200/300 farming wealth<br>5%/10%/15%/20% agriculture wealth(global)<br>1/2/3/4 growth<br>0/1/2/3 public order"},
            },
            "belz-resource-lead":{
				attrs:{
					fill:"#493D31"
				},
				attrsHover:{
					fill:"#493D31",
				},
            	value: "Resources",
            	href: "#",
            	tooltip: {content: "<span style=\"font-weight:bold;\">Belz (Silesia)</span><br/><img src=\"img/lead.png\"> <span style=\"font-weight:bold;\">Lead</span><br/>0/-1/-4/-8 food <br/>100/150/200/300 mining wealth<br>1/2/3/4 growth<br>1/2/3/4 public order(global)<br>0/0/0/5% industry wealth"},
            },
            "navissos-resource-lead":{
				attrs:{
					fill:"#493D31"
				},
				attrsHover:{
					fill:"#493D31",
				},
            	value: "Resources",
            	href: "#",
            	tooltip: {content: "<span style=\"font-weight:bold;\">Navissos (Thracia)</span><br/><img src=\"img/lead.png\"> <span style=\"font-weight:bold;\">Lead</span><br/>0/-1/-4/-8 food <br/>100/150/200/300 mining wealth<br>1/2/3/4 growth<br>1/2/3/4 public order(global)<br>0/0/0/5% industry wealth"},
            },
            "merv-resource-lead":{
				attrs:{
					fill:"#493D31"
				},
				attrsHover:{
					fill:"#493D31",
				},
            	value: "Resources",
            	href: "#",
            	tooltip: {content: "<span style=\"font-weight:bold;\">Merv (Aria)</span><br/><img src=\"img/lead.png\"> <span style=\"font-weight:bold;\">Lead</span><br/>0/-1/-4/-8 food <br/>100/150/200/300 mining wealth<br>1/2/3/4 growth<br>1/2/3/4 public order(global)<br>0/0/0/5% industry wealth"},
            },
            "maasgat-resource-lead":{
				attrs:{
					fill:"#493D31"
				},
				attrsHover:{
					fill:"#493D31",
				},
            	value: "Resources",
            	href: "#",
            	tooltip: {content: "<span style=\"font-weight:bold;\">Maas-gat (Arabia Felix)</span><br/><img src=\"img/lead.png\"> <span style=\"font-weight:bold;\">Lead</span><br/>0/-1/-4/-8 food <br/>100/150/200/300 mining wealth<br>1/2/3/4 growth<br>1/2/3/4 public order(global)<br>0/0/0/5% industry wealth"},
            },
            "migdol-resource-dyes":{
                attrs:{
                    fill:"#7256AB"
                },
                attrsHover:{
                    fill:"#7256AB"
                },
            	value: "Resources",
            	href: "#",
            	tooltip: {content: "<span style=\"font-weight:bold;\">Migdol (Mauretania)</span><br/><img src=\"img/dyes.png\"> <span style=\"font-weight:bold;\">Dyes</span><br/>0/-1/-4/-8 food <br/>200/350/500/650 local commerce<br>10%/20%/30%/40% manufacturing wealth<br>1/2/3/4 growth<br>1/2/4/6 public order(global)"},
            },
            "tyros-resource-dyes":{
                attrs:{
                    fill:"#7256AB"
                },
                attrsHover:{
                    fill:"#7256AB"
                },
            	value: "Resources",
            	href: "#",
            	tooltip: {content: "<span style=\"font-weight:bold;\">Tyros (Syria)</span><br/><img src=\"img/dyes.png\"> <span style=\"font-weight:bold;\">Dyes</span><br/>0/-1/-4/-8 food <br/>200/350/500/650 local commerce<br>10%/20%/30%/40% manufacturing wealth<br>1/2/3/4 growth<br>1/2/4/6 public order(global)"},
            },
            "alabu-resource-amber":{
                attrs:{
                    fill:"#7256AB"
                },
                attrsHover:{
                    fill:"#7256AB"
                },
            	value: "Resources",
            	href: "#",
            	tooltip: {content: "<span style=\"font-weight:bold;\">Alabu (Suebia)</span><br/><img src=\"img/amber.png\"> <span style=\"font-weight:bold;\">Amber</span><br/>0/-1/-4/-8 food <br/>150/250/350/500 local commerce<br>2%/4%/6%/8% tariff income<br>1/2/3/4 growth<br>1/2/3/4 public order"},
            },
            "ascaucalis-resource-amber":{
                attrs:{
                    fill:"#7256AB"
                },
                attrsHover:{
                    fill:"#7256AB"
                },
            	value: "Resources",
            	href: "#",
            	tooltip: {content: "<span style=\"font-weight:bold;\">Ascaucalis (Suebia)</span><br/><img src=\"img/amber.png\"> <span style=\"font-weight:bold;\">Amber</span><br/>0/-1/-4/-8 food <br/>150/250/350/500 local commerce<br>2%/4%/6%/8% tariff income<br>1/2/3/4 growth<br>1/2/3/4 public order"},
            },
            "monsregius-resource-amber":{
                attrs:{
                    fill:"#7256AB"
                },
                attrsHover:{
                    fill:"#7256AB"
                },
            	value: "Resources",
            	href: "#",
            	tooltip: {content: "<span style=\"font-weight:bold;\">Mons Regius (Sarmatia)</span><br/><img src=\"img/amber.png\"> <span style=\"font-weight:bold;\">Amber</span><br/>0/-1/-4/-8 food <br/>150/250/350/500 local commerce<br>2%/4%/6%/8% tariff income<br>1/2/3/4 growth<br>1/2/3/4 public order"},
            },
            "patavium-resource-glassware":{
                attrs:{
                    fill:"#7256AB"
                },
                attrsHover:{
                    fill:"#7256AB"
                },
            	value: "Resources",
            	href: "#",
            	tooltip: {content: "<span style=\"font-weight:bold;\">Patavium (Cisalpina)</span><br/><img src=\"img/glassware.png\"> <span style=\"font-weight:bold;\">Glassware</span><br/>0/-1/-4/-8 food <br/>100/150/200/300 manufacturing wealth<br>4%/8%/12%/16% research rate<br>1/2/3/4 growth<br>0/1/2/3 public order"},
            },
            "salamis-resource-glassware":{
                attrs:{
                    fill:"#7256AB"
                },
                attrsHover:{
                    fill:"#7256AB"
                },
            	value: "Resources",
            	href: "#",
            	tooltip: {content: "<span style=\"font-weight:bold;\">Salamis (Cilicia)</span><br/><img src=\"img/glassware.png\"> <span style=\"font-weight:bold;\">Glassware</span><br/>0/-1/-4/-8 food <br/>100/150/200/300 manufacturing wealth<br>4%/8%/12%/16% research rate<br>1/2/3/4 growth<br>0/1/2/3 public order"},
            },
            "bagacum-resource-glassware":{
                attrs:{
                    fill:"#7256AB"
                },
                attrsHover:{
                    fill:"#7256AB"
                },
            	value: "Resources",
            	href: "#",
            	tooltip: {content: "<span style=\"font-weight:bold;\">Bagacum (Germania Minor)</span><br/><img src=\"img/glassware.png\"> <span style=\"font-weight:bold;\">Glassware</span><br/>0/-1/-4/-8 food <br/>100/150/200/300 manufacturing wealth<br>4%/8%/12%/16% research rate<br>1/2/3/4 growth<br>0/1/2/3 public order"},
            },
            "palmyra-resource-glassware":{
                attrs:{
                    fill:"#7256AB"
                },
                attrsHover:{
                    fill:"#7256AB"
                },
            	value: "Resources",
            	href: "#",
            	tooltip: {content: "<span style=\"font-weight:bold;\">Palmyra (Syria)</span><br/><img src=\"img/glassware.png\"> <span style=\"font-weight:bold;\">Glassware</span><br/>0/-1/-4/-8 food <br/>100/150/200/300 manufacturing wealth<br>4%/8%/12%/16% research rate<br>1/2/3/4 growth<br>0/1/2/3 public order"},
            },
            "susa-resource-glassware":{
                attrs:{
                    fill:"#7256AB"
                },
                attrsHover:{
                    fill:"#7256AB"
                },
            	value: "Resources",
            	href: "#",
            	tooltip: {content: "<span style=\"font-weight:bold;\">Susa (Persis)</span><br/><img src=\"img/glassware.png\"> <span style=\"font-weight:bold;\">Glassware</span><br/>0/-1/-4/-8 food <br/>100/150/200/300 manufacturing wealth<br>4%/8%/12%/16% research rate<br>1/2/3/4 growth<br>0/1/2/3 public order"},
            },
            "gadira-resource-wine":{
                attrs:{
                    fill:"#7256AB"
                },
                attrsHover:{
                    fill:"#7256AB"
                },
            	value: "Resources",
            	href: "#",
            	tooltip: {content: "<span style=\"font-weight:bold;\">Gadira (Baetica)</span><br/><img src=\"img/wine.png\"> <span style=\"font-weight:bold;\">Wine</span><br/>0/-1/-4/-8 food <br/>150/200/250/250 local commerce<br>5%/10%/15%/20% commerce wealth<br>1/2/3/4 growth<br>1/2/3/4 public order(global)"},
            },
            "velathri-resource-wine":{
                attrs:{
                    fill:"#7256AB"
                },
                attrsHover:{
                    fill:"#7256AB"
                },
            	value: "Resources",
            	href: "#",
            	tooltip: {content: "<span style=\"font-weight:bold;\">Velathri (Italia)</span><br/><img src=\"img/wine.png\"> <span style=\"font-weight:bold;\">Wine</span><br/>0/-1/-4/-8 food <br/>150/200/250/250 local commerce<br>5%/10%/15%/20% commerce wealth<br>1/2/3/4 growth<br>1/2/3/4 public order(global)"},
            },
            "apollonia-resource-wine":{
                attrs:{
                    fill:"#7256AB"
                },
                attrsHover:{
                    fill:"#7256AB"
                },
            	value: "Resources",
            	href: "#",
            	tooltip: {content: "<span style=\"font-weight:bold;\">Apollonia (Macedonia)</span><br/><img src=\"img/wine.png\"> <span style=\"font-weight:bold;\">Wine</span><br/>0/-1/-4/-8 food <br/>150/200/250/250 local commerce<br>5%/10%/15%/20% commerce wealth<br>1/2/3/4 growth<br>1/2/3/4 public order(global)"},
            },
            "samosata-resource-wine":{
                attrs:{
                    fill:"#7256AB"
                },
                attrsHover:{
                    fill:"#7256AB"
                },
            	value: "Resources",
            	href: "#",
            	tooltip: {content: "<span style=\"font-weight:bold;\">Samosata (Galatia et Cappadocia)</span><br/><img src=\"img/wine.png\"> <span style=\"font-weight:bold;\">Wine</span><br/>0/-1/-4/-8 food <br/>150/200/250/250 local commerce<br>5%/10%/15%/20% commerce wealth<br>1/2/3/4 growth<br>1/2/3/4 public order(global)"},
            },
            "phanagoria-resource-wine":{
                attrs:{
                    fill:"#7256AB"
                },
                attrsHover:{
                    fill:"#7256AB"
                },
            	value: "Resources",
            	href: "#",
            	tooltip: {content: "<span style=\"font-weight:bold;\">Phanagoria (Bosporus)</span><br/><img src=\"img/wine.png\"> <span style=\"font-weight:bold;\">Wine</span><br/>0/-1/-4/-8 food <br/>150/200/250/250 local commerce<br>5%/10%/15%/20% commerce wealth<br>1/2/3/4 growth<br>1/2/3/4 public order(global)"},
            },
            "brigantium-resource-horses":{
                attrs:{
                    fill:"#A42306"
                },
                attrsHover:{
                    fill:"#A42306"
                },
            	value: "Resources",
            	href: "#",
            	tooltip: {content: "<span style=\"font-weight:bold;\">Brigantium (Tarraconensis)</span><br/><img src=\"img/horses.png\"> <span style=\"font-weight:bold;\">Horses</span><br/>0/-2/-6 food <br/>100/200/300 livestock wealth<br>1/2/3 growth<br>5%/10%/20% bonus cavalry speed"},
            },
            "treverorum-resource-horses":{
                attrs:{
                    fill:"#A42306"
                },
                attrsHover:{
                    fill:"#A42306"
                },
            	value: "Resources",
            	href: "#",
            	tooltip: {content: "<span style=\"font-weight:bold;\">Treverorum (Belgica)</span><br/><img src=\"img/horses.png\"> <span style=\"font-weight:bold;\">Horses</span><br/>0/-2/-6 food <br/>100/200/300 livestock wealth<br>1/2/3 growth<br>5%/10%/20% bonus cavalry speed"},
            },
            "larissa-resource-horses":{
                attrs:{
                    fill:"#A42306"
                },
                attrsHover:{
                    fill:"#A42306"
                },
            	value: "Resources",
            	href: "#",
            	tooltip: {content: "<span style=\"font-weight:bold;\">Larissa (Macedonia)</span><br/><img src=\"img/horses.png\"> <span style=\"font-weight:bold;\">Horses</span><br/>0/-2/-6 food <br/>100/200/300 livestock wealth<br>1/2/3 growth<br>5%/10%/20% bonus cavalry speed"},
            },
            "zadrakarta-resource-horses":{
                attrs:{
                    fill:"#A42306"
                },
                attrsHover:{
                    fill:"#A42306"
                },
            	value: "Resources",
            	href: "#",
            	tooltip: {content: "<span style=\"font-weight:bold;\">Zadrakarta (Parthia)</span><br/><img src=\"img/horses.png\"> <span style=\"font-weight:bold;\">Horses</span><br/>0/-2/-6 food <br/>100/200/300 livestock wealth<br>1/2/3 growth<br>5%/10%/20% bonus cavalry speed"},
            },
            "dimmidi-resource-horses":{
                attrs:{
                    fill:"#A42306"
                },
                attrsHover:{
                    fill:"#A42306"
                },
            	value: "Resources",
            	href: "#",
            	tooltip: {content: "<span style=\"font-weight:bold;\">Dimmidi (Mauretania)</span><br/><img src=\"img/horses.png\"> <span style=\"font-weight:bold;\">Horses</span><br/>0/-2/-6 food <br/>100/200/300 livestock wealth<br>1/2/3 growth<br>5%/10%/20% bonus cavalry speed"},
            },
            "siracena-resource-horses":{
                attrs:{
                    fill:"#A42306"
                },
                attrsHover:{
                    fill:"#A42306"
                },
            	value: "Resources",
            	href: "#",
            	tooltip: {content: "<span style=\"font-weight:bold;\">Siracena (Ponto-Caspia)</span><br/><img src=\"img/horses.png\"> <span style=\"font-weight:bold;\">Horses</span><br/>0/-2/-6 food <br/>100/200/300 livestock wealth<br>1/2/3 growth<br>5%/10%/20% bonus cavalry speed"},
            },
            "olisipo-resource-iron":{
                attrs:{
                    fill:"#A42306"
                },
                attrsHover:{
                    fill:"#A42306"
                },
            	value: "Resources",
            	href: "#",
            	tooltip: {content: "<span style=\"font-weight:bold;\">Olisipo (Lusitania)</span><br/><img src=\"img/iron.png\"> <span style=\"font-weight:bold;\">Iron</span><br/>0/-2/-6 food <br/>100/200/300 manufacturing wealth<br>1/2/3 growth<br>5%/10%/20% weapon damage or shields+armour"},
            },
            "lemonum-resource-iron":{
                attrs:{
                    fill:"#A42306"
                },
                attrsHover:{
                    fill:"#A42306"
                },
            	value: "Resources",
            	href: "#",
            	tooltip: {content: "<span style=\"font-weight:bold;\">Lemonum (Aquitania)</span><br/><img src=\"img/iron.png\"> <span style=\"font-weight:bold;\">Iron</span><br/>0/-2/-6 food <br/>100/200/300 manufacturing wealth<br>1/2/3 growth<br>5%/10%/20% weapon damage or shields+armour"},
            },
            "koria-resource-iron":{
                attrs:{
                    fill:"#A42306"
                },
                attrsHover:{
                    fill:"#A42306"
                },
            	value: "Resources",
            	href: "#",
            	tooltip: {content: "<span style=\"font-weight:bold;\">Koria (Raetia et Noricum)</span><br/><img src=\"img/iron.png\"> <span style=\"font-weight:bold;\">Iron</span><br/>0/-2/-6 food <br/>100/200/300 manufacturing wealth<br>1/2/3 growth<br>5%/10%/20% weapon damage or shields+armour"},
            },
            "segestica-resource-iron":{
                attrs:{
                    fill:"#A42306"
                },
                attrsHover:{
                    fill:"#A42306"
                },
            	value: "Resources",
            	href: "#",
            	tooltip: {content: "<span style=\"font-weight:bold;\">Segestica (Pannonia)</span><br/><img src=\"img/iron.png\"> <span style=\"font-weight:bold;\">Iron</span><br/>0/-2/-6 food <br/>100/200/300 manufacturing wealth<br>1/2/3 growth<br>5%/10%/20% weapon damage or shields+armour"},
            },
            "diospolis-resource-iron":{
                attrs:{
                    fill:"#A42306"
                },
                attrsHover:{
                    fill:"#A42306"
                },
            	value: "Resources",
            	href: "#",
            	tooltip: {content: "<span style=\"font-weight:bold;\">Diospolis (Aegyptus)</span><br/><img src=\"img/iron.png\"> <span style=\"font-weight:bold;\">Iron</span><br/>0/-2/-6 food <br/>100/200/300 manufacturing wealth<br>1/2/3 growth<br>5%/10%/20% weapon damage or shields+armour"},
            },
            "mazaca-resource-iron":{
                attrs:{
                    fill:"#A42306"
                },
                attrsHover:{
                    fill:"#A42306"
                },
            	value: "Resources",
            	href: "#",
            	tooltip: {content: "<span style=\"font-weight:bold;\">Mazaca (Galatia et Cappadocia)</span><br/><img src=\"img/iron.png\"> <span style=\"font-weight:bold;\">Iron</span><br/>0/-2/-6 food <br/>100/200/300 manufacturing wealth<br>1/2/3 growth<br>5%/10%/20% weapon damage or shields+armour"},
            },
            "tushpa-resource-iron":{
                attrs:{
                    fill:"#A42306"
                },
                attrsHover:{
                    fill:"#A42306"
                },
            	value: "Resources",
            	href: "#",
            	tooltip: {content: "<span style=\"font-weight:bold;\">Tushpa (Armenia)</span><br/><img src=\"img/iron.png\"> <span style=\"font-weight:bold;\">Iron</span><br/>0/-2/-6 food <br/>100/200/300 manufacturing wealth<br>1/2/3 growth<br>5%/10%/20% weapon damage or shields+armour"},
            },
            "rhaga-resource-iron":{
                attrs:{
                    fill:"#A42306"
                },
                attrsHover:{
                    fill:"#A42306"
                },
            	value: "Resources",
            	href: "#",
            	tooltip: {content: "<span style=\"font-weight:bold;\">Rhaga (Media Magna)</span><br/><img src=\"img/iron.png\"> <span style=\"font-weight:bold;\">Iron</span><br/>0/-2/-6 food <br/>100/200/300 manufacturing wealth<br>1/2/3 growth<br>5%/10%/20% weapon damage or shields+armour"},
            },
            "lepcis-resource-grain":{
                attrs:{
                    fill:"#3E7529"
                },
                attrsHover:{
                    fill:"#3E7529"
                },
            	value: "Resources",
            	href: "#",
            	tooltip: {content: "<span style=\"font-weight:bold;\">Lepcis (Africa)</span><br/><img src=\"img/grain.png\"> <span style=\"font-weight:bold;\">Grain</span><br/>1/2/3/4 food per region <br/>40/60/80/100 farming wealth<br>10%/20%/40%/80% farming wealth<br>1/2/3/4 growth"},
            },
            "syracusae-resource-grain":{
                attrs:{
                    fill:"#3E7529"
                },
                attrsHover:{
                    fill:"#3E7529"
                },
            	value: "Resources",
            	href: "#",
            	tooltip: {content: "<span style=\"font-weight:bold;\">Syracusae (Magna Graecia)</span><br/><img src=\"img/grain.png\"> <span style=\"font-weight:bold;\">Grain</span><br/>1/2/3/4 food per region <br/>40/60/80/100 farming wealth<br>10%/20%/40%/80% farming wealth<br>1/2/3/4 growth"},
            },
            "akink-resource-grain":{
                attrs:{
                    fill:"#3E7529"
                },
                attrsHover:{
                    fill:"#3E7529"
                },
            	value: "Resources",
            	href: "#",
            	tooltip: {content: "<span style=\"font-weight:bold;\">Akink (Pannonia)</span><br/><img src=\"img/grain.png\"> <span style=\"font-weight:bold;\">Grain</span><br/>1/2/3/4 food per region <br/>40/60/80/100 farming wealth<br>10%/20%/40%/80% farming wealth<br>1/2/3/4 growth"},
            },
            "malva-resource-grain":{
                attrs:{
                    fill:"#3E7529"
                },
                attrsHover:{
                    fill:"#3E7529"
                },
            	value: "Resources",
            	href: "#",
            	tooltip: {content: "<span style=\"font-weight:bold;\">Malva (Dacia)</span><br/><img src=\"img/grain.png\"> <span style=\"font-weight:bold;\">Grain</span><br/>1/2/3/4 food per region <br/>40/60/80/100 farming wealth<br>10%/20%/40%/80% farming wealth<br>1/2/3/4 growth"},
            },
            "memphis-resource-grain":{
                attrs:{
                    fill:"#3E7529"
                },
                attrsHover:{
                    fill:"#3E7529"
                },
            	value: "Resources",
            	href: "#",
            	tooltip: {content: "<span style=\"font-weight:bold;\">Memphis (Aegyptus)</span><br/><img src=\"img/grain.png\"> <span style=\"font-weight:bold;\">Grain</span><br/>1/2/3/4 food per region <br/>40/60/80/100 farming wealth<br>10%/20%/40%/80% farming wealth<br>1/2/3/4 growth"},
            },
            "myoshormos-resource-grain":{
                attrs:{
                    fill:"#3E7529"
                },
                attrsHover:{
                    fill:"#3E7529"
                },
            	value: "Resources",
            	href: "#",
            	tooltip: {content: "<span style=\"font-weight:bold;\">Myos Hormos (Aegyptus)</span><br/><img src=\"img/grain.png\"> <span style=\"font-weight:bold;\">Grain</span><br/>1/2/3/4 food per region <br/>40/60/80/100 farming wealth<br>10%/20%/40%/80% farming wealth<br>1/2/3/4 growth"},
            },
            "charax-resource-grain":{
                attrs:{
                    fill:"#3E7529"
                },
                attrsHover:{
                    fill:"#3E7529"
                },
            	value: "Resources",
            	href: "#",
            	tooltip: {content: "<span style=\"font-weight:bold;\">Charax (Mesopotamia)</span><br/><img src=\"img/grain.png\"> <span style=\"font-weight:bold;\">Grain</span><br/>1/2/3/4 food per region <br/>40/60/80/100 farming wealth<br>10%/20%/40%/80% farming wealth<br>1/2/3/4 growth"},
            },
        },
    });
});
$(document).ready(function() {
    $(document).keydown(function(e) {
        if (e.keyCode == '69') {
        	if($('.map').css('display') == 'block'){
        		$('.map').css('display','none');
        	}
        	else if($('.map').css('display') == 'none'){
        		$('.map').css('display','block');
        	}

        }
    });
});


$(document).keydown(function(event) {
if (event.ctrlKey==true && (event.which == '61' || event.which == '107' || event.which == '173' || event.which == '109'  || event.which == '187'  || event.which == '189'  ) ) {
        event.preventDefault();
     }
    // 107 Num Key  +
    // 109 Num Key  -
    // 173 Min Key  hyphen/underscor Hey
    // 61 Plus key  +/= key
});

$(window).bind('mousewheel DOMMouseScroll', function (event) {
       if (event.ctrlKey == true) {
       event.preventDefault();
       }
});

