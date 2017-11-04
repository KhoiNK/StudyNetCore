using StudyNetCore.Repository.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace StudyNetCore.Repository.Interfaces
{
    public interface IArtistRepository
    {
        Task<IEnumerable<Artist>> Get();
        Task<Artist> GetDetail(int id);
    }
}
