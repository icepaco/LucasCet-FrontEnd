/**
 * @author Pascal
 */
var dataBank = {
	bucket : null,
	fbUserId : "",
	listeSubstances : [],
	xDoc : null
};

/**
 * This overwrite the Function object in order to add the inheritsFrom behavior
 * to all Function objects
 * 
 * @param parentClassOrObject :
 *            The parent object from whom all public data will be inherited..
 * @returns {Function}
 */
Function.prototype.inheritsFrom = function(parentClassOrObject) {
	if (parentClassOrObject.constructor == Function) {
		// Normal Inheritance
		this.prototype = new parentClassOrObject;
		this.prototype.constructor = this;
		this.prototype.parent = parentClassOrObject.prototype;
	} else {
		// Pure Virtual Inheritance
		this.prototype = parentClassOrObject;
		this.prototype.constructor = this;
		this.prototype.parent = parentClassOrObject;
	}
	return this;
}
/**
 * This function represents a Substance concept class. It is in essence a
 * virtual type Contains all the common properties that constitute a Substance
 * 
 * @constructor
 * @inherits dataBank
 * @param {Number}
 *            id Numeral identifying this substance in the dictionary
 * @param {String}
 *            graphic DB code to retrieve the graphic file Url
 * @param {String}
 *            urlLink Graphic file Url
 */
function Substance(graph, iId, sName) {
	// Private
	var graphic = graph;
	var url;
	var name = sName;
	var subId = iId;
	var id = (function() {
		function s4() {
			return Math.floor((1 + Math.random()) * 0x10000).toString(16)
					.substring(1);
		}
		return function() {
			return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-'
					+ s4() + s4() + s4();
		};
	})();
	// Public
	this.initUrl = function() {
		if (this.parent.bucket) {
			if (graphic) {
				var that = this;
				var params = {
					Key : graphic
				};
				this.parent.bucket.getObject(params, function(err, meta) {
					if (err) {
						console.log = 'ERROR: ' + err;
					} else {
						that.Url = that.parent.bucket.getSignedUrl('getObject',
								params);
					}
				});
			}
		}
	}
	this.initUrl();
	Object.defineProperty(this, "Id", {
		get : function() {
			if (!subId) {
				subId = id();
			}
			return subId;
		}
	});
	Object.defineProperty(this, "Name", {
		get : function() {
			if(!name) {
			name = this.getName();
			}
			return name;
		}
	});

	/**
	 * @property Graphic Represents either an image or an animation file
	 */
	Object.defineProperty(this, "Graphic", {
		set : function(newVal) {
			graphic = newVal;
			if (url) {
				return url;
			} else if (graphic) {
				var that = this;
				var params = {
					Key : graphic
				};
				this.parent.bucket.getObject(params, function(err, meta) {
					if (err) {
						console.log = 'ERROR: ' + err;
					} else {
						that.Url = that.parent.bucket.getSignedUrl('getObject',
								params);
					}
				});
			}
		},
		get : function() {
			return graphic;
		}
	});
	Object.defineProperty(this, "Visual", {
		get : function() {
			return this.getVisual();
		}
	});

	Object.defineProperty(this, "Url", {
		set : function(newVal) {
			url = newVal;
		},
		get : function() {
			return url;
		}
	});
	Object.defineProperty(this, "OnClick", {
		set : function(newVal) {
			this.setHandler(newVal);
		}
	});
}
Substance.inheritsFrom(dataBank);
/**
 * Virtual function : Will return the display elements of the Substance. In the
 * case of multi part visual elements lik SubstanceAction and SubstanceRelation
 * it will if needed display an interactive widget in order to complete the
 * Substance and once / if all elements are present it will display the element
 * 
 * @returns : The Visual elements either in completed or interactive form
 */
Substance.prototype.getVisual = function() {
	return null;
}
Substance.prototype.getName = function() {
	return null;
}
/**
 * Virtual function : Will set the delegate onClick event handler for this
 * Substance. The Substance is in charge of setting things up so that the event
 * fires up
 * 
 * @param eventHandler
 */
