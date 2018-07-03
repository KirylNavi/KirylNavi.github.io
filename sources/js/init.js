$(document).ready(function() {
	require.config({ paths: { 'vs': '../vendor/monaco-editor/min/vs' }});

	function codeEditorInit() {
		var itemsElements = document.querySelectorAll('.container-editor-js');

		itemsElements.forEach(function(item) {
			require(['vs/editor/editor.main'], function() {
				monaco.editor.create(
					item, {
					value: [
						'<form>',
							'\t<div class="form-group">',
								'\t\t<label for="exampleInputEmail1">Email address</label>',
								'\t\t<input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">',
								'\t\t<small id="emailHelp" class="form-text text-muted">We\'ll never share your email with anyone else.</small>',
							'\t</div>',
							'\t<div class="form-group">',
								'\t\t<label for="exampleInputPassword1">Password</label>',
								'\t\t<input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">',
							'\t</div>',
							'\t<div class="form-group form-check">',
								'\t\t<input type="checkbox" class="form-check-input" id="exampleCheck1">',
								'\t\t<label class="form-check-label" for="exampleCheck1">Check me out</label>',
							'\t</div>',
							'\t<button type="submit" class="btn btn-primary">Submit</button>',
						'</form>'
					].join('\n'),
					language: 'html'
				});
			});
		});
	}

	codeEditorInit();


	$('.collapse-container-editor-js').on('shown.bs.collapse', function () {
		codeEditorInit();
	});
	
})