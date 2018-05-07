/**
 * AlumnoController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

var cont = 0;
module.exports = {
  list: async function (req, res) {

    var alumnos = await Alumno.find({});

    res.view('pages/test', {a: alumnos});
  },
  add: async function (req, res){

    var parm = req.allParams()
    var alumno = {
      nombre: parm.nombre,
      apellido: parm.apellido,
      dni: parm.dni,
      edad: parm.edad,
    };

    res.send(JSON.stringify(req.allParams()));

    var datos = await Alumno.create(alumno);

    var alumnos = await Alumno.find({});

    res.view('pages/test', {a: alumnos});
  },

  buscar: async function (req, res) {

    var alumnos = await Alumno.find({nombre: req.allParams().nombre});

    res.view('pages/test', {a: alumnos});
  },
};