Substance.prototype.setHandler = function(eventHandler) {
	// Nothing to do
}
/**
 * This function represents a SubstanceAction concept class
 * 
 * @constructor
 * @inherits Substance
 * @param {Number}
 *            id Numeral identifying this substance in the dictionary
 * @param {String}
 *            graphic DB code to retrieve the graphic file Url
 * @param {String}
 *            sUrl Graphic file Url
 */
function SubstancePotentielle(graphic, iId, sName) {
	// Private
	Substance.call(this, graphic, iId, sName);
	var link = document.querySelector('link[rel="import"]');
	var article = link.import.querySelector('#potCon');
	// Public
	this.type = "Substance";
	/**
	 * This is the visual representation of the function. It can contains
	 * multiple display and interactive elements
	 */
	this.elemVisual = article.cloneNode(true);
	/**
	 * This function is in charge of Recording the Substance. It is a
	 * polymorphic function and will change to recrod either a Potentielle,
	 * Action or Relation
	 */
	this.RecordSubstance = function() {
		if (this.parent.listeSubstances.indexOf(this) == -1) {
			var substances = this.parent.xDoc
					.getElementsByTagName("DictionnaireSubstance")[0];
			var subPoten = this.parent.xDoc.createElement("Substance");
			var image = this.parent.xDoc.createElement("Graphique");
			var adresse = this.parent.xDoc.createElement("Adresse");
			adresse.setAttribute("Url", this.Graphic);
			image.setAttribute("Type", "Image");
			image.appendChild(adresse);
			subPoten.appendChild(image);
			subPoten.setAttribute("Id", this.Id);
			subPoten.setAttribute("Name", this.Name);
			substances.appendChild(subPoten);
			this.parent.listeSubstances.push(this);
		}
	}
}
SubstancePotentielle.inheritsFrom(Substance);
SubstancePotentielle.prototype.getName = function() {
	if (this.elemVisual) {
		var txt = $(this.elemVisual).find("#sName")[0];
		return txt.value;
	} else {
		return "";
	}	
}
SubstancePotentielle.prototype.getVisual = function() {
	if (this.elemVisual) {
		var img = $(this.elemVisual).find("#imgSub")[0];
		img.src = this.Url;
		var txt = $(this.elemVisual).find("#sName")[0];
		txt.value = this.Name;
	}
	return this.elemVisual;
}
SubstancePotentielle.prototype.setHandler = function(eventHandler) {
	if (this.elemVisual) {
		if (this.elemVisual.onclick) {
			this.elemVisual.removeEventListener('click',
					this.elemVisual.onclick);
		}
		this.elemVisual.id = this.parent.listeSubstances.indexOf(this);
		this.elemVisual.onclick = eventHandler;
	}
}
/**
 * This function represents a SubstanceAction concept class
 * 
 * @constructor
 * @inherits Substance
 * @param {Number}
 *            id Numeral identifying this substance in the dictionary
 * @param {String}
 *            graphic DB code to retrieve the graphic file Url
 * @param {String}
 *            sUrl Graphic file Url
 * @param {Object}
 *            subPrinc Represents a Substance associated to the SubstanceAction
 * @param {Object}
 *            funcAction Represents function that supports the movement of the
 *            object
 */
