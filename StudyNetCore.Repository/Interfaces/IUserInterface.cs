using StudyNetCore.Repository.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace StudyNetCore.Repository.Interfaces
{
    public interface IUserInterface
    {
        User GetUser(string username, string password);
        IEnumerable<User> GetAll();
    }
}
