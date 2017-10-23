using StudyNetCore.Repository.Models;
using System;
using System.Collections.Generic;
using System.Linq;

namespace StudyNetCore.Repository.Interfaces
{
    public interface IImageRepository
    {
        IEnumerable<Image> GetImage(int pageIndex, int pageSize);
        int AddImage(Image data);
        Boolean UpdateImage(Image data);
        Boolean RemoveImage(int id);
        Image GetDetail(int id);
    }
}