function SubstanceAction(graphic, iId, sName, principale, funcAction) {
	// Private
	Substance.call(this, graphic, iId, sName);
	var link = document.querySelector('link[rel="import"]');
	var article = link.import.querySelector('#motSub');
	// Public
	/**
	 * This is the visual representation of the function. It can contains
	 * multiple display and interactive elements
	 */
	this.type = "SubstanceAction";
	this.elemVisual = article.cloneNode(true);
	this.subPrinc = principale;
	this.funcAction = funcAction;
	/**
	 * This function is in charge of Recording the Substance. It is a
	 * polymorphic function and will change to recrod either a Potentielle,
	 * Action or Relation
	 */
	this.RecordSubstance = function() {
		if (this.parent.listeSubstances.indexOf(this) == -1) {
			var substances = this.parent.xDoc
					.getElementsByTagName("DictionnaireSubstance")[0];
			var subMot = this.parent.xDoc.createElement("SubstanceAction");
			var principale = this.parent.xDoc
					.createElement("SubstancePrincipale");
			var image = this.parent.xDoc.createElement("Graphique");
			var adresse = this.parent.xDoc.createElement("Adresse");
			adresse.setAttribute("Url", this.Graphic);
			image.setAttribute("Type", "Animation");
			image.appendChild(adresse);
			subMot.appendChild(image);
			subMot.setAttribute("Id", this.Id);
			subMot.setAttribute("Name", this.Name);
			principale.setAttribute("TypeSubstance", this.subPrinc.type);
			principale.setAttribute("IdSubstance", this.subPrinc.Id);
			subMot.appendChild(image);
			subMot.appendChild(principale);
			substances.appendChild(subMot);
			this.parent.listeSubstances.push(this);
		}
	}


	Object.defineProperty(this, "Principale", {
		get : function() {
			return subPrinc;
		}
	});

	Object.defineProperty(this, "Action", {
		get : function() {
			return funcAction;
		}
	});
}
SubstanceAction.inheritsFrom(Substance);
SubstanceAction.prototype.getName = function() {
	if (this.elemVisual) {
		var txt = $(this.elemVisual).find("#dynaId")[0];
		return txt.value;
	} else {
		return "";
	}
}
SubstanceAction.prototype.getVisual = function() {
	if (this.elemVisual) {
		var vid = $(this.elemVisual).find("#vidMotrice")[0];
		vid.src = this.Url;
		var txt = $(this.elemVisual).find("#dynaId")[0];
		txt.value = this.Name;
		var princHolder = $(this.elemVisual).find("#listSubstance")[0];
		if (!this.subPrinc) {
			var that = this;
			$(princHolder).empty();
			// Creating the Sub Principale interactive elements
			for (var i = 0; i < this.listeSubstances.length; i++) {
				this.listeSubstances[i].OnClick = function(event) {
					var selectId = event.currentTarget.id;
					var selectedSubstance = that.parent.listeSubstances[selectId];
					selectedSubstance.Visual.removeEventListener('click',
							selectedSubstance.onclick);
					$(princHolder).empty();
					princHolder.appendChild(selectedSubstance.Visual
							.cloneNode(true));
					that.subPrinc = selectedSubstance;
				}
				princHolder.appendChild(this.listeSubstances[i].Visual);
			}
		} else {
			if(typeof this.subPrinc == "string") {
				this.subPrinc = this.parent.retrieveSubstance(this.subPrinc);
				princHolder.appendChild(this.subPrinc.Visual.cloneNode(true));
			}
		}
	}
	return this.elemVisual;
}
SubstanceAction.prototype.setHandler = function(eventHandler) {
	if (this.elemVisual) {
		if (this.elemVisual.onclick) {
			this.elemVisual.removeEventListener('click',
					this.elemVisual.onclick);
		}
		this.elemVisual.id = this.parent.listeSubstances.indexOf(this);
		this.elemVisual.onclick = eventHandler;
	}
}
/**
 * 
 * This function represents a SubstanceRelation concept class
 * 
 * @constructor
 * @inherits Substance
 * @param {Number}
 *            id Numeral identifying this substance in the dictionary
 * @param {String}
 *            graphic Filename for a mp4 movie file or for a PNG image file
 * @param {String}
 *            voice Filename for an audio file
 * @param {String}
 *            sName Textual string representing the name of the Substance
 * @param {Object}
 *            subRelie1 Represents a Substance associated to the
 *            SubstanceRelation
 * @param {Object}
 *            subRelie2 Represents a Substance associated to the
 *            SubstanceRelation
 * @param {Object}
 *            reliureGraphique Represents a reliureGraphique object
 */
