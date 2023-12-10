<script>
	export let segment;
</script>

<style>
	nav {
		border-bottom: 1px solid rgba(255,62,0,0.1);
		font-weight: 300;
		padding: 0 1em;
	}

	ul {
		margin: 0;
		padding: 0;
	}

	/* clearfix */
	ul::after {
		content: '';
		display: block;
		clear: both;
	}

	li {
		display: block;
		float: left;
	}

	[aria-current] {
		position: relative;
		display: inline-block;
	}

	[aria-current]::after {
		position: absolute;
		content: '';
		width: calc(100% - 1em);
		height: 2px;
		background-color: rgb(255,62,0);
		display: block;
		bottom: -1px;
	}

	a {
		text-decoration: none;
		padding: 1em 0.5em;
		display: block;
	}

    * {
        font-family: 'Prompt', sans-serif;
    }
</style>

<!-- Navbar goes here -->
<nav class="bg-white shadow-lg mb-4">
    <div class="max-w-6xl mx-auto px-4">
        <div class="flex justify-between">
            <div class="flex space-x-7">
                <div>
                    <!-- Website Logo -->
                    <a href="/" class="flex items-center py-4 px-2">
                        <img src="https://hotemoji.com/images/dl/2/nerd-emoji-by-google.png" alt="Logo" class="h-10 w-10 mr-2">
                        <!-- <span class="font-semibold text-gray-500 text-lg">Navigation</span> -->
                    </a>
                </div>
                <!-- Primary Navbar items -->
                <div class="hidden md:flex items-center space-x-1">
                    <a href="/" class="py-4 px-2 text-gray-500 font-semibold hover:text-blue-500 transition duration-300">หน้าแรก</a>
                    <a href="/about" class="py-4 px-2 text-gray-500 font-semibold hover:text-blue-500 transition duration-300">เกี่ยวกับเรา</a>
                    <a href="/blog" class="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">บทความ</a>
                    <a href="/about" class="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">ติดต่อเรา</a>
                </div>
            </div>
            <!-- Secondary Navbar items -->
            <div class="hidden md:flex items-center ">
                <a href="https://www.youtube.com/@gameoftoy3060" class="flex items-center py-4">
                    <img src="https://cdn3.iconfinder.com/data/icons/2018-social-media-logotypes/1000/2018_social_media_popular_app_logo_youtube-512.png" alt="Logo" class="h-10 w-10 mr-2">
                    <!-- <span class="font-semibold text-gray-500 text-lg">Navigation</span> -->
                </a>
                <a href="https://www.facebook.com/PHETCHABUNOPTICAL" class="flex items-center py-4 ">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/2048px-2021_Facebook_icon.svg.png" alt="Logo" class="h-10 w-10 mr-2">
                    <!-- <span class="font-semibold text-gray-500 text-lg">Navigation</span> -->
                </a>
            </div>
            <!-- Mobile menu button -->
            <div class="md:hidden flex items-center">
                <button class="outline-none mobile-menu-button">
                <svg class=" w-6 h-6 text-gray-500 hover:text-green-500 "
                    x-show="!showMenu"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
            </button>
            </div>
        </div>
    </div>
    <!-- mobile menu -->
    <div class="hidden mobile-menu">
        <ul class="">
            <li class="active"><a href="/" class="block text-sm px-2 py-4 text-white bg-green-500 font-semibold">home</a></li>
            <li><a href="/about" class="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">about</a></li>
            <li><a href="/blog" class="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">blog</a></li>
            <li><a href="/about" class="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">contact us</a></li>
        </ul>
    </div>
    <script>
        const btn = document.querySelector("button.mobile-menu-button");
        const menu = document.querySelector(".mobile-menu");

        btn.addEventListener("click", () => {
            menu.classList.toggle("hidden");
        });
    </script>
</nav>