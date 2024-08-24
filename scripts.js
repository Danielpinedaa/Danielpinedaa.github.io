document.addEventListener('DOMContentLoaded', () => {
    const btnPagar = document.getElementById('btn-pagar');
    
    btnPagar.addEventListener('click', () => {
        // Obtener los productos del carrito
        const carritoItems = document.querySelectorAll('.carrito-item');
        let mensaje = 'Hola Necesito el siguiente pedido:\n\n';
        
        carritoItems.forEach(item => {
            const titulo = item.querySelector('.carrito-item-titulo').textContent;
            const cantidad = item.querySelector('.carrito-item-cantidad').value;
            const precio = item.querySelector('.carrito-item-precio').textContent;
            mensaje += `Producto: ${titulo}\nCantidad: ${cantidad}\nPrecio: ${precio}\n\n`;
        });
        
        const total = document.querySelector('.carrito-precio-total').textContent;
        mensaje += `Total: ${total}`;
        
        // Verificar el mensaje en la consola
        console.log(mensaje);
        
        // Codificar el mensaje para la URL
        const mensajeCodificado = encodeURIComponent(mensaje);
        const numeroWhatsApp = '+50255658072';
        const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensajeCodificado}`;
        
        // Redirigir a WhatsApp
        window.open(urlWhatsApp, '_blank');
    });
});
