const OBJECT_LINK = "https://s3.amazonaws.com/unimasoft.data.test/";

/**
This prototype function allows to change the behavior of Arrays in order to allow object deletion
 * @param objet2Delete {Object}
 * This is the object that we want to delete from the Array
 */
Array.prototype.deleteObject=function(objet2Delete) {
	var iIndex = this.indexOf(objet2Delete);
	if(iIndex > -1) {
		this.splice(iIndex, 1);
	}
};
/**
 * findSubstance : This function search for a given substance within the list of substance
 * 					already known
 * @param subId : A positive <code>number</code> that represents a known Substance
 * @returns : The Substance with the same Id...
 */
Substance.prototype.findSubstance = function(subId) {	
	for (var i = 0; i < ApplicationRepertoire.metaSubstances.length; i++) {
		var sub = ApplicationRepertoire.metaSubstances[i];
		if (sub.Id == subId) {
			return sub;
		}
	}
	for (var i = 0; i < this.parent.listeSubstances.length; i++) {
		var sub = this.parent.listeSubstances[i];
		if (sub.Id == subId) {
			return sub;
		}
	}
	return null;	
}
/**
 * This polymorphic function is in charge of handling the selection of 'activating' a Substance
 * for meta data handling. Assuming that this substance isn't already in the list of substance that
 * will be part of the application launch and therefore needs it's meta data filled up.  Al children
 * of this substance will also need to verify their meta data status...
 * 
 * @param dispPane {Semantic Element}
 * The display pane that will display all substance that need to have their meta data
 * filled up
 * 
 * @param metaHandler {click Event handler}
 * The event handler that will launch the meta data window for the clicked substance...
 */
SubstancePotentielle.prototype.declareSubstance = function(dispPane, metaHandler){
		if (this.elemVisual) {
			var img = $(this.elemVisual).find(".imgSub")[0];
			img = img.cloneNode(true);
			img.substance = this;
			img.onclick = metaHandler;
			dispPane.appendChild(img);
		}
	}
/**
 * foldSubstance : This function will remove all the internal visual components of a Substance...
 * 					This is a polymorphic function...
 */
SubstancePotentielle.prototype.foldSubstance = function() {
	//Nothing to do
}
/**
 * deploySubstance : The reverse of foldSubstance...
 * 					This is a polymorphic function...
 */
SubstancePotentielle.prototype.deploySubstance = function() {
	//Nothing to do
}
SubstanceAction.prototype.declareSubstance = function(dispPane, metaHandler){
	if(ApplicationRepertoire.ActiveSubstances.indexOf(this) == -1) {
		if (this.elemVisual) {
			var vid = $(this.elemVisual).find(".vidMotrice")[0];
			vid = vid.cloneNode(true);
			vid.substance = this;
			vid.onclick = metaHandler;
			if (typeof this.subPrinc == "string") {
				this.subPrinc = this.findSubstance(this.subPrinc);
			}
			if (this.subPrinc){
				this.subPrinc.declareSubstance(dispPane, metaHandler);
			}
			ApplicationRepertoire.NouSub(this);
			this.foldSubstance();
			dispPane.appendChild(vid);
		}
	}
}
SubstanceAction.prototype.foldSubstance = function() {
//Eliminate that board...
	var princHolder = $(this.elemVisual).find(".listSubstance")[0];
	princHolder.style.display = "none";
}
SubstanceAction.prototype.deploySubstance = function() {
	//Eliminate that board...
		var princHolder = $(this.elemVisual).find(".listSubstance")[0];
		princHolder.style.display = "";
	}
SubstanceRelation.prototype.declareSubstance = function(dispPane, metaHandler){
	if(ApplicationRepertoire.ActiveSubstances.indexOf(this) == -1) {
		if (this.elemVisual) {
			if (this.isAnim) {
				var vid = $(this.elemVisual).find(".vidRel")[0];
			}
			else {
				var vid = $(this.elemVisual).find(".imgRel")[0];
			}
			vid = vid.cloneNode(true);
			vid.substance = this;
			vid.onclick = metaHandler;
			if (typeof this.subRelie1 == "string") {
				this.subRelie1 = this.findSubstance(this.subRelie1);
			}
			
			if (this.subRelie1){
				this.subRelie1.declareSubstance(dispPane, metaHandler);
			}
			if (typeof this.subRelie2 == "string") {
				this.subRelie2 = this.findSubstance(this.subRelie2);
			}
			if (this.subRelie2){
				this.subRelie2.declareSubstance(dispPane, metaHandler);
			}
			ApplicationRepertoire.NouSub(this);
			this.foldSubstance();
			dispPane.appendChild(vid);
		}
	}
}
SubstanceRelation.prototype.foldSubstance = function() {
	var holder = $(this.elemVisual).find(".relHolder")[0];
	holder.style.display = "none";
}
SubstanceRelation.prototype.deploySubstance = function() {
	var firstHolder = $(this.elemVisual).find(".liee1")[0];
	var secondHolder = $(this.elemVisual).find(".liee2")[0];
	firstHolder.style.display = "";
	secondHolder.style.display = "";
}

		

