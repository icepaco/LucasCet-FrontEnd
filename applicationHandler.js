(function(windows) {
	var activeSeq;
	var appName;
	var listPane;
	var videoPane;
	var functionId;
	windows.Module = {
		public : loadAppHandler = function() {
			listPane = $('#listSeq')[0];
			$(listPane).hide();
			activeSeq = $('#activeSubPane')[0];
			appName = $('.appName')[0];
			$.get("/downloadSubstances",{elType:"Sequence"}, function(data) {
				data.forEach(function(sequenceData) {
					var sequenceRes = new Sequence(sequenceData);
					sequenceRes.OnClick = clickSequenceHandler;
					listPane.append(sequenceRes.Visual);
				});
			});
		},
		public : newApplication = function() {
			$(listPane).show();
			$(activeSeq.parentNode).show();
			functionId = "Html-LucasCet";
		},
		public : newExercize = function() {
			//TODO Create exercise patterns
		},
		public : recordAll = function() {
			var appId;
			if(sessionStorage.userId)
			$.post("/createApplication",{title:appName.value,userId:sessionStorage.userId}, function(data){
				if(data) {						
					appId = data.subId;
					$.post("/associateFunction", {mainSubstance:appId, associateFunction:functionId}, function(dataFun){
						if(!dataFun) {
							alert("Problème avec la B.D");			
						}
						else
						{
							activeSeq.childNodes.forEach(function(visSeq) {
								var seq = visSeq.owner;
								$.post("/associateApplication",{applicationCode:appId,SequenceId:seq.Id,SequenceViz:seq.Url}, function(dataFin){								
									if(!dataFin) {
										alert("Problème avec la B.D");			
									}
							});						
						});
						}
					});					
				}
				else {
					alert("Problème avec la B.D");
				}
			});				
		},
	};
	function clickSequenceHandler(event) {
		var visualSeq = event.currentTarget;
		var selectedSeq = visualSeq.owner;
		selectedSeq.OnClick = unClickSequenceHandler;
		visualSeq.remove();
		activeSeq.append(visualSeq);
	}
	function unClickSequenceHandler(event) {
		var visualSeq = event.currentTarget;
		var selectedSeq = visualSeq.owner;
		selectedSeq.OnClick = clickSequenceHandler;
		visualSeq.remove();
		listPane.append(visualSeq);
	}
	function finalize() {
		dicoSub.recordAppData();
	}
	function associateFunction(funcId, callNext)
	{
		$.post("/associateFunction", {mainSubstance:createdSubId, associateFunction:funcId}, function(data){
			if(!data) {
				alert("Problème avec la B.D");			
			}
			else
			{
				
			}
		});
	}
})(this);