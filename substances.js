/**
 * @author Pascal
 */
const
NOM_DEFAUT = "Nom de la Substance";

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
function Substance(_Node) {
/*
 * var graphic = _Node.visuals; var name = _Node.title; var url =
 * _Node.visuals[0]; var meta; var subId = _Node.subId;
 */
	if(!_Node)
	{
		_Node = {};
		_Node.visuals = [];
		_Node.title = NOM_DEFAUT;
	}
	else // Public
		this.updateVisual();		
	Object.defineProperty(this, "Id", {
		value : _Node.subId
	});
	Object.defineProperty(this, "Name", {
		get : function() {
			if (!_Node.title || _Node.title == NOM_DEFAUT) {
				_Node.title = this.getName();
			}
			return _Node.title;
		},
	set : function(value) {
		_Node.title = value;
	}
	});

	/**
	 * @property Graphic Represents either an image or an animation file
	 */
	Object.defineProperty(this, "Graphic", {
		value : _Node.visuals
	});
	Object.defineProperty(this, "Visual", {
		get : function() {
			return this.getVisual();			
		} 
	});

	Object.defineProperty(this, "Url", {
		value : _Node.visuals[0],
		writable : true
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
Substance.MetaDataName = "";
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
function SubstancePotentielle(_Node) {
	// Private
	Substance.call(this, _Node);
	var link = document.querySelector('link[rel="import"]');
	var article = link.import.querySelector('section.potCon');
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
	this.RecordSubstance = function(linkSubstance, linkFunction) {
	}
}
SubstancePotentielle.inheritsFrom(Substance);
SubstancePotentielle.prototype.getName = function() {
	if (this.elemVisual) {
		var txt = $(this.elemVisual).find(".sName")[0];
		if (txt.value) {
			return txt.value;
		} else {
			return NOM_DEFAUT;
		}
	} else {
		return NOM_DEFAUT;
	}
}
SubstancePotentielle.prototype.resetName = function() {
	if (this.elemVisual) {
		var txt = $(this.elemVisual).find(".sName")[0];
		txt.value = NOM_DEFAUT;
	}
	this.Name = NOM_DEFAUT;
}

SubstancePotentielle.prototype.getVisual = function() {
	if (this.elemVisual) {
		var img = $(this.elemVisual).find(".imgSub")[0];
		img.src = this.Url;
		var txt = $(this.elemVisual).find(".sName")[0];
		if(this.Name != NOM_DEFAUT){
			txt.value = this.Name;
			$(txt).prop("readonly", true);
		}
	}
	return this.elemVisual;
}
SubstancePotentielle.prototype.updateVisual = function() {
	if (this.elemVisual) {
		var img = $(this.elemVisual).find(".imgSub")[0];
		img.src = this.Url;
	}
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
SubstancePotentielle.prototype.moveSubstance = function(screen1,screen2,event1,event2)
{
	var newScreen = screen1;
	var that = this;
	screen2.childNodes.forEach(function(visualz) {
		if(visualz == that.Visual) {
			visualz.removeEventListener('click', event2);
			visualz.addEventListener('click', event1);
			visualz.remove();
			newScreen.appendChild(visualz);
		}
	});
}
SubstancePotentielle.prototype.Integrate = function(substances) {
	//Do Nothing
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
function SubstanceAction(_Node) {
	// Private
	Substance.call(this, _Node);
	if(!_Node)
	{
		_Node = {};
		_Node.linkedSubstances = [];	
		_Node.functionId = "Default";
	}
	// Obtenir la Substance Principale
	var link = document.querySelector('link[rel="import"]');
	var article = link.import.querySelector('section.motSub');
	// Public
	/**
	 * This is the visual representation of the function. It can contains
	 * multiple display and interactive elements
	 */
	this.type = "SubstanceAction";
	this.elemVisual = article.cloneNode(true);
	/**
	 * This function is in charge of Recording the Substance. It is a
	 * polymorphic function and will change to record either a Potentielle,
	 * Action or Relation
	 */
	this.RecordSubstance = function(linkSubstance, linkFunction) {
		var that = this;
			linkFunction(this.Action, function() {
				linkSubstance(that.Principale, function(){});
			});
	}
	
	Object.defineProperty(this, "Principale", {
		get : function() {
			return _Node.firstSubstance;
		},
		set : function(obj) {
			if ($.isArray(obj) ) {
				obj.forEach(function(substance) {
					if(substance.Id == _Node.firstSubstance)
						_Node.firstSubstance = substance;
				});
			}
			else {
				if(typeof obj == 'string' || obj instanceof String || obj instanceof Substance) {
					_Node.firstSubstance = obj;
				}
				else
					throw new Error("Non compatible element for SubstanceAction.Principale");
			}
		}
	});

	Object.defineProperty(this, "Action", {
		value : _Node.functionId,
		writable : true
	});
}
SubstanceAction.inheritsFrom(Substance);
SubstanceAction.prototype.getName = function() {
	if (this.elemVisual) {
		var txt = $(this.elemVisual).find(".dynaId")[0];
		return txt.value;
	} else {
		return "";
	}
}
SubstanceAction.prototype.getVisual = function() {
	if (this.elemVisual) {
		var vid = $(this.elemVisual).find(".vidMotrice")[0];
		vid.src = this.Url;
		$(vid).attr("controls", true);		
		var txt = $(this.elemVisual).find(".dynaId")[0];
		if(this.Name != NOM_DEFAUT){
			txt.value = this.Name;
			$(txt).prop("readonly", true);
		}
	}
	return this.elemVisual;
}
SubstanceAction.prototype.deployVisual = function(btnAdd) {
		var princHolder = $(this.elemVisual).find(".listSubstance")[0];
		if (!this.Principal) {
			var that = this;
			this.bouton = btnAdd;
			$(princHolder).empty();
			// Creating the Sub Principale interactive elements
			for (var i = 0; i < this.parent.listeSubstances.length; i++) {
				this.parent.listeSubstances[i].OnClick = function(event) {
					var selectId = event.currentTarget.id;
					var selectedSubstance = that.parent.listeSubstances[selectId];
					selectedSubstance.Visual.removeEventListener('click',
							selectedSubstance.onclick);
					$(princHolder).empty();
					princHolder.appendChild(selectedSubstance.Visual
							.cloneNode(true));
					that.Principale = selectedSubstance.Id;
					that.parent.listeSubstances.length = 0;
					that.bouton.style.display = "block";
				}
				princHolder.appendChild(this.parent.listeSubstances[i].Visual);
			}
		} 
	princHolder.style.display = "block";
	
	return this.elemVisual;
}
SubstanceAction.prototype.updateVisual = function() {
	if (this.elemVisual) {
		var vid = $(this.elemVisual).find(".vidMotrice")[0];
		vid.src = this.Url;
	}
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
SubstanceAction.prototype.moveSubstance = function(screen1,screen2,event1,event2)
{
	var newScreen = screen1;
	var that = this;
	screen2.childNodes.forEach(function(visualz) {
		if(visualz == that.Visual) {
			visualz.removeEventListener('click', event2);
			visualz.addEventListener('click', event1);
			visualz.remove();
			newScreen.appendChild(visualz);
		}
	});
	this.Principale.moveSubstance(screen1, screen2,event1,event2);
}
SubstanceAction.prototype.Integrate = function(substances) {
	this.Principale = substances;
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
function SubstanceRelation(_Node) {

	Substance.call(this, _Node);

	// Private
	var link = document.querySelector('link[rel="import"]');
	var article = link.import.querySelector('section.relationSub');
	if (!_Node) {
		_Node = {};
		_Node.linkedSubstances = [];	
		_Node.functionId = "Default";
	}
	
	this.type = "SubstanceRelation";
	this.elemVisual = article.cloneNode(true);
	/**
	 * This function is in charge of Recording the Substance. It is a
	 * polymorphic function and will change to record either a Potentielle,
	 * Action or Relation
	 */
	this.RecordSubstance = function(linkSubstance, linkFunction) {
		var that = this;
		linkFunction(this.Reliure, function(){
			linkSubstance(that.Substance1.Id, function(){
				linkSubstance(that.Substance2.Id,function(){});
			});
		});
	}

	Object.defineProperty(this, "Substance1", {
		get : function() {
			return _Node.firstSubstance;
		},
		set : function(obj) {
			if ($.isArray(obj) ) {
				obj.forEach(function(substance) {
					if(substance.Id == _Node.firstSubstance)
						_Node.firstSubstance = substance;
				});
			}
			else {
				if(typeof obj == 'string' || obj instanceof String || obj instanceof Substance) {
					_Node.firstSubstance = obj;
				} 
				else
					throw new Error("Non compatible element for SubstanceRelation.Substance1");
			}
		}
	});

	Object.defineProperty(this, "Reliure", {
		value : _Node.functionId,
		writable : true
	});

	Object.defineProperty(this, "Substance2", {
		get : function() {
			return _Node.secondSubstance;
		},
		set : function(obj) {
			if ($.isArray(obj) ) {
				obj.forEach(function(substance) {
					if(substance.Id == _Node.secondSubstance)
						_Node.secondSubstance = substance;
				});
			}
			else {
				if(typeof obj == 'string' || obj instanceof String || obj instanceof Substance) {
					_Node.secondSubstance = obj;
				}
				else
					throw new Error("Non compatible element for SubstanceRelation.Substance2");
			}
		}
	});
}
SubstanceRelation.inheritsFrom(Substance);
SubstanceRelation.prototype.getName = function() {
	if (this.elemVisual) {
		var txt = $(this.elemVisual).find(".relationName")[0];
		return txt.value;
	} else {
		return "";
	}
}
SubstanceRelation.prototype.moveSubstance = function(screen1,screen2,event1,event2)
{
	var newScreen = screen1;
	var that = this;
	screen2.childNodes.forEach(function(visualz) {
		if(visualz == that.Visual) {
			visualz.removeEventListener('click', event2);
			visualz.addEventListener('click', event1);
			visualz.remove();
			newScreen.appendChild(visualz);
		}
	});
	this.Substance1.moveSubstance(screen1, screen2,event1,event2);
	this.Substance2.moveSubstance(screen1, screen2,event1,event2);
}
SubstanceRelation.prototype.getVisual = function() {
	if (this.elemVisual) {
			var img = $(this.elemVisual).find(".imgRel")[0];
			img.dataSource = this.Url;
			var imgVideo = $(this.elemVisual).find(".vidRel")[0];
			img.videoSource = imgVideo;
			img.onerror = function(eve) {
				imgErr = eve.currentTarget;
				var vid = imgErr.videoSource;
				vid.src = imgErr.dataSource;
				$(vid).attr("controls", true);								
				vid.style.display = "";				
				imgErr.style.display = "none";
			}
			img.src = this.Url;
			img.style.display = "";
		var txt = $(this.elemVisual).find(".relationName")[0];
		if(this.Name != NOM_DEFAUT){
			txt.value = this.Name;
			$(txt).prop("readonly", true);
		}
	}
	return this.elemVisual;
}
SubstanceRelation.prototype.deployVisual = function(btnAdd){	
		var firstHolder = $(this.elemVisual).find(".liee1")[0];
		if (!this.Substance1) {
			var that = this;
			this.bouton = btnAdd;
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
					that.Substance1 = selectedSubstance;
					that.deployVisual2(that.bouton);
				}
				firstHolder.appendChild(this.listeSubstances[i].Visual);
			}
		}
	var relShow = $(this.elemVisual).find(".relHolder")[0];
	relShow.style.display = "block";
	return this.elemVisual;
}
SubstanceRelation.prototype.deployVisual2 = function(btnAdd) {
	// If the first element is a Relation then the secondHolder we seek is
	// actually #1
	var secondHolder = $(this.elemVisual).find(".liee2")[1];
	if(!secondHolder)
	{
		secondHolder = $(this.elemVisual).find(".liee2")[0];
	}
	if (!this.Substance2) {
		var that = this;
		this.bouton = btnAdd;
		$(secondHolder).empty();
		// Creating the Sub Principale interactive elements
		for (var i = 0; i < this.listeSubstances.length; i++) {
			if (this.listeSubstances[i].Id != this.Substance1.Id) { 
			this.listeSubstances[i].OnClick = function(event) {
				var selectId = event.currentTarget.id;
				var selectedSubstance = that.parent.listeSubstances[selectId];
				selectedSubstance.Visual.removeEventListener('click',
						selectedSubstance.onclick);
				$(secondHolder).empty();
				secondHolder.appendChild(selectedSubstance.Visual
						.cloneNode(true));
				that.Substance2 = selectedSubstance;
				that.bouton.style.display = "block";
			}
			secondHolder.appendChild(this.listeSubstances[i].Visual);
		}
		}
	} 	
}
SubstanceRelation.prototype.updateVisual = function() {
	if (this.elemVisual) {
		if (this.isAnim) {
			var vid = $(this.elemVisual).find(".vidRel")[0];
			vid.src = this.Url;
			vid.style.display = "";
		} else {
			var img = $(this.elemVisual).find(".imgRel")[0];
			img.src = this.Url;
			img.style.display = "";
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
SubstanceRelation.prototype.Integrate = function(substances) {
	this.Substance1 = substances;
	this.Substance2 = substances;
}
/**
 * This function represents a SubstanceRelation concept class
 * 
 * @constructor
 * @inherits Substance
 * @param {_Node}
 *            Contains all the information needed to build the visual and substance
 *            elements
 */
function Sequence(_Node) {
	Substance.call(this, _Node);	
	
	var link = document.querySelector('link[rel="import"]');
	var article = link.import.querySelector('#seqTab');
	this.elemVisual = article.cloneNode(true);
	if (!_Node) {
		_Node = {};
		_Node.linkedSubstances = [];	
	}	
	this.type = "Sequence";
	this.SelectedPane = $(this.elemVisual).find("#lstSeqSub")[0];
	this.SelectionPane = $(this.elemVisual).find("#lstSelection")[0];	
	$(this.SelectedPane).empty();
	$(this.SelectionPane).empty();
	var iterator=0;
	Object.defineProperty(this, "Substances", {
		get : function*() {
			//_Node.linkedSubstances.forEach(function(subVal) {
			for (var i=0; i < _Node.linkedSubstances.length;i++)
				yield _Node.linkedSubstances[i];
			//});
		},
		set : function(newVal) {
			_Node.linkedSubstances.push(newVal);
		}
	});	
	Object.defineProperty(this, "AddNewSelection", {
		set : function (substance) {
			substance.Visual.parentSubstance = substance;
			substance.sequence = this;
			this.SelectionPane.append(substance.Visual);
			substance.Visual.addEventListener('click', this.selectSubstance);
		}
	});	
	this.RecordSubstance = function(linkSequence) {
		var that = this;
		this.SelectedPane.childNodes.forEach(function(visualz){
			var substance = visualz.parentSubstance;
			that.Substances = substance;
		});
		this.linkSeq2Sub = linkSequence;
		this.sub = this.Substances;
		this.linkNewSub();		
	}
	this.linkNewSub = function(){
		var valSub = this.sub.next();
		if(!valSub.done) {
			this.linkSeq2Sub(valSub.value.Id, this.linkNewSub);
		}
	}
}
Sequence.inheritsFrom(Substance);

Sequence.prototype.getName = function() {
	if (this.elemVisual) {
		var txt = $(this.elemVisual).find(".sequenceId")[0];
		return txt.value;
	} else {
		return "";
	}
}

Sequence.prototype.selectSubstance = function(event) {
	var selectVisual = event.currentTarget;
	var selectSubstance = selectVisual.parentSubstance;
	var seq = selectSubstance.sequence;
	selectSubstance.moveSubstance(seq.SelectedPane,seq.SelectionPane,seq.unselectSubstance,seq.selectSubstance);
	if(seq.SelectedPane.childNodes.length > 0)
		seq.bouton.style.display = "block";
}
Sequence.prototype.unselectSubstance = function(event) {
	var selectVisual = event.currentTarget;
	var selectSubstance = selectVisual.parentSubstance;
	var seq = selectSubstance.sequence;
	selectSubstance.moveSubstance(seq.SelectionPane,seq.SelectedPane, seq.selectSubstance, seq.unselectSubstance);
	if(seq.SelectedPane.childNodes.length < 1)
		seq.bouton.style.display = "";		
}
Sequence.prototype.getVisual = function() {
	if (this.elemVisual) {
		var vid = $(this.elemVisual).find("#vidSeq")[0];
		vid.src = this.Url;
		$(vid).attr("controls", true);				
		var txt = $(this.elemVisual).find(".sequenceId")[0];
		this.elemVisual.owner = this;
		if(this.Name != NOM_DEFAUT){
			txt.value = this.Name;
			$(txt).prop("readonly", true);
		}		
	}
	return this.elemVisual;
}
Sequence.prototype.deployVisual = function(btnAdd) {
	var vid = $(this.elemVisual).find("#vidSeq")[0];
	vid.src = this.Url;
	$(vid).attr("controls", true);		
	this.bouton = btnAdd;
	this.SelectedPane.style.display = "block";
	this.SelectionPane.style.display = "block";	
	return this.elemVisual;
}
Sequence.prototype.updateVisual = function() {
	if (this.elemVisual) {
		var vid = $(this.elemVisual).find("#vidSeq")[0];
		vid.src = this.Url;
	}
}
Sequence.prototype.setHandler = function(eventHandler) {
	if (this.elemVisual) {
		if (this.elemVisual.onclick) {
			this.elemVisual.removeEventListener('click',
					this.elemVisual.onclick);
		}
		this.elemVisual.owner = this;
		this.elemVisual.onclick = eventHandler;
	}
}
/**
 * Objet graphique representant un bouton image avec son titre textuel
 * 
 * @param image
 *            {String} Path to the image url
 * @param textTitre
 *            {String} Title to be used atop of the image button
 * @param onClickHandler
 *            {function} The delegate for the onClick event of the image button
 */

function BoutonActivateur(image, textTitre, action, idnum) {
	var link = document.querySelector('link[rel="import"]');
	var article = link.import.querySelector('.imgInteractif');
	var bouton = article.cloneNode(true);
	var boutonID = "bouton-sub" + idnum;
	$(bouton).attr('id', boutonID);
	var btn = $(bouton).find('input.activateur');
	btn.click(function() {
		$('.imgInteractif').fadeOut('slow').promise().done(function() {
			action(event);
		})
	});
	$(bouton).find('.txtTitre').html(textTitre);
	Object.defineProperty(this, "Div", {
		get : function() {
			return bouton;
		}
	});
}

BoutonActivateur.affiche = function() {
	$('.imgInteractif').fadeIn('slow');
}

