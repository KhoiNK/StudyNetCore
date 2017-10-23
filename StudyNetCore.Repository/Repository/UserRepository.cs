using StudyNetCore.Repository.Interfaces;
using StudyNetCore.Repository.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace StudyNetCore.Repository.Repository
{
    public class UserRepository : IUserInterface
    {
        private readonly ImageContext _db;

        public UserRepository(ImageContext imageEntities)
        {
            _db = imageEntities;
        }

        public User GetUser(string username, string password)
        {
            try
            {
                var result = _db.User.Where(x => (x.UserName.ToLower().Equals(username.ToLower())) && (x.Password.Equals(password))).SingleOrDefault();
                return result;
            }
            catch (Exception e)
            {
                throw e;
            }
        }

        public IEnumerable<User> GetAll()
        {
            try
            {
                var result = _db.User.ToList();
                return result;
            }
            catch (Exception e)
            {
                Console.WriteLine(e.StackTrace);
                return null;
            }
        }
    }
}
