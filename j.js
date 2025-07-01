let certi = document.querySelectorAll(".certi");

certi.forEach(cert => {
    cert.addEventListener("click", () => {
        // Alterna la clase "certiclick" para la imagen seleccionada
        cert.classList.toggle("certiclick");

        if (cert.classList.contains("certiclick")) {
            // Si la imagen tiene la clase "certiclick", remueve el filtro de esa imagen
            cert.style.filter = 'none';

            // Aplica el filtro de blur a todas las demás imágenes
            certi.forEach(el => {
                if (el !== cert) {
                    el.style.filter = 'blur(20px)';
                    el.classList.remove("certiclick");
                }
            });
        } else {
            // Si se desactiva la clase "certiclick", remueve el blur de todas las imágenes
            certi.forEach(el => {
                el.style.filter = '';
            });
        }
    });
});