function SubstanceRelation(graphic, iId, sName, animCheck, sublie1, sublie2,
		reliureGraphique) {
	// Private
	Substance.call(this, graphic, iId, sName);
	var link = document.querySelector('link[rel="import"]');
	var article = link.import.querySelector('#relationSub');
	// Public
	this.isAnim = animCheck;
	this.subRelie1 = sublie1;
	this.subRelie2 = sublie2;
	this.reliureGraphique = reliureGraphique;
	this.type = "SubstanceRelation";
	this.elemVisual = article.cloneNode(true);
	/**
	 * This function is in charge of Recording the Substance. It is a
	 * polymorphic function and will change to recrod either a Potentielle,
	 * Action or Relation
	 */
	this.RecordSubstance = function() {
		if (this.parent.listeSubstances.indexOf(this) == -1) {
			var substances = this.parent.xDoc
					.getElementsByTagName("DictionnaireSubstance")[0];
			var subRel = this.parent.xDoc.createElement("SubstanceRelation");
			var liaison = this.parent.xDoc.createElement("LienSubstanciel");
			var sLiee1 = this.parent.xDoc.createElement("SubstanceReliee");
			var sLiee2 = this.parent.xDoc.createElement("SubstanceReliee2");
			var reliure = this.parent.xDoc.createElement("Reliure");
			var image = this.parent.xDoc.createElement("Graphique");
			var adresse = this.parent.xDoc.createElement("Adresse");
			adresse.setAttribute("Url", this.Graphic);
			image.setAttribute("Type", this.isAnim ? "Animation" : "Image");
			image.appendChild(adresse);
			sLiee1.setAttribute("TypeSubstance", this.subRelie1.type);
			sLiee1.setAttribute("IdSubstance", this.subRelie1.Id);
			sLiee2.setAttribute("TypeSubstance", this.subRelie2.type);
			sLiee2.setAttribute("IdSubstance", this.subRelie2.Id);
			reliure.setAttribute("Type", "Sequence");
			liaison.appendChild(sLiee1);
			liaison.appendChild(reliure);
			liaison.appendChild(sLiee2);
			subRel.setAttribute("Id", this.Id);
			subRel.setAttribute("Name", this.Name);
			subRel.appendChild(liaison);
			subRel.appendChild(image);
			substances.appendChild(subRel);
			this.parent.listeSubstances.push(this);
		}
	}

	Object.defineProperty(this, "Substance1", {
		get : function() {
			return subRelie1;
		}
	});

	Object.defineProperty(this, "Reliure", {
		get : function() {
			return reliureGraphique;
		}
	});

	Object.defineProperty(this, "Substance2", {
		get : function() {
			return subRelie2;
		}
	});
}
SubstanceRelation.inheritsFrom(Substance);
SubstanceRelation.prototype.getName = function(){
	if (this.elemVisual) {
		var txt = $(this.elemVisual).find("#relationName")[0];
		return txt.value;
	} else {
		return "";
	}	
}
SubstanceRelation.prototype.getVisual = function() {
	if (this.elemVisual) {
		if (this.isAnim) {
			var vid = $(this.elemVisual).find("#vidRel")[0];
			vid.src = this.Url;
			vid.style.display = "";
		} else {
			var img = $(this.elemVisual).find("#imgRel")[0];
			img.src = this.Url;
			img.style.display = "";
		}
		var txt = $(this.elemVisual).find("#relationName")[0];
		txt.value = this.Name;
		var firstHolder = $(this.elemVisual).find("#liee1")[0];
		if (!this.subRelie1) {
			var that = this;
			$(firstHolder).empty();
			// Creating the Sub Principale interactive elements
			for (var i = 0; i < this.listeSubstances.length; i++) {
				this.listeSubstances[i].OnClick = function(event) {
					var selectId = event.currentTarget.id;
					var selectedSubstance = that.parent.listeSubstances[selectId];
					selectedSubstance.Visual.removeEventListener('click',
							selectedSubstance.onclick);
					$(firstHolder).empty();
					firstHolder.appendChild(selectedSubstance.Visual
							.cloneNode(true));
					that.subRelie1 = selectedSubstance;
					that.getVisual2();
					;
				}
				firstHolder.appendChild(this.listeSubstances[i].Visual);
			}
		} else {
			if(typeof this.subRelie1 == "string") {
				this.subRelie1 = this.parent.retrieveSubstance(this.subRelie1);
				firstHolder.appendChild(this.subRelie1.Visual.cloneNode(true));
			}
			
			this.getVisual2();
		}
	}
	return this.elemVisual;
}
SubstanceRelation.prototype.getVisual2 = function() {
	var secondHolder = $(this.elemVisual).find("#liee2")[0];
	if (!this.subRelie2) {
		var that = this;
		$(secondHolder).empty();
		// Creating the Sub Principale interactive elements
		for (var i = 0; i < this.subRelie1.Visual.id; i++) {
			this.listeSubstances[i].OnClick = function(event) {
				var selectId = event.currentTarget.id;
				var selectedSubstance = that.parent.listeSubstances[selectId];
				selectedSubstance.Visual.removeEventListener('click',
						selectedSubstance.onclick);
				$(secondHolder).empty();
				secondHolder.appendChild(selectedSubstance.Visual
						.cloneNode(true));
				that.subRelie2 = selectedSubstance;
			}
			secondHolder.appendChild(this.listeSubstances[i].Visual);
		}
		for (i = this.subRelie1.Visual.id; i < this.listeSubstances.length; i++) {
			this.listeSubstances[i].OnClick = function(event) {
				var selectId = event.currentTarget.id;
				var selectedSubstance = that.parent.listeSubstances[selectId];
				selectedSubstance.Visual.removeEventListener('click',
						selectedSubstance.onclick);
				$(secondHolder).empty();
				secondHolder.appendChild(selectedSubstance.Visual);
				that.subRelie2 = selectedSubstance;
			}
		}
	} else {
		if(typeof this.subRelie2 == "string") {
			this.subRelie2 = this.parent.retrieveSubstance(this.subRelie2);
			secondHolder.appendChild(this.subRelie2.Visual.cloneNode(true));
		}
	}
}
SubstanceRelation.prototype.setHandler = function(eventHandler) {
	if (this.elemVisual) {
		if (this.elemVisual.onclick) {
			this.elemVisual.removeEventListener('click',
					this.elemVisual.onclick);
		}
		this.elemVisual.id = this.parent.listeSubstances.indexOf(this);
		this.elemVisual.onclick = eventHandler;
	}
}

