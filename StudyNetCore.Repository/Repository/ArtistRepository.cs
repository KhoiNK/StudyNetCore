using Microsoft.EntityFrameworkCore;
using StudyNetCore.Repository.Interfaces;
using StudyNetCore.Repository.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace StudyNetCore.Repository.Repository
{
    public class ArtistRepository : IArtistRepository
    {
        private readonly ImageContext _db;

        public ArtistRepository(ImageContext image)
        {
            _db = image;
        }

        public async Task<IEnumerable<Artist>> Get()
        {
            return await _db.Artist.Include("Image").ToListAsync();
        }

        public async Task<Artist> GetDetail(int id)
        {
            return await _db.Artist.Include("Image").Where(x => x.Id == id).SingleOrDefaultAsync();
        }

    }
}
