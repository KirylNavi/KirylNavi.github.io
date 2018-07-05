$(document).ready(function() {
	require.config({ paths: { 'vs': '../vendor/monaco-editor/min/vs' }});

	function codeEditorInit() {
		var itemsElements = document.querySelectorAll('.container-editor-js');
		var itemsReadmeElements = document.querySelectorAll('.container-readme-editor-js');

		itemsElements.forEach(function(item) {
			require(['vs/editor/editor.main'], function() {
				monaco.editor.create(
					item, {
					automaticLayout: true,
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

		itemsReadmeElements.forEach(function(item) {
			require(['vs/editor/editor.main'], function() {
				monaco.editor.create(
					item, {
					automaticLayout: true,
					value: [
						'<h2>',
							'\tCompiled CSS and JS',
						'</h2>',
						'<p>Download ready-to-use compiled code for <strong>Bootstrap v4.0.0</strong> to easily drop into your project, which includes:</p>',
						'<ul>',
							'\t<li>Compiled and minified CSS bundles</li>',
							'\t<li>Compiled and minified JavaScript plugins</li>',
						'</ul>',
						'<p>This doesn’t include documentation, source files, or any optional JavaScript dependencies (jQuery and Popper.js).</p>'
					].join('\n'),
					language: 'html'
				});
			});
		});
	}

	codeEditorInit();


	// $('.collapse-container-editor-js').on('shown.bs.collapse', function () {
	// 	codeEditorInit();
	// });
	
})