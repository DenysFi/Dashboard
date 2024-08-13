import "../scss/style.scss"

/* Перевірка підтримки webp, додавання класу webp або no-webp для HTML */
export function isWebp() {
	// Проверка поддержки webp
	function testWebP(callback) {
		let webP = new Image()
		webP.onload = webP.onerror = function () {
			callback(webP.height == 2)
		}
		webP.src =
			"data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA"
	}
	// Додавання класу _webp або _no-webp для HTML
	testWebP(function (support) {
		let className = support === true ? "webp" : "no-webp"
		document.documentElement.classList.add(className)
	})
}

// Додавання loaded для HTML після повного завантаження сторінки
export function addLoadedClass() {
	if (!document.documentElement.classList.contains("loading")) {
		window.addEventListener("load", function () {
			setTimeout(function () {
				document.documentElement.classList.add("loaded")
			}, 0)
		})
	}
}

isWebp()
addLoadedClass()
