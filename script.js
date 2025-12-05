// Objeto con datos de productos (simulando una base de datos)
const productData = {
    "UltraPods MAX": {
        price: "$13.599",
        description: "Experimenta la inmersión total con la mejor tecnología. Batería de larga duración y resistencia al sudor. Incluye estuche de carga inalámbrica.",
        features: ["La máxima calidad de audio.", "ANC Pro y Modo Ambiente.", "Batería de 30 horas.", "Bluetooth 5.3"],
        media: [
            { type: 'img', src: 'assets/ultrapods.JPG' },
            { type: 'img', src: 'assets/ultrapods_det2.JPG' }, 
            { type: 'video', src: 'assets/ultrapods_video.mp4' } 
        ]
    },
    "Auricular P9": {
        price: "$11.999",
        description: "Diseñado para largas sesiones de uso. Almohadillas suaves y banda ajustable. Sonido potente con graves profundos.",
        features: ["Diseño Over-Ear cómodo.", "Ideal para gaming y música.", "Micrófono retráctil.", "Cable de 3.5mm incluido."],
        media: [
            { type: 'img', src: 'assets/p9.JPG' },
            { type: 'img', src: 'assets/p9_det2.JPG' } 
        ]
    },
    "InPods 12": {
        price: "$9.999",
        description: "La alternativa compacta y potente. Se sincronizan automáticamente al abrir el estuche. Ideal para el uso diario.",
        features: ["Compatibilidad universal.", "Estuche de carga rápida.", "Control táctil inteligente.", "5 horas de reproducción."],
        media: [
            { type: 'img', src: 'assets/inpods12.JPG' }
        ]
    },
    "Auricular E75": {
        price: "$7.999",
        description: "Auriculares intra-auriculares económicos y confiables. Ligeros y con ajuste seguro.",
        features: ["Conexión estable.", "Micrófono incorporado.", "Resistente a salpicaduras."],
        media: [
            { type: 'img', src: 'assets/e75.JPG' }
        ]
    },
    "Auricular IP4": {
        price: "$4.999",
        description: "La opción más básica y accesible. Ideal para llamadas y podcasts.",
        features: ["El más económico.", "Diseño compacto.", "Sincronización rápida."],
        media: [
            { type: 'img', src: 'assets/ip4.JPG' }
        ]
    },
    "Auricular Pro 6S": {
        price: "$9.999",
        description: "Estilo elegante y sonido de alta fidelidad. Perfectos para audiofilos con presupuesto ajustado.",
        features: ["Alta fidelidad de sonido.", "Control táctil.", "Estuche magnético."],
        media: [
            { type: 'img', src: 'assets/pro6s.JPG' }
        ]
    },
    "Patillera Profesional": {
        price: "$10.500",
        description: "Herramienta de barbería de alta precisión. Motor potente y cuchillas de acero inoxidable para un corte limpio.",
        features: ["Incluye 3 peines guía.", "Batería recargable de litio.", "Diseño ergonómico.", "Ideal para retoques y detalles."],
        media: [
            { type: 'img', src: 'assets/patillera.JPG' }
        ]
    },
    "Tira LED RGB 5m": {
        price: "$11.999",
        description: "Crea el ambiente perfecto con millones de colores. Fácil instalación y control total desde tu teléfono.",
        features: ["Control con app y remoto.", "Adhesivo 3M.", "5 metros de largo.", "Modos de ritmo musical."],
        media: [
            { type: 'img', src: 'assets/tira_led.JPG' }
        ]
    },
    "Parlante Versión Tokyo": {
        price: "$15.999",
        description: "Potencia y diseño en un solo dispositivo. Llévalo a todas partes y disfruta del sonido envolvente.",
        features: ["Diseño exclusivo y potente.", "Sonido 360º.", "Resistente al agua.", "Micrófono manos libres."],
        media: [
            { type: 'img', src: 'assets/parlante_tokyo.JPG' }
        ]
    },
    "Parlante Músic": {
        price: "$0.00",
        description: "Lamentablemente agotado, pero es uno de nuestros best-sellers. ¡Consulta por la fecha de reposición!",
        features: ["Agotado por el momento.", "¡Vuelve pronto!"],
        media: [
            { type: 'img', src: 'assets/parlante_music.JPG' }
        ]
    }
};

// Variables para el carrusel de la modal
let currentSlideIndex = 0;
let productMedia = [];

// ===== MENU NAV (Dynamic Island) =====
function toggleMenu() {
    const menu = document.getElementById("menu");
    const navContent = document.getElementById("navContent"); 

    menu.classList.toggle("show");
    navContent.classList.toggle("active");
}

