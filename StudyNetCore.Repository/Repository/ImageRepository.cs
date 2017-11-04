using StudyNetCore.Repository.Interfaces;
using StudyNetCore.Repository.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;

namespace StudyNetCore.Repository.Repository
{
    public class ImageRepository : IImageRepository
    {
        private readonly ImageContext _db;

        public ImageRepository(ImageContext imageEntities)
        {
            _db = imageEntities;
        }

        public async Task<IEnumerable<Image>> GetImage(int pageIndex, int pageSize)
        {
            
            var skipped = (pageIndex - 1) * pageSize;
            var images = await _db.Image.Include("Artist").OrderBy(x => x.Id).Skip(skipped).Take(pageSize).ToListAsync();
            return images;
        }

        public int AddImage(Image data)
        {
            var image = new Image();
            image = data;
            var newimage = _db.Image.Add(image);
            _db.SaveChanges();
            return newimage.Entity.Id;
        }

        public Boolean UpdateImage(Image data)
        {
            var image = _db.Image.Where(x => x.Id == data.Id).SingleOrDefault();
            image.ImgPath = data.ImgPath;
            image.Name = data.Name;
            image.Price = data.Price;
            image.Width = data.Width;
            image.Height = data.Height;
            image.ArtistId = data.ArtistId;
            image.Description = data.Description;
            _db.SaveChanges();
            return true;
        }

        public Boolean RemoveImage(int id)
        {
            var image = _db.Image.Where(x => x.Id == id).SingleOrDefault();
            if (image != null)
            {
                _db.Image.Remove(image);
                _db.SaveChanges();
                return true; 
            }
            return false;
        }

        public Image GetDetail(int id)
        {
            var image = _db.Image.Include("Artist").Where(x => x.Id == id).SingleOrDefault();
            if (image != null)
            {
                return image;
            }
            else return null;
        }
    }
}
