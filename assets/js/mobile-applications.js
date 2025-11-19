/*
	Mobile Applications Page
	Filters and displays only mobile application projects
*/
import projects from './projects.js';

(function($) {
	var	$window = $(window),
		$body = $('body');

	// Define which projects are mobile applications
    const mobileAppTitles = [
        "Habit Ring",
        "Sri-Doc",
        "AMC flash-card mobile app",
        "Agriculture Marketplace Dashboard"
    ];

	// Filter projects to only include mobile applications
	// Filter out empty strings first, then match project titles
	const mobileApps = projects.filter(project => {
		const validTitles = mobileAppTitles.filter(title => title.trim() !== "");
		return validTitles.includes(project.title);
	});

	// Debug: Log the filtered results
	console.log('Mobile App Titles:', mobileAppTitles);
	console.log('Filtered Mobile Apps:', mobileApps);

	// Reference to the container where sections will be added
	const projectsContainer = document.getElementById('projectsContainer');
	
	// Loop through the mobile apps array and create sections dynamically
	mobileApps.forEach((project, listIndex) => {
		const index = listIndex + 1
		const section = document.createElement('section');
		section.setAttribute('id', (index));
		const styleType = `style${index}`
		section.classList.add('spotlight', styleType, index % 2 === 0 ? 'right' : 'left');

		// Separate the file name and extension
		const filename = project.imageSrc;
		let dotIndex = filename.lastIndexOf('.');
		let fileNameWithoutExt = filename.substring(0, dotIndex);
		let fileExt = filename.substring(dotIndex);
	
		// Add '2' before the file extension and combine the file name and extension
		let mobileScreenFile = `${fileNameWithoutExt}2${fileExt}`;

		let imagePath = project.imageSrc;

		if (window.innerWidth < 980) {
			imagePath = mobileScreenFile;
		}

	
		// Create the content for the section
		const imgClass = index % 2 === 0 ? '' : 'bottom'

		const techsContent = project.techs.map(tech => `
			<section class="col-4 col-6-medium col-4-xsmall">
				<span class="icon">
					<img src="images/tech/${tech}" alt=""/>
				</span>
			</section>`)
			.join('');
		
		// Add privacy policy button if privacyPolicyId exists
		const privacyButton = project.privacyPolicyId ? `
			<ul class="actions" style="margin-top: 1.5em;">
				<li><a href="privacyPolicies/${project.privacyPolicyId}" class="button" target="_blank">Privacy Policy</a></li>
			</ul>
		` : '';
		
		const content = `
		<span class="image fit main ${imgClass}"><img src="${imagePath}" alt="" /></span>
		<div class="content">
			<header>
			<h2>${project.title}</h2>
			<p>${project.description}</p>
			</header>
			<div class="row gtr-uniform">
				${techsContent}
			</div>
			${privacyButton}
		</div>
		<a href="#${index+1}" class="goto-next scrolly">Next</a>
		`;
	
		// Set the content inside the section
		section.innerHTML = content;
	
		// Append the section to the container
		projectsContainer.appendChild(section);
	});

	// Breakpoints.
		breakpoints({
			xlarge:   [ '1281px',  '1680px' ],
			large:    [ '981px',   '1280px' ],
			medium:   [ '737px',   '980px'  ],
			small:    [ '481px',   '736px'  ],
			xsmall:   [ null,      '480px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Touch mode.
		if (browser.mobile)
			$body.addClass('is-touch');

	// Scrolly links.
		$('.scrolly').scrolly({
			speed: 2000
		});

	// Dropdowns.
		$('#nav > ul').dropotron({
			alignment: 'right',
			hideDelay: 350
		});

	// Set active navigation item based on current page
	function setActiveNavItem() {
		const currentPath = window.location.pathname;
		let currentPage = currentPath.split('/').pop();
		if (!currentPage || currentPage === '') currentPage = 'index.html';
		currentPage = currentPage.toLowerCase();
		const navLinks = document.querySelectorAll('#nav ul li a');
		
		navLinks.forEach(link => {
			const href = link.getAttribute('href');
			if (!href || href === '#' || href.startsWith('#')) return;
			
			// Get the filename from href (remove hash and query params)
			let linkPage = href.split('#')[0].split('?')[0];
			linkPage = linkPage.split('/').pop() || linkPage;
			linkPage = (linkPage || 'index.html').toLowerCase();
			
			// Check if the link matches the current page
			if (linkPage === currentPage) {
				link.parentElement.classList.add('active');
			}
		});
	}
	
	// Run on DOM ready
	$(document).ready(function() {
		setActiveNavItem();
	});

	// Nav.

		// Title Bar.
			$(
				'<div id="titleBar">' +
					'<a href="#navPanel" class="toggle"></a>' +
					'<span class="title">' + $('#logo').html() + '</span>' +
				'</div>'
			)
				.appendTo($body);

		// Panel.
			$(
				'<div id="navPanel">' +
					'<nav>' +
						$('#nav').navList() +
					'</nav>' +
				'</div>'
			)
				.appendTo($body)
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					side: 'left',
					target: $body,
					visibleClass: 'navPanel-visible'
				});

	// Parallax.
	// Disabled on IE (choppy scrolling) and mobile platforms (poor performance).
		if (browser.name == 'ie'
		||	browser.mobile) {

			$.fn._parallax = function() {

				return $(this);

			};

		}
		else {

			$.fn._parallax = function() {

				$(this).each(function() {

					var $this = $(this),
						on, off;

					on = function() {

						$this
							.css('background-position', 'center 0px');

						$window
							.on('scroll._parallax', function() {

								var pos = parseInt($window.scrollTop()) - parseInt($this.position().top);

								$this.css('background-position', 'center ' + (pos * -0.15) + 'px');

							});

					};

					off = function() {

						$this
							.css('background-position', '');

						$window
							.off('scroll._parallax');

					};

					breakpoints.on('<=medium', off);
					breakpoints.on('>medium', on);

				});

				return $(this);

			};

			$window
				.on('load resize', function() {
					$window.trigger('scroll');
				});

		}

	// Spotlights.
		var $spotlights = $('.spotlight');

		$spotlights
			._parallax()
			.each(function() {

				var $this = $(this),
					on, off;

				on = function() {

					var top, bottom, mode;

					// Use main <img>'s src as this spotlight's background.
						$this.css('background-image', 'url("' + $this.find('.image.main > img').attr('src') + '")');

					// Side-specific scrollex tweaks.
						if ($this.hasClass('top')) {

							mode = 'top';
							top = '-20%';
							bottom = 0;

						}
						else if ($this.hasClass('bottom')) {

							mode = 'bottom-only';
							top = 0;
							bottom = '20%';

						}
						else {

							mode = 'middle';
							top = 0;
							bottom = 0;

						}

					// Add scrollex.
						$this.scrollex({
							mode:		mode,
							top:		top,
							bottom:		bottom,
							initialize:	function(t) { $this.addClass('inactive'); },
							terminate:	function(t) { $this.removeClass('inactive'); },
							enter:		function(t) { $this.removeClass('inactive'); },

							// Uncomment the line below to "rewind" when this spotlight scrolls out of view.

							//leave:	function(t) { $this.addClass('inactive'); },

						});

				};

				off = function() {

					// Clear spotlight's background.
						$this.css('background-image', '');

					// Remove scrollex.
						$this.unscrollex();

				};

				breakpoints.on('<=medium', off);
				breakpoints.on('>medium', on);

			});

	// Wrappers.
		var $wrappers = $('.wrapper');

		$wrappers
			.each(function() {

				var $this = $(this),
					on, off;

				on = function() {

					$this.scrollex({
						top:		250,
						bottom:		0,
						initialize:	function(t) { $this.addClass('inactive'); },
						terminate:	function(t) { $this.removeClass('inactive'); },
						enter:		function(t) { $this.removeClass('inactive'); },

						// Uncomment the line below to "rewind" when this wrapper scrolls out of view.

						//leave:	function(t) { $this.addClass('inactive'); },

					});

				};

				off = function() {
					$this.unscrollex();
				};

				breakpoints.on('<=medium', off);
				breakpoints.on('>medium', on);

			});

	// Banner.
		var $banner = $('#banner');

		$banner
			._parallax();
})(jQuery);

