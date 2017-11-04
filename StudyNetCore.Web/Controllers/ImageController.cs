using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
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
        [EnableCors("AllowAllOrigins")]
        public IActionResult Get(int id)
        {
            int pageSize = 10;
            try
            {
                var images = _repo.GetImage(id, pageSize).Result.Translate<Image, ImageViewModel>();
                return Ok(images);
            }
            catch (Exception e)
            {
                return BadRequest(e.StackTrace);
            }
        }

        [HttpGet]
        [AllowAnonymous]
        public async Task<IActionResult> GetDetail(int id)
        {
            try
            {
                var image = Task.Factory.StartNew(() =>
                {
                    var artistRepo = _repo.GetDetail(id);
                    var artist = artistRepo.Translate<Artist, ArtistViewModel>();
                    artist.Images = artistRepo.Image.Translate<Image, ImageViewModel>();
                    return artist;
                });
                return Ok
                    (await image);
            }
            catch (Exception e)
            {
                return BadRequest(e.StackTrace);
            }
        }

        [HttpPatch]
        [Authorize]
        public async Task<IActionResult> Patch([FromBody] ImageViewModel data)
        {
            try
            {
                var result = Task.Factory.StartNew(() =>
                {
                    return _repo.UpdateImage(data.Translate<ImageViewModel, Image>());
                });
                return Ok(await result);
            }
            catch (Exception e)
            {
                return BadRequest(e.StackTrace);
            }
        }

        [HttpDelete]
        [Authorize]
        public async Task<IActionResult> Delete(int id)
        {
            try
            {
                var result = Task.Factory.StartNew(() =>
                {
                    return _repo.RemoveImage(id);
                });
                return Ok(await result);
            }
            catch (Exception e)
            {
                return BadRequest(e.StackTrace);
            }
        }

        [HttpPost]
        [Authorize]
        public IActionResult Post([FromBody] ImageViewModel data)
        {
            try
            {
                return Ok(_repo.AddImage(data.Translate<ImageViewModel, Image>()));
            }
            catch (Exception e)
            {
                return BadRequest(e.StackTrace);
            }
        }
    }
}
