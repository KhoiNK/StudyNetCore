using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using StudyNetCore.Repository.Interfaces;
using StudyNetCore.Repository.Models;
using StudyNetCore.Web.Provider;
using System;
using System.IdentityModel.Tokens.Jwt;

namespace StudyNetCore.Web.Controllers
{
    [Route("api/[controller]/[action]")]
    public class UserController : Controller
    {
        IUserInterface _repo;
        public UserController(IUserInterface userInterface)
        {
            _repo = userInterface;
        }

        [HttpPost]
        [ActionName("Login")]
        [AllowAnonymous]
        [EnableCors("AllowAllOrigins")]
        public IActionResult Login([FromBody] User user)
        {
            var userLogin = _repo.GetUser(user.UserName, user.Password);
            if (userLogin != null)
            {
                var result = GrantToken.GenerateClientToken(user);
                if (result != null)
                {
                    var token = new JwtSecurityTokenHandler().WriteToken(result);
                    var response = new
                    {
                        access_token = token,
                        expires_in = (int)TimeSpan.FromMinutes(6000).TotalSeconds,
                        userName = user.UserName
                    };
                    return Ok(response);
                }
            }
            return BadRequest();
        }

        //[Authorize]
        public IActionResult Get()
        {
            try
            {
                var users = _repo.GetAll();
                return Ok(users);
            }
            catch (Exception e)
            {
                return BadRequest(e.StackTrace);
            }
        }
    }
}