// ===== FUNCIÓN PRINCIPAL PARA ABRIR LA MODAL =====
function openProductModal(card) {
    // Obtener el nombre del producto
    const nombreElement = card.querySelector(".nombre");
    const nombreCompleto = nombreElement ? nombreElement.textContent : "";
    const productName = nombreCompleto.split(" (")[0].trim(); 

    const data = productData[productName];

    if (data) {
        // 1. Llenar los campos de texto
        document.getElementById("modalProductName").textContent = productName;
        document.getElementById("modalProductPrice").textContent = data.price;
        document.getElementById("modalProductDescription").textContent = data.description;
        
        // 2. Llenar la lista de características
        const featuresList = document.getElementById("modalProductFeatures");
        featuresList.innerHTML = '';
        data.features.forEach(feature => {
            const li = document.createElement('li');
            li.textContent = feature;
            featuresList.appendChild(li);
        });

        // 3. Llenar el Carrusel (medios)
        const carruselInner = document.getElementById("modalCarruselInner");
        carruselInner.innerHTML = '';
        productMedia = data.media; // Almacenamos los medios en la variable global
        
        productMedia.forEach(media => {
            let element;
            if (media.type === 'img') {
                element = document.createElement('img');
                element.src = media.src;
                element.alt = productName;
            } else if (media.type === 'video') {
    element = document.createElement('video');
    element.src = media.src;
    element.controls = true;
    element.loop = true; 
    element.muted = true; 
    element.preload = "none"; // ✅ ESTO EVITA LAGS
    element.setAttribute('playsinline', ''); 
}
            }
            carruselInner.appendChild(element);
        });
        
        // 4. Configurar botones de contacto
        // 🚨 CONFIGURACIÓN DE WHATSAPP CON TU NÚMERO Y MENSAJE DINÁMICO 🚨
        const whatsappMsg = `Hola, quiero saber si sigue disponible el producto *${productName}*.`;
        const whatsappURL = `https://wa.me/5491130279349?text=${encodeURIComponent(whatsappMsg)}`; 
        document.getElementById("whatsappLink").href = whatsappURL;
        
        // 5. Mostrar la modal y resetear carrusel
        const modal = document.getElementById("productModal");
        currentSlideIndex = 0;
        updateCarrusel(); 
        modal.classList.add("show");
        document.body.style.overflow = 'hidden'; // Evita el scroll del fondo
    } else {
        // Si no hay datos, mantiene la funcionalidad de despliegue de info-extra (fallback)
        const info = card.querySelector(".info-extra");
        info.classList.toggle("show-info");
    }
}

function closeModal() {
    const modal = document.getElementById("productModal");
    modal.classList.remove("show");
    document.body.style.overflow = 'auto'; // Restaura el scroll
    
    // Detener la reproducción de videos
    const videos = modal.querySelectorAll('video');
    videos.forEach(video => {
        video.pause();
        video.currentTime = 0;
    });
}


// ===== FUNCIONALIDAD DEL CARRUSEL EN MODAL =====

function changeSlide(n) {
    currentSlideIndex += n;
    updateCarrusel();
}

function updateCarrusel() {
    const carruselInner = document.getElementById("modalCarruselInner");
    if (!carruselInner || productMedia.length === 0) return;

    // Asegurar que el índice esté dentro del rango
    if (currentSlideIndex >= productMedia.length) {
        currentSlideIndex = 0;
    }
    if (currentSlideIndex < 0) {
        currentSlideIndex = productMedia.length - 1;
    }

    // Calcular el desplazamiento (cada elemento ocupa el 100% del ancho)
    const translateValue = -currentSlideIndex * 100;
    carruselInner.style.transform = `translateX(${translateValue}%)`;
    
    // Pausar todos los videos excepto el actual (si aplica)
    const mediaElements = carruselInner.children;
    for(let i = 0; i < mediaElements.length; i++) {
        const element = mediaElements[i];
        if (element.tagName === 'VIDEO') {
            if (i === currentSlideIndex) {
                element.play();
            } else {
                element.pause();
                element.currentTime = 0;
            }
        }
    }
}


// ===== FILTRO DE STOCK (Con animaciones CSS) =====
function filtrar(categoria) {
    const productos = document.querySelectorAll(".producto");
    const botones = document.querySelectorAll(".filtros button");

    // 1. Quitar clase activo a todos los botones
    botones.forEach(function(btn) {
        btn.classList.remove("activo");
    });

    // 2. Activar botón correcto
    for (let i = 0; i < botones.length; i++) {
        const texto = botones[i].textContent.toLowerCase();

        // Si la categoría es 'todos' o el texto del botón contiene la categoría
        if (categoria === "todos" || texto.includes(categoria)) {
            botones[i].classList.add("activo");
            break;
        }
    }

    // 3. Mostrar u ocultar productos con animación
    productos.forEach(function(producto) {
        // En lugar de cambiar 'display', añadimos/quitamos la clase 'hide'/'show'
        if (categoria === "todos" || producto.classList.contains(categoria)) {
            // Mostrar
            producto.classList.remove("hide");
            producto.classList.add("show");
        } else {
            // Ocultar
            producto.classList.remove("show");
            producto.classList.add("hide");
        }
    });
}


// ===============================================
// 🚀 FIX: Asegura que el evento de click en el fondo de la modal funcione (Corrige TypeError)
// ===============================================

document.addEventListener('DOMContentLoaded', (event) => {
    
    // Intenta obtener la modal. Ahora estamos seguros de que existe en el DOM.
    const modal = document.getElementById("productModal");
    
    if (modal) {
        // Añadir listener para cerrar la modal al hacer click en el fondo (fuera del contenido)
        modal.addEventListener('click', function(event) {
            // Solo si el click es directamente sobre el fondo del modal (el elemento 'modal')
            if (event.target === this) {
                closeModal();
            }
        });
    } else {
        console.error("Error FATAL: No se encontró el elemento con ID 'productModal'. Asegúrate de que esté en tu index.html.");
    }
});
