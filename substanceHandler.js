/**
 * @author Pascal
 */

(function(windows) {


var selectedSub;

var dispPane;
var btnAdd;
var createdSubId;

var animPane;
var imgPane;
var videoPane;

windows.Module = {
public : loadSubHandler = function() {
	var btnPot = new BoutonActivateur(
			"data:image/jpeg;base64,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",
			"Potentielle", potentHandler,1);
	var btnMot = new BoutonActivateur(
			"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRj9FIn2dMmiEtweLMJu0oF2JgEkunxGFELLc3upkVAB3Y_alzn",
			"Motrice", dynaHander, 2);
	var btnRel = new BoutonActivateur(
			"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQP_VWIAoqTmrTVq0R-BCKUVQ-ew77YO4bT5cTypTTRya84feMs",
			"Relation", relHandler,3);
	var btnSeq = new BoutonActivateur(
			"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQP_VWIAoqTmrTVq0R-BCKUVQ-ew77YO4bT5cTypTTRya84feMs",
			"Sequence", seqHandler,4);
	var btnPane = $('#contenantBoutons');
	imgPane = $('#selectImg')[0];
	videoPane = $('#selectAnim')[0];
	dispPane = $('#contenuDyna')[0];
	btnPane.append(btnPot.Div);
	btnPane.append(btnMot.Div);
	btnPane.append(btnRel.Div);
	btnPane.append(btnSeq.Div);
	btnAdd = $('#btnAdd')[0];
},


};
function potentHandler() {
	selectedSub = new SubstancePotentielle();
	$(imgPane).empty();
	
    $.get("/downloadGraphic", {keyName:"unimasoftlucasrepository/"+sessionStorage.userId+"/image/*.*"}, function(data)
    		{
    			for (var i=0; i < data.length; i++) {
					var link = document.querySelector('link[rel="import"]');
					var article = link.import.querySelector('img.imgThumb');
					var imDisplay = article.cloneNode(true);
					imDisplay.id = data[i];
					imDisplay.src = data[i];
					imDisplay.onclick = selectMedia;
					imgPane.appendChild(imDisplay);    				
					btnAdd.style.display = "block";
   			}
    		});    		
	$(imgPane).show("slow");
}
function dynaHander() {
	selectedSub = new SubstanceAction();
	$(videoPane).empty();
	$.get("/downloadGraphic", {keyName:"unimasoftlucasrepository/"+sessionStorage.userId+"/video/*.*"}, function(data)
    		{
    			for (var i=0; i < data.length; i++) {
					var link = document.querySelector('link[rel="import"]');
					var article = link.import.querySelector('video.videoThumb');
					var vidDisplay = article.cloneNode(true);
					$(vidDisplay).attr("controls", true);
					vidDisplay.id = data[i];
					vidDisplay.src = data[i];
					vidDisplay.onclick = selectMedia;
					videoPane.appendChild(vidDisplay);    				
    			}
    		});    	
	$.get("/downloadSubstances", function(data)
			{
				for (var i=0; i < data.length; i++) {
					var substanceRes;
					switch (data[i].subType) {
					case "potential":
						substanceRes = new SubstancePotentielle(data[i]);
						break;
					case "dynamic":
						substanceRes = new SubstanceAction(data[i]);
						break;
					case "relation":
						substanceRes = new SubstanceRelation(data[i]);
						break;
					}
					selectedSub.parent.listeSubstances.push(substanceRes);
				}
				selectedSub.deployVisual(btnAdd);
			});
	
	$(videoPane).show("slow");
}
function relHandler() {
	selectedSub = new SubstanceRelation();
	
	$(imgPane).empty();	
    $.get("/downloadGraphic", {keyName:"unimasoftlucasrepository/"+sessionStorage.userId+ "/image/*.*"}, function(data)
    		{
    			for (var i=0; i < data.length; i++) {
					var link = document.querySelector('link[rel="import"]');
					var article = link.import.querySelector('img.imgThumb');
					var imDisplay = article.cloneNode(true);
					imDisplay.id = data[i];
					imDisplay.src = data[i];
					imDisplay.onclick = selectMedia;
					imgPane.appendChild(imDisplay);    				
    			}
    		});    		
	$(imgPane).show("slow");	
	$(videoPane).empty();
	$.get("/downloadGraphic", {keyName:"unimasoftlucasrepository/"+sessionStorage.userId+ "/video/*.*"}, function(data)
    		{
    			for (var i=0; i < data.length; i++) {
					var link = document.querySelector('link[rel="import"]');
					var article = link.import.querySelector('video.videoThumb');
					var vidDisplay = article.cloneNode(true);
					$(vidDisplay).attr("controls", true);
					vidDisplay.id = data[i];
					vidDisplay.src = data[i];
					vidDisplay.onclick = selectMedia;
					videoPane.appendChild(vidDisplay);    				
    			}
    		});    	
	$.get("/downloadSubstances", function(data)
			{
				for (var i=0; i < data.length; i++) {
					var substanceRes;
					switch (data[i].subType) {
					case "potential":
						substanceRes = new SubstancePotentielle(data[i]);
						break;
					case "dynamic":
						substanceRes = new SubstanceAction(data[i]);
						break;
					case "relation":
						substanceRes = new SubstanceRelation(data[i]);
						break;
					}
					selectedSub.parent.listeSubstances.push(substanceRes);
				}
				selectedSub.deployVisual(btnAdd);
			});	
	$(videoPane).show("slow");
}
function seqHandler() {
	selectedSub = new Sequence();
	$(videoPane).empty();
	$.get("/downloadGraphic", {keyName:"unimasoftlucasrepository/"+sessionStorage.userId+ "/video/*.*"}, function(data)
    		{
    			for (var i=0; i < data.length; i++) {
					var link = document.querySelector('link[rel="import"]');
					var article = link.import.querySelector('video.videoThumb');
					var vidDisplay = article.cloneNode(true);
					$(vidDisplay).attr("controls", true);
					vidDisplay.id = data[i];
					vidDisplay.src = data[i];
					vidDisplay.onclick = selectMedia;
					videoPane.appendChild(vidDisplay);    				
    			}
    		});    	
	$.get("/downloadSubstances", function(data)
			{
				var listeSub = [];
				var event = new CustomEvent("subDone",{bubbles:true, detail:listeSub});
				for (var i=0; i < data.length; i++) {
					var substanceRes;
					switch (data[i].subType) {
					case "potential":
						substanceRes = new SubstancePotentielle(data[i]);
						break;
					case "dynamic":
						substanceRes = new SubstanceAction(data[i]);
						break;
					case "relation":
						substanceRes = new SubstanceRelation(data[i]);
						break;
					}
					listeSub.push(substanceRes);
					selectedSub.AddNewSelection = substanceRes;
				}
				listeSub.forEach(function(substance) {
					substance.Integrate(listeSub);
				});
				selectedSub.deployVisual(btnAdd);
			});	
	$(videoPane).show("slow");
}
	
function selectMedia(event) {
	var media = event.currentTarget;
	if (selectedSub.type == "SubstanceRelation") {
		selectedSub.isAnim = media.tagName == "VIDEO";
	}
	selectedSub.Graphic = media.id;
	selectedSub.Url = media.src;
	$(dispPane).empty();
	$(imgPane).empty();
	$(videoPane).empty();
	dispPane.appendChild(selectedSub.Visual);
	btnAdd.addEventListener('click', add2Dico);		
}
function add2Dico() {
	if(sessionStorage.userId)
		$.post("/createSubstance",{selection:selectedSub.Url,title:selectedSub.Name,userId:sessionStorage.userId}, function(data){
			if(data) {
				$(dispPane).empty();
				BoutonActivateur.affiche();
				$(btnAdd).hide();
				createdSubId = data.subId;
				if(selectedSub.type == "Sequence")
					selectedSub.RecordSubstance(associateSubstance);
				else
					selectedSub.RecordSubstance(associateSubstance,associateFunction);
				}
			else {
				alert("Problème avec la B.D");
				}
			});
}
function associateSubstance(associateId, callNext)
{
	$.post("/associateSubstance", {mainSubstance:createdSubId, associateSubstance:associateId}, function(data){
		if(!data) {
			alert("Problème avec la B.D");			
		}
		else
		{
			callNext.call(selectedSub);
		}
	});
}
function associateFunction(funcId, callNext)
{
	$.post("/associateFunction", {mainSubstance:createdSubId, associateFunction:funcId}, function(data){
		if(!data) {
			alert("Problème avec la B.D");			
		}
		else
		{
			callNext();
		}
	});
}
function associateSequence(associateId)
{
	$.post("/associateSequence", {Sequence:createdSubId, associateSubstance:associateId}, function(data){
		if(!data) {
			alert("Problème avec la B.D");			
		}
		else
		{
			callNext.call(selectedSub);
		}
	});
}
})(this);