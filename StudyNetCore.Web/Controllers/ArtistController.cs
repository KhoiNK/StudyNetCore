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
    public class ArtistController: Controller
    {
        IArtistRepository _repo;
        public ArtistController(IArtistRepository artistrepo)
        {
            _repo = artistrepo;
        }

        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                var datas = _repo.Get().Result;
                
                return Ok(datas.Translate<Artist, ArtistViewModel>());
            }
            catch (Exception e)
            {
                return BadRequest(e.StackTrace);
            }
        }

        public IActionResult GetDetail(int id)
        {
            try
            {
                var data = _repo.GetDetail(id);
                var artist = new ArtistViewModel();
                artist = data.Result.Translate<Artist, ArtistViewModel>();
                foreach(var image in data.Result.Image)
                {
                    artist.Images.ToList().Add(image.Translate<Image, ImageViewModel>());
                }
                return Ok(artist);
            }
            catch(Exception e)
            {
                return BadRequest(e.StackTrace);
            }
        }
    }
}
