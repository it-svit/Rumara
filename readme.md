<h1>Rumara</h1>

<ol>
	<li>Install Node Modules: <strong>npm i</strong>;</li>
	<li>Run the template: <strong>gulp</strong>.</li>
</ol>

<h2>Gulp tasks:</h2>

<ul>
	<li><strong>gulp</strong>: run default gulp task (sass, js, watch, browserSync) for web development;</li>
	<li><strong>build</strong>: build project to <strong>dist</strong> folder (cleanup, image optimize, removing unnecessary files);</li>
	<li><strong>deploy</strong>: project deployment on the server from <strong>dist</strong> folder via <strong>FTP</strong>;</li>
	<li><strong>rsync</strong>: project deployment on the server from <strong>dist</strong> folder via <strong>RSYNC</strong>;</li>
	<li><strong>clearcache</strong>: clear all gulp cache.</li>
</ul>

<h2>Rules for working with the starting HTML template</h2>

<ol>
	<li>All HTML files should have similar initial content as in <strong>app/index.html</strong>;</li>
	<li>For installing new jQuery library, just run the command "<strong>bower i plugin-name</strong>" in the terminal. Libraries are automatically placed in the folder <strong>app/libs</strong>. Bower must be installed in the system (npm i -g bower). Then place all jQuery libraries paths in the <strong>'libs'</strong> task (gulpfile.js);</li>
	<li>All custom JS located in <strong>app/js/common.js</strong>;</li>
	<li>All Sass vars placed in <strong>app/sass/_vars.sass</strong>;</li>
	<li>All media queries placed in <strong>app/sass/_media.sass</strong>;</li>
	<li>All jQuery libraries CSS styles placed in <strong>app/sass/_libs.sass</strong>;</li>
</ol>