/**
 * Objet graphique représentant un bouton image avec son titre textuel
 * 
 * @param image
 *            {String} Path to the image url
 * @param textTitre
 *            {String} Title to be used atop of the image button
 * @param onClickHandler
 *            {function} The delegate for the onClick event of the image button
 */
function BoutonActivateur(image, textTitre, onClickHandler) {
	// Create the button system
	var link = document.querySelector('link[rel="import"]');
	var article = link.import.querySelector('#imgInteractif');
	var bouton = article.cloneNode(true);
	var img = $(bouton).find("#activateur")[0];
	BoutonActivateur.listBoutons.push(this);
	img.src = image;
	img.addEventListener('click', function(event) {
		for (var i = 0; i < BoutonActivateur.listBoutons.length; i++) {
			BoutonActivateur.listBoutons[i].hideActivateur();
		}
		onClickHandler(event);
	});
	var txt = $(bouton).find("#txtTitre")[0];
	txt.innerHTML = textTitre;
	this.hideActivateur = function() {
		bouton.style.display = "none";
	};
	this.showActivateur = function() {
		bouton.style.display = "";
	};

	Object.defineProperty(this, "Div", {
		get : function() {
			return bouton;
		}
	});

}
BoutonActivateur.listBoutons = [];
BoutonActivateur.affiche = function() {
	for (var i = 0; i < BoutonActivateur.listBoutons.length; i++) {
		BoutonActivateur.listBoutons[i].showActivateur();
	}
}

