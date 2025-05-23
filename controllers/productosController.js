const fs = require('fs');
const path = require('path');

const productosFilePath = path.join(__dirname, '../database/productos.json');
const productos = JSON.parse(fs.readFileSync(productosFilePath, 'utf-8'));

const productosController = {

    mostrarProductos: (req, res) => {
        res.render('productos', { productos });
    },
    
    editar: (req, res) => {
        const id = req.params.id;
        const producto = productos.find(prod => prod.id == id)
        res.render('editarProducto', {producto})
    },

    nuevo:(req, res) => {
        res.render('crearProducto', { productos });
    },

    crear:(req, res) =>{
       const {nombre, marca, categoria, descripcion, precio} = req.body;
       const imagen = req.file ? req.file.filename : "image-not-found.png";
       const nuevoProduct = {
        id: productos.length + 1,
        nombre,
        marca,
        categoria,
        descripcion,
        precio,
        imagen
       };

       try{
        productos.push(nuevoProduct);
        fs.writeFileSync(productosFilePath, JSON.stringify(productos, null, " "));
        res.redirect("/productos")
       }
       catch(err){
        console.log("Error al guardar el producto")
        console.error(err)
        res.status(500).send("Error de servidor")
       }
    },

    actualizar: (req, res) =>{
        const id = req.params.id;
        const productoIndex = productos.findIndex(prod => prod.id == id);
        
        const {nombre, marca, categoria, descripcion, precio} = req.body;
        const imagen = req.file ? req.file.filename : productos[productoIndex].imagen;

        if(productoIndex !== -1){
            productos[productoIndex] = 
            {
                id: Number(id), 
                nombre, 
                marca, 
                categoria,
                descripcion, 
                precio, 
                imagen
            };
            try{
                fs.writeFileSync(productosFilePath, JSON.stringify(productos, null, " "));
                res.redirect("/")
            }
            catch(err){
            console.log("Error al editar el producto")
            console.error(err)
            res.status(500).send("Error de servidor")
            }
        } else{
            res.status(400).send("Producto no encontrado")
        }
    },

    eliminarView: (req, res) => {
        const id = req.params.id;
        const producto = productos.find(prod => prod.id == id);
        res.render('eliminarProducto', { producto });
        },

    eliminar: (req, res) => {
        const id = req.params.id;
        const productoIndex = productos.findIndex(prod => prod.id == id);
        
        if (productoIndex !== -1) {
            const productoEliminado = productos[productoIndex]; 
            productos.splice(productoIndex, 1);

            try {
                fs.writeFileSync(productosFilePath, JSON.stringify(productos, null, " "));
                res.render("eliminarProducto", { producto: productoEliminado });

            } catch (err) {
                console.log("Error al eliminar el producto");
                console.error(err);
                res.status(500).send("Error al eliminar el producto");
            }}
    }
}


module.exports = { productosController };

