using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using WebCrud_2.Models;

namespace WebCrud_2.Controllers
{
    public class UserController : Controller
    {
        // GET: User
        public ActionResult Index()
        {
            return View();
        }

        /// <summary>
        /// Metodo responsable del inicio de la autentificacion de usuario.
        /// </summary>
        /// <param name="username">string: nombre de usuario</param>
        /// <param name="password">string: clave del usuario</param>
        /// <returns>JSONObjet: objeto respresentante del usuario.</returns>
        public JsonResult LogIn(puser userEntity)
        {
            using (UserEntities userModel = new UserEntities())
            {
                var objectUser = from user in userModel.pusers
                                 where user.username == userEntity.username && user.password == userEntity.password
                                 select user;

                return Json(objectUser.Single()); 
            }
        }


    }
}