/**
 * The Sequence is like a conductor for the application.  The Sequence determines which Substance
 * are going to be included in the application.  The Sequence is also in charge of "dressing up"
 * all those substance with the particular of the application. (Namely the "Cultural" aspect) 
 * @param node : The node is the conceptual incarnation of the substance. As such it contains all the
 * 				necessary to produce the Substance... 
 * @param substanceLiees : This is a vector containing a list of substances that were selected
 * 							as part of this sequence (see Sequence definition for more)
 * @param bImg : Flag to indicate wether this sequence is real or imaginary
 */
/**
 * @param node
 * @param substanceLiees
 * @param bImg
 */
function Sequence(node, substanceLiees, bImg) {
	// Private
	if (!substanceLiees) {
		substanceLiees = [];
	}
	Substance.call(this, node);
	var selectedHolder;
	var selectionHolder;
	var seqSubstances = substanceLiees;
	var iterator = 0;
	var seqNode = node;
	var xMeta;
	var bImage = bImg;
	if(node){
		xMeta= node.getElementsByTagName(Substance.MetaDataName)[0];		
	}
	// Public
	this.recordSequence = function(){
		if(ApplicationRepertoire.ListeSequences.indexOf(this) == -1) {
			var xListeSeq = this.xEx.documentElement;
			var xSeq
			if (bImg) {
				xSeq = this.xEx.createElement("Imaginaire");				
			}
			else {
				xSeq = this.xEx.createElement("Sequence");				
			}
			var xSubLiees = this.xEx.createElement("SubstancesLiees");
			var anim = this.xEx.createElement("Graphique");
			var address = this.xEx.createElement("Adresse");
			address.setAttribute("Url", this.Graphic);
			anim.setAttribute("Type", "Animation");
			anim.appendChild(address);
			xSeq.setAttribute("Id", this.Id);
			xSeq.setAttribute("Name", this.Name);
			xSeq.appendChild(anim);
			var iter;
			while (iter = this.Substances) {
				var xSubLiees = this.xDoc.createElement("SubstancesLiees");
				xSubLiees.setAttribute("TypeSubstance", iter.type);
				xSubLiees.setAttribute("IdSubstance", iter.Id);
				xSeq.appendChild(xSubLiees);
			}
			xSeq.appendChild(xMeta);	
			xListeSeq.appendChild(xSeq);
			ApplicationRepertoire.ListeSequences.push(this);
		}
	}
	this.selectSubstance = function(event) {
		var selectVisual = event.currentTarget;
		var sequence = this.sequenceOwner;
		var selectedSubstance = selectVisual.parentSubstance;
		selectVisual.removeEventListener('click', sequence.selectSubstance);
		sequence.SelectedPane.appendChild(selectVisual);
		sequence.Substances = selectedSubstance;
		selectedSubstance.deploySubstance();
		selectedSubstance.declareSubstance(Sequence.MetaPane, Sequence.MetaHandler);
		selectVisual.addEventListener('click', sequence.unselectSubstance);
	}
	this.unselectSubstance = function(event){
		var selectVisual = event.currentTarget;
		var sequence = this.sequenceOwner;
		var selectedSubstance = selectVisual.parentSubstance;
		selectVisual.removeEventListener('click', sequence.unselectSubstance);
		sequence.SelectionPane.appendChild(selectVisual);
		sequence.removeSubstance(selectedSubstance);
		selectVisual.addEventListener('click', sequence.selectSubstance);
	}
	this.removeSubstance = function(substance) {
		seqSubstances.deleteObject(substance);
	}
	Object.defineProperty(this, "SeqVideo", {
		get : function() {
			if (!this.elemVisual) {
				var link = document.querySelector('link[rel="import"]');
				var article = link.import.querySelector('#seqTab');
				this.elemVisual = article.cloneNode(true);
			}
			var vid = $(this.elemVisual).find("#vidSeq")[0];				
			vid.src = OBJECT_LINK+this.Graphic;
			return vid;			
		}
	});
	Object.defineProperty(this, "Substances", {
		get : function() {
			if (iterator >= seqSubstances.length) {
				iterator = 0;
				return null;
			}
			return seqSubstances[iterator++];
		},
		set : function(newVal) {
			seqSubstances.push(newVal);
		}
	});
	Object.defineProperty(this, "SelectedPane", {
		set : function(newVal) {
			selectedHolder = newVal;
		},
		get : function(){
			return selectedHolder;
		}
	});
	Object.defineProperty(this, "SelectionPane", {
		set : function(newVal) {
			selectionHolder = newVal;
		},
		get : function(){
			return selectionHolder;
		}
	});
	Object.defineProperty(this, "Meta", {
		set : function(newVal){
			xMeta = newVal;
		}
	});
	Object.defineProperty(this, "Node", {
		get : function(){
			return seqNode;
		}
	});
}
Sequence.inheritsFrom(Substance);
Sequence.MetaPane;
Sequence.MetaHandler;
Sequence.prototype.getName = function() {
	if (this.elemVisual) {
		var txt = $(this.elemVisual).find("#seqName")[0];
		return txt.value;
	} else {
		return "";
	}
}
Sequence.prototype.getVisual = function() {
	if (!this.elemVisual) {
		var link = document.querySelector('link[rel="import"]');
		var article = link.import.querySelector('#seqTab');
		this.elemVisual = article.cloneNode(true);
		var vid = $(this.elemVisual).find("#vidSeq")[0];
		vid.src = this.Url;
		vid.seqOwner = this;
		vid.visuEl = this.elemVisual;
		$(vid).attr("controls", true);		
		/*
		vid.onclick = function(eve) {
			var seqVid = eve.currentTarget;
			var conDel = window.confirm("Enlever la Sequence ?");
			if (conDel) {
				seqVid.visuEl.parentElement.removeChild(seqVid.visuEl);
				ApplicationRepertoire.ListeSequences.deleteObject(seqVid.seqOwner);
				seqVid.seqOwner.Node.parentNode.removeChild(seqVid.seqOwner.Node);
			}
		}
		*/
		var txt = $(this.elemVisual).find("#seqName")[0];
		txt.value = this.Name;
		this.SelectedPane = $(this.elemVisual).find("#lstSeqSub")[0];
		this.SelectionPane = $(this.elemVisual).find("#lstSelection")[0];
		var selectedSubstance = this.Substances;
		if (!this.SelectedPane.childElementCount && selectedSubstance) {
			// Filling up the substances that have been selected so far
			while (selectedSubstance) {
				selectedSubstance.declareSubstance(this.SelectedPane, Sequence.MetaHandler);
				var visualSel = selectedSubstance.Visual.cloneNode(true);
				this.SelectedPane.appendChild(visualSel);
				visualSel.parentSubstance = selectedSubstance;
				visualSel.sequenceOwner = this;
				visualSel.addEventListener('click', this.unselectSubstance);
				selectedSubstance = this.Substances;
			}
		}
		if (!this.SelectionPane.childElementCount) {
			// Filling up the substance list using the dataBank
			for (var j = 0; j < this.listeSubstances.length; j++) {
				var subDisp = this.listeSubstances[j];
					if (subDisp.elemVisual.onclick) {
						subDisp.elemVisual.removeEventListener('click',subDisp.elemVisual.onclick);
					}
					subDisp.foldSubstance();
					var visuelEl = subDisp.Visual.cloneNode(true);
					visuelEl.parentSubstance = subDisp;
					visuelEl.sequenceOwner = this;
					visuelEl.addEventListener('click', this.selectSubstance);					
					this.SelectionPane.appendChild(visuelEl);
			}
		}
	}
	//Call meta Data on this
	if(!this.Meta) {
		
	}
	return this.elemVisual;
}
Sequence.prototype.updateVisual = function() {
	if (!this.elemVisual) {
		var link = document.querySelector('link[rel="import"]');
		var article = link.import.querySelector('#seqTab');
		this.elemVisual = article.cloneNode(true);
	}
		var vid = $(this.elemVisual).find("#vidSeq")[0];
		vid.src = this.Url;
		vid.ownerSeq = this;
		vid.onclick = function(eve) {
			var dispPane = ApplicationRepertoire.Pane;
			$(dispPane).empty();			
			seqActive = eve.currentTarget.ownerSeq;
			seqActive.elemVisual = null;
			dispPane.appendChild(seqActive.Visual);			
		};
}
Sequence.prototype.foldSequence = function() {
	this.SelectedPane.style.display = "none";
	this.SelectionPane.style.display = "none";
}
Sequence.prototype.openSequence = function() {
	this.SelectedPane.style.display = "";
	this.SelectionPane.style.display = "";
}
/**
 * ApplicationRepertoire : This object inherits from Repertoire Substance and fills the same role
 * 							except in this instance it manages the Sequence instead of the substance...
 * @param fileName : Name of the file containing the xml data that will create Sequences and Substances
 * @param metaName : The display pane for the metaData, which is the Application data...
 * @param dispPane : The display pane for the multimedia content...
 */
