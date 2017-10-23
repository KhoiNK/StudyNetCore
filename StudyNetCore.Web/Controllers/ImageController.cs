using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using StudyNetCore.Repository.Interfaces;
using StudyNetCore.Repository.Models;
using StudyNetCore.Web.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace StudyNetCore.Web.Controllers
{   
    [Route("api/[controller]/[action]/{id?}")]
    public class ImageController : Controller
    {
        IImageRepository _repo;
        public ImageController(IImageRepository imageRepo)
        {
            _repo = imageRepo;
        }

        [HttpGet]
        [AllowAnonymous]
        public async Task<IActionResult> Get(int id)
        {
            int pageSize = 10;
            try {
                var imageTask = Task.Factory.StartNew(() =>
                {
                    return _repo.GetImage(id, pageSize);
                });
                var loadedImages = await imageTask;
                var images = Translator.Translate<Image, ImageViewModel>(loadedImages);
                return Ok(images);
            }
            catch (Exception e)
            {
                return BadRequest(e.StackTrace);
            }
        }
    }
}
