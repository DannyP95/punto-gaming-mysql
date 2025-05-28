const {Producto, Categoria} = require('../models')

const productosController = {
    lista: async(req, res) => {
        try {
            const productos = await Producto.findAll({include: {
            model: Categoria,
            as: 'Categoria'
            }});
            res.render('productos', {productos});
        } catch (error) {
            res.status(500).send('Error al mostrar el index');
        }
    },

    // nuevo: async(req, res) => {
    //     try {
    //         const productos = await Producto.findAll({include: {
    //         model: Categoria,
    //         as: 'Categoria'
    //         }});
    //         res.render('productos', {crearProducto});
    //     } catch (error) {
    //         res.status(500).send('Error al mostrar el index');
    //     }
    // },

  crear: async (req, res) => {
    try {
      const categorias = await Categoria.findAll();
      res.render('productos/crear', { categorias });
    } catch (error) {
      res.status(500).send('Error al cargar el formulario de creación');
    }
  },

  nuevo: async (req, res) => {
    const { nombre, marca, descripcion, precio, categoria_id } = req.body;
    const imagen = req.file ? req.file.filename : "image-not-found.png";
    try {
      await Producto.create({ nombre, marca, descripcion, precio, imagen, categoria_id });
      res.redirect('/productos');
    } catch (error) {
      res.status(500).send('Error al guardar el producto');
    }
  },

  editar: async (req, res) => {
    const { id } = req.params;
    try {
      const producto = await Producto.findByPk(id);
      const categorias = await Categoria.findAll();
      res.render('productos/editar', { producto, categorias });
    } catch (error) {
      res.status(500).send('Error al cargar el formulario de edición');
    }
  },

  actualizar: async (req, res) => {
    const { id } = req.params;
    const { nombre, descripcion, marca, precio, categoria_id } = req.body;
    const imagen = req.file ? req.file.filename : "image-not-found.png";
    try {
      const producto = await Producto.findByPk(id);
      producto.nombre = nombre;
      producto.marca = marca;
      producto.descripcion = descripcion;
      producto.precio = precio;
      producto.imagen = imagen;
      producto.categoria_id = categoria_id;
      await producto.save();
      res.redirect('/productos');
    } catch (error) {
      res.status(500).send('Error al actualizar el producto');
    }
  },

  eliminar: async (req, res) => {
    const { id } = req.params;
    try {
      const producto = await Producto.findByPk(id);
      const categorias = await Categoria.findAll({include: {
            model: Categoria,
            as: 'Categoria'
            }});
      res.render('productos/eliminar', { producto, categorias });
    } catch (error) {
      res.status(500).send('Error al mostrar el formulario de eliminar');
    }
  },

  eliminarView: async (req, res) => {
  const { id } = req.params;
  try {
    const producto = await Producto.findByPk(id);
    await Producto.destroy({ where: { id } });
    res.render('productos/eliminar', { producto });
  } catch (error) {
    res.status(500).send('Error al eliminar el producto');
  }
}
}

module.exports = productosController