/**
 * @param fileName
 * @param metaName
 * @param dispPane
 */
function ApplicationRepertoire(fileName, metaName, dispPane) {
	// Private members
	RepertoireSubstance.call(this, fileName);
	var sMeta = metaName;
	var iter = 0;
	var seqPane = dispPane;
	function fleshSeq(node) {
		var subLiees = node.getElementsByTagName("SubstancesLiees");
		var seqSubstances = [];
		for (var i = 0; i < subLiees.length; i++) {
			var sub = this.retrieveSeqChild(subLiees[i].getAttribute("IdSubstance"));
			seqSubstances.push(sub);
		}
		var newSequence = new Sequence(node, seqSubstances);
		return newSequence;
	}
	// Public members
	this.updatePane = function(dispPane, newSeq) {
		if (newSeq) {
			this.Sequences = newSeq;
		}
		if (ApplicationRepertoire.ListeSequences.length != dispPane.childElementCount) {
			$(dispPane).empty();
			var seqElem = this.Sequences;
			while (seqElem) {
				dispPane.appendChild(seqElem.SeqVideo);
				//seqElem.foldSequence();
				seqElem = this.Sequences;
			}
		}
		ApplicationRepertoire.Pane = dispPane;
	};
	Object.defineProperty(this, "Sequences", {
		get : function() {
			if (iter >= ApplicationRepertoire.ListeSequences.length) {
				iter = 0;
				return null;
			}
			return ApplicationRepertoire.ListeSequences[iter++];
		},
		set : function(newVal) {
			ApplicationRepertoire.ListeSequences.push(newVal);
		}
	});	
	this.researchSubstance = function() {
		this.parent.xEx = this.xDoc.cloneNode(true);
		var listSub = this.parent.xDoc.evaluate("//DictionnaireSubstance/*", this.xDoc,null, XPathResult.ANY_TYPE, null);
		var node;
		while (node = listSub.iterateNext()) {
			var substanceRes = this.fleshNode.call(this, node);
			this.parent.listeSubstances.push(substanceRes);
		}
		var listSub2 = this.parent.xEx.evaluate("//DictionnaireSubstance/*", this.parent.xEx,null, XPathResult.ANY_TYPE, null);	
		var node2;
		while (node2 = listSub2.iterateNext()) {
			var substanceRes2 = this.parent.fleshNode(node2);
			ApplicationRepertoire.metaSubstances.push(substanceRes2);
		}		
		var listSeq = this.parent.xEx.evaluate("//Sequence", this.parent.xEx, null,XPathResult.ORDERED_NODE_ITERATOR_TYPE, null);
		var seqNode=null;
		while (seqNode = listSeq.iterateNext()) {
			var sequence = fleshSeq.call(this, seqNode);
			this.Sequences = sequence;
			//seqPane.appendChild(sequence.Visual);
		}
		listSeq = this.parent.xEx.evaluate("//Imaginaire", this.parent.xEx, null,XPathResult.ORDERED_NODE_ITERATOR_TYPE, null);
		seqNode=null;
		while (seqNode = listSeq.iterateNext()) {
			var sequence = fleshSeq.call(this, seqNode);
			this.Sequences = sequence;
		}
	}
	/*
	if(seqPane.childElementCount > 0){
		$(seqPane).show();
	}*/
}
ApplicationRepertoire.inheritsFrom(RepertoireSubstance);
ApplicationRepertoire.ListeSequences = [];
ApplicationRepertoire.ActiveSubstances = [];
ApplicationRepertoire.metaSubstances = [];
ApplicationRepertoire.NbURL = 0;
ApplicationRepertoire.Pane;
ApplicationRepertoire.NouSub = function(sub) {
	if (ApplicationRepertoire.metaSubstances.indexOf(sub) < 0 && ApplicationRepertoire.ActiveSubstances.indexOf(sub) < 0) {
		ApplicationRepertoire.ActiveSubstances.push(sub);
	}
}
ApplicationRepertoire.prototype.retrieveSeqChild = function(subId) {
	for (var i = 0; i < ApplicationRepertoire.metaSubstances.length; i++) {
		var sub = ApplicationRepertoire.metaSubstances[i];
		if (sub.Id == subId) {
			return sub;
		}
	}
	return null;	
}
ApplicationRepertoire.prototype.recordAppData = function() {
	var dicoSub = this.xEx.firstChild.getElementsByTagName("DictionnaireSubstance")[0];
	for (var i=0; ApplicationRepertoire.ActiveSubstances && i < ApplicationRepertoire.ActiveSubstances.length; i++) {
		var sub = ApplicationRepertoire.ActiveSubstances[i];
		dicoSub.appendChild(sub.SubX.cloneNode(true));
	}
/*
	// Adding the Reliure :
	var reliure = this.parent.xDoc.createElement("ReliureDefinie");
	var graphic = this.parent.xDoc.createElement("Graphique");
	var adress = this.parent.xDoc.createElement("Adresse");
	reliure.setAttribute("Type","Sequence");
	graphic.setAttribute("Type", "Image");
	adress.setAttribute("Url","LienSequence.jpg");
	graphic.appendChild(adress);
	reliure.appendChild(graphic);
	this.parent.xDoc.firstChild.appendChild(reliure);
*/	
	this.parent.xDoc = this.parent.xEx;
	this.writeDico();
	var liElems = this.parent.xEx.evaluate("//*[@Url]", this.parent.xEx,null, XPathResult.ANY_TYPE, null);
	var elems;
	while(elems = liElems.iterateNext()) { 
		ApplicationRepertoire.NbURL++;
		this.decodeUrl(elems);
	}
}
ApplicationRepertoire.prototype.decodeUrl = function(uEl) {
	if(!uEl){
		return;
	}
	var bucket = this.bucket;
	var that = this;
	var params = {
			Key : uEl.getAttribute("Url")
		};
	bucket
	.getObject(
			params,
			function(err, meta) {
				if (err) {
					console.log = "Couldn't find Url"+err.message;
				}
				else {
						var sPath = bucket.getSignedUrl('getObject',
								params);
						uEl.textContent = encodeURI(sPath);
						if (--ApplicationRepertoire.NbURL <= 0){
							window.alert("Enregistrement complete");
						}
					}
				});
}
ApplicationRepertoire.prototype.uploadApplication = function(sAppPath){
	var that = this;
		if (this.xEx)
		{
			xKey = 'User:' + this.fbUserId + '/' + Substance.MetaDataName+".xml";			
			var sDoc = new XMLSerializer().serializeToString(this.xEx);
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
					that.launchApp(sAppPath);
					console.log = 'Upload completed.';
				}
			});
		}		
	};
ApplicationRepertoire.prototype.launchApp=function(sAppPath){
	xKey = 'User:' + this.fbUserId + '/' + Substance.MetaDataName+".xml";			
	var xmlUrl = OBJECT_LINK+"User:"+this.fbUserId + '/' + Substance.MetaDataName+".xml";
	localStorage.setItem('applicationSub', xmlUrl);
	sAppPath = sAppPath+'?'+this.fbUserId + '/' + Substance.MetaDataName;
	var appWin = window.open(sAppPath);
	/*
	var params = {
		Key : xKey
	};
	this.bucket.getObject(params, function(err, meta) {
		if (err) {
			results.innerHTML = 'ERROR: ' + err;
		} else {
			xmlUrl = encodeURI(that.bucket.getSignedUrl('getObject', params));
			localStorage.setItem('applicationSub', xmlUrl);
			var appWin = window.open(sAppPath);
		}
	});
	*/	
}
