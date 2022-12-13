const precioTicket= 200;

function resumir(){
    var cantidadTicket= document.getElementById('Cantidad').value;
    var descuento= document.getElementById('Categoria').value;
    var precio= (cantidadTicket*(precioTicket-((precioTicket*descuento)/100)));
    document.getElementById('compraTotal').value= 'Total a pagar: $' + precio;
}