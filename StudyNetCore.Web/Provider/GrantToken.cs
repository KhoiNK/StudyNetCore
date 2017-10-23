using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using StudyNetCore.Repository.Models;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace StudyNetCore.Web.Provider
{
    public class GrantToken
    {
        public static JwtSecurityToken GenerateClientToken(User user)
        {
            try
            {
                var claims = new[]
                {
                    new Claim(ClaimTypes.Name, user.UserName),
                };

                var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(Constant.Values.Key));
                var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

                var token = new JwtSecurityToken(Constant.Values.Issuer,
                  Constant.Values.Issuer,
                  claims,
                  expires: DateTime.Now.AddMinutes(30),
                  signingCredentials: creds);

                return token;
            }
            catch (Exception e)
            {
                Console.WriteLine(e.StackTrace);
                return null;
            }
        }
    }
}
