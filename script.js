let articulos = [
    { codigo: 1, descripcion: 'papas', precio: 10.55 },
    { codigo: 2, descripcion: 'manzanas', precio: 12.10 },
    { codigo: 3, descripcion: 'melon', precio: 52.30 },
    { codigo: 4, descripcion: 'cebollas', precio: 17.00 },
    { codigo: 5, descripcion: 'calabaza', precio: 20.00 },
];

function renderizarTabla() {
    const tbody = document.getElementById('articulosBody');
    tbody.innerHTML = '';
    
    articulos.forEach(articulo => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${articulo.codigo}</td>
            <td>${articulo.descripcion}</td>
            <td>${articulo.precio.toFixed(2)}</td>
            <td><button onclick="borrar(${articulo.codigo})">Borrar</button></td>
            <td><button onclick="seleccionar(${articulo.codigo})">Seleccionar</button></td>
        `;
        tbody.appendChild(tr);
    });
}

function agregar() {
    const codigo = parseInt(document.getElementById('codigo').value);
    const descripcion = document.getElementById('descripcion').value;
    const precio = parseFloat(document.getElementById('precio').value);

    if (codigo && descripcion && precio) {
        if (articulos.some(a => a.codigo === codigo)) {
            alert('Ya existe un artículo con ese código');
            return;
        }
        articulos.push({ codigo, descripcion, precio });
        limpiarFormulario();
        renderizarTabla();
    } else {
        alert('Por favor, complete todos los campos');
    }
}

function modificar() {
    const codigo = parseInt(document.getElementById('codigo').value);
    const descripcion = document.getElementById('descripcion').value;
    const precio = parseFloat(document.getElementById('precio').value);

    const index = articulos.findIndex(a => a.codigo === codigo);
    if (index !== -1) {
        articulos[index] = { codigo, descripcion, precio };
        limpiarFormulario();
        renderizarTabla();
    } else {
        alert('No existe un artículo con ese código');
    }
}

function borrar(codigo) {
    articulos = articulos.filter(a => a.codigo !== codigo);
    renderizarTabla();
}

function seleccionar(codigo) {
    const articulo = articulos.find(a => a.codigo === codigo);
    if (articulo) {
        document.getElementById('codigo').value = articulo.codigo;
        document.getElementById('descripcion').value = articulo.descripcion;
        document.getElementById('precio').value = articulo.precio.toFixed(2);
    }
}

function limpiarFormulario() {
    document.getElementById('codigo').value = '';
    document.getElementById('descripcion').value = '';
    document.getElementById('precio').value = '';
}

// Inicializar la tabla al cargar la página
window.onload = renderizarTabla;