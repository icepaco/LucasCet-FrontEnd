/**
 * @author Pascal
 */

(function(windows) { 	
function handleFileSelect(evt) {
	results.empty();
	evt.stopPropagation();
	evt.preventDefault();
	$("#overlay").show();
	var files = evt.originalEvent.dataTransfer.files; // FileList object.
	// files is a FileList of File objects. List some properties.
	var output = [];
	var workers = [];
	var fileResults = [];
	for (var i = 0, f; f = files[i]; i++) {
		var workParams = [];
		output.push('<li><strong>', escape(f.name), '</strong> (', f.type
				|| 'n/a', ') - ', f.size, ' bytes, last modified: ',
				f.lastModifiedDate ? f.lastModifiedDate.toLocaleDateString()
						: 'n/a', '</li>');				
		var file = f;
		if (file) {
            var formData = new FormData();
            var that = this;

            // add assoc key values, this will be posts values
            formData.append("file", file, file.name);
            formData.append("userId", sessionStorage.userId);
            formData.append("upload_file", true);

            $.ajax({
                type: "post",
                url: "/uploadGraphic",
                xhr: function () {
                    var myXhr = $.ajaxSettings.xhr();
                    if (myXhr.upload) {
                        myXhr.upload.addEventListener('progress', that.progressHandling, false);
                    }
                    return myXhr;
                },
                success: function (message) {
					fileResults.push('<li class="success">Upload completed.</li>');
					if (i == files.length) 
						$("#overlay").fadeOut("slow");
                },
                error: function (error) {
					fileResults.push('<li class="error">ERROR: ' + error+'</li>');
					if (i == (files.length-1)) 
						$("#overlay").fadeOut("slow");
                },
                async: true,
                data: formData,
                cache: false,
                contentType: false,
                processData: false,
                timeout: 60000
                });						
		}
	}
	results.html('<ul>' + fileResults.join('') + '</ul>');
	$('#fileList').html('<ul>' + output.join('') + '</ul>');
}

function handleDragOver(evt) {
	evt.stopPropagation();
	evt.preventDefault();
	evt.originalEvent.dataTransfer.dropEffect = 'telecharger'; // Explicitly show this is a copy.
}
windows.Module = { 		
		 public : loadMediaHandler = function() {
			// Setup the dnd listeners.
			dropZone = $('#dropZone');
			//dropZone.addEventListener('dragover', handleDragOver, false);
			//dropZone.addEventListener('drop', handleFileSelect, false);
			dropZone.on(
				'dragover',
				handleDragOver
			);
			dropZone.on(
				'drop',
				handleFileSelect
			);
			dropZone.on(
			    'dragenter',
			    handleDragOver
			);
			button = $('#uploadFile');
			results = $('#results');
			}
		}
}) (this);