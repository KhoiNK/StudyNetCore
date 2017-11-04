using StudyNetCore.Repository.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace StudyNetCore.Repository.Interfaces
{
    public interface IImageRepository
    {
        Task<IEnumerable<Image>> GetImage(int pageIndex, int pageSize);
        int AddImage(Image data);
        Boolean UpdateImage(Image data);
        Boolean RemoveImage(int id);
        Artist GetDetail(int id);
    }
}
