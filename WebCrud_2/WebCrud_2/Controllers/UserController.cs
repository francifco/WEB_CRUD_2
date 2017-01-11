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

        public JsonResult LogIn(string username, string password)
        {
            using (UserEntities userModel = new UserEntities())
            {
                var objectUser = from user in userModel.pusers
                                 where user.username == username && user.password == password
                                 select user;

                return Json((objectUser), JsonRequestBehavior.AllowGet);
            }

        }


    }
}