/**
 * Objet principal représentant le document XML contenant toutes les données et
 * qui est bâti via la prog substance
 * 
 * @inherits dataBank
 * @param fileName
 *            {String} Nom du fichier associé au dictionnaire substance
 */
function RepertoireSubstance(fileName) {
	// Public
	this.readDico = function() {
		xKey = 'User:' + this.fbUserId + '/' + fileName;
		var xmlUrl;
		var xDoc;
		var bucket = this.bucket;
		var that = this;
		var params = {
			Key : xKey
		};
		this.listImg(imgPane);
		this.listAnims(videoPane);
		bucket
				.getObject(
						params,
						function(err, meta) {
							if (err) {
								var sDocument = "<?xml version='1.0' encoding='UTF-8'?><DictionnaireApplication xmlns:tns='http://www.example.org/SubstanceStructure' xmlns:xsi='http://www.w3.org/2001/XMLSchema-instance' xsi:schemaLocation='http://www.example.org/SubstanceStructure SubstanceStructure.xsd '><DictionnaireSubstance></DictionnaireSubstance></DictionnaireApplication>";
								var parser = new DOMParser();
								xDoc = parser.parseFromString(sDocument,
										"text/xml");
							} else {
								xmlUrl = bucket.getSignedUrl('getObject',
										params);
								if (window.XMLHttpRequest) {// code for
									// IE7+,
									// Firefox, Chrome,
									// Opera, Safari
									xmlhttp = new XMLHttpRequest();
								} else {// code for IE6, IE5
									xmlhttp = new ActiveXObject(
											"Microsoft.XMLHTTP");
								}
								xmlhttp.open("GET", xmlUrl, false);
								xmlhttp.send();
								xDoc = xmlhttp.responseXML;
								if (!xDoc) {
									var sDocument = "<?xml version='1.0' encoding='UTF-8'?><DictionnaireApplication xmlns:tns='http://www.example.org/SubstanceStructure' xmlns:xsi='http://www.w3.org/2001/XMLSchema-instance' xsi:schemaLocation='http://www.example.org/SubstanceStructure SubstanceStructure.xsd '><DictionnaireSubstance></DictionnaireSubstance></DictionnaireApplication>";
									var parser = new DOMParser();
									xDoc = parser.parseFromString(sDocument,
											"text/xml");
								}
							}
							that.parent.xDoc = xDoc;
							researchSubstance.call(that);
						});
	};

	this.writeDico = function() {
		if (this.parent.xDoc)
		{
			var sDoc = new XMLSerializer().serializeToString(this.parent.xDoc);
			var params = {
				Key : xKey,
				ContentType : "text/xml",
				Body : sDoc,
				ACL : 'public-read'
			};
			this.bucket.putObject(params, function(err, data) {
				if (err) {
					console.log = 'ERROR: ' + err;
				} else {
					console.log = 'Upload completed.';
				}
				//window.close();
				loadHomePage();
			});
		}
		else
		{
			loadHomePage();
		}
		
	};

	this.listImg = function(dispPane) {
		$(dispPane).empty();
		var prefix = 'User:' + this.fbUserId;
		var that = this;
		this.parent.bucket.listObjects({

			Prefix : prefix

		}, function(err, data) {

			if (err) {

				console.log = 'ERROR: ' + err;

			} else {

				data.Contents.forEach(function(obj) {
					var params = {
						Key : obj.Key
					};
					that.parent.bucket.getObject(params, function(err, meta) {
						if (err) {
							console.log = 'ERROR: ' + err;
						} else if (meta.ContentType.match("image")) {
							var link = document
									.querySelector('link[rel="import"]');
							var article = link.import
									.querySelector('#imgThumb');
							var imDisplay = article.cloneNode(true);
							imDisplay.id = obj.Key;
							imDisplay.src = that.parent.bucket.getSignedUrl('getObject',
									params);
							imDisplay.onclick = that.selfHandler;
							dispPane.appendChild(imDisplay);
						}
					});
				});
			}
		});
		RepertoireSubstance.paneList.push(dispPane);
	}
	this.listAnims = function(dispPane) {
		$(dispPane).empty();
		var prefix = 'User:' + this.fbUserId;
		var that = this;
		this.parent.bucket.listObjects({

			Prefix : prefix

		}, function(err, data) {

			if (err) {

				console.log = 'ERROR: ' + err;

			} else {

				data.Contents.forEach(function(obj) {
					var params = {
						Key : obj.Key
					};
					that.parent.bucket.getObject(params, function(err, meta) {
						if (err) {
							console.log = 'ERROR: ' + err;
						} else if (meta.ContentType.match("video")) {
							var link = document
									.querySelector('link[rel="import"]');
							var article = link.import
									.querySelector('#videoThumb');
							var vidDisplay = article.cloneNode(true);
							$(vidDisplay).attr("controls", true);
							vidDisplay.id = obj.Key;
							vidDisplay.src = that.parent.bucket.getSignedUrl('getObject',
									params);
							vidDisplay.onclick = that.selfHandler;
							dispPane.appendChild(vidDisplay);
						}
					});
				});
			}
		});
		RepertoireSubstance.paneList.push(dispPane);
	}
	this.activatePane = function(targetPane, activator) {
		clickHandler = activator;
		targetPane.style.display = "";
	}	
	this.selfHandler = function(event) {
		RepertoireSubstance.paneList[0].style.display = "none";
		RepertoireSubstance.paneList[1].style.display = "none";
		clickHandler(event);
	}
	// Private members
	function researchSubstance() {
		var listSub = this.xDoc.evaluate("//DictionnaireSubstance/*",
				this.xDoc, null, XPathResult.ANY_TYPE, null);
		var node;
		while (node = listSub.iterateNext()) {
			var substanceRes = fleshNode.call(this, node);
			this.parent.listeSubstances.push(substanceRes);
		}
	}
	function fleshNode(node) {
		var id = node.getAttribute("Id");
		var sName = node.getAttribute("Name");
		var xGraph = node.getElementsByTagName("Graphique")[0];
		var subKey = xGraph.getElementsByTagName("Adresse")[0]
				.getAttribute("Url");
		var substanceType = node.nodeName;
		var substanceRes;
		switch (substanceType) {
		case "Substance":
			substanceRes = new SubstancePotentielle(subKey, id, sName);
			break;
		case "SubstanceAction":
			// Obtenir la Substance Principale
			var princId = node.getElementsByTagName("SubstancePrincipale")[0];
			princId = princId.getAttribute("IdSubstance");
			substanceRes = new SubstanceAction(subKey, id, sName, princId);
			break;
		case "SubstanceRelation":
			var bIsAnim = xGraph.getAttribute("Type") == "Animation";
			// Obtenir les 2 Substances liées
			var lien = node.getElementsByTagName("LienSubstanciel")[0];
			var relId = lien.getElementsByTagName("SubstanceReliee")[0];
			relId = relId.getAttribute("IdSubstance");
			var relId2 = lien.getElementsByTagName("SubstanceReliee2")[0];
			relId2 = relId2.getAttribute("IdSubstance");
			substanceRes = new SubstanceRelation(subKey, id, sName, bIsAnim, relId,
					relId2);
			break;
		}
		return substanceRes;
	}
	var file = fileName;
	var xKey;
}
RepertoireSubstance.inheritsFrom(dataBank);
RepertoireSubstance.prototype.activatePane = function(targetPane, activator) {
	clickHandler = activator;
	targetPane.style.display = "";
}	
RepertoireSubstance.prototype.selfHandler = function(event) {
	RepertoireSubstance.paneList[0].style.display = "none";
	RepertoireSubstance.paneList[1].style.display = "none";
	clickHandler(event);
}
RepertoireSubstance.prototype.clickHandler;
RepertoireSubstance.paneList = [];
RepertoireSubstance.prototype.retrieveSubstance = function(subId) {
	for (var i = 0; i < this.parent.listeSubstances.length; i++) {
		var sub = this.parent.listeSubstances[i];
		if (sub.Id == subId) {
			return sub;
		}
	}
	return null;
